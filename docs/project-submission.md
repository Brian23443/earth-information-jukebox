# Project page: text for each field

Draft text for the Space Apps project page, field by field, in the order the form asks for them (see `project-submission-guide.md`). Items marked **TODO** need something only the team can supply.

---

## Project Name

Earth Information Jukebox

## High-Level Project Summary

The Earth Information Jukebox is a web app that lets anyone hear NASA's Earth visualizations, built for blind and low-vision people first. It plays three NASA Scientific Visualization Studio datasets on a spinnable 3D globe: ocean temperature, lightning seen from the International Space Station, and aerosols (dust, smoke, sea salt and sulfates). Every sound comes from the data on the side of the planet facing you. Warmer water plays higher notes, busier storms play busier drums, and each aerosol type has its own instrument. You can point anywhere to hear that spot, steer with the keyboard, have values read aloud, or follow a narrated, captioned tour that teaches the sounds one at a time. It answers the challenge directly: it reads EIC visual frames, turns their colors back into data values, and drives sonifications in real time, so the planet's patterns can be followed by ear as well as by eye.

## Link to Project Demo

**TODO:** upload `submission/demo.mp4` (29.6 seconds) to YouTube as Public or Unlisted, test the link in a private window, and paste it here.

## Link to Final Project

https://brian23443.github.io/earth-information-jukebox/

Source code: https://github.com/Brian23443/earth-information-jukebox

## Detailed Project Description

**What it does.** The site opens on a cinematic globe. "Start the show" begins a narrated tour (about 2 minutes 20 seconds, captioned) that introduces each sound on its own and then hands over the planet. "Explore on my own" goes straight to the globe. Three datasets are on the shelf:

- **Ocean temperature** (ECCO2, March 2007 to March 2008). A slow chord follows the average sea-surface temperature facing you, and warmer water makes it higher and brighter. A four-note melody plays the globe from left to right, one note per slice. Pointing at a spot plays a single tone whose pitch is the temperature there; in the tour it climbs almost two and a half octaves from 0.1 °C near the North Pole to 27.5 °C at the equator.
- **Lightning** (ISS Lightning Imaging Sensor, 2017 to 2023). Drums on sixteenth notes whose density and loudness follow new flashes on the visible side. Pitch follows latitude, stereo position follows longitude, thunder accents mark big bursts, and a low drone swells with global storm activity. The flashes are drawn as 1.86 million real dots over NASA's Black Marble city-lights map.
- **Aerosols** (GEOS-FP, August to September 2024). Four voices: smoke crackles, dust is a low drone, sea salt is an airy shimmer, and sulfates are bell tones. Each grows louder with how much of its particle is in view and pans with it.

A large readout names the value under the cursor or at the center of the view, such as "27.6 °C", "Scattered flashes" or "Dust" with bars for the four aerosol types.

**Accessibility.** The project's central goal.
- Everything works from the keyboard: arrow keys spin the globe, + and − zoom, and the center of the view plays as it turns.
- Holding Shift reads the value aloud.
- Screen readers get live announcements and labeled controls.
- The guided show has captions for every line, and the data dips while the narrator speaks.
- Reduced-motion settings replace transitions with fades.

**How it works.**
- **Offline pipeline (Python).** It downloads NASA SVS frames and movies, then turns each visualization's colors back into data values using its published colorbar.
  - Ocean: temperature in °C.
  - Lightning: every flash dot NASA drew, checked against NASA's own frames (we light 87% of NASA's lit pixels).
  - Aerosols: each pixel split into the four types by non-negative least squares against the colorbar swatches.
  - Output: compact summaries and grids the browser can read instantly.
