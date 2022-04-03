function get_version() {
    local version=$(npm show $1 --json | jq -r '.version')
    echo "Latest version for $1: $version" >&2
    echo "v$version"
}

function update_version() {
    local repo_name="brackets-$1"
    local arg_name="$(echo "$1" | tr '[:lower:]' '[:upper:]')_VERSION"
    
    local version=$(get_version $repo_name)
    
    sed -i -r "s/ARG $arg_name=.*/ARG $arg_name=$version/" Dockerfile
}

echo "Updating versions..."

update_version manager
update_version viewer
update_version model
