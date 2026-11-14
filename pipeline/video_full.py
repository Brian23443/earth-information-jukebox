"""Full-resolution 6840x3420 HEVC video, for recording the demo on a capable Mac.

    python pipeline/video_full.py sst              # writes web/public/data/sst/web6840.mp4
    python pipeline/video_full.py sst --bitrate 30M

Only used when the URL has ?video=6840 (and the browser can decode it). Not for the
public site: ~300+ MB, and HEVC at this size needs hardware decoding (recent Macs).

Streams NASA's 2,001 TIFs (35 MB each, ~70 GB) straight into the hardware HEVC encoder:
downloads run in parallel, frames are fed in order, and at most a handful are held in
memory, so nothing large touches the disk. About 40 minutes, network-bound.
"""

import argparse
import shutil
import subprocess
import sys
import time
from collections import deque
from concurrent.futures import ThreadPoolExecutor

from PIL import Image

from download import fetch
from manifest import DATASETS, OUT, WORK

Image.MAX_IMAGE_PIXELS = None
W, H = 6840, 3420


def load_frame(url, tmp):
    for attempt in range(3):
        status = fetch(url, tmp)
        if not status.startswith("FAIL"):
            try:
                img = Image.open(tmp).convert("RGB")
                if img.size != (W, H):
                    raise ValueError(f"unexpected size {img.size}")
                return img.tobytes()
            finally:
                tmp.unlink(missing_ok=True)
        time.sleep(3 * (attempt + 1))
    raise RuntimeError(f"could not download {url}: {status}")


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("dataset", choices=sorted(DATASETS))
    p.add_argument("--bitrate", default="40M")
    p.add_argument("--workers", type=int, default=6)
    a = p.parse_args()
    if not shutil.which("ffmpeg"):
        sys.exit("ffmpeg not found")

    ds = DATASETS[a.dataset]
    f = ds["frames"]
    nums = list(range(f["first"], f["last"] + 1, f["number_step"]))
    url_tpl = ds["hires"]["url"]
    tmp_dir = WORK / a.dataset / "tif_stream"
    tmp_dir.mkdir(parents=True, exist_ok=True)
    dest = OUT / a.dataset / "web6840.mp4"
    part = dest.with_suffix(".part.mp4")

    enc = subprocess.Popen(
        ["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
         "-r", "30", "-i", "-", "-an",
         "-vf", "scale=out_color_matrix=bt709:out_range=tv,format=yuv420p",
         "-c:v", "hevc_videotoolbox", "-b:v", a.bitrate, "-tag:v", "hvc1",
         "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709",
         "-color_range", "tv", "-movflags", "+faststart", str(part)],
        stdin=subprocess.PIPE)

    print(f"[{a.dataset}] streaming {len(nums)} frames at {W}x{H} -> {dest.name}", flush=True)
    t0 = time.time()
    window = a.workers + 2  # frames in flight / in memory (~70 MB each)
    with ThreadPoolExecutor(max_workers=a.workers) as pool:
        pending = deque()
        it = iter(enumerate(nums))
        for _ in range(window):
            i, n = next(it, (None, None))
            if i is None:
                break
            pending.append(pool.submit(load_frame, url_tpl.format(n=n), tmp_dir / f"{n}.tif"))
        done = 0
        while pending:
            frame = pending.popleft().result()  # in order
            enc.stdin.write(frame)
            done += 1
            i, n = next(it, (None, None))
            if i is not None:
                pending.append(pool.submit(load_frame, url_tpl.format(n=n), tmp_dir / f"{n}.tif"))
            if done % 50 == 0 or done == len(nums):
                rate = done / (time.time() - t0)
                print(f"  {done}/{len(nums)}  ~{(len(nums) - done) / rate / 60:.0f} min left", flush=True)

    enc.stdin.close()
    if enc.wait() != 0:
        sys.exit("ffmpeg failed")
    part.rename(dest)
    print(f"wrote {dest} ({dest.stat().st_size / 1e6:.0f} MB)")


if __name__ == "__main__":
    main()
