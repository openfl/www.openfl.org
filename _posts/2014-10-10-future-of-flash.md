---
layout: post
title: An Open Letter on the Future of Flash
---

## This Week at Adobe MAX

Ajay Shukla, Senior Product Manager for Flash Professional, let me help present "What's New and Upcoming in Flash Professional CC". If you were not able to hear the session, you can stream it [here](http://max.adobe.com/sessions/max-online/#/video/567).

Ajay and his team added support for "custom platforms," which is very exciting! I demonstrated OpenFL publishing Flash assets from Flash Professional to C++, Flash and HTML5 targets.

![Flash Professional]({{ site.baseurl }}/blog/assets/Flash-Pakka.png)

![FlashDevelop]({{ site.baseurl }}/blog/assets/FD-Pakka.png)

_Thanks again to [Pakka Pets](http://pakkapets.com) for use of their assets for the demo!_

## Flash is Not Flash Player

To many users, "Flash" still is a browser plugin, but for designers, developers and creative studios, Flash has always been a rich animation/layout tool, as well as (for us ActionScript developers) a fast development workflow. The _method of delivery_ has changed over time, but our demand for tools has not changed.

With the Flash CC Custom Platform SDK, using Flash for animation, layout and design is going to remain viable. I applaud Adobe for making Flash Professional more useful to everyone, since we cannot use Flash Player for all target environments anymore.

## The Promise of the "Open Screen Project"

 > Adobe is committed to enabling developers and designers to deliver the richest experiences to the widest audience. With a consistent runtime environment deployed broadly across all devices, developers and designers will be able to distribute content to consumers worldwide, on any device, much more easily than they can today.

The promise of the Open Screen Project remains -- imagine delivering the "richest" experience to the "widest" audience. So long as it is "rich" and "wide", I think most of us would agree that is exciting.

The problem? No single runtime can fully realize the goal. In a supply chain, they use a combinations of men, trucks, boats, airplines and other tools to ship packages across the world. No one mechanism is perfectly suitable for reaching every customer.

This is the same in technology. No one mechanism is perfectly suitable (whether Flash Player, HTML5, native code, virtual machines) because there are limitations -- especially if you want to deliver the "richest" experience.

## Synergy

The other half of the equation is the code. In addition to a unified art pipeline, we need a unified development pipeline to reduce the time to market, and increase the level of innovation in our work. It may sound "out there," but this is possible.

We can create an API that works on Flash, on JavaScript and C++. Where available, it will utilize all the value Adobe poured into the Flash runtime. When it is not, it runs as fast, minimal JavaScript, and when native, it runs even faster as compiled code. I took a renderer from JavaScript, and tried bringing it to a portable language. After compiling back to JavaScript, it performed 10% faster. Machines like machine code sometimes. The C++ performed _much_ faster.

It makes sense to "take your code with you" when a project demands a new target environment.

## What API Should We Use?

Personally, I love the Flash API. It is not perfect (nothing would be), but I think the paradigm matches a 2D paradigm well, and it is a perfect fit for Flash Professional as an editor. The Flash API is an industry-standard, and many, many frameworks and libraries are designed for it. Many other libraries even adopt some of the concepts from Flash, such as "DisplayObject", "Sprite", "Bitmap" and "EventDispatcher". It is common language.

Similar to spoken language, we keep a common set of grammar and standard vocabulary, though new words may be added, and sometimes we stop using some of the older words. So it is with Flash.

## Unite

I believe deeply that this should exist. Life is too short to keep rewriting everything, agreed? In Flash, I built projects in hours, not weeks. I believe that in whatever form, we should have an easy, unified (but not "lowest common denominator") path to development, optimized for 2D. Ideally, this should open doors for us, and not close them.

If I am the only one who feels this way, so be it. However, if other people care as well about having these things, let's speak up. Let's take some action. We should love our tools, we should have fun, we should be able to go from concept to execution as quickly as we want to. We should be able to go home, hug our kids, and rest in a job well done.

## About Me

I am Joshua Granick, the creator of OpenFL. I love my wife and five kids, together we live in Northern California, and try to make other people's lives better through software and some good old-fashioned friendliness.

I volunteer to work on OpenFL because I want to put it into the hands of people that need it, like I needed it five years ago.

## What Now?

If you believe in this goal of a unified environment for development, similar to how Adobe has been unifying the art asset pipeline, let me know. If you have other ideas beyond the Flash API, feel free to explain why.

If you like the Flash API, and you believe we should be able to freely distribute to multiple platforms and technologies, OpenFL has been a way of making this a reality, but it isn't the only way to go about it. I'm open to your thoughts or ideas how we can unify more of the community to help build one great Flash implementation rather than a lot of partial implementations elsewhere.

If you are interested in the OpenFL project, it is quite robust, but not yet perfect. We can use help with documentation, with code, or you can help support the project by giving to us on [Patreon](http://patreon.com/openfl). OpenFL has been used to build the critically-acclaimed, "Game of the Year" Papers, Please. TiVo uses OpenFL to power set-top boxes, Smart TVs and other devices to great user satisfaction, and games using OpenFL have been downloaded millions of times on almost every platform.

We're on the same team, guys. Let's do something awesome together.
