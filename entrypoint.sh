#!/bin/sh

# Copy the generated TypeDoc documentations
mkdir -p ./docs/reference
cp -r /user-guide/calls.md ./docs/user-guide/
cp -r /reference/* ./docs/reference/

# Run mkdocs with the given args
mkdocs $@