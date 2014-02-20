---
layout: post
status: publish
published: true
title: NME 3.2 Beta Release
author: admin
author_login: admin
author_email: joshua@joshuagranick.com
excerpt: ! "We are very happy to announce the first beta release of NME 3.2!\r\n\r\nHere
  is a quick list with some of the changes which have occurred since our last release:\r\n<ul>\r\n\t<li>Android
  applications will install to external storage (SD card) by default<&#47;li>\r\n\t<li>Improved
  support for special directories on all targets<&#47;li>\r\n\t<li>Added built-in
  support for SWF assets (Flash and C++ targets)<&#47;li>\r\n\t<li>Created a new \"display\"
  command for improved IDE support<&#47;li>\r\n\t<li>Revised and improved the NMML
  file specification<&#47;li>\r\n\t<li>Addressed \"disappearing object\" issues with
  the software renderer<&#47;li>\r\n\t<li>Added support for \"template\" files, overwriting
  the default files for each target<&#47;li>\r\n\t<li>URLLoader now supports HTTP
  POST and SSL on C++ targets<&#47;li>\r\n\t<li>Added \"mobile\", \"web\" and \"desktop\"
  defines, for simplicity<&#47;li>\r\n\t<li>Tilesheet.drawTiles now includes compatibility
  for use in Flash<&#47;li>\r\n\t<li>Joystick support added for Windows, Mac and Linux<&#47;li>\r\n\t<li>Improved
  tessellation for primitives in the hardware renderer<&#47;li>\r\n\t<li>Made it possible
  to add additional iOS frameworks through NMML<&#47;li>\r\n<&#47;ul>\r\nWe have been
  hard at work improving NME for this release, and are very proud of how the framework
  is continuing to develop. Please keep your eyes open for any regressions, and if
  you have feedback on any of the changes (like the new joystick API or the new NMML
  specification) please let us know so we can consider the changes before the final
  release.\r\n<h3><a href=\"http:&#47;&#47;www.haxenme.org&#47;files&#47;7613&#47;2865&#47;8153&#47;NME-3.2-Beta.zip\">Download<&#47;a>
  (ZIP - 13.6 MB)<&#47;h3>\r\nYou can install the beta by running \"haxelib test NME-3.2-Beta.zip\"
  using a command-prompt or terminal. You can switch back to the last release at any
  time by running \"haxelib set nme 3.1.1\" if you want to.\r\n\r\n<em>(Continue reading
  for more details about these changes and improvements.)<&#47;em>"
wordpress_id: 51
wordpress_url: http://www.haxenme.org/blog/?p=51
date: 2012-02-08 00:46:20.000000000 -08:00
---
We are very happy to announce the first beta release of NME 3.2!

Here is a quick list with some of the changes which have occurred since our last release:
<ul>
	<li>Android applications will install to external storage (SD card) by default<&#47;li>
	<li>Improved support for special directories on all targets<&#47;li>
	<li>Added built-in support for SWF assets (Flash and C++ targets)<&#47;li>
	<li>Created a new "display" command for improved IDE support<&#47;li>
	<li>Revised and improved the NMML file specification<&#47;li>
	<li>Addressed "disappearing object" issues with the software renderer<&#47;li>
	<li>Added support for "template" files, overwriting the default files for each target<&#47;li>
	<li>URLLoader now supports HTTP POST and SSL on C++ targets<&#47;li>
	<li>Added "mobile", "web" and "desktop" defines, for simplicity<&#47;li>
	<li>Tilesheet.drawTiles now includes compatibility for use in Flash<&#47;li>
	<li>Joystick support added for Windows, Mac and Linux<&#47;li>
	<li>Improved tessellation for primitives in the hardware renderer<&#47;li>
	<li>Made it possible to add additional iOS frameworks through NMML<&#47;li>
<&#47;ul>
We have been hard at work improving NME for this release, and are very proud of how the framework is continuing to develop. Please keep your eyes open for any regressions, and if you have feedback on any of the changes (like the new joystick API or the new NMML specification) please let us know so we can consider the changes before the final release.
<h3><a href="http:&#47;&#47;www.haxenme.org&#47;files&#47;7613&#47;2865&#47;8153&#47;NME-3.2-Beta.zip">Download<&#47;a> (ZIP - 13.6 MB)<&#47;h3>
You can install the beta by running "haxelib test NME-3.2-Beta.zip" using a command-prompt or terminal. You can switch back to the last release at any time by running "haxelib set nme 3.1.1" if you want to.

<em>(Continue reading for more details about these changes and improvements.)<&#47;em><a id="more"></a><a id="more-51"></a>
<h3>External Storage on Android<&#47;h3>
NME applications for Android tend to be larger than pure Java applications, because NDK applications on Android need to include many of their own libraries, and do not benefit from the JRE that is pre-installed on each Android device.

