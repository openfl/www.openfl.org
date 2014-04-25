---
layout: post
title: OpenFL HTML5 1.4.1 Beta
---
Although we just released OpenFL 1.4, we have a new update of the beta HTML5 target -- it's too hard to wait for a big release!

In this release, we've addressed cases where "world transform" information could be out-of-date, which is important for size, scale and position in "getBounds" or "globalToLocal" APIs. In the process, we have improved the performance of DOM rendering, caching additional properties so that the DOM is modified only when an object is changed.

It may seem funny that we are investing in DOM support, in addition to canvas support. Certain older devices do not handle canvas very well, but also, the DOM rendering is designed not to update the page unless it has changed, making it more ideal for applications and other content that does not to blit on the screen constantly.

Actually, the DOM render path will still use canvas if you A.) modify the pixels in a BitmapData, B.) call "bitmapData.draw", or C.) use "graphics" on a Sprite or Shape

If you would benefit from DOM-based text-rendering, or using multiple layers (such as a static image background, plus a more constantly updated canvas for game content, etc) the DOM render path may actually be what you are looking for. 

The single-canvas approach is still used by default, as we believe it is still the closest (until we also have WebGL ready for you) to the familiar Flash plugin behavior.

However, the DOM render approach allows you to benefit from more of the unique qualities of the browser, performing better in environments where the canvas is not accelerated, and should all-around be a better fit for the average application (rather than games).

Please provide your feedback here, and let us know how the backend is working for you. If you like what we are doing, please also consider supporting us on [Patreon](http://www.patreon.com/openfl). Thank you!

## Changes

### [openfl-html5](https://github.com/openfl/openfl-html5)

__Version: 1.4.1-beta__

 * Improved the behavior of "textWidth" and "textHeight" for flash.text.TextField
 * Fix for "over bubbling" of certain events
 * Implemented "scrollRect" support for DOM (-Ddom) projects
 * Fixed cases where world transforms could be invalid when calculating positions and sizes
 * Increased caching to change styles less often when using DOM rendering
 * Fixed z-ordering for DOM rendered projects
 * Optimized flash.display.Graphics to not render when a fill is fully transparent
 * Improved HTML text when using DOM renderering
 * No longer keep events queue, allow events to dispatch immediately
