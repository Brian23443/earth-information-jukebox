# Demo video (29 seconds)

The demo is a product-style walkthrough of the live site: a screen recording framed on black, with narration, burned-in captions and an end card. It follows the beats in the Space Apps guide (who we are, the challenge, the project name, how it works, the future).

- **Format:** 2560×1440, 60 fps, H.264, about 125 MB; AAC audio at -14 LUFS (YouTube's level).
- **Picture quality:** the ocean plays NASA's full-resolution 6840 video (`?video=6840`). Lightning uses the 8192-wide Black Marble map, and aerosols use the 4096 video from the first frame.
- **Draft:** `submission/demo-draft.mp4`. Its voice is a stand-in synthetic voice, used only to set the timing.

## Narration: 6 lines to record

Use the same voice as the guided show. Each line has a time slot, so keep the pace natural and don't add pauses.

| # | Time | On screen | Line |
| --- | --- | --- | --- |
| 1 | 0:00–0:04 | Cover page | We're Team Waveform, and this is the Earth Information Jukebox. |
| 2 | 0:04–0:09 | "Explore on my own" clicked; the ocean data sweeps across the globe | NASA's Earth data is made to be seen. We made it heard, for blind and low-vision people first. |
| 3 | 0:09–0:13 | The cursor moves from the North Pacific to the equator; the readout climbs from about 12 °C to 28 °C | Point at the ocean: the warmer the water, the higher the note. |
| 4 | 0:13–0:17 | Switch to Lightning; storms over Africa | Lightning seen from the Space Station plays as drums. |
| 5 | 0:17–0:22 | Switch to Aerosols; Saharan dust and African smoke | Dust, smoke, sea salt and sulfates each get their own sound. |
| 6 | 0:22–0:28 | The guided show with its captions, then the end card | With a narrated tour, captions and full keyboard support, anyone can hear our planet change. |

Put the six exported files in `data/raw/demoVoice/`. Names don't matter, as long as each one starts with its line number (`1-…`, `2-…`) or keeps the start of the line in its name, as the voice tools export them.

## Make it again

The tools are in `scripts/demo/`.
- `record.mjs` drives real Chrome through the site and records the tab, picture and sound.
- `overlays.mjs` draws the frame, captions, disclosure and end card in the site's fonts.
- `make_video.py` cuts, crossfades, mixes and encodes the video.

The raw takes are kept in `submission/takes/`, which is git-ignored.

```bash
cd web && npm run dev
```

```bash
mkdir -p /tmp/demo-rec && cd /tmp/demo-rec && npm init -y && npm i playwright-core@1.55.0 && cp ~/path/to/repo/scripts/demo/*.mjs .
```

```bash
node record.mjs main takes && node record.mjs show takes
```

```bash
node overlays.mjs overlays lines.json && python3 make_video.py takes voice overlays demo.mp4
```

Recording notes, for this Mac and its scaled display:
- The page is 1280×720 at 2× (2560×1440).
- After Chrome's "sharing this tab" bar appears, the window is resized so the page stays fully visible. The recorder starts only after that, because a size change mid-recording corrupts the stream.
- H.264 in WebM is the only recorder format that is both smooth (about 59 fps) and clean here. VP9 manages 38 fps, and Chrome's MP4 output was corrupt at this size.

## Rules this follows

- **Length:** under 30 seconds. Over 30, the project can't be judged globally.
- **Language:** English, with captions on every line.
- **AI disclosure:** the narration is AI-generated, so the video says "Narration voice: AI-generated" on screen, and its file metadata says the same. Nothing in the picture is AI-generated.
- **NASA branding:** no NASA logos are used.
- **People:** none appear in the video.
