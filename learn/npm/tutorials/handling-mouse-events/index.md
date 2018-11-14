---
title: Handling Mouse Events
---

## Setup

_You may find a completed "features/events/HandlingMouseEvent" sample project for [TypeScript](https://github.com/openfl/openfl-samples-ts), [Haxe](https://github.com/openfl/openfl-samples/tree/master/npm), [ES6](https://github.com/openfl/openfl-samples-es6) or [ES5](https://github.com/openfl/openfl-samples-es5) online, the following describes how to handle mouse events from an empty project._

Run the following commands:

```bash
mkdir HandlingMouseEvents
cd HandlingMouseEvents
yo openfl
```

Next, download [openfl.png](openfl.png) and save it to the "dist" directory.

Open the "src/app.ts", "src/app.js" or "src/App.hx" file and add some code to load and display the image.

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

{% capture typescript %}
```ts
BitmapData.loadFromFile ("openfl.png").onComplete ((bitmapData) => {
	
	var bitmap = new Bitmap (bitmapData);
	bitmap.x = 100;
	bitmap.y = 100;
	this.addChild (bitmap);
	
});
```
{% endcapture %}
{% capture haxe %}
```ts
BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
	
	var bitmap = new Bitmap (bitmapData);
	bitmap.x = 100;
	bitmap.y = 100;
	addChild (bitmap);
	
});
```
{% endcapture %}
{% capture es6 %}
```ts
BitmapData.loadFromFile ("openfl.png").onComplete ((bitmapData) => {
	
	var bitmap = new Bitmap (bitmapData);
	bitmap.x = 100;
	bitmap.y = 100;
	this.addChild (bitmap);
	
});
```
{% endcapture %}
{% capture es5 %}
```ts
BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
	
	var bitmap = new Bitmap (bitmapData);
	bitmap.x = 100;
	bitmap.y = 100;
	this.addChild (bitmap);
	
}.bind (this));
```
{% endcapture %}
{% include code.md %}

{% capture embed %}
var Bitmap = openfl.display.Bitmap;
var BitmapData = openfl.display.BitmapData;
var Sprite = openfl.display.Sprite;
var Stage = openfl.display.Stage;

var App = function () {
	
	Sprite.call (this);
	
	BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
		
		var bitmap = new Bitmap (bitmapData);
		bitmap.x = 100;
		bitmap.y = 100;
		this.addChild (bitmap);
		
	}.bind (this));
	
}

App.prototype = Sprite.prototype;
{% endcapture %}
{% include embed.md %}


## Interactive Objects

If you have already completed the [Displaying a Bitmap](../displaying-a-bitmap) and [Adding Animation](../adding-animation) tutorials, then you should be familiar with creating a {% include api.md ref="openfl.display.Bitmap" label="Bitmap" %} objects. Each of these objects is called a {% include api.md ref="openfl.display.DisplayObject" label="DisplayObject" %}, which is compatible with the "display list", or scene graphs of objects that will be rendered automatically. {% include api.md ref="openfl.display.Bitmap" label="Bitmap" %} objects are not _interactive objects_, however.

The abstract {% include api.md ref="openfl.display.InteractiveObject" label="InteractiveObject" %} base class defines objects that provide interactive events, such as {% include api.md ref="openfl.events.MouseEvent" %} and {% include api.md ref="openfl.events.TouchEvent" %}.

The most common {% include api.md ref="openfl.display.InteractiveObject" label="InteractiveObject" %} in OpenFL is called a {% include api.md ref="openfl.display.Sprite" label="Sprite" %}. A {% include api.md ref="openfl.display.Sprite" label="Sprite" %} is an object container, and is interactive. It is somewhat similar to a `div` element. {% include api.md ref="openfl.display.Sprite" label="Sprite" %} objects are lightweight and are often used for convenience in positioning objects, or to allow interaction or draw primitive vector shapes.

Our {% include api.md ref="openfl.display.Bitmap" label="Bitmap" %} is visible, but not interactive, so we can make it a child of a {% include api.md ref="openfl.display.Sprite" label="Sprite" %} in order to start making it interactive. We will also enable the {% include api.md ref="openfl.display.Sprite" label="Sprite" %} {% include api.md ref="openfl.display.Sprite" sub="buttonMode" label="buttonMode" %} property, which makes the mouse cursor turn into a click cursor when you hover over the object.

