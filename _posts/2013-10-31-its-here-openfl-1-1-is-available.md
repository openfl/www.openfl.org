---
layout: post
title: It's Here! OpenFL 1.1 is Available!
date: 2013-10-31 16:27:44.000000000 -07:00
---
We are excited to introduce our newest (and greatest) release yet, OpenFL 1.1. I know that you've been waiting for this one, so before we get started on all the features and details, here's how you upgrade:

```bash
haxelib install openfl
haxelib run openfl setup
```

Great! With that out of the way, let's dive deeper into what OpenFL 1.1 changes, and how it helps make the platform even stronger.<!--more--><a id="more-235"></a>
<h3>New Desktop Windowing</h3>
We talked at length in our previous OpenFL 1.1 beta post, but the gist is that we have completely overhauled and replaced our windowing for all the desktop platforms -- Windows, Mac and Linux. This ensures a better experience, so your application can be a first-class citizen on each platform, and helps bring new fixes to you, faster, by being on a modern library that's being updated daily, we can make sure that we support each new change the platforms throw at us.
<h3>Brand-New Audio</h3>
We also overhauled most of the audio, so now Windows, Mac, Linux, iOS and Android all share common sound code for solid, stable, reliable sound, so that sound on OpenFL can become as great as the rendering has been. This new audio backend supports WAV and OGG for now, but we're open to hear if there are other cross-platform audio standards you want us to support. We know a lot of people rely on MP3, but there are good reasons why we decided not to include it.
<h3>Tons of Android Changes</h3>
In addition to brand-new audio (which now uses hardware accelerated APIs on Android) we have made a bunch of improvements to the Android target. We have made changes to improve our support for Jelly Bean, joystick support is enabled out-of-the-box (when available on the device), we've made loads of changes and improvements for performance, stability when suspending and resuming, virtual keyboard support and most of all, we have a new architecture for handling Android extensions, using Android library projects to merge AndroidManifests, resources, activities and reference the new Java-based Android extension API.
<h3>Better iOS Support</h3>
Now OpenFL has support for iOS 7 and improvements to better support Xcode 5. Retina resolutions are enabled by default, and now you can control the signing identity when doing command-line builds. We are continuing to make improvements for extensions and to continue to support the platform.
<h3>Asset Improvements</h3>
openfl.Assets has a received an overhaul, too, now allowing you to access assets that are immediately accessed (synchronous) as well as assets which may take some time to be available (asynchronous). There's a new "AssetLibrary" system as well, so you can load your asset data into openfl.Assets, to simplify accessing local or remote assets. You can also control how the files are accessed, which is how our new SWF library seamlessly provides access to Bitmap and MovieClip assets out of your SWF files.
<h3>New Project File Format</h3>
We experimented with a Haxe-based project file format in the past, but we have refined it for this release. Instead of creating XML-based project files, you can create a new Haxe-based project file, using the "hxp" file extension. A "project.hxp" file can do all the things an ordinary XML project can do, but even more because you can handle complex switching logic, execute your own processes during the build, or even iterate through all your assets before OpenFL gets to see them. HXP files are handled seamlessly in the command-line tools, for all existing commands.
<h3>...and Even More!</h3>
There are all kinds of other fixes and improvements, including a hosted a local web server when testing HTML5 content, easier switching of the HTML5 backend, "AbstractFont" for custom Haxe-based fonts for native platforms, improvements for OS X Mavericks and much faster build time when managing a lot of assets.

Together with the brand-new OpenFL Marketplace, we are excited to share OpenFL 1.1 with you, to make the best cross-platform framework even better!
