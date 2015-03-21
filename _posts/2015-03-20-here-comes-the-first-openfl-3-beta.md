---
layout: post
title: Here Comes the First OpenFL 3 Beta!
---

We are rolling out a new beta release of OpenFL 3.0! It comes with tons of exciting changes, but for the sake of stability and continuity you can use the "-Dv2" or "-Dlegacy" flag to keep the old behavior for all your Windows, Mac, Linux, iOS, Android, and BlackBerry projects. This is meant to be fully backward-compatible, so we can continue to release critical patches as we move forward. Please report any issues you have using legacy mode.

OpenFL 3 introduces a new rendering path that will take some time to fully develop, but already is yielding some great results.

## Architecture

Some of you may ask, "Okay, feature, feature, feature, but _why_? *Why* do something different?"

Basically, the old structure wasn't taking us where we wanted to go, led to lots of duplicated work, was difficult to contribute to, and just wasn't sustainable long-term.

![OpenFL 2 Architecture]({{ site.baseurl }}/blog/assets/openfl2architecture.png)

This illustration shows the (old) OpenFL 2.x architecture.

Native targets used a combination of Haxe glue and C++ logic to power the full API. Many behaviors required deep dives into C++ to change, and certain parts of the API were (practically speaking) never going to change. Whether innocent inconsistencies or larger issues, it was difficult to fix things. The platform layer was handled by SDL2 on desktop targets and by custom code layers for each mobile platform (since this was developed before SDL even supported mobile). Now we can just use SDL on mobile platforms, improving both stability and productivity. Instead of searching through custom Java and Objective-C back-ends, we can invest more of efforts on portable code.

![OpenFL 3 Architecture]({{ site.baseurl }}/blog/assets/openfl3architecture.png)

Lime 2 has been designed to be low-level and portable, supporting not only Flash, HTML5 and traditional native targets, but also home game console targets. [BunnyMark](http://www.openfl.org/samples/bunny/) has already been ported for Wii U (using Lime), and additional low-level features needed for OpenFL are forthcoming. 

The new OpenFL now consists of 100% Haxe code. Not only is this super-portable, it has other benefits. Since we're all Haxe developers, the entire community can now make OpenFL stronger, even if it's just a small fix or addition. And now that there's only one OpenFL library to maintain, we have already seen huge boosts in development flow and improvements to existing features.

## Lime 2

Lime 2 is a brand-new API in OpenFL development.

While Lime has previously been used to power the command-line tools and provide native binaries, Lime can now be used directly as a distinct framework beneath OpenFL. This has some amazing benefits. First, getting Lime up and running on a platform is much simpler to implement than the full OpenFL stack. Second, you can control the whole lifecycle of an application in Lime, and create/destroy an OpenFL stage at will to step in or out of a the Flash development workflow. 

And even when you don't work directly at the Lime level, the APIs provide features like nuanced gamepad support, complex text layout, and direct access to sound APIs. By pushing the OpenFL renderer up and away from the low-level platform layer, we gain clarity, stability, and pave the way for new features, such as upcoming support for custom shaders in OpenFL. 

Lime is also available in more environments than just OpenFL 2. The command-line tools work with or without native binaries. It has been tested to work on C++, JavaScript, Flash and Java, including new permutations, such as node.js for JavaScript + native windowing support or asm.js through Emscripten. 

And of course, compatibility with home game console targets, such as the Wii U and additional platforms, is coming.

## HTML5 as a First-Class Citizen

Did you know that Flash is being [out-performed by JavaScript](http://www.infognition.com/blog/2014/comparing_flash_haxe_dart_asmjs_and_cpp.html) nowadays?

Of course no single benchmark is perfect, but the web has certainly come a long way since the 1990's.

Like it or not -- most users today want rich interactive web content without a plugin. Flash was and is awesome, but HTML5 is now filling its shoes for many purposes. We want to be sure that as OpenFL matures, it provides the same robust web support as Flash, without relying exclusively on Flash Player. Since OpenFL 3 has unified the codebase, 90% of the time, contributions meant for native platforms will benefit the HTML5 and mobile targets, and vice versa. Unification helps improve every platform, regardless of what technology we use to reach it.

## ...and More 

There are already many improvements in OpenFL 3, including complex text layout, mouse cursor handling, robust gamepad support, and other improvements to come.

## Download OpenFL 3

As always, OpenFL is available on haxelib:

```bash
haxelib install openfl
haxelib run openfl setup
```

Remember that you can enable OpenFL 2 compatibility mode using the -Dv2 or -Dlegacy flags, but only by improving OpenFL 3 can we tap into the future it opens up for us all. It works on so many Haxe platforms already, why shouldn't it work on C#, or the new Python target? If you can load OpenFL into Lime, why not load OpenFL projects into other OpenFL projects, or use OpenFL as the renderer for other, pre-established game engines? ...and what about the SWF library? How does that open doors to reproduce the Flash SWC workflow for the web with and without the Flash plugin?

One thing is for certain, the future is bright. Thank you again to all of our awesome [supporters](http://www.openfl.org/get-involved/), and all you cool cats who are making games and web projects out in Twitter, the [forums](http://community.openfl.org) and our Slack chat. Onward and upward!
