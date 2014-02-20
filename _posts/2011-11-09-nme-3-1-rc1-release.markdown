---
layout: post
status: publish
published: true
title: NME 3.1 RC1 Release
author: admin
author_login: admin
author_email: joshua@joshuagranick.com
wordpress_id: 30
wordpress_url: http://www.haxenme.org/blog/?p=30
date: 2011-11-09 22:43:41.000000000 -08:00
---
The next release is here: NME 3.1 RC1 is available for download on the <a href="http:&#47;&#47;www.haxenme.org&#47;developers&#47;get-started">Get Started page<&#47;a>.

In addition to the new features and stability improvements from previous releases, RC1 (most notably) adds two exciting improvements:
<ul>
	<li>drawTiles now supports scale, alpha, RGB and smoothing<&#47;li>
	<li>"nme setup" will automate the install for supporting tools<&#47;li>
<&#47;ul>
NME uses OpenGL to render for most targets. In order to improve rendering performance, you can use the drawTiles API to send a batch draw command to OpenGL at once. In addition to the position and ID of the tile to draw, you can now support image batches with unique scale, alpha or RGB for each tile.

One of NME's greatest strengths is that it relies on the standard tools for each platform. This improves compile times, runtime performance and makes it easier to customize your builds. However, it can be difficult to get all the tools in place, especially for Android.

This release improves the command-line tools significantly. First, you can call "nme setup" to install a script so you don't have to type "haxelib run" to access NME anymore:
<pre escaped="true" lang="bash">
haxelib run nme setup<&#47;pre>
Then you can use "nme setup <target>" to automatically download, install and configure the tools required to use one of NME's targets. For example:
<pre escaped="true" lang="bash">
nme setup webos
Download and install the HP webOS SDK? [y&#47;n&#47;a] ? y
Downloading HP_webOS_SDK-Win-3.0.4-669-x64.exe...
8739050&#47;283305624 (3%)<&#47;pre>
The "setup" command is available for Windows, Mac and Linux, for all targets except for Flash.
