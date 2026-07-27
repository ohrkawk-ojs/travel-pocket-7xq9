#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP="${TMPDIR:-/tmp}/travel-pocket-pages"
cd "$ROOT"
npm run build
rm -rf "$TMP"
mkdir -p "$TMP"
cp -a dist/. "$TMP/"
cd "$TMP"
git init -b gh-pages
git config user.email "hermes@local"
git config user.name "Hermes Agent"
touch .nojekyll
git add .
git commit -m "Deploy travel pocket static site"
git remote add origin git@github.com:ohrkawk-ojs/travel-pocket-7xq9.git
git config core.sshCommand 'ssh -i /opt/data/.ssh/id_ed25519_travel_pocket -o IdentitiesOnly=yes'
git push -f origin gh-pages
