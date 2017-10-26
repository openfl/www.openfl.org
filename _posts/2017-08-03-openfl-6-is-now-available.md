---
title: OpenFL 6.0 is Now Available!
---

We are pleased to announce that OpenFL 6.0 is available, including new features and fixes to continue to support single-source, cross-platform development support for web, mobile, desktop and other platforms!

## New Features

### (Beta) TileArray

We have developed an easy-to-use `DisplayObject` called `Tilemap` which makes it possible to use batch hardware rendering. `Tilemap` is similar to a mixture of `Bitmap` and the display list, but we have received multiple requests to support an alternative API that is less structured.

This release includes the (beta) API for `TileArray`, for writing tile data more directly:

```java
var data = tilemap.getTiles ();
data.length = 2;
data.position = 0;
data.setMatrix (1, 0, 0, 1, 100, 100);
data.position = 1;
data.setMatrix (1, 0, 0, 1, 200, 200);
data.alpha = 0.5;
tilemap.setTiles (data);
```

This API has enabled our team to more easily migrate legacy `drawTiles` rendering code to the current version of OpenFL.

We welcome your feedback, and hope to continue to improve `Tilemap`

### (Beta) Custom Shader Support

OpenFL 4 added initial support for custom shaders, using the filter API.

However, in time we have found that our use of OpenGL framebuffers was too expensive to make shader filters practical for every-day production. We are enabling an alternative approach in OpenFL 6, where `Bitmap`, `TextField`, `Tilemap` and `Video` objects can have a custom shader set directly:

```java
var customShader = new CustomShader ();
bitmap.shader = customShader;
```

We have also enabled support for custom OpenGL shaders for individual tiles in `Tilemap`

### Improved blendMode and colorTransform support

We have improved support for `blendMode` throughout our renderer, and have added support for hardware-accelerated `colorTransform` when possible. In other cases, we enabled `cacheAsBitmap` in order to preserve performance. We also added (beta) support for `colorTransform` in `Tilemap`, but it is supported only on hardware since it is very expensive on other render types.

## Stage3D Libraries

Although OpenFL has enjoyed stable Stage3D support for some time, we have continued to focus on creating faithful renditions of familiar Stage3D libraries for OpenFL.

### Away3D

![Away3D](/blog/assets/openfl-6-away3d-cmp.png)

Away3D is an open source platform for developing interactive 3D graphics for video games and applications.

The latest development version of Away3D is now compatible with OpenFL, and should continue to improve in quality with time: [https://github.com/openfl/away3d](https://github.com/openfl/away3d)

### Starling

![Starling](/blog/assets/openfl-6-starling-cmp.png)

Starling is the "Cross-Platform Game Engine", a popular Stage3D framework. OpenFL is hardware-accelerated without the use of Starling, but it still provides a popular alternative to the traditional Flash API.

We currently have 1.8 release of Starling and the Starling particle framework working reliably, and are still working on porting the Starling 2.x codebase for use with OpenFL: [https://github.com/openfl/starling](https://github.com/openfl/starling)

### DragonBones

![DragonBones](/blog/assets/openfl-6-dragonbones-cmp.png)

DragonBones is a skeletal animation editor, as an alternative to using SWF assets with OpenFL directly (which is also supported).

We have ported the most recent ActionScript runtime for DragonBones over for use with OpenFL. There is still room to create a runtime using OpenFL `Tilemap`, but we are still happy to provide a working version of the DragonBones runtime for use with projects: [https://github.com/openfl/dragonbones](https://github.com/openfl/dragonbones)

## Other Improvements

We are continuing to invest in SWF asset support. You can use SWF content from Flash Professional or Adobe Animate directly in OpenFL, with layers, animation and object IDs preserved. 

In time, we expect `MovieClip` animation to continue to perform better, as well as accuracy. OpenFL 6 includes improved support for `blendMode`, `colorTransform` and frame script when working with SWF source data.

As always, we are continuing to improve and polish a large variety of minor behaviors and features.

## Other Changes

We have removed deprecated references to `openfl.gl.*` and `openfl.utils.*` typed arrays, JNI and GL classes. You should use `lime.graphics.opengl.*` or `lime.utils.*` when using these types in your projects.

In this release, the default output directory per-platform has also changed. Now that Lime supports custom output directory naming schemes, we adopted a flatter directory structure by default, leaving the option up to the developer if they would prefer to distinguish between different kinds of builds.

For example, a Windows Neko release build on OpenFL 5 would use "Export/windows/neko/release/" by default, but OpenFL 6 will default to "Export/neko" instead. For more information on this change, and how to customize this structure, please visit the [community forums](http://community.openfl.org)

## Thank You

A huge thank you to all of our [Patreon](http://patreon.com/openfl) sponsors, code contributors and friendly developers, for continuing to make OpenFL possible and a great community to work with.

Run `openfl upgrade` to update to the latest version, or visit the [download](http://www.openfl.org/download) page to install OpenFL.

Our goal is to continue to make OpenFL a practical, efficient tool for cross-platform production work. Please visit the [forums](http://community.openfl.org) if you have any concerns, or feedback on how you believe OpenFL could continue to improve.

Happy coding!