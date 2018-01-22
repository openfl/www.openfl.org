---
title: Displaying a Bitmap
---

## Setup

_You may find a completed "features/display/DisplayingABitmap" sample project for [TypeScript](https://github.com/openfl/openfl-samples-ts), [Haxe](https://github.com/openfl/openfl-samples/tree/master/npm), [ES6](https://github.com/openfl/openfl-samples-es6) or [ES5](https://github.com/openfl/openfl-samples-es5) online, the following describes how to add and display a bitmap image from an empty project._

Run the following commands:

```bash
mkdir DisplayingABitmap
cd DisplayingABitmap
yo openfl
```

## Add an Image File

The output of our project will be run from a directory called `dist` in the project structure, so adding any new image file in the `dist` directory will make it possible to load it in the project.

You can choose any image file you prefer, or download [openfl.png](/learn/assets/openfl.png) and save it under `dist`.


## Loading a Bitmap

Images are not available right away, but must be loaded to use them at runtime. There are multiple ways to load an image from file, including `openfl.net.Loader` or the OpenFL asset library system, but using `BitmapData.loadFromFile` is one of the most straightforward.

Add the following imports to the top of your `app.ts`, `app.js` or `App.hx` file, depending upon the language you chose when you generated your project:

{% capture typescript %}
```ts
import Bitmap from "openfl/display/Bitmap";
import BitmapData from "openfl/display/BitmapData";
```
{% endcapture %}
{% capture haxe %}
```js
import openfl.display.Bitmap;
import openfl.display.BitmapData;
```
{% endcapture %}
{% capture es6 %}
```js
import Bitmap from "openfl/display/Bitmap";
import BitmapData from "openfl/display/BitmapData";
```
{% endcapture %}
{% capture es5 %}
```js
var Bitmap = require ("openfl/display/Bitmap").default;
var BitmapData = require ("openfl/display/BitmapData").default;
```
{% endcapture %}
{% include code.md %}

This will make the `openfl.display.Bitmap` and `openfl.display.BitmapData` types available in our code. Next, we can add some additional code inside of our constructor. After the change, the constructor method should look like this:

{% capture typescript %}
```ts
constructor () {
	
	super ();
	
	BitmapData.loadFromFile ("openfl.png").onComplete ((bitmapData) => {
		
		var bitmap = new Bitmap (bitmapData);
		this.addChild (bitmap);
		
	});
	
}
```
{% endcapture %}
{% capture haxe %}
```js
public function new () {
	
	super ();
	
	BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
		
		var bitmap = new Bitmap (bitmapData);
		addChild (bitmap);
		
	});
	
}
```
{% endcapture %}
{% capture es6 %}
```js
constructor () {
	
	super ();
	
	BitmapData.loadFromFile ("openfl.png").onComplete ((bitmapData) => {
		
		var bitmap = new Bitmap (bitmapData);
		this.addChild (bitmap);
		
	});
	
}
```
{% endcapture %}
{% capture es5 %}
```js
var App = function () {
	
	Sprite.call (this);
	
	BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
		
		var bitmap = new Bitmap (bitmapData);
		this.addChild (bitmap);
		
	}.bind (this));
	
}
```
{% endcapture %}
{% include code.md %}

Altogether, the your `app.ts`, `app.js` or `App.hx` file should look similar to this:

{% capture typescript %}
```ts
import Bitmap from "openfl/display/Bitmap";
import BitmapData from "openfl/display/BitmapData";
import Sprite from "openfl/display/Sprite";
import Stage from "openfl/display/Stage";


class App extends Sprite {
	
	
	constructor () {
		
		super ();
		
		BitmapData.loadFromFile ("openfl.png").onComplete ((bitmapData) => {
			
			var bitmap = new Bitmap (bitmapData);
			this.addChild (bitmap);
			
		});
		
	}
	
	
}


var stage = new Stage (550, 400, 0xFFFFFF, App);
document.body.appendChild (stage.element);
```
{% endcapture %}
{% capture haxe %}
```js
import openfl.display.Bitmap;
import openfl.display.BitmapData;
import openfl.display.Sprite;
import openfl.display.Stage;


class App extends Sprite {
	
	
	public function new () {
		
		super ();
		
		BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
			
			var bitmap = new Bitmap (bitmapData);
			addChild (bitmap);
			
		});
		
	}
	
	
	static function main () {
		
		var stage = new Stage (550, 400, 0xFFFFFF, App);
		js.Browser.document.body.appendChild (stage.element);
		
	}
	
	
}
```
{% endcapture %}
{% capture es6 %}
```js
import Bitmap from "openfl/display/Bitmap";
import BitmapData from "openfl/display/BitmapData";
import Sprite from "openfl/display/Sprite";
import Stage from "openfl/display/Stage";


class App extends Sprite {
	
	
	constructor () {
		
		super ();
		
		BitmapData.loadFromFile ("openfl.png").onComplete ((bitmapData) => {
			
			var bitmap = new Bitmap (bitmapData);
			this.addChild (bitmap);
			
		});
		
	}
	
	
}


var stage = new Stage (550, 400, 0xFFFFFF, App);
document.body.appendChild (stage.element);
```
{% endcapture %}
{% capture es5 %}
```js
var Bitmap = require ("openfl/display/Bitmap").default;
var BitmapData = require ("openfl/display/BitmapData").default;
var Sprite = require ("openfl/display/Sprite").default;
var Stage = require ("openfl/display/Stage").default;


var App = function () {
	
	Sprite.call (this);
	
	BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
		
		var bitmap = new Bitmap (bitmapData);
		this.addChild (bitmap);
		
	}.bind (this));
	
}

App.prototype = Sprite.prototype;


var stage = new Stage (550, 400, 0xFFFFFF, App);
document.body.appendChild (stage.element);
```
{% endcapture %}
{% include code.md %}

`BitmapData.loadFromFile ("openfl.png")` is a method to load a single bitmap, and returns an `openfl.utils.Future`. An OpenFL `Future` accepts callbacks for progress (`onProgress (function (bytesLoaded, bytesTotal) {})`), errors (`onError (function (error) {})`) as well as completion (`onComplete (function (value) {})`).

In this case, we are receiving an `openfl.display.BitmapData` object of our image file. Once it is loaded as a bitmap, we can get pixels, change pixels, copy pixels between images, or for this sample, render it.

The simplest way to display `BitmapData` is using `openfl.display.Bitmap`, which accepts a `BitmapData` as the first argument:

```js
var bitmap = new Bitmap (bitmapData);
```

This can be added to the object model, or "display list", to be visible when the OpenFL renderer enters a new frame.

```js
this.addChild (bitmap);
```

{% capture embed %}
var Bitmap = openfl.display.Bitmap;
var BitmapData = openfl.display.BitmapData;
var Sprite = openfl.display.Sprite;
var Stage = openfl.display.Stage;

var App = function () {
	
	Sprite.call (this);
	
	BitmapData.loadFromFile ("{{ site.baseurl }}/learn/assets/openfl.png").onComplete (function (bitmapData) {
		
		var bitmap = new Bitmap (bitmapData);
		this.addChild (bitmap);
		
	}.bind (this));
	
}

App.prototype = Sprite.prototype;
{% endcapture %}
{% include embed.md %}


## Manipulating the Bitmap

Now that our image is visible, you can try changing properties common to all `openfl.display.DisplayObject` instances. Common properties include `x`, `y`, `alpha`, `rotation`, `scaleX` and `scaleY`.

For example:

```js
bitmap.x = 10;
bitmap.y = 200;
bitmap.rotation = -10;
bitmap.alpha = 0.5;
```

{% capture embed %}
var Bitmap = openfl.display.Bitmap;
var BitmapData = openfl.display.BitmapData;
var Sprite = openfl.display.Sprite;
var Stage = openfl.display.Stage;

var App = function () {
	
	Sprite.call (this);
	
	BitmapData.loadFromFile ("{{ site.baseurl }}/learn/assets/openfl.png").onComplete (function (bitmapData) {
		
		var bitmap = new Bitmap (bitmapData);
		this.addChild (bitmap);
		bitmap.x = 10;
		bitmap.y = 200;
		bitmap.rotation = -10;
		bitmap.alpha = 0.5;
		
	}.bind (this));
	
}

App.prototype = Sprite.prototype;
{% endcapture %}
{% include embed.md %}


## Next Steps

Once you feel you have mastered this step, let's make it more exciting by [Adding Animation](adding-animation). Problems or concerns? Visit our helpful [community](http://community.openfl.org/) and we would be glad to help you!