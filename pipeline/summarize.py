"""Per-frame summaries the browser turns into sound.

    python pipeline/summarize.py sst            # legend mode
    python pipeline/summarize.py sst --grids    # also write explore-mode value grids
    python pipeline/summarize.py lightning      # flash mode

Output in web/public/data/<name>/:
    summary.bin   uint8, shape (frames, 4 bands, 256 columns, 2):
                  [..., 0] value, quantized 0-255 over [vmin, vmax]
                  [..., 1] valid share of the cell, 0-255 (0 = no data, not 0 °C)
    summary.json  layout and value range
    grids/NNNNN.png  (optional) 256x128 explore grid; 0 = no data, 1-255 = value

Means are weighted by cos(latitude) and use valid pixels only.
"""

import argparse
import json
import subprocess
import sys
from pathlib import Path

import numpy as np
from PIL import Image

from legend import LegendLUT, load_rgb
from manifest import DATASETS, OUT, RAW, WORK

COLS = 256
BANDS = 4  # 90-45S, 45-0S, 0-45N, 45-90N
BAND_EDGES = [-90, -45, 0, 45, 90]
GRID = (128, 256)  # rows, cols


def frame_files(name: str) -> list[Path]:
    spec = DATASETS[name].get("frames", {})
    folder = (RAW if "url" in spec else WORK) / name / "frames"
    files = sorted(p for p in folder.glob("*") if p.suffix.lower() in (".tif", ".tiff", ".png"))
    if not files:
        sys.exit(f"no frames in {folder}. Download (SST) or extract (others) first.")
    return files


def row_weights(h: int) -> np.ndarray:
    lat = 90 - (np.arange(h) + 0.5) * 180 / h        # row 0 = north
    return np.cos(np.radians(lat)).astype(np.float32)


