ARG MANAGER_VERSION=v1.6.4
ARG VIEWER_VERSION=v1.7.0
ARG MODEL_VERSION=v1.5.0

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
RUN npm install typedoc@0.25.0 typedoc-plugin-extras@3.0.0 typedoc-plugin-missing-exports@2.3.0
RUN npx typedoc --plugin typedoc-plugin-extras --readme none --includeVersion \
  --customTitle 'Go back' --titleLink '/brackets-docs/' --footerLastModified \
  --favicon 'https://drarig29.github.io/brackets-docs/assets/images/favicon.png' \
  src/index.ts


# Viewer related

FROM node:14 AS build-viewer-reference
ARG VIEWER_VERSION
RUN git clone --depth=1 --single-branch --branch $VIEWER_VERSION \
  https://github.com/Drarig29/brackets-viewer.js /reference/viewer
WORKDIR /reference/viewer
RUN npm install
RUN npm install typedoc@0.25.0 typedoc-plugin-extras@3.0.0 typedoc-plugin-missing-exports@2.3.0
RUN npx typedoc --plugin typedoc-plugin-extras --readme none --includeVersion \
  --customTitle 'Go back' --titleLink '/brackets-docs/' --footerLastModified \
  --favicon 'https://drarig29.github.io/brackets-docs/assets/images/favicon.png' \
  --excludePrivate --excludeExternals --sort source-order \
  src/index.ts


# Model related

FROM node:14 AS build-model-reference
ARG MODEL_VERSION
RUN git clone --depth=1 --single-branch --branch $MODEL_VERSION \
  https://github.com/Drarig29/brackets-model /reference/model
WORKDIR /reference/model
RUN npm install
RUN npm install typedoc@0.25.0 typedoc-plugin-extras@3.0.0 typedoc-plugin-missing-exports@2.3.0
RUN npx typedoc --plugin typedoc-plugin-extras --readme none --includeVersion \
  --customTitle 'Go back' --titleLink '/brackets-docs/' --footerLastModified \
  --favicon 'https://drarig29.github.io/brackets-docs/assets/images/favicon.png' \
  src/index.ts


# Build docs together

FROM squidfunk/mkdocs-material:9.6.18

WORKDIR /github/workspace
COPY --from=build-manager-storage-calls /reference/manager/calls.md /user-guide/
COPY --from=build-manager-reference /reference/manager/docs /reference/manager/
COPY --from=build-viewer-reference /reference/viewer/docs /reference/viewer/
COPY --from=build-model-reference /reference/model/docs /reference/model/

COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
CMD [ "serve", "--dev-addr=0.0.0.0:8000" ]
