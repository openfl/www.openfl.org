---
layout: post
status: publish
published: true
title: OpenFL Meets Lime
author: admin
author_login: admin
author_email: joshua@joshuagranick.com
excerpt: ! "Years ago, we worked on a project that many of you know, called NME. The
  goal of NME was to build a way to make it simple to use Haxe for native mobile and
  desktop applications. Over time, NME continued to develop better platform support,
  new features and more intelligent command-line tools, even crossing the line to
  unify C++, Flash and JavaScript builds under the same API.\r\n\r\nIn May of this
  year, we introduced OpenFL, the next evolution of these goals. Similar to NME (and
  leveraging the same codebase), OpenFL was designed to bring high-quality games and
  applications to the web, mobile and desktop. Unlike NME, OpenFL was designed for
  greater emphasis on the Flash API (which NME already mirrored), as well as a renewed
  focus on maintaining feature parity and stability across each platform."
wordpress_id: 261
wordpress_url: http://www.openfl.org/blog2/?p=261
date: 2013-12-18 20:25:38.000000000 -08:00
---
Years ago, we worked on a project that many of you know, called NME. The goal of NME was to build a way to make it simple to use Haxe for native mobile and desktop applications. Over time, NME continued to develop better platform support, new features and more intelligent command-line tools, even crossing the line to unify C++, Flash and JavaScript builds under the same API.

In May of this year, we introduced OpenFL, the next evolution of these goals. Similar to NME (and leveraging the same codebase), OpenFL was designed to bring high-quality games and applications to the web, mobile and desktop. Unlike NME, OpenFL was designed for greater emphasis on the Flash API (which NME already mirrored), as well as a renewed focus on maintaining feature parity and stability across each platform.<a id="more"></a><a id="more-261"></a>

Though the majority of developers have been excited about OpenFL, some have been hesitant because although they loved NME, it was not because it mirrored the Flash API.

We believe the Flash API is an incredible way to build games and applications, which is why we built OpenFL. There are many reasons why the Flash API has become the industry standard for 2D games development. It is a powerful way to get going, fast.

On the other hand, we also want to support the efforts of others who are exploring new, alternative ways to develop games and applications. We are now positioned to share the command-line tools and the native backend of OpenFL among multiple, different Haxe projects. We believe that together, with shared goals for a stable, fast backend for native platform support as well as for powerful, intuitive build tools, we can help push the developer ecosystem forward.

As of today, the C++ that powers OpenFL on native desktop and mobile platforms, as well as the command-line tools, are a part of a new project (which has been in co-development since June) called Lime.

The Haxe code and file templates that make OpenFL look and feel the way that it does continue to live in the "openfl", "openfl-native" and "openfl-html5-dom" projects. If you have an "openfl" command, things should work as they did before, but for new installs we are moving to a "lime" command, which are the same tools you love, now with a different name on the door. We do not expect to make any further changes to this.

Lime is still under development, so it is not fully ready to be used directly, but Lime exposes a more fundamental API for rendering, sound and input that will be more suitable for lower-level development, or powering new frameworks. OpenFL and Lime are both powered by the same tools, as well as common support for native extensions.

We believe that OpenFL is the best choice for the majority of developers, but by creating Lime, we look forward to sharing our work with the greater Haxe development community. Just as OpenFL leverages Lime to target native platforms, there are other new frameworks coming that will do the same.

Our desire is to help build the best tools so you can focus on your creative vision, enjoy your work and provide for your family. By opening our code to greater collaboration and support by the community, we feel that this is best for everyone. It should also make experimentation safer, so you don't have to reinvent platform support or go without mature command-line tools when you try something new.

In the next post, Sven Bergstr&ouml;m will share more of the design goals that have gone into creating Lime, as well as how it works.
