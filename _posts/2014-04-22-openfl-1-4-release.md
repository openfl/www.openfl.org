---
layout: post
title: OpenFL 1.4 Release
---

We have a brand-new OpenFL (and kin) release for you today. If you have already updated to Haxe 3.1.3, this resolves some C++ incompatibilities that were introduced.

## New Lime/NME Collaborative Backend

The most significant change in this release is that we have joined forces with the (now renewed) NME project in order to unify our efforts in building a stable, fast native backend implementation for Haxe projects. NME and Lime remain different projects, but a primary goal for us is to welcome contribution where we can, and to reduce barriers to increasing the quality of Lime as a whole.

If you are a contributor, you will find that the native C++ code has moved out of Lime, and has been merged to a new home within the NME repository. Issues and pull requests should be made against NME, the C++ binaries for NME and Lime are not identical, but we are building from the same source files to increase collaboration and joint improvements.

As a user, this will not have a tangible impact, other than stronger and better Lime releases. When we use the same code as NME, we all benefit by more developers patching and improving the code. Where we have chosen not to use the same code (such as OpenAL for sound and our new Android extension system) we will continue to provide the same Lime experience. 

## Better Canvas Support, new DOM Support

Although the new HTML5 backend is in beta, we have already seen amazing results so far. In this release, the HTML5 backend has many, many, MANY improvements across the board. You can expect a more consistent Flash experience, now with automated webfont support!

We have had it mind to develop a separate DOM-based backend for HTML5, in order to best support applications, as well as games. Upon a technical review, we realized that the best result for a DOM backend looked much closer to the existing HTML5 backend than we thought. Using "-Ddom" while compiling (or <haxedef name="dom" /\> in your project) you can target the DOM instead of a single canvas.

The default canvas behavior is the fastest result for desktop and mobile targets for games that are blitting the fullscreen each frame. The DOM renderer is faster for certain older or low-feature devices (such as a smart TV) and may be a better match for applications that do not need to render each frame, would benefit from DOM-based text, or any project that would prefer to use canvas elements sparingly.

We still expect to introduce WebGL rendering soon... the canvas-based renderer, in the meantime, is plenty fast on the desktop, and is a good way to provide feedback for the behavior of our new backend. WebGL support will be a progressive, in-place upgrade when it is ready.

## Unified Haxe C++ Library

The most recent hxcpp release, 3.1.30, is a combination of hxcpp and hxlibc in a joint investment to build the ideal Haxe C++ library. Improvements from hxlibc, such as better, more reliable build tools, smarter output, support for external toolchain XML and new platform support are now official within hxcpp. Haxe related improvements to C++ target are also reflected and up-to-date, coinciding with the recent Haxe 3.1.3 release. All around, we feel this is a great solution. The release schedule has also been improved, to help make sure that time-critical fixes can go out to you on-time.

This release changes to use the new-and-improved hxcpp library by default.

## Additional Tools

In addition to OpenFL, we also want to highlight a couple useful tools that have been updated recently!

### as3hx

If you would like to convert ActionScript code to Haxe, as3hx can help automate the process:

    haxelib install as3hx
    haxelib run as3hx path/to/as3/sources

If you find issues or have pull requests to contribute to the tool, we invite you to visit the official project page at [https://github.com/HaxeFoundation/as3hx](https://github.com/HaxeFoundation/as3hx
)

### swf

As a friendly reminder, there is a totally awesome SWF library that seamless works with OpenFL. If you want to bring assets over from Flash, it makes it surprisingly simple:

    haxelib install swf

You can add a SWF library to your project file, like this:

    <library path="awesome.swf" />

...then you can load it at runtime, like this:

    Assets.loadLibrary ("awesome", function (_) {
		var clip = Assets.getMovieClip ("awesome:MyClipName");
		addChild (clip);
	});

The SWF library also supports compile-time support for including SWF assets in HTML5 projects, but this is (unfortunately) not fully compatible with our new HTML5 backend, yet. If you want to experiment with it, you can do so with the old "openfl-html5-dom" backend:

    <set name="html5-backend" value="openfl-html5-dom" />
    <haxelib name="openfl" />

## Contributing to OpenFL

