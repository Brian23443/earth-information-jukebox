# Earth Information Jukebox

By Team Waveform, for NASA Space Apps 2026.

NASA Space Apps 2026: a spinnable 3D globe that plays NASA Earth data as music. Built for blind and low-vision users first. The plan is in [docs/](docs/).

```
pipeline/   Python, run once offline: download → frames → colors back to values → summaries
web/        Vite + three.js + Tone.js static site that reads pipeline output
data/raw/   untouched NASA downloads (git-ignored)
data/work/  extracted frames, check images (git-ignored)
```

## Run the site

The site runs before any data is downloaded. Until the pipeline has run, Ocean temperature uses synthetic demo data, and the footer says so.

```bash
cd web && npm install && npm run dev
```

## Deploy

The site is published with GitHub Pages from the `gh-pages` branch, which holds only the built site. `main` holds code, pipeline and docs; the generated data in `web/public/data/` isn't in git, so run the pipeline first on a fresh checkout. To build and publish:

```bash
scripts/deploy.sh
```

The script refuses to publish if the build is over GitHub Pages' 1 GB limit or any file is over 100 MiB, and it leaves out local-only files such as `web6840.mp4`.

## Pipeline

```bash
python3 -m venv .venv && source .venv/bin/activate && pip install -r pipeline/requirements.txt
```

Needs `ffmpeg` and `ffprobe` on your PATH (`brew install ffmpeg`).

### Sea surface temperature (flagship)

1. **Download.** Gets the MP4 (~256 MB), the colorbar and about 500 TIF frames. Start it first, since it's slow.
   ```bash
   python pipeline/download.py sst
   ```
2. **Check frame alignment.** Writes `frames.json` and warns if the movie and frame set disagree. If they do, find the intro length by eye and re-run with `--offset N`.
   ```bash
   python pipeline/media.py probe sst
   ```
3. **Re-encode for the web.** Writes a 2048×1024 `web.mp4`, which must stay under GitHub Pages' 100 MB file limit.
   ```bash
   python pipeline/media.py encode sst
   ```
4. **Verify the legend stops** against the colorbar, then update `manifest.py`:
   ```bash
   python pipeline/legend.py sample data/raw/sst/sst_ecco2_cbar.png --line X0 Y X1 Y --vmin 0 --vmax 32
   ```
5. **Check the mapping on one frame.** Look at the check images in `data/work/sst/check/`.
   ```bash
   python pipeline/legend.py check sst data/raw/sst/frames/23000.tif
   ```
6. **Write the summaries** (`summary.bin` plus `summary.json`). Use `--limit 10` for a quick test run.
   ```bash
   python pipeline/summarize.py sst --grids
   ```

7. **Build the zoom-detail stills.** Streams the 6840×3420 TIFs one at a time, and writes 51 JPEG stills (about 580 MB, git-ignored) plus `hires.json`. The JPEGs use quality 88 with full-resolution color (4:4:4), because standard compression smeared the thin colored lines. Use `--every 80` for half as many.
   ```bash
   python pipeline/hires.py sst
   ```

8. **Build the sharper 4096 playback video.** About 45 minutes: it streams all 2,001 of NASA's 6840 frames (about 70 GB transferred) and keeps 14 GB of 4096 JPEGs in `data/work/sst/frames4096/`, so re-encoding doesn't need another download.
   ```bash
   python pipeline/video4k.py sst frames
   ```
   Then encode `web4096.mp4`: 101 MB at a 12 Mbps cap, tagged as BT.709 limited range.
   ```bash
   python pipeline/video4k.py sst encode
   ```
   Thin colored lines look slightly duller than in NASA's frames, because browser video stores color at half resolution. The stills don't have this problem.

9. **Build the static land layer and video color correction** (about 15 s).
   ```bash
   python pipeline/landlayer.py sst
   ```
   Land never changes, but the video encoder spends almost nothing on it, so flat land turned into visible blocks with a faint tint. The globe now draws land from one sharp still through a coastline mask (`land.jpg`, `landmask.png`). It also corrects each video's colors with a matrix fitted against NASA's frames (`colorfix.json`). Mean error on flow lines drops from 30.2 to 20.6 (2048) and from 18.6 to 15.9 (4096). Add `?land=0` to the URL to compare without it.

