import * as THREE from 'three';
import { DATASETS } from './datasets.js';
import { loadDataset } from './data.js';
import { Globe } from './globe.js';
import { SoundEngine } from './sound.js';
import { FeatureExtractor } from './features.js';
import { Announcer, speak, formatPlace } from './a11y.js';

const $ = (id) => document.getElementById(id);
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const announcer = new Announcer($('live'));

// Zoom detail: past DETAIL_IN the video is swapped for a full-resolution still of the
// nearest keyframe; below DETAIL_OUT it swaps back. The gap stops flicker at the edge.
const DETAIL_IN = 1.6;
const DETAIL_OUT = 1.35;

let globe, sound, current = null, extractor = null;
let frame = 0; // fractional summary-frame index
let playing = true;
let speed = 1;
let video = null, videoTexture = null;
let hover = null;          // {lat, lon, x} under the mouse, or null
let keyboardMovedAt = -1e9; // last arrow/zoom key, so the center voice only plays after the user moves

// Detail-view state
const detail = { on: false, keyframe: null, wasPlaying: false, resumedZoomed: false, texture: null, full: false, token: 0 };

// Dev-only debug state, mirrored to <body data-debug> so external tools can read it
// (stripped from production builds).
function textureWidth() {
  const img = globe.material.map?.image;
  return img?.videoWidth || img?.width || 0; // <video> reports width 0, videoWidth is real
}

function writeDebug(f) {
  if (!import.meta.env.DEV || !f) return;
  document.body.dataset.debug = JSON.stringify({
    ctx: sound.state,
    frame: +frame.toFixed(1),
    zoom: +globe.zoomFactor.toFixed(2),
    spinDeg: +(globe.spin * 180 / Math.PI).toFixed(2),
    keySpinVelDeg: +(globe.keySpinVel * 180 / Math.PI).toFixed(1),
    maxZoom: +globe.maxZoom.toFixed(2),
    detailWidth: globe.detailWidth,
    canvasH: globe.renderer.domElement.height,
    far: +globe.far.toFixed(2),
    texelsPerPx: +globe.texelsPerPixel(textureWidth() || 2048).toFixed(2),
    spinVel: +globe.spinVel.toFixed(2),
    detail: detail.on ? detail.keyframe : null,
    texture: textureWidth(),
    videoRes: quality.res,
    landLayer: globe.uniforms.landOn.value === 1,
    colorFix: globe.uniforms.colorFixOn.value === 1,
    probeMbps: quality.probeMbps,
    qualityNote: quality.note,
    renderFps: Math.round(renderFps),
    videoTime: video ? +video.currentTime.toFixed(2) : null,
    dropped: video?.getVideoPlaybackQuality?.().droppedVideoFrames ?? null,
    decoded: video?.getVideoPlaybackQuality?.().totalVideoFrames ?? null,
    hover,
    meanC: +(f.mean01 * 32).toFixed(1),
    padDegree: sound.padDegree,
    melodyLvl: sound.melody.map((m) => +m.level.v.toFixed(2)),
    cursorDegree: sound.cursorDegree,
    mode: sound.mode,
    hits: f.hits && { norm: +(f.hits.norm ?? 0).toFixed(2), lat01: +f.hits.lat01.toFixed(2), pan: +f.hits.pan.toFixed(2) },
    padCutoff: Math.round(sound.padFilter.frequency.value),
    aero: f.classes && f.classes.map((c, k) => ({ level: +c.level.toFixed(2), gain: +sound.aero[k].gain.gain.value.toFixed(2), pan: +c.pan.toFixed(2) })),
  });
}

// ---------- Start screen: audio needs a user gesture ----------
$('start-btn').addEventListener('click', async () => {
  sound = new SoundEngine();
  await sound.start();
  $('start').hidden = true;
  $('app').hidden = false;
  globe = new Globe($('globe'), { reducedMotion });
  if (import.meta.env.DEV) window.__globe = globe; // for side-by-side checks in the browser
  globe.onZoom = onZoom;
  bindExplore();
  buildShelf();
  $('globe').focus(); // before loading, so early arrow presses aren't lost
  await selectDataset(DATASETS[0]);
  requestAnimationFrame(tick);
});
$('start-btn').focus();

