"""Download NASA source files by exact filename. Resumable: existing files are skipped.

    python pipeline/download.py sst lightning aerosols
    python pipeline/download.py sst --frames-only
    python pipeline/download.py --list

Never pulls a full frame set: SST frames honour `file_stride` from the manifest.
"""

import argparse
import ssl
import sys
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

from manifest import DATASETS, RAW

UA = "earth-jukebox-pipeline/0.1"

# python.org builds of Python on macOS ship without root certificates, so use
# certifi's bundle (verification stays on).
try:
    import certifi
    SSL_CTX = ssl.create_default_context(cafile=certifi.where())
except ImportError:
    SSL_CTX = ssl.create_default_context()


def fetch(url: str, dest: Path, retries: int = 3) -> str:
    if dest.exists() and dest.stat().st_size > 0:
        return "skip"
    dest.parent.mkdir(parents=True, exist_ok=True)
    tmp = dest.with_suffix(dest.suffix + ".part")
    for attempt in range(1, retries + 1):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60, context=SSL_CTX) as r, open(tmp, "wb") as f:
                while chunk := r.read(1 << 20):
                    f.write(chunk)
            tmp.rename(dest)
            return "ok"
        except Exception as e:  # noqa: BLE001 - report and retry any network error
            if attempt == retries:
                tmp.unlink(missing_ok=True)
                return f"FAIL {e}"
            time.sleep(2 * attempt)
    return "FAIL"


def frame_urls(spec: dict):
    numbers = range(spec["first"], spec["last"] + 1, spec["number_step"] * spec["file_stride"])
    for n in numbers:
        yield n, spec["url"].format(n=n)


def download(name: str, frames_only: bool, workers: int) -> int:
    ds = DATASETS[name]
    out = RAW / name
    failures = 0

    if not frames_only:
        for key in ("movie", "colorbar", "panel_movie"):
            if url := ds.get(key):
                dest = out / url.rsplit("/", 1)[1]
                print(f"[{name}] {key}: {dest.name} ... ", end="", flush=True)
                status = fetch(url, dest)
                print(status)
                failures += status.startswith("FAIL")

    spec = ds.get("frames") or {}
    if "url" in spec:
        jobs = [(url, out / "frames" / f"{n:05d}.tif") for n, url in frame_urls(spec)]
        print(f"[{name}] {len(jobs)} frames (every {spec['file_stride']}th file)")
        done = 0
        with ThreadPoolExecutor(max_workers=workers) as pool:
            for status in pool.map(lambda j: fetch(*j), jobs):
                done += 1
                failures += status.startswith("FAIL")
                if done % 50 == 0 or done == len(jobs):
                    print(f"  {done}/{len(jobs)}  failures so far: {failures}")
    elif spec.get("from_movie"):
        print(f"[{name}] frames come from the movie: run pipeline/media.py extract {name}")

    if name == "forest":
        print(f"[forest] GeoTIFF is a manual download, see manifest: {ds['geotiff']}")
    return failures


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("datasets", nargs="*", help="dataset ids from manifest.py")
    p.add_argument("--frames-only", action="store_true")
    p.add_argument("--workers", type=int, default=4, help="parallel frame downloads (be polite)")
    p.add_argument("--list", action="store_true")
    a = p.parse_args()

    if a.list or not a.datasets:
        for k, v in DATASETS.items():
            print(f"{k:12} {v['title']}")
        return
    unknown = [d for d in a.datasets if d not in DATASETS]
    if unknown:
        sys.exit(f"unknown dataset(s): {unknown}")
    failures = sum(download(d, a.frames_only, a.workers) for d in a.datasets)
    sys.exit(1 if failures else 0)


if __name__ == "__main__":
    main()
