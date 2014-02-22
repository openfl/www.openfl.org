---
layout: default
title: Unload BitmapData
---

# Unload BitmapData

When you are finished with a `BitmapData` instance, you may need to unload it to free memory.

Similar to other objects, when you are no longer referencing a `BitmapData` instance anymore, it should be collected and the memory cleared. However, if you have `openfl.Assets`, you may have to de-reference the `BitmapData` from the `Assets` cache.

Almost always, if you reference the same image multiple times, you will want to re-use the same `BitmapData` instance, so the image is allocated once, instead of many times. For convenience, `openfl.Assets` stores and re-uses the same `BitmapData` instances, so you can call `getBitmapData` for the same image multiple times, to get the same object.

To clear the reference for a single `BitmapData`, you can clear the value from the cache directly:

```haxe
Assets.cache.bitmapData.remove ("assets/flower.jpg");
```

If you wish, you can also clear the entire `Assets` cache:

```haxe
Assets.cache.clear ();
```

Every `BitmapData` instance also includes a `dispose` method, which can be used to forcefully dump the bits used for an image immediately. However, you need to be careful that the image is not being used anywhere. Usually, de-referencing `BitmapData` is recommended, and it should be necessary to call `dispose` directly:

```haxe
import flash.display.Sprite;
import openfl.Assets;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bitmapData = Assets.getBitmapData ("assets/flower.jpg");
        bitmapData.dispose ();
        
    }
    
}
```