// ---------- Dataset shelf ----------
function buildShelf() {
  const shelf = $('shelf');
  for (const ds of DATASETS) {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = ds.title;
    b.dataset.id = ds.id;
    b.setAttribute('aria-pressed', 'false');
    b.addEventListener('click', () => selectDataset(ds));
    shelf.appendChild(b);
  }
}

// ---------- Video quality: safe for judges on unknown Wi-Fi ----------
// Everyone starts on the 2048 video (~7 Mbps), so playback begins quickly anywhere.
// While it plays, measureConnection() checks the link; only a large screen on a fast
// link (>= 25 Mbps, about 2x the 12 Mbps 4096 stream) swaps up.
// If the 4096 stream then stalls twice within 30 s, it drops back to 2048 for the visit.
// URL overrides for testing: ?video=2048 or ?video=4096 forces one; ?mbps=5 fakes a speed.
const UPGRADE_MBPS = 25;
const PROBE_BYTES = 3_000_000;
const PROBE_TIMEOUT_MS = 10_000;
const STALLS_TO_DOWNGRADE = 2;
const STALL_WINDOW_MS = 30_000;
const params = new URLSearchParams(location.search);
const quality = { res: null, probeMbps: null, note: '', locked: false, token: 0 };

let landTextures = [];
let baseTexture = null; // static base map for vector-event datasets (lightning)
let eventAtlas = null; // lightning flash shapes

// NASA Black Marble under the lightning: 8192 wide where the GPU and screen can use it.
function nightMapUrl(ev) {
  if (!ev.night) return null;
  const big = globe.maxTextureSize >= 8192 && Math.max(screen.width, screen.height) * devicePixelRatio >= 1800;
  return (big && ev.night[8192]) || ev.night[4096] || ev.night[8192];
}
function eventsDetailWidth(ev) {
  const url = nightMapUrl(ev);
  return url && url === ev.night?.[8192] ? 8192 : ev.width;
}

// Color correction for whichever video is playing (pipeline/landlayer.py fits one per file).
function videoColorFix() {
  return current?.colorFix?.[String(quality.res)] ?? null;
}

// ?video=6840 only plays when the file exists and the browser decodes HEVC at this size
// in hardware (recent Macs). Otherwise it falls back to the normal 2048/4096 videos.
async function canPlayFull(loaded) {
  if (!loaded.videoUrlMax || !navigator.mediaCapabilities) return false;
  try {
    const r = await navigator.mediaCapabilities.decodingInfo({
      type: 'file',
      video: { contentType: 'video/mp4; codecs="hvc1.1.6.L183.B0"', width: 6840, height: 3420, bitrate: 40e6, framerate: 30 },
    });
    return r.supported && r.smooth && r.powerEfficient;
  } catch {
    return false;
  }
}

// At 6840 the video is as sharp as the stills, so pause/zoom don't need to swap to them.
const fullResVideo = () => quality.res === 6840;

function screenWantsHighRes() {
  const screenPx = Math.max(screen.width, screen.height) * devicePixelRatio;
  return globe.maxTextureSize >= 4096 && screenPx >= 2000;
}

const once = (el, ev) => new Promise((res) => el.addEventListener(ev, res, { once: true }));

function makeVideo(url) {
  const v = document.createElement('video');
  Object.assign(v, { src: url, muted: true, loop: true, playsInline: true, crossOrigin: 'anonymous', preload: 'auto' });
  v.playbackRate = speed;
  return v;
}

// Swap the playing video for another file at the same moment, without a visible jump.
async function useVideo(url, res, { syncFrom = null } = {}) {
  const v = makeVideo(url);
  if (syncFrom) {
    if (v.readyState < 1) await once(v, 'loadedmetadata');
    v.currentTime = syncFrom.currentTime;
    await once(v, 'seeked');
    if (v.readyState < 3) await Promise.race([once(v, 'canplay'), new Promise((r) => setTimeout(r, 8000))]);
    if (v.readyState < 3) return false; // couldn't buffer in time: keep what's playing
    v.currentTime = syncFrom.currentTime; // catch up the time spent buffering
    await once(v, 'seeked');
  }
  const old = video, oldTex = videoTexture;
  video = v;
  videoTexture = new THREE.VideoTexture(v);
  quality.res = res; // set before videoColorFix() reads it
  if (!detail.on) globe.setTexture(videoTexture, videoColorFix());
  if (playing && !detail.on) v.play().catch(() => {});
  trackVideoFrames(v, current.frames);
  if (res === 4096) watchStalls(v);
  if (old) { old.pause(); old.removeAttribute('src'); old.load(); }
  oldTex?.dispose();
  return true;
}

