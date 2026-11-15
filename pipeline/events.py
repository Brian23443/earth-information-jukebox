"""Lightning as vector events: every flash dot NASA drew (instead of a blurry video).

    python pipeline/events.py lightning

The lightning movie is a static grey map with soft yellow flash dots, which is the worst
case for video compression. So each dot is stored ONCE:
  events.bin    every dot: where, how big, how bright, and when (10-byte records)
  events.json   layout + counts
  base.jpg      the empty map from frame 0 (fallback when there is no night map)
The globe redraws each dot as a soft glow, sharp at any zoom, with a short afterglow.

A flash is a connected patch of yellow pixels, tracked across frames by its centre (1 px
tolerance); its footprint is the union of its pixels over its lifetime, at the brightest
each pixel got. NASA draws every flash as a round dot, so busy storms are clusters of
overlapping dots. A cluster is split back into its dots: each local brightness peak is a
dot, owning the cluster pixels nearest to it, with the radius of a disc of that area.

events.bin: little-endian records of 10 bytes, sorted by start frame:
  uint16 cx4, cy4     dot centre in source pixels x 4 (4096x2048, row 0 = north)
  uint16 start, end   summary-frame range [start, end) the dot is visible
  uint8  r10          radius in source pixels x 10
  uint8  peak         NASA's brightness at the dot's centre, 0-255
Frames are the same summary frames as summary.bin (every Nth movie frame).
"""

import argparse
import json
import subprocess
import sys

import numpy as np
from PIL import Image
from scipy.spatial import cKDTree
from skimage.feature import peak_local_max
from skimage.measure import label, regionprops

from manifest import DATASETS, OUT
from media import movie_path, probe_movie
from summarize import flash_mask

MATCH_TOL = 1      # px: a flash within 1 px of an active flash's centre is the same flash
PEAK_SPACING = 2   # px: brightness peaks closer than this are one dot
PEAK_MIN = 0.08    # peaks dimmer than this (0-1) are a dot's edge, not a dot


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


def brightness(rgb):
    """How bright NASA drew the flash: yellow above blue, 0-1."""
    r, g, b = (rgb[..., k].astype(np.float32) for k in range(3))
    return np.clip(((r + g) * 0.5 - b) / 200.0, 0, 1)


class Flash:
    __slots__ = ("start", "y0", "x0", "patch")

    def __init__(self, start, y0, x0, patch):
        self.start, self.y0, self.x0, self.patch = start, y0, x0, patch

    def merge(self, y0, x0, patch):
        """Union with another patch, keeping each pixel's brightest value."""
        ny0, nx0 = min(self.y0, y0), min(self.x0, x0)
        ny1 = max(self.y0 + self.patch.shape[0], y0 + patch.shape[0])
        nx1 = max(self.x0 + self.patch.shape[1], x0 + patch.shape[1])
        out = np.zeros((ny1 - ny0, nx1 - nx0), np.float32)
        for (py, px, p) in ((self.y0, self.x0, self.patch), (y0, x0, patch)):
            sl = out[py - ny0:py - ny0 + p.shape[0], px - nx0:px - nx0 + p.shape[1]]
            np.maximum(sl, p, out=sl)
        self.y0, self.x0, self.patch = ny0, nx0, out


def split_dots(f):
    """Dots making up one flash footprint: [(cx, cy, r, peak)] in source pixels."""
    pt = f.patch
    ys, xs = np.nonzero(pt)
    if len(ys) == 0:
        return []
    peaks = peak_local_max(pt, min_distance=PEAK_SPACING, threshold_abs=PEAK_MIN, exclude_border=False)
    if len(peaks) <= 1:
        wts = pt[ys, xs]
        cy = f.y0 + (ys * wts).sum() / wts.sum() + 0.5
        cx = f.x0 + (xs * wts).sum() / wts.sum() + 0.5
        return [(cx, cy, (len(ys) / np.pi) ** 0.5, float(pt.max()))]
    # Each lit pixel belongs to its nearest peak; that cell's area sets the dot's size.
    owner = cKDTree(peaks).query(np.column_stack([ys, xs]))[1]
    out = []
    for k, (py, px) in enumerate(peaks):
        cell = owner == k
        n = int(cell.sum())
        if n == 0:
            continue
        wts = pt[ys[cell], xs[cell]]
        cy = f.y0 + (ys[cell] * wts).sum() / wts.sum() + 0.5
        cx = f.x0 + (xs[cell] * wts).sum() / wts.sum() + 0.5
        out.append((cx, cy, (n / np.pi) ** 0.5, float(pt[py, px])))
    return out


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

    active = {}   # (x, y) centre key -> Flash
    done = []     # (Flash, end)
    i = -1
    for i, rgb in enumerate(frames(path, every, w, h)):
        if i == 0:
            # Frame 0 has no flashes yet: it is the clean base map.
            Image.fromarray(rgb).save(out / "base.jpg", quality=92, subsampling=0, optimize=True)
        mask = flash_mask(rgb, rule)
        bright = brightness(rgb)
        lab = label(mask, connectivity=2)
        seen = set()
        for prop in regionprops(lab):
            y, x = prop.centroid
            key = (int(round(x)), int(round(y)))
            y0, x0, y1, x1 = prop.bbox
            patch = bright[y0:y1, x0:x1] * prop.image
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
                active[match].merge(y0, x0, patch)
                seen.add(match)
            elif key not in seen:
                active[key] = Flash(i, y0, x0, patch.astype(np.float32))
                seen.add(key)
        for k in [k for k in active if k not in seen]:  # gone this frame
            done.append((active.pop(k), i))
        if i % 100 == 0:
            print(f"  frame {i}: {len(seen)} flashes on screen, {len(done)} finished", flush=True)
    for f in active.values():
        done.append((f, i + 1))
    nframes = i + 1

    dots = []
    split = 0
    for f, end in done:
        parts = split_dots(f)
        split += len(parts) > 1
        dots.extend((cx, cy, r, pk, f.start, end) for cx, cy, r, pk in parts)
    dots.sort(key=lambda d: d[4])
    rec = np.zeros(len(dots), dtype=[("cx4", "<u2"), ("cy4", "<u2"), ("start", "<u2"), ("end", "<u2"),
                                     ("r10", "u1"), ("peak", "u1")])
    arr = np.array(dots, dtype=np.float64)
    rec["cx4"] = np.round(arr[:, 0] * 4)
    rec["cy4"] = np.round(arr[:, 1] * 4)
    rec["r10"] = np.clip(np.round(arr[:, 2] * 10), 1, 255)
    rec["peak"] = np.clip(np.round(arr[:, 3] * 255), 1, 255)
    rec["start"], rec["end"] = arr[:, 4], arr[:, 5]
    rec.tofile(out / "events.bin")
    (out / "shapes.png").unlink(missing_ok=True)  # from the shape-atlas version
    meta = {"version": 3, "count": len(rec), "flashes": len(done), "frames": nframes, "width": w, "height": h,
            "recordBytes": 10, "peakSpacing": PEAK_SPACING, "peakMin": PEAK_MIN,
            "layout": "uint16 cx4, cy4, start, end; uint8 r10, peak (little-endian)"}
    (out / "events.json").write_text(json.dumps(meta, indent=2))
    life = rec["end"].astype(int) - rec["start"]
    print(f"wrote {len(rec)} dots from {len(done)} flashes ({split} clusters split into dots), "
          f"events.bin {rec.nbytes / 1e6:.1f} MB, max lifetime {life.max()} frames")

if __name__ == "__main__":
    sys.exit(main())
