// Renders the video's overlays as 2560x1440 PNGs (transparent unless noted).
// node overlays.mjs <outdir> <lines.json>
import { chromium } from 'playwright-core';
import fs from 'node:fs';

const out = process.argv[2];
const lines = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
export const FRAME = { x: 160, y: 40, w: 2240, h: 1260, r: 22 }; // the recording's place in the 2560x1440 frame

const fonts = '<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">';
const base = `<style>html,body{margin:0;width:1280px;height:720px;background:transparent;overflow:hidden}
body{font-family:Inter,sans-serif;color:#fff;-webkit-font-smoothing:antialiased}</style>`;
const F = { x: FRAME.x / 2, y: FRAME.y / 2, w: FRAME.w / 2, h: FRAME.h / 2, r: FRAME.r / 2 };

const pages = {
  // Black surround with a rounded window and a hairline edge around the recording.
  frame: `<div style="position:absolute;left:${F.x}px;top:${F.y}px;width:${F.w}px;height:${F.h}px;border-radius:${F.r}px;
    box-shadow:0 0 0 2000px #000, inset 0 0 0 1px rgba(255,255,255,.16)"></div>`,
  // Required disclosure for the synthetic narration (Space Apps rules on SI-generated audio).
  disclosure: `<div style="position:absolute;right:${F.x}px;bottom:8px;font-size:10px;letter-spacing:.08em;
    text-transform:uppercase;color:rgba(255,255,255,.42)">Narration voice: AI-generated</div>`,
  end: `<div style="position:absolute;inset:0;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
    <div style="font-size:12px;letter-spacing:.32em;text-transform:uppercase;color:rgba(255,255,255,.6)">Team Waveform · NASA Space Apps Challenge 2026</div>
    <div style="font-family:Barlow,Inter,sans-serif;font-weight:600;font-size:64px;letter-spacing:.01em;text-transform:uppercase;margin-top:18px;line-height:1">Earth Information Jukebox</div>
    <div style="font-size:20px;margin-top:16px;color:rgba(255,255,255,.82)">A new way to hear the world</div>
    <div style="margin-top:38px;font-size:16px;letter-spacing:.04em;padding:10px 20px;border:1px solid rgba(255,255,255,.55);border-radius:2px">brian23443.github.io/earth-information-jukebox</div>
    <div style="margin-top:22px;font-size:11px;letter-spacing:.06em;color:rgba(255,255,255,.45)">Data: NASA Scientific Visualization Studio · ECCO2 · ISS LIS · GEOS-FP · Black Marble</div>
  </div>`,
};
lines.forEach((l, i) => {
  pages[`cap${i + 1}`] = `<div style="position:absolute;left:0;right:0;top:${F.y + F.h + 16}px;text-align:center;
    font-size:21px;font-weight:500;line-height:1.3;letter-spacing:.005em;padding:0 120px">${l}</div>`;
});

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 2 });
for (const [id, html] of Object.entries(pages)) {
  await page.setContent(`<!doctype html><html><head>${fonts}${base}</head><body>${html}</body></html>`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${out}/${id}.png`, omitBackground: true });
}
await browser.close();
console.log('wrote', Object.keys(pages).join(' '));
