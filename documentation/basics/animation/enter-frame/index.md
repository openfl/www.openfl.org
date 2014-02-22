---
layout: default
title: Enter Frame
---

# Enter Frame

The most basic way to create animation is to begin listening to the ENTER_FRAME event.

This occurs every time your application is about to render. For example, if your application is set to render at 30 frames per second, then this event will fire 30 times a second, assuming that the device is able to keep up.

The time between frames can vary, so we recommend that you calculate the elapsed time when handling these events, in order to properly update your animation or logic.

You can listen to any object that is added to the stage. For performance, it is usually recommended to only have one ENTER_FRAME event handler, usually at the top level of your code, and to propogate functionality down from there.

The following example will create an image, then animate it horizontally at a rate of 40 pixels per second:

```haxe
import flash.display.Bitmap;
import flash.display.Sprite;
import flash.events.Event;
import flash.Lib;
import openfl.Assets;

class Main extends Sprite {
    
    private var image:Bitmap;
    private var previousTime:Int;
    
    public function new () {
        
        super ();
        
        image = new Bitmap (Assets.getBitmapData ("assets/flower.jpg"));
        addChild (image);
        
        previousTime = Lib.getTimer ();
        addEventListener (Event.ENTER_FRAME, this_onEnterFrame);
        
    }
    
    private function this_onEnterFrame (event:Event):Void {
        
        var currentTime = Lib.getTimer ();
        var deltaTime = currentTime - previousTime;
        previousTime = currentTime;
        
        image.x += 40 * (deltaTime / 1000);
        
    }
    
}
```

For those developing their own game or animation engine, this is the core building block to creating your own behaviors. However, for the average user, we recommend using an existing library, such as Actuate.