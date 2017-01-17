---
title: Updated OpenFL and Lime Releases
---

We have new releases of OpenFL and Lime available!

## OpenFL

4.5.3 (01/16/2017)
------------------

* Updated for Lime 3.6
* Updated AGALMiniAssembler to a fresh port of Adobe's last release
* Added missing Event.FRAME_CONSTRUCTED event
* Added `Dictionary<Object, Object>` support
* Improved support for textField.setTextFormat
* Updated preloader to use Event.UNLOAD instead of Event.COMPLETE to unload
* Updated SWFLite library to preload with the parent application
* Fixed support for slashes in SharedObject names
* Fixed support for preventing default on keyboard events
* Fixed a regression in displaying stack traces on crash errors
* Fixed text measurement on IE 11
* Fixed return value when scaleX or scaleY is negative
* Fixed issues where `new ByteArray` may have values other than zero 
* Fixed an issue with SWFLite assets when using the "generate" option
* Fixed a possible null crash when updating object transforms
* Fixed support for garbage collecting Sound when SoundChannel is finished
* Fixed problems with using textField.appendText
* Fixed the default template for HTML5 when multiple projects are embedded
* Fixed wrong colors when values were larger than expected
* Fixed an issue with needing clearRect on CocoonJS

_[previous releases](https://github.com/openfl/openfl/blob/develop/CHANGELOG.md)_

## Lime

3.6.0 (01/16/2017)
------------------

* Moved "lime.audio" to "lime.media"
* Added Vorbis bindings under "lime.media.codecs.vorbis"
* Added lime.ui.ScanCode, with conversion support to/from KeyCode on native
* Added tool support for the "--no-output" argument
* Migrated from NFD to tinyfiledialogs for better dialog support
* Made window.close cancelable on desktop platforms
* Updated libjpeg to 9b
* Updated howler.js to 2.0.2
* Improved support for Haxe 3.4
* Improved support for progress events while preloading
* Fixed force install when deploying to Android (API 16+ devices)
* Fixed an invalid state when returning from background on Android
* Fixed playback of a single audio buffer multiple times on HTML5
* Fixed initial volume level in AudioSource on HTML5
* Fixed a regression in the default architecture list for iOS
* Fixed merging of multiple <architecture /> tags in project files
* Fixed a possible crash when retrieving OpenGL strings
* Fixed the default template for HTML5 when multiple projects are embedded
* Fixed support for non-preloaded assets on HTML5
* Fixed support for image.copyChannel on HTML5 when using WebGL
* Fixed support for command-line arguments with "lime rebuild"

_[previous releases](https://github.com/openfl/lime/blob/develop/CHANGELOG.md)_

Thank you to all OpenFL supporters, and happy new year!