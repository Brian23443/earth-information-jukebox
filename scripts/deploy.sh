#!/usr/bin/env bash
# Build the site and publish it to the gh-pages branch (GitHub Pages serves that branch).
#
#   scripts/deploy.sh
#
# The pipeline output in web/public/data/ must exist locally (it is not in git).
# The build leaves out local-only files (web6840.mp4) automatically; see web/vite.config.js.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
REMOTE="$(git -C "$ROOT" remote get-url origin)"
SHA="$(git -C "$ROOT" rev-parse --short HEAD)"

cd "$ROOT/web"
npm run build

SIZE_MB=$(du -sm dist | cut -f1)
echo "build: ${SIZE_MB} MB"
if [ "$SIZE_MB" -gt 1000 ]; then
  echo "build is over GitHub Pages' 1 GB limit; aborting" >&2
  exit 1
fi
# Any single file over 100 MiB is rejected by GitHub.
if find dist -type f -size +100M | grep -q .; then
  echo "files over 100 MiB:" >&2
  find dist -type f -size +100M >&2
  exit 1
fi

# Publish dist/ as a fresh single-commit gh-pages branch (no history to bloat the repo).
cd dist
touch .nojekyll   # serve files as-is, skip Jekyll processing
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name="$(git -C "$ROOT" config user.name)" -c user.email="$(git -C "$ROOT" config user.email)" \
  commit -q -m "Deploy site from ${SHA}"
git push -f "$REMOTE" gh-pages
rm -rf .git
echo "pushed gh-pages (${SIZE_MB} MB) from ${SHA}"
