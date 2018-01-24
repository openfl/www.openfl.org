#!/bin/sh
set -e
SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
SITE_PATH=$SCRIPT_PATH/../

cd $SITE_PATH
bundle install

#npm install openfl
mkdir -p node_modules
cd node_modules
git clone --depth=1 https://github.com/openfl/openfl
cd openfl
git pull
npm install -s