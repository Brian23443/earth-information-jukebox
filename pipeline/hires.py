"""High-resolution keyframe stills for zoom detail.

    python pipeline/hires.py sst              # uses manifest "hires" settings
    python pipeline/hires.py sst --every 80   # fewer stills, smaller site

Streams one big TIF at a time (download -> WebP -> delete), so disk use stays small.
Output: web/public/data/<name>/hires/<movieFrame>.webp and hires.json.
"""

import argparse
import json
import sys
from pathlib import Path

from PIL import Image

from download import fetch
from manifest import DATASETS, OUT, WORK

Image.MAX_IMAGE_PIXELS = None  # 6840x3420 is fine, silence the decompression-bomb guard
PREVIEW_W = 3072


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("dataset", choices=sorted(DATASETS))
    p.add_argument("--every", type=int, help="movie frames between stills")
    a = p.parse_args()

    ds = DATASETS[a.dataset]
    hi, frames = ds.get("hires"), ds.get("frames", {})
    if not hi or "url" not in frames:
        sys.exit(f"{a.dataset} has no hires frame set in the manifest")
    every = a.every or hi["every_movie_frames"]

    out = OUT / a.dataset / "hires"
    out.mkdir(parents=True, exist_ok=True)
    tmp = WORK / a.dataset / "hires_tmp"
    tmp.mkdir(parents=True, exist_ok=True)

    count = (frames["last"] - frames["first"]) // frames["number_step"] + 1
    movie_frames = list(range(0, count, every))
    ext = hi.get("format", "webp")
    # Remove stills (and previews) left over from a different format or spacing, so the
    # folder matches hires.json and nothing unused gets deployed.
    keep = {f"{m:05d}" for m in movie_frames}
    for old in [*out.glob("*"), *(out / "preview").glob("*")]:
        if not old.is_file():
            continue
        wrong_format = old.parent == out and old.suffix != f".{ext}"
        unused = old.stem not in keep
        if wrong_format or unused:
            old.unlink()
    done, size = [], None
    for k, m in enumerate(movie_frames):
        dest = out / f"{m:05d}.{ext}"
        if not dest.exists():
            n = frames["first"] + m * frames["number_step"]
            tif = tmp / f"{n:05d}.tif"
            status = fetch(hi["url"].format(n=n), tif)
            if status.startswith("FAIL"):
                print(f"  frame {m}: {status}")
                continue
            img = Image.open(tif).convert("RGB")
            if ext == "jpg":
                # subsampling=0 -> 4:4:4, full-resolution color for thin colored lines
                img.save(dest, quality=hi["quality"], subsampling=0, optimize=True)
            else:
                img.save(dest, quality=hi["quality"], method=4)
            tif.unlink()
        size = size or list(Image.open(dest).size)
        done.append(m)
        print(f"  {k + 1}/{len(movie_frames)}  movie frame {m}  {dest.stat().st_size / 1e6:.1f} MB")

    # Previews: shown first on pause/zoom so the view sharpens within a second even on slow
    # Wi-Fi, then the full still replaces them. 3072 wide, ~1.4 MB each.
    prev = out / "preview"
    prev.mkdir(exist_ok=True)
    preview_size = [PREVIEW_W, PREVIEW_W // 2]
    for m in done:
        p = prev / f"{m:05d}.jpg"
        if not p.exists():
            Image.open(out / f"{m:05d}.{ext}").convert("RGB").resize(preview_size, Image.LANCZOS).save(
                p, quality=85, optimize=True, progressive=True)
    print(f"previews: {sum(f.stat().st_size for f in prev.glob('*.jpg')) / 1e6:.0f} MB")

    meta = {"every": every, "movieFrames": done, "size": size, "ext": ext, "previewSize": preview_size}
    (out.parent / "hires.json").write_text(json.dumps(meta))
    total = sum(f.stat().st_size for f in out.glob(f"*.{ext}")) / 1e6
    print(f"wrote {len(done)} stills ({total:.0f} MB) and hires.json")


if __name__ == "__main__":
    main()