- **Web app (JavaScript).** three.js renders the globe with the NASA video or stills as its texture. Tone.js synthesizes all sound live in the browser: there are no pre-recorded data sounds. Every 100 ms, the app measures what is in view and updates the music.
  - The ocean can play NASA's full 6840-pixel frames.
  - Videos start small and upgrade only when the connection can carry them, so it works on ordinary laptops and school networks.
  - A real sky (Sun, Moon, planets and stars from NASA's star map) sits behind the Earth at the correct positions for each date.

**Benefits.** Earth science that has only been shown can now also be heard, so blind and low-vision learners can explore the same NASA data as everyone else, and sighted users get a second way to notice patterns such as the equator's warm band, the drumbeat of tropical storms, or Saharan dust crossing the Atlantic.

**What we hope to achieve.** We want a jukebox that grows to cover the rest of the Earth Information Center's catalog. It could be used in classrooms, museums and planetariums, and tested with blind and low-vision users to tune the sounds.

**Tools.** Python, NumPy, SciPy, scikit-image, Pillow and ffmpeg (pipeline); JavaScript, Vite, three.js, Tone.js and WebGL shaders (site); GitHub Pages (hosting).

## Use of Super Intelligence (SI)

(For data collection only; judges don't see this field.)

Yes.
- **Code:** we used an AI coding assistant (Claude Code) to help write and debug the pipeline and web code, under our direction. The idea, the sound design choices and the scientific checks are ours. The README says so too.
- **Audio:** the guided show's narration and the demo video's narration use AI-generated voices (text-to-speech). The site's README and the video both say so, and the video's file metadata notes it.
- **Images and video:** none were generated by AI. The demo video is a screen recording of the site, which renders NASA's own visualizations.

**TODO:** confirm which voice tool you used (ElevenLabs or fish.audio) and name it here.

## NASA Data

From NASA's Scientific Visualization Studio, via the Earth Information Center:
- **Sea surface temperature:** ECCO2 ocean model (MIT/JPL), SVS visualization frames (6840×3420), movie and colorbar.
- **Lightning:** ISS Lightning Imaging Sensor (NASA GHRC), SVS 4096×2048 movie, 2017 to 2023.
- **Aerosols:** GEOS-FP (NASA GMAO), SVS NoLabels movies (2048 and 4096) and colorbar, August to September 2024.
- **Black Marble 2016** city lights (Suomi NPP VIIRS, NASA Earth Observatory): the lightning night map and the cover.
- **Blue Marble Next Generation** (August 2004): the cover's daytime Earth.
- **SVS Deep Star Maps 2020:** the star field.
- **SVS CGI Moon Kit** (LRO): the Moon.

## Space Agency Partner Data and Other References

- **Data:** see "NASA Data" above. No partner agency data was used.
- **Planet and Sun textures:** Solar System Scope (CC BY 4.0), built from NASA mission imagery.
- **Planet and Moon positions:** JPL approximate Keplerian elements, plus the Astronomical Almanac's lunar series.
- **Libraries:** three.js (MIT), Tone.js (MIT), Vite (MIT); Python with NumPy, SciPy, scikit-image and Pillow; ffmpeg.
- **Fonts:** Inter and Barlow (SIL Open Font License, Google Fonts).
- **Narration:** AI text-to-speech (see the SI section).
- Credits for each dataset appear in the site's footer while it's shown.

---

## Before you press "Submit for Judging" (deadline: Sunday, November 15, 11:59 p.m. local time)

- [x] **Team:** Brian Bonti (solo), Team Waveform. The name is in the video's header and on its end card.
- [x] **Demo video:** `submission/demo.mp4`, 29.6 seconds, with the recorded narration.
- [ ] **Upload the video to YouTube** as Public or Unlisted (not Private), and paste the link into "Link to Project Demo".
- [ ] **Test every link** in a private window, signed out.
- [ ] **Optional:** request a FortiGuard web filter classification for `brian23443.github.io` (Category: Education; Company Name: N/A), so school or venue networks don't block the site.
- [ ] **Check the two boxes** (Terms and Conditions, Original Work), then press "Submit for Judging". Look for the confirmation banner.
- [ ] **No one under 18** appears or is heard in the video. The current cut has no people in it.