def cell_stats(values: np.ndarray, valid: np.ndarray):
    """Return (mean, share) arrays of shape (BANDS, COLS). Band 0 = south."""
    h, w = values.shape
    wr = row_weights(h)[:, None] * valid
    vw = values * wr
    # Sum into (BANDS, COLS) cells. Rows are north-first, so flip to put south in band 0.
    def cells(a):
        return a.reshape(BANDS, h // BANDS, COLS, w // COLS).sum(axis=(1, 3))[::-1]
    full = np.broadcast_to(row_weights(h)[:, None], (h, w))
    wsum, vsum, total = cells(wr), cells(vw), cells(full)
    mean = np.divide(vsum, wsum, out=np.zeros_like(vsum), where=wsum > 0)
    return mean, wsum / total


def grid_png(values, valid, vmin, vmax) -> Image.Image:
    h, w = values.shape
    gh, gw = GRID
    v = values.reshape(gh, h // gh, gw, w // gw)
    m = valid.reshape(gh, h // gh, gw, w // gw)
    n = m.sum(axis=(1, 3))
    s = (v * m).sum(axis=(1, 3))
    mean = np.divide(s, n, out=np.zeros_like(s), where=n > 0)
    q = 1 + np.round((mean - vmin) / (vmax - vmin) * 254)
    return Image.fromarray(np.where(n > 0, np.clip(q, 1, 255), 0).astype(np.uint8))


def flash_mask(rgb: np.ndarray, rule: dict) -> np.ndarray:
    """Yellow flash dots only; grey latitude lines and land are excluded."""
    r, g, b = (rgb[..., k].astype(np.int16) for k in range(3))
    return ((r >= rule.get("r_min", 100)) & (g >= rule.get("g_min", 85))
            & (b <= rule.get("b_max", 90)) & (r - b >= rule.get("rb_min", 60)))


def dilate(mask: np.ndarray) -> np.ndarray:
    out = mask.copy()
    out[1:] |= mask[:-1]; out[:-1] |= mask[1:]
    out[:, 1:] |= mask[:, :-1]; out[:, :-1] |= mask[:, 1:]
    return out


def movie_frames(name: str, limit: int | None):
    """Every Nth frame of the source movie, decoded by ffmpeg straight into memory."""
    from media import movie_path, probe_movie
    path = movie_path(name)
    info = probe_movie(path)
    w, h = info["width"], info["height"]
    every = DATASETS[name]["frames"].get("every", 1)
    vf = f"select=not(mod(n\\,{every}))"
    if limit:
        vf += f",select=lt(n\\,{limit})"
    proc = subprocess.Popen(
        ["ffmpeg", "-v", "error", "-i", str(path), "-vf", vf, "-vsync", "vfr",
         "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE)
    size = w * h * 3
    i = 0
    while True:
        buf = proc.stdout.read(size)
        if len(buf) < size:
            break
        yield f"movie frame {i * every}", np.frombuffer(buf, np.uint8).reshape(h, w, 3)
        i += 1
    proc.wait()


def summarize(name: str, grids: bool, limit: int | None) -> None:
    ds = DATASETS[name]
    if ds.get("frames", {}).get("from_movie"):
        frames = movie_frames(name, limit)
    else:
        frames = ((f.name, load_rgb(f)) for f in frame_files(name)[:limit])
    out = OUT / name
    out.mkdir(parents=True, exist_ok=True)
    mode = ds["mode"]

    if mode == "legend":
        lut = LegendLUT.from_dataset(ds)
        vmin, vmax = lut.vmin, lut.vmax
    elif mode == "flashes":
        # Value = share of a cell newly lit this frame. It rarely tops a few percent, so
        # quantize 0..flash_vmax (default 5%) instead of 0..1 to keep resolution.
        vmin, vmax, prev = 0.0, ds.get("flash_vmax", 0.05), None
    else:
        sys.exit(f"mode '{mode}' not implemented yet (TODO for {name})")

    rows = []
    if grids:
        (out / "grids").mkdir(exist_ok=True)
    rgb_rule = ds.get("flash_rgb", {})

    for i, (label, rgb) in enumerate(frames):
        if rgb.shape[1] != 2 * rgb.shape[0]:
            sys.exit(f"{label} is {rgb.shape[1]}x{rgb.shape[0]}, not 2:1")
        if rgb.shape[1] % COLS or rgb.shape[0] % GRID[0]:
            rgb = np.asarray(Image.fromarray(rgb).resize((2048, 1024), Image.LANCZOS))

        if mode == "legend":
            values, valid = lut.map(rgb)
        else:  # flashes: share of each cell lit by a *new* strike since the last frame
            lit = flash_mask(rgb, rgb_rule)
            # Ignore dots that were already lit nearby last frame (1 px of compression jitter).
            new = lit if prev is None else lit & ~dilate(prev)
            prev = lit
            values, valid = new.astype(np.float32), np.ones(lit.shape, bool)

        mean, share = cell_stats(values, valid)
        row = np.zeros((BANDS, COLS, 2), dtype=np.uint8)
        row[..., 0] = np.clip(np.round((mean - vmin) / (vmax - vmin) * 255), 0, 255)
        row[..., 1] = np.clip(np.round(share * 255), 0, 255)
        rows.append(row)
        if grids:
            grid_png(values, valid, vmin, vmax).save(out / "grids" / f"{i:05d}.png")
        if i % 100 == 0:
            extra = f"new flashes {values.sum():.0f} px" if mode == "flashes" else f"valid {valid.mean():.0%}"
            print(f"  {i + 1}  {label}  {extra}", flush=True)

    result = np.stack(rows)
    result.tofile(out / "summary.bin")
    meta = {"frames": len(rows), "bands": BANDS, "cols": COLS, "bandEdges": BAND_EDGES,
            "vmin": vmin, "vmax": vmax, "units": ds["units"], "mode": mode,
            "layout": "frames,bands(south first),cols(lon -180..180),[value,share]",
            "grids": grids}
    (out / "summary.json").write_text(json.dumps(meta, indent=2))
    print(f"wrote {out / 'summary.bin'} ({result.nbytes / 1e3:.0f} KB)")


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("dataset", choices=sorted(DATASETS))
    p.add_argument("--grids", action="store_true", help="also write explore-mode grids")
    p.add_argument("--limit", type=int, help="only the first N frames (quick checks)")
    a = p.parse_args()
    summarize(a.dataset, a.grids, a.limit)


if __name__ == "__main__":
    main()
