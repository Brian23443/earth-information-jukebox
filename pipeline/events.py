"""Lightning as vector events with their real shapes (instead of a blurry video).

    python pipeline/events.py lightning

The lightning movie is a static grey map with yellow flash dots, which is the worst case
for video compression. So each flash is stored ONCE, with NASA's own pixels:
  events.bin    every flash: where, when, and how to draw it (16-byte records)
  shapes.png    texture atlas (greyscale) of every flash a circle can't describe:
                NASA's brightness for the flash's pixels. Large storm clusters are
                stored at 1/2 or 1/4 resolution (NASA draws soft dots, so little is lost)
  events.json   layout + counts
  base.jpg      the empty map from frame 0 (fallback when there is no night map)
The globe redraws each flash from the atlas (sharp at any zoom), with a glow and a short
afterglow.

A flash is a connected patch of yellow pixels, tracked across frames by its centre (1 px
tolerance). Its shape is the union of its pixels over its lifetime, at the brightest each
pixel got. Flashes under 20 px, or close to round (overlap with an equal-area disc of 70%
or more), are stored as round dots: centre, radius, peak brightness.

events.bin: little-endian records of 16 bytes, sorted by start frame:
  uint16 cx4, cy4     centre in source pixels x 4 (4096x2048, row 0 = north)
  uint16 start, end   summary-frame range [start, end) the flash is visible
  uint8  w, h         shape size in atlas texels, padding included (0 = round dot)
  uint8  r10          round dot: radius in source pixels x 10
  uint8  peak         round dot: brightness 0-255; shape: source pixels per atlas texel
  uint16 ax, ay       shape's top-left corner in the atlas
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

MATCH_TOL = 1     # px: a flash within 1 px of an active flash's centre is the same flash
PAD = 2           # atlas texels of padding around each shape, room for its halo
DOT_MAX_AREA = 19  # flashes this small are stored as round dots
ROUND_IOU = 0.7    # ... and so are bigger ones this close to a disc
ATLAS_W = 8192
LEVELS = 64        # brightness steps stored (compresses far better than 256)


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


def pack(shapes):
    """Shelf-pack padded shapes into an ATLAS_W-wide atlas. Returns positions and height."""
    order = sorted(range(len(shapes)), key=lambda k: -shapes[k].shape[0])
    pos = [None] * len(shapes)
    x = y = shelf_h = 0
    for k in order:
        h, w = shapes[k].shape
        if x + w > ATLAS_W:
            y += shelf_h
            x = shelf_h = 0
        pos[k] = (x, y)
        x += w
        shelf_h = max(shelf_h, h)
    return pos, y + shelf_h


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

    done.sort(key=lambda e: e[0].start)
    rec = np.zeros(len(done), dtype=[("cx4", "<u2"), ("cy4", "<u2"), ("start", "<u2"), ("end", "<u2"),
                                     ("w", "u1"), ("h", "u1"), ("r10", "u1"), ("peak", "u1"),
                                     ("ax", "<u2"), ("ay", "<u2")])
    shapes, shape_rows = [], []
    clipped = 0
    for j, (f, end) in enumerate(done):
        pt = f.patch
        ys, xs = np.nonzero(pt)
        wts = pt[ys, xs]
        area = len(ys)
        cy = f.y0 + (ys * wts).sum() / wts.sum() + 0.5
        cx = f.x0 + (xs * wts).sum() / wts.sum() + 0.5
        r = (area / np.pi) ** 0.5
        rec["start"][j], rec["end"][j] = f.start, end
        round_enough = area <= DOT_MAX_AREA
        if not round_enough:
            gy, gx = np.mgrid[:pt.shape[0], :pt.shape[1]]
            disc = (gx + f.x0 + 0.5 - cx) ** 2 + (gy + f.y0 + 0.5 - cy) ** 2 <= r * r
            lit = pt > 0
            round_enough = (lit & disc).sum() / (lit | disc).sum() >= ROUND_IOU
        if round_enough:
            rec["cx4"][j], rec["cy4"][j] = round(cx * 4), round(cy * 4)
            rec["r10"][j] = min(255, round(r * 10))
            rec["peak"][j] = round(float(pt.max()) * 255)
            continue
        big = max(pt.shape)
        scale = 1 if big <= 32 else 2 if big <= 96 else 4
        # Round the patch up to whole texels, then average each scale x scale block.
        ph, pw = -(-pt.shape[0] // scale) * scale, -(-pt.shape[1] // scale) * scale
        pt = np.pad(pt, ((0, ph - pt.shape[0]), (0, pw - pt.shape[1])))
        tex = pt.reshape(ph // scale, scale, pw // scale, scale).max(axis=(1, 3))
        if max(tex.shape) + 2 * PAD > 255:  # keep the brightest core
            ty, tx = np.unravel_index(tex.argmax(), tex.shape)
            ty0, tx0 = max(0, ty - 125), max(0, tx - 125)
            tex = tex[ty0:ty0 + 251, tx0:tx0 + 251]
            f.y0 += ty0 * scale
            f.x0 += tx0 * scale
            clipped += 1
        padded = np.pad(tex, PAD)
        shapes.append(padded)
        shape_rows.append(j)
        th, tw = padded.shape
        # Centre of the padded patch in source pixels (x4 stays exact).
        rec["cx4"][j] = round((f.x0 - PAD * scale + tw * scale / 2) * 4)
        rec["cy4"][j] = round((f.y0 - PAD * scale + th * scale / 2) * 4)
        rec["w"][j], rec["h"][j], rec["peak"][j] = tw, th, scale

    pos, atlas_h = pack(shapes)
    atlas = np.zeros((atlas_h, ATLAS_W), np.uint8)
    for (x, y), sh, j in zip(pos, shapes, shape_rows):
        q = np.round(sh * (LEVELS - 1)) * (255 / (LEVELS - 1))
        atlas[y:y + sh.shape[0], x:x + sh.shape[1]] = np.round(q)
        rec["ax"][j], rec["ay"][j] = x, y
    if atlas_h > 8192:
        print(f"WARNING: atlas is {atlas_h} rows; some GPUs only allow 8192", flush=True)
    Image.fromarray(atlas).save(out / "shapes.png", optimize=True)
    rec.tofile(out / "events.bin")
    (out / "events.bin.old").unlink(missing_ok=True)
    meta = {"version": 2, "count": len(done), "shapes": len(shapes), "frames": nframes, "width": w, "height": h,
            "recordBytes": 16, "atlas": [ATLAS_W, atlas_h], "pad": PAD, "dotMaxArea": DOT_MAX_AREA, "roundIou": ROUND_IOU,
            "layout": "uint16 cx4, cy4, start, end; uint8 w, h, r10, peak; uint16 ax, ay (little-endian)"}
    (out / "events.json").write_text(json.dumps(meta, indent=2))
    life = rec["end"].astype(int) - rec["start"]
    print(f"wrote {len(done)} flashes ({len(shapes)} shapes, {clipped} clipped), "
          f"events.bin {rec.nbytes / 1e6:.1f} MB, shapes.png {ATLAS_W}x{atlas_h} "
          f"{(out / 'shapes.png').stat().st_size / 1e6:.1f} MB, max lifetime {life.max()} frames")


if __name__ == "__main__":
    sys.exit(main())
