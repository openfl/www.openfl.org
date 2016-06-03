---
layout: default
title: Download
permalink: download/
redirect_from:
 - documentation/getting-started/installing-openfl/
 - documentation/setup/
 - documentation/setup/install-haxe/
 - documentation/setup/platforms/
---

# Download

## Haxe

First, you will need to install Haxe and Neko. OpenFL uses Haxe to power the build process, and Neko to run the command-line tools. Both are included in the following installers, one for each platform:

 * [Windows](http://haxe.org/website-content/downloads/3.2.1/downloads/haxe-3.2.1-win.exe)
 * [Mac](http://haxe.org/website-content/downloads/3.2.1/downloads/haxe-3.2.1-osx-installer.pkg)
 * [Linux](http://www.openfl.org/builds/haxe/haxe-3.2.1-linux-installer.tar.gz)

_If you are a Linux user, we recommend that you do use the above install script instead of your own package manager. The versions of Haxe and Neko distributed on Linux package repositories tend to be old, or experience other issues after the install._

## OpenFL

With the latest versions of Haxe and Neko installed, open a command-prompt (Windows) or terminal (Mac/Linux) and run these commands:

    haxelib install openfl
    haxelib run openfl setup

To confirm that OpenFL is installed and working properly, try running the "openfl" command:

    openfl

If you are upgrading, you can find more information about changes <a href="https://github.com/openfl/lime/blob/master/CHANGELOG.md" target="_blank">here</a> and <a href="https://github.com/openfl/openfl/blob/master/CHANGELOG.md" target="_blank">here</a>.

## Next Steps

Now that OpenFL is installed, you can [choose a code editor](/learn/resources/choosing-a-code-editor/) or [pick a tutorial](/learn/) and get started!
