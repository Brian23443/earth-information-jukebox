"""Aerosols: split each pixel into the four aerosol types, then summarize.

    python pipeline/aerosols.py aerosols

NASA's NoLabels movie draws four types as translucent colours over a grey-land /
dark-ocean map, and they blend where they overlap (colorbar swatches, sampled):
    black carbon (smoke) 210,94,69   dust 193,154,220   sea salt 133,170,169   sulfate 83,220,52

Method
  1. Background: the per-pixel 5th percentile over ~60 frames spread across the movie
     (the clearest moment each pixel ever has: grey land, dark ocean).
  2. Residual = frame - background (negative clipped to 0).
  3. Non-negative least squares of the residual onto the four swatch colours gives
     how much of each type is there. Precomputed for all 32,768 quantized residuals.

Output in web/public/data/<name>/ (same layout as the other datasets, plus classes):
  summary.bin/json   value = total aerosol (0..1), share = 255 (always valid)
  classes.bin        uint8 [frames][4 bands][256 cols][4 types] mean amount 0..255
  grids/NNNNN.png    256x128 explore grid: 0 = none, else type*64 + strength (0..63),
                     type 0 carbon, 1 dust, 2 sea salt, 3 sulfate
"""

import argparse
import json
import subprocess
import sys

import numpy as np
from PIL import Image
from scipy.optimize import nnls

from manifest import DATASETS, OUT
from media import movie_path, probe_movie
from summarize import BAND_EDGES, BANDS, COLS, GRID, row_weights

TYPES = ["carbon", "dust", "seasalt", "sulfate"]
SWATCH = np.array([[210, 94, 69], [193, 154, 220], [133, 170, 169], [83, 220, 52]], float) / 255
BITS = 5
MIN_TOTAL = 0.08  # below this a pixel counts as clear air


def read_frames(path, w, h, select):
    proc = subprocess.Popen(["ffmpeg", "-v", "error", "-i", str(path), "-vf", select, "-vsync", "vfr",
                             "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE)
    size = w * h * 3
    while True:
        buf = proc.stdout.read(size)
        if len(buf) < size:
            break
        yield np.frombuffer(buf, np.uint8).reshape(h, w, 3)
    proc.wait()


def unmix_lut():
    """Amount of each type for every quantized residual colour (NNLS, 4 endmembers)."""
    levels = (np.arange(1 << BITS) + 0.5) / (1 << BITS)
    r, g, b = np.meshgrid(levels, levels, levels, indexing="ij")
    cube = np.stack([r, g, b], -1).reshape(-1, 3)
    A = SWATCH.T  # 3 x 4
    lut = np.zeros((len(cube), 4), np.float32)
    for i, c in enumerate(cube):
        lut[i], _ = nnls(A, c)
    return lut


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("dataset", choices=sorted(DATASETS))
    a = p.parse_args()
    ds = DATASETS[a.dataset]
    path = movie_path(a.dataset)
    info = probe_movie(path)
    w, h, n = info["width"], info["height"], info["frames"]
    every = ds["frames"].get("every", 4)
    out = OUT / a.dataset
    (out / "grids").mkdir(parents=True, exist_ok=True)

    print("background: 5th percentile over 60 frames ...", flush=True)
    step = max(1, n // 60)
    stack = np.stack(list(read_frames(path, w, h, f"select=not(mod(n\\,{step}))")))
    bg = np.percentile(stack, 5, axis=0).astype(np.int16)
    del stack
    Image.fromarray(bg.astype(np.uint8)).save(out / "aerosol_background.jpg", quality=90)

    print("unmixing lookup table (32,768 colours) ...", flush=True)
    lut = unmix_lut()

    wr = row_weights(h)[:, None]
    cells = lambda m: m.reshape(BANDS, h // BANDS, COLS, w // COLS).sum(axis=(1, 3))[::-1]
    area = cells(np.broadcast_to(wr, (h, w)))
    classes, summary = [], []
    gh, gw = GRID
    for i, rgb in enumerate(read_frames(path, w, h, f"select=not(mod(n\\,{every}))")):
        resid = np.clip(rgb.astype(np.int16) - bg, 0, 255).astype(np.uint32) >> (8 - BITS)
        idx = (resid[..., 0] << (2 * BITS)) | (resid[..., 1] << BITS) | resid[..., 2]
        amt = lut[idx]                                   # h x w x 4
        total = amt.sum(-1)
        amt[total < MIN_TOTAL] = 0
        total = np.minimum(amt.sum(-1), 1.0)

        per_type = np.stack([cells(amt[..., k] * wr) / area for k in range(4)], -1)  # bands x cols x 4
        classes.append(np.clip(np.round(per_type * 255), 0, 255).astype(np.uint8))
        row = np.zeros((BANDS, COLS, 2), np.uint8)
        row[..., 0] = np.clip(np.round(cells(total * wr) / area * 255), 0, 255)
        row[..., 1] = 255
        summary.append(row)

        # Explore grid: dominant type + strength per 8x8 block.
        blocks = amt.reshape(gh, h // gh, gw, w // gw, 4).mean(axis=(1, 3))
        dom = blocks.argmax(-1)
        strength = blocks.max(-1)
        q = np.where(strength > MIN_TOTAL / 2, dom * 64 + 1 + np.clip(np.round(strength * 62), 0, 62), 0)
        Image.fromarray(q.astype(np.uint8)).save(out / "grids" / f"{i:05d}.png", optimize=True)
        if i % 50 == 0:
            share = [f"{t} {per_type[..., k].mean():.3f}" for k, t in enumerate(TYPES)]
            print(f"  frame {i}: " + ", ".join(share), flush=True)

    np.stack(classes).tofile(out / "classes.bin")
    np.stack(summary).tofile(out / "summary.bin")
    meta = {"frames": len(summary), "bands": BANDS, "cols": COLS, "bandEdges": BAND_EDGES,
            "vmin": 0.0, "vmax": 1.0, "units": ds["units"], "mode": "classes", "grids": True,
            "gridEncoding": "0 = none, else type*64 + 1 + strength(0..62)",
            "classes": TYPES, "layout": "frames,bands(south first),cols,[value,share]; classes.bin: frames,bands,cols,4"}
    (out / "summary.json").write_text(json.dumps(meta, indent=2))
    print(f"wrote {len(summary)} frames: summary.bin, classes.bin, grids/")


if __name__ == "__main__":
    sys.exit(main())
