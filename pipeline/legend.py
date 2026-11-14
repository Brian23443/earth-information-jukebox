"""Colors back to values: nearest legend color in CIELAB, with a reject cutoff.

As a library:
    lut = LegendLUT(stops, vmin, vmax, reject_cutoff=18)
    values, valid = lut.map(rgb_uint8_array)     # float32 values, bool mask

From the command line:
    # Read colors off a colorbar image along a line, to build/verify the stops
    python pipeline/legend.py sample data/raw/sst/sst_ecco2_cbar.png \
        --line 10 60 300 60 --vmin 0 --vmax 32 --n 9
    # Map one frame and save a grayscale check image + reject mask
    python pipeline/legend.py check sst data/raw/sst/frames/23000.tif
"""

import argparse
import json
import sys
from pathlib import Path

import numpy as np
from PIL import Image
from skimage.color import rgb2lab

BITS = 5  # quantize RGB to 5 bits/channel -> 32,768-entry lookup table


class LegendLUT:
    """normalize_brightness: the SST flow lines fade to black along their trails, so
    scale every pixel to full brightness before the lookup (the legend colors all have
    a max channel of ~250). Pixels darker than min_brightness or greyer than
    min_saturation (land, background) are rejected outright."""

    def __init__(self, stops, reject_cutoff: float = 18.0, samples: int = 512,
                 normalize_brightness: bool = False, min_brightness: int = 60,
                 min_saturation: float = 0.35):
        self.normalize = normalize_brightness
        self.min_brightness = min_brightness
        self.min_saturation = min_saturation
        stops = sorted(stops, key=lambda s: s[0])
        sv = np.array([s[0] for s in stops], dtype=np.float32)
        sc = np.array([s[1] for s in stops], dtype=np.float32) / 255.0
        self.vmin, self.vmax = float(sv[0]), float(sv[-1])

        # Dense legend: interpolate the stops in RGB, then compare in Lab.
        vals = np.linspace(self.vmin, self.vmax, samples, dtype=np.float32)
        ramp = np.stack([np.interp(vals, sv, sc[:, c]) for c in range(3)], axis=1)
        ramp_lab = rgb2lab(ramp[None])[0]                      # (samples, 3)

        # Every quantized RGB color -> nearest legend entry.
        levels = (np.arange(1 << BITS, dtype=np.float32) + 0.5) / (1 << BITS)
        r, g, b = np.meshgrid(levels, levels, levels, indexing="ij")
        cube = np.stack([r, g, b], axis=-1).reshape(-1, 3)
        cube_lab = rgb2lab(cube[None])[0]                      # (32768, 3)

        best = np.empty(len(cube_lab), dtype=np.int32)
        dist = np.empty(len(cube_lab), dtype=np.float32)
        for i in range(0, len(cube_lab), 4096):                # chunk to bound memory
            d = np.linalg.norm(cube_lab[i:i + 4096, None, :] - ramp_lab[None], axis=2)
            best[i:i + 4096] = d.argmin(axis=1)
            dist[i:i + 4096] = d.min(axis=1)

        self.value_lut = vals[best]
        self.valid_lut = dist <= reject_cutoff

    def map(self, rgb: np.ndarray):
        rgb = rgb[..., :3]
        keep = None
        if self.normalize:
            f = rgb.astype(np.float32)
            mx, mn = f.max(axis=-1), f.min(axis=-1)
            keep = (mx >= self.min_brightness) & ((mx - mn) >= self.min_saturation * mx)
            rgb = np.clip(f * (255.0 / np.maximum(mx, 1))[..., None], 0, 255)
        q = rgb.astype(np.uint32) >> (8 - BITS)
        idx = (q[..., 0] << (2 * BITS)) | (q[..., 1] << BITS) | q[..., 2]
        valid = self.valid_lut[idx]
        if keep is not None:
            valid = valid & keep
        return self.value_lut[idx], valid

    @classmethod
    def from_dataset(cls, ds: dict) -> "LegendLUT":
        return cls(ds["legend"], ds.get("reject_cutoff", 18.0),
                   normalize_brightness=ds.get("normalize_brightness", False),
                   min_brightness=ds.get("min_brightness", 60),
                   min_saturation=ds.get("min_saturation", 0.35))


def load_rgb(path) -> np.ndarray:
    return np.asarray(Image.open(path).convert("RGB"))


def cmd_sample(path, line, vmin, vmax, n):
    img = load_rgb(path)
    x0, y0, x1, y1 = line
    stops = []
    for t in np.linspace(0, 1, n):
        x, y = round(x0 + t * (x1 - x0)), round(y0 + t * (y1 - y0))
        stops.append([round(vmin + t * (vmax - vmin), 3), [int(c) for c in img[y, x]]])
    print(json.dumps(stops))


def cmd_check(name, frame):
    from manifest import DATASETS, WORK
    ds = DATASETS[name]
    lut = LegendLUT.from_dataset(ds)
    values, valid = lut.map(load_rgb(frame))
    gray = np.where(valid, (values - lut.vmin) / (lut.vmax - lut.vmin) * 255, 0).astype(np.uint8)
    out = WORK / name / "check"
    out.mkdir(parents=True, exist_ok=True)
    Image.fromarray(gray).save(out / f"{Path(frame).stem}_values.png")
    Image.fromarray((valid * 255).astype(np.uint8)).save(out / f"{Path(frame).stem}_valid.png")
    v = values[valid]
    print(f"valid pixels: {valid.mean():.1%}")
    if v.size:
        print(f"values: min {v.min():.1f}  median {np.median(v):.1f}  max {v.max():.1f} {ds['units']}")
    print(f"check images in {out}")


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("sample")
    s.add_argument("image")
    s.add_argument("--line", type=int, nargs=4, required=True, metavar=("X0", "Y0", "X1", "Y1"))
    s.add_argument("--vmin", type=float, required=True)
    s.add_argument("--vmax", type=float, required=True)
    s.add_argument("--n", type=int, default=9)
    c = sub.add_parser("check")
    c.add_argument("dataset")
    c.add_argument("frame")
    a = p.parse_args()
    if a.cmd == "sample":
        cmd_sample(a.image, a.line, a.vmin, a.vmax, a.n)
    else:
        cmd_check(a.dataset, a.frame)


if __name__ == "__main__":
    sys.exit(main())
