#!/usr/bin/env bash
# Start the open-slide dev server and open the AI 101 deck in the browser.
#
# Usage: ./run.sh [port]      (default: first free port from 5173 upward)
#        ./run.sh --present   (open straight to the presenter view)
set -euo pipefail

cd "$(dirname "$0")"

SLIDE_ID="ai-101"
PAGE_PATH="/s/${SLIDE_ID}"
PORT=""

for arg in "$@"; do
  case "$arg" in
    --present) PAGE_PATH="/s/${SLIDE_ID}/presenter" ;;
    ''|*[!0-9]*) echo "Unknown argument: $arg" >&2; exit 1 ;;
    *) PORT="$arg" ;;
  esac
done

if ! command -v node >/dev/null 2>&1; then
  echo "node is required but was not found on PATH." >&2
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "Installing dependencies..."
  npm install
fi

# Pick a free port so the URL we open is the one the server actually uses.
if [ -z "$PORT" ]; then
  PORT="$(node -e '
    const net = require("net");
    const try_ = (p) => {
      const s = net.createServer();
      s.once("error", () => try_(p + 1));
      s.once("listening", () => s.close(() => console.log(p)));
      s.listen(p);
    };
    try_(5173);
  ')"
fi

URL="http://localhost:${PORT}${PAGE_PATH}"
LOG="$(mktemp -t open-slide-dev)"

echo "Starting open-slide on port ${PORT}..."
npx open-slide dev --port "$PORT" --no-skills-check >"$LOG" 2>&1 &
SERVER_PID=$!

cleanup() {
  kill "$SERVER_PID" 2>/dev/null || true
  wait "$SERVER_PID" 2>/dev/null || true
  rm -f "$LOG"
}
trap cleanup EXIT INT TERM

# Wait for the server to answer (up to ~60s), bailing out if it died.
for _ in $(seq 1 120); do
  if ! kill -0 "$SERVER_PID" 2>/dev/null; then
    echo "The dev server exited early. Log:" >&2
    cat "$LOG" >&2
    exit 1
  fi
  if curl -fsS -o /dev/null "http://localhost:${PORT}/" 2>/dev/null; then
    break
  fi
  sleep 0.5
done

if ! curl -fsS -o /dev/null "http://localhost:${PORT}/" 2>/dev/null; then
  echo "Timed out waiting for the dev server. Log:" >&2
  cat "$LOG" >&2
  exit 1
fi

echo "Opening ${URL}"
case "$(uname -s)" in
  Darwin) open "$URL" ;;
  Linux)  xdg-open "$URL" >/dev/null 2>&1 || echo "Open ${URL} in your browser." ;;
  *)      echo "Open ${URL} in your browser." ;;
esac

echo "Press Ctrl+C to stop the server."
wait "$SERVER_PID"
