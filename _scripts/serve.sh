#!/bin/sh
set -e
SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
SITE_PATH=$SCRIPT_PATH/../

cd $SCRIPT_PATH
./build.sh

cd $SITE_PATH
bundle exec jekyll serve --skip-initial-build
