---
layout: post
title: OpenFL Development Update
---
The best version of OpenFL ever is in development, as well as a new version of Lime that is very exciting. It would ruin things to spoil all of the surprises, but it is long overdue to share what we are doing, and why we have been working so hard.

## Lime

We went back to the drawing board on Lime "next", and are excited about the new doors it is opening up.

Lime is now a self-contained library, designed to provide platform support for DOM, Canvas, GL and Flash projects. Historically, getting platform support was handled in OpenFL, but we want to make this more agnostic, and more accessible.

Many parts of the library have been re-written to become more minimal, as well as bringing some of our favorite features from OpenFL over, such as OpenFL assets. We also have built some things that we think are pretty cool, such as seamlessly supporting multiple render environments, planned support for multiple windows, and unified events for each target. 

We are now using Lime directly underneath OpenFL, instead of bypassing Lime's Haxe API in native, and bypassing entirely in Flash or HTML5. In fact, the next OpenFL does not have any C++ code at all.

## OpenFL

We are planning on unifying OpenFL as a single Haxe-based library, with no native component. This may seem dramatic, but so far, it has had a surprising boost both to productivity, and quality. We believe that Haxe development is much faster than C++ development in general, and as we are all Haxe developers, it exposes OpenFL for more contribution.

Our largest concern was performance, but we have been surprised to find that we have been able to increase the performance over OpenFL (as much as nine times for some APIs) and reduce the memory footprint at the same time. The Haxe C++ target has continued to improve over time, and has an increasing amount of "magic" functions we can use to optimize performance critical segments of code.

By combinining OpenFL into a single backend, every fix that is made benefits every target platform. The library is also becoming simpler, as we continue to rely on Lime. For example, we have had difficulty integrating features that do not exist inside the Flash API already. By using Lime, we can add features there immediately, and integrate a Flash metaphor where it makes sense. Otherwise, you will be able to access both layers directly.

## Aether

We would also like to (re)introduce Aether.

Some of you may remember when we used "hxtools" with OpenFL, struggling to find a name that was suitably generic. From the start, the command-line tools we develop have not been designed only for OpenFL, or even Lime. As more projects are emerging which may benefit from our command-line process, we have decided to come up with a new name that properly establishes the tools on their own.

We believe the quality of IDE support improves when each new library does not use its own new command-line tools. Haxe development more than just the Haxe compiler, in order to properly support multiple target platforms, particularly mobile, there is a big benefit to have tools that understand the asset pipeline, project dependencies and other complex relationships.

Why "Aether"? Aether was a word chosen in old cultures to describe the "upper" sky, or heavens. It was also used to describe the mythic "fifth element" that could build powerful other-worldly items. We also realized after choosing the name that "the Aether" plays a central role in the "Thor: The Dark World" movie, as well as appearing as "ether" in many video games, of course. 

## How Can I Help?

The first thing that you can do to help is to answer the questions of beginners, and help field issues as we work to develop OpenFL "next".

There are many issues that would be better resolved in the new code than in the old, and some have been resolved already. If there is a truly showstopping bug that is present in the current release, please help us know so we can look at doing a patch release in the meantime.

A huge THANK YOU to all of our Patreon supporters! Your contributions are helping fuel all this work. To help support our work in Lime, OpenFL and Aether, please support us at [http://www.patreon.com/openfl](http://www.patreon.com/openfl), or contact us directly.

If you are developer and are exciting about Lime, OpenFL or Aether, then there are ways that you may be able to help develop new features and bring us closer to release. Contact us if you would like to join the Slack chat community where we collaborate on Lime and OpenFL development.

## Timeline

The plan is to release limited alpha versions of OpenFL and Lime fairly soon, after a few more development milestones are finished, then a full release will occur likely in the fall, alongside the current release versions as we continue to ensure stability for a full transition. Due to the nature of these changes, the transition officially may occur, but in parallel, expect in-progress releases in the next few months.

## What About Consoles?

Console support (Wii U, PS4, XBox One, etc) is one reason for the Lime "next" architecture. In the future, expect a "console" render context that supports the upcoming console platform targets. Aether has already been updated with support for external platform targets, to enable the build code to remain safely under NDA, in accordance with platform-holder agreements.

As we continue to make strides in this area, the flexibility of the Lime API will be essential. For example, 3DS and Wii U support will require multiple windows, and other console features will find their way into Lime, and as appropriate, OpenFL will have Flash metaphors for them (though the Lime API will always be available directly).

The first console platforms may be in the fall release for OpenFL, with more to come. Thanks to the partnership we have for console development, subsequent consoles should be supported quickly after the first one.