Let us change the code so that instead of `bitmap` as a child directly, we add it as a child of a new {% include api.md ref="openfl.display.Sprite" label="Sprite" %} object instead. While we are at it, we will enable {% include api.md ref="openfl.display.Sprite" sub="buttonMode" label="buttonMode" %} to give us an interactive mouse cursor.

```js
var bitmap = new Bitmap (bitmapData);
bitmap.x = 100;
bitmap.y = 100;

var sprite = new Sprite ();
sprite.addChild (bitmap);
sprite.buttonMode = true;
this.addChild (sprite);
```

{% capture embed %}
var Bitmap = openfl.display.Bitmap;
var BitmapData = openfl.display.BitmapData;
var Sprite = openfl.display.Sprite;
var Stage = openfl.display.Stage;

var App = function () {
	
	Sprite.call (this);
	
	BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
		
		var bitmap = new Bitmap (bitmapData);
		bitmap.x = 100;
		bitmap.y = 100;
		
		var sprite = new Sprite ();
		sprite.addChild (bitmap);
		sprite.buttonMode = true;
		this.addChild (sprite);
		
	}.bind (this));
	
}

App.prototype = Sprite.prototype;
{% endcapture %}
{% include embed.md %}


## Handling a `MOUSE_DOWN` Event

First, we can begin handling mouse events by adding an import for {% include api.md ref="openfl.events.MouseEvent" %}:

{% capture typescript %}
```ts
import MouseEvent from "openfl/events/MouseEvent";
```
{% endcapture %}
{% capture haxe %}
```js
import openfl.events.MouseEvent;
```
{% endcapture %}
{% capture es6 %}
```js
import MouseEvent from "openfl/events/MouseEvent";
```
{% endcapture %}
{% capture es5 %}
```js
var MouseEvent = require ("openfl/events/MouseEvent").default;
```
{% endcapture %}
{% include code.md %}

There are multiple events available normally in the browser (such as `"click"`, `"mousedown"` or `"mouseup"`), but these are only available to elements that have been added to the DOM. This is a similar concept to the way events work in OpenFL, but OpenFL events work even when using 2D canvas or WebGL rendering. The names of OpenFL events are similar to the DOM, but use "camel-case", like `"mouseDown"` and `"mouseUp"`. For this example, we will use the {% include api.md ref="openfl.events.MouseEvent" label="MouseEvent" %} type, but you can also use literal strings.

Below `addChild (sprite)` in the code, we can also listen for {% include api.md ref="openfl.events.MouseEvent" sub="MOUSE_DOWN" label="MouseEvent.MOUSE_DOWN" %} event:

{% capture typescript %}
```ts
sprite.addEventListener (MouseEvent.MOUSE_DOWN, (e:MouseEvent) => {
	
	alert ("MOUSE DOWN");
	
});
```
{% endcapture %}
{% capture haxe %}
```js
sprite.addEventListener (MouseEvent.MOUSE_DOWN, function (e) {
	
	js.Browser.alert ("MOUSE DOWN");
	
});
```
{% endcapture %}
{% capture es6 %}
```js
sprite.addEventListener (MouseEvent.MOUSE_DOWN, (e) => {
	
	alert ("MOUSE DOWN");
	
});
```
{% endcapture %}
{% capture es5 %}
```js
sprite.addEventListener (MouseEvent.MOUSE_DOWN, function (e) {
	
	alert ("MOUSE DOWN");
	
}.bind (this));
```
{% endcapture %}
{% include code.md %}

Now, if you click on the icon, you should get a browser `alert` message that you clicked the object.

{% capture embed %}
var Bitmap = openfl.display.Bitmap;
var BitmapData = openfl.display.BitmapData;
var Sprite = openfl.display.Sprite;
var Stage = openfl.display.Stage;
var MouseEvent = openfl.events.MouseEvent;

var App = function () {
	
	Sprite.call (this);
	
	BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
		
		var bitmap = new Bitmap (bitmapData);
		bitmap.x = 100;
		bitmap.y = 100;
		
		var sprite = new Sprite ();
		sprite.addChild (bitmap);
		sprite.buttonMode = true;
		this.addChild (sprite);
		
		sprite.addEventListener (MouseEvent.MOUSE_DOWN, function (e) {
			
			alert ("MOUSE DOWN");
			
		}.bind (this));
		
	}.bind (this));
	
}