For this reason, we have switched NME to create applications which will install to the user's SD card by default. Since space is often limited on the actual device, we hope this should lead to a much better experience for your users.

This change required a move from Android API 7 to Android API 8. Applications are still compatible with the same versions of Android, but never versions will benefit from this change. If you have issues compiling applications, make sure you have API 8 installed from the Android SDK Manager.
<h3>SWF Support<&#47;h3>
It's true, NME 3.2 adds native SWF support!

While Actionscript bytecode is not interpreted, MovieClips, frame labels, tweens, fonts, images, shapes and other features of the SWF format are supported -- not only on Flash, but for C++ targets as well.

If you include a "library" tag in your NMML project file, like <library path="my.swf" &#47;>, NME will generate classes automatically, based on the exported symbol classes found in the SWF, so if your SWF contains "Square" and "com.my.SymbolClass", these will both be available as Haxe classes you can use to instantiate these symbols.

In order to use this feature, install "swf" from haxelib. If you'd like to check it out, feel free to visit <a href="http:&#47;&#47;www.joshuagranick.com&#47;blog&#47;2012&#47;01&#47;24&#47;embedding-swfs-makes-nme-meme-friendly&#47;" target="_blank">this blog post<&#47;a> for an example project using this feature.
<h3>Using the "Display" Command<&#47;h3>
One of the issues that has faced developers who wish to integrate NME into a new IDE, is knowing which classpaths or other flags an NME project is using. The "display" command is a step forward in providing better support for IDEs and other development tools.

If you run "nme display project.nmml flash", you will get HXML for the project, if you are targeting Flash. Of course, you can substitute "flash" for any other target. Especially for IDEs which already enjoy Haxe support, which is usually based on HXML file completion, this provides an easy option to get completion for NME projects, without having to write additional files.

You can also pass "-nmml" to receive NMML output instead. Since the NMML specification is relatively robust, this returns a simplified NMML file which does not include any other includes, conditional "if" or "unless" attributes, or other features which may be complicated to perfectly mirror. This is ideal if you need to read which assets, haxelibs, defines or other values may be present for the target NME project.
<h3>Improved NMML Specification<&#47;h3>
As we approach future releases, and as the command-line tools have grown over the last two releases, it seemed like a good time to visit the NMML specification, and see if there were ways to make improvements, and help make sure the format is clear and concise.

All of the previous names are still supported, so this is not a breaking change, but in the samples, documentation and improvements to come, you'll begin to see this new format.

For a full overview of the new specification, you can open "tools&#47;command-line&#47;spec.nmml" from the NME directory, or <a href="https:&#47;&#47;gist.github.com&#47;1763850" target="_blank">check it out online<&#47;a>.
<h3>"Template" Files<&#47;h3>
There is a new <template path="" &#47;> node you can use in your NMML project files, which specifies a file or directory to be included as a "template" file. You can also use a standard <assets &#47;> node, if you prefer, and set the type attribute to "template".

Template files will be copied last, before compiling a project. Instead of being placed inside an assets directory, depending on the target, it will be placed at an absolute location within the target build directory. Template files will also be processed as templates, similar to the files that used by default when generating projects.

You can use this to override any of the files NME generates for each target, including, but not limited to manifest files on Android, plist files on iOS, or other files you may wish to customize.
<h3>"mobile", "web" and "desktop" Defines<&#47;h3>
In order to simplify conditionals in your NMML files, we have added new "mobile", "web" and "desktop" defines which you can use, instead of having to specify each target by name. For example, if you want your application to be 1024 x 768 on desktop targets, you can use <window width="1024" height="768" if="desktop" &#47;>, or if you want to use a different frame rate when running on the web, you can specify <window fps="30" if="web" &#47;>
<h3>Tilesheet.drawTiles<&#47;h3>
One of the drawbacks to using graphics.drawTiles was that it only worked in C++. Even for testing, it was necessary to create a fallback render method when targeting Flash or HTML5. Now there is a new "drawTiles" method on the nme.display.Tilesheet class, which you can use instead of referencing graphics.drawTiles directly.

This includes rendering support for Flash, provided using drawTriangles. It is not as fast as some of the other rendering methods in Flash, but especially during development, it should offer a layer of compatibility for more targets. HTML5 support in Jeash will also be provided in the future through this API.
<h3>Joystick Support<&#47;h3>
Yes! NME now has support for joystick and gamepad devices when targeting Windows, Mac or Linux. For more information on the new API, be sure to check out <a href="http:&#47;&#47;www.joshuagranick.com&#47;blog&#47;2012&#47;01&#47;25&#47;joystick-and-gamepad-support-for-nme&#47;" target="_blank">this blog post<&#47;a>, which also includes an example project.
