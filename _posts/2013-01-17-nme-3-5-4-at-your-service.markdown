---
layout: post
status: publish
published: true
title: NME 3.5.4, At Your Service
author: admin
author_login: admin
author_email: joshua@joshuagranick.com
excerpt: ! "NME 3.5.4 is here and happy to help.\r\n\r\nWe have focused primarily
  on stability and compatibility for this release. As a result, the command-line tools
  should older NME project files more thoroughly, and a variety of minor issues with
  the tools have been resolved.\r\n\r\nWe have improved the sleep time for SDL targets,
  which includes Windows, Mac, Linux, BlackBerry and webOS. NME projects should be
  able to idle more often, freeing up CPU cycles."
wordpress_id: 153
wordpress_url: http://www.nme.io/blog2/?p=153
date: 2013-01-17 01:21:14.000000000 -08:00
---
NME 3.5.4 is here and happy to help.

We have focused primarily on stability and compatibility for this release. As a result, the command-line tools should older NME project files more thoroughly, and a variety of minor issues with the tools have been resolved.

We have improved the sleep time for SDL targets, which includes Windows, Mac, Linux, BlackBerry and webOS. NME projects should be able to idle more often, freeing up CPU cycles.<a id="more"></a><a id="more-153"></a>

We have been improving the HTML5 target, including new support for glyph selection when embedding your fonts and fixing notable bugs, such as the occasional "disappearing DisplayObject" when rotating, the momentary flicker when creating some Bitmaps and we improved the z-order handling to address some stacking issues.

NME 3.5.4 adds a new command, "nme create", that will let you generate NME sample projects or create new empty projects. "nme create PiratePig", for example, will copy Pirate Pig to the current directory, since NME is usually installed in a directory that is not ideal for building projects. "nme create project" can create empty projects based an included template, with optional support for setting the package name and company name, like "nme create project 'my.cool.Project' 'My Cool Company'"

You can download the full installer for your platform at http:&#47;&#47;www.nme.io&#47;download

Thank you for your support, and enjoy!
