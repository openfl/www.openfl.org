---
layout: post
title: OpenFL 4 is Live
---

The next, latest, greatest version of OpenFL is here—OpenFL 4. We invite you to update using `haxelib upgrade` or by following the directions on the [download](https://www.openfl.org/download) page!

## New OpenGL Renderer

We went to the drawing board to make a lightweight, clean, easy-to-understand OpenGL renderer in the core of OpenFL. This has resulted in a number of great benefits, not only for maintenance and development, but also this has enabled support for WebGL by default in our HTML5 builds. We have working `ShaderFilter` support in `Bitmap`, `TextField`, `DisplayObject` and `Tilemap`, and plan to add support to `Sprite` in the future.

WebGL builds will fallback to 2D canvas automatically if WebGL is not supported by a user's browser, but if you would prefer to force the use of 2D canvas when targeting HTML5, use `-Dcanvas` when compiling.

## Greater Consistency with Flash APIs

There are many subtle little differences we are changing in order to better support the behavior you expect when using an open-source Flash library. These will not hurt ordinary projects, but can make all the difference when you port an existing ActionScript project over to use OpenFL. We are on the road to continue to remove the tiny differences that unnecessarily make some porting projects complicated.

## Commitment to the Stage3D API

In the past, the Stage3D compatibility layer was developed by our friends on the Away3D project, and maintained by generous contributors through pull requests. As an API, this was not supported by the core OpenFL team, but with our new OpenGL renderer, and continuing commitment to providing the functionality you expect, we have begun the process of improving our Stage3D APIs to conform more closely with the original API. We are partnering with the developers of the Haxe Starling port to continue to make improvements to our core Stage3D implementation so that we can grow to support modern ActionScript projects using Stage3D with as little headache as possible.

## Continued Graphics Improvements

OpenFL continues to improve in its support for the `shape.graphics` APIs, with minor edits to improve accuracy, as well as changes to our renderer to support scaled graphics and full fidelity. For projects that are designed for set pixel dimensions, OpenFL 4 is now able to automatically upscale and letterbox projects, bringing full quality graphics to projects that may have been designed only for a lower-resolution screen.

## API Changes

In our [development post](http://www.openfl.org/blog/2015/10/06/october-update/) last October, we outlined a number of our motivations for removal of `drawTiles`. `drawTiles` has caused an asymmetrically large number of issues over time, is not a part of the core Flash API, and is no longer an ideal choice for performance. `Tilemap` is an alternative available in OpenFL 4, and we would be happy to discuss other approaches. Further discussion can continue [here](http://community.openfl.org/t/type-not-found-openfl-display-tilesheet/7892).

Over two years ago, we started development on a new implementation of OpenFL, designed to solve problems we had deemed "unsolvable" in our old codebase, and to learn from our all of our work supporting nearly a dozen platforms. In our post announcing the [OpenFL 3 beta](http://www.openfl.org/blog/2015/03/20/here-comes-the-first-openfl-3-beta/), we talked more about the benefits of this architecture, and provided continued support for our legacy OpenFL 2 native implementation for compatibility during the transition. We believe it is time to remove `-Dlegacy` support, and encourage that you use either the previous OpenFL 3 haxelib releases for legacy projects, or [communicate with us](https://community.openfl.org) on the forums if you have trouble updating to the latest.

## Lime Update

Coinciding with the OpenFL 4 release, there is a new version of Lime as well. This includes better tools and many improvements to our platform support. If you are migrating from OpenFL legacy, Lime provides a suite of APIs that extend the OpenFL experience for greater control over input APIs, threading, rendering and the behavior of your application. Although OpenFL is the most common framework that uses Lime, we know many developers who use and love Lime directly. It is recommended if you prefer a lower-level approach to development.

Thank you everyone for your continued support!
