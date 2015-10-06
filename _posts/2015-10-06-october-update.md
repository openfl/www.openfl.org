---
layout: post
title: Development Update
published: false
---

The past several months have been filled with new updates to Lime and OpenFL, there are so many things to discuss, I will try and choose some of my favorites and some of the highlights since the last development update on the blog.

## Joystick and Gamepad Support

Previous releases of OpenFL used `JoystickEvent` to get access to game devices. This was never a part of the Flash API specification, since it was created years before AIR or Flash Player supported game input publicly.

OpenFL no longer supports `JoystickEvent`, but instead benefits from three new APIs designed to provide more (and better!) options for game input support.

Using Lime directly, you have access to either lower-level Joystick or higher-level Gamepad support.

```haxe
Gamepad.onConnect.add (function (gamepad) {
  
  trace ("Connected Gamepad: " + gamepad.name);
  
  gamepad.onAxisMove.add (function (axis:GamepadAxis, value:Float) {
    trace ("Moved Axis " + axis + ": " + value);
  });
  
  gamepad.onButtonDown.add (function (button:GamepadButton) {
    trace ("Pressed Button: " + button);
  });
  
  gamepad.onButtonUp.add (function (button:GamepadButton) {
    trace ("Released Button: " + button);
  });
  
  gamepad.onDisconnect.add (function () {
    trace ("Disconnected Gamepad");
  });
  
});
```

Unlike the older API, Lime Joystick and Gamepad support have hot-plugging support. You can connect and disconnect a controller while a project is still running. If a controller already has mappings (and you can include new mappings if Lime does not have one for the controller) the Gamepad API provides unified, named input. Regardless of the device, you can check values such as `GamepadAxis.LEFT_X`, or `GamepadButton.START`, simplifying support of different types of controllers.

For compatibility with the Flash API, OpenFL provides the Flash "GameInput" API. This is similar to the Lime Gamepad API, but more closely resembles other OpenFL APIs, and shares compatibility with the Flash runtime.

```haxe
new GameInput ().addEventListener (GameInputDevice.DEVICE_ADDED, function (event) {
  
  trace ("Connected Device: " + event.device.name);
  
  for (i in 0...event.device.numControls) {
    
    var control = event.device.getControlAt (i);
    
    control.addEventListener (Event.CHANGE, function (event) {
      trace ("Control " + control.id + ": " + control.value);
    });
    
  }
  
});
```

Sometimes you may not have gamepad mapping for a certain device, or you are using a real joystick, or prefer the more raw system-level events. Lime now supports standard joystick events as well.

```haxe
Joystick.onConnect.add (function (joystick) {
  
  trace ("Connected Joystick: " + joystick.name);
  
  joystick.onAxisMove.add (function (axis:Int, value:Float) {
    trace ("Moved Axis " + axis + ": " + value);
  });
  
  joystick.onButtonDown.add (function (button:Int) {
    trace ("Pressed Button: " + button);
  });
  
  joystick.onButtonUp.add (function (button:Int) {
    trace ("Released Button: " + button);
  });
  
  joystick.onDisconnect.add (function () {
    trace ("Disconnected Joystick");
  });
  
  joystick.onHatMove.add (function (hat:Int, position:JoystickHatPosition) {
    trace ("Moved Hat " + hat + ": " + position);
  });
  
  joystick.onTrackballMove.add (function (trackball:Int, value:Float) {
    trace ("Moved Trackball " + trackball + ": " + value);
  });
  
});
```

If you are using a real joystick (with a hat or trackball) then `Joystick` provides clear access to these features. Also, for other game controllers, `Joystick` provides you with the raw hardware event values, buttons and axes are dispatched using the real hardware IDs rather than named axis or button values. This may particularly help with creating or modifying Lime Gamepad mappings.

The old `JoystickEvent` has been deprecated, I hope that you enjoy the new `Gamepad` or `Joystick` API, or use the `GameInput` API for Flash compatibility. OpenFL Legacy will continue to use only `JoystickEvent`.

## More New Lime APIs

Over time, Lime has gained additional APIs which may come in handy.

### Log

