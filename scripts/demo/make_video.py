"""Cuts the takes into the 30-second demo: framed recording, narration, captions, end card.

python3 make_video.py <takes dir> <voice dir> <overlay dir> <out.mp4>
Voice dir holds the six lines: named v1..v6, "1-...".."6-...", or exported by a voice tool
with the start of the line in the name. Each is trimmed of silence, optionally sped up
(SPEED=1.12, pitch kept, like the show's voice) and evened out to -16 LUFS.
"""
import json, os, re, subprocess, sys
from pathlib import Path

takes, vdir, ov, out = map(Path, sys.argv[1:5])
X = 0.3            # crossfade between shots
FPS = 60
FX, FY, FW, FH = 160, 40, 2240, 1260   # recording's place in the 2560x1440 frame (see overlays.mjs)

# (take, start, end) in the raw recordings; see the takes' .marks.json
SHOTS = [
    ("main", 0.6, 10.0),    # cover, the click, the dissolve into the ocean
    ("main", 14.25, 18.95),   # pointing from the North Pacific to the equator: the tone climbs
    ("main", 25.1, 29.8),   # lightning: the transition and storms over Africa
    ("main", 31.3, 36.0),   # aerosols: the transition into Saharan dust and African smoke
    ("show", 9.0, 13.6),    # the guided show, with its captions
]
END = 2.8                   # end card
# narration line -> (shot index, seconds into that shot)
VO = [(0, 0.3), (0, 4.1), (1, 0.35), (2, 0.45), (3, 0.4), (4, 0.4)]

lens = [b - a for _, a, b in SHOTS]
starts, t = [], 0.0
for L in lens:
    starts.append(t)
    t += L - X
end_start = t
total = end_start + END
assert total <= 29.9, total

def dur(p):
    return float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(p)],
                                capture_output=True, text=True, check=True).stdout)

LINES = json.loads((Path(__file__).parent / "lines.json").read_text())
key = lambda s: re.sub(r"[^a-z0-9]", "", s.lower())
files = [f for f in sorted(vdir.iterdir()) if f.suffix.lower() in (".mp3", ".wav", ".aiff", ".m4a") and not f.name.startswith("_")]

def find(i):
    by_num = [f for f in files if re.match(rf"^(v)?{i}(\D|$)", f.stem)]
    if len(by_num) == 1:
        return by_num[0]
    by_text = [f for f in files if key(LINES[i - 1]).startswith(key(re.sub(r"^.*?\d{4}-\d\d-\d\d-\d\d-\d\d-", "", f.stem))[:24])]
    if len(by_text) != 1:
        sys.exit(f"line {i}: found {len(by_text)} matching files in {vdir}")
    return by_text[0]

speed = float(os.environ.get("SPEED", "1"))
trim = "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05"
voice = []
for i in range(1, 7):
    src = find(i)
    norm = vdir / f"_n{i}.wav"
    chain = f"{trim},areverse,{trim},areverse," + (f"atempo={speed}," if speed != 1 else "") + "loudnorm=I=-16:TP=-1.5:LRA=11"
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", str(src), "-af", chain, "-ar", "48000", "-ac", "2", str(norm)], check=True)
    shot, off = VO[i - 1]
    at = starts[shot] + off
    voice.append((norm, at, dur(norm)))
for (n, at, d), nxt in zip(voice, voice[1:] + [(None, total, 0)]):
    print(f"{n.name}: {at:5.2f}-{at + d:5.2f}s" + ("  OVERLAPS NEXT" if at + d > nxt[1] - 0.1 else ""))

inputs, fc = [], []
def inp(*args):
    inputs.extend(args)
    return sum(1 for a in inputs if a == "-i") - 1

# Video and app audio per shot
for k, (take, a, b) in enumerate(SHOTS):
    i = inp("-ss", f"{a}", "-t", f"{b - a}", "-i", str(takes / f"{take}.webm"))
    fc.append(f"[{i}:v]fps={FPS},scale={FW}:{FH}:flags=lanczos,setsar=1,pad=2560:1440:{FX}:{FY}:black,format=yuv420p,setpts=PTS-STARTPTS[v{k}]")
    gain = 0.0 if take == "show" else 1.0   # the show's own narrator would talk over ours
    fc.append(f"[{i}:a]aresample=48000,asetpts=PTS-STARTPTS,volume={gain}[a{k}]")
