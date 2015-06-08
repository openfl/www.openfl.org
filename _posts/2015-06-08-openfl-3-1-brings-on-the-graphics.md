---
layout: post
title: OpenFL 3.1 Brings on the Graphics
---

OpenFL 3.1 is now available, bringing new improvements to the Graphics class and better support for primitive rendering.

In the past, OpenFL used a unique software renderer to assist in having accurate and visually appealing shapes, but it was difficult to maintain, and even harder to improve.

In the newer OpenFL renderer, we have set aside the software renderer in favor of hardware rendering. This has brought many performance benefits, but the accuracy at times at times has left more to be desired.

With OpenFL 3.1, further emphasis has been placed on the accuracy of the HTML5 canvas Graphics renderer. This means that your lines, line caps, gradients, fills, curves and other primitive renders will be more correct than before, making it even easier to leverage SWF content from Flash in your projects.

That has been a great benefit to the HTML5 target, but what of the native targets? Rendering these in OpenGL can be very difficult, and in fact, inefficient. Hardware performs well with rigid polygons shapes, but curves can be much slower than a software alternative, and less accurate, such as when using gradients.

There is a library called "Cairo" which has been used in Webkit, Firefox, and even the (now abandoned) Flash Player for Linux. Cairo's purpose is to accurately (and quickly) render SVG shapes. By leveraging the work of many developers before us, we could use Cairo to achieve fast, accurate graphics without the maintenance overhead of a custom implementation. What's better, Cairo shares many similarites with canvas, so we have been able to port code directly to, from and between the canvas and cairo renderers to raise the level of Graphics class quality on all targets.

## Download

You can see the full list of changes for OpenFL and Lime here:

 * OpenFL: https://github.com/openfl/openfl/blob/2c47f198cf4440bf45d45a122732fe11e5d7f3a4/CHANGELOG.md
 * Lime: https://github.com/openfl/lime/blob/5db11053a2fe9229713d872e73e4d35b9a78c2cb/CHANGELOG.md

If you have OpenFL installed, run the following to upgrade:

```bash
openfl upgrade
```

If not, visit the [download](/download) page to get started!