// Connection speed = a 3 MB test download of the 4096 file PLUS whatever the playing 2048
// video buffered during the same window. Either alone is wrong:
//   - the test download alone shares the link with the video (read 13 Mbps on 40 Mbps);
//   - buffering alone measures Chrome's own pacing, not the link (read 21 Mbps on
//     localhost, which is effectively unlimited).
async function measureConnection(v, bytes, url) {
  if (v.readyState < 1) await once(v, 'loadedmetadata');
  const avgMbps = bytes ? (bytes * 8) / v.duration / 1e6 : 0;
  const end = () => (v.buffered.length ? v.buffered.end(v.buffered.length - 1) : 0);
  const t0 = performance.now();
  const b0 = end();
  const probe = await measureMbps(url);
  const secs = Math.max(0.05, (performance.now() - t0) / 1000);
  const videoMbps = (Math.max(0, end() - b0) * avgMbps) / secs;
  return probe + videoMbps;
}

async function measureMbps(url) {
  const fake = Number(params.get('mbps'));
  if (fake) return fake;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), PROBE_TIMEOUT_MS);
  const t0 = performance.now();
  let bytes = 0;
  try {
    const r = await fetch(url, { headers: { Range: `bytes=0-${PROBE_BYTES - 1}` }, cache: 'no-store', signal: ctrl.signal });
    const reader = r.body.getReader();
    while (bytes < PROBE_BYTES) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.length;
    }
    ctrl.abort(); // stop here even if the server ignored the Range header
  } catch {
    // timeout or network error: measure what arrived
  } finally {
    clearTimeout(timer);
  }
  return (bytes * 8) / ((performance.now() - t0) / 1000) / 1e6;
}

async function maybeUpgrade(loaded) {
  const token = ++quality.token;
  const forced = params.get('video');
  if (!loaded.videoUrlHigh || forced === '2048') { quality.note = forced ? 'forced 2048' : 'no 4096 file'; return; }
  if (forced !== '4096' && !screenWantsHighRes()) { quality.note = 'screen too small for 4096'; return; }
  if (quality.locked) { quality.note = 'stayed on 2048 after stalls'; return; }
  const fake = Number(params.get('mbps'));
  const mbps = fake || (await measureConnection(video, loaded.videoBytes, loaded.videoUrlHigh));
  quality.probeMbps = Number.isFinite(mbps) ? Math.round(mbps) : null;
  if (token !== quality.token || current !== loaded) return;
  if (mbps < UPGRADE_MBPS) { quality.note = `connection ${Math.round(mbps)} Mbps: staying on 2048`; return; }
  const ok = await useVideo(loaded.videoUrlHigh, 4096, { syncFrom: video });
  quality.note = ok ? 'upgraded to 4096' : '4096 could not buffer: staying on 2048';
}

// Two stalls ("waiting" while playing) within 30 s -> back to 2048 for the rest of the visit.
function watchStalls(v) {
  const stalls = [];
  v.addEventListener('waiting', async () => {
    if (v !== video || !playing || v.seeking) return;
    const now = performance.now();
    stalls.push(now);
    while (stalls.length && now - stalls[0] > STALL_WINDOW_MS) stalls.shift();
    if (stalls.length >= STALLS_TO_DOWNGRADE && current?.videoUrl && current.videoUrl !== current.videoUrlHigh) {
      quality.locked = true;
      quality.note = '4096 stalled: dropped to 2048';
      await useVideo(current.videoUrl, 2048, { syncFrom: v });
    }
  });
}