10. **Full-resolution demo video (optional, Mac only).** About 50 minutes; it streams all 2,001 of NASA's 6840 TIFs (about 70 GB) straight into the Mac's hardware HEVC encoder without saving them.
    ```bash
    python pipeline/video_full.py sst
    ```
    It writes `web6840.mp4`: 340 MB, 40.8 Mbps, git-ignored. Open the site with `?video=6840` to use it. It plays only where the browser reports hardware HEVC decoding at that size, and otherwise falls back with a console note. In this mode, pausing and zooming in keep the moving video, because it's already full resolution. Tested on an M1 Pro: 30 fps, no dropped frames, in sync, and sharp while playing at 5.4× zoom. Use it to record the demo, not for the public site.

**Judge-safe loading** (in `web/src/main.js`, under "Video quality"):
- **Everyone starts on the 2048 video** (about 7 Mbps).
- **Upgrade only when it's safe.** While the 2048 video plays, a 3 MB test download plus the video's own buffering in the same window measures the connection. Either one alone misreads it: the test download competes with the video, and buffering alone reflects Chrome's pacing (it read 21 Mbps on localhost). The site switches seamlessly to 4096 only when the screen is at least 2,000 pixels wide, the GPU holds 4096 textures, and the measured speed is at least 25 Mbps.
- **Fallback:** two stalls within 30 seconds drop it back to 2048 for the rest of the visit.
- **Two-step stills:** pause or zoom shows a 3072-wide preview (1.4 MB) first, then the 6840 still.
- **Tested through a bandwidth-limiting proxy:**

  | Link | Result |
  | --- | --- |
  | localhost | Measures about 1,800 Mbps and upgrades to 4096. |
  | 15 Mbps | Measures 15 Mbps and stays on 2048. Preview after 1.0 s, full still after 7.8 s. |
  | 40 Mbps | Measures 40 Mbps and upgrades to 4096. 30 fps, no dropped frames, sound in sync. |
  | 8 Mbps, 4096 forced | Stalls, drops to 2048, then plays steadily at 30 fps in sync. |

- **URL overrides for testing:**
  - `?video=2048` or `?video=4096` forces one video.
  - `?mbps=5` pretends to have a 5 Mbps connection.

**Sharpness:**
- **Playing** uses the 2048 video, which is soft on large Retina screens (about 0.4 texture pixels per screen pixel).
- **Pausing, or zooming past the detail threshold,** swaps in the nearest 6840×3420 still and snaps the time to it, so the picture, readout and sound match. Press Play to resume at video quality.
- **Zoom stops** where even the 6840 still would be magnified more than about 1.7×. On a 1600×1000 Retina window that's about 2×. The limit is calculated from the real canvas size.

### Lightning

These steps download the movie (4096×2048, 60 fps, 6,002 frames), check frame alignment, make an 8 MB 2048-wide web video, and summarize new flashes. Flashes are detected by their yellow color, so the gray latitude lines don't count. The summary reads every 4th frame straight from ffmpeg without saving images; it takes about 80 seconds.

