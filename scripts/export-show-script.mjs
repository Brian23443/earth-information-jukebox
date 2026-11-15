// Writes docs/show-script.md: every narration line of the guided show, with the file name
// its recording should have. Run after editing web/src/show-script.js:
//   node scripts/export-show-script.mjs
import { writeFileSync } from 'node:fs';
import { SHOW_SCRIPT } from '../web/src/show-script.js';

const lines = SHOW_SCRIPT.filter((s) => s.say);
const words = lines.reduce((n, s) => n + s.text.split(/\s+/).length, 0);
const md = [
  '# Guided show: narration script',
  '',
  `${lines.length} lines, ${words} words (about ${Math.round(words / 2.6 / 6) / 10} minutes of speech).`,
  '',
  'Record each line and save it as `web/public/show/voice/<file>` (MP3). Lines without a',
  "recording are read by the browser's built-in voice. Generated from `web/src/show-script.js`;",
  'rerun `node scripts/export-show-script.mjs` after editing it.',
  '',
  '| File | Line |',
  '| --- | --- |',
  ...lines.map((s) => `| \`${s.say}.mp3\` | ${s.text} |`),
  '',
].join('\n');
writeFileSync(new URL('../docs/show-script.md', import.meta.url), md);
console.log(`wrote docs/show-script.md (${lines.length} lines, ${words} words)`);
