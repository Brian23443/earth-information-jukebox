// Loads what pipeline/ wrote to public/data/<id>/, or a synthetic stand-in.
//
// summary.bin layout: uint8 [frames][bands][cols][2] = [value 0-255, valid share 0-255]
import * as THREE from 'three';

const BASE = `${import.meta.env.BASE_URL}data`;

async function fetchJson(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.json();
}

// Returns the file size in bytes (or true if unknown) when the file exists, else false.
async function exists(url) {
  try {
    const r = await fetch(url, { method: 'HEAD' });
    // Vite's dev server answers unknown paths with index.html, so check the type too.
    if (!r.ok || (r.headers.get('content-type') || '').includes('text/html')) return false;
    return Number(r.headers.get('content-length')) || true;
  } catch {
    return false;
  }
}

export class Summary {
  constructor(meta, bytes) {
    this.meta = meta;
    this.frames = meta.frames;
    this.bands = meta.bands;
    this.cols = meta.cols;
    this.bytes = bytes;
    this.range = meta.vmax - meta.vmin;
  }

  // Interpolated {value, share} for one cell at a fractional frame index.
  sample(frame, band, col) {
    const f = ((frame % this.frames) + this.frames) % this.frames;
    const f0 = Math.floor(f);
    const f1 = (f0 + 1) % this.frames;
    const t = f - f0;
    const at = (fi) => (((fi * this.bands + band) * this.cols + col) * 2);
    const a = at(f0), b = at(f1);
    const share = (this.bytes[a + 1] * (1 - t) + this.bytes[b + 1] * t) / 255;
    // Don't blend a value with "no data"
    const va = this.bytes[a + 1] ? this.bytes[a] : this.bytes[b];
    const vb = this.bytes[b + 1] ? this.bytes[b] : this.bytes[a];
    const value = this.meta.vmin + ((va * (1 - t) + vb * t) / 255) * this.range;
    return { value, share };
  }
}

// Explore-mode value grids: grids/NNNNN.png, 256x128, row 0 = north.
// Pixel 0 = no data (land, background); 1-255 = vmin..vmax.
export class GridCache {
  constructor(dir, meta) {
    this.dir = dir;
    this.meta = meta;
    this.index = -1; // frame index of the loaded grid
    this.pixels = null;
    this.width = 0;
    this.height = 0;
    this.loading = false;
    this.canvas = document.createElement('canvas');
  }

  // Ask for the grid of a frame; only one fetch in flight, the latest request wins next.
  request(index) {
    this.wanted = index;
    if (this.loading || index === this.index) return;
    this.loading = true;
    const img = new Image();
    img.onload = () => {
      this.canvas.width = img.width;
      this.canvas.height = img.height;
      const ctx = this.canvas.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(img, 0, 0);
      const rgba = ctx.getImageData(0, 0, img.width, img.height).data;
      this.pixels = new Uint8Array(img.width * img.height);
      for (let i = 0; i < this.pixels.length; i++) this.pixels[i] = rgba[i * 4];
      this.width = img.width;
      this.height = img.height;
      this.index = index;
      this.loading = false;
      if (this.wanted !== index) this.request(this.wanted);
    };
    img.onerror = () => { this.loading = false; };
    img.src = `${this.dir}/grids/${String(index).padStart(5, '0')}.png`;
  }