- **Sound:** drums on sixteenth notes. Their density and loudness follow new flashes on the visible side (scaled to this dataset's typical busy level), pitch follows latitude (north high), and stereo position follows longitude. Thunder accents play on big bursts, and a low drone opens up with global storm activity.
- **Dates are approximate.** NASA says the movie covers March 2017 to July 2023, but frames don't map linearly to dates: a straight-line mapping puts northern summer in December, and a fitted yearly cycle finds about 8.3 cycles instead of 6.4. The site shows the period, not a specific day.

```bash
python pipeline/download.py lightning
```
```bash
python pipeline/media.py probe lightning
```
```bash
python pipeline/media.py encode lightning
```
```bash
python pipeline/summarize.py lightning
```
```bash
python pipeline/events.py lightning
```
```bash
python pipeline/nightmap.py
```
```bash
python pipeline/check_events.py --old data/work/lightning_events_v1.bin
```

**Vector lightning:** video is the worst case for a static map with tiny one-color dots; it blurred them. `events.py` (about 6 minutes) stores every dot NASA drew, once: 1,861,901 dots from 824,854 flashes in `events.bin` (18.6 MB, 10 bytes each: centre, lifetime, radius, NASA's peak brightness). NASA draws every flash as a soft round dot, so a busy storm is a cluster of overlapping dots; each cluster (184,900 of them) is split back into its dots at its brightness peaks, each dot owning the cluster pixels nearest to it. The globe redraws each dot as one GPU point with a soft glow (bright centre, faint halo) that stays sharp at any zoom and flattens correctly toward the globe's edge. Dots pop white-hot, burn yellow, then cool to orange in a half-second afterglow; overlapping dots take the brightest value (adding them blew busy storms out to white). Only dots that can be on screen are drawn.

- **Checked against NASA's frames** (`check_events.py`, 8 frames across the movie): we light 87% of NASA's lit pixels, and 74% of what we light is lit in NASA's frame. The previous version (one dot per flash, capped at 3 px so merged blobs didn't balloon) lit only 44%, at 77%. Drawing dots 10% or 20% larger lights 93% / 96% but drops precision to 67% / 60%, so dots stay at true size. An intermediate version kept exact cluster outlines as an image atlas (96.5% / 76%), but zoomed in, those looked pixelated next to the smooth dots.
- **Night map:** NASA Black Marble 2016 (`nightmap.py`, from Earth Observatory's Earth at Night maps), recoloured from yellow-orange to cool blue-white so city lights can't be mistaken for lightning. 8192 and 4096 wide; the site picks by GPU and screen.
- **Fallback:** `?events=0` switches back to the video version.

### Aerosols

The first command downloads the 2048 NoLabels movie (2,206 frames, 30 fps) and the colorbar. The second encodes the 19 MB web video.

```bash
python pipeline/download.py aerosols
```
```bash
python pipeline/media.py encode aerosols
```

The second command below encodes a 91 MB 4096 version (12 Mbps cap) from NASA's own 4096 NoLabels movie, which has 2 more frames than the 2048 one (2,208). That's a 0.07 s difference, too small to hear.

```bash
python pipeline/media.py probe aerosols
```
```bash
ffmpeg -i data/raw/aerosols/Aerosols_NoLabels_4096x2048_30fps.mp4 -an -vf "scale=out_color_matrix=bt709:out_range=tv,format=yuv420p" -colorspace bt709 -color_primaries bt709 -color_trc bt709 -color_range tv -c:v libx264 -preset slow -crf 30 -maxrate 12M -bufsize 24M -movflags +faststart web/public/data/aerosols/web4096.mp4
```

The next command separates the four aerosol types (about 1.5 minutes):

```bash
python pipeline/aerosols.py aerosols
```

The four types are drawn as translucent colors that blend where they overlap:

| Type | Colorbar swatch (RGB) |
| --- | --- |
| Smoke (black carbon) | 210, 94, 69 |
| Dust | 193, 154, 220 |
| Sea salt | 133, 170, 169 |
| Sulfate | 83, 220, 52 |

**How the types are separated:**
1. **Background:** take each pixel's clearest value across the movie (its 5th percentile), which gives the gray land and dark ocean.
2. **Subtract it**, leaving only the aerosol color.
3. **Split what's left into the four swatch colors** using non-negative least squares (amounts can't go below zero, so blends come out as mixes of types). This is precomputed for all 32,768 quantized colors.

On frame 700, the redrawn types match NASA's frame: the Saharan dust plume, the Canadian, South American and African smoke, the sulfate swirls, and Southern Ocean sea salt. The brightest sea-salt cores read slightly as dust.

**Output:** `classes.bin` (amount of each type per map cell and frame), `summary.bin` (total aerosol), and explore grids that store the dominant type and its strength.

**Sound:** one texture layer with four voices, each loud in proportion to that type on the visible side, relative to its typical amount:
- **Smoke** crackles like fire.
- **Dust** is a low drone, opening up as it thickens.
- **Sea salt** is an airy shimmer that swells like surf.
- **Sulfates** are pentatonic bell tones.

Hovering a plume plays that type alone for 1.5 seconds, with the others ducked to about 12%.

### Guided show

A narrated tour (about 2 minutes 20 seconds) that teaches the sounds one at a time, then hands over the planet: "Start the show" on the cover, or "Guided show" in the app. Each scene flies to a place, picks the dataset and date, and plays one sound layer alone while the narrator names it, then the full mix. During the show you can still look around (drag, zoom, the spin and zoom buttons, arrow keys) without stopping it: the show keeps steering its own camera track, and when you let go the camera eases back to where the show is by then (lands exactly within ~2 s). Dataset tabs and the timeline are locked during the show so narration and data stay together; mute still works. Esc or "Explore on my own" ends it, leaving the planet where it is. Captions show every line; the data sounds dip while the narrator speaks. Zoom-in detail stills are held off during the show so playback isn't paused.

- **Script:** `web/src/show-script.js`. Every claim was checked against the data at that place and date (noted in the file): e.g. August 2007, the South Atlantic toward the Southern Ocean averages 17.9 °C against 24.2 °C for the tropical Pacific, so the chord really drops. Comparisons are paused on their checked date (playing on, the ocean reaches southern summer within a minute).
- **Voice:** each line `<id>` plays `web/public/show/voice/<id>.mp3` when it exists, otherwise the browser's built-in voice reads it (a stand-in). The recordings are AI-generated; `python pipeline/voiceover.py` takes the exported files from `data/raw/voiceOver/` (named after the start of each line), matches each to its line, speeds it up 12% (pitch kept), trims silence at both ends and evens out loudness (-16 LUFS): 199 s of speech becomes 170 s. `node scripts/export-show-script.mjs` writes `docs/show-script.md`, the list of lines and file names to record. Builds list the recordings in `show/voice/index.json`, so the live site never probes for missing ones.
- **Temperature tone:** in the ocean scene, a single note whose pitch is the sea temperature at the centre of the view (averaged 15° of longitude either side, so a strip of land doesn't silence it), gliding along the scale. The camera sweeps the Pacific at 160° W from 75° N to the equator and on to 70° S (the show may tilt up to 75°; exploring stays within 30°, and the view eases back after the show). Checked in late July 2007: 0.1 °C at 75° N (lowest note), 27.5 °C at the equator (12 steps up, almost two and a half octaves), 0.1 °C at 70° S.
- **Engine:** `web/src/show.js`; camera moves via `globe.flyTo`, single-layer playback via `sound.focus`, narration ducking via `sound.duck`.

### Switching datasets

Measured before: switching to Lightning blocked the page for ~600 ms (parsing 1.86M dots, building their GPU buffers, uploading the 8192 night map), every time. Now:
- **Loaded once per visit** (`data.js` caches each dataset); lightning's dots are parsed and placed in a worker (`events-worker.js`), and their GPU buffers are built once and kept.
- **Preloaded** after the app starts, one piece at a time: the other datasets' data, dot buffers, night map and land layers are decoded off the main thread and uploaded to the GPU, and the first seconds of each video are fetched.
- **Lightning's night map** shows the 4096 version first (0.4 MB); the 8192 one loads only when someone zooms in past 1.4×.
- **No blank frames:** the old dataset stays on the globe (paused on its last frame) until the new one's first picture is decoded, then the new one replaces it with a transition; lightning dots fade in and out. With reduced motion, it switches at once.
- **Transitions** (`?swap=` to try each): `bloom` (default, 1.3 s): a blue glow ignites at the centre of the view and spreads over the planet with a ragged, glitching front, tinting and speckling the old data ahead of it while the blue drains out of the new data behind. `scan` (1.2 s): a bright line passes pole to pole like a satellite pass. `dissolve` (1.1 s): the old data breaks up in an organic pattern with glowing edges. `sweep` (0.8 s): left to right.
- **Video quality:** once a visit has upgraded to 4096, later switches start on 4096 directly instead of 2048 then 4096.

Result (M1 Pro, Chrome): no main-thread tasks over 50 ms on any switch, after preloading or before it (switching to Lightning right after start: map on screen in 212 ms).

### Cover (start screen)

`python pipeline/covermaps.py` -> `web/public/cover/` (1.6 MB): NASA Blue Marble Next Generation (August 2004, topography and bathymetry, 5400×2700) by day and Black Marble 2016 city lights by night, both 4096×2048. The cover is the app's own globe, lit by a staged sun with a thin atmosphere glow, turning slowly beside the headline. "Start listening" starts audio, then the same globe glides into the app view while turning 180° (the real star map sweeps past), and the ocean data sweeps across it from the sunlit side ("data dawn") before the controls fade in, about 3.5 seconds in all. With reduced motion, it's a short fade. The Sun, Moon and planets are hidden on the cover, since its sunlight is staged.

### Sky (Sun, Moon, planets, stars)

`web/src/ephemeris.js` computes where the Sun, Moon and seven planets were on the date being
shown (JPL approximate Keplerian elements; Astronomical Almanac Moon series), and
`web/src/sky.js` draws them behind the globe in a separate pass from the Earth's center, so
the sky sits at infinity: zooming out (up to 4x the default distance) never shifts it. It
turns with the Earth, so dragging the globe is like flying around it. Checked against known
events, all within ~0.5°: the 2017 and 2024 solar eclipses, the 2020 Jupiter-Saturn
conjunction, equinox/solstice, a Mars opposition, Venus's greatest elongation, and Moon
phases (new/quarter/full).

Textures (`python pipeline/skymaps.py` -> `web/public/sky/`, ~12 MB; raw files in
`data/raw/sky/`, fetched by hand):
- Stars: NASA SVS [Deep Star Maps 2020](https://svs.gsfc.nasa.gov/4851), `starmap_2020_8k.exr`
  (real Hipparcos/Tycho/Gaia stars and Milky Way, J2000), tone mapped to an 8192x4096 sRGB JPEG.
- Moon: NASA SVS [CGI Moon Kit](https://svs.gsfc.nasa.gov/4720), `lroc_color_2k.jpg` (LRO).
- Sun, planets, Saturn's rings: [Solar System Scope](https://www.solarsystemscope.com/textures/)
  2k maps (CC BY 4.0), built from NASA mission imagery. Ring texture placed at 1.215-2.335
  Saturn radii, which puts the Cassini division at 1.95-2.03 where it is.

Caveats:
- The sky shows each day as at noon UTC (the true time of day would spin the whole sky once
  per day of playback). The Sun therefore sits over roughly longitude 0°.
- Bodies are drawn larger than life (the real Moon is half a degree across) so they are visible.
- Every body is drawn at the same distance; only directions are real (no depth or parallax).
- Lightning has no exact dates, so its sky is fixed at the start of its period.

### Not built yet

- **Forest height:** download the GeoTIFF by hand from <https://doi.org/10.5069/G9V12301>, which needs a free OpenTopography account, then write a `static` mode.
- **Night lights:** the `change` mode is a TODO.

## What we learned about the sources

From the SVS API, checked 2026-11-14:

- **SST frames are TIFs, already thinned.** There are 2,001 files numbered 23000 to 31000 in steps of 4. "Every 4th frame" means every 4th *file*.
- **SST has no date file.** Dates are interpolated across 2007-03-25 to 2008-03-03.
- **The aerosols NoLabels frame folder has no file listing,** so its frames come from the MP4.
- **Lightning's 4096×2048 movie runs at 60 fps,** and the others at 30 fps. `frames.json` records each one's frame rate.
- **The source MP4s are 180–350 MB.** Always serve the re-encoded `web.mp4`.

## Credits

Visualizations by NASA's Scientific Visualization Studio. Data from ECCO2 (MIT/JPL), ISS LIS (NASA GHRC), GEOS-FP (NASA GMAO), GEDI (NASA ORNL DAAC) and Black Marble (Suomi NPP VIIRS). The per-dataset credit is shown in the site footer.