Lime now has a `Log` class, with added support for logging levels.

```haxe
Log.error ("This is an error message");
Log.warn ("This is a warning message");
Log.info ("This is an informational message");
Log.debug ("This is a debug message");
Log.verbose ("This is a verbose message");
```

Logging levels are defined automatically, based upon the build time, or whether additional flags (such as `-verbose`) exist when run.

### Clipboard

Lime has standard clipboard support now.

```haxe
var text = Clipboard.text;
Clipboard.text = "Hello";
```

### BackgroundWorker/ThreadPool

For simpler use of threads, Lime has added the `BackgroundWorker` class. This allows you to start an asynchronous task on another thread, or where threads are not supported, it will operate inline.

```haxe
var worker = new BackgroundWorker ();
worker.doWork.add (function (data) {
  worker.sendComplete ("Done!");
});
worker.onComplete.add (function (result) trace (result));
worker.run ();
```

Workers can support error and progress event types as well.

When there is a task that may benefit from multiple threads, the `ThreadPool` class provides support for spinning up (and shutting down) background threads for you.

```haxe
var pool = new ThreadPool (1, 2);
pool.doWork.add (function (data) {
  pool.sendComplete ("Done!");
});
pool.onComplete.add (function (result) trace (result));
pool.queue ();
```

### Future/Promise

In order to better support asynchronous loading, Lime has added Future/Promise API support.

```haxe
var future = Assets.loadImage ("image.png");
future.onComplete (function (image) trace ("Loaded"));
future.onProgress (function (progress) trace ("Progress: " + progress));
future.onError (function (msg) trace ("Error " + msg));
```

This is also exposed in the newer OpenFL `Assets` class for "load" methods.

Unlike a standard "loaded" callback, returning a future allows you to handle error and progress callbacks, and allows chains, so that an error earlier in the process will propogate to the final error handler, making things simpler.

A Future has the added benefit (as well) that an `onComplete` can be registered even after a Promise has completed a Future. In the case of `Assets`, a file may already be available when the Future is returned. Regardless, you can handle complete, progress or error conditions without worry about timing.

### Sensor

Lime now has support for accelerometer sensors, and the ground-work to help support new types of sensors in the future.

```haxe
var sensors = Sensor.getSensors (SensorType.ACCELEROMETER);

for (sensor in sensors) {
  
  sensor.onUpdate.add (function (x, y, z) {
    trace ("Sensor Update: " + x + ", " + y + ", " + z);
  });

}
```

OpenFL uses this to provide accelerometer support (internally).

## CFFI Prime

In the search for better, faster bindings between Haxe and C++ code, Lime now uses "CFFI Prime", a new format that Hugh Sanderson added to HXCPP and announced at the last Worldwide Haxe conference.

You may have heard things about new HXCPP extern support, allowing Haxe code to bind directly to C++ (when building to the C++ target) without the overhead cost of using traditial "CFFI" bindings.

This was not a good option for Lime, because it would make our code more complex, push internal header search paths to the user, and it would break (or complicate) support for runtimes that currently support the Lime binary (such as using Neko and Node.js on a desktop)

"CFFI Prime" is a hybrid approach that provide bindings as fast as HXCPP externs when targeting C++, but provide support for other runtimes (such as Neko) as well. In our tests, the new prime bindings are 10x to 42x faster than the original CFFI bindings on C++, and are marginally faster on Node.js and Neko.

## Tilemap

One of the faster APIs in OpenFL is `drawTiles`. Since the beginning, there have been ideas for creating something that would be easier to use, but also, time has shown a number of reasons why it is important to consider and plan a replacement API.

1. The long data array used for `drawTiles` calls was made to optimize CFFI performance. Lime has better CFFI support now, but going to the renderer no longer requires CFFI at all. This format is actually more inconvient now to the renderer architecture, and is not really convenient as a user.

2. OpenFL `Graphics` is used for curves, lines, fills and other vector operations, which is not a good place to put a hardware batching API. This has added complexity, and has made it hard to support both operations under all circumstances.