  // {value} | {noData: true} | {type, strength} (aerosols) | null while nothing is loaded yet.
  lookup(lat, lon) {
    if (!this.pixels) return null;
    const x = Math.min(this.width - 1, Math.max(0, Math.floor(((lon + 180) / 360) * this.width)));
    const y = Math.min(this.height - 1, Math.max(0, Math.floor(((90 - lat) / 180) * this.height)));
    let q = this.pixels[y * this.width + x];
    if (this.meta.classes) {
      // Aerosols: 0 = clear air, else type*64 + 1 + strength(0..62). No neighbour fill:
      // averaging type codes would be meaningless.
      if (q === 0) return { noData: true };
      return { type: Math.floor((q - 1) / 64), strength: ((q - 1) % 64) / 62 };
    }
    // ~5% of SST ocean cells hold no flow line at this grid size; borrow a neighbour's
    // value rather than calling open ocean "land". Longitude wraps around.
    if (q === 0) {
      let sum = 0, n = 0;
      for (let dy = -1; dy <= 1; dy++) {
        const yy = y + dy;
        if (yy < 0 || yy >= this.height) continue;
        for (let dx = -1; dx <= 1; dx++) {
          const v = this.pixels[yy * this.width + ((x + dx + this.width) % this.width)];
          if (v) { sum += v; n++; }
        }
      }
      if (n < 3) return { noData: true }; // mostly empty around here: land or ice
      q = sum / n;
    }
    return { value: this.meta.vmin + ((q - 1) / 254) * (this.meta.vmax - this.meta.vmin) };
  }
}

// events.bin: 9-byte records (uint16 x, y, start, end; uint8 radius*10), little-endian.
// Unpacked into typed arrays the globe hands straight to the GPU.
async function loadEvents(dir, optional) {
  const meta = await optional('events.json');
  if (!meta) return null;
  const buf = await (await fetch(`${dir}/events.bin`)).arrayBuffer();
  const dv = new DataView(buf);
  const n = meta.count;
  const ev = {
    count: n, width: meta.width, height: meta.height, base: `${dir}/base.jpg`,
    x: new Uint16Array(n), y: new Uint16Array(n),
    start: new Float32Array(n), end: new Float32Array(n), r: new Float32Array(n),
  };
  for (let i = 0, o = 0; i < n; i++, o += 9) {
    ev.x[i] = dv.getUint16(o, true);
    ev.y[i] = dv.getUint16(o + 2, true);
    ev.start[i] = dv.getUint16(o + 4, true);
    ev.end[i] = dv.getUint16(o + 6, true);
    ev.r[i] = dv.getUint8(o + 8);
  }
  return ev;
}

// Returns both playback videos when present: videoUrl (2048, everyone starts here) and
// videoUrlHigh (4096, swapped in by main.js only on large screens with fast connections).
// Production builds ship data/index.json (web/vite.config.js) listing each dataset's files,
// so optional files are looked up there instead of probed: no 404s in the console. In dev
// there is no index, and we fall back to probing.
let dataIndex;
async function getDataIndex() {
  if (dataIndex === undefined) dataIndex = await fetchJson(`${BASE}/index.json`).catch(() => null);
  return dataIndex;
}

export async function loadDataset(ds) {
  const dir = `${BASE}/${ds.id}`;
  const index = await getDataIndex();
  const listing = index ? index.datasets[ds.id]?.files ?? null : undefined;
  if (listing === null) return ds.demoFallback ? makeDemo(ds) : null; // not in this build
  // has(name): size in bytes (truthy) or false; optional(name): parsed JSON or null.
  const has = (name) => (listing ? listing[name] ?? false : exists(`${dir}/${name}`));
  const optional = (name) =>
    listing && !(name in listing) ? Promise.resolve(null) : fetchJson(`${dir}/${name}`).catch(() => null);
  try {
    const [meta, frames] = await Promise.all([fetchJson(`${dir}/summary.json`), optional('frames.json')]);
    const buf = await (await fetch(`${dir}/summary.bin`)).arrayBuffer();
    const summary = new Summary(meta, new Uint8Array(buf));
    // Aerosols: per-cell amount of each type, [frames][bands][cols][types] (pipeline/aerosols.py).
    if (meta.classes) {
      summary.classes = new Uint8Array(await (await fetch(`${dir}/classes.bin`)).arrayBuffer());
      summary.classNames = meta.classes;
    }
    const [has2048, has4096, has6840] = await Promise.all([has('web.mp4'), has('web4096.mp4'), has('web6840.mp4')]);
    const videoUrlHigh = has4096 ? `${dir}/web4096.mp4` : null;
    // Full-resolution HEVC, only used with ?video=6840 (demo recording on a capable Mac).
    const videoUrlMax = has6840 ? `${dir}/web6840.mp4` : null;
    const videoUrl = has2048 ? `${dir}/web.mp4` : videoUrlHigh;
    const grids = meta.grids ? new GridCache(dir, meta) : null;
    const hires = await optional('hires.json');
    // From pipeline/landlayer.py: sharp static land + per-video color correction.
    const colorFix = await optional('colorfix.json');
    const land = (await has('land.jpg')) ? { image: `${dir}/land.jpg`, mask: `${dir}/landmask.png` } : null;
    if (hires) hires.dir = `${dir}/hires`;
    // Vector events (lightning, from pipeline/events.py) + their static base map.
    const events = await loadEvents(dir, optional);
    // Byte size of the starting video lets main.js turn buffering speed into Mbps.
    const videoBytes = typeof (has2048 || has4096) === 'number' ? (has2048 || has4096) : null;
    return { ds, summary, frames, videoUrl, videoUrlHigh, videoUrlMax, videoBytes, events, grids, hires, colorFix, land, demo: false };
  } catch (err) {
    if (!ds.demoFallback) return null;
    console.info(`[data] ${ds.id}: no pipeline output yet, using synthetic demo data`, err.message);
    return makeDemo(ds);
  }
}

