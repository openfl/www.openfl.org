---
layout: default
title: Change BitmapData
---

# Change BitmapData

Although it is common to load `BitmapData` from a file, and not to modify it at runtime, sometimes you may wish to alter the contents of an image.

The `BitmapData` class includes many different methods for modifying the data, including:

 * copyChannel
 * copyPixels
 * draw
 * fillRect
 * floodFill
 * noise
 * setPixel
 * setPixels
 * threshold

These can be used to transfer pixels between `BitmapData` instances, to modify the data directly, to replace the data (as in the case of noise) or to draw other objects into a bitmap.

However, many effects can be accomplished by changing the way the bitmap is drawn, rather than affecting the source data directly. If you choose to modify an image, but still wish to use the orignal elsewhere, you will want to use `bitmapData.clone ()` to create a copy. 