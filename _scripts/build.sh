#!/bin/sh
SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
SITE_PATH=$SCRIPT_PATH/../

cd $SITE_PATH/_openfl
npm run build -s
rm -rf ../learn/npm/api
mkdir -p ../learn/npm/api
cp -rf docs/* ../learn/npm/api
cp -f dist/openfl.min.js ../js/

#cd ../learn/npm/api
#find . -name "*.html" -exec bash -c 'mv "$1" "${1%.html}".md' - '{}' \;

cd $SITE_PATH
bundle exec jekyll build