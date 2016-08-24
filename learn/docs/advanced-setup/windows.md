---
layout: sidebar
title: Setup Windows
---

 <a href="https://github.com/openfl/learn-openfl/edit/master/docs/advanced_setup/windows.md" class="btn btn-default pull-right" style="margin-top: 16px" role="button" target="_blank"><span class="glyphicon glyphicon-pencil"></span></a>

# Setup Windows

## Automatic Install

Open a command-prompt or terminal and run the following command:

    openfl setup windows

## Manual Install

In order to build Neko applications for Windows, no further dependencies are required. However, in order to build C++ applications for Windows, you must have a compatible version of Visual Studio C++ installed on your system.

Currently, OpenFL requires a version of Visual Studio capable of targeting Win32. For newer versions of Visual Studio, this requires the "Windows Desktop" version of the software.

We recommend Visual Studio C++ 2010 Express, but newer versions should also be compatible:

 * [http://go.microsoft.com/?linkid=9709949](http://go.microsoft.com/?linkid=9709949)

You can only target Windows from a Windows system right now. If you are interested in contributing to cross-desktop builds to Windows, please open a topic on the forums.

## Forums

If you encounter any problems when setting up OpenFL for targeting Windows, please visit the [forums](http://community.openfl.org/c/help).



{% sidebar %}* [Documentation](/learn/docs/)
   * [Choosing a Code Editor](/learn/docs/choosing-a-code-editor/)
   * [Command-Line Tools](/learn/docs/command-line-tools/)
      * [Basic Commands](/learn/docs/command-line-tools/basic-commands/)
      * [Create New Project](/learn/docs/command-line-tools/create-new-project/)
      * [Samples](/learn/docs/command-line-tools/samples/)
      * [Project Files](/learn/docs/command-line-tools/project-files/)
         * [XML Format](/learn/docs/command-line-tools/project-files/xml-format/)
         * [HXP Format](/learn/docs/command-line-tools/project-files/hxp-format/)
   * [Advanced Setup](/learn/docs/advanced-setup/)
      * [__Windows__](/learn/docs/advanced-setup/windows/)
      * [Linux](/learn/docs/advanced-setup/linux/)
      * [iOS](/learn/docs/advanced-setup/ios/)
      * [Android](/learn/docs/advanced-setup/android/)
      * [Flash](/learn/docs/advanced-setup/flash/)
      * [HTML5](/learn/docs/advanced-setup/html5/)
   * [Core Architecture](/learn/docs/core-architecture/)
   * [Feature Matrix](/learn/docs/feature-matrix/)
* [Guides](/learn/guides/)
* [Tutorials](/learn/tutorials/)
* [API](http://api.openfl.org/){% endsidebar %}