---
layout: post
title: Flash AND HTML5, Unicorns Exist!
---
A few days ago, Mochi Media announced that it was shutting its doors, and shutting down its services by the end of the month. This week, GDC began, but there was no Flash Gaming Summit -- a long-running event of five years. Although some believe Mochi Media to be an isolated case, others are calling it the "canary in the coal mine," signaling the end of "the era of Flash web gaming."

The world has changed.

10 years ago, we were delivering rich, interactive content using Flash Player. Today, is not uncommon to find some of the same experiences delivered through HTML5. The difference is in the vehicle. Just as you may read your news on a tablet, or through Twitter, when years ago you may have read a paper newspaper or magazine, the method of _delivery_ has changed, but the desire for compelling content, if anything, has only increased.

Everyone, it is time to think outside the plugin.

Historically, "Flash" has meant at least three things:

 * A productive developer workflow
 * A polarizing browser plugin
 * A fast superhero

Two of these are here to stay, but one is not to last. Critics of Flash Player may forget what the web was like before. Plugins were created to solve a problem, not make them. Flash was the "web plugin victorious," it is the conqueror of a diverse (and unstable) universe of plugins for MIDIs, chat and all sorts of interactive could not itself deliver. Flash is one of the last-remaining plugins, it is coming time that content is not delivering with a plugin anymore.

...but what about the workflow?

We believe that Flash is an amazing workflow, but we also believe that in order to deliver the projects you want to deliver, you need more than a plugin. OpenFL provides native implementations of the Flash Player API, so you can deliver true C++/OpenGL for Steam, iOS, Android and other markets, and today, we are announcing a new OpenFL HTML5 backend, based around [pixi.js](https://github.com/goodboydigital/pixi.js).

pixi.js is a "super fast HTML5 2D rendering engine that uses webGL with canvas fallback," and happens to be based on the Flash API, to a small scale. We believe that a lot of value comes from the ability to leverage a fuller API, and is not tied directly to bloat. In our testing, we have exceeded pixi's canvas performance by 40% on some systems, and thanks to Haxe's dead-code eimination feature, a BunnyMark sample is only 22KB (gzipped). 

Since Apple and other manufacturers have not added WebGL support yet, canvas is a necessity. For this beta release, canvas is our first priority, and WebGL will soon follow.

18 months ago, the winner of the Ludum Dare "Evolution" compo was Nicolas Cannasse, the creator of Haxe (and an awesome game developer). We have brought this to HTML5 using our new backend. The same code compiles to Flash, like the original, but thanks to OpenFL, compiles also to C++ and HTML5:

[http://www.openfl.org/samples/evoland](http://www.openfl.org/samples/evoland)

You can find the original here:

[http://evoland.shirogames.com/classic](http://evoland.shirogames.com/classic)

If you would like to test the current canvas performance, try this bunny sample:

[http://www.openfl.org/samples/bunny](http://www.openfl.org/samples/bunny)

OpenFL 1.3 is now released, and the new backend, "openfl-html5", is now enabled by default. To use the older backend, use <set name="html5-backend" value="openfl-html5-dom" /> before <haxelib name="openfl" /> in your project file.

OpenFL 1.3 introduces a new platform target: Firefox OS. You can use "lime build firefoxos" to build for Firefox OS instead of traditional HTML5. This will use the new HTML5 target, and can be installed using the Firefox App Manager (Mozilla does not have any official command-line install tools, yet).

We are very excited, and encourage you to get involved, [show your support on Patreon](http://patreon.com/openfl), [collaborate](https://github.com/openfl/openfl-html5) and help us build the next generation Flash C++ and HTML5 games!