#!/bin/sh

# Build the import documentation tool

cd import-documentation
haxe build.hxml

cd ../../

# Rebuild documentation

rm -r -f learn/docs
rm -r -f learn/guides
rm -r -f learn/tutorials
#mkdir learn

neko _tools/import-documentation/import.n ../learn-openfl learn

# Rebuild site

LC_ALL="en_US.UTF-8" jekyll build
