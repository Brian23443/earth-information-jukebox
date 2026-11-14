"""Static land layer + video color correction.

    python pipeline/landlayer.py sst

Why: land never changes between frames, but the playback video spends almost no bits
on it, so flat land turns into visible 8-16 px blocks with a faint color tint. And 4:2:0
video dulls the thin colored flow lines. So the globe:
  - draws land from one sharp still through a coastline mask (no video artifacts), and
  - applies a fitted color matrix to the video so it matches NASA's frames (and doesn't
    visibly jump in color when it switches to a full-resolution still).

Output in web/public/data/<name>/:
  land.jpg        land pixels from a 6840 still (ocean blacked out)
  landmask.png    8-bit mask, 255 = land, soft 1-2 px coastline
  colorfix.json   {"2048": [...], "4096": [...]}: 3x4 matrices in display (sRGB) space
"""

import argparse
import json
import subprocess
import sys

import numpy as np
from PIL import Image, ImageFilter

from manifest import DATASETS, OUT, WORK

Image.MAX_IMAGE_PIXELS = None


def srgb_to_linear(c):
    c = c / 255.0
    return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)


def land_mask(stills):
    """Land = grey (low saturation, mid brightness) in nearly every sampled still."""
    votes = None
    for path in stills:
        a = np.asarray(Image.open(path).convert("RGB")).astype(np.int16)
        mx, mn = a.max(2), a.min(2)
        grey = ((mx - mn) < 14) & (mx > 38)
        votes = grey.astype(np.uint8) if votes is None else votes + grey
    land = votes >= int(0.9 * len(stills))
    img = Image.fromarray((land * 255).astype(np.uint8))
    # Close small holes inside land (dark mountain shadows and river lines fail the grey
    # test), remove speckle (isolated grey pixels in the ocean), then soften the coastline.
    img = img.filter(ImageFilter.MaxFilter(9)).filter(ImageFilter.MinFilter(9))
    img = img.filter(ImageFilter.MedianFilter(5)).filter(ImageFilter.GaussianBlur(0.8))
    return img


def video_frame(path, n, size):
    """Decode frame n exactly as a browser would (BT.709, limited range)."""
    raw = subprocess.run(
        ["ffmpeg", "-v", "error", "-i", str(path), "-vf",
         f"select=eq(n\\,{n}),scale={size[0]}:{size[1]}:in_color_matrix=bt709:in_range=tv:out_range=pc,format=rgb24",
         "-vsync", "vfr", "-frames:v", "1", "-f", "rawvideo", "-"],
        check=True, capture_output=True).stdout
    return np.frombuffer(raw, np.uint8).reshape(size[1], size[0], 3)


def fit_colorfix(video, ref, lines):
    """Least-squares 3x3 matrix in display (sRGB) space mapping video colors onto NASA's.

    Fitted on flow-line pixels with NO offset term, so black stays black: an offset
    fitted on bright lines alone added +9/+17/+28 and tinted the background blue.
    A linear-light fit matched averages but drifted the visible colors (blue 37 -> 44).
    Returned as 3x4 with a zero last column, the format the shader expects.
    """
    v = video.astype(np.float64)[lines] / 255
    r = ref.astype(np.float64)[lines] / 255
    M, *_ = np.linalg.lstsq(v, r, rcond=None)  # (3, 3)
    before = np.abs(v - r).mean() * 255
    after = np.abs(np.clip(v @ M, 0, 1) - r).mean() * 255
    return np.hstack([M.T, np.zeros((3, 1))]), before, after


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("dataset", choices=sorted(DATASETS))
    a = p.parse_args()
    out = OUT / a.dataset
    hires = json.loads((out / "hires.json").read_text())
    ext = hires.get("ext", "jpg")
    frames = hires["movieFrames"]
    sample = [out / "hires" / f"{m:05d}.{ext}" for m in frames[:: max(1, len(frames) // 8)]]

    print(f"land mask from {len(sample)} stills ...")
    mask = land_mask(sample)
    mask.save(out / "landmask.png", optimize=True)
    m = np.asarray(mask) > 127
    print(f"  land = {m.mean():.1%} of the map")

    base = np.asarray(Image.open(sample[0]).convert("RGB")).copy()
    base[~m] = 0
    Image.fromarray(base).save(out / "land.jpg", quality=90, subsampling=0, optimize=True)

    # Color fit on one keyframe: ocean pixels that are clearly part of a flow line.
    k = frames[len(frames) // 2]
    ref_full = Image.open(out / "hires" / f"{k:05d}.{ext}").convert("RGB")
    fixes = {}
    for res, name in ((2048, "web.mp4"), (4096, "web4096.mp4"), (6840, "web6840.mp4")):
        path = out / name
        if not path.exists():
            continue
        size = (res, res // 2) if res != 6840 else (6840, 3420)
        ref = np.asarray(ref_full.resize(size, Image.LANCZOS))
        vid = video_frame(path, k, size)
        small_mask = np.asarray(mask.resize(size, Image.BILINEAR)) < 40
        ocean = small_mask & (ref.max(2) > 60)
        M, before, after = fit_colorfix(vid, ref, ocean)
        fixes[str(res)] = [round(float(x), 5) for x in M.ravel()]
        print(f"  {name}: mean error on flow lines {before:.2f} -> {after:.2f} (0-255) after color fix")
    (out / "colorfix.json").write_text(json.dumps(fixes, indent=1))
    print(f"wrote land.jpg, landmask.png, colorfix.json to {out}")


if __name__ == "__main__":
    sys.exit(main())
