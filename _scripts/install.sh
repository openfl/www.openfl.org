#!/bin/sh
set -e
SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
SITE_PATH=$SCRIPT_PATH/../

cd $SITE_PATH
bundle install

#npm install openfl
git clone --depth=1 -b master https://github.com/openfl/openfl _openfl
cd _openfl
git pull
npm install -s