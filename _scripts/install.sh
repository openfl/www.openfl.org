#!/bin/sh
SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
SITE_PATH=$SCRIPT_PATH/../

cd $SITE_PATH
bundle install

git clone --depth=1 https://github.com/openfl/openfl _openfl
cd $SITE_PATH/_openfl
git pull
npm install -s