# brackets-docs

This repository contains the documentation for all `brackets-*` related projects.

It is built with [MkDocs](https://www.mkdocs.org/) and the ["Material for MkDocs"](https://squidfunk.github.io/mkdocs-material/) theme.

It also contains type references for [brackets-manager.js](https://github.com/Drarig29/brackets-manager.js) and [brackets-viewer.js](https://github.com/Drarig29/brackets-viewer.js), built with [TypeDoc](http://typedoc.org/).

## Writing

To run a local version of the documentation, you can use Docker:

```bash
make && docker run --rm -it -p 8000:8000 \
  -v `pwd`/mkdocs.yml:/docs/mkdocs.yml \
  -v `pwd`/docs:/docs/docs \
  build-docs:latest
```
