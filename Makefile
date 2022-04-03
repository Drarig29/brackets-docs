all:
	DOCKER_BUILDKIT=1 docker build . -t build-docs:latest

update:
	./scripts/update_versions.sh
