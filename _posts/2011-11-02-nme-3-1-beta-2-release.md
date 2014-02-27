---
layout: post
title: NME 3.1 Beta 2 Release
date: 2011-11-02 22:30:32.000000000 -07:00
---
We are happy to announce the second beta release of NME 3.1, including even more improvements and new features than before. Thank you, everyone, for your excitement, participation and involvement as we all work together to make NME even stronger!

You can download the new release, <a href="http://www.haxenme.org/developers/get-started">here</a>.

Here are some key highlights since beta 1:
<ul>
	<li>Added (experimental) support to cross-publish Neko applications</li>
	<li>Improved rendering calls, like drawTriangles</li>
	<li>Added auto-documentation, using haxedoc</li>
	<li>Updated the XCode project template for iOS 5 and OS X Lion</li>
	<li>Updated the Android build process for the newest Android SDK</li>
	<li>Added a Flash publishing template for Opera widgets</li>
	<li>Added a Flash publishing template for Chrome apps</li>
	<li>Added multi-touch for webOS</li>
</ul>
NME supports two technologies, C++ and Neko, for desktop applications. If you choose "windows", "mac" or "linux" as your target when publishing, NME will default to C++ if that is your current platform, otherwise it used to fail. This release includes experimental support to publish for a desktop platform other than your own, using Neko.

If you are interested in creating documentation for your project, this version has support for leveraging haxedoc. The first step is to build your project with an added "-xml" flag, which will generate XML type information for your classes. Next, you can use the "document" command to create documentation for your API

{% highlight bash %}
haxelib run nme document MyProject.nmml
haxelib run nme document MyProject.nmml windows
{% endhighlight %}

By default, it will look for XML definitions for all targets, and attempt to merge them together. Currently, this will not work for NME core classes. However, if you have multiple definitions, you can specify which one you would like haxedoc to use by setting the platform target.

If you would like to control where documentation is generated, you can set DOCS_DIR in your NMML project file, or to filter which class or package names are included, you can set DOCS_FILTER as well. To control your file output, you can use a custom "template.xml" in your docs directory. For more information on the format, visit <a href="http://haxe.org/doc/haxedoc" target="_blank">this page</a>.

The Flash target supports multiple templates for publishing. If you add "-web" when you compile, an HTML file that uses SWFObject to embed your application will be generated for you. This release adds "-opera" and "-chrome" as valid templates. The Opera publishing template will create a functional Opera Widget, which installs and acts like a regular desktop application. The Chrome template does not generate a completed CRX file (yet), but generates the files you need to use the "Pack Extension" option from Google Chrome to package as a Chrome app you can distribute.
