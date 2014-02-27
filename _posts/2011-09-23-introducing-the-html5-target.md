---
layout: post
title: Introducing the HTML5 Target
date: 2011-09-23 17:45:57.000000000 -07:00
---
It has been refreshing to share NME 3 with you, and to feel your excitement as you have gotten an opportunity to publish games or applications to the web, your desktop and (in most cases) your mobile phone or tablet. We are very excited by NME as well, and would love to see it grow.

Many of you have wondered if NME would ever support an HTML5 target, using Javascript and CSS3, Canvas or WebGL instead of Flash or C++. This week we have added support for Jeash, a powerful Haxe framework that maps the Flash API to Canvas, similar to how NME supports C++.

The Haxe community has worked diligently to advance the dream of "every platform" cross-publishing. By supporting Jeash, we hope NME will help advance the vision, and make it even simpler to "write once, run everywhere."

Using the same code for your project, the development builds of NME make it possible to compile, package and test on these targets:

{% highlight bash %}
haxelib run nme test MyProject.nmml windows
haxelib run nme test MyProject.nmml mac
haxelib run nme test MyProject.nmml linux
haxelib run nme test MyProject.nmml ios -simulator
haxelib run nme test MyProject.nmml webos
haxelib run nme test MyProject.nmml android
haxelib run nme test MyProject.nmml flash
haxelib run nme test MyProject.nmml html5
{% endhighlight %}

I hope that you are as excited as we are, while we prepare for the next release of NME.
