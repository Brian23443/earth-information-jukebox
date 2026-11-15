"""Narration recordings for the guided show -> web/public/show/voice/<id>.mp3

    python pipeline/voiceover.py [--speed 1.12]

Input: data/raw/voiceOver/*.mp3 as exported by the voice tool, named after the start of
each line ("...-Welcome-to-the-Earth-Information-Jukebox.-Everyt.mp3"). Each file is matched
to its line in web/src/show-script.js by that text, then:
  - sped up (pitch kept) by --speed,
  - trimmed of silence at both ends (the show adds its own pause between lines),
  - evened out to the same loudness (EBU R128, -16 LUFS), so no line jumps out,
  - saved as mono 96 kbps MP3.
"""
import argparse
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "data" / "raw" / "voiceOver"
OUT = ROOT / "web" / "public" / "show" / "voice"


def norm(s):
    return re.sub(r"[^a-z0-9]", "", s.lower())


def script_lines():
    js = ("import { SHOW_SCRIPT } from './web/src/show-script.js';"
          "console.log(JSON.stringify(SHOW_SCRIPT.filter((s) => s.say).map((s) => [s.say, s.text])));")
    out = subprocess.run(["node", "--input-type=module", "-e", js], cwd=ROOT, capture_output=True, text=True, check=True)
    return json.loads(out.stdout)


def duration(path):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(path)],
                         capture_output=True, text=True, check=True)
    return float(out.stdout)


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--speed", type=float, default=1.12)
    a = p.parse_args()
    OUT.mkdir(parents=True, exist_ok=True)
    lines = script_lines()
    files = sorted(RAW.glob("*.mp3"))
    missing, before, after = [], 0.0, 0.0
    for line_id, text in lines:
        key = norm(text)
        # The exported name ends with the first ~48 characters of the line.
        # (after the voice name and a YYYY-MM-DD-HH-MM timestamp).
        match = [f for f in files if key.startswith(norm(re.sub(r"^.*?\d{4}-\d\d-\d\d-\d\d-\d\d-", "", f.stem))[:30])]
        if len(match) != 1:
            missing.append((line_id, len(match)))
            continue
        src, dst = match[0], OUT / f"{line_id}.mp3"
        trim = "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05"
        chain = f"{trim},areverse,{trim},areverse,atempo={a.speed},loudnorm=I=-16:TP=-1.5:LRA=11"
        subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", str(src), "-af", chain, "-ac", "1", "-ar", "44100",
                        "-b:a", "96k", str(dst)], check=True)
        d0, d1 = duration(src), duration(dst)
        before += d0
        after += d1
        print(f"{line_id:9s} {d0:5.1f}s -> {d1:5.1f}s")
    print(f"total {before:.0f}s -> {after:.0f}s at {a.speed}x")
    if missing:
        print("NOT MATCHED:", missing)
        return 1


if __name__ == "__main__":
    sys.exit(main())
