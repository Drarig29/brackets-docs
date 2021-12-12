FROM node:14 AS build-reference

WORKDIR /reference
RUN git clone --depth=1 https://github.com/Drarig29/brackets-manager.js /reference/manager
RUN git clone --depth=1 https://github.com/Drarig29/brackets-viewer.js /reference/viewer

WORKDIR /reference/manager
RUN npm install
RUN npm install typedoc typedoc-plugin-missing-exports
RUN npx typedoc --readme none src/index.ts

WORKDIR /reference/viewer
RUN npm install
RUN npm install typedoc typedoc-plugin-missing-exports
RUN npx typedoc --readme none --excludePrivate --excludeExternals --sort source-order src/main.ts

FROM squidfunk/mkdocs-material

WORKDIR /docs
COPY --from=build-reference /reference/manager/docs /docs/reference/manager/
COPY --from=build-reference /reference/viewer/docs /docs/reference/viewer/