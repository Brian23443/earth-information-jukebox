// Records a scripted run of the site (tab video + tab audio) in real Chrome.
// node record.mjs <take> <outdir>
import { chromium } from 'playwright-core';
import fs from 'node:fs';

const take = process.argv[2] || 'main';
const out = process.argv[3] || '.';
const W = 1280, H = 720, DPR = Number(process.env.DPR || 2);
const URL = 'http://localhost:5173/?video=6840';

const browser = await chromium.launch({
  channel: 'chrome',
  headless: false,
  ignoreDefaultArgs: ['--enable-automation'],
  ignoreDefaultArgs: ['--enable-automation'],
  args: [
    '--auto-accept-this-tab-capture',
    '--autoplay-policy=no-user-gesture-required',
    '--enable-gpu', '--use-angle=metal', '--ignore-gpu-blocklist',
    `--window-size=${W},${H + 200}`,
    '--disable-features=CalculateNativeWinOcclusion',
    '--disable-background-timer-throttling',
    '--disable-renderer-backgrounding',
    '--disable-backgrounding-occluded-windows',
  ],
});
const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: DPR });
const page = await ctx.newPage();
page.on('request', (r) => { if (/\.(mp4|jpg)$/.test(r.url()) && /data\//.test(r.url())) console.log('[get]', r.url().split('/data/')[1]); });
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') console.log('[page]', m.text()); });

const file = fs.createWriteStream(`${out}/${take}.${process.env.EXT || 'webm'}`);
await page.exposeFunction('__chunk', (b64) => { file.write(Buffer.from(b64, 'base64')); });
const marks = [];
let t0 = 0;
const mark = (name) => { marks.push({ name, t: (Date.now() - t0) / 1000 }); console.log(name, marks.at(-1).t.toFixed(2)); };
const wait = (s) => page.waitForTimeout(s * 1000);



const box = async (sel) => page.locator(sel).first().boundingBox();
// A drawn cursor (tab capture has none) glided in the page, sending real pointer events to
// whatever is under it, so hovering the globe plays and reads out like a mouse would.
await page.addInitScript(() => {
  addEventListener('DOMContentLoaded', () => {
    const c = document.createElement('div');
    c.id = '__cursor';
    c.style.cssText = 'position:fixed;left:0;top:0;width:18px;height:18px;margin:-9px 0 0 -9px;border-radius:50%;' +
      'border:2px solid #fff;background:rgba(255,255,255,.18);box-shadow:0 0 12px rgba(0,0,0,.6);' +
      'pointer-events:none;z-index:99999;transition:opacity .4s, transform .15s;opacity:0';
    document.body.appendChild(c);
    window.__cur = { x: innerWidth * 0.8, y: innerHeight * 0.9 };
    window.__place = (x, y) => {
      window.__cur = { x, y };
      c.style.left = x + 'px'; c.style.top = y + 'px';
      const el = document.elementFromPoint(x, y);
      el?.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true, pointerType: 'mouse' }));
    };
    window.__curShow = (on) => { c.style.opacity = on ? '1' : '0'; };
    window.__press = () => { c.style.transform = 'scale(.7)'; setTimeout(() => { c.style.transform = ''; }, 160); };
    window.__glide = (x, y, seconds) => new Promise((done) => {
      const from = { ...window.__cur }, t0 = performance.now();
      const step = (now) => {
        const k = Math.min(1, (now - t0) / (seconds * 1000)), e = k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2;
        window.__place(from.x + (x - from.x) * e, from.y + (y - from.y) * e);
        k < 1 ? requestAnimationFrame(step) : done();
      };
      requestAnimationFrame(step);
    });
  });
});
const glide = async (_from, to, seconds) => page.evaluate(([x, y, s]) => window.__glide(x, y, s), [to[0], to[1], seconds]);
const cursor = (on) => page.evaluate((on) => window.__curShow(on), on);
const click = async (sel) => {
  const b = await box(sel);
  await glide(null, [b.x + b.width / 2, b.y + b.height / 2], 0.8);
  await page.evaluate(() => window.__press());
  await page.mouse.click(b.x + b.width / 2, b.y + b.height / 2);
};
await page.goto(URL, { waitUntil: 'load' });
await wait(4); // cover textures settle
const gdmOpts0 = {
  video: { frameRate: { ideal: 60 } },
  audio: { suppressLocalAudioPlayback: false, echoCancellation: false, noiseSuppression: false, autoGainControl: false },
  preferCurrentTab: true, selfBrowserSurface: 'include', surfaceSwitching: 'exclude',
};
const gdmOpts = gdmOpts0;
await page.evaluate((t) => { window.__types = t; }, process.env.TYPES || 'video/webm;codecs=h264,opus');
console.log('gpu', await page.evaluate(() => { const g = document.createElement('canvas').getContext('webgl2'); const e = g.getExtension('WEBGL_debug_renderer_info'); return g.getParameter(e.UNMASKED_RENDERER_WEBGL); }));
await page.evaluate(async (o) => { window.__stream = await navigator.mediaDevices.getDisplayMedia(o); }, gdmOpts);
// The 'sharing this tab' bar steals height from the window: size the window so the page is
// fully visible at W x H, and let the stream settle before recording starts.
{
  const cdp = await ctx.newCDPSession(page);
  const { windowId } = await cdp.send('Browser.getWindowForTarget');
  await cdp.send('Browser.setWindowBounds', { windowId, bounds: { left: 0, top: 0, width: W, height: H + Number(process.env.BARS || 143) } });
}
await wait(2);
console.log('stream', await page.evaluate(() => { const t = window.__stream.getVideoTracks()[0].getSettings(); return [t.width, t.height]; }));
await page.evaluate(async (o) => {
  const stream = window.__stream;
  window.__size0 = [stream.getVideoTracks()[0].getSettings().width, stream.getVideoTracks()[0].getSettings().height];
  const types = (window.__types || 'video/webm;codecs=h264,opus').split(' ');
  const mimeType = types.find((t) => MediaRecorder.isTypeSupported(t));
  console.warn('[rec] ' + mimeType);
  const rec = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 60e6, audioBitsPerSecond: 256e3 });
  const parts = [];
  rec.ondataavailable = (e) => parts.push(e.data); // kept in memory: no work on the page while recording
  window.__rec = rec;
  window.__recDone = new Promise((r) => { rec.onstop = r; });
  window.__flush = async () => {
    const blob = new Blob(parts);
    for (let i = 0; i < blob.size; i += 4 << 20) {
      const buf = new Uint8Array(await blob.slice(i, i + (4 << 20)).arrayBuffer());
      let s = '';
      for (let j = 0; j < buf.length; j += 0x8000) s += String.fromCharCode(...buf.subarray(j, j + 0x8000));
      await window.__chunk(btoa(s));
    }
  };
  rec.start();
}, gdmOpts);
t0 = Date.now();
console.log('after start', await page.evaluate(() => [innerWidth, innerHeight, window.__size0]));
const fly = (o) => page.evaluate((o) => window.__globe.flyTo(o), o);
const clickShelf = async (label) => { await page.getByRole('button', { name: label, exact: true }).first().click(); };
const seek = (f) => page.evaluate((f) => { const s = document.getElementById('scrub'); s.value = String(Math.round(f * 1000)); s.dispatchEvent(new Event('input')); }, f);

