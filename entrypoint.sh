#!/bin/sh

# Configure git to trust the mounted workspace and set default identity
git config --global --add safe.directory /github/workspace

# Only do this in GitHub Actions
if [ -d /github/workspace ]; then
    cd /github/workspace
fi

# Copy the generated TypeDoc documentations
mkdir -p ./docs/reference
cp -r /user-guide/calls.md ./docs/user-guide/
cp -r /reference/* ./docs/reference/

# Run mkdocs with the given args
mkdocs $@