If you are interested in being a source-code contributor to OpenFL, please check out our [GitHub](https://github.com/openfl) or visit us at the [Contributors' Chat Room](http://www.hipchat.com/ggsrxiqGV). 

We also want to take this opportunity to give a **HUGE** thank you to all of our supporters, who have contributed a total of $516.08 since February to help OpenFL grow. You guys are all awesome! If you are not a supporter yet, please consider giving to help [supporting the project](http://www.patreon.com/openfl). Thank you!

## Getting the Update

If you have not installed OpenFL yet, follow the [install instructions](http://www.openfl.org/download) to get started!

If you are upgrading from a recent OpenFL release, you can use "lime upgrade" to get the latest release:

    lime upgrade openfl

If you have an older version of OpenFL installed, you can try these commands:

    haxelib update lime
    haxelib update lime-tools
    lime upgrade openfl

If you encounter any problems while your upgrading, or installing for the first time, please comment here so that we can help!

## Changes

### [openfl](https://github.com/openfl/openfl)

__Version: 1.4.0__

 * Updated to new OpenFL logo and icon
 * Install hxcpp instead of hxlibc during setup

### [openfl-native](https://github.com/openfl/openfl-native)

__Version: 1.4.0__

 * Now openfl.gl.GL accepts both Array<Float\> and Float32Array values, where appropriate
 * Implemented "cullFace" in openfl.gl.GL, as well as other minor fixes
 * Fixed lime\_bitmap\_data\_set\_flags to use the right number of parameters 
 * Fixed a position offset error in openfl.utils.UInt8Array
 * Implemented "followRedirects" in flash.net.URLLoader, still true by default
 * Implemented "responseHeaders" in flash.net.HTTPStatusEvent
 * Set hxcpp critical errors to throw in Haxe instead of stderr in debug builds

### [openfl-html5](https://github.com/openfl/openfl-html5)

__Version: 1.4.0-beta__

 * Fix (possible) infinite loop in flash.display.BitmapData.floodFill
 * Fix bounds calculation for display objects
 * Added Event.ACTIVATE and Event.DEACTIVATE when leaving/entering window
 * Added "copyFrom" and "setTo" for flash.geom.Matrix
 * Added "copyFrom" to flash.geom.Rectangle and fixed internal "expand" method
 * Copied additional classes from "openfl-html5-dom"
 * Changed flash.display.DisplayObject to allow override of more core properties
 * Skipped creation of a canvas for flash.display.Graphics with a size of zero
 * Improved the "transform.matrix" property for flash.display.DisplayObject
 * Created a DOM render path (use -Ddom while compiling or <haxedef name="dom" /\>)
 * Silenced keyLocation warnings on certain browsers
 * Toggling canvas smoothing based upon "smoothing" value of flash.display.Bitmap
 * Added "unload" to flash.net.Loader and "invalidate" to flash.display.Stage
 * Fixed issue when using "drawTiles" with tiles with a width or height <= 0
 * Fixed "rect" for flash.display.BitmapData
 * Switched from Howler.js to SoundJS for audio backend
 * Implemented support for automatically embedding of webfonts
 * Disabled "image drag" behavior in Firefox
 * Added support for older Haxe releases, tested on Haxe 3.1, possibly compatible with 3.0
 * Added Event.ADDED\_TO\_STAGE event for the document class
 * Populating the "content" property of flash.display.Loader
 * Added flash.events.FocusEvent support
 * Consistency fixes to the event capture/target/bubble implementation
 * Fixed bubbling for manually dispatched events
 * Made KeyboardEvents dispatch through the currently focused object
 * Added initial "scrollRect" support for flash.display.DisplayObject
 * Fixed bounds checking for objects that have an alpha of 0 but are visible
 * Added initial support for bitmap fill matrix in flash.display.Graphics

### [lime](https://github.com/openfl/lime)

__Version: 0.9.7__

 * Merged into a shared NME/Lime C++ codebase
 * Improvements to exposed OpenGL float-based APIs
 * Updated Android OpenAL libraries for better performance
 * Set to rebuild to using hxcpp instead of hxlibc
 * Fix for SDL2 initialization using software
 * Guard KEYCODE\_VOLUME\_MUTE from older Android SDK versions
 * Improved BlackBerry audio by moving from SDL_mixer to OpenAL
 * Added Android Extension callbacks for "onLowMemory", "onTrimMemory"
 * Fixed issue where the mouse would reset when leaving the window
 * Fixed bug where Android arrow/enter keys were trapped as joystick events
 * HTTPS requests are no longer blocking
 * Fix support for BWF format WAV files (and possibly others)
 * URLLoader now includes request headers and other improvements
 * Improve keyboard mapping for iOS
 * Enable support for Linux systems with no GL library
 * Improved handling for GPU pixel format / color order
 * Switched to a smarter build system for third-party dependencies

### [lime-tools](https://github.com/openfl/lime-tools)

__Version: 1.4.0__

 * Changed default C++ build library to hxcpp
 * Improved error messages when the tools are not able to write to a file
 * Added OpenAL to list of expected libraries for BlackBerry
 * Added support for certain versions of haxelib that do not add a -D for the lib name
 * Confirmed for Amazon FireTV devices
 * Added --device=192.168.2.100 (etc) for targeting Android devices over a network
 * Now "lime install" will upgrade dependencies if they are installed already
 * Improved "lime upgrade" to manage updates from both GIT and haxelib
 * Improved "lime upgrade" to also handle dependencies that are specific to dev versions
 * Added support for generating SVG, EOT and WOFF web fonts automatically
 * Improved embedding to support native C++ targets, using <assets path="" embed="true" /\>
 * Added internal support for targeting a specific display, using <window display="" /\>
 * Added internal support for setting up multiple windows, using <window id="" /\>
 * Moving DefaultAssetLibrary out of tools, into "openfl"