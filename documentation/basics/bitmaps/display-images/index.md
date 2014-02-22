---
layout: default
title: Display Images
---

# Display Images

## Using Bitmap

Once you have already loaded a `BitmapData` instance, the easiest way to show it on-screen is to use a `Bitmap` instance:

```haxe
import flash.display.Bitmap;
import flash.display.Sprite;
import openfl.Assets;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bitmapData = Assets.getBitmapData ("assets/flower.jpg");
        var bitmap = new Bitmap (bitmapData);
        addChild (bitmap);
        
        bitmap.x = 100;
        bitmap.y = 200;
        
    }
    
}
```

## Using Graphics

Every `Sprite` instance has a `graphics` property, which allows you to perform primitive drawing commands.

One of these commands is `drawRect`:

```haxe
import flash.display.Sprite;
import openfl.Assets;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bitmapData = Assets.getBitmapData ("assets/flower.jpg");
        
        graphics.beginBitmapFill (bitmapData);
        graphics.drawRect (100, 200, bitmapData.width, bitmapData.height);
        
    }
    
}
```

Another is `drawTriangles`:

```haxe
import flash.display.Sprite;
import openfl.Assets;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bitmapData = Assets.getBitmapData ("assets/flower.jpg");
        
        var vertices = new Vector<Float> ();
        var indices = new Vector<Int> ();
        var uvtData = new Vector<Float> ();
        
        vertices[0] = vertices[4] = 100;
        vertices[1] = vertices[3] = 200;
        vertices[2] = vertices[6] = 100 + bitmapData.width;
        vertices[5] = vertices[7] = 200 + bitmapData.height;
        
        indices[0] = 0;
        indices[1] = indices[3] = 1;
        indices[2] = indices[5] = 2;
        indices[4] = 3;
        
        uvtData[0] = uvtData[4] = 0;
        uvtData[1] = uvtData[3] = 0;
        uvtData[2] = uvtData[6] = 1;
        uvtData[5] = uvtData[7] = 1;
        
        graphics.beginBitmapFill (bitmapData);
        graphics.drawTriangles (vertices, indices, uvtData);
        
    }
    
}
```

There are other commands available (such as `drawCircle` or `drawLine`) but the above are more common for drawing an image.

## Using Tilesheet

Similar to `drawTriangles`, `openfl.display.Tilesheet` supports batch drawing, but supports more options:

```haxe
import flash.display.Sprite;
import flash.geom.Rectangle;
import openfl.display.Tilesheet;
import openfl.Assets;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bitmapData = Assets.getBitmapData ("assets/flower.jpg");
        
        var tilesheet = new Tilesheet (bitmapData);
        tilesheet.addTileRect (new Rectangle (0, 0, bitmapData.width, bitmapData.height));
        
        tilesheet.drawTiles (graphics, [ 0, 100, 200 ]);
        
    }
    
}
```

Usually, the `Tilesheet` API is used when multiple images are saved within the same file, as a tile or sprite sheet. For example:

```haxe
import flash.display.Sprite;
import flash.geom.Rectangle;
import openfl.display.Tilesheet;
import openfl.Assets;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bitmapData = Assets.getBitmapData ("assets/tiles.png");
        var tilesheet = new Tilesheet (bitmapData);
        
        tilesheet.addTileRect (new Rectangle (0, 0, 64, 64));
        tilesheet.addTileRect (new Rectangle (64, 0, 64, 64));
        tilesheet.addTileRect (new Rectangle (128, 0, 64, 64));
        
        var drawList = [ 0, 100, 200,
                         1, 200, 300,
                         2, 300, 400 ];
             
        tilesheet.drawTiles (graphics, drawList);
        
    }
    
}
```

The first value is the index of the rectangle you wish to draw, then it is the x and y coordinates of where to draw it. The `drawTiles` also supports flags to support additional parameters, such as alpha, rotation or scale. Depending on the flags, the API will expect the draw list to contain additional values for each draw.
