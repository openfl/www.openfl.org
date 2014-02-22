---
layout: default
title: Load BitmapData
---

# Load BitmapData

The `BitmapData` class represents the bytes for an image, in memory. You can use this to display an image, or to modify the pixels for an image. Before we can show anything on screen, however, we first need to load one.

## Using openfl.Assets

`openfl.Assets` provides easy access to `BitmapData`, across each platform. The key is to make sure that your assets have been embedded in your project file.

When you look up your asset files, you will do so based on the "rename" or "id" value for the file. For example, say you had the following in your project file:

    <assets path="Assets" rename="assets" />

This means that anything you put under "Assets" will be available through code, but the name you will use will be "assets". If you added a file called "flower.jpg", you would look for "assets/flower.jpg" when loading the data:

```haxe
import flash.display.BitmapData;
import openfl.Assets;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bitmapData = Assets.getBitmapData ("assets/flower.jpg");
        
    }
    
}
```

Optionally, you can use the `loadBitmapData` method, instead of `getBitmapData`, to load an image asynchronously. This is helpful when you copy asset files, but do not embed them (such as on a web-based target):

```haxe
import flash.display.BitmapData;
import openfl.Assets;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        Assets.loadBitmapData ("assets/flower.jpg", onComplete);
        
    }
    
    private function onComplete (bitmapData:BitmapData):Void {
        
        
        
    }
    
}
```

## Using @:bitmap

In addition to `openfl.Assets`, OpenFL also supports a `@:bitmap` metadata tag, for embedding data directly with your code.

Unlike `openfl.Assets`, the `@:bitmap` tag searches for images based upon your class path, since the embed is handled as a part of the Haxe compile process.

```haxe
import flash.display.BitmapData;
import flash.display.Sprite;

@:bitmap("Assets/flower.jpg") class FlowerData extends BitmapData {}

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bitmapData = new FlowerData ();
        
    }
    
}
```

## Using flash.display.Loader

The common way to load an image in Adobe Flash is to use the `Loader` class. This can be somewhat verbose, and inconvenient when a synchronous API could work just fine.

```haxe
import flash.display.Loader;
import flash.display.Sprite;
import flash.events.Event;
import flash.net.URLRequest;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var loader = new Loader ();
        loader.contentLoaderInfo.addEventListener (Event.COMPLETE, loader_onComplete);
        loader.load (new URLRequest ("assets/flower.jpg"));
        
    }
    
    private function loader_onComplete (event:Event):Void {
        
        var bitmapData = cast (event.currentTarget.content, Bitmap).bitmapdata;
        
    }
    
}
```

Unlike `openfl.Assets`, the above is relient upon the exact final path to the file. This may be identical on a desktop, but very different on mobile.

If you have kept files within your assets path, you should be able to use `Assets.getPath`, to validate the path, in case it has been relocated on the current platform:

```haxe
import flash.display.Loader;
import flash.display.Sprite;
import flash.events.Event;
import flash.net.URLRequest;
import openfl.Assets;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var path = Assets.getPath ("assets/flower.jpg");
        
        var loader = new Loader ();
        loader.contentLoaderInfo.addEventListener (Event.COMPLETE, loader_onComplete);
        loader.load (new URLRequest (path));
        
    }
    
    private function loader_onComplete (event:Event):Void {
        
        var bitmapData = cast (event.currentTarget.content, Bitmap).bitmapdata;
        
    }
    
}
```

## Using flash.utils.ByteArray

Sometimes you need to convert a `ByteArray` of image bytes into `BitmapData`. The method varies depending on the platform.

### Native

You can use `BitmapData.loadFromBytes`:

```haxe
import flash.display.Sprite;
import flash.utils.ByteArray;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bytes = ByteArray.readFile ("assets/flower.jpg");
        var bitmapData = BitmapData.loadFromBytes (bytes);
        
    }
    
}
```

### Flash

On Flash, it is more complicated to convert `ByteArray` into a `BitmapData`, but still possible. In order to simplify the example, we will use the @:bytes metadata to embed the `ByteArray` first, though this would ordinarily be impractical just to load an image:

```haxe
import flash.display.Loader;
import flash.display.Sprite;
import flash.events.Event;
import flash.net.URLRequest;
import flash.utils.ByteArray;

@:bytes("Assets/flower.jpg") class FlowerBytes extends ByteArray {}

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bytes = new FlowerBytes ();
        
        var loader = new Loader ();
        loader.contentLoaderInfo.addEventListener (Event.COMPLETE, loader_onComplete);
        loader.loadBytes (bytes);
        
    }
    
    private function loader_onComplete (event:Event):Void {
        
        var bitmapData = cast (event.currentTarget.content, Bitmap).bitmapdata;
        
    }
    
}
```
