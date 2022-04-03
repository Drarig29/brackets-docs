ARG MANAGER_VERSION
ARG VIEWER_VERSION
ARG MODEL_VERSION

# Manager related

FROM node:14 AS clone-manager
ARG MANAGER_VERSION
RUN git clone --depth=1 --single-branch --branch $MANAGER_VERSION \
  https://github.com/Drarig29/brackets-manager.js /reference/manager
WORKDIR /reference/manager
RUN npm install

FROM clone-manager AS build-manager-storage-calls
RUN npm install -g brackets-storage-calls
RUN brackets-storage-calls > calls.md

FROM clone-manager AS build-manager-reference
RUN npm install typedoc typedoc-plugin-extras typedoc-plugin-missing-exports
RUN npx typedoc --readme none --includeVersion \
  --customTitle 'Go back' --customTitleLink '/brackets-docs/' \
  --favicon 'https://drarig29.github.io/brackets-docs/assets/images/favicon.png' \
  src/index.ts


# Viewer related

FROM node:14 AS build-viewer-reference
ARG VIEWER_VERSION
RUN git clone --depth=1 --single-branch --branch $VIEWER_VERSION \
  https://github.com/Drarig29/brackets-viewer.js /reference/viewer
WORKDIR /reference/viewer
RUN npm install
RUN npm install typedoc typedoc-plugin-extras typedoc-plugin-missing-exports
RUN npx typedoc --readme none --includeVersion \
  --customTitle 'Go back' --customTitleLink '/brackets-docs/' \
  --favicon 'https://drarig29.github.io/brackets-docs/assets/images/favicon.png' \
  --excludePrivate --excludeExternals --sort source-order \
  src/main.ts


# Model related

FROM node:14 AS build-model-reference
ARG MODEL_VERSION
RUN git clone --depth=1 --single-branch --branch $MODEL_VERSION \
  https://github.com/Drarig29/brackets-model /reference/model
WORKDIR /reference/model
RUN npm install
RUN npm install typedoc typedoc-plugin-extras typedoc-plugin-missing-exports
RUN npx typedoc --readme none --includeVersion \
  --customTitle 'Go back' --customTitleLink '/brackets-docs/' \
  --favicon 'https://drarig29.github.io/brackets-docs/assets/images/favicon.png' \
  src/index.ts


# Build docs together

FROM squidfunk/mkdocs-material:8.1.3

WORKDIR /docs
COPY --from=build-manager-storage-calls /reference/manager/calls.md /user-guide/
COPY --from=build-manager-reference /reference/manager/docs /reference/manager/
COPY --from=build-viewer-reference /reference/viewer/docs /reference/viewer/
COPY --from=build-model-reference /reference/model/docs /reference/model/

COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
CMD [ "serve", "--dev-addr=0.0.0.0:8000" ]
