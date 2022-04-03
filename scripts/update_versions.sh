function get_version() {
    local version=$(npm show $1 --json | jq -r '.version')
    echo "Latest version for $1: $version" >&2
    echo "v$version"
}

echo "Updating versions..."

cat <<EOT > VERSIONS
MANAGER=$(get_version brackets-manager)
VIEWER=$(get_version brackets-viewer)
MODEL=$(get_version brackets-model)
EOT