async function selectDataset(ds) {
  const loaded = await loadDataset(ds);
  if (!loaded) {
    announcer.say(`${ds.title} isn't built yet. Run the pipeline for ${ds.id}.`, { force: true });
    return;
  }
  exitDetail({ resume: false });
  current = loaded;
  extractor = new FeatureExtractor(loaded.summary);
  frame = 0;

  if (video) { video.pause(); video.removeAttribute('src'); video.load(); video = null; }
  videoTexture?.dispose();
  videoTexture = null;
  quality.token++; // cancel any upgrade still in flight for the previous dataset
  globe.clearEvents();
  eventAtlas?.dispose();
  eventAtlas = null;
  baseTexture?.dispose();
  baseTexture = null;
  if (loaded.events && params.get('events') !== '0') {
    // Vector mode (lightning): sharp static base map + GPU points, no video at all.
    // The frame clock runs on its own (tick() advances `frame` when there is no video).
    quality.res = null;
    quality.note = `vector events (${loaded.events.count.toLocaleString()} flashes)`;
    const ev = loaded.events;
    globe.setEvents(ev);
    if (ev.atlas) {
      // NASA's pixels for every flash shape. Exact texels, no mipmaps (they'd bleed between
      // neighbouring shapes) and top row first, matching the atlas coordinates.
      new THREE.TextureLoader().load(ev.atlas.url, (tex) => {
        if (current !== loaded) { tex.dispose(); return; }
        tex.colorSpace = THREE.NoColorSpace;
        tex.flipY = false;
        tex.generateMipmaps = false;
        tex.minFilter = THREE.LinearFilter;
        tex.needsUpdate = true;
        eventAtlas?.dispose();
        eventAtlas = tex;
        globe.setEventAtlas(tex);
      });
    }
    // Placeholder until the base map arrives (the previous dataset's video is gone, and
    // drawing it logged "texImage2D: no video").
    const placeholder = new THREE.DataTexture(new Uint8Array([6, 8, 14, 255]), 1, 1);
    placeholder.needsUpdate = true;
    globe.setTexture(placeholder);
    baseTexture = placeholder;
    loadStill(nightMapUrl(ev) ?? ev.base)
      .then((tex) => {
        if (current !== loaded) { tex.dispose(); return; }
        baseTexture?.dispose(); // the placeholder
        baseTexture = tex;
        globe.setTexture(tex);
      })
      .catch((err) => console.warn('[events] base map failed', err));
  } else if (loaded.videoUrl) {
    if (params.get('video') === '6840' && (await canPlayFull(loaded))) {
      await useVideo(loaded.videoUrlMax, 6840); // demo-recording mode: full resolution throughout
      quality.note = 'forced 6840 (HEVC)';
    } else {
      if (params.get('video') === '6840') {
        quality.note = loaded.videoUrlMax ? 'this browser cannot decode 6840 HEVC smoothly' : 'no 6840 file';
        console.warn(`[video] ?video=6840: ${quality.note}; using the normal videos`);
      }
      const startHigh = params.get('video') === '4096' && loaded.videoUrlHigh;
      await useVideo(startHigh ? loaded.videoUrlHigh : loaded.videoUrl, startHigh ? 4096 : 2048);
      if (!startHigh) maybeUpgrade(loaded); // runs in the background
    }
  } else if (loaded.texture) {
    globe.setTexture(loaded.texture);
  }

  // Zoom limit follows the sharpest texture this dataset has.
  // (Vector events are sharp at any size, so their limit is the base map's width.)
  globe.setDetailWidth(loaded.hires?.size?.[0] ?? (loaded.events && params.get('events') !== '0' ? eventsDetailWidth(loaded.events) : 2048));

  // Sharp static land over the video (loads in the background; the video shows until then).
  globe.setLandLayer(null, null);
  landTextures.forEach((t) => t.dispose());
  landTextures = [];
  if (loaded.land && params.get('land') !== '0') { // ?land=0 turns it off for A/B tests
    Promise.all([loadStill(loaded.land.image), loadStill(loaded.land.mask)])
      .then(([land, mask]) => {
        if (current !== loaded) { land.dispose(); mask.dispose(); return; }
        landTextures = [land, mask];
        globe.setLandLayer(land, mask);
      })
      .catch((err) => console.warn('[land] could not load land layer', err));
  }

  sound.setMode(ds.sound);
  for (const b of $('shelf').children) b.setAttribute('aria-pressed', String(b.dataset.id === ds.id));
  $('credit').innerHTML =
    `${ds.credit} <a href="${ds.svs}" target="_blank" rel="noopener">Source</a>` +
    (loaded.demo ? ' · <strong>Demo data</strong>: the pipeline hasn\'t been run yet.' : '') +
    '<br>Sky: NASA SVS star map and LRO Moon; Sun and planets ' +
    '<a href="https://www.solarsystemscope.com/textures/" target="_blank" rel="noopener">Solar System Scope</a> (CC BY 4.0).';
  updateLegend(ds);
  const dates = loaded.frames?.dates;
  $('time-start').textContent = dates ? formatDay(dates[0]) : '';
  $('time-end').textContent = dates ? formatDay(dates[1]) : '';
  announcer.say(`${ds.title}. ${ds.description}`, { force: true });
  onZoom(globe.zoomFactor);
}

