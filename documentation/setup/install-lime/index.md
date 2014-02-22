---
layout: default
title: Install Lime
---

# Install Lime

## Automatic Install

With Haxe and Neko already installed, it is simple to install Lime:

    haxelib install lime
    haxelib run lime setup

OpenFL relies upon Lime for native platform support, as well as command-line tools. Once it is installed, continue on to [install OpenFL](/documentation/setup/install-openfl) -- you are almost done!

## Manual Install

If there is a problem using "setup", you may also download and install Lime manually. First download each of the latest releases from lib.haxe.org:

 * [http://lib.haxe.org/p/lime](http://lib.haxe.org/p/lime)
 * [http://lib.haxe.org/p/lime-tools](http://lib.haxe.org/p/lime-tools)
 * [http://lib.haxe.org/p/hxlibc](http://lib.haxe.org/p/hxlibc)

Once they are downloaded, use `haxelib` to install:

    haxelib local lime lime.zip
    haxelib local lime-tools lime-tools.zip
    haxelib local hxlibc hxlibc.zip

Run `haxelib run lime setup` to install the "lime" command shortcut. This will enable you run "lime" rather than "haxelib run lime" in the future.

Since you have installed the dependencies for Lime already, the "setup" command should go directly to installing the shortcut.

## Development Builds

If you are just getting started, we recommend that you stick with Lime release builds, but if you would like to contribute to Lime, here are the steps to using Lime from GitHub, and rebuilding the binaries manually.

You do not need to use development versions of every library, for example, you may choose to contribute to "lime", but to keep a release version of "lime-tools" installed.

### lime

To use a development version of "lime", install or use Git in order to clone the repository.

In order to build Lime from the source, you will also need a repository called "lime-build". This includes the static binaries and headers needed to rebuild the native code.

    git clone https://github.com/openfl/lime
    git clone https://github.com/openfl/lime-build
    haxelib dev lime lime
    haxelib dev lime-build lime-build

You can also use the `haxelib git` command, if you prefer, it allows haxelib to pull the repository using `haxelib upgrade` command, but may otherwise make it more difficult to use:

    haxelib git lime https://github.com/openfl/lime
    haxelib git lime-build https://github.com/openfl/lime-build

Lime includes a "rebuild" command to that is able to rebuild the native binaries for each platform. You can specify one target, or multiple targets separated by commas:

    lime rebuild windows

The "rebuild" supports additional flags, such as "-32", "-64" or "-clean" if you wish to perform a clean build or target only a certain architecture.

### lime-tools

To use a development version of "lime-tools", make sure that you have "format" and "svg" installed:

    haxelib install format
    haxelib install svg

Then you can clone the "lime-tools" repository, and set the haxelib dev directory:

    git clone https://github.com/openfl/lime-tools
    haxelib dev lime-tools lime-tools

Before rebuilding the Lime command-line tools, make sure that you have Lime installed, and that the binary for your desktop platform is valid and up-to-date. If you are using Lime as a release version, you should be fine already. Otherwise, make sure that you run "lime rebuild" for your desktop first.

Here is how you can rebuild "lime-tools":

    lime rebuild tools

You may also choose to combine this with another command:

    lime rebuild linux,tools

If you are using development versions of Lime and the Lime tools, you can also use a "-rebuild" flag when you test any other project. It will rebuild the binary specific that target and configuration (such as release, 64-bit) as well as the tools:

    lime test linux -rebuild

Additional flags, such as "-clean" or defines, will also pass into the rebuild process.

## Forums

If you encounter any problems while installing Lime, or need help in using a development version of Lime from the source, please visit the [forums](http://www.openfl.org/community/installing-openfl/)!
