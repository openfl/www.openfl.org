#!/bin/sh
set -e
SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
SITE_PATH=$SCRIPT_PATH/../

cd $SITE_PATH
bundle install
npm install -s