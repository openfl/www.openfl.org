---
layout: post
title: New Releases of Haxe and OpenFL
---
A new version of Haxe has been released!

You can read all about Haxe 3.1.0 in the [official announcement](https://groups.google.com/forum/#!topic/haxelang/8Yc8i2nlOLw).

We have a new version of OpenFL available, rolling up fixes and improvements as well vital fixes for this new Haxe release.<!--more-->

You can upgrade to the latest version using `haxelib upgrade` or `lime upgrade openfl`

## Notes

We are especially excited about the abstract improvements in Haxe 3.1.0, and look forward to taking further advantage of the language. There is now UInt support for all platforms, which seamlessly converts between Int and UInt types. We hope to apply this same functionality to flash.Vector and other types that could benefit from this approach. 

This release includes significant improvements to native rendering, as well as our Android support. However, we have stopped support OpenGL 1 and OpenGL ES 1.1 in favor of OpenGL 2+ and OpenGL ES 2. If there is a significant reason why you need older rendering support, please let us know.

We are also using automatic builds, now. Thanks to your support, we can cover cost of running the openfl.org server as well as a new server to handle Windows builds. With your continuing support, we want to continue to invest into improvements to OpenFL.

Help us make OpenFL even better, and [show your support](http://www.patreon.com/openfl)!

We updated our primary Linux build server from Ubuntu 10.04 to Ubuntu 12.04, in order to handle certain build tools that were incompatible with such an old version. If you are a Debian user, you may have a glibc conflict when trying to use the new releases of Lime. You may either update glibc to a newer version or you can build from the source.

## Changes

### [openfl](https://github.com/openfl/openfl)

__Version: 1.2.3__

 * Add references for JoystickEvent.DEVICE\_ADDED and JoystickEvent.DEVICE\_REMOVED
 * Add "currentFPS" to openfl.display.FPS
 * Add "count" parameter for openfl.display.Tilesheet drawTiles
 * Do not add --no-inline to Flash debug builds (this can be added on the command-line)
 * Remove custom UInt type, since Haxe 3.1 supports UInt
 * Restore Flash UInt types, since Haxe now converts between Int and UInt naturally
 * Updated for automated builds: [http://openfl.org/builds/openfl](http://openfl.org/builds/openfl)

### [openfl-native](https://github.com/openfl/openfl-native)

__Version: 1.2.3__

 * Fix behavior of "removeChildren" in flash.display.DisplayObjectContainer
 * flash.filters.GlowFilter no longer extends flash.filters.DropShadowFilter
 * Dispatch MouseEvent.MOUSE\_OVER/MOUSE\_OUT/ROLL\_OVER/ROLL\_OUT events when using touch as well
 * Added support for JoystickEvent.DEVICE\_ADDED and JoystickEvent.DEVICE\_REMOVED
 * Added "setTo" to flash.geom.Rectangle
 * Improved working directory behavior in Linux
 * Updates to flash.net.XMLSocket
 * Improvements to threaded audio behavior
 * Added support for Android "immersive mode"
 * Fixes to Android joystick handling, supporting newer OUYA gamepad hardware
 * Updates to improve support for pre-multiplied alpha
 * Improvements to "paletteMap" in flash.display.BitmapData
 * Improved Android timing scheme to prevent over-eager render or update calls
 * Added "count" parameter to openfl.display.Tileshet drawTiles
 * Moved template files to Lime
 * Fixed support for "perlinNoise" in flash.display.BitmapData
 * Added flash.display.FrameLabel
 * Fixes to flash.net.URLLoader
 * Updated for automated builds: [http://openfl.org/builds/openfl-native](http://openfl.org/builds/openfl-native)

### [lime](https://github.com/openfl/lime)

__Version: 0.9.5__

 * Improvements to Lime wrapper
 * Fixed cURL to support larger header sizes
 * Updated the SDL2 backend to support initialization without AA if not supported
 * Added support for Android "immersive mode"
 * Improved default \_sans, \_serif and \_typewriter font matching for Mac and iOS
 * Multiple improvements to Android JNI support
 * Added "count" support for drawTiles rendering
 * Optimized renderer to perform more with a single draw array
 * Improvements for anti-aliased hardware lines
 * Optimizations to tessellation algorithm
 * Added better support for pre-multiplied alpha, currently per surface
 * Memory fixes for Freetype fonts
 * Fix listing of Lime samples when running "lime create openfl"
 * Added proper charCode and keyCode support for Android keyboard input
 * Minor improvement to OpenAL sound
 * Multi-threading fix for Android
 * Fixed OpenGL ES 2 context support for Tizen
 * Keyboard event support on Tizen
 * Resolved rare issue when loading BitmapData from bytes
 * Minor fixes for Emscripten
 * Updated for automated builds: [http://openfl.org/builds/lime](http://openfl.org/builds/lime)

### [lime-tools](https://github.com/openfl/lime-tools)

__Version: 1.3.0__

 * Minor fix when running "lime setup" on certain platforms
 * Improved the output of "lime create" to help make it more clear
 * Added "readDirectory" to helpers.PathHelper
 * Fixed support for Emscripten
 * Minor changes to assets for bitfive
 * Updated for automated builds: [http://openfl.org/builds/lime-tools](http://openfl.org/builds/lime-tools)

### [openfl-html5-dom](https://github.com/openfl/openfl-html5-dom)

__Version: 1.2.1__

 * Compile fix for flash.filters.ColorMatrixFilter
 * Background color fix in flash.filters.BlurFilter
 * Added "removeChildren" to flash.display.DisplayObjectContainer
 * Added "createBox" to flash.geom.Matrix
 * Added "setTo" to flash.geom.Rectangle
 * Improvements to flash.utils.ByteArray readBytes/writeBytes
 * Set to use transparent background by default
 * Added basic support for BlendMode.ADD in bitmapData.draw
 * Added support for GIF images when loading BitmapData from bytes
 * Updated for automated builds: [http://openfl.org/builds/openfl-html5-dom](http://openfl.org/builds/openfl-html5-dom)
