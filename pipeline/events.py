"""Lightning as vector events + a static base map (instead of a blurry video).

    python pipeline/events.py lightning

The lightning movie is a static grey map with small single-colour dots, which is the
worst case for video compression. So:
  base.jpg     the empty map from frame 0, at the source's full 4096x2048
  events.bin   every flash dot ONCE: where, how big, and when it is on screen
  events.json  layout + counts
The globe draws the dots as GPU points (sharp at any zoom) over the base map.

events.bin: little-endian records of 9 bytes, sorted by start frame:
  uint16 x, uint16 y      dot centre in source pixels (4096x2048, row 0 = north)
  uint16 start, uint16 end  summary-frame range [start, end) the dot is visible
  uint8 radius_tenths     dot radius in source pixels x 10
Frames are the same summary frames as summary.bin (every Nth movie frame).
"""

import argparse
import json
import subprocess
import sys

import numpy as np
from PIL import Image
from skimage.measure import label, regionprops

from manifest import DATASETS, OUT
from media import movie_path, probe_movie
from summarize import flash_mask

MATCH_TOL = 1  # px: a dot within 1 px of an active dot's position is the same dot


def frames(path, every, w, h):
    proc = subprocess.Popen(
        ["ffmpeg", "-v", "error", "-i", str(path), "-vf", f"select=not(mod(n\\,{every}))",
         "-vsync", "vfr", "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE)
    size = w * h * 3
    while True:
        buf = proc.stdout.read(size)
        if len(buf) < size:
            break
        yield np.frombuffer(buf, np.uint8).reshape(h, w, 3)
    proc.wait()


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("dataset", choices=sorted(DATASETS))
    a = p.parse_args()
    ds = DATASETS[a.dataset]
    path = movie_path(a.dataset)
    info = probe_movie(path)
    w, h = info["width"], info["height"]
    every = ds["frames"].get("every", 1)
    rule = ds.get("flash_rgb", {})
    out = OUT / a.dataset

    active = {}   # (x, y) -> [start, radius]
    done = []     # finished events
    base_saved = False
    i = -1
    for i, rgb in enumerate(frames(path, every, w, h)):
        if not base_saved:
            # Frame 0 has no flashes yet: it is the clean base map.
            Image.fromarray(rgb).save(out / "base.jpg", quality=92, subsampling=0, optimize=True)
            base_saved = True
        lab = label(flash_mask(rgb, rule), connectivity=2)
        seen = set()
        for prop in regionprops(lab):
            y, x = prop.centroid
            key = (int(round(x)), int(round(y)))
            r = (prop.area / np.pi) ** 0.5
            match = None
            for dx in range(-MATCH_TOL, MATCH_TOL + 1):
                for dy in range(-MATCH_TOL, MATCH_TOL + 1):
                    k = (key[0] + dx, key[1] + dy)
                    if k in active and k not in seen:
                        match = k
                        break
                if match:
                    break
            if match:
                active[match][1] = max(active[match][1], r)
                seen.add(match)
            elif key not in seen:
                active[key] = [i, r]
                seen.add(key)
        for k in [k for k in active if k not in seen]:  # gone this frame
            start, r = active.pop(k)
            done.append((k[0], k[1], start, i, r))
        if i % 100 == 0:
            print(f"  frame {i}: {len(seen)} dots on screen, {len(done)} finished events", flush=True)
    for k, (start, r) in active.items():
        done.append((k[0], k[1], start, i + 1, r))

    done.sort(key=lambda e: e[2])
    rec = np.zeros(len(done), dtype=[("x", "<u2"), ("y", "<u2"), ("start", "<u2"), ("end", "<u2"), ("r", "u1")])
    for j, (x, y, s, e, r) in enumerate(done):
        rec[j] = (x, y, s, e, min(255, int(round(r * 10))))
    rec.tofile(out / "events.bin")
    meta = {"count": len(done), "frames": i + 1, "width": w, "height": h, "recordBytes": 9,
            "layout": "uint16 x, uint16 y, uint16 start, uint16 end, uint8 radius*10 (little-endian)"}
    (out / "events.json").write_text(json.dumps(meta, indent=2))
    life = rec["end"].astype(int) - rec["start"]
    print(f"wrote {len(done)} events ({rec.nbytes / 1e6:.1f} MB), median lifetime {np.median(life):.0f} frames; base.jpg "
          f"({(out / 'base.jpg').stat().st_size / 1e6:.1f} MB)")


if __name__ == "__main__":
    sys.exit(main())
