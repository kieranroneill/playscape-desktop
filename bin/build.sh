#!/usr/bin/env bash

# Build the main.
rm -rf dist/main dist/common dist/assets
mkdir -p dist/assets && cp -r src/assets/. dist/assets
tsc --project tsconfig.main.json

## Build the renderer.
node -r babel-register node_modules/.bin/webpack --config webpack/webpack.config.js --progress
