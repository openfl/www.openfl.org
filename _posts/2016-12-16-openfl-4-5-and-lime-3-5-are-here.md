---
title: OpenFL 4.5 and Lime 3.5 are Here!
---

OpenFL 4.5 and Lime 3.5 are available, with quite a long list of changes!

## Improved SWF Support

The "swf" library has been merged into OpenFL, which means that OpenFL understands how to process and include SWF-based assets without installing any extra haxelibs. For this release, we have focused on improving the quality and integration of SWF-based assets, resulting in multiple improvements that were not possible before. For example, it is possible to use Haxe-based classes as a "custom base class" from Adobe Animate or older versions of Adobe Flash Professional.

Using a SWF library with the "generate" option enabled (such as `<library path="lib.swf" preload="true" generate="true" />`), classes used in the "Export for ActionScript" option are now strongly typed in generated Haxe classes. Support for strong type references improves performance, and increases the amount of code that can be used without using casting. As a result, we have disabled the `implements Dynamic` behavior for `DisplayObject`, as dynamic access has performance costs, and made it difficult to debug certain kinds of spelling errors. This option is available now using `-Dopenfl-dynamic`, but is disabled by default.

## Improved HTML5 -Ddom Support

In addition to the standard WebGL target and the fallback canvas target, OpenFL has a special "DOM" mode for HTML5 that uses CSS transforms, DIVs, image tags and other HTML elements. Although support has lagged recently, we have brought the DOM target up to parity with our renderers in many ways. There may be a "one size fits all" approach that is ideal for all users on HTML5, so we are excited to better serve your needs by allowing alternatives depending on the project you are creating. Using the DOM output is more ideal for projects that are not constantly changing (such as a web application) or projects that wish to blend their own DOM elements (using `openfl.display.DOMSprite`) or weild greater control over the behavior of their project.

## (Experimental) Additional GPU Features

In this release, we are experimenting with changes to increase support for GPU features. These are only available on OpenGL targets (OpenGL, OpenGL ES, WebGL) and are liable to change in the future. Your feedback is greatly appreciated as we work on these features.

First, we have experimenting with support for dumping the software representation of a `BitmapData` object. The compromise means that it is no longer possible to `getPixel` or `setPixel`, but if no edits are required, this cuts the amount of RAM used for the `BitmapData` by 50%. For large projects, this may be a life-saver, so we have added `bitmapData.readable` to determine if the object can be used with most `BitmapData` APIs, and `bitmapData.disposeImage` to delete the software buffer, but retain the hardware texture once it is created. Similarly, we have added support to `bitmapData.draw` and `bitmapData.fillRect` to use OpenGL framebuffers if the `BitmapData` is hardware-only. This may make a very big difference for performance, as `bitmapData.draw` would instead go through software.

We are also experimenting with cross-over APIs between `Stage3D` and `BitmapData`, such as the `BitmapData.fromTexture` API, designed to be used for render-to-texture, similar to the above. However, this enables support for using a hardware texture that is already created in `Stage3D`, and does not create a software buffer to be deleted later, if the intention is to only use render-to-texture.

We are also considering a default `Context3D` on hardware targets, since the hardware context is already initialized as a part of the Lime window creation.

## Asset Library and Preloader Improvements

We have made big changes to how Lime asset libraries are handled, to reduce the amount of special logic that exists in the `DefaultAssetLibrary` template, to improve support for custom asset libraries (such as SWF-based libraries) and to prepare the way for more work on asset library improvements. These changes should (ideally) be transparent, and everything should work the same as it did, with the exception that fewer assets are preloaded on HTML5, which is important for large projects.

We received feedback that the custom preloader API was difficult to use, so it has been revised to make it simpler and easier to understand.

```java
import openfl.display.Sprite;
import openfl.events.Event;
import openfl.events.ProgressEvent;

class CustomPreloader extends Sprite {
	
	public function new () {
		
		super ();
		
		addEventListener (ProgressEvent.PROGRESS, this_onProgress);
		addEventListener (Event.COMPLETE, this_onComplete);
		
	}
	
	private function this_onComplete (event:Event):Void {
		
		//event.preventDefault ();
		trace ("load complete");
		
	}
	
	private function this_onProgress (event:ProgressEvent):Void {
		
		var percentLoaded = 0;
		if (event.bytesTotal > 0) percentLoaded = event.bytesLoaded / event.bytesTotal;
		
		trace ("percentLoaded: " + percentLoaded);
		
	}
	
}
```

Now, a custom preloader can be an ordinary `Sprite`, and does not need to inherit from a special class or interface. `PROGRESS` and `COMPLETE` events are dispatched, and if the `COMPLETE` is not canceled, the preloader is removed and the application begins. If preferred, the `COMPLETE` event can be canceled, then the preloader should dispatch a `COMPLETE` event on its own when it is ready to release control to the document class.

As a marked change from before, the custom preloader occurs on _every_ target, including mobile or desktop platforms. As these platforms do not usually preload, these will often `COMPLETE` right away, but it will be up to you whether the preloader relinquishes control, or if you use it to show a "START" button, sponsor logos, or other content. It's your choice!

## iOS Build Improvements

We have made multiple changes to the default iOS project templates, fixing the "cannot find build target by" error when using Haxe development builds, significantly improving compile-time, fixing issues with compiler cache invalidation and have improved the performance of OpenFL and Lime debug builds for devices. We hope that these quality-of-life improvements will continue to make iOS a friendlier target to use.

## Other Improvements

There are many other minor fixes and improvements, such as a new HTTPRequest class in Lime, better support for high-DPI targets, and hit test and render fixes for OpenFL.

Thank you to all of our [Patreon](http://patreon.com/openfl) supporters, and keep making the world a more exciting place with all amazing games and applications you are building! It is humbling to see all that we are helping you create.

Run `openfl upgrade` to get the latest, and if you are using development builds, please be sure to do `-clean` builds, and `openfl rebuild tools` to compile the updated SWF embed tool.

Check out the changelog [here](https://github.com/openfl/openfl/blob/develop/CHANGELOG.md) and [here](https://github.com/openfl/lime/blob/develop/CHANGELOG.md).

Merry Christmas!
