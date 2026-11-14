# Earth Information Jukebox — Build Plan

Nov 14, 2026 · @Brian

## Summary

We're building a web-based Earth Jukebox: a 3D globe you can spin and *hear*. NASA visualizations are wrapped onto the globe as flat-map textures, and music is generated live from the data on the side facing you. Explore mode plays the value under the cursor, or under a fixed crosshair for keyboard users.

**Pitch:** "Close your eyes. This is the ocean." Earth science you can hear, built for blind and low-vision users and good to listen to for everyone.

**Why it wins with generalist judges:**

- **Sound sets the video apart.** In a virtual event, judges watch a run of silent screen recordings. Ours opens on a black screen with music.
- **We recover the science, not just the colors.** Each legend is mapped back to real values (°C, flash counts) before anything becomes sound. Forest height goes further and uses the real lidar measurements behind NASA's visual. That covers scientific validity.
- **Accessibility is the brief's core theme, so it's in Core, not stretch.** Arrow keys spin the globe, every control is labeled, and a screen reader announces the current value.
- **Data risk is low but not zero.** Every input is public, but the frame sets are large, so we download every 4th frame and keep the browser's data small.

**Scope:** one globe, four textures. Sea surface temperature is the flagship, then lightning, animated aerosols, and forest height for explore mode. Night lights is a fifth if time allows. Two done well beats four done badly.

## Data

Every texture must be a 2:1 flat world map (equirectangular), which wraps straight onto a sphere. The rotating-globe videos on most SVS pages can't be used. Four textures come ready-made from NASA's Scientific Visualization Studio (SVS); we render forest height ourselves from the raw GEDI data.

