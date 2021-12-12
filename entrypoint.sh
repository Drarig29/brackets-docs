#!/bin/sh
mkdir -p ./docs/reference
cp -r /reference/manager ./docs/reference/
cp -r /reference/viewer ./docs/reference/

mkdocs $@