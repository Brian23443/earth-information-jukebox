import { defineConfig } from 'vite';
import { readdirSync, rmSync, statSync } from 'node:fs';
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
    },
  };
}

// Relative base so the build works on GitHub Pages (/repo-name/) and Netlify alike.
export default defineConfig({
  base: './',
  plugins: [excludeLocalOnly()],
});
