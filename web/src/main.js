import * as THREE from 'three';
import { DATASETS } from './datasets.js';
import { loadDataset } from './data.js';
import { Globe } from './globe.js';
import { SoundEngine } from './sound.js';
import { FeatureExtractor } from './features.js';
import { Announcer, speak, formatPlace } from './a11y.js';
import { Show } from './show.js';
import { SHOW_SCRIPT } from './show-script.js';

const $ = (id) => document.getElementById(id);
const DEV_START_MUTED = true; // temporary, for development: see the start button handler
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

// ---------- Cover: the start screen (audio needs a user gesture) ----------
// The globe exists from the first frame: a sunlit Earth turning beside the headline. The
// button starts audio, then the same globe glides into the app view while the data sweeps
// across it (globe.leaveCover).
globe = new Globe($('globe'), { reducedMotion });
globe.swapStyle = new URLSearchParams(location.search).get('swap') ?? 'bloom'; // ?swap= tries the other dataset transitions
if (import.meta.env.DEV) window.__globe = globe; // for side-by-side checks in the browser
{
  const blank = new THREE.DataTexture(new Uint8Array([4, 6, 12, 255]), 1, 1);
  blank.needsUpdate = true;
  globe.setTexture(blank); // until the first dataset arrives
  const loader = new THREE.TextureLoader();
  Promise.all(['cover/day.jpg', 'cover/night.jpg'].map((u) => loader.loadAsync(u)))
    .then(([day, night]) => {
      // Too late if the button was already pressed: then the app simply starts.
      if (!$('start').classList.contains('leaving')) globe.setCover(day, night);
      $('start').classList.add('ready');
    })
    .catch((err) => {
      console.warn('[cover] textures failed', err);
      $('start').classList.add('ready');
    });
}
requestAnimationFrame(tick);

// Both cover buttons start audio and the app; "Start the show" then runs the guided show.
async function begin({ withShow }) {
  $('start-btn').disabled = true;
  $('explore-btn').disabled = true;
  // Move first, so the click answers instantly; audio and data catch up during the glide.
  $('start').classList.add('leaving');
  const leaving = globe.leaveCover();
  sound = new SoundEngine();
  if (import.meta.env.DEV) window.__sound = sound;
  await sound.start();
  // Development only (npm run dev): start muted. The mute button still unmutes.
  // Production builds are unaffected. Set DEV_START_MUTED to false to hear it by default.
  if (import.meta.env.DEV && DEV_START_MUTED && !demoHQ) setMuted(true); // recording keeps the sound
  $('app').classList.add('intro');
  $('app').hidden = false;
  globe.onZoom = onZoom;
  bindExplore();
  buildShelf();
  const loaded = selectDataset(DATASETS[0]).then(() => globe.coverDataReady());
  await Promise.all([leaving, loaded]);
  $('start').hidden = true;
  $('app').classList.remove('intro');
  $('globe').focus(); // keyboard users land on the globe, ready to spin
  setTimeout(preloadOtherDatasets, 400); // sooner = more first switches find everything ready
  if (withShow) startShow();
}
$('start-btn').addEventListener('click', () => begin({ withShow: true }));
$('explore-btn').addEventListener('click', () => begin({ withShow: false }));
$('start-btn').focus();

