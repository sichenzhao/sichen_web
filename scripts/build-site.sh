#!/usr/bin/env sh
set -eu

moon build --target js
cp _build/js/debug/build/src/main/main.js public/main.js
cp _build/js/debug/build/src/main/main.js.map public/main.js.map
