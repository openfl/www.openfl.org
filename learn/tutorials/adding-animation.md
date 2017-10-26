---
title: Adding Animation
---

## Introduction

Once you know how to show an image in OpenFL, the next step to move toward building a real project to begin adding some movement and interaction. In this tutorial, we will expand upon the basic concepts in the [Displaying a Bitmap](../displaying-a-bitmap/) sample, and begin adding animation, or motion "tweens" to an object.

The concept of a "tweening" is to create all of the inbetween steps for animation. In traditional animation, a head animator may draw the keyframes, and junior animators may draw all the frames inbetween to complete the motion.

As a developer, a tweening library can enable you to act like the head animator, and focus on _what_ animation you wish to show, and not going stuck in the _how_ of all the mechanics. We recommend a library called Actuate, which we will use to create animation in code without a lot of work!

## Creating Your Project

To create an empty project (and follow along), open a command-prompt (Windows) or terminal (macOS/Linux) and run the following command:

    openfl create project AddingAnimation

To fast-forward to the finished result, you can create a copy of the OpenFL sample project:

    openfl create AddingAnimation

## Adding an Image

Similar to the [Displaying a Bitmap](../displaying-a-bitmap/) sample, add an image to your "Assets" folder.

Once you have an image available, edit "Source/Main.hx" add it to the stage (substituting "openfl.png" for the name of your PNG or JPEG image):

```java
package;

import openfl.display.Bitmap;
import openfl.display.Sprite;
import openfl.Assets;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
        addChild (bitmap);
        
    }
    
}
```

## Including Actuate in Your Project

To begin using Actuate, first you will need to edit the "project.xml" file to include Actuate in your project.

There should be a `<haxelib />` tag already for OpenFL, we will need to add a similar tag for Actuate:

```xml
<haxelib name="actuate" />
```

Once Actuate is in included in the last of haxelibs for your project, next we need to add an `import` statement in "Main.hx"

```java
package;

import motion.Actuate;
import openfl.display.Bitmap;
import openfl.display.Sprite;
import openfl.Assets;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
        addChild (bitmap);
        
    }
    
}
```

## Creating a Simple Tween

Actuate has a `tween` method which accepts an _object_ to animate, the _duration_ for the animation and third an object with _target values_ for each property you wish to change over time. To animate the x position of the image to make it move across the screen, for example, we could use the following:

```java
package;

import motion.Actuate;
import openfl.display.Bitmap;
import openfl.display.Sprite;
import openfl.Assets;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
        addChild (bitmap);
        
        Actuate.tween (bitmap, 3, { x: 200 });
        
    }
    
}
```

This will animate the object over the course of four seconds, from its original x position (which was the default value of 0) to an x position on-screen of 200. Go ahead and run your project (like we learned in the [previous tutorial](../displaying-a-bitmap/)) and see how it looks.

Tweens can be used to animate any numeric value, including the `alpha` (or transparency) of an object to make it fade, or the `scaleX` or `scaleY` to change scale.

To make the image fade in, we would set the `alpha` value of the image to 0, then add a tween to increase the `alpha` to 1, or fully visible. The following code will animate the image from invisible to visible as well as changing the `x` value:

```java
package;

import motion.Actuate;
import openfl.display.Bitmap;
import openfl.display.Sprite;
import openfl.Assets;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
        addChild (bitmap);
        bitmap.alpha = 0;
        
        Actuate.tween (bitmap, 3, { alpha: 1, x: 200 });
        
    }
    
}
```

## Using Tween Modifiers

Actuate has a number of tween modifiers you can use to alter the behavior of a standard tween. You can delay the starting time, or make a callback to other code when an animation is completed. One of the common tween modifiers that is used with Actuate is the `ease` modifier.

Actuate uses something that is called an "easing equation" to calculate all of the inbetween positions from the start and end values of an animation. This equation determines the speed or acceleration during an animation. For example, an animation which advances at the same speed the whole time would be a linear equation&mdash;comparing the amount of change over time would be constant, like a straight line. At first, this may seem like an obvious choice for the default equation in Actuate, but for most projects, a linear equation may look dull and look the spark of a more exciting animation. For this reason, Actuate defaults to the more "exotic" exponential equation, which accelerates quickly, then slows to a halt near the end, more like a rollercoaster.

However, if you begin to use different easing equations, it may be ideal to separate an animation into multiple tweens. This way, you can use one style of easing for one part of an animation, and a different type of easing for another. An easing that looks great when changing the `x` or `y` position of an object may behave poorly when used to change the visibility (`alpha`) of the same object.