App.prototype = Sprite.prototype;
{% endcapture %}
{% include embed.md %}


## Simple Dragging

OpenFL provides convenience methods for simple drag-and-drop behaviors, called {% include api.md ref="openfl.display.DisplayObject" sub="startDrag" label="startDrag" %} and {% include api.md ref="openfl.display.DisplayObject" sub="stopDrag" label="stopDrag" %}. We can use this to add a simple drag-and-drop behavior, in combination with another event listener for {% include api.md ref="openfl.events.MouseEvent" sub="MOUSE_UP" label="MouseEvent.MOUSE_UP" %}.

Every {% include api.md ref="openfl.events.MouseEvent" label="MouseEvent" %} includes references for both the {% include api.md ref="openfl.events.Event" sub="target" label="target" %} and {% include api.md ref="openfl.events.Event" sub="currentTarget" label="currentTarget" %} of the {% include api.md ref="openfl.events.MouseEvent" label="MouseEvent" %}. In our listener, we could reference `sprite` directly, but we will use {% include api.md ref="openfl.events.Event" sub="currentTarget" label="currentTarget" %} to illustrate this behavior of mouse events.

The difference between {% include api.md ref="openfl.events.Event" sub="target" label="target" %} and {% include api.md ref="openfl.events.Event" sub="currentTarget" label="currentTarget" %} is that the {% include api.md ref="openfl.events.Event" sub="currentTarget" label="currentTarget" %} property will match the object on which you added an event listener. In our project, the `sprite` only contains one non-interactive object. In a larger project, you may have many children that are interactive. The {% include api.md ref="openfl.events.Event" sub="target" label="target" %} in that case would be the exact child object that triggered the event. If we expanded our project to include 20 objects that listen to mouse events, using {% include api.md ref="openfl.events.Event" sub="currentTarget" label="currentTarget" %} would allow us to share one listener among multiple objects.

{% capture typescript %}
```ts
sprite.addEventListener (MouseEvent.MOUSE_DOWN, (e:MouseEvent) => {
	
	e.currentTarget.startDrag ();
	
});

sprite.addEventListener (MouseEvent.MOUSE_UP, (e:MouseEvent) => {
	
	e.currentTarget.stopDrag ();
	
});
```
{% endcapture %}
{% capture haxe %}
```js
sprite.addEventListener (MouseEvent.MOUSE_DOWN, function (e) {
	
	e.currentTarget.startDrag ();
	
});

sprite.addEventListener (MouseEvent.MOUSE_UP, function (e) {
	
	e.currentTarget.stopDrag ();
	
});
```
{% endcapture %}
{% capture es6 %}
```js
sprite.addEventListener (MouseEvent.MOUSE_DOWN, (e) => {
	
	e.currentTarget.startDrag ();
	
});

sprite.addEventListener (MouseEvent.MOUSE_UP, (e) => {
	
	e.currentTarget.stopDrag ();
	
});
```
{% endcapture %}
{% capture es5 %}
```js
sprite.addEventListener (MouseEvent.MOUSE_DOWN, function (e) {
	
	e.currentTarget.startDrag ();
	
}.bind (this));

sprite.addEventListener (MouseEvent.MOUSE_UP, function (e) {
	
	e.currentTarget.stopDrag ();
	
}.bind (this));
```
{% endcapture %}
{% include code.md %}

{% capture embed %}
var Bitmap = openfl.display.Bitmap;
var BitmapData = openfl.display.BitmapData;
var Sprite = openfl.display.Sprite;
var Stage = openfl.display.Stage;
var MouseEvent = openfl.events.MouseEvent;

var App = function () {
	
	Sprite.call (this);
	
	BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
		
		var bitmap = new Bitmap (bitmapData);
		bitmap.x = 100;
		bitmap.y = 100;
		
		var sprite = new Sprite ();
		sprite.addChild (bitmap);
		sprite.buttonMode = true;
		this.addChild (sprite);
		
		sprite.addEventListener (MouseEvent.MOUSE_DOWN, function (e) {
			
			e.currentTarget.startDrag ();
			
		}.bind (this));
		
		sprite.addEventListener (MouseEvent.MOUSE_UP, function (e) {
			
			e.currentTarget.stopDrag ();
			
		}.bind (this));
		
	}.bind (this));
	
}

