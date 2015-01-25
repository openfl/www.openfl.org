---
layout: default
title: Download
permalink: download/
---

# Download

## Haxe

First, you will need to install Haxe and Neko. OpenFL uses Haxe to power the build process, and Neko to run the command-line tools. Both are included in the following installers, one for each platform:

 * [Windows](http://haxe.org/file/haxe-3.1.3-win.exe)
 * [Mac](http://haxe.org/file/haxe-3.1.3-osx-installer.pkg)
 * [Linux](http://www.openfl.org/builds/haxe/haxe-3.1.3-linux-installer.tar.gz)

_If you are a Linux user, we recommend that you do use the above install script instead of your own package manager. The versions of Haxe and Neko distributed on Linux package repositories tend to be old, or experience other issues after the install._

## OpenFL

With the latest versions of Haxe and Neko installed, open a command-prompt (Windows) or terminal (Mac/Linux) and run these commands:

    haxelib install openfl
    haxelib run openfl setup

To confirm that OpenFL is installed and working properly, try running the "openfl" command:

    openfl

## Choosing a Code Editor

Once OpenFL has been installed, it is helpful to choose an integrated development environment (IDE) with good support for Haxe and OpenFL development.

Although you can write code using even a simple text editor, a quality IDE can provide code completion (code hints), shortcuts to build and test your projects, and other tools to give you a great coding experience.

### FlashDevelop

[FlashDevelop](http://www.flashdevelop.org) is one of the strongest IDEs for Haxe and OpenFL development. If you are a Windows user (and perhaps if you are not), we recommend that you try FlashDevelop first to get a feel for what an integrated environment looks like. Many developers prefer FlashDevelop.

OpenFL includes FlashDevelop project files when you use the "openfl create" command for convenience. FlashDevelop is free and open-source.

### Sublime Text

[Sublime Text](http://www.sublimetext.com) is a code editor, with support for Haxe and OpenFL using the [Haxe Sublime Bundle](https://github.com/clemos/haxe-sublime-bundle). Sublime Text is cross-platform, with support for Windows, Mac and Linux.

Unlike FlashDevelop, Sublime Text does not provide accurate code completion, nor does it support "projects" in the traditional IDE sense. However, Sublime Text is much stronger than a simple text editor, and is a good recommendation for Mac and Linux users.

Sublime Text is free-to-use, with reminders to pay for continued use.

### IntelliJ IDEA

[IntelliJ IDEA](https://www.jetbrains.com/idea/) is primarily marketed as a Java IDE, but it has growing support within the Haxe community, including large teams, such as TiVo. The full edition, as well as the free community edition, support the [Haxe plugin](https://plugins.jetbrains.com/plugin/6873?pr=idea), which is not easy to install, but can provide a fuller native IDE experience for Mac or Linux users.

### Other Choices

There are other code editors to choose from, include vim and up-and-coming Haxe-based editors. You can read more at [http://haxe.org/documentation/introduction/editors-and-ides.html](http://haxe.org/documentation/introduction/editors-and-ides.html)