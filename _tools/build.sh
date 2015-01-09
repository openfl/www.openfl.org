#!/bin/sh

# Build the import documentation tool

cd import-documentation
haxe build.hxml

cd ../../

# Rebuild documentation

rm -r -f documentation
mkdir documentation

neko _tools/import-documentation/import.n ../openfl-documentation documentation

# Rebuild site

LC_ALL="en_US.UTF-8" jekyll build
