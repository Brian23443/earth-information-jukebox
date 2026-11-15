"""How closely the redrawn lightning matches NASA's own frames.

    python pipeline/check_events.py [--old data/work/lightning_events_v1.bin]

For sample frames, draws every flash the site would show (shapes from the atlas, small
flashes as round dots) and compares the lit pixels with NASA's yellow pixels in the same
movie frame:
  recall     share of NASA's lit pixels that we light
  precision  share of our lit pixels that NASA lit too
With --old, the previous round-dot version (radius capped at 3 px, as the site drew it) is
scored the same way.
"""
import argparse
import json
import subprocess

import numpy as np
from PIL import Image

from manifest import DATASETS, OUT
from media import movie_path, probe_movie
from summarize import flash_mask

SAMPLES = 8


def movie_frame(path, n, w, h):
    buf = subprocess.run(["ffmpeg", "-v", "error", "-i", str(path), "-vf", f"select=eq(n\\,{n})", "-vsync", "vfr",
                          "-frames:v", "1", "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], capture_output=True).stdout
    return np.frombuffer(buf, np.uint8).reshape(h, w, 3)


def disc(canvas, cx, cy, r):
    r = max(r, 0.5)
    y0, y1 = int(np.floor(cy - r)), int(np.ceil(cy + r))
    x0, x1 = int(np.floor(cx - r)), int(np.ceil(cx + r))
    ys, xs = np.mgrid[max(0, y0):min(canvas.shape[0], y1 + 1), max(0, x0):min(canvas.shape[1], x1 + 1)]
    inside = (xs + 0.5 - cx) ** 2 + (ys + 0.5 - cy) ** 2 <= r * r
    canvas[ys[inside], xs[inside]] = True


def score(drawn, truth):
    tp = (drawn & truth).sum()
    return tp / max(1, truth.sum()), tp / max(1, drawn.sum())


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--old")
    a = p.parse_args()
    ds = DATASETS["lightning"]
    out = OUT / "lightning"
    meta = json.loads((out / "events.json").read_text())
    rec = np.fromfile(out / "events.bin", dtype=[("cx4", "<u2"), ("cy4", "<u2"), ("start", "<u2"), ("end", "<u2"),
                                                  ("w", "u1"), ("h", "u1"), ("r10", "u1"), ("peak", "u1"),
                                                  ("ax", "<u2"), ("ay", "<u2")])
    atlas = np.asarray(Image.open(out / "shapes.png"))
    old = None
    if a.old:
        old = np.fromfile(a.old, dtype=[("x", "<u2"), ("y", "<u2"), ("start", "<u2"), ("end", "<u2"), ("r", "u1")])
    path = movie_path("lightning")
    info = probe_movie(path)
    w, h = info["width"], info["height"]
    every = ds["frames"]["every"]
    frames = np.linspace(50, meta["frames"] - 50, SAMPLES).astype(int)
    totals = {"new": [], "old": []}
    for f in frames:
        truth = flash_mask(movie_frame(path, f * every, w, h), ds["flash_rgb"])
        new = np.zeros((h, w), bool)
        for e in rec[(rec["start"] <= f) & (rec["end"] > f)]:
            cx, cy = e["cx4"] / 4, e["cy4"] / 4
            if e["w"]:
                ew, eh, sc = int(e["w"]), int(e["h"]), int(e["peak"])
                x0, y0 = int(round(cx - ew * sc / 2)), int(round(cy - eh * sc / 2))
                patch = atlas[e["ay"]:e["ay"] + eh, e["ax"]:e["ax"] + ew] > 12  # ~0.05 brightness
                patch = np.kron(patch, np.ones((sc, sc), bool))
                ys, xs = np.nonzero(patch)
                ys, xs = ys + y0, xs + x0
                ok = (ys >= 0) & (ys < h) & (xs >= 0) & (xs < w)
                new[ys[ok], xs[ok]] = True
            else:
                disc(new, cx, cy, e["r10"] / 10)
        totals["new"].append(score(new, truth))
        if old is not None:
            o = np.zeros((h, w), bool)
            for e in old[(old["start"] <= f) & (old["end"] > f)]:
                disc(o, e["x"] + 0.5, e["y"] + 0.5, float(np.clip(e["r"] / 10 * 0.85, 0.8, 3.0)))
            totals["old"].append(score(o, truth))
        print(f"frame {f}: new recall {totals['new'][-1][0]:.3f} precision {totals['new'][-1][1]:.3f}"
              + (f" | old {totals['old'][-1][0]:.3f} {totals['old'][-1][1]:.3f}" if old is not None else ""), flush=True)
    for k, v in totals.items():
        if v:
            r, pr = np.mean(v, axis=0)
            print(f"{k}: recall {r:.3f}, precision {pr:.3f}")


if __name__ == "__main__":
    main()
