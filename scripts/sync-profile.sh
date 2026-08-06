#!/usr/bin/env bash
# Copy profile README (source of truth) into the sibling GitHub special repo.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/profile/README.md"
DEST="${PROFILE_README_PATH:-$ROOT/../XlSerena/README.md}"

if [[ ! -f "$SRC" ]]; then
  echo "Missing source: $SRC" >&2
  exit 1
fi

if [[ ! -d "$(dirname "$DEST")" ]]; then
  echo "Missing destination repo dir: $(dirname "$DEST")" >&2
  echo "Clone XlSerena next to this repo, or set PROFILE_README_PATH." >&2
  exit 1
fi

cp "$SRC" "$DEST"
echo "Synced profile README → $DEST"
echo "Next: cd \"$(dirname "$DEST")\" && git add README.md && git commit && git push"
