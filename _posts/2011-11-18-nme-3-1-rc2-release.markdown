---
layout: post
status: publish
published: true
title: NME 3.1 RC2 Release
author: admin
author_login: admin
author_email: joshua@joshuagranick.com
wordpress_id: 34
wordpress_url: http://www.haxenme.org/blog/?p=34
date: 2011-11-18 06:52:53.000000000 -08:00
---
The final release is getting closer!

A primary focus in this release has been to improve the install process for NME. Special attention has also been given to improve compatibility with OS X Lion and XCode 4.3.

Now there is an installer for NME, based on the Haxe installer, which will install Haxe, Neko, NME, HXCPP and Jeash automatically. Unlike the Haxe installer, each package is contained in the installer, so an internet connection is not required when running the installer.

Once NME has been installed, you should be able to access the NME command-line tools by running "nme" from a command-prompt or terminal. You can use "nme setup <target>" to automatically download and install supporting tools for the desired target.

For more informated, please visit the <a href="http:&#47;&#47;www.haxenme.org&#47;developers&#47;get-started" target="_blank">Get Started<&#47;a> page. If you encounter any issues with the installer or the "nme setup" command, please open an issue on the forums. We want to make sure these are solid for the next release.

If you would prefer not to use the automated installer, there is also an archive available to set up the RC2 release manually.
