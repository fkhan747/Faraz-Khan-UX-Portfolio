#!/bin/bash
# One-command deploy to GitHub Pages.
# Builds the site locally and pushes the static output to the gh-pages branch.
# No CI build minutes, no credit limits, run this only when you want to ship.
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
FRONTEND="$ROOT/frontend"

export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh" && nvm use 20.20.2 >/dev/null 2>&1

echo "==> Building..."
cd "$FRONTEND"
npm run build

echo "==> Assembling gh-pages payload..."
rm -rf /tmp/ghp && cp -R build /tmp/ghp
echo "www.khanfaraz.in" > /tmp/ghp/CNAME          # custom domain
cp /tmp/ghp/index.html /tmp/ghp/404.html           # SPA fallback for non-prerendered routes
touch /tmp/ghp/.nojekyll                            # disable Jekyll

REMOTE="$(git -C "$ROOT" remote get-url origin)"
SHA="$(git -C "$ROOT" rev-parse --short HEAD)"

echo "==> Pushing gh-pages ($SHA)..."
cd /tmp/ghp
git init -q
git checkout -q -b gh-pages
git add -A
git commit -q -m "deploy $SHA"
git remote add origin "$REMOTE"
git push -f origin gh-pages

echo "==> Done. Live at https://www.khanfaraz.in (once DNS + Pages are set)."
