#!/bin/sh

# Copy the generated TypeDoc documentations
mkdir -p ./docs/reference
cp -r /reference/manager ./docs/reference/
cp -r /reference/viewer ./docs/reference/

# Run mkdocs with the given args
mkdocs $@