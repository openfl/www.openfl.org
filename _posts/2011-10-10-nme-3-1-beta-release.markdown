---
layout: post
status: publish
published: true
title: NME 3.1 Beta Release
author: admin
author_login: admin
author_email: joshua@joshuagranick.com
wordpress_id: 14
wordpress_url: http://www.haxenme.org/blog/?p=14
date: 2011-10-10 20:20:20.000000000 -07:00
---
Over the past few weeks, we have been working to improve NME and extend what you can do with the framework.

Development on the next final release of NME continues, but we wanted to share this update so you can enjoy the improvements today (without checking out from the repository).

If you have NME installed, you can download the beta update <a href="http://www.haxenme.org/download_file/view/81/82/">here</a>. Extract it to a directory on your system, then run "haxelib dev nme (path where you extracted the update)" with a command-prompt or terminal. If you do not have NME installed, follow the instructions on the <a href="/developers/get-started">Get Started</a> page.

There have been more than 100 commits to our repository since NME 3.0.1 was first released on haxelib. Here are some highlights that are included in this update:
<ul>
	<li>Added HTML5 support with <a href="http://jeash.com/" target="_blank">Jeash</a></li>
	<li>Added <em>nme.Assets</em>&nbsp;so you can access fonts, bitmaps, sounds, byte files and text files across all targets, strongly-typed</li>
	<li>Added support for using the "nme" package for all classes, improving consistency and code-completion support</li>
	<li>Improved the JNI interaction between NME and Android</li>
	<li>Improved support for <em>nme.net.SharedObject</em>, enabling an easy save API for Flash, Neko and C++ targets</li>
	<li>Added support for embedding more WAV and TTF types in Flash</li>
	<li>Added <em>build</em>, <em>run</em>&nbsp;and <em>test</em>&nbsp;support to the install-tool for iOS. Now it is possible to automatically build and launch applications in the iOS simulator</li>
	<li>Added Android certificate support for signing release builds for the Android Market</li>
	<li>Added <em>nme.system.Capabilities</em> for Neko and C++ targets so you can elegantly scale for devices that have different pixel densities</li>
	<li>Improved support for NME extensions so that you can use custom C, C++ or Objective-C code even more easily</li>
</ul>