if (take === 'main') {
  mark('cover');
  await wait(3.2);
  await cursor(true);
  await click('#explore-btn');
  mark('explore-click');
  await cursor(false);
  await wait(1.5);
  await fly({ lat: 18, lon: -165, zoom: 1.2, seconds: 4 });
  await wait(4.2);
  await page.evaluate(() => window.__place(innerWidth * 0.53, innerHeight * 0.27));
  await wait(0.6);
  await cursor(true);
  mark('ocean-hover');
  // Point at the sea from the North Pacific to the equator: the tone climbs, the readout follows.
  await glide(null, [W * 0.49, H * 0.63], 3.8);
  await wait(0.8);
  mark('ocean-end');
  await cursor(false);
  await page.evaluate(() => window.__place(innerWidth - 4, innerHeight * 0.5));
  // Turn to Africa off camera (the edit cuts here), so each switch lands on the action.
  await fly({ lat: 3, lon: 15, zoom: 1.3, seconds: 2.5 });
  await wait(2.8);
  mark('lightning');
  await click('#shelf button:nth-child(2)');
  await seek(0.32);
  await page.evaluate(() => window.__globe.spinBy(0.12)); // a gentle drift while it plays
  await wait(5);
  mark('lightning-end');
  await wait(0.3);
  mark('aerosols');
  await click('#shelf button:nth-child(3)');
  await seek(0.3);
  await fly({ lat: 8, lon: 2, zoom: 1.35, seconds: 4 });
  await wait(5.5);
  mark('aerosols-end');
} else if (take === 'show') {
  await wait(1);
  await cursor(true);
  await click('#start-btn');
  mark('show-click');
  await cursor(false);
  await wait(16);
  mark('show-end');
}

await page.evaluate(async () => { window.__rec.stop(); await window.__recDone; await window.__flush(); });
await wait(2.5);
file.end();
fs.writeFileSync(`${out}/${take}.marks.json`, JSON.stringify(marks, null, 1));
await browser.close();
console.log('done', take);