App.prototype = Sprite.prototype;
{% endcapture %}
{% include embed.md %}


## Adding Animation

If you want to make a drag behavior more exciting, you can add a delay between the position of the mouse cursor, and the position of the object you are dragging. This requires listening to both {% include api.md ref="openfl.events.MouseEvent" sub="MOUSE_DOWN" label="MouseEvent.MOUSE_DOWN" %}, {% include api.md ref="openfl.events.MouseEvent" sub="MOUSE_UP" label="MouseEvent.MOUSE_UP" %} and to {% include api.md ref="openfl.events.Event" sub="ENTER_FRAME" label="Event.ENTER_FRAME" %}.

The following is an example of how you could make an object trail behind the mouse cursor. It is important for code like this that you listen to the `stage`, or root of your project, for {% include api.md ref="openfl.events.MouseEvent" sub="MOUSE_UP" label="MouseEvent.MOUSE_UP" %} events, because trailing the cursor means that is possible that while the user may start by clicking down on the `sprite` object, when they release they may be over a different object, or no object. In this case, it is important to catch that the user released the mouse button.

{% capture typescript %}
```ts
import Event from "openfl/events/Event";
```
{% endcapture %}
{% capture haxe %}
```js
import openfl.events.Event;
```
{% endcapture %}
{% capture es6 %}
```js
import Event from "openfl/events/Event";
```
{% endcapture %}
{% capture es5 %}
```js
var Event = require ("openfl/events/Event").default;
```
{% endcapture %}
{% include code.md %}

{% capture typescript %}
```ts
let offsetX = 0;
let offsetY = 0;
let targetX = 0;
let targetY = 0;
let dragging = false;

sprite.addEventListener (MouseEvent.MOUSE_DOWN, (e:MouseEvent) => {
	
	offsetX = sprite.x - e.stageX;
	offsetY = sprite.y - e.stageY;
	dragging = true;
	
});

this.stage.addEventListener (MouseEvent.MOUSE_UP, (e:MouseEvent) => {
	
	dragging = false;
	
});

this.stage.addEventListener (Event.ENTER_FRAME, (e:Event) => {
	
	if (dragging) {
		
		targetX = this.stage.mouseX + offsetX;
		targetY = this.stage.mouseY + offsetY;
		
	}
	
	let diffX = targetX - sprite.x;
	let diffY = targetY - sprite.y;
	
	if (Math.abs (diffX) < 1) {
		
		sprite.x = targetX;
		
	} else {
		
		sprite.x += (diffX * 0.2);
		
	}
	
	if (Math.abs (diffY) < 1) {
		
		sprite.y = targetY;
		
	} else {
		
		sprite.y += (diffY * 0.2);
		
	}
	
});
```
{% endcapture %}
{% capture haxe %}
```js
var offsetX = 0;
var offsetY = 0;
var targetX = 0;
var targetY = 0;
var dragging = false;

sprite.addEventListener (MouseEvent.MOUSE_DOWN, function (e) {
	
	offsetX = sprite.x - e.stageX;
	offsetY = sprite.y - e.stageY;
	dragging = true;
	
});

stage.addEventListener (MouseEvent.MOUSE_UP, function (e) {
	
	dragging = false;
	
});

stage.addEventListener (Event.ENTER_FRAME, function (e) {
	
	if (dragging) {
		
		targetX = stage.mouseX + offsetX;
		targetY = stage.mouseY + offsetY;
		
	}
	
	var diffX = targetX - sprite.x;
	var diffY = targetY - sprite.y;
	
	if (Math.abs (diffX) < 1) {
		
		sprite.x = targetX;
		
	} else {
		
		sprite.x += (diffX * 0.2);
		
	}
	
	if (Math.abs (diffY) < 1) {
		
		sprite.y = targetY;
		
	} else {
		
		sprite.y += (diffY * 0.2);
		
	}
	
});
```
{% endcapture %}
{% capture es6 %}
```js
let offsetX = 0;
let offsetY = 0;
let targetX = 0;
let targetY = 0;
let dragging = false;

sprite.addEventListener (MouseEvent.MOUSE_DOWN, (e) => {
	
	offsetX = sprite.x - e.stageX;
	offsetY = sprite.y - e.stageY;
	dragging = true;
	
});

this.stage.addEventListener (MouseEvent.MOUSE_UP, (e) => {
	
	dragging = false;
	
});

this.stage.addEventListener (Event.ENTER_FRAME, (e) => {
	
	if (dragging) {
		
		targetX = this.stage.mouseX + offsetX;
		targetY = this.stage.mouseY + offsetY;
		
	}
	
	let diffX = targetX - sprite.x;
	let diffY = targetY - sprite.y;
	
	if (Math.abs (diffX) < 1) {
		
		sprite.x = targetX;
		
	} else {
		
		sprite.x += (diffX * 0.2);
		
	}
	
	if (Math.abs (diffY) < 1) {
		
		sprite.y = targetY;
		
	} else {
		
		sprite.y += (diffY * 0.2);
		
	}
	
});
```
{% endcapture %}
{% capture es5 %}
```js
var offsetX = 0;
var offsetY = 0;
var targetX = 0;
var targetY = 0;
var dragging = false;

sprite.addEventListener (MouseEvent.MOUSE_DOWN, function (e) {
	
	offsetX = sprite.x - e.stageX;
	offsetY = sprite.y - e.stageY;
	dragging = true;
	
}.bind (this));

this.stage.addEventListener (MouseEvent.MOUSE_UP, function (e) {
	
	dragging = false;
	
}.bind (this));

this.stage.addEventListener (Event.ENTER_FRAME, function (e) {
	
	if (dragging) {
		
		targetX = this.stage.mouseX + offsetX;
		targetY = this.stage.mouseY + offsetY;
		
	}
	
	var diffX = targetX - sprite.x;
	var diffY = targetY - sprite.y;
	
	if (Math.abs (diffX) < 1) {
		
		sprite.x = targetX;
		
	} else {
		
		sprite.x += (diffX * 0.2);
		
	}
	
	if (Math.abs (diffY) < 1) {
		
		sprite.y = targetY;
		
	} else {
		
		sprite.y += (diffY * 0.2);
		
	}
	
}.bind (this));
```
{% endcapture %}
{% include code.md %}