// ---------- Guided show (show.js, script in show-script.js) ----------
const show = new Show({
  get globe() { return globe; },
  get sound() { return sound; },
  // Resolves true if it switched (false: that dataset was already on screen).
  // force: reopen the dataset that's already showing (with the transition) at startAt.
  async selectDataset(id, startAt = 0, force = false) {
    if (current?.ds.id === id && !force) return false;
    await selectDataset(DATASETS.find((d) => d.id === id), { startAt });
    return true;
  },
  seek(f) {
    $('scrub').value = String(Math.round(f * 1000));
    seekTo(f);
  },
  setPlaying(p) {
    if (detail.on) exitDetail({ resume: p });
    else setPlaying(p);
  },
  // Any speed (the show glides the timeline with in-between values); the menu shows it
  // only when it's one of its own.
  setSpeed(x) {
    speed = x;
    if (video) video.playbackRate = x;
    if ([...$('speed').options].some((o) => Number(o.value) === x)) $('speed').value = String(x);
  },
  currentId() {
    return current?.ds.id ?? null;
  },
  // Where the timeline is (0-1), and how far it moves per second at 1x.
  position() {
    return current ? (frame / current.summary.frames) % 1 : 0;
  },
  rate() {
    if (!current) return 0;
    if (video?.duration) return 1 / video.duration;
    const m = current.frames ?? {};
    return ((m.fps ?? 30) / (m.movieStride ?? 4)) / current.summary.frames;
  },
  probe(on) {
    probeOn = on;
    sound.probe(on);
  },
  caption(text) {
    if (text) $('show-caption').textContent = text;
  },
  onEnd() {
    // Back to the speed the menu shows (the show may have left an in-between one).
    speed = Number($('speed').value);
    if (video) video.playbackRate = speed;
    $('show-bar').hidden = true;
    document.body.classList.remove('showing');
    lockForShow(false);
    $('show-btn').hidden = false;
    $('globe').focus();
  },
});

if (import.meta.env.DEV) { window.__show = show; window.__probeAt = (lat, lon) => probeReading({ lat, lon }); }

// The temperature tone follows the value at the centre of the view, averaged across a band
// 30° of longitude wide so a strip of land doesn't silence it.
let probeOn = false;
function probeReading(c = globe.center()) {
  if (!c || !current) return null;
  let sum = 0, n = 0;
  for (let dl = -15; dl <= 15; dl += 5) {
    const r = readingAt({ lat: c.lat, lon: ((c.lon + dl + 540) % 360) - 180, x: 0 });
    if (r.value01 != null) { sum += r.value01; n++; }
  }
  return n ? sum / n : null;
}

function startShow() {
  if (show.running) return;
  $('show-caption').textContent = '';
  $('show-bar').hidden = false;
  $('show-btn').hidden = true;
  document.body.classList.add('showing');
  lockForShow(true);
  show.start(SHOW_SCRIPT);
}
$('show-btn').addEventListener('click', startShow);
$('show-stop').addEventListener('click', () => show.stop());
// During the show you can still look around (drag, zoom, the spin and zoom buttons, arrow
// keys); the globe eases back to the show when you let go (globe.js, showView). Dataset
// tabs and the timeline are locked so the narration and the data stay together. Esc or
// "Explore on my own" ends the show, leaving the planet where it is.
const SHOW_LOCKED = ['shelf', 'play', 'scrub', 'speed'];
function lockForShow(on) {
  for (const id of SHOW_LOCKED) $(id).inert = on;
}
document.addEventListener('keydown', (e) => {
  if (show.running && e.isTrusted && e.key === 'Escape') show.stop();
}, true);

// While the first dataset plays, quietly get the others ready: data (lightning's dots are
// parsed in a worker), their dot buffers and still images uploaded to the GPU one at a
// time, so the first switch to each is as quick as later ones.
async function preloadOtherDatasets() {
  const pause = () => new Promise((r) => setTimeout(r, 300));
  for (const ds of DATASETS) {
    const l = await loadDataset(ds).catch(() => null);
    if (!l || l === current) continue;
    if (l.events) {
      globe.prepareEvents(l.events); // uploaded on the next frame
      await pause();
      const night = await nightTexture(l.events).catch(() => null);
      if (night) globe.renderer.initTexture(night);
    }
    if (l.land) {
      const tex = await Promise.all([cachedStill(l.land.image), cachedStill(l.land.mask, { data: true })]).catch(() => []);
      tex.forEach((t) => globe.renderer.initTexture(t));
    }
    if (l.videoUrl) fetch(quality.preferHigh && l.videoUrlHigh ? l.videoUrlHigh : l.videoUrl, { headers: { Range: 'bytes=0-1500000' } }).catch(() => {}); // warm the first seconds
    await pause();
  }
}