// Drive the frame index from the video's own clock, so sound follows picture.
function trackVideoFrames(v, meta) {
  if (!('requestVideoFrameCallback' in v)) return; // falls back to currentTime in tick()
  const onFrame = (_now, info) => {
    if (v !== video) return;
    if (!detail.on) frame = mediaTimeToFrame(info.mediaTime, meta);
    v.requestVideoFrameCallback(onFrame);
  };
  v.requestVideoFrameCallback(onFrame);
}

function mediaTimeToFrame(t, meta) {
  const { fps = 30, offset = 0, movieStride = 1 } = meta || {};
  return Math.max(0, (t * fps - offset) / movieStride);
}

// ---------- Playback ----------
function setPlaying(p) {
  playing = p;
  $('play').setAttribute('aria-label', playing ? 'Pause' : 'Play'); // icon swaps via CSS
  $('play').setAttribute('aria-pressed', String(playing));
  if (video) playing ? video.play().catch(() => {}) : video.pause();
}

$('play').addEventListener('click', () => {
  if (detail.on && !playing) {
    // Resume at video quality; if zoomed in, detail returns only after zooming out and in.
    detail.resumedZoomed = globe.zoomFactor >= detailThresholds().outAt;
    exitDetail({ resume: true });
    return;
  }
  setPlaying(!playing);
  // Paused: show the sharp still at any zoom (the 2048 video is soft on large screens).
  if (!playing && current?.hires && video && !fullResVideo()) enterDetail();
});
$('speed').addEventListener('change', (e) => {
  speed = Number(e.target.value);
  if (video) video.playbackRate = speed;
});
$('scrub').addEventListener('input', (e) => {
  const t = Number(e.target.value) / 1000;
  if (video?.duration) video.currentTime = t * video.duration;
  if (current) frame = t * current.summary.frames;
  if (detail.on) enterDetail(); // re-snap to the keyframe nearest the new time
});
$('spin-left').addEventListener('click', () => globe.spinBy(0.35 / Math.sqrt(Math.max(1, globe.zoomFactor))));
$('spin-right').addEventListener('click', () => globe.spinBy(-0.35 / Math.sqrt(Math.max(1, globe.zoomFactor))));
$('zoom-in').addEventListener('click', () => globe.zoomBy(1.6));
$('zoom-out').addEventListener('click', () => globe.zoomBy(1 / 1.6));
$('mute').addEventListener('click', (e) => {
  const muted = e.currentTarget.getAttribute('aria-pressed') !== 'true';
  e.currentTarget.setAttribute('aria-pressed', String(muted));
  e.currentTarget.setAttribute('aria-label', muted ? 'Unmute' : 'Mute');
  sound.setMuted(muted);
});

// Color legend for the current dataset (from datasets.js), hidden when it has none.
function updateLegend(ds) {
  const lg = ds.legend;
  $('legend').hidden = !lg;
  if (!lg) return;
  $('legend-label').textContent = lg.label;
  $('legend-bar').style.background = `linear-gradient(to right, ${lg.colors.join(', ')})`;
  $('legend-min').textContent = lg.min;
  $('legend-max').textContent = lg.max;
}

function formatDay(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
}

// ---------- Zoom detail ----------
// On big screens the zoom limit can be low; keep the thresholds inside the usable range.
function detailThresholds() {
  const span = Math.max(0, globe.maxZoom - 1);
  return { inAt: Math.min(DETAIL_IN, 1 + 0.5 * span), outAt: Math.min(DETAIL_OUT, 1 + 0.3 * span) };
}

