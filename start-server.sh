#!/bin/bash

PORT=${1:-8000}
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "Starting web server at http://localhost:$PORT"
echo "Press Ctrl+C to stop."

cd "$DIR"
python3 -m http.server "$PORT"
