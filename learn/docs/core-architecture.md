---
layout: sidebar
title: Core Architecture
---

 <a href="https://github.com/openfl/learn-openfl/edit/master/docs/core_architecture.md" class="btn btn-default pull-right" style="margin-top: 16px" role="button" target="_blank"><span class="glyphicon glyphicon-pencil"></span></a>

# Core Architecture

## Command-Line Tools

 * [Source](https://github.com/openfl/lime/tree/master/tools)

Building an OpenFL application relies upon the Lime command-line tools. Whether you are using an "openfl" command, a "lime" command, or are using an editor with OpenFL support built-in, these tools provide the backbone for delivering projects to each target platform.

As needed, the tools will copy asset files, process template files, trigger compilers, package applications and deliver to a connected device or run on your local machine. There are many other features in the tools, but these are the basics that drive the creation of OpenFL projects.

## Haxe

 * [Website](http://www.haxe.org)
 * [Source](https://github.com/haxefoundation/haxe)

OpenFL developers write code in Haxe, a powerful language that can compile to _other_ programming languages. This unique (and proven) ability is the cornerstone to OpenFL's cross-platform nature.

Based on your project, the arguments used and the target platform, the command-line tools use Haxe to compile Haxe source files into SWF bytecode, Neko bytecode, C++ or JavaScript.

## HXCPP (C++ Targets Only)

 * [Source](https://github.com/haxefoundation/hxcpp)

After generating C++ source, Haxe calls the HXCPP library, which includes a standard C++ library to enable unique Haxe features, and calls the target compiler toolchain.

By default, HXCPP uses g++ to build Linux executables, Visual Studio C++ for Windows, Xcode for Mac OS and iOS, or the standard native toolchain for other platforms, such as Android and BlackBerry.

## Lime

 * [Source](https://github.com/openfl/lime)

Lime is a foundational library, providing a single API for managing windows, receiving system events, accessing the rendering context and playing audio, as well as other system APIs.

When targeting a runtime such as HTML5 or Flash Player, Lime is a Haxe-based library that unifies these environments under a single Lime API. When building a native application instead, Lime uses a hand-written C++ library that exposes native windowing, rendering and other low-level features necessary to support the Lime API.

Native dependencies include SDL2, Freetype, Harfbuzz, libogg, libvorbis, libjpeg, libpng, zlib and OpenAL. These are all included. The Lime binary is linked dynamically by default, but can be linked statically. OpenAL is excluded in static builds, due to its license.

In addition to the standard Lime C++ library, there is a Lime "legacy" binary which is not compatible with the new Lime API, but is used by OpenFL under the "v2" code path.

## OpenFL

 * [Source](https://github.com/openfl/openfl)

OpenFL is a Haxe library, designed to work over Lime. System events, windowing and other features are mapped to Flash-style APIs for convenience. OpenFL has renderer designed for use with HTML5 DOM, HTML5 Canvas or OpenGL targets (WebGL, OpenGL, OpenGL ES).

Previously, OpenFL had separate distinct implementations for Flash, HTML5 and native platform targets. Now, OpenFL is unifying as one single library. Flash and HTML5 have already made the transition, but native support is not fully mature yet. In the meantime, the pre-existing native backend has been configured to work as an OpenFL "v2" code path. This helps preserve stability while the OpenFL "next" path continues to develop.

When using the native "v2" path, the new Lime API is not available. Also, Lime "legacy" binaries are used instead of standard Lime binaries. When OpenFL 3 is ready to be released, the native "v2" path will be deprecated.

The HTML5 target use the canvas render mode by default. This blits to a single canvas every frame. The DOM rendering mode will use a separate image, div or canvas elements, depending on how your project is designed. It also supports Video, DOMSprite and OpenGLView elements. Using `bitmapData.draw`, it is possible to selectively merge multiple elements into a single canvas, similar to the canvas mode. Use `-Ddom` when building to use DOM mode.

The `-Dwebgl` define will enable (beta) WebGL support, this is the same renderer used in native targets for `-Dnext`, and will continue to mature over time.


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
      * [Windows](/learn/docs/advanced-setup/windows/)
      * [Linux](/learn/docs/advanced-setup/linux/)
      * [iOS](/learn/docs/advanced-setup/ios/)
      * [Android](/learn/docs/advanced-setup/android/)
      * [Flash](/learn/docs/advanced-setup/flash/)
      * [HTML5](/learn/docs/advanced-setup/html5/)
   * [__Core Architecture__](/learn/docs/core-architecture/)
   * [Feature Matrix](/learn/docs/feature-matrix/)
* [Guides](/learn/guides/)
* [Tutorials](/learn/tutorials/)
* [API](http://api.openfl.org/){% endsidebar %}