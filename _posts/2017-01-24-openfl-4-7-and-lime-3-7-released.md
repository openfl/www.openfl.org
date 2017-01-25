---
title: OpenFL 4.7 and Lime 3.7 Released
---

New versions of OpenFL and Lime are available!

```
openfl upgrade
```

## OpenFL

### 4.7.0 (01/24/2017)

* Added support for high-DPI HTML5 output
* Added BitmapData.loadFromBase64/loadFromBytes/loadFromFile
* Added handling for UP/DOWN/HOME/END keyboard shortcuts in TextField
* Added stage.fullscreenWidth/fullscreenHeight
* Added support for Lime 3.7 simulated preloader progress
* Improved selection of multi-line text in TextField
* Improved the behavior of bitmapData.paletteMap
* Improved text measurement for HTML5 input TextField
* Improved sharpness of HTML5 vector shape rendering
* Deprecated async callbacks in BitmapData.fromBase64/fromBytes/fromFile
* Fixed support for the "rect" argument in bitmapData.encode
* Fixed use of textField.setTextFormat when text is empty
* Fixed support for openfl.printing.PrintJob on Flash Player
* Fixed support for SWF-based assets on iOS and Flash
* Fixed use of deprecated NMEPreloader class
* Fixed use of font names on HTML5 that may already be quoted

### 4.6.0 (01/20/2017)

* Added (initial) support for openfl.printing.PrintJob on HTML5
* Added a stub for stage.softKeyboardRect to fix compilation
* Made stageWidth and stageHeight read-only on Flash target
* Updated AGALMiniAssembler to a newer release from the Gaming SDK
* Improved rendering for multi-line text selections
* Changed the default font hint style to something more subtle
* Fixed some cases where textField.getCharIndex would work improperly
* Fixed issues where tile.rotation resulted in flipped objects
* Fixed problems with scaleX, scaleY and rotation interacting improperly

_Additional changes for previous releases are available [here](https://github.com/openfl/openfl/blob/develop/CHANGELOG.md)_

## Lime

### 3.7.0 (01/24/2017)

* Added `<define />` (implies `<set />` and `<haxedef />`)
* Added `<dependency force-load="" />` (will default to false in Lime 4)
* Added `-Dsimulate-preloader=3000` for simulating preload progress
* Improved Image.loadFromBase64/loadFromBytes/loadFromFile on HTML5
* Improved Image.loadFromBytes/loadFromFile support on Flash target
* Improved support for "library.json" files that are not embedded
* Improved support for browsers that do not have context.isPointInPath
* Improved `lime setup linux` command for some newer environments
* Improved caching behavior of text assets in AssetLibrary
* Improved seeking behavior for AudioSource on native targets
* Improved preload behavior on Flash target
* Fixed metadata-based font embedding for Flash Player
* Fixed issues with Windows paths when building tools with Haxe 3.4
* Fixed preloading of fonts similar to default sans-serif on HTML5
* Fixed base path for assets loaded from non-default asset libraries
* Fixed scale of mouse events dispatched for high-DPI HTML5 windows

### 3.6.2 (01/20/2017)

* Improved error when making a directory on an unavailable drive letter
* Fixed regression in support for HTML5 font preloading
* Fixed possible font overflow when embedding fonts on Flash target
* Fixed crash on Neko when using AudioSource with no AudioBuffer

### 3.6.1 (01/18/2017)

* Added streaming audio support to AudioSource
* Fixed issues in bytesLoaded/bytesTotal calculation
* Fixed a regression in support for static-linking
* Fixed a regression in support for lime.utils.JNI

_Additional changes for previous releases are available [here](https://github.com/openfl/lime/blob/develop/CHANGELOG.md)_

Thank you again to all of our [Patreon](http://www.patreon.com/openfl) supporters and awesome contributors!