#!/bin/sh
SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
SITE_PATH=$SCRIPT_PATH/../

cd $SITE_PATH/_openfl
npm run build-docs -s
rm -rf ../learn/npm/api
mkdir -p ../learn/npm/api
cp -r docs/* ../learn/npm/api

#cd ../learn/npm/api
#find . -name "*.html" -exec bash -c 'mv "$1" "${1%.html}".md' - '{}' \;

cd $SITE_PATH
bundle exec jekyll build