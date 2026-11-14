"""Sharper playback video built from NASA's 6840x3420 frames.

    python pipeline/video4k.py sst frames   # download + downscale every frame (resumable)
    python pipeline/video4k.py sst encode   # frames -> web/public/data/sst/web4096.mp4
    python pipeline/video4k.py sst encode --crf 30

NASA's own movie is 2048 wide, which looks soft on large/Retina screens. The 6840 frames
are 35 MB TIFs (~70 GB for all 2,001), so each one is streamed: download -> resize to
4096x2048 -> high-quality JPEG (~4 MB) -> delete the TIF. Frames are kept in
data/work/<name>/frames4096/ so the encode can be redone without downloading again.
"""

import argparse
import shutil
import subprocess
import sys
import time
from concurrent.futures import ThreadPoolExecutor

from PIL import Image

from download import fetch
from manifest import DATASETS, OUT, WORK

Image.MAX_IMAGE_PIXELS = None
SIZE = (4096, 2048)


def frame_numbers(ds):
    f = ds["frames"]
    return range(f["first"], f["last"] + 1, f["number_step"])  # every file, no stride


def process(args):
    url, tif, jpg = args
    if jpg.exists() and jpg.stat().st_size > 0:
        return "skip"
    status = fetch(url, tif)
    if status.startswith("FAIL"):
        return status
    try:
        img = Image.open(tif).convert("RGB").resize(SIZE, Image.LANCZOS)
        tmp = jpg.with_suffix(".part.jpg")
        # q95 with 4:4:4 color keeps the thin colored lines for the encoder
        img.save(tmp, quality=95, subsampling=0)
        tmp.rename(jpg)
    finally:
        tif.unlink(missing_ok=True)
    return "ok"


def cmd_frames(name, workers):
    ds = DATASETS[name]
    url_tpl = ds["hires"]["url"]
    out = WORK / name / "frames4096"
    tmp = WORK / name / "tif_tmp"
    out.mkdir(parents=True, exist_ok=True)
    tmp.mkdir(parents=True, exist_ok=True)

    nums = list(frame_numbers(ds))
    jobs = [(url_tpl.format(n=n), tmp / f"{n:05d}.tif", out / f"{i:05d}.jpg") for i, n in enumerate(nums)]
    print(f"[{name}] {len(jobs)} frames -> {out}")
    t0, done, fails = time.time(), 0, 0
    with ThreadPoolExecutor(max_workers=workers) as pool:
        for status in pool.map(process, jobs):
            done += 1
            if status.startswith("FAIL"):
                fails += 1
                print(f"  {status}")
            if done % 25 == 0 or done == len(jobs):
                rate = done / max(1, time.time() - t0)
                eta = (len(jobs) - done) / max(rate, 1e-6) / 60
                print(f"  {done}/{len(jobs)}  failures {fails}  ~{eta:.0f} min left", flush=True)
    sys.exit(1 if fails else 0)


def cmd_encode(name, crf, maxrate):
    if not shutil.which("ffmpeg"):
        sys.exit("ffmpeg not found")
    src = WORK / name / "frames4096"
    count = len(list(src.glob("*.jpg")))
    expected = len(frame_numbers(DATASETS[name]))
    if count != expected:
        sys.exit(f"only {count}/{expected} frames in {src}; run the 'frames' step first")
    dest = OUT / name / "web4096.mp4"
    subprocess.run(
        ["ffmpeg", "-y", "-framerate", "30", "-i", str(src / "%05d.jpg"), "-an",
         # JPEG input is full-range BT.601; without this the MP4 was tagged pc/bt470bg and
         # colors shifted (green 95 -> 87, blue 31 -> 40). Convert and tag as HD video.
         "-vf", "scale=out_color_matrix=bt709:out_range=tv,format=yuv420p",
         "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709",
         "-color_range", "tv",
         "-c:v", "libx264", "-preset", "slow", "-crf", str(crf),
         # Cap the bitrate so it streams on ordinary Wi-Fi (12 Mbps x 67 s ~ 100 MB max)
         "-maxrate", maxrate, "-bufsize", "24M",
         "-profile:v", "high", "-level", "5.1", "-movflags", "+faststart", str(dest)],
        check=True)
    print(f"wrote {dest} ({dest.stat().st_size / 1e6:.0f} MB)")


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("dataset", choices=sorted(DATASETS))
    p.add_argument("step", choices=["frames", "encode"])
    p.add_argument("--workers", type=int, default=6)
    p.add_argument("--crf", type=int, default=30)
    p.add_argument("--maxrate", default="12M", help="peak bitrate for streaming")
    a = p.parse_args()
    if a.step == "frames":
        cmd_frames(a.dataset, a.workers)
    else:
        cmd_encode(a.dataset, a.crf, a.maxrate)


if __name__ == "__main__":
    main()
