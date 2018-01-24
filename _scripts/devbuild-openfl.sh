#!/bin/sh
set -e
SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
SITE_PATH=$SCRIPT_PATH/../

cd $SITE_PATH/node_modules/openfl
npm run build-lib -s
npm run build-dist:dev -s
cp -f dist/openfl.js $SITE_PATH/_site/js/openfl.min.js
cp -f dist/openfl.js $SITE_PATH/js/openfl.min.js