3. Without Stage3D, using `bitmapData.copyPixels` is usually the fastest on Flash. However, `BitmapData` requires an exact size. The nature of `drawTiles` makes it difficult to anticipate the render target size. Having an explicit tile render size would also improve performance on other targets that currently have to measure the output of drawTiles.

4. Initial explorations have shown 230% performance improvement on capable hardware, and this could be (likely) improved more.

For these reasons (and others), the goal is to come up with a suitable `drawTiles` replacement that is robust and ready for the future.

The goal of OpenFL is not to introduce many new APIs, so this does make things difficult, but Flash has `Graphics` for vector shapes, `Bitmap` for pixel operations, `TextField` for text and `DisplayObject` for the display list. In exploring the paradigms that other projects use for batches of many objects that may be larger than a pixel, "particle", "tile" and "sprite" are the most common I found. Since OpenFL is using the Flash vocabulary, "sprite" is not a good choice, and we have a history of using "tile".

It would be possible to create an API designed around tilemaps that support common use-cases and editors (such as Tiled) while maintaining fast batch performance. Perhaps the API could support orthogonal or isometric tilemaps. This would support many optimizations `drawTiles` cannot do right now, and would be a passive API (like the display list) that improves usage.

The current "openfl-samples" version of BunnyMark uses the beginning of a `Tilemap` API, similar to the following:

```haxe
var bitmapData = Assets.getBitmapData ("image.png");
var tileset = new Tileset (bitmapData);
tileset.addRect (bitmapData.rect);

var tilemap = new Tilemap (stage.stageWidth, stage.stageHeight);
var layer = new TilemapLayer (tileset);

for (i in 0...100) {
  
  layer.addTile (new Tile (0, Math.random () * tilemap.width, Math.random () * tilemap.height));
  
}

tilemap.addLayer (layer);
addChild (tilemap);
```

I would love to discuss input and feedback and creating a powerful, flexible and suitable tile API.

## Maturing OpenFL

In the past few months, there have been [over 140 changes](https://github.com/openfl/openfl/blob/master/CHANGELOG.md) to OpenFL, too many to discuss! Each step along the way, OpenFL gets more mature, more consistent and more powerful.

## SWF Improvements

Starting today, a new OpenFL plug-in for Flash Professional CC is available from Adobe Add-ons.

Now, you can create a new OpenFL FLA for use with your projects. If you publish your FLA inside of an asset path for your project (such as the "Assets" folder) it will be immediately available without any changes to your project.xml. OpenFL will automatically include the SWF library, and use the options used in the FLA publish settings.

OpenFL supports two SWF types, SWF and SWFLite. Type SWF is used on Flash for the native SWF `Loader`, and SWFLite is elsewhere by default. Type SWF uses runtime code to process SWF assets, but type SWFLite processes at compile-time, enjoys better performance and works with HTML5. SWFLite decodes your SWF into meta-data (such as where to `beginFill` or `curveTo`) and flat images of any JPEG, PNG or JPEG + alpha images from the SWF. Vector types are preserved, though it is expected that you embed any fonts used separately (to use existing font/webfont pipeline in OpenFL).

"Export for ActionScript" symbols create Haxe classes by default. This means that these symbols can be created on-the-fly, or even extended. The generated Haxe classes even make references to named child objects.

```haxe
class Main extends SWFSymbol {
  
  public function new () {
    
    super ();
    
    childObject.x = 100;
    childObject.y = 200;
    
  }
  
}
```

Now the SWFLite supports animation, so we expect things to get even more exciting!

## Conclusion

The summer was packed with new improvements, and fall looks to be no exception. We are excited about OpenFL, Lime, SWF and other features coming. Thank to all of our [Patreon]() sponsors. Your monthly support provides for the ongoing cost of running the OpenFL website, build servers, Github and other business aspects of keeping the project going. Thank you so much. If you would like to support OpenFL, you can help on the forums, contribute on Github and give on Patreon.

### And Just One More Thing

Have you seen the console videos yet? :)

[YouTube](https://www.youtube.com/watch?v=rnJ3qkwzcqw&list=PLF1S8k0g8YOXhS0d0JnPDg9Cn9CSATudc&index=4)
