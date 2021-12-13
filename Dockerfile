FROM node:14 AS build-manager-reference
RUN git clone --depth=1 https://github.com/Drarig29/brackets-manager.js /reference/manager
WORKDIR /reference/manager
RUN npm install
RUN npm install typedoc typedoc-plugin-extras typedoc-plugin-missing-exports
RUN npx typedoc --readme none \
  --customTitle 'Go back' --customTitleLink '/brackets-docs/' \
  --favicon 'https://drarig29.github.io/brackets-docs/assets/images/favicon.png' \
  src/index.ts

FROM node:14 AS build-viewer-reference
RUN git clone --depth=1 https://github.com/Drarig29/brackets-viewer.js /reference/viewer
WORKDIR /reference/viewer
RUN npm install
RUN npm install typedoc typedoc-plugin-extras typedoc-plugin-missing-exports
RUN npx typedoc --readme none \
  --customTitle 'Go back' --customTitleLink '/brackets-docs/' \
  --favicon 'https://drarig29.github.io/brackets-docs/assets/images/favicon.png' \
  --excludePrivate --excludeExternals --sort source-order \
  src/main.ts

FROM node:14 AS build-model-reference
RUN git clone --depth=1 https://github.com/Drarig29/brackets-model /reference/model
WORKDIR /reference/model
RUN npm install
RUN npm install typedoc typedoc-plugin-extras typedoc-plugin-missing-exports
RUN npx typedoc --readme none \
  --customTitle 'Go back' --customTitleLink '/brackets-docs/' \
  --favicon 'https://drarig29.github.io/brackets-docs/assets/images/favicon.png' \
  src/index.ts

FROM squidfunk/mkdocs-material

WORKDIR /docs
COPY --from=build-manager-reference /reference/manager/docs /reference/manager/
COPY --from=build-viewer-reference /reference/viewer/docs /reference/viewer/
COPY --from=build-model-reference /reference/model/docs /reference/model/

COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
CMD [ "serve", "--dev-addr=0.0.0.0:8000" ]