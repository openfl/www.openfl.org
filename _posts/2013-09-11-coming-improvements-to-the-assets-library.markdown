---
layout: post
status: publish
published: true
title: Coming Improvements to the Assets Library
author: admin
author_login: admin
author_email: joshua@joshuagranick.com
excerpt: ! "In version 1.1.0 of OpenFL, we have some major changes coming to the way
  assets are handled, to give you even better control over your files.\r\n\r\nFirst,
  openfl.Assets is being upgraded to multiple \"asset libraries.\"\r\n\r\nAn asset
  library can provide BitmapData, ByteArray, Font, MovieClip, Sound or String instances,
  just as openfl.Assets has done to-date. Now you can provide your own implementation
  of where your files come from."
wordpress_id: 188
wordpress_url: http://www.openfl.org/blog2/?p=188
date: 2013-09-11 23:43:50.000000000 -07:00
---
In version 1.1.0 of OpenFL, we have some major changes coming to the way assets are handled, to give you even better control over your files.

First, openfl.Assets is being upgraded to multiple "asset libraries."

An asset library can provide BitmapData, ByteArray, Font, MovieClip, Sound or String instances, just as openfl.Assets has done to-date. Now you can provide your own implementation of where your files come from.<!--more--><a id="more-188"></a>

For example, you could wrap a JSON data file, turning it into an asset library. Now you can use "Assets.getBitmapData ('mydata:myimage.png');" instead of doing the loads by hand. Bitmap caching has also been turned into a smarter "asset cache", allowing simple clearing of a single or all data.

Asset libraries are going to have the ability to access synchronous as well as asynchronous assets, using "load__" versions of the current calls, such as "Assets.loadBitmapData" compared to "Assets.getBitmapData". This will improve flexibility, where you want the convenience of the integrated asset system, but do not want to preload your assets in advance.

Even further, OpenFL is getting a new system for "library handlers." Simply put, a library file could be a SWF, XFL, or any other complex data structure. Instead of anticipating each new format, the OpenFL tools are going to support custom third-party handlers, to process and return the asset structure, defines and other data needed to support that data type at runtime.

Here is an example:
<pre><haxelib name="swf" />
<library path="assets/library.swf" /></pre>
If the "swf" library were to register itself as a handler for *.swf library types, it has an opportunity to be called during the OpenFL tools build process, and tell OpenFL how to handle the file, seamlessly.

Accessing the library in the project would then be this simple:
<pre>Assets.loadLibrary ("library", function (_) {
&nbsp; &nbsp;
&nbsp; &nbsp;addChild (Assets.getMovieClip ("library:MySymbol"));
&nbsp; &nbsp;
});</pre>
We look forward to finishing these features and sharing them with you soon :)