function onZoom(z) {
  if (!current) return;
  const { inAt, outAt } = detailThresholds();
  if (z < outAt) {
    detail.resumedZoomed = false;
    // Zoom paused playback for us -> resume. If the user paused, keep the sharp still.
    if (detail.on && detail.wasPlaying) exitDetail({ resume: true });
  } else if (z >= inAt && z > 1.02 && !detail.on && !detail.resumedZoomed && current.hires && video && !fullResVideo()) {
    enterDetail();
  }
}

function nearestKeyframe() {
  const { movieFrames } = current.hires;
  const mf = frame * (current.frames?.movieStride ?? 1);
  return movieFrames.reduce((best, m) => (Math.abs(m - mf) < Math.abs(best - mf) ? m : best), movieFrames[0]);
}

async function enterDetail() {
  if (!detail.on) {
    detail.on = true;
    detail.wasPlaying = playing;
    setPlaying(false);
  }
  const k = nearestKeyframe();
  const { fps = 30, offset = 0, movieStride = 1 } = current.frames || {};
  // Snap time to the keyframe so the picture, readout and sound all describe the same moment.
  frame = k / movieStride;
  if (video) video.currentTime = (k + offset) / fps;
  if (detail.keyframe === k && detail.texture && detail.full) {
    globe.setTexture(detail.texture);
    return;
  }
  const token = ++detail.token;
  const name = String(k).padStart(5, '0');
  const ext = current.hires.ext ?? 'webp';
  const show = (tex, full) => {
    if (token !== detail.token || !detail.on) { tex.dispose(); return false; }
    detail.texture?.dispose();
    Object.assign(detail, { texture: tex, keyframe: k, full });
    globe.setTexture(tex);
    return true;
  };
  showBadge('Loading detail…');
  // Step 1: 3072-wide preview (~1.4 MB) so the view sharpens fast even on slow Wi-Fi.
  if (current.hires.previewSize) {
    try {
      const prev = await loadStill(`${current.hires.dir}/preview/${name}.jpg`);
      if (!show(prev, false)) return;
      showBadge(`Detail ${prev.image.width}×${prev.image.height} · loading full resolution…`);
      announcer.say(`Paused for detail at ${displayDate()}. Press Play to resume.`, { force: true });
    } catch (err) {
      console.warn('[detail] preview failed, going straight to full', err);
    }
  }
  // Step 2: the full 6840x3420 still (~11 MB) replaces it when it arrives.
  try {
    const tex = await loadStill(`${current.hires.dir}/${name}.${ext}`);
    if (!show(tex, true)) return;
    showBadge(`Detail ${tex.image.width}×${tex.image.height} · ${displayDate()} · Play resumes`);
    if (!current.hires.previewSize) {
      announcer.say(`Paused for detail at ${displayDate()}. Press Play to resume.`, { force: true });
    }
  } catch (err) {
    console.warn('[detail] could not load full still', err);
    if (token === detail.token) showBadge(detail.texture ? `Detail (preview only) · ${displayDate()}` : 'Detail view unavailable');
  }
}

function exitDetail({ resume }) {
  if (!detail.on) return;
  detail.on = false;
  detail.token++;
  hideBadge();
  if (videoTexture) globe.setTexture(videoTexture, videoColorFix());
  if (resume) setPlaying(true);
}

// Decode off the main thread; shrink only if the GPU can't hold the full size.
async function loadStill(url) {
  const blob = await (await fetch(url)).blob();
  const probe = await createImageBitmap(blob);
  const max = globe.maxTextureSize;
  const scale = Math.min(1, max / Math.max(probe.width, probe.height));
  probe.close();
  const bitmap = await createImageBitmap(blob, {
    imageOrientation: 'flipY',
    ...(scale < 1 ? { resizeWidth: Math.floor(probe.width * scale), resizeHeight: Math.floor(probe.height * scale) } : {}),
  });
  const tex = new THREE.Texture(bitmap);
  tex.flipY = false; // already flipped during decode
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.needsUpdate = true;
  return tex;
}

function showBadge(text) { $('detail-badge').textContent = text; $('detail-badge').hidden = false; }
function hideBadge() { $('detail-badge').hidden = true; }

