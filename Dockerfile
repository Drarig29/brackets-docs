FROM node:14 AS build-reference

WORKDIR /reference
RUN git clone --depth=1 https://github.com/Drarig29/brackets-manager.js /reference/manager
RUN git clone --depth=1 https://github.com/Drarig29/brackets-viewer.js /reference/viewer
RUN git clone --depth=1 https://github.com/Drarig29/brackets-model /reference/model

WORKDIR /reference/manager
RUN npm install
RUN npm install typedoc typedoc-plugin-extras typedoc-plugin-missing-exports
RUN npx typedoc --readme none \
  --customTitle 'Go back' --customTitleLink '/brackets-docs/' \
  --favicon 'https://drarig29.github.io/brackets-docs/assets/images/favicon.png' \
  src/index.ts

WORKDIR /reference/viewer
RUN npm install
RUN npm install typedoc typedoc-plugin-extras typedoc-plugin-missing-exports
RUN npx typedoc --readme none \
  --customTitle 'Go back' --customTitleLink '/brackets-docs/' \
  --favicon 'https://drarig29.github.io/brackets-docs/assets/images/favicon.png' \
  --excludePrivate --excludeExternals --sort source-order \
  src/main.ts

WORKDIR /reference/model
RUN npm install
RUN npm install typedoc typedoc-plugin-extras typedoc-plugin-missing-exports
RUN npx typedoc --readme none \
  --customTitle 'Go back' --customTitleLink '/brackets-docs/' \
  --favicon 'https://drarig29.github.io/brackets-docs/assets/images/favicon.png' \
  src/index.ts

FROM squidfunk/mkdocs-material

WORKDIR /docs
COPY --from=build-reference /reference/manager/docs /reference/manager/
COPY --from=build-reference /reference/viewer/docs /reference/viewer/
COPY --from=build-reference /reference/model/docs /reference/model/

COPY entrypoint.sh /
RUN chmod +x /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
CMD [ "serve", "--dev-addr=0.0.0.0:8000" ]