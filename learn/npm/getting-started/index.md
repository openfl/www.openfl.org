---
title: Getting Started
---

## Creating a New Project

The simplest way to get started is to use Yeoman to create a new project:

```bash
npm install -g yo generator-openfl
mkdir DisplayingABitmap
cd DisplayingABitmap
yo openfl
```

You will have the opportunity to choose TypeScript, Haxe, ES6 or ES5 as the source language for your new project.

The template project will include configuration files for Webpack, as well as a source code entry point where you can begin writing a new project.

Next, download [openfl.png](https://github.com/openfl/openfl/raw/develop/assets/openfl.png) and save it your new "dist" directory.

## Adding Some Code

Now we can use [Visual Studio Code](https://code.visualstudio.com) (or another code editor) to open "src/app.ts", "src/app.js" or "src/App.hx", depending upon the language type you used when you created the project. We will need to add a couple more imports, and a little code to load and display an image.

At the top of the file, add some new imports:

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

Then extend the constructor so it looks like this:

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

## Running the Project

You can start a development server by going to the root directory of your project, and running `npm start`. In addition to compiling your application, it will open a new window in your web browser, with hot reloading enabled. This means that if you edit the `app.ts`, `app.js` or `App.hx` source file, the server will automatically compile your changes, and reload the current window, speeding up development. Now we can making more changes.


## Adding Changes

You can continue make changes to your `app.ts`, `app.js` or `App.hx` file, to manipulate your bitmap after it is loaded.

For example:

```js
bitmap.x = 10;
bitmap.y = 200;
bitmap.rotation = 45;
bitmap.alpha = 0.5;
```

## Other Samples

There are more sample projects with additional features (such as sound, animation and video) in each of the OpenFL samples repositories:

 - [https://github.com/openfl/openfl-samples-ts](https://github.com/openfl/openfl-samples-ts)
 - [https://github.com/openfl/openfl-samples](https://github.com/openfl/openfl-samples)
 - [https://github.com/openfl/openfl-samples-es6](https://github.com/openfl/openfl-samples-es6)
 - [https://github.com/openfl/openfl-samples-es5](https://github.com/openfl/openfl-samples-es5)

Each of the samples can be tested using `npm install` then `npm start`