// ---------- Explore: hover with the mouse, or the center of the view for keyboard users ----------
function bindExplore() {
  const el = $('globe');
  el.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch' || globe.dragging) { hover = null; return; }
    const r = el.getBoundingClientRect();
    hover = globe.pick(e.clientX - r.left, e.clientY - r.top);
    playCursor(hover);
    updateReadout();
  });
  el.addEventListener('pointerleave', () => { hover = null; sound.cursor(null); updateReadout(); });
  el.addEventListener('pointerdown', () => { hover = null; });
  el.addEventListener('keydown', (e) => {
    if (e.key.startsWith('Arrow') || '+=-_'.includes(e.key)) {
      keyboardMovedAt = performance.now();
      hover = null; // keyboard steering: read out the center, not where the mouse last was
    }
    // Hold Shift: read the value at the center of the view (or under the cursor) aloud.
    if (e.key === 'Shift' && !e.repeat && current) speak(describe(hover ?? globe.center()));
  });
}

function playCursor(p) {
  if (!current || !p) { sound.cursor(null); return; }
  const r = readingAt(p);
  sound.cursor(r.value01, p.x ?? 0);
  if (r.type !== undefined && r.type !== lastCursorType) sound.cursorType(r.type); // solo that aerosol
  lastCursorType = r.type;
}
let lastCursorType;

// ---------- Main loop ----------
let last = performance.now();
let featureClock = 0;
let renderFps = 0;

function tick(now) {
  const dt = Math.min(0.1, (now - last) / 1000);
  if (now > last) renderFps = renderFps * 0.95 + (1000 / (now - last)) * 0.05;
  last = now;

  if (current) {
    const { summary, frames: meta } = current;
    if (!video) {
      if (playing) frame = (frame + dt * speed * ((meta?.fps ?? 30) / (meta?.movieStride ?? 4))) % summary.frames;
    } else if (!('requestVideoFrameCallback' in video) && !detail.on) {
      frame = mediaTimeToFrame(video.currentTime, meta);
    }

    globe.setEventsFrame(frame);
    globe.setSkyTime(smoothSkyMs(dt));
    globe.update(dt);

    featureClock += dt;
    if (featureClock >= 0.1) { // 10 Hz is plenty after smoothing
      const features = extractor.extract(globe, frame);
      features.classes = extractor.extractClasses(globe, frame); // aerosols only (else null)
      const pr = current.ds.padRange;
      if (pr) {
        const meanValue = current.summary.meta.vmin + features.mean01 * current.summary.range;
        features.padMean01 = Math.min(1, Math.max(0, (meanValue - pr[0]) / (pr[1] - pr[0])));
      }
      sound.update(features, featureClock);
      // Keyboard users: the center of the view plays for a few seconds after they move the globe.
      if (globe.keyMoving) keyboardMovedAt = now; // still turning (held key or coasting)
      if (!hover && document.activeElement === $('globe') && now - keyboardMovedAt < 3000) {
        playCursor(globe.center());
      }
      featureClock = 0;
      updateReadout();
      writeDebug(features);
    }
    if (document.activeElement !== $('scrub')) {
      $('scrub').value = String(Math.round((frame / summary.frames) * 1000));
    }
    // Filled part of the timeline track (Chrome/Safari; Firefox uses ::-moz-range-progress)
    const pct = Number($('scrub').value) / 10;
    $('scrub').style.setProperty('--pct', `${pct.toFixed(1)}%`);
    updateDateTracker(pct);
  }
  requestAnimationFrame(tick);
}

// Readable date for everything people see or hear ("Aug 23, 2007"); approximate datasets
// (lightning) get their period instead. currentDate() stays ISO for calculations.
function displayDate() {
  const iso = currentDate();
  if (!iso) return '';
  return current?.frames?.datesExact === false ? iso : formatDay(iso);
}

// Day currently shown, riding above the playhead.
let trackerText = '';
function updateDateTracker(pct) {
  const el = $('date-tracker');
  const exact = current?.frames?.datesExact !== false;
  const text = displayDate();
  if (text !== trackerText) {
    el.textContent = text;
    trackerText = text;
  }
  el.classList.toggle('static', !exact);
  el.hidden = !text;
  el.style.setProperty('--pct', pct.toFixed(2));
}

