"""ffmpeg/ffprobe helpers: probe frame alignment, encode web textures, extract frames.

    python pipeline/media.py probe sst        # writes web/public/data/sst/frames.json
    python pipeline/media.py encode sst       # writes web/public/data/sst/web.mp4 (2048x1024)
    python pipeline/media.py extract lightning  # PNG frames from the movie into data/work/
"""

import argparse
import json
import shutil
import subprocess
import sys
from pathlib import Path

from manifest import DATASETS, OUT, RAW, WORK


def need(tool: str) -> None:
    if not shutil.which(tool):
        sys.exit(f"{tool} not found on PATH (brew install ffmpeg)")


def movie_path(name: str) -> Path:
    url = DATASETS[name].get("movie")
    if not url:
        sys.exit(f"{name} has no movie in the manifest")
    p = RAW / name / url.rsplit("/", 1)[1]
    if not p.exists():
        sys.exit(f"missing {p} - run: python pipeline/download.py {name}")
    return p


def probe_movie(path: Path) -> dict:
    need("ffprobe")
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-select_streams", "v:0", "-count_packets",
         "-show_entries", "stream=width,height,r_frame_rate,nb_read_packets,duration",
         "-of", "json", str(path)],
        check=True, capture_output=True, text=True).stdout
    s = json.loads(out)["streams"][0]
    num, den = map(int, s["r_frame_rate"].split("/"))
    return {"width": s["width"], "height": s["height"], "fps": num / den,
            "frames": int(s["nb_read_packets"]), "duration": float(s.get("duration", 0))}


def cmd_probe(name: str, offset: int) -> None:
    ds = DATASETS[name]
    info = probe_movie(movie_path(name))
    spec = ds.get("frames", {})
    if "url" in spec:  # SST: one TIF per movie frame on the server, we keep every file_stride-th
        set_count = (spec["last"] - spec["first"]) // spec["number_step"] + 1
        stride = spec["file_stride"]
    else:
        set_count = info["frames"]
        stride = spec.get("every", 1)

    meta = {
        "fps": info["fps"],
        "movieFrames": info["frames"],
        "frameSetCount": set_count,
        "offset": offset,          # movie frames before frame-set frame 0 (intro/fade)
        "movieStride": stride,     # movie frames between consecutive summary frames
        "sourceSize": [info["width"], info["height"]],
        "dates": ds.get("dates"),
        "datesExact": ds.get("dates_exact", True),  # False: frames do not map linearly to dates
    }
    dest = OUT / name / "frames.json"
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(json.dumps(meta, indent=2))
    print(json.dumps(meta, indent=2))

    if info["width"] != 2 * info["height"]:
        print("WARNING: movie is not 2:1, it will not wrap onto the globe")
    diff = info["frames"] - set_count - offset
    if "url" in spec and diff != 0:
        print(f"WARNING: movie has {info['frames']} frames but the frame set implies "
              f"{set_count} (+ offset {offset}). Off by {diff}. Find the intro/fade "
              "length by eye and re-run with --offset N.")


def cmd_encode(name: str, crf: int) -> None:
    """Re-encode for the browser: 2048x1024, H.264, no audio, fast start.

    Source MP4s are 180-350 MB; GitHub Pages refuses files over 100 MB.
    """
    need("ffmpeg")
    src = movie_path(name)
    dest = OUT / name / "web.mp4"
    dest.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        ["ffmpeg", "-y", "-i", str(src), "-an",
         "-vf", "scale=2048:1024:flags=lanczos,format=yuv420p",
         "-c:v", "libx264", "-preset", "slow", "-crf", str(crf),
         "-movflags", "+faststart", str(dest)], check=True)
    mb = dest.stat().st_size / 1e6
    print(f"wrote {dest} ({mb:.0f} MB)")
    if mb > 95:
        print("WARNING: over GitHub Pages' 100 MB limit, re-run with a higher --crf")


def cmd_extract(name: str) -> None:
    need("ffmpeg")
    every = DATASETS[name].get("frames", {}).get("every", 1)
    dest = WORK / name / "frames"
    dest.mkdir(parents=True, exist_ok=True)
    # Analyse the full-size source, not the web re-encode (fewer compression smears).
    subprocess.run(
        ["ffmpeg", "-y", "-i", str(movie_path(name)),
         "-vf", f"select=not(mod(n\\,{every}))", "-vsync", "vfr",
         str(dest / "%05d.png")], check=True)
    print(f"extracted every {every}th frame to {dest}")


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("command", choices=["probe", "encode", "extract"])
    p.add_argument("dataset", choices=sorted(DATASETS))
    p.add_argument("--offset", type=int, default=0, help="probe: intro frames before frame-set frame 0")
    # SST: crf 26 -> 138 MB (too big), crf 32 -> 59 MB.
    p.add_argument("--crf", type=int, default=32, help="encode: higher = smaller file")
    a = p.parse_args()
    {"probe": lambda: cmd_probe(a.dataset, a.offset),
     "encode": lambda: cmd_encode(a.dataset, a.crf),
     "extract": lambda: cmd_extract(a.dataset)}[a.command]()


if __name__ == "__main__":
    main()
