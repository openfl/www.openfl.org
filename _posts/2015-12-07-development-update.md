---
layout: post
title: Winter Update
---

Hearts warm with Thanksgiving, allow us to take a moment and thank all of our Patreon contributors, every code contribution, the fellowship of friends and developers on Slack and our community forums. There is a brand new release of Lime and OpenFL for you. Thank you for making this a great place to build software together!

## New ByteArray

A foundational brick that has not been turned in a while is the old ByteArray class. The code was very platform-specific, with a lot of tweaks and workarounds that are not needed for modern Haxe development. Further, conversion between the Lime ByteArray and the Haxe Bytes type was cumbersome -- Flash, HTML5, Node.js and C++/Neko all had different methods. It has been a difficult task, but we have a new ByteArray that passes all our tests, and should make things faster, stronger and more stable for our future.

### What Changed?

Previously, Lime had a `lime.utils.ByteArray` class, and `openfl.utils.ByteArray` was a reference back to it. Ultimately, ByteArray is an OpenFL API. Since Haxe 3.2, the Haxe `Bytes` class has improved tremendously, both in performance and consistency. As Haxe continues to grow with even more supported platforms, "getting on the bandwagon" with the core Bytes type is of great benefit.

Lime no longer has a `ByteArray` class, and uses `Bytes` internally. If you would like the `ByteArray` sugar on top, you can import OpenFL.

### ByteArray Abstract

The new `ByteArray` in OpenFL is an abstract. What does that mean? Simple.

Now we have true cross-platform array access, support for setting `length` and simple conversion to/from `Bytes`:

```haxe
var byteArray = new ByteArray ();
byteArray.length = 100;
byteArray[2] = 1337;

var bytes:Bytes = byteArray;
```

By making `ByteArray` abstract, we have simplified conversion to and from the Haxe `Bytes` type, and improve the use of `ByteArray` as one would truly expect. There is one downside to being an abstract, since it is compile-time only, it means that reflection is only possible on a base underlying type. You should be able to check for a `ByteArray` like this:

```haxe
if (Std.is (byteArray, ByteArrayData)) {
```

Similarly, an abstract cannot be extended. It is (unfortunately) necessary to use `ByteArrayData` when directly embedding a file:

```haxe
@:file class MyClass extends ByteArrayData {}
```

Considering all of the choices we have (and based on a vote in the forums) we have moved in favor of an abstract, which should favor the best API for ByteArray in most all use-cases.

As we focus our support around `haxe.io.Bytes`, it is necessary to use Haxe 3.2 or greater to use the new `ByteArray`. We are aware that there are no Haxe 3.2 pre-compiled for the Raspberry Pi, please let us know if you are interesting in working together with the Haxe Foundation to create updated binaries for the Pi.

## ANGLE for Windows

We are happy to announce we have restored Windows XP support, but as we have focused more intently on keeping broad Windows system support, we have seen some serious gaps in OpenGL driver support on some older systems. The solution appears to be Direct3D, which we are now using in the form of ANGLE. The ANGLE project brings OpenGL ES support to Windows over the top of Direct3D, which has proven to smooth out issues we experienced even in our own hardware, and brings us closer to supporting Windows universal applications for Windows Store or Windows Phone if we choose. ANGLE is used by Chrome, Opera, Firefox, Qt and other large projects. Newer drivers should support OpenGL ES natively without ANGLE, so we have not seen performance regressions on modern hardware, but have only seen improved support across our testing group.

ANGLE adds a couple megabytes of additional size to applications in separate DLLs, but is disabled in Windows `-static` builds in order to generate a single binary.

**UPDATE**: Although we experienced comparable performance between OpenGL and ANGLE on Windows, we have received reports of performance regressions elsewhere. Until we can perform more testing, we are disabling ANGLE for Windows builds, but it can still be enabled optionally when building from the source.

Use `lime rebuild windows -clean -DLIME_SDL_ANGLE` to build for ANGLE on Windows, and use (either) `<set name="angle" />` or `-Dangle` in your project to copy the needed DLLs. We appreciate your feedback and input as we seek the best balance of performance and compatibility! 

## Gamepad Support for HTML5

The latest Lime includes initial support for the HTML5 Gamepad API, supported by Chrome, Opera and Firefox. In testing with a Logitech gamepad, one browser worked for all buttons and axes (except for the X button, which it thought was constantly depressed) and another browser recognized it as a joystick, but lacked button mappings to support our Gamepad API. More popular gamepads (such as the Xbox One controller) may fare better, and we may see continued support as browsers are updated. Either way, we think it is a promising start to bridging all the features we can across the board for consistent play in many different environments.

## OpenFL Externs

OpenFL is on its way to supporting a full range of extern classes. As we move toward making OpenFL and Lime more modular, having a set of extern classes for all core types is going to be valuable. In the future, we would like to have separate "lime.js" or "openfl.js" files, allowing for better browser caching and making it possible to more aggressively minify the codebase for JavaScript. This will also help if we make it possible to create modular Neko or C++ applications, and has already helped improve our code completion and documentation.

This change also affects the Flash target, as we create extern classes we are moving the Flash target to using our definitions for each core class instead of the Haxe core files. In practice, this helps brings visibility to missing functions, unimplemented properties and unintentional variations in the core API between each platform. It also gives us the ability to fix some issues in our support of the Flash target, for example, making `SharedObjectFlushStatus` a consistent enum on all platforms instead of being only a `String` value on Flash.

As Flash Player becomes less important, and "Flash Professional CC" is now being renamed "Animate CC", we feel that the Flash target becomes more important as a consistent member of the OpenFL runtimes, rather than dodging around Flash-specific quirks we could otherwise smooth over. It is important that OpenFL continues to prove that consistent development is not only possible, but rewarding across multiple distinct environments. We will continue to work to remove any barriers that prevent valid code from working as expected across the board. We are excited about the "new birth" of Adobe Animate, and hope to continue to find ways to accelerate and improve your development workflow to keep things fun and productive!

## Consistency Fixes

We have initial support for `sprite.hitArea`, ANGLE has greatly helped with OpenGL shader support for filters across Windows systems, the `SimpleButton` class has been rewritten to work better (and to properly extend `InteractiveObject` like it should). `SharedObject.getLocal` now returns a consistent instance when referencing the same ID, and many other minor changes have been made to continue to tighten up the consistency of OpenFL.

We also added a new `openfl.utils.Object`, which should work like the ActionScript "Object" type in many ways. Unlike a traditional Haxe `Dynamic`, `openfl.utils.Object` supports helpful features such as simple array access and loop iteration:

```haxe
var object:Object = { color: "red", price: 100.00, fast: true };

for (field in object) {
	
	trace (field + " is " + object[field]);
	
}
```

## Wrap-Up

We are looking forward to the end of a great year, and thank you for all of your support. Despite all of our tests, there may be some regressions are not aware of, so please let us know if you experience any issues going forward. Step by step, we hope that OpenFL and Lime continue to grow as a "[Goldilocks Zone](http://www.bbc.co.uk/science/space/solarsystem/sun_and_planets/earth)" of development -- just right. Thank you for helping us make development better for everyone!
