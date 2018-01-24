#!/bin/sh
set -e
SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
SITE_PATH=$SCRIPT_PATH/../

cd $SITE_PATH/node_modules/openfl
npm run build -s
rm -rf $SITE_PATH/learn/npm/api
mkdir -p $SITE_PATH/learn/npm/api
cp -rf docs/* $SITE_PATH/learn/npm/api
cp -f dist/openfl.min.js $SITE_PATH/js/

#cd ../learn/npm/api
#find . -name "*.html" -exec bash -c 'mv "$1" "${1%.html}".md' - '{}' \;

cd $SITE_PATH
bundle exec jekyll build