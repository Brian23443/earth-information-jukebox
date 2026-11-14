import { defineConfig } from 'vite';
import { readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

// Files that live in public/ for local use but must never ship to the public site.
// web6840.mp4: full-resolution HEVC for recording the demo on a capable Mac (?video=6840),
// ~340 MB per dataset; it would push GitHub Pages past its 1 GB limit.
const LOCAL_ONLY = ['web6840.mp4'];

function excludeLocalOnly() {
  let outDir = 'dist';
  return {
    name: 'exclude-local-only',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const walk = (dir) => {
        for (const name of readdirSync(dir)) {
          const p = join(dir, name);
          if (statSync(p).isDirectory()) walk(p);
          else if (LOCAL_ONLY.includes(name)) {
            const mb = (statSync(p).size / 1e6).toFixed(0);
            rmSync(p);
            console.log(`  excluded local-only ${relative(outDir, p)} (${mb} MB)`);
          }
        }
      };
      walk(outDir);
      writeDataIndex(join(outDir, 'data'));
    },
  };
}

// data/index.json: which datasets the build has and each one's top-level files + sizes.
// The site reads it instead of probing optional files (which logged 404s on the live site).
function writeDataIndex(dataDir) {
  let ids = [];
  try { ids = readdirSync(dataDir).filter((n) => statSync(join(dataDir, n)).isDirectory()); } catch { return; }
  const index = { datasets: {} };
  for (const id of ids) {
    const files = {};
    for (const name of readdirSync(join(dataDir, id))) {
      const p = join(dataDir, id, name);
      if (statSync(p).isFile()) files[name] = statSync(p).size;
    }
    index.datasets[id] = { files };
  }
  writeFileSync(join(dataDir, 'index.json'), JSON.stringify(index));
  console.log(`  wrote data/index.json (${ids.length} datasets)`);
}

// Relative base so the build works on GitHub Pages (/repo-name/) and Netlify alike.
export default defineConfig({
  base: './',
  plugins: [excludeLocalOnly()],
});
