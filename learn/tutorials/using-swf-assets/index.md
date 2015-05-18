---
layout: default
title: Using SWF Assets
---

# Using SWF Assets

## Introduction

There is a "swf" library that is designed to enable the use of SWF assets from Flash Professional. It is still in beta, so the quality and supported feature list will continue to improve, but already, the SWF library can enable the use of many kinds of Flash assets.

The SWF library includes two different kinds of support. The "swf" type is compatible with native platforms. It decodes and uses SWF assets at runtime, unzipping and extracting information from a SWF. The second kind is "swflite", designed to extract the information at compile-time.

The "swflite" format is faster and generally than "swf", where the features are equal. The "swf" format currently supports some additional features. "swflite" is the same on all targets (compatible even with HTML5), while "swf" is not.

## Creating SWF Content

Using any version of Flash Professional, you can publish SWF assets to be used by OpenFL. Supported features include Shapes, SimpleButtons, MovieClips, many drawing operations, and where possible, masks, scrollRects, filters and blend modes.

Certain features that rely on ActionScript, such as frame scripts, the Text Layout Framework or inverse kinematics are not supported. The current releases of Flash Professional include an "Export as Bitmap" feature, which is useful for certain types of rendering.

## Embedding SWF Libraries

When you have created a SWF 


Unsupported features include Flash 3D features, Text Layout Framework, Inverse Kinematics, 

OpenFL is compatible with the "swf" haxelib. When added to a project, the SWF library it can enable the use of many features from Flash SWF assets. This is still a "beta" feature so expect support to continue to improve over time.

The SWF library supports two types 


It enables use of Flash SWF content 

_If you are are not familiar with creating an OpenFL project, please visit [Your First Project](/learn/tutorials/your-first-project/)._

## Creating SWF Content

OpenFL is capable is rendering 

## Embedding a SWF Library

If you do not already have a project created, you can use a command like the following:

```bash
openfl create project UsingSWFAssets
```

You can find many of the same concepts in the "SimpleSWFLayout" sample, also, if you prefer:

```bash
openfl create SimpleSWFLayout
```

Add support for SWF assets, first, by including the SWF library in your "project.xml" file:

```xml
<haxelib name="swf" />
```

Once the SWF library is included, you can add assets using the following tag:

```xml
<library path="to/my.swf" />
```

This will use the _default_ SWF type ("swf" for native and Flash, "swflite" for HTML5) and will use a _default_ ID value, matching the file name (in this case "my")

You can set these yourself using the `type` or `id` attributes:

```xml
<library path="to/my.swf" id="swf-library" type="swflite" />
```

There are a couple beta embed features available as well. Added a `preload` attribute can help you automatically load a SWF library as part of the preload process (more on that later), and `generate` will attempt to create classes for every "Export for ActionScript" class in the SWF, so you can `new MySymbolClass ()` in your code.

