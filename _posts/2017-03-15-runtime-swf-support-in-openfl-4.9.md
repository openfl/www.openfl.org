---
title: Runtime SWF Support in OpenFL&nbsp;4.9
---

OpenFL 4.9 is out, and the big new feature (among [many other improvements](https://github.com/openfl/openfl/blob/develop/CHANGELOG.md#490-03152017)) is support for runtime SWF-based assets on HTML5 or native targets.

In the past, you could include a SWF asset in a project file:

```xml
<library path="Assets/NyanCat.swf" />
```

Then OpenFL would do magic behind the curtains to convert your SWF asset into a format suitable for runtime.

...but what if you want to create these assets separately, and load them at will at runtime?

This is where the paradigm broke down, but thanks to some [awesome improvements](https://github.com/openfl/lime/blob/develop/CHANGELOG.md#400-03152017) in Lime 4 (particularly to asset libraries), for the first time, OpenFL can load SWF-based assets at will, at compile-time or runtime!

There is a new "process" command that will convert an existing SWF asset into the "SWFLite" format recognized by OpenFL HTML5 and native:

```bash
openfl process NyanCat.swf
```

The "process" command accepts an input SWF, and optionally an output directory. It will process the target SWF, and generated a folder based on the name of your input SWF, such as "NyanCat.bundle", or using a name you choose from the output directory argument.

Once you have created your ".bundle" directory, you're ready to load at runtime!

#### Using `openfl.display.Loader`

```java
private var loader:Loader;

...

loader = new Loader ();
loader.contentLoaderInfo.addEventListener (ProgressEvent.PROGRESS, loader_onProgress);
loader.contentLoaderInfo.addEventListener (IOErrorEvent.IO_ERROR, loader_onError);
loader.contentLoaderInfo.addEventListener (Event.COMPLETE, loader_onComplete);
loader.load (new URLRequest ("path/to/NyanCat.bundle"));

...

private function loader_onComplete (event:Event):Void {
	
	var content = loader.content;
	addChild (content);
	
}
```

For better control over the loaded asset library, you may choose to use the `AssetLibrary` approach instead

### Using `openfl.utils.AssetLibrary`

```java
var future = AssetLibrary.loadFromFile ("path/to/NyanCat.bundle");
future.onProgress (library_onProgress);
future.onError (library_onError);
future.onComplete (library_onComplete);

...

private function library_onComplete (library:AssetLibrary):Void {
	
	var content = library.getMovieClip ("");
	addChild (content);
	
}
```

You can also use Lime futures in a single-line:

```java
AssetLibrary.loadFromFile ("path/to/NyanCat.bundle").onComplete (function (library) {
	
	var clip = library.getMovieClip ("SymbolName");
	addChild (clip);
	
});
```

Using `openfl.utils.Loader` is similar to how you load SWF content on the Flash target, but using the `AssetLibrary` approach makes it easier to access child symbols, in addition to the root timeline.

We appreciate your support and feedback! Thank you to our [Patreon](http://patreon.com/openfl) supporters, and please keep letting us know on the [forums](http://community.openfl.org) and Slack how things are working, and how we can improve OpenFL to better serve you!