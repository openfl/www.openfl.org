---
layout: default
title: Timers
---

# Timers

In addition to handling animation on each frame, you can also handle animation based on time.

Usually, it makes the most sense to update an animation on each render frame, since this is how often the display is redrawn, but sometimes you may want to update only on a specific interval. For example, if you are creating a clock, it may be more practical to set a timer to update the hour or minute hand, although, even with this kind of behavior, it would be common to still handle it in a frame animation instead of timers.

Since timers provide independence from the current frame rate, here is an example of updating an object only once per second, although commonly you would want to update more often:

```haxe
import flash.display.Bitmap;
import flash.display.Sprite;
import flash.events.TimerEvent;
import flash.utils.Timer;
import openfl.Assets;

class Main extends Sprite {
    
    private var image:Bitmap;
    
    public function new () {
        
        super ();
        
        image = new Bitmap (Assets.getBitmapData ("assets/flower.jpg"));
        addChild (image);
        
        var timer = new Timer (1000);
        timer.addEventListener (TimerEvent.TIMER, timer_onTimer);
        timer.start ();
        
    }
    
    private function timer_onTimer (event:TimerEvent):Void {
       
        image.x += 40;
        
    }
    
}
```