```xml
<library path="to/my.swf" preload="true" generate="true" />

## Loading a SWF Library

Unless you have used `preload="true"` in your `<library />` tag, before you are able to use content from a SWF library, you must load the library first:

```haxe
Assets.loadLibrary ("swf-library", function (_) {
	
	trace ("SWF library loaded");
	
}
```

## Instantiating a SWF Symbol

Once a library is loaded, you can access named symbols from the library using the following code:

```haxe
var clip = Assets.getMovieClip ("swf-library:MySymbolClass");
```

If the `generate` attribute was used, each symbol class should be available to instantiate normally:

```haxe
var clip = new MySymbolClass ();
```

Code completion should be available for the first level of child objects in the MovieClip.

If you want to access symbols from multiple SWF libraries, change the prefix before the colon (":") in the `Assets.getMovieClip` call. If you would prefer to load the entire SWF timeline, and not a child clip, use an empty value for the symbol name, like this:

```haxe
var clip = Assets.getMovieClip ("swf-library:");
```

## Standard Example

_project.xml_

```xml
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
```

_Main.hx_

```haxe
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
```





OpenFL includes a "create" command that can help generate an empty or sample project for you.

To create an empty project, open a command-prompt (Windows) or terminal (Mac/Linux) and run the following command:

    openfl create project UsingSWFAssets

You can replace "UsingSWFAssets" with whatever you want to call your project.

OpenFL contains multiple samples for illustrating different features of the platform. One of the simple samples is called "DisplayingABitmap", as we build our first project, we will quickly walk through the steps to recreate this sample. You can also generate a copy of it yourself using:

    openfl create DisplayingABitmap
	
	
	



## Creating SWF Content

OpenFL is compatible with SWF content created by Flash Professional. Many features of 











# Your First Project

## Creating a New Project

OpenFL includes a "create" command that can help generate an empty or sample project for you.

To create an empty project, open a command-prompt (Windows) or terminal (Mac/Linux) and run the following command:

    openfl create project HelloWorld

You can replace "HelloWorld" with whatever you want to call your project.

OpenFL contains multiple samples for illustrating different features of the platform. One of the simple samples is called "DisplayingABitmap", as we build our first project, we will quickly walk through the steps to recreate this sample. You can also generate a copy of it yourself using:

    openfl create DisplayingABitmap

## Adding an Image

The first thing we will do is add an image. First, copy an image (PNG or JPG format) to the "Assets" folder of the project. We will be using [this image](https://raw.githubusercontent.com/openfl/openfl-samples/master/DisplayingABitmap/Assets/openfl.png), but you can download or copy any image you like.

Open the "Source/Main.hx" file in the editor of your choice. It should look something like this:

```Haxe
package;

import openfl.display.Sprite;

class Main extends Sprite {

    public function new () {

        super ();

    }

}
```

In order to import our image, we will want to import the `openfl.Assets` class, and add a `getBitmapData` call. There is more than one way to load an image in OpenFL, but the `Assets` class is designed to make this very simple.

You will want to use the name of your image, so if it is called "myimage.png", be sure to replace the example below with the right text to match your file name.

```Haxe
package;

import openfl.display.Sprite;
import openfl.Assets;

class Main extends Sprite {

    public function new () {

        super ();

        var bitmapData = Assets.getBitmapData ("assets/openfl.png");

    }

}
```

The `openfl.display.BitmapData` type represents the pixel data for an image. You can use this directly to read pixels, perform fills, and multiple other pixel-based effects. Often however, you will load directly from a file, and will not need to modify the data.

The easiest to display our data is using the `openfl.display.Bitmap` type, you can use the same `BitmapData` with multiple `Bitmap` instances, however you want it to display.

```Haxe
package;

import openfl.display.Bitmap;
import openfl.display.Sprite;
import openfl.Assets;

class Main extends Sprite {

    public function new () {

        super ();

        var bitmapData = Assets.getBitmapData ("assets/openfl.png");
        var bitmap = new Bitmap (bitmapData);
        addChild (bitmap);

    }

}
```

In order to see our `Bitmap` instance, we use `addChild` to make it visible on the display list. The "display list" is an easy-to-use method of drawing that is available in OpenFL, you can read more about it [here](openfl_basics/display_list.md).

## Positioning an Object

When you use the display list, you can use `x` and `y` properties to control where an object will be drawn.

```Haxe
package;

import openfl.display.Bitmap;
import openfl.display.Sprite;
import openfl.Assets;

class Main extends Sprite {

    public function new () {

        super ();

        var bitmapData = Assets.getBitmapData ("assets/openfl.png");
        var bitmap = new Bitmap (bitmapData);
        addChild (bitmap);

        bitmap.x = 100;
        bitmap.y = 200;

    }

}
```

If we set the bitmap position to (100, 200), instead of drawing at the upper-left of the window, it will be 100 and 200 pixels away from the corner, respectively. You can use any value you want, but for this sample, we will center the image.

Since the `x` and `y` values of a display object use the upper-left corner of the object, the math for centering our object will look something like this:

    var centerValue = (totalWidth - imageWidth) / 2;

We can determine the width of our window using the `stage.stageWidth` and `stage.stageHeight` values. We can use the `width` and `height` values of our bitmap to find how large it is. The resulting code looks like this:

```Haxe
package;

import openfl.display.Bitmap;
import openfl.display.Sprite;
import openfl.Assets;

class Main extends Sprite {

    public function new () {

        super ();

        var bitmapData = Assets.getBitmapData ("assets/openfl.png");
        var bitmap = new Bitmap (bitmapData);
        addChild (bitmap);

        bitmap.x = (stage.stageWidth - bitmap.width) / 2;
        bitmap.y = (stage.stageHeight - bitmap.height) / 2;

    }

}
```

## Running the Project

We are going to test our project with three different platforms, you can use [many more](advanced_setup/platforms/README.md).

If you open a command-prompt (Windows) or terminal (Mac/Linux), change to the directory of the project we created.

If you are using a code editor with OpenFL support built-in, you may be able to compile using a shortcut, such as Ctrl+Enter or a "Run" button in the editor. For sake of consistency, we will go over the steps for how you would build the project yourself from a command-line.

    openfl test neko

This command should run the project using Neko, a runtime included with the Haxe compiler.

    openfl test html5

If you use "html5" instead, the "openfl" command will open a local web server, as well as your default web browser.

    openfl test flash

The "flash" target will create a Flash SWF, and will use the default handler on your system for SWF files. You may wish to download a standalone "content debugger" Flash projector and set it to the default for SWF files on your system, as it is the best environment for testing Flash projects.

If you would like to run the command from a different folder on your system, you can also add an additional argument to the "test" command:

    openfl test ../DisplayingABitmap flash

## Issues

Any problems? Please visit our helpful [community forums](http://community.openfl.org) if you are experiencing trouble!