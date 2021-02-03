---
title: Getting Started
---

## Install NPM

If you do not have Node.js installed, download and install it [here](https://nodejs.org/).

NPM is included by default with Node.js, but may be out-of-date. Update NPM by running the following command:

```bash
npm install npm -g
```

_You may have to run this using `sudo` on Linux or macOS._


## Install a Code Editor

Next, you should make sure that you have a code editor that is designed for TypeScript, Haxe or at a minimum, syntax highlighting for JavaScript. There are many choices, but if you are unsure, we recommend you start with [Visual Studio Code](https://code.visualstudio.com).


## Creating a New Project

The simplest way to get started with OpenFL is to use a generator to make a new project:

```bash
npm install -g yo generator-openfl
mkdir MyNewProject
cd MyNewProject
yo openfl
```

You will have the opportunity to choose TypeScript, Haxe, ES6 or ES5 as the source language (or syntax) for your new project.


## Running Your Project

The default project template is configured with a "hot reload" development server. You can start a development server by going to the root directory of your project, and running `npm start`. In addition to compiling your application, it will open a new window in your web browser, with hot reloading enabled. This means that if you edit the `app.ts`, `app.js` or `App.hx` source file, the server will automatically compile your changes, and reload the current window, speeding up development.


## Making Some Changes

Open your code editor and select "Open Folder", then open the new project directory we created. Otherwise, if there is no option to open a folder, edit "src/app.ts", "src/app.js" or "src/App.hx" by itself.

To draw a square, you could update the file to look like this:

{% capture typescript %}
```ts
import Sprite from "openfl/display/Sprite";
import Stage from "openfl/display/Stage";


class App extends Sprite {
	
	
	constructor () {
		
		super ();
		
		this.graphics.beginFill (0x24AFC4);
		this.graphics.drawRect (0, 0, 100, 100);
		
	}
	
	
}


var stage = new Stage (550, 400, 0xFFFFFF, App);
document.body.appendChild (stage.element);
```
{% endcapture %}
{% capture haxe %}
```js
import openfl.display.Sprite;
import openfl.display.Stage;


class App extends Sprite {
	
	
	public function new () {
		
		super ();
		
		graphics.beginFill (0x24AFC4);
		graphics.drawRect (0, 0, 100, 100);
		
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
import Sprite from "openfl/display/Sprite";
import Stage from "openfl/display/Stage";


class App extends Sprite {
	
	
	constructor () {
		
		super ();
		
		this.graphics.beginFill (0x24AFC4);
		this.graphics.drawRect (0, 0, 100, 100);
		
	}
	
	
}


var stage = new Stage (550, 400, 0xFFFFFF, App);
document.body.appendChild (stage.element);
```
{% endcapture %}
{% capture es5 %}
```js
var Sprite = require ("openfl/display/Sprite").default;
var Stage = require ("openfl/display/Stage").default;


var App = function () {
	
	Sprite.call (this);
	
	this.graphics.beginFill (0x24AFC4);
	this.graphics.drawRect (0, 0, 100, 100);
	
}

App.prototype = Sprite.prototype;


var stage = new Stage (550, 400, 0xFFFFFF, App);
document.body.appendChild (stage.element);
```
{% endcapture %}
{% include code.md %}

{% capture embed %}
var Sprite = openfl.display.Sprite;
var Stage = openfl.display.Stage;


var App = function () {
	
	Sprite.call (this);
	
	this.graphics.beginFill (0x24AFC4);
	this.graphics.drawRect (0, 0, 100, 100);
	
}

App.prototype = Sprite.prototype;
{% endcapture %}
{% include embed.md %}

If you already started your project (using `npm start`), the browser window should reload once you change and save your entry file. If not, run `npm start` from the project directory to test it now.


## Next Steps

There are more sample projects with additional features (such as sound, animation and video) in each of the OpenFL samples repositories:

 - [https://github.com/openfl/openfl-samples-ts](https://github.com/openfl/openfl-samples-ts)
 - [https://github.com/openfl/openfl-samples-haxe](https://github.com/openfl/openfl-samples-haxe)
 - [https://github.com/openfl/openfl-samples-es6](https://github.com/openfl/openfl-samples-es6)
 - [https://github.com/openfl/openfl-samples-es5](https://github.com/openfl/openfl-samples-es5)

Each of the samples can be tested using `npm install` then `npm start`

You can also build on this example by going through the [Displaying a Bitmap](../tutorials/displaying-a-bitmap/) tutorial.

Having any trouble? Go to our helpful [community](http://community.openfl.org/c/help) and post a question, we would love to help!
