---
layout: post
status: publish
published: true
title: Announcing OpenFL 1.1 (Beta)
author: admin
author_login: admin
author_email: joshua@joshuagranick.com
excerpt: ! '<p>Today, we are announcing the OpenFL 1.1 beta, available now.<&#47;p>


  <p>The team has been hard at work preparing for the next release, and now it is
  time to share with you some of the progress we have made towards the next iteration
  of OpenFL.<&#47;p>

'
wordpress_id: 197
wordpress_url: http://www.openfl.org/blog2/?p=197
date: 2013-09-25 04:02:13.000000000 -07:00
---
<p>Today, we are announcing the OpenFL 1.1 beta, available now.<&#47;p>

<p>The team has been hard at work preparing for the next release, and now it is time to share with you some of the progress we have made towards the next iteration of OpenFL.<&#47;p>
<a id="more"></a><a id="more-197"></a>

<h3>New Windowing<&#47;h3>
<p>The next version of OpenFL includes SDL 2 as a significant upgrade over the SDL 1.2 backend we used before. SDL handles the creation of windows, resizing, input events (such as mice, multi-touch, game controllers, keyboards) and other fundamental components to running on the desktop. This new version should improve the experience for desktop platforms, especially for Mac OS X, which resizes more smoothly and now has full support for 64-bit systems.<&#47;p>

<p>In addition to other hidden improvements in SDL 2, the OpenGL hardware context is now retained when resizing a window, or toggling fullscreen. If you are a developer using the OpenGLView API, this should be a welcome change.<&#47;p>

<p>Since SDL is a cornerstone to our support for Windows, Mac and Linux, we encourage you to report any feedback that you may find, particularly testing against older or more unusual systems, so we can be sure that we have not introduced any unwanted regressions by making this change.<&#47;p>
<h3>New Audio<&#47;h3>
<p>We are also introducing support for OpenAL audio on Windows, Mac, Linux and Android. We have found OpenAL to be much more resilient in testing, compared to SDL_mixer we used in the past for desktop platforms. OpenAL on Android should automatically use either lower-level Android sound APIs or OpenSL ES, depending on the version of Android. We have great expectations for continued improvements in the sound space.<&#47;p>

<p>This beta release does not streaming audio support, which should be available for the final release of OpenFL 1.1. The beta release will sounds into memory before playing. We are also interested in your feedback, comparing this new audio backend to your previous experiences, as well as any constructive input you have.<&#47;p>

<p>We are discontinuing support for the MP3 audio format (<em>for more information, please visit <a href="http:&#47;&#47;www.openfl.org&#47;blog&#47;2013&#47;09&#47;18&#47;to-mp3-or-not-to-mp3&#47;" target="_blank">To MP3, or not to MP3?<&#47;a>)<&#47;em><&#47;p>
<h3>Improved Assets<&#47;h3>
<p>You can read more about the improved asset library, <a href="http:&#47;&#47;www.openfl.org&#47;blog&#47;2013&#47;09&#47;12&#47;coming-improvements-to-the-assets-library&#47;" target="_blank">here<&#47;a>.<&#47;p>
<h3>iOS 7 and Xcode 5 Support<&#47;h3>
<p>OpenFL 1.1 offers improved support for iOS, including the new iOS 7.0 release and the Xcode 5 developer tools. In order to take advantage of the new Xcode, you will need to install a beta version of HXCPP as well.<&#47;p>

<p>By default, OpenFL will now generate launch images for you automatically, to take advantage of the full resolution of the iPhone 5. The developer tools will also handle the new iOS 7.0 icon sizes as well. If you would prefer to use your own launch images, you may do so with the "splashScreen" tag in your project file:<&#47;p>

<pre lang="xml" escaped="true"><splashScreen path="to&#47;image.png" width="1024" height="768" &#47;><&#47;pre>

<p>We have made improvements to the deployment for iOS simulators and devices, and have added support for customize the code sign identity for your project. You may do this using a "certificate" tag in your project file:<&#47;p>

<pre lang="xml" escaped="true"><certificate identity="iPhone Distribution" if="ios" &#47;><&#47;pre>

<p>You may control the visibility of the iOS 7.0 status bar, using the "fullscreen" property of the "window" tag in your project file. The default is true for mobile platforms, but you can set it to false if you prefer to include it in your application:<&#47;p>

<pre lang="xml" escaped="true"><window fullscreen="false" if="ios" &#47;><&#47;pre>

<h3>ARMv7 Support for Android<&#47;h3>

<p>This beta release defaults to ARMv7 support on Android, instead of the older ARMv5 standard. Google does not release official statistics on the processor architecture of Android devices, but based on available information, we feel it may be time to take advantage of the minor but measurable performance boost of targeting a modern architecture.<&#47;p>

<p>If you would like to compile ARMv5 binaries for Android (which are compatible with ARMv6 and newer devices as well), you may add an "architecture" tag to your project:<&#47;p>

<pre lang="xml" escaped="true"><architecture name="armv5" if="android" &#47;><&#47;pre>

<h3>...and more<&#47;h3>

<p>There are too many improvements for us to list them all in one post. We are excited about this significant release, and continue to look forward to working together to create new and exciting content!<&#47;p>

<h3>Installation<&#47;h3>

<p>You can download the following beta versions of OpenFL libraries, here:<&#47;p>
<ul>
	<li><a href="http:&#47;&#47;www.openfl.org&#47;files&#47;2113&#47;8008&#47;1832&#47;openfl-1.1.0-beta.zip">openfl<&#47;a><&#47;li>
	<li><a href="http:&#47;&#47;www.openfl.org&#47;files&#47;2013&#47;8008&#47;1832&#47;openfl-tools-1.1.0-beta.zip" target="_blank">openfl-tools<&#47;a><&#47;li>
	<li><a href="http:&#47;&#47;www.openfl.org&#47;files&#47;2713&#47;8008&#47;1831&#47;openfl-native-1.1.0-beta.zip" target="_blank">openfl-native<&#47;a><&#47;li>
	<li><a href="http:&#47;&#47;www.openfl.org&#47;files&#47;7613&#47;8008&#47;1832&#47;openfl-html5-1.1.0-beta.zip" target="_blank">openfl-html5<&#47;a><&#47;li>
	<li><a href="http:&#47;&#47;www.openfl.org&#47;files&#47;7713&#47;8008&#47;1831&#47;hxcpp-3.0.3-beta.zip" target="_blank">hxcpp<&#47;a><&#47;li>
<&#47;ul>
<p>After you have downloaded the ZIP packages, run:<&#47;p>
<pre lang="bash" escaped="true">haxelib local openfl-1.1.0-beta.zip
haxelib local openfl-tools-1.1.0-beta.zip
haxelib local openfl-native-1.1.0-beta.zip
haxelib local openfl-html5-1.1.0-beta.zip
haxelib local hxcpp-3.0.3-beta.zip<&#47;pre>
<p>Be aware, that if you are using a development version of any of these libraries, you may need to run "haxelib dev <name of library>" to disable your development directory, or you may choose to update and rebuild whichever component you are using from the source.<&#47;p>
<h3>Feedback<&#47;h3>
<p>We welcome your feedback, and look forward to the final release!<&#47;p>