function currentDate() {
  const d = current?.frames?.dates;
  if (!d) return '';
  // Some movies don't map frames to dates linearly (lightning): show the period, not a
  // made-up day.
  if (current.frames.datesExact === false) {
    const my = (s) => new Date(`${s}T00:00:00Z`).toLocaleDateString(undefined, { month: 'short', year: 'numeric', timeZone: 'UTC' });
    return `${my(d[0])} – ${my(d[1])}`;
  }
  const [a, b] = d.map((s) => new Date(`${s}T00:00:00Z`).getTime());
  const t = Math.min(1, frame / Math.max(1, current.summary.frames - 1));
  return new Date(a + (b - a) * t).toISOString().slice(0, 10);
}

// Moment for the sky (Sun, Moon, planets): follows playback smoothly between days. Datasets
// without exact dates (lightning) use the start of their period.
function skyTimeMs() {
  const d = current?.frames?.dates;
  if (!d) return Date.now();
  const [a, b] = d.map((s) => Date.parse(`${s}T12:00:00Z`));
  if (current.frames.datesExact === false) return a;
  const t = Math.min(1, frame / Math.max(1, current.summary.frames - 1));
  return a + (b - a) * t;
}

// The video only reports a new frame ~30 times a second (fewer when frames drop), while the
// screen draws 60-120. At ~5 days of data per second the Moon moves ~70°/s, so stepping it
// once per video frame made it jump more than its own width. Advance the sky's clock every
// screen frame at the playback rate and pull it gently toward the video's actual time.
let skyMs = null;
function smoothSkyMs(dt) {
  const target = skyTimeMs();
  const d = current?.frames?.dates;
  const exact = d && current.frames.datesExact !== false;
  if (skyMs === null || !playing || !exact || detail.on || Math.abs(target - skyMs) > 2 * 86400000) {
    skyMs = target; // paused, seeking, looping, or no dates: just follow
    return skyMs;
  }
  const meta = current.frames;
  const span = Date.parse(`${d[1]}T12:00:00Z`) - Date.parse(`${d[0]}T12:00:00Z`);
  const seconds = (current.summary.frames * (meta.movieStride ?? 1)) / (meta.fps ?? 30); // movie length at 1x
  skyMs += (span / seconds) * speed * dt;
  skyMs += (target - skyMs) * Math.min(1, dt * 4); // drift correction, ~0.25 s
  return skyMs;
}

// Value at a lat/lon: the fine explore grid first (land = no data), else the coarse summary.
function readingAt(p) {
  if (!p) return { text: 'Off the globe', value01: null };
  const { vmin } = current.summary.meta;
  const range = current.summary.range;
  if (current.grids) {
    current.grids.request(Math.floor(frame) % current.summary.frames);
    const g = current.grids.lookup(p.lat, p.lon);
    if (g && g.type !== undefined) {
      // Aerosols: name the dominant type and how thick it is.
      const names = current.ds.typeNames ?? ['Type 1', 'Type 2', 'Type 3', 'Type 4'];
      const amount = g.strength > 0.5 ? 'heavy' : g.strength > 0.2 ? 'moderate' : 'light';
      return { text: `${names[g.type]} · ${amount}`, value01: g.strength, type: g.type };
    }
    if (g && g.noData && current.summary.classes) return { text: 'Clear air', value01: null };
    if (g) {
      return g.noData
        ? { text: 'N/A', value01: null }
        : { text: current.ds.format(g.value), value01: (g.value - vmin) / range };
    }
    // Detailed grid still loading: the coarse fallback blends land with ocean, so wait.
    return { text: '…', value01: null };
  }
  const { value, share } = extractor.valueAt(frame, p.lat, p.lon);
  return share > 0.05
    ? { text: current.ds.format(value), value01: (value - vmin) / range }
    : { text: 'no data', value01: null };
}

function describe(p) {
  return `${current.ds.title}, ${displayDate()}. ${formatPlace(p)}: ${readingAt(p).text}.`;
}

function updateReadout() {
  if (!current) return;
  const p = hover ?? globe.center();
  $('readout-source').textContent = hover ? 'Cursor' : 'Center';
  $('readout-date').textContent = displayDate() || '—';
  $('readout-value').textContent = readingAt(p).text;
  $('readout-place').textContent = formatPlace(p);
  if (document.activeElement === $('globe') && !hover) announcer.say(describe(p));
}
