---
layout: post
title: OpenFL 1.2 with New Tizen Support
date: 2013-12-10 04:27:45.000000000 -08:00
---
We are happy to announce that OpenFL 1.2 is now available, and includes a brand-new platform target, Tizen!

Tizen is a new device platform, supported by Intel, Samsung, The Linux Foundation and other members of the Tizen Association. Through partnership with OpenFL Technologies, Tizen is helping support our development, so we can continue to create free and open-source software for you.<!--more--><a id="more-257"></a>

OpenFL 1.2 marks a transition, we have a brand-new library we are co-developing called "lime", which we will speak more about in the future. We want to open our codebase to a wider audience, both to collaborate and to also enable further innovation in game frameworks and APIs. As we continue to invest into OpenFL, we are also opening doors to share the build tools and platform support of OpenFL across multiple frameworks.

In addition to Tizen support, we have made specific investment in streaming audio support, as well as other fixes and improvements. You will need some new libraries ("lime" and "lime-tools") for this release, so run "openfl setup" again to be sure that you have everything you need to get going.

Other fixes include better multi-core support for parallel C++ builds, improved support for error output on mobile, we added "Assets.getMusic" for specifically requesting streaming audio (regardless of what is set in your project file), context lost events for Android when using OpenGLView (other platforms retain the GL context during a resize) and other audio fixes.

OpenFL 1.2 is available now on haxelib. Run "haxelib upgrade", and if you are using an out-of-date development library, run "haxelib dev" for those libraries so that you can use the latest release. You can also find more instructions on the <a href="http://www.openfl.org/download">download</a> page.
