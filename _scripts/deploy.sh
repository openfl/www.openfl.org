#!/bin/sh
SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
SITE_PATH=$SCRIPT_PATH/../

cd $SITE_PATH
aws s3 sync _site s3://www.openfl.org --acl bucket-owner-full-control --acl public-read --size-only --cache-control max-age=604800 --delete