e = inp("-loop", "1", "-t", f"{END + X}", "-framerate", f"{FPS}", "-i", str(ov / "end.png"))
fc.append(f"[{e}:v]format=yuv420p,setsar=1[v{len(SHOTS)}]")
fc.append(f"anullsrc=r=48000:cl=stereo,atrim=0:{END + X}[a{len(SHOTS)}]")

# Chain crossfades
v, a = "v0", "a0"
for k in range(1, len(SHOTS) + 1):
    off = starts[k] if k < len(SHOTS) else end_start
    fc.append(f"[{v}][v{k}]xfade=transition=fade:duration={X}:offset={off:.3f}[vx{k}]")
    fc.append(f"[{a}][a{k}]acrossfade=d={X}:c1=tri:c2=tri[ax{k}]")
    v, a = f"vx{k}", f"ax{k}"

# Overlays: frame edge, disclosure, captions while each line plays
fr = inp("-loop", "1", "-framerate", f"{FPS}", "-i", str(ov / "frame.png"))
ds = inp("-loop", "1", "-framerate", f"{FPS}", "-i", str(ov / "disclosure.png"))
fc.append(f"[{v}][{fr}:v]overlay=0:0:shortest=1:enable='lt(t,{end_start})'[o0]")
fc.append(f"[o0][{ds}:v]overlay=0:0:shortest=1:enable='lt(t,{end_start})'[o1]")
v = "o1"
for i, (n, at, d) in enumerate(voice, 1):
    c = inp("-loop", "1", "-framerate", f"{FPS}", "-i", str(ov / f"cap{i}.png"))
    stop = min(at + d + 0.35, end_start if i < 6 else total)
    fc.append(f"[{c}:v]format=rgba,fade=in:st={at - 0.1:.2f}:d=0.15:alpha=1,fade=out:st={stop - 0.15:.2f}:d=0.15:alpha=1[c{i}]")
    fc.append(f"[{v}][c{i}]overlay=0:0:shortest=1:enable='between(t,{at - 0.1:.2f},{stop:.2f})'[o{i + 1}]")
    v = f"o{i + 1}"
fc.append(f"[{v}]trim=0:{total:.3f},fade=in:st=0:d=0.4,fade=out:st={total - 0.5:.3f}:d=0.5[vout]")

# Narration over the app's own sound, which ducks under the voice
vin = []
for i, (n, at, d) in enumerate(voice, 1):
    j = inp("-i", str(n))
    fc.append(f"[{j}:a]adelay={int(at * 1000)}|{int(at * 1000)}[n{i}]")
    vin.append(f"[n{i}]")
fc.append(f"{''.join(vin)}amix=inputs={len(vin)}:normalize=0,apad,atrim=0:{total:.3f}[voice]")
fc.append("[voice]asplit=2[voice1][voicekey]")
fc.append(f"[{a}]loudnorm=I=-20:TP=-3,atrim=0:{total:.3f}[app]")
fc.append("[app][voicekey]sidechaincompress=threshold=0.02:ratio=5:attack=30:release=350[duck]")
fc.append(f"[voice1][duck]amix=inputs=2:normalize=0,loudnorm=I=-14:TP=-1:LRA=9,aresample=48000,afade=t=out:st={total - 0.6:.3f}:d=0.6[aout]")

cmd = ["ffmpeg", "-v", "error", "-y", *inputs, "-filter_complex", ";".join(fc), "-map", "[vout]", "-map", "[aout]",
       "-c:v", "libx264", "-preset", "slow", "-crf", "14", "-profile:v", "high", "-pix_fmt", "yuv420p", "-r", f"{FPS}",
       "-c:a", "aac", "-b:a", "320k", "-movflags", "+faststart",
       "-metadata", "title=Earth Information Jukebox: 30-second demo (Team Waveform, NASA Space Apps 2026)",
       "-metadata", "comment=Screen recording of the live site. Narration voice is AI-generated (synthetic speech); all visuals and sounds are the project's own rendering of NASA data.",
       "-t", f"{total:.3f}", str(out)]
subprocess.run(cmd, check=True)
print(f"wrote {out} ({total:.2f}s)")
