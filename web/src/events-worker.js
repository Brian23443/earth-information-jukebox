// Turns pipeline/events.py's events.bin (10-byte records) into ready-to-upload GPU arrays,
// off the main thread: 1.86M lightning dots took ~300 ms to parse and place, which froze
// the globe on every switch to Lightning.
//
// In:  { buf: ArrayBuffer, width, height }
// Out: { count, pos (xyz on the globe), time (start, end), dot (radius, peak), start, maxLife }
const DEG = Math.PI / 180;

self.onmessage = (e) => {
  const { buf, width, height } = e.data;
  const dv = new DataView(buf);
  const n = Math.floor(buf.byteLength / 10);
  const pos = new Float32Array(n * 3);
  const time = new Float32Array(n * 2);
  const dot = new Float32Array(n * 2);
  const start = new Float32Array(n);
  let maxLife = 0;
  for (let i = 0, o = 0; i < n; i++, o += 10) {
    const cx = dv.getUint16(o, true) / 4;
    const cy = dv.getUint16(o + 2, true) / 4;
    const s = dv.getUint16(o + 4, true);
    const t = dv.getUint16(o + 6, true);
    // Same mapping as globe.js latLonToLocal, lifted just above the surface.
    const phi = ((cx / width) * 360) * DEG; // (lon + 180) in radians
    const theta = (cy / height) * 180 * DEG; // (90 - lat) in radians
    const st = Math.sin(theta) * 1.0015;
    pos[i * 3] = -Math.cos(phi) * st;
    pos[i * 3 + 1] = Math.cos(theta) * 1.0015;
    pos[i * 3 + 2] = Math.sin(phi) * st;
    time[i * 2] = s;
    time[i * 2 + 1] = t;
    start[i] = s;
    dot[i * 2] = dv.getUint8(o + 8) / 10;
    dot[i * 2 + 1] = dv.getUint8(o + 9) / 255;
    if (t - s > maxLife) maxLife = t - s;
  }
  self.postMessage({ count: n, pos, time, dot, start, maxLife }, [pos.buffer, time.buffer, dot.buffer, start.buffer]);
};
