---
layout: post
title: OpenFL HTML5 1.4.2 Beta
---
Hey folks! Go get the best release ever of "openfl-html5" -- available now! Open your command-line or terminal and use "lime upgrade openfl", or [go here](http://www.openfl.org/download) if you haven't installed OpenFL yet.

This release has a new-and-much-improved version of the "dirty transform" behavior introduced in the past release. In the first release of this new backend, we updated "world transforms" once before rendering, similar to pixi.js. This is efficient, but unfortunately, it does not allow for accurate "localToGlobal", "globalToLocal" or bounds calculation (such as the width or height of a Sprite) in all cases. In the previous release, we enabled a flag to make sure that transform data is up-to-date, but in some circumstances, it could perform very poorly.

We have a new system that is a whole lot smarter, so it should remain accurate while also performing fast. This improvement (and others) make this the most accurate release so far. We have been hitting this backend hard with a lot of projects, including some HUGE ones with very complex use of the display list, and its running like a champ.

We still plan to invest more time testing flash.display.Graphics consistency, but minor fixes in this release bring some welcome improvements here as well.

Two new key features have been added in this release: flash.media.Video and openfl.display.DOMSprite.

You can now use HTML5 video, integrated directly into the display list as you would expect. For more unique components, now you can use the "DOMSprite" class, which takes any DOM element, and makes it work like a Sprite. You can move, fade, rotate and otherwise manipulate the object as part of your display list. Needless to say, DOMSprite does require that you build for DOM functionality, but as mentioned before, you can still use canvas with the DOM-based rendering using BitmapData or Graphics (default renders everything to canvas).

Please let us know if there is more we can do to help you integrate OpenFL HTML5 projects with other HTML5 content, and keep giving us feedback!

## Changes

### [openfl-html5](https://github.com/openfl/openfl-html5)

__Version: 1.4.2-beta__

 * Improvements to DOM render caching behavior
 * Fixed "border" and "background" properties for flash.text.TextField
 * Fixed cases where flash.display.Graphics was considered invisible and not rendered
 * Improved the behavior of "scrollRect" for flash.display.DisplayObject
 * Fixes for alpha fades on flash.display.Sprite or flash.display.Shape "graphics"
 * Added openfl.display.DOMSprite
 * Implemented support for flash.media.Video
 * Implemented better measurement for flash.text.TextField
 * Added Event.ADDED and Event.REMOVED events
 * Added a much smarter system for managing dirty transforms
 * Fixes for flash.display.Graphics lines
 * Fix when embedding assets of type "music"
 * Implemented flash.ui.Mouse "show" and "hide"
 * Fixed a small error in flash.display.BitmapData "copyPixels"