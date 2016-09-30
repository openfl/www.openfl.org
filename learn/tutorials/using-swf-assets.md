---
title: Using SWF Assets
---

## Introduction

There is a "swf" library that is designed to enable the use of SWF assets from Flash Professional. It is still in beta, so the quality and supported feature list will continue to improve, but already, the SWF library can enable the use of many kinds of Flash assets.

The SWF library includes two different kinds of support. The "swf" type is compatible with native platforms. It decodes and uses SWF assets at runtime, unzipping and extracting information from a SWF. The second kind is "swflite", designed to extract the information at compile-time.

The "swflite" format is faster and generally than "swf", where the features are equal. The "swf" format currently supports some additional features. "swflite" is the same on all targets (compatible even with HTML5), while "swf" is not.

## Creating SWF Content

Using any version of Flash Professional, you can publish SWF assets to be used by OpenFL. Supported features include Shapes, SimpleButtons, MovieClips, many drawing operations, and where possible, masks, scrollRects, filters and blend modes.

Certain features that rely on ActionScript, such as frame scripts, the Text Layout Framework or inverse kinematics are not supported. The current releases of Flash Professional include an "Export as Bitmap" feature, which is useful for certain types of rendering.

## Embedding a SWF Library

If you do not already have a project created, you can use a command like the following:

{% highlight bash %}
openfl create project UsingSWFAssets
{% endhighlight %}

You can find many of the same concepts in the "SimpleSWFLayout" sample, also, if you prefer:

{% highlight bash %}
openfl create SimpleSWFLayout
{% endhighlight %}

Add support for SWF assets, first, by including the SWF library in your "project.xml" file:

{% highlight bash %}
<haxelib name="swf" />
{% endhighlight %}

Once the SWF library is included, you can add assets using the following tag:

{% highlight bash %}
<library path="to/my.swf" />
{% endhighlight %}

This will use the _default_ SWF type ("swf" for native and Flash, "swflite" for HTML5) and will use a _default_ ID value, matching the file name (in this case "my")

You can set these yourself using the `type` or `id` attributes:

{% highlight bash %}
<library path="to/my.swf" id="swf-library" type="swflite" />
{% endhighlight %}

There are a couple beta embed features available as well. Added a `preload` attribute can help you automatically load a SWF library as part of the preload process (more on that later), and `generate` will attempt to create classes for every "Export for ActionScript" class in the SWF, so you can `new MySymbolClass ()` in your code.

{% highlight bash %}
<library path="to/my.swf" preload="true" generate="true" />
{% endhighlight %}

## Loading a SWF Library

Unless you have used `preload="true"` in your `<library />` tag, before you are able to use content from a SWF library, you must load the library first:

{% highlight haxe %}
Assets.loadLibrary ("swf-library", function (_) {
	
	trace ("SWF library loaded");
	
});
{% endhighlight %}

## Instantiating a SWF Symbol

Once a library is loaded, you can access named symbols from the library using the following code:

{% highlight haxe %}
var clip = Assets.getMovieClip ("swf-library:MySymbolClass");
{% endhighlight %}

If the `generate` attribute was used, each symbol class should be available to instantiate normally:

{% highlight haxe %}
var clip = new MySymbolClass ();
{% endhighlight %}

Code completion should be available for the first level of child objects in the MovieClip.

If you want to access symbols from multiple SWF libraries, change the prefix before the colon (":") in the `Assets.getMovieClip` call. If you would prefer to load the entire SWF timeline, and not a child clip, use an empty value for the symbol name, like this:

{% highlight haxe %}
var clip = Assets.getMovieClip ("swf-library:");
{% endhighlight %}

## Standard Example

_project.xml_

{% highlight bash %}
<?xml version="1.0" encoding="utf-8"?>
<project>
	
	<meta title="Using SWF Assets" package="org.openfl.tutorials.usingswfassets" version="1.0.0" company="OpenFL" />
	<app main="Main" path="Export" file="UsingSWFAssets" />
	
	<source path="Source" />
	
	<haxelib name="openfl" />
	<haxelib name="swf" />
	
	<library path="Assets/library.swf" />
	
	<assets path="Assets" rename="assets" exclude="openfl.svg|*.swf" />
	<icon path="Assets/openfl.svg" />
	
</project>
{% endhighlight %}

_Main.hx_

{% highlight haxe %}
package;


import openfl.display.Sprite;
import openfl.Assets;


class Main extends Sprite {
	
	
	public function new () {
		
		super ();
		
		Assets.loadLibrary ("library", function (_) {
			
			var clip = Assets.getMovieClip ("library:MySymbolClass");
			addChild (clip);
			
		});
		
	}
	
	
}
{% endhighlight %}

## Using "preload" and "generate"

_project.xml_

{% highlight bash %}
<?xml version="1.0" encoding="utf-8"?>
<project>
	
	<meta title="Using SWF Assets" package="org.openfl.tutorials.usingswfassets" version="1.0.0" company="OpenFL" />
	<app main="Main" path="Export" file="UsingSWFAssets" />
	
	<source path="Source" />
	
	<haxelib name="openfl" />
	<haxelib name="swf" />
	
	<library path="Assets/library.swf" type="swflite" preload="true" generate="true" />
	
	<assets path="Assets" rename="assets" exclude="openfl.svg|*.swf" />
	<icon path="Assets/openfl.svg" />
	
</project>
{% endhighlight %}

_Main.hx_

{% highlight haxe %}
package;


import openfl.display.Sprite;
import openfl.Assets;


class Main extends Sprite {
	
	
	public function new () {
		
		super ();
		
		var clip = new MySymbolClass ();
		addChild (clip);
		
	}
	
	
}
{% endhighlight %}