| Texture | Role | Flat-map download | What the colors or values mean | Data behind it | Watch out for |
| --- | --- | --- | --- | --- | --- |
| [Sea Surface Currents and Temperature](https://svs.gsfc.nasa.gov/3912/) | **Flagship.** Continuous soundscape | 2048×1024 flat global MP4 for the texture. For analysis, fetch **every 4th frame** of the "orig" frame set (\~500 of 2,002) by filename, plus the colorbar PNG and date file | Flow lines colored by temperature in °C: blue 0, green 10–20, yellow \~25, red 32 | ECCO2 ocean model (NASA/JPL) | Only the flow lines carry data, so mask the background. Covers 2007-03-25 to 2008-03-03 |
| [Lightning from the ISS](https://svs.gsfc.nasa.gov/5011/) | **Percussion** | Science On a Sphere movie, 4096×2048. Downscale it once with ffmpeg to a 2048×1024 MP4 for the texture; extract every 2nd frame from the full-size movie for analysis | Strike points over a rolling 10-day window, Jan 2017 to Jul 2023 | ISS Lightning Imaging Sensor (LIS), Science Data V1 (GHRC) | Projection inferred from the 2:1 shape, so confirm by eye. No colorbar |
| [Aerosols, sphere version](https://svs.gsfc.nasa.gov/5552/) (of listed [GEOS Aerosols](https://svs.gsfc.nasa.gov/5669/)) | **Layered instruments**, animated | 2048×1024 NoLabels MP4 for the texture. Every 4th frame of the NoLabels frame set for analysis, plus Aerosols\_cbar.png | Sea salt cyan/blue, dust magenta, black carbon (smoke) orange/red, sulfates green | GEOS-FP model (GMAO), Aug 1 to Sep 14, 2024 | Use NoLabels, not WithLabels. The page is inconsistent on the sea salt color, so check the colorbar |
| **Forest height**, built from the data behind the EIC visual [GEDI Forest Height](https://svs.gsfc.nasa.gov/4950/) | **Explore-mode showpiece** | GEDI L3 mean canopy height (RH100), Version 2, from [OpenTopography's lat/lon copy](https://doi.org/10.5069/G9V12301) (link checked: collection OT.032022.4326.1, already in WGS84 / EPSG:4326, so no reprojection). Bulk download needs a free OpenTopography account. We color it and save a 4096×2048 texture plus a 1024×512 value grid | Real canopy height in meters, on 1 km cells | GEDI lidar on the ISS (NASA ORNL DAAC) | Covers 52°S to 52°N only. Not an EIC frame itself, so the app shows the SVS 4950 video beside the globe (see What we build). Version 3 (Oct 2026) is at ORNL DAAC but needs an Earthdata login and reprojection, so only use it if time allows |
| [Night lights, sphere version](https://svs.gsfc.nasa.gov/5475/) (of listed [Night Lights](https://svs.gsfc.nasa.gov/5313/)) | **Stretch:** "hear the change" | 2048×1024 frame set or PNG | Purple = more light, orange = less light, 2012–2024 | Black Marble (Suomi NPP VIIRS) | No colorbar or units, so treat it as relative change |

**Ruled out**, because they're only available as globe views or labeled maps: DYAMOND CO₂, Air Quality, and the main Perpetual Ocean 2 page. **Downloads take real time:** script every download by filename on Saturday afternoon, and never pull a full frame set. **Do now:** create a free [OpenTopography account](https://portal.opentopography.org/) for the GEDI download. A free [Earthdata login](https://urs.earthdata.nasa.gov/) is only needed if we switch to GEDI Version 3.

## What we build

One web page built around a 3D globe. Everything in **Core** must work by Saturday midnight. **Stretch** is Sunday-morning work, done in order until time runs out.

**Core**

1. **Globe Jukebox.** A three.js sphere that turns slowly on its own. Drag to spin it, with momentum: a harder drag spins it faster. Spin is left and right; up-and-down tilt is clamped to ±30° so the sound summaries (see Architecture) stay accurate. Pick a dataset from a shelf of cards to swap the texture. Animated textures play as video on the sphere, with play/pause, scrub and speed controls.
2. **Recover the data from the colors.** Every pixel is mapped back to a real value through its legend before it drives sound. Forest height skips this step because it's built from real values. A small on-screen readout shows the live value.
3. **Accessibility essentials.** This is the slice we can least afford to lose:
   - The globe container has `tabindex="0"` (so it can take keyboard focus at all), `role="application"` and a clear label ("Earth globe. Arrow keys spin, the center crosshair plays what's under it"). Without the role, NVDA and VoiceOver take over the arrow keys in their default reading mode.
   - Arrow keys spin the globe, and a fixed crosshair at the center plays whatever is under it.
   - Every control has a label.
   - A polite live region announces the dataset, date and current value, limited to about one announcement every 2 seconds.
4. **A start screen that respects autoplay.** One big "Start listening" button, since browsers won't play audio before a click. Keyboard-operable.
5. **NASA credit line on the site.** A footer for each dataset, e.g. "Visualization: NASA's Scientific Visualization Studio", with the SVS page linked, plus the data source (ECCO2, ISS LIS, GEOS-FP, GEDI).

**Stretch, in priority order**

1. **Explore mode.** The cursor's point on the globe gives an exact latitude and longitude, which looks up the value there and plays it. Holding Shift reads the value aloud.
2. **Forest height, paired with its EIC visual.** When forest height is picked, the SVS 4950 video plays in a panel beside the globe, captioned "NASA's visual (left) and the real lidar measurements behind it (right)." This keeps us on-brief: we pair the EIC frame with sound and go one step deeper.
3. **Accessibility polish:** a spoken description of each dataset, high-contrast focus rings, reduced-motion support (no automatic spin).
4. **Night lights, "hear the change."** Spin the globe: places that got brighter rise in pitch, and places that dimmed fall.
5. **"How it works" panel.** Shows the legend, the color-to-value mapping and the sound mapping. It doubles as our validity evidence for judges.
6. **Export.** Download the current soundscape as a WAV file.

**Out of scope:** machine-learning models, user uploads, any server-side audio.

## Sound design

Every mapping follows three rules so it stays musical:

- **Pitch snaps to one pentatonic scale** (C minor pentatonic as the default), so no combination of notes clashes.
- **Data is smoothed** over about 0.5 seconds before it reaches the sound, so notes don't jitter.
- **At most four layers play at once.** A *layer* is one musical part: a pad, a melody line, a percussion line or a texture. A melody line can play several notes. SST uses three layers (pad, 4-note melody, arpeggio), which leaves one free for the explore-mode cursor.

| Dataset | Data feature | Sound (layer) |
| --- | --- | --- |
| Sea Surface Temperature | Mean temperature of the side of the globe facing the viewer | Pad: warmer opens the filter and moves the chord up the scale |
| Sea Surface Temperature | Average temperature in 4 longitude bands across the visible side | Melody: 4 notes, panned from left to right |
| Sea Surface Temperature | How much the flow lines move between frames | Arpeggio: faster currents give busier rhythm |
| Lightning | Number of new flashes on the visible side in each frame | Percussion: hits, with volume following the count |
| Lightning | Latitude of each flash cluster | Percussion pitch: north high, south low, so the seasons swinging between hemispheres become audible |
| Lightning | Longitude of each flash cluster | Percussion stereo position |
| Aerosols | Share of each of the 4 types on the visible side in each frame | Texture: 4 sounds mixed by share (dust = low drone, smoke = crackly noise, sea salt = airy shimmer, sulfates = bell tones). Counts as one layer |
| Aerosols (explore) | Type under the cursor | Cursor layer: that type's sound plays alone |
| Forest height (explore) | Canopy height under the cursor, in meters | Cursor layer: pitch rises with height. No forest = silence. Beyond 52° = soft wind noise, meaning "no data" |
| Night lights | Purple versus orange along the line of longitude facing the viewer | Melody: rising notes where lights grew, falling notes where they dimmed |

**Rule for the team:** whoever owns sound has final say on what sounds good. Run a 5-minute listening check after every change, on headphones *and* laptop speakers, since judges will use both.

## Architecture

There is one 3D model, a sphere, and every dataset is just a texture on it. All the heavy image work happens once, offline, in Python. The browser wraps flat maps on the globe, looks up precomputed numbers and makes sound, so it runs as a static site.

&#91;embedded content: architecture · offline pipeline and browser playback\]

*Text version, for exports where the diagram doesn't appear:* NASA downloads → ffmpeg + numpy (extract frames, mask land) → legend mapper (colors back to values) → static files (textures, per-frame summaries, value grids). In the browser: globe (three.js) → frame callback (features of the side facing the viewer) → Tone.js engine → speakers. Explore mode turns the cursor or keyboard crosshair into latitude and longitude, then feeds the value there to the engine.

**Stack:**

- **Offline:** Python 3 with ffmpeg, numpy, Pillow, scikit-image (for color matching in CIELAB) and rasterio (for the GEDI GeoTIFF).
- **Front end:** Vite with plain JavaScript and three.js. Animated datasets are a `VideoTexture` on the sphere, with `requestVideoFrameCallback` keeping sound in sync. Raycasting turns the cursor into texture coordinates, which convert directly to latitude and longitude. Sound runs on Tone.js.
- **Data size: no full value grid for every frame.** At 256×128 for each of SST's 2,002 frames, that would be about 65 MB for one dataset. Instead:
  - **Per-frame summaries:** offline, on every 4th frame, split the map into 256 longitude columns × 4 latitude bands. For each cell store:
    - the mean value, weighted by cos(latitude) so polar pixels don't skew it, and using only valid pixels (land, background and rejected colors are left out);
    - the valid-pixel count, so an empty cell reads as "no data", not 0 °C.

    That's about 2 KB per frame, about 1 MB for SST. The browser picks the cells facing the viewer from the globe's rotation and tilt, weights them by valid count, and interpolates between frames.
  - **Full value grids only for explore mode:** a 256×128 8-bit PNG (\~32 KB) fetched for the current frame when the user pauses or explores. Forest height is one static 1024×512 grid.
- **Textures:** 2048×1024 MP4s for every dataset (lightning downscaled from 4096×2048), loaded only when a dataset is picked.
- **Frame alignment:** sound reads PNG frame N while the screen shows the MP4. A `frames.json` per dataset records the MP4's fps, frame count and any offset (intro or fade frames), checked offline, and the browser turns the video's media time into a frame index through it.
- **Hosting:** GitHub Pages or Netlify.

## Schedule

Aim to submit by **Sunday 6 pm ET**, leaving buffer before the deadline. Confirm the exact cutoff on our local event page first. Three roles: **Data** (pipeline and color-to-value mapping), **Sound** (Tone.js engine and mappings), **Front end** (player, explore mode, accessibility). If you're working solo, run them in this order.

**Saturday afternoon, 1–6 pm: get the data working**

- [ ] Confirm the submission deadline and judging guide on the local event page
- [ ] Create a free OpenTopography account (needed for the GEDI bulk download)
- [ ] Data: write one download script that pulls by filename only: the SST 2048×1024 MP4, every 4th "orig" frame, colorbar and date file; the lightning 4096×2048 sphere movie; the aerosols NoLabels MP4, every 4th frame and colorbar. Start it first and let it run while you build
- [ ] Data: check frame alignment. Use ffprobe to get each MP4's fps and frame count, compare them with the frame set, and write `frames.json` (fps, count, offset). Downscale the lightning movie to 2048×1024
- [ ] Data: build the color-to-value mapper (nearest legend color in CIELAB, with a reject cutoff) and check it on 10 SST frames
- [ ] Data: output per-frame summaries for SST (256 columns × 4 latitude bands, mean plus valid count, \~1 MB) and a test value grid
- [ ] Data, 30 minutes max: GEDI Version 2 canopy height from OpenTopography → 4096×2048 texture + 1024×512 value grid. If it fights back, drop it and let aerosols carry explore mode
- [ ] Sound: Tone.js prototype playing a pad and a 4-note melody from a dummy JSON
- [ ] Front end: three.js globe with one SST frame as its texture and drag-to-spin, deployed as "hello world" to a static host

**Saturday evening, 6 pm–midnight: core working from start to finish**

- [ ] SST MP4 playing as a video texture, with sound in sync and driven by the video's own clock
- [ ] SST sounds good, with the first listening check passed
- [ ] Accessibility essentials: `role="application"` with a label on the globe, arrow keys plus the center crosshair, labeled controls, live region
- [ ] VoiceOver test, by 9 pm: with VoiceOver on, do the arrow keys spin the globe and is the value announced? Fix before moving on
- [ ] Checkpoint, 9 pm: if the globe is still fighting us, ship a flat-map player instead (same data, same sound, same keyboard controls) and move on
- [ ] NASA credit footer for each dataset
- [ ] Milestone: SST spinning on the globe with sound and keyboard control, on the deployed site
- [ ] Lightning texture, flash detection and percussion, **if time.** This evening is full, so lightning moving to Sunday 8 am is fine and expected

**Sunday morning, 8 am–1 pm: stretch features**

- [ ] Lightning, if it didn't land Saturday (first thing)
- [ ] Explore mode: raycast lookup, on-demand value grids, forest height (or aerosols)
- [ ] Forest height panel showing the SVS 4950 video beside the globe
- [ ] Aerosols texture and its sound mix
- [ ] Accessibility polish: spoken descriptions, focus rings, reduced motion
- [ ] "How it works" panel
- [ ] Night lights, if there's time

**Sunday afternoon, 1–6 pm: package and submit**

- [ ] Feature freeze at 1 pm. Bug fixes only after this
- [ ] Record and edit the 30-second video
- [ ] Write the project description and write-up of artistic choices
- [ ] Final deploy, check it in a fresh browser, submit

## Risks and cut list

| Risk | Early warning | Fallback |
| --- | --- | --- |
| It sounds like noise, not music | First listening check on Saturday evening fails | Fewer layers, slower changes, a narrower pitch range. Drop the arpeggio before the pad |
| Screen readers take over the arrow keys | With VoiceOver or NVDA on, arrows read text instead of spinning the globe | `role="application"` plus a label on the globe container, and test it by 9 pm Saturday. Also offer on-screen spin buttons |
| The globe takes up the whole evening | Video texture or drag-to-spin isn't working by 9 pm | Ship a flat-map player with the same data, sound and keyboard controls. Bring the globe back Sunday if there's time |
| Downloads eat Saturday afternoon | Frame sets still downloading at 4 pm | Every 4th frame only, scripted by filename. Analyze from the MP4 with ffmpeg if frame downloads stall |
| Texture lands mirrored or shifted | Saharan dust doesn't sit over Africa, or Florida is in the wrong place | Flip the texture's U axis and/or rotate by 180° of longitude. Check every new texture against one known place |
| Sound and picture are out of step | The note changes before or after the visible change, or the drift grows over the run | MP4 frame count or fps doesn't match the frame set: fix the offset and fps in `frames.json`. Check one sharp visual change by ear |
| Summaries don't match what's on screen | Pad sounds warm while the visible side is mostly polar ocean | Confirm the tilt clamp, the cos(latitude) weighting and that masked pixels are excluded |
| Video compression smears colors, so values come out wrong | Many pixels rejected, or values jump from frame to frame | Analyze the PNG frames, not the MP4. Widen the reject cutoff. Smooth over 3 frames |
| GEDI download or processing is slow | Not working after 30 minutes | Aerosols carries explore mode; mention forest height as "next" in the write-up |
| Browser data or video textures are too heavy | First load over 5 seconds, or under 30 fps on a laptop | Per-frame summaries only; full grids on demand; 2048×1024 textures; load each dataset only when it's picked |
| Audio drifts out of sync, or the browser blocks it | Late drum hits; silence on first load | Schedule notes from the video's frame callback; start screen button (already Core) |

**Cut in this order:** export → "How it works" panel → night lights → accessibility polish → forest height → aerosols → lightning → the globe (fall back to the flat player). **Never cut:** SST with live sound, the start screen, the accessibility essentials (keyboard spin, labels, live region), and the NASA credit line.

## Submission

The video is our main deliverable, since virtual judges may never open the site. Check the 2026 Project Submission Guide for the length limit and required fields. The script below is written for 30 seconds.

**Video script (\~30 s)**

1. **0–5 s:** black screen, ocean soundscape only. Caption: *"Close your eyes. This is the ocean."*
2. **5–12 s:** the globe fades in, spinning, with sea surface temperature. Caption: *"Every note is a real sea temperature from NASA data."*
3. **12–18 s:** a hand drags the globe and the texture switches to lightning with drums. Caption: *"Every drum is a storm seen from the Space Station."*
4. **18–25 s:** explore mode over forest height. The cursor crosses the Amazon and the pitch climbs. Caption: *"Anyone can explore Earth by ear, sighted or not."*
   - **If forest height is cut:** explore mode over aerosols. The cursor moves from the Sahara (dust drone) out over the Atlantic smoke plume (crackle). Same caption.
   - **If explore mode is cut:** keyboard-only spin of the SST globe with the screen-reader announcement visible on screen. Caption: *"No mouse, no sight needed. Arrow keys and a screen reader."*
5. **25–30 s:** title card with project name, team, and "NASA Space Apps 2026 · The Earth Information Jukebox."

**Write-up outline**

1. **The problem:** EIC visualizations are only visual, which leaves out blind and low-vision people.
2. **What we built:** a spinnable globe that plays its data, keyboard and screen-reader support from day one, explore mode.
3. **How the sound is made:** legend to value, value to sound, with the per-dataset table from Sound design.
4. **Forest height:** we pair NASA's EIC visual (SVS 4950) with sound, then go one step further and recover the real GEDI lidar values behind it, so what you hear is measured canopy height, not a color.
5. **Our artistic choices and why:** scale, layers, the smoothing rule.
6. **NASA data used,** with links to each SVS page. Name 5552 and 5475 as the sphere versions of the listed 5669 and 5313.
7. **Limits we're open about:**
   - GEDI covers 52°S to 52°N only, and we use Version 2.
   - The SST data is from 2007–08.
   - Sound follows every 4th frame, interpolated.
   - The globe tilts at most ±30°, so the poles are only heard at an angle.
   - Night lights is relative change only.
8. **What's next:** GEDI Version 3, more datasets, haptics on phones.

## Sources

- [Global Sea Surface Currents and Temperature](https://svs.gsfc.nasa.gov/3912/), NASA SVS
- [Lightning Events Detected from the ISS 2017–2023](https://svs.gsfc.nasa.gov/5011/), NASA SVS
- [Aerosols, Science On a Sphere version](https://svs.gsfc.nasa.gov/5552/), NASA SVS, and the listed [GEOS Aerosols](https://svs.gsfc.nasa.gov/5669/)
- [Night lights change 2012–2024, sphere version](https://svs.gsfc.nasa.gov/5475/), NASA SVS, and the listed [Change in Night Lights, EIC version](https://svs.gsfc.nasa.gov/5313/)
- [GEDI Forest Height](https://svs.gsfc.nasa.gov/4950/), NASA SVS (the EIC visual we pair with)
- [GEDI L3 Gridded Land Surface Metrics, Version 2](https://daac.ornl.gov/cgi-bin/dsviewer.pl?ds_id=1952), ORNL DAAC (the version we use)
- [GEDI L3 Version 2, reprojected to WGS84](https://doi.org/10.5069/G9V12301), OpenTopography (our download)
- [GEDI L3 Version 3 release note](https://www.earthdata.nasa.gov/data/alerts-outages/gedi-l3-gridded-land-surface-metrics-version-3-released), NASA Earthdata (the later option)
- [EIC Content Database](https://svs.gsfc.nasa.gov/gallery/earth-information-center/), the challenge's main data resource
- [Data Sonification: Caldwell 73](https://svs.gsfc.nasa.gov/13786/), NASA's own sonification example, as a reference for style