{% capture embed %}
var Bitmap = openfl.display.Bitmap;
var BitmapData = openfl.display.BitmapData;
var Sprite = openfl.display.Sprite;
var Stage = openfl.display.Stage;
var MouseEvent = openfl.events.MouseEvent;
var Event = openfl.events.Event;

var App = function () {
	
	Sprite.call (this);
	
	BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
		
		var bitmap = new Bitmap (bitmapData);
		bitmap.x = 100;
		bitmap.y = 100;
		
		var sprite = new Sprite ();
		sprite.addChild (bitmap);
		sprite.buttonMode = true;
		this.addChild (sprite);
		
		var offsetX = 0;
		var offsetY = 0;
		var targetX = 0;
		var targetY = 0;
		var dragging = false;
		
		sprite.addEventListener (MouseEvent.MOUSE_DOWN, function (e) {
			
			offsetX = sprite.x - e.stageX;
			offsetY = sprite.y - e.stageY;
			dragging = true;
			
		}.bind (this));
		
		this.stage.addEventListener (MouseEvent.MOUSE_UP, function (e) {
			
			dragging = false;
			
		}.bind (this));
		
		this.stage.addEventListener (Event.ENTER_FRAME, function (e) {
			
			if (dragging) {
				
				targetX = sprite.stage.mouseX + offsetX;
				targetY = sprite.stage.mouseY + offsetY;
				
			}
			
			var diffX = targetX - sprite.x;
			var diffY = targetY - sprite.y;
			
			if (Math.abs (diffX) < 1) {
				
				sprite.x = targetX;
				
			} else {
				
				sprite.x += (diffX * 0.2);
				
			}
			
			if (Math.abs (diffY) < 1) {
				
				sprite.y = targetY;
				
			} else {
				
				sprite.y += (diffY * 0.2);
				
			}
			
		}.bind (this));
		
	}.bind (this));
	
}

App.prototype = Sprite.prototype;
{% endcapture %}
{% include embed.md %}


## Next Steps

You can look at our [other samples](https://github.com/openfl?utf8=✓&q=openfl-samples&type=&language=), like the "features/events/HandlingKeyboardEvents" or "features/media/AddingSound" samples.