You can use a different easing equation by importing one from the "motion.easing" package, and adding it to your animation. For example, to use an `Elastic.easeOut` equation for only the `x` value, you can use the following code:

```java
package;

import motion.easing.Elastic;
import motion.Actuate;
import openfl.display.Bitmap;
import openfl.display.Sprite;
import openfl.Assets;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
        addChild (bitmap);
        bitmap.alpha = 0;
        
        Actuate.tween (bitmap, 3, { alpha: 1 });
        Actuate.tween (bitmap, 3, { x: 200 }).ease (Elastic.easeOut);
        
    }
    
}
```

You can read more about other Actuate tween modifiers [here](https://github.com/openfl/actuate#tween-modifiers).

## Smoothing Bitmaps

By default, the OpenFL `Bitmap` class is not set for smoothing. When displaying an image that is not scaled or rotated, it will look fine and may have faster performance than when smoothing is enabled. However, if you decide to scale the image, it can begin to look poor and rasterized, so it is often ideal to enable smoothing in these cases.

You can enable smoothing for a `Bitmap` using the `smoothing` property:

```java
bitmap.smoothing = true;
```

For example, if we decided to scale our image to make it "pop out" and appear, we could use our previous animation on the `scaleX` and `scaleY` of the object (rather than the `x` value)

```java
package;

import motion.easing.Elastic;
import motion.Actuate;
import openfl.display.Bitmap;
import openfl.display.Sprite;
import openfl.Assets;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
        addChild (bitmap);
        bitmap.alpha = 0;
        bitmap.scaleX = 0;
        bitmap.scaleY = 0;
        bitmap.smoothing = true;
        
        Actuate.tween (bitmap, 3, { alpha: 1 });
        Actuate.tween (bitmap, 6, { scaleX: 1, scaleY: 1 }).ease (Elastic.easeOut);
        
    }
    
}
```

## Centering with a Display Object Container

OpenFL display objects have an origin in the upper-left corner of the object. For most operations, such as `x`, `y`, `width` and `height`, this makes objects easy to deal with. However, sometimes you may want to change the origin point of the object. For example, in the above code we set the object to animate the scale from 0 to 1. This will scale the object from the upper-left corner, which may not be the effect that we want.

It is simple to change the origin point of an object by putting it inside of a display object container. The most common form of display object container is the `Sprite` class, so instead of animating our image to the stage directly, we can add our image to a parent `Sprite` and animate the parent with a few small changes:

```java
package;

import motion.easing.Elastic;
import motion.Actuate;
import openfl.display.Bitmap;
import openfl.display.Sprite;
import openfl.Assets;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
        bitmap.x = - bitmap.width / 2;
        bitmap.y = - bitmap.height / 2;
        bitmap.smoothing = true;
        
        var container = new Sprite ();
        container.addChild (bitmap);
        container.alpha = 0;
        container.scaleX = 0;
        container.scaleY = 0;
        
        addChild (container);
        
        Actuate.tween (container, 3, { alpha: 1 });
        Actuate.tween (container, 6, { scaleX: 1, scaleY: 1 }).ease (Elastic.easeOut);
        
    }
    
}
```

## Final Steps

The last code sample centered our image to improve the behavior of the scale animation, but the image is centered to the top-left corner of the window, rather than being centered in the window. The following changes will center the image based on the size of the current stage width and height, and adds a small delay to the animation

```java
package;

import motion.easing.Elastic;
import motion.Actuate;
import openfl.display.Bitmap;
import openfl.display.Sprite;
import openfl.Assets;

class Main extends Sprite {
    
    public function new () {
        
        super ();
        
        var bitmap = new Bitmap (Assets.getBitmapData ("assets/openfl.png"));
        bitmap.x = - bitmap.width / 2;
        bitmap.y = - bitmap.height / 2;
        bitmap.smoothing = true;
        
        var container = new Sprite ();
        container.addChild (bitmap);
        container.alpha = 0;
        container.scaleX = 0;
        container.scaleY = 0;
        container.x = stage.stageWidth / 2;
        container.y = stage.stageHeight / 2;
        
        addChild (container);
        
        Actuate.tween (container, 3, { alpha: 1 });
        Actuate.tween (container, 6, { scaleX: 1, scaleY: 1 }).delay (0.4).ease (Elastic.easeOut);
        
    }
    
}
```

## Issues

Any problems? Please visit the [community forums](http://community.openfl.org) if you are experiencing trouble!
