SHELL:=/bin/bash

CCX=DOCKER_BUILDKIT=1 docker build

MANAGER=$(shell source VERSIONS; echo $$MANAGER)
VIEWER=$(shell source VERSIONS; echo $$VIEWER)
MODEL=$(shell source VERSIONS; echo $$MODEL)

ARGS=--build-arg MANAGER_VERSION=${MANAGER} \
     --build-arg VIEWER_VERSION=${VIEWER} \
     --build-arg MODEL_VERSION=${MODEL}

all:
	${CCX} . ${ARGS} -t build-docs:latest

update:
	./scripts/update_versions.sh
