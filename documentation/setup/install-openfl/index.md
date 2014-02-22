---
layout: default
title: Install OpenFL
---

# Install OpenFL

## Automatic Install

With Haxe, Neko and Lime installed, the rest is simple:

    lime install openfl

Next, you can get started with an [empty project](/documentation/).

In order to build for certain platforms, you may need to have additional tools installed. For example, to build for Apple platfoms, you will need to install Xcode, or to build for Windows, we recommend you install Visual Studio C++ Express. You can find more information about each target [here](/documentation/setup/platforms).

## Manual Install

If there is a problem with the "lime install" command, you may also download and install OpenFL manually. First download each of the latest releases from lib.haxe.org:

 * [http://lib.haxe.org/p/openfl](http://lib.haxe.org/p/openfl)
 * [http://lib.haxe.org/p/openfl-native](http://lib.haxe.org/p/openfl-native)
 * [http://lib.haxe.org/p/openfl-html5-dom](http://lib.haxe.org/p/openfl-html5-dom)
 * [http://lib.haxe.org/p/openfl-samples](http://lib.haxe.org/p/openfl-samples)

You can then install manually:

    haxelib local openfl openfl.zip
    haxelib local openfl-native openfl-native.zip
    haxelib local openfl-html5-dom openfl-html5-dom.zip
    haxelib local openfl-samples openfl-samples.zip

## Development Builds

We recommend that you install the release version of OpenFL, at least the first time. If you are interested in contributing to OpenFL, here are the steps you need to use OpenFL from the source.

OpenFL comes in multiple pieces, the most notable ones are as follows:

 * [https://github.com/openfl/openfl](https://github.com/openfl/openfl)
 * [https://github.com/openfl/openfl-native](https://github.com/openfl/openfl-native)
 * [https://github.com/openfl/openfl-html5-dom](https://github.com/openfl/openfl-html5-dom)

The "openfl" project provides the code completion used against all targets. It also includes inline documentation, and the compile support for the Flash target. For all other targets, the classes within "openfl" are overridden with a platform-specific version.

The "openfl-native" project provides the implementation for native C++ and Neko targets. "openfl-html5-dom" is an example backend for support HTML5.

To use one of these libraries from the source, use:

    git clone https://github.com/openfl/<library name>
    haxelib dev <library name> <library name>

For example:

    git clone https://github.com/openfl/openfl-native
    haxelib dev openfl-native openfl-native

You can find a full list of libraries available by visiting:

[https://github.com/openfl](https://github.com/openfl)

## Forums

If you have problems installing OpenFL or using OpenFL from the source, visit [http://www.openfl.org/community/installing-openfl/](http://www.openfl.org/community/installing-openfl/) for help!