// ---------- Dataset shelf ----------
function buildShelf() {
  const shelf = $('shelf');
  for (const ds of DATASETS) {
    const b = document.createElement('button');
    b.type = 'button';
    // Full name for everyone; narrow screens show the short one (style.css).
    b.innerHTML = ds.short
      ? `<span class="full">${ds.title}</span><span class="short" aria-hidden="true">${ds.short}</span>`
      : ds.title;
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
// ?video=6840 is the demo-recording mode: the sharpest file of everything from the start.
const demoHQ = params.get('video') === '6840';
const quality = { res: null, probeMbps: null, note: '', locked: false, token: 0, preferHigh: false };

// Still images (night maps, land layers) stay on the GPU for the visit: decoded once, off
// the main thread, and reused on every switch.
const stillCache = new Map();
function cachedStill(url, opts) {
  if (!stillCache.has(url)) {
    const p = loadStill(url, opts);
    stillCache.set(url, p);
    p.catch(() => stillCache.delete(url));
  }
  return stillCache.get(url);
}

// Lightning's night map: the 4096 version first (0.4 MB, quick to decode and upload); the
// 8192 one only once someone zooms in far enough to see the difference.
const NIGHT_8K_ZOOM = 1.4;
function nightTexture(ev) {
  if (!ev.night) return cachedStill(ev.base);
  const big = ev.night[8192];
  if (demoHQ && big) return cachedStill(big);
  if (big && stillCache.has(big)) return stillCache.get(big).catch(() => cachedStill(ev.night[4096] ?? big));
  return cachedStill(ev.night[4096] ?? big);
}
function sharpenNight(ev) {
  const big = ev.night?.[8192];
  if (!big || nightMapUrl(ev) !== big) return; // small screens / GPUs keep 4096
  cachedStill(big).then((tex) => {
    if (current?.events === ev && globe.material.map !== tex) globe.setTexture(tex);
  }).catch(() => {});
}

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

// Put a video on the globe. syncFrom: swap the playing video for another file at the same
// moment, without a visible jump (quality upgrade). swap: a dataset switch; nothing changes
// until this video has a decoded first frame, then it sweeps in over swap.prev and
// swap.done() retires the old video. Returns false if it was superseded or couldn't load.
async function useVideo(url, res, { syncFrom = null, swap = null } = {}) {
  const v = makeVideo(url);
  if (swap) {
    const timeout = (ms) => new Promise((r) => setTimeout(r, ms));
    if (swap.startAt > 0) {
      // Open at the requested moment: seek before the first picture is shown.
      if (v.readyState < 1) await Promise.race([once(v, 'loadedmetadata'), timeout(6000)]);
      if (v.duration) {
        v.currentTime = Math.min(swap.startAt * v.duration, v.duration - END_GAP_S);
        await Promise.race([once(v, 'seeked'), timeout(6000)]);
      }
    }
    if (v.readyState < 2) await Promise.race([once(v, 'loadeddata'), timeout(6000)]);
    if (swap.token !== switchToken) { v.removeAttribute('src'); v.load(); return false; }
  }
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
  showPausedFrames(v, videoTexture);
  quality.res = res; // set before videoColorFix() reads it
  if (!detail.on) globe.setTexture(videoTexture, videoColorFix());
  if (swap) globe.swapFrom(swap.prev, swap.done);
  if (playing && !detail.on) v.play().catch(() => {});
  trackVideoFrames(v, current.frames);
  if (res === 4096) watchStalls(v);
  if (old) { old.pause(); old.removeAttribute('src'); old.load(); }
  oldTex?.dispose();
  return true;
}

// three.js copies a video into its texture only as the video plays, so a paused video
// (switching datasets while paused, or seeking while paused) left the globe black or stale.
// Copy the frame whenever one is ready or a seek lands.
function showPausedFrames(v, tex) {
  const upload = () => { if (videoTexture === tex) tex.needsUpdate = true; };
  if (v.readyState >= 2) upload();
  v.addEventListener('loadeddata', upload);
  v.addEventListener('seeked', upload);
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
  if (ok) quality.preferHigh = true; // later switches start on 4096 directly (no second swap)
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

// Switching datasets: nothing freezes and nothing goes blank. Data arrives from the cache
// (loaded once, lightning dots parsed in a worker, other datasets preloaded after start).
// The globe keeps showing the old dataset until the new one's first picture is ready, then
// the new one sweeps across (globe.swapFrom) and lightning dots fade in or out.
let switchToken = 0;
// startAt: where on the timeline (0-1) the new dataset should open, already there when it
// first appears (the guided show uses this so nothing jumps during the transition).
async function selectDataset(ds, { startAt = 0 } = {}) {
  const token = ++switchToken;
  for (const b of $('shelf').children) b.setAttribute('aria-pressed', String(b.dataset.id === ds.id));
  if (current) sound.chime(); // a soft cue that the data is changing (not on the very first load)
  const loaded = await loadDataset(ds);
  if (token !== switchToken) return;
  if (!loaded) {
    announcer.say(`${ds.title} isn't built yet. Run the pipeline for ${ds.id}.`, { force: true });
    return;
  }
  exitDetail({ resume: false });
  current = loaded;
  extractor = new FeatureExtractor(loaded.summary);
  frame = startAt * loaded.summary.frames;
  $('scrub').value = String(Math.round(startAt * 1000));

  // The old picture stays put (paused on its last frame) until the new one replaces it.
  const prev = globe.material.map;
  const oldVideo = video, oldVideoTex = videoTexture;
  oldVideo?.pause();
  video = null;
  videoTexture = null;
  const retire = () => {
    if (oldVideo) { oldVideo.removeAttribute('src'); oldVideo.load(); }
    oldVideoTex?.dispose();
  };
  quality.token++; // cancel any upgrade still in flight for the previous dataset
  globe.clearEvents(); // fades the dots out

  if (loaded.events && params.get('events') !== '0') {
    // Vector mode (lightning): static night map + GPU dots, no video at all.
    // The frame clock runs on its own (tick() advances `frame` when there is no video).
    quality.res = null;
    quality.note = `vector events (${loaded.events.count.toLocaleString()} dots)`;
    const ev = loaded.events;
    globe.prepareEvents(ev);
    let night;
    try {
      night = await nightTexture(ev);
    } catch (err) {
      console.warn('[events] base map failed', err);
      night = await cachedStill(ev.base);
    }
    if (token !== switchToken) return;
    globe.setTexture(night);
    globe.setEvents(ev);
    globe.swapFrom(prev, retire);
    if (globe.zoomFactor > NIGHT_8K_ZOOM) sharpenNight(ev);
  } else if (loaded.videoUrl) {
    const swap = { token, prev, done: retire, startAt };
    if (params.get('video') === '6840' && (await canPlayFull(loaded))) {
      await useVideo(loaded.videoUrlMax, 6840, { swap }); // demo-recording mode: full resolution throughout
      quality.note = 'forced 6840 (HEVC)';
    } else {
      if (params.get('video') === '6840') {
        quality.note = loaded.videoUrlMax ? 'this browser cannot decode 6840 HEVC smoothly' : 'no 6840 file';
        console.warn(`[video] ?video=6840: ${quality.note}; using the normal videos`);
      }
      // Once a visit has shown the connection handles 4096, start there.
      const startHigh = loaded.videoUrlHigh && (params.get('video') === '4096' || demoHQ || (quality.preferHigh && !quality.locked));
      const ok = await useVideo(startHigh ? loaded.videoUrlHigh : loaded.videoUrl, startHigh ? 4096 : 2048, { swap });
      if (!ok) return; // superseded by another switch
      if (!startHigh) maybeUpgrade(loaded); // runs in the background
    }
  } else if (loaded.texture) {
    globe.setTexture(loaded.texture);
    globe.swapFrom(prev, retire);
  }
  if (token !== switchToken) return;

  // Zoom limit follows the sharpest texture this dataset has.
  // (Vector events are sharp at any size, so their limit is the base map's width.)
  globe.setDetailWidth(loaded.hires?.size?.[0] ?? (loaded.events && params.get('events') !== '0' ? eventsDetailWidth(loaded.events) : 2048));

  // Sharp static land over the video (cached; loads in the background the first time).
  globe.setLandLayer(null, null);
  if (loaded.land && params.get('land') !== '0') { // ?land=0 turns it off for A/B tests
    Promise.all([cachedStill(loaded.land.image), cachedStill(loaded.land.mask, { data: true })])
      .then(([land, mask]) => { if (current === loaded && token === switchToken) globe.setLandLayer(land, mask); })
      .catch((err) => console.warn('[land] could not load land layer', err));
  }

  sound.setMode(ds.sound);
  $('credit').innerHTML =
    `${ds.credit} <a href="${ds.svs}" target="_blank" rel="noopener">Source</a>` +
    (loaded.demo ? ' · <strong>Demo data</strong>: the pipeline hasn\'t been run yet.' : '') +
    '<br>Sky: NASA SVS star map and LRO Moon; Sun and planets ' +
    '<a href="https://www.solarsystemscope.com/textures/" target="_blank" rel="noopener">Solar System Scope</a> (CC BY 4.0).';
  updateLegend(ds);
  buildMix(ds);
  steady.key = steady.pendingKey = null; // a new dataset's first reading shows at once
  Object.assign(activity, { value: 0, level: 0, at: 0 });
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
// Seek to fraction f of the timeline. Never land exactly on the end: a looping video parked
// at its last moment stops there instead of wrapping, so stay a hair short and let it loop.
const END_GAP_S = 0.05;
function seekTo(f) {
  f = Math.min(1, Math.max(0, f));
  if (video?.duration) video.currentTime = Math.min(f * video.duration, video.duration - END_GAP_S);
  if (current) frame = Math.min(f, 0.9999) * current.summary.frames;
}
// Hold the slider still only while it's being dragged (it keeps focus after release, and
// a focused slider that stopped following playback looked frozen at the end).
let scrubbing = false;
$('scrub').addEventListener('pointerdown', () => { scrubbing = true; });
addEventListener('pointerup', () => { scrubbing = false; });
addEventListener('pointercancel', () => { scrubbing = false; });
$('scrub').addEventListener('input', (e) => {
  seekTo(Number(e.target.value) / 1000);
  if (detail.on) enterDetail(); // re-snap to the keyframe nearest the new time
});
$('spin-left').addEventListener('click', () => globe.spinBy(0.35 / Math.sqrt(Math.max(1, globe.zoomFactor))));
$('spin-right').addEventListener('click', () => globe.spinBy(-0.35 / Math.sqrt(Math.max(1, globe.zoomFactor))));
$('zoom-in').addEventListener('click', () => globe.zoomBy(1.6));
$('zoom-out').addEventListener('click', () => globe.zoomBy(1 / 1.6));
function setMuted(muted) {
  $('mute').setAttribute('aria-pressed', String(muted));
  $('mute').setAttribute('aria-label', muted ? 'Unmute' : 'Mute');
  sound.setMuted(muted);
}
$('mute').addEventListener('click', (e) => {
  setMuted(e.currentTarget.getAttribute('aria-pressed') !== 'true');
});

// Color legend for the current dataset (from datasets.js), hidden when it has none.
function updateLegend(ds) {
  // Aerosols name and colour each type in the readout's bars, so no separate legend.
  const lg = ds.typeShort ? null : ds.legend;
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
  if (current.events && z > NIGHT_8K_ZOOM) sharpenNight(current.events);
  const { inAt, outAt } = detailThresholds();
  if (z < outAt) {
    detail.resumedZoomed = false;
    // Zoom paused playback for us -> resume. If the user paused, keep the sharp still.
    if (detail.on && detail.wasPlaying) exitDetail({ resume: true });
  } else if (z >= inAt && z > 1.02 && !detail.on && !detail.resumedZoomed && current.hires && video && !fullResVideo() && !show.running) {
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
// Colour images are marked sRGB here, before anything can upload them: the GPU format is
// fixed at upload, and a map preloaded as plain data showed washed out (grey-blue).
// Masks pass { data: true }.
async function loadStill(url, { data = false } = {}) {
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
  tex.colorSpace = data ? THREE.NoColorSpace : THREE.SRGBColorSpace;
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
  // The guided show is driving: the cursor stays silent (it also would have soloed aerosols).
  if (!current || !p || show.running) { sound.cursor(null); return; }
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

// Audio bars in the player: a calm height for steady sound plus a jump on every new note,
// hit or syllable (the level above its own recent average), rising fast and falling back.
const eqBars = [...document.querySelectorAll('#eq span')];
const eqLevels = eqBars.map(() => 0);
const eqAvg = eqBars.map(() => 0);
function updateEq(dt) {
  if (!sound || $('app').hidden) return;
  const raw = sound.muted ? eqBars.map(() => 0) : sound.levels(eqBars.length);
  eqBars.forEach((bar, i) => {
    eqAvg[i] += (raw[i] - eqAvg[i]) * (1 - Math.exp(-dt / 0.6));
    const t = Math.min(1, raw[i] * 0.45 + Math.max(0, raw[i] - eqAvg[i]) * 3);
    eqLevels[i] = t > eqLevels[i] ? t : Math.max(t, eqLevels[i] - dt * 2.6);
    bar.style.transform = `scaleY(${(0.12 + 0.88 * (reducedMotion ? 0 : eqLevels[i])).toFixed(3)})`;
  });
}

function tick(now) {
  const dt = Math.min(0.1, (now - last) / 1000);
  updateEq(dt);
  if (now > last) renderFps = renderFps * 0.95 + (1000 / (now - last)) * 0.05;
  last = now;

  if (!current) {
    globe.update(dt); // the cover
  } else {
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
      updateMix(features);
      const pr = current.ds.padRange;
      if (pr) {
        const meanValue = current.summary.meta.vmin + features.mean01 * current.summary.range;
        features.padMean01 = Math.min(1, Math.max(0, (meanValue - pr[0]) / (pr[1] - pr[0])));
      }
      sound.update(features, featureClock);
      if (probeOn) sound.probeValue(probeReading());
      // Keyboard users: the center of the view plays for a few seconds after they move the globe.
      if (globe.keyMoving) keyboardMovedAt = now; // still turning (held key or coasting)
      if (!hover && document.activeElement === $('globe') && now - keyboardMovedAt < 3000) {
        playCursor(globe.center());
      }
      featureClock = 0;
      updateReadout();
      writeDebug(features);
    }
    if (!scrubbing) {
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
      return {
        text: `${names[g.type]} · ${amount}`, // full, for speech
        short: current.ds.typeShort?.[g.type] ?? names[g.type], amount, // on screen
        value01: g.strength, type: g.type,
      };
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

// Readout bars. Aerosols: one per type, sized by how much of it is in view (~1 = a typical
// amount fills half the bar). Lightning: activity here (the readout's averaged point) and
// in view (the drums' level). The same levels drive the sounds, so the bars move with what
// you hear. Widths ease via CSS.
function mixRows(ds) {
  if (ds.typeShort) return ds.typeShort.map((name, k) => [name, ds.typeColors[k]]);
  if (ds.id === 'lightning') return [['Here', '#fff34a'], ['In view', '#fff34a']];
  return null;
}
function buildMix(ds) {
  const mix = $('readout-mix');
  const rows = mixRows(ds);
  mix.hidden = !rows;
  mix.innerHTML = rows
    ? rows.map(([name, color]) =>
      `<div class="mix-row"><span class="mix-name">${name}</span><span class="mix-track"><span class="mix-fill" style="background:${color}"></span></span></div>`).join('')
    : '';
}
function updateMix(features) {
  if ($('readout-mix').hidden) return;
  let levels = null;
  if (features.classes) levels = features.classes.map((c) => c.level / 2);
  else if (current?.events && features.hits) {
    levels = [activity.value / ACTIVITY_LEVELS[3].up, (features.hits.norm ?? 0) / 2];
  }
  if (!levels) return;
  const fills = $('readout-mix').querySelectorAll('.mix-fill');
  levels.forEach((l, k) => {
    if (fills[k]) fills[k].style.width = `${Math.round(Math.min(1, Math.max(0, l)) * 100)}%`;
  });
}

// Category readouts (aerosols, lightning): the big word (the type) changes only once a new type has
// held for a moment, and fades across; at plume edges the strongest type flickers between
// neighbours and used to flip several times a second. The small line (amount, place)
// updates directly. Numbers (temperatures) update directly too.
const READOUT_HOLD_MS = 300;
const steady = { key: null, pendingKey: null, since: 0 };
function showReadout(key, value, sub) {
  $('readout-place').textContent = sub;
  if (key === steady.key) { steady.pendingKey = null; return; }
  const now = performance.now();
  if (key !== steady.pendingKey) { steady.pendingKey = key; steady.since = now; }
  if (steady.key !== null && now - steady.since < READOUT_HOLD_MS) return;
  const first = steady.key === null;
  steady.key = key;
  steady.pendingKey = null;
  if (first || $('readout-value').textContent === value) { $('readout-value').textContent = value; return; }
  const el = $('readout');
  el.classList.add('swapping');
  setTimeout(() => {
    $('readout-value').textContent = value;
    el.classList.remove('swapping');
  }, 140);
}

// Lightning: the label describes activity around the point (the cell and its 8
// neighbours, ~4° across) averaged over about a second. Single frames flicker: a cell is
// lit one frame and dark the next, and the label used to flip ~5 times a second. Levels
// also need a clear margin to change (hysteresis: up at `up`, back down only below `down`).
const ACTIVITY_LEVELS = [
  { name: 'Quiet', up: 0, down: 0 },
  { name: 'Scattered flashes', up: 0.0004, down: 0.00015 },
  { name: 'Storms', up: 0.0016, down: 0.001 },
  { name: 'Heavy storms', up: 0.0045, down: 0.003 },
];
const activity = { value: 0, level: 0, at: 0 };
function updateActivity(p) {
  const now = performance.now();
  const dt = Math.min(0.5, (now - (activity.at || now)) / 1000);
  activity.at = now;
  const { vmin } = current.summary.meta;
  const range = current.summary.range;
  const step = 1.4, cosLat = Math.max(0.2, Math.cos(p.lat * Math.PI / 180));
  let sum = 0, n = 0;
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      const lon = ((p.lon + (dx * step) / cosLat + 540) % 360) - 180;
      const r = readingAt({ lat: Math.max(-89, Math.min(89, p.lat + dy * step)), lon });
      if (r.value01 != null) { sum += vmin + r.value01 * range; n++; }
    }
  }
  const v = n ? sum / n : 0;
  activity.value += (v - activity.value) * (1 - Math.exp(-dt / 0.9));
  let L = activity.level;
  while (L < ACTIVITY_LEVELS.length - 1 && activity.value > ACTIVITY_LEVELS[L + 1].up) L++;
  while (L > 0 && activity.value < ACTIVITY_LEVELS[L].down) L--;
  activity.level = L;
}
if (import.meta.env.DEV) window.__activity = activity;

function updateReadout() {
  if (!current) return;
  const p = hover ?? globe.center();
  $('readout-source').textContent = hover ? 'Cursor' : 'Center';
  $('readout-date').textContent = displayDate() || '—';
  const r = readingAt(p);
  const place = formatPlace(p);
  if (current.events) {
    updateActivity(p);
    showReadout(`activity ${activity.level}`, ACTIVITY_LEVELS[activity.level].name, place);
  } else if (current.summary.classes) {
    const amount = r.amount ? r.amount[0].toUpperCase() + r.amount.slice(1) : null;
    showReadout(r.short ? `type ${r.type}` : r.text, r.short ?? r.text, amount ? `${amount} · ${place}` : place);
  } else {
    steady.key = steady.pendingKey = null;
    $('readout-value').textContent = r.text;
    $('readout-place').textContent = place;
  }
  if (document.activeElement === $('globe') && !hover) announcer.say(describe(p));
}