// ---------- Synthetic stand-in so the whole chain runs before any download ----------

const SST_STOPS = [
  [0, [40, 60, 200]],
  [10, [40, 170, 120]],
  [20, [130, 200, 60]],
  [25, [240, 230, 40]],
  [32, [220, 30, 30]],
];

function legendColor(v) {
  for (let i = 1; i < SST_STOPS.length; i++) {
    const [v1, c1] = SST_STOPS[i];
    const [v0, c0] = SST_STOPS[i - 1];
    if (v <= v1 || i === SST_STOPS.length - 1) {
      const t = Math.min(1, Math.max(0, (v - v0) / (v1 - v0)));
      return c0.map((c, k) => Math.round(c + (c1[k] - c) * t));
    }
  }
  return SST_STOPS[0][1];
}

function demoTemp(lat, lon, t) {
  const base = 30 * Math.pow(Math.cos((lat * Math.PI) / 180), 1.6);
  const season = 3 * Math.sin(t * 2 * Math.PI) * Math.sin((lat * Math.PI) / 180);
  const wobble = 2.5 * Math.sin((lon * 3 * Math.PI) / 180 + t * 6);
  return Math.min(32, Math.max(0, base + season + wobble));
}

function makeDemo(ds) {
  const frames = 120, bands = 4, cols = 256;
  const edges = [-90, -45, 0, 45, 90];
  const bytes = new Uint8Array(frames * bands * cols * 2);
  for (let f = 0; f < frames; f++) {
    for (let b = 0; b < bands; b++) {
      const lat = (edges[b] + edges[b + 1]) / 2;
      for (let c = 0; c < cols; c++) {
        const lon = -180 + ((c + 0.5) * 360) / cols;
        const i = ((f * bands + b) * cols + c) * 2;
        bytes[i] = Math.round((demoTemp(lat, lon, f / frames) / 32) * 255);
        bytes[i + 1] = 255;
      }
    }
  }
  const summary = new Summary(
    { frames, bands, cols, bandEdges: edges, vmin: 0, vmax: 32, units: '°C' },
    bytes,
  );

  // Texture painted from the same function (frame 0), so picture and sound agree.
  const w = 1024, h = 512;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(w, h);
  for (let y = 0; y < h; y++) {
    const lat = 90 - ((y + 0.5) * 180) / h;
    for (let x = 0; x < w; x++) {
      const lon = -180 + ((x + 0.5) * 360) / w;
      const [r, g, bl] = legendColor(demoTemp(lat, lon, 0));
      const k = (y * w + x) * 4;
      img.data[k] = r; img.data[k + 1] = g; img.data[k + 2] = bl; img.data[k + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  return {
    ds, summary, texture, videoUrl: null, demo: true,
    frames: { fps: 30, movieStride: 4, offset: 0, dates: ['2007-03-25', '2008-03-03'] },
  };
}
