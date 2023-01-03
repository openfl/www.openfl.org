---
title: Adding Animation
redirect_from: learn/npm/adding-animation/
---

## Setup

_You may find a completed "features/display/AddingAnimation" sample project for [TypeScript](https://github.com/openfl/openfl-samples-ts), [Haxe](https://github.com/openfl/openfl-samples-haxe), [ES6](https://github.com/openfl/openfl-samples-es6) or [ES5](https://github.com/openfl/openfl-samples-es5) online, the following describes how to add animation from an empty project or from the previous [Displaying a Bitmap](../displaying-a-bitmap)._

If you have completed the [Displaying a Bitmap](../displaying-a-bitmap) tutorial, you can continue using the same project files. Otherwise you can run the following commands:

```sh
mkdir AddingAnimation
cd AddingAnimation
yo openfl
```

If you start fresh, download an image file into your `dist` directory, such as [this](openfl.png) one.


## Animating Your Project

In the [Displaying a Bitmap](../displaying-a-bitmap) tutorial, we added an image using the {% include api.md ref="openfl.display.Bitmap" %} class, and made it renderable. We also suggested that you try changing some properties, such as the {% include api.md ref="openfl.display.DisplayObject" sub="x" label="x" %} or {% include api.md ref="openfl.display.DisplayObject" sub="y" label="y" %} property of the {% include api.md ref="openfl.display.Bitmap" label="Bitmap" %} object to change how it would be rendered.

Although this is a good way to understand some of the fundamental principles of the display list works in OpenFL, interactive projects often benefit by updating these properties _over time_ to create an animation.

In the following steps, we will illustrate how you can create animation using {% include api.md ref="openfl.events.Event" sub="ENTER_FRAME" label="Event.ENTER_FRAME" %}, using a timer, a combination of both {% include api.md ref="openfl.events.Event" sub="ENTER_FRAME" label="Event.ENTER_FRAME" %} and time, as well as using an animation library.

Before we continue, your "src/app.ts", "src/app.js" or "src/App.hx" should be able to load and display a bitmap, similar to the following:

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

{% capture embed %}
var Bitmap = openfl.display.Bitmap;
var BitmapData = openfl.display.BitmapData;
var Sprite = openfl.display.Sprite;
var Stage = openfl.display.Stage;

var App = function () {
	
	Sprite.call (this);
	
	BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
		
		var bitmap = new Bitmap (bitmapData);
		this.addChild (bitmap);
		
	}.bind (this));
	
}

App.prototype = Sprite.prototype;
{% endcapture %}
{% include embed.md %}


## Using `Event.ENTER_FRAME`

One of the ways that you can begin to add animation in OpenFL is by listening to the {% include api.md ref="openfl.events.Event" sub="ENTER_FRAME" label="Event.ENTER_FRAME" %} event. This event occurs every time that OpenFL enters a new animation frame (which is by default the same as <a href="https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame"><code>requestAnimationFrame</code></a>, but is configurable).

First we can add a new import for {% include api.md ref="openfl.events.Event" %}:

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

_If you prefer, you can use `"enterFrame"` instead of {% include api.md ref="openfl.events.Event" sub="ENTER_FRAME" label="Event.ENTER_FRAME" %}, but importing {% include api.md ref="openfl.events.Event" label="Event" %} is a standard way of accessing event names._

Now we can add some code to listen to the {% include api.md ref="openfl.events.Event" sub="ENTER_FRAME" label="Event.ENTER_FRAME" %} event. Add it below the `new Bitmap` declaration in your code, like this:

{% capture typescript %}
```ts
BitmapData.loadFromFile ("openfl.png").onComplete ((bitmapData) => {
	
	var bitmap = new Bitmap (bitmapData);
	this.addChild (bitmap);
	
	// add code here
	
});
```
{% endcapture %}
{% capture haxe %}
```js
BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
	
	var bitmap = new Bitmap (bitmapData);
	addChild (bitmap);
	
	// add code here
	
});
```
{% endcapture %}
{% capture es6 %}
```js
BitmapData.loadFromFile ("openfl.png").onComplete ((bitmapData) => {
	
	var bitmap = new Bitmap (bitmapData);
	this.addChild (bitmap);
	
	// add code here
	
});
```
{% endcapture %}
{% capture es5 %}
```js
BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
	
	var bitmap = new Bitmap (bitmapData);
	this.addChild (bitmap);
	
	// add code here
	
}.bind (this));
```
{% endcapture %}
{% include code.md %}

{% capture typescript %}
```ts
this.addEventListener (Event.ENTER_FRAME, (e:Event) => {
	
	console.log ("Enter Frame");
	
});
```
{% endcapture %}
{% capture haxe %}
```js
addEventListener (Event.ENTER_FRAME, function (e) {
	
	trace ("Enter Frame");
	
});
```
{% endcapture %}
{% capture es6 %}
```js
this.addEventListener (Event.ENTER_FRAME, (e) => {
	
	console.log ("Enter Frame");
	
});
```
{% endcapture %}
{% capture es5 %}
```js
this.addEventListener (Event.ENTER_FRAME, function (e) {
	
	console.log ("Enter Frame");
	
});
```
{% endcapture %}
{% include code.md %}

All we need to do to create an animation is update a property of our {% include api.md ref="openfl.display.Bitmap" label="Bitmap" %} object (such as the {% include api.md ref="openfl.display.DisplayObject" sub="x" label="x" %}, {% include api.md ref="openfl.display.DisplayObject" sub="y" label="y" %} or {% include api.md ref="openfl.display.DisplayObject" sub="alpha" label="alpha" %} property) in our listener. This will occur repeatedly over time, making it possible to play an animation.

The following code will animate the image from it's initial {% include api.md ref="openfl.display.DisplayObject" sub="y" label="y" %} position of `0`, increasing by `1` each frame until it reaches `y == 200`. Then it changes direction, and moves back toward `y == 0` before finally repeating:

{% capture typescript %}
```ts
let direction = true;

this.addEventListener (Event.ENTER_FRAME, (e:Event) => {
	
	if (direction) {
		
		bitmap.y += 1;
		if (bitmap.y >= 200) direction = !direction;
		
	} else {
		
		bitmap.y -= 1;
		if (bitmap.y <= 0) direction = !direction;
		
	}
	
});
```
{% endcapture %}
{% capture haxe %}
```js
var direction = true;

addEventListener (Event.ENTER_FRAME, function (e) {
	
	if (direction) {
		
		bitmap.y += 1;
		if (bitmap.y >= 200) direction = !direction;
		
	} else {
		
		bitmap.y -= 1;
		if (bitmap.y <= 0) direction = !direction;
		
	}
	
});
```
{% endcapture %}
{% capture es6 %}
```js
let direction = true;

this.addEventListener (Event.ENTER_FRAME, (e) => {
	
	if (direction) {
		
		bitmap.y += 1;
		if (bitmap.y >= 200) direction = !direction;
		
	} else {
		
		bitmap.y -= 1;
		if (bitmap.y <= 0) direction = !direction;
		
	}
	
});
```
{% endcapture %}
{% capture es5 %}
```js
var direction = true;

this.addEventListener (Event.ENTER_FRAME, function (e) {
	
	if (direction) {
		
		bitmap.y += 1;
		if (bitmap.y >= 200) direction = !direction;
		
	} else {
		
		bitmap.y -= 1;
		if (bitmap.y <= 0) direction = !direction;
		
	}
	
});
```
{% endcapture %}
{% include code.md %}

{% capture embed %}
var Bitmap = openfl.display.Bitmap;
var BitmapData = openfl.display.BitmapData;
var Sprite = openfl.display.Sprite;
var Stage = openfl.display.Stage;
var Event = openfl.events.Event;

var App = function () {
	
	Sprite.call (this);
	
	BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
		
		var bitmap = new Bitmap (bitmapData);
		this.addChild (bitmap);
		
		var direction = true;
		
		this.addEventListener (Event.ENTER_FRAME, function (e) {
			
			if (direction) {
				
				bitmap.y += 1;
				if (bitmap.y >= 200) direction = !direction;
				
			} else {
				
				bitmap.y -= 1;
				if (bitmap.y <= 0) direction = !direction;
				
			}
			
		});
		
	}.bind (this));
	
}

App.prototype = Sprite.prototype;
{% endcapture %}
{% include embed.md %}


## Using `Timer`

Sometimes, you may need to update a property based upon time, rather than animation frames. In general, it is recommended that updates are made within an animation frame. In the next section, we will show you can combine {% include api.md ref="openfl.events.Event" sub="ENTER_FRAME" label="Event.ENTER_FRAME" %} with {% include api.md ref="openfl.utils" sub="getTimer" type="modules" label="openfl.utils.getTimer" %} to handle time, but in the meantime, this is a short description of {% include api.md ref="openfl.utils.Timer" %} could be used to trigger animation based on time.

Both <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout"><code>setTimeout</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval"><code>setInterval</code></a> could be used to trigger an event repeatedly, as well as a final complete event, but the {% include api.md ref="openfl.utils.Timer" label="Timer" %} class combines the two behaviors into a single utility which may be helpful for time-based behaviors.

{% capture typescript %}
```ts
import TimerEvent from "openfl/events/TimerEvent";
import Timer from "openfl/utils/Timer";
```
{% endcapture %}
{% capture haxe %}
```js
import openfl.events.TimerEvent;
import openfl.utils.Timer;
```
{% endcapture %}
{% capture es6 %}
```js
import TimerEvent from "openfl/events/TimerEvent";
import Timer from "openfl/utils/Timer";
```
{% endcapture %}
{% capture es5 %}
```js
var TimerEvent = require ("openfl/events/TimerEvent").default;
var Timer = require ("openfl/utils/Timer").default;
```
{% endcapture %}
{% include code.md %}

{% capture typescript %}
```ts
let increment = -0.005;
let timer = new Timer (1000 / 60, 200);
timer.addEventListener (TimerEvent.TIMER, (e:TimerEvent) => {
	
	bitmap.alpha += increment;
	
});
timer.addEventListener (TimerEvent.TIMER_COMPLETE, (e:TimerEvent) => {
	
	increment *= -1;
	timer.reset ();
	timer.start ();
	
});
timer.start ();
```
{% endcapture %}
{% capture haxe %}
```js
var increment = -0.005;
var timer = new Timer (1000 / 60, 200);
timer.addEventListener (TimerEvent.TIMER, function (e) {
	
	bitmap.alpha += increment;
	
});
timer.addEventListener (TimerEvent.TIMER_COMPLETE, function (e) {
	
	increment *= -1;
	timer.reset ();
	timer.start ();
	
});
timer.start ();
```
{% endcapture %}
{% capture es6 %}
```js
let increment = -0.005;
let timer = new Timer (1000 / 60, 200);
timer.addEventListener (TimerEvent.TIMER, (e) => {
	
	bitmap.alpha += increment;
	
});
timer.addEventListener (TimerEvent.TIMER_COMPLETE, (e) => {
	
	increment *= -1;
	timer.reset ();
	timer.start ();
	
});
timer.start ();
```
{% endcapture %}
{% capture es5 %}
```js
var increment = -0.005;
var timer = new Timer (1000 / 60, 200);
timer.addEventListener (TimerEvent.TIMER, function (e) {
	
	bitmap.alpha += increment;
	
});
timer.addEventListener (TimerEvent.TIMER_COMPLETE, function (e) {
	
	increment *= -1;
	timer.reset ();
	timer.start ();
	
});
timer.start ();
```
{% endcapture %}
{% include code.md %}

{% capture embed %}
var Bitmap = openfl.display.Bitmap;
var BitmapData = openfl.display.BitmapData;
var Sprite = openfl.display.Sprite;
var Stage = openfl.display.Stage;
var TimerEvent = openfl.events.TimerEvent;
var Timer = openfl.utils.Timer;

var App = function () {
	
	Sprite.call (this);
	
	BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
		
		var bitmap = new Bitmap (bitmapData);
		this.addChild (bitmap);
		
		var increment = -0.005;
		var timer = new Timer (1000 / 60, 200);
		timer.addEventListener (TimerEvent.TIMER, function (e) {
			
			bitmap.alpha += increment;
			
		});
		timer.addEventListener (TimerEvent.TIMER_COMPLETE, function (e) {
			
			increment *= -1;
			timer.reset ();
			timer.start ();
			
		});
		timer.start ();
		
	}.bind (this));
	
}

App.prototype = Sprite.prototype;
{% endcapture %}
{% include embed.md %}


## Using `Event.ENTER_FRAME` and `getTimer`

When you need to update based on animation frames, but also need to know how much time has elapsed, you could use a combination of both {% include api.md ref="openfl.events.Event" sub="ENTER_FRAME" label="Event.ENTER_FRAME" %} and {% include api.md ref="openfl.utils" sub="getTimer" type="modules" label="openfl.utils.getTimer" %}.

This approach is common for many games, which need to know the amount of time that has elapsed since the last frame. It also tends to blend the best elements of both {% include api.md ref="openfl.events.Event" sub="ENTER_FRAME" label="Event.ENTER_FRAME" %} and time-based animation.

{% capture typescript %}
```ts
import Event from "openfl/events/Event";
import getTimer from "openfl/utils/getTimer";

...

let speed = 60 / 1000;
let cacheTime = getTimer ();

this.addEventListener (Event.ENTER_FRAME, (e:Event) => {
	
	let currentTime = getTimer ();
	let deltaTime = currentTime - cacheTime;
	
	bitmap.x += speed * deltaTime;
	
	if (bitmap.x > 100) {
		
		speed *= -1;
		bitmap.x = 100;
		
	} else if (bitmap.x < 0) {
		
		speed *= -1;
		bitmap.x = 0;
		
	}
	
	cacheTime = currentTime;
	
});
```
{% endcapture %}
{% capture haxe %}
```js
import openfl.events.Event;
import openfl.Lib.getTimer;

...

var speed = 60 / 1000;
var cacheTime = getTimer ();

addEventListener (Event.ENTER_FRAME, function (e) {
	
	var currentTime = getTimer ();
	var deltaTime = currentTime - cacheTime;
	
	bitmap.x += speed * deltaTime;
	
	if (bitmap.x > 100) {
		
		speed *= -1;
		bitmap.x = 100;
		
	} else if (bitmap.x < 0) {
		
		speed *= -1;
		bitmap.x = 0;
		
	}
	
	cacheTime = currentTime;
	
});
```
{% endcapture %}
{% capture es6 %}
```js
import Event from "openfl/events/Event";
import getTimer from "openfl/utils/getTimer";

...

let speed = 60 / 1000;
let cacheTime = getTimer ();

this.addEventListener (Event.ENTER_FRAME, (e) => {
	
	let currentTime = getTimer ();
	let deltaTime = currentTime - cacheTime;
	
	bitmap.x += speed * deltaTime;
	
	if (bitmap.x > 100) {
		
		speed *= -1;
		bitmap.x = 100;
		
	} else if (bitmap.x < 0) {
		
		speed *= -1;
		bitmap.x = 0;
		
	}
	
	cacheTime = currentTime;
	
});
```
{% endcapture %}
{% capture es5 %}
```js
var Event = require ("openfl/events/Event").default;
var getTimer = require ("openfl/utils/getTimer").default;

...

var speed = 60 / 1000;
var cacheTime = getTimer ();

this.addEventListener (Event.ENTER_FRAME, function (e) {
	
	var currentTime = getTimer ();
	var deltaTime = currentTime - cacheTime;
	
	bitmap.x += speed * deltaTime;
	
	if (bitmap.x > 100) {
		
		speed *= -1;
		bitmap.x = 100;
		
	} else if (bitmap.x < 0) {
		
		speed *= -1;
		bitmap.x = 0;
		
	}
	
	cacheTime = currentTime;
	
});
```
{% endcapture %}
{% include code.md %}

{% capture embed %}
var Bitmap = openfl.display.Bitmap;
var BitmapData = openfl.display.BitmapData;
var Sprite = openfl.display.Sprite;
var Stage = openfl.display.Stage;
var Event = openfl.events.Event;
var getTimer = openfl.utils.getTimer;

var App = function () {
	
	Sprite.call (this);
	
	BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
		
		var bitmap = new Bitmap (bitmapData);
		this.addChild (bitmap);
		
		var speed = 60 / 1000;
		var cacheTime = getTimer ();
		
		this.addEventListener (Event.ENTER_FRAME, function (e) {
			
			var currentTime = getTimer ();
			var deltaTime = currentTime - cacheTime;
			
			bitmap.x += speed * deltaTime;
			
			if (bitmap.x > 100) {
				
				speed *= -1;
				bitmap.x = 100;
				
			} else if (bitmap.x < 0) {
				
				speed *= -1;
				bitmap.x = 0;
				
			}
			
			cacheTime = currentTime;
			
		});
		
	}.bind (this));
	
}

App.prototype = Sprite.prototype;
{% endcapture %}
{% include embed.md %}


## Using an Animation Library

When you move beyond a simple illustration, and begin building real interactive projects, use of an animation (or "tween") library is more productive for expressive animation than animating by hand. In addition to automatically animating based upon <a href="https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame"><code>requestAnimationFrame</code></a>, an animation library may make it simpler to combine animation of multiple properties at once, make it simple to receive callbacks when the object has been updated or completes an animation, and often includes multiple "easing" equations in order to animate properties along a quadratic, exponential or elastic animation equation rather than a simple linear equation, similar to the examples above.

In the following example code, we have integrated a tween library called [Actuate](https://github.com/jgranick/actuate). If you wish, you may use the "features/display/AddingAnimation" sample (for [TypeScript](https://github.com/openfl/openfl-samples-ts/tree/master/features/display/AddingAnimation), [Haxe](https://github.com/openfl/openfl-samples/tree/master/npm/features/display/AddingAnimation), [ES6](https://github.com/openfl/openfl-samples-es6/tree/master/features/display/AddingAnimation) and [ES5](https://github.com/openfl/openfl-samples-es5/tree/master/features/display/AddingAnimation)), which is already configured for use with Actuate, otherwise we can add Actuate to your current project.

First, open a command-prompt or terminal, and change to your project directory and run the following command:

```sh
npm install --save-dev actuate
```

Next, in order to make it easier to import modules from the Actuate library, edit "webpack.common.js", and update the `resolve` section to include an alias for Actuate:

```js
alias: {
	...
	"motion": path.resolve (__dirname, "node_modules/actuate/lib/motion")
}
```

If you are using TypeScript, we will also need to add an alias in "tsconfig.json" so that the TypeScript compiler also knows how to resolve our aliases for Actuate:

```json
"paths": {
	...
	"motion": ["node_modules/actuate/lib/motion"],
	"motion/*": ["node_modules/actuate/lib/motion/*"]
},
```

If you are using Haxe, we will need to add a new classpath to Actuate in your "build.hxml" file:

```sh
-cp node_modules/actuate/lib
```

Now Actuate should be installed available, importing from "motion" or "motion/Actuate", rather than a lengthier path.

Here is an example animation using Actuate:

{% capture typescript %}
```ts
import Actuate from "motion/Actuate";
import Elastic from "motion/easing/Elastic";
import Linear from "motion/easing/Linear";
```
{% endcapture %}
{% capture haxe %}
```js
import motion.Actuate;
import motion.easing.Elastic;
import motion.easing.Linear;
```
{% endcapture %}
{% capture es6 %}
```js
import Actuate from "motion/Actuate";
import Elastic from "motion/easing/Elastic";
import Linear from "motion/easing/Linear";
```
{% endcapture %}
{% capture es5 %}
```js
var Actuate = require ("motion/Actuate").default;
var Elastic = require ("motion/easing/Elastic").default;
var Linear = require ("motion/easing/Linear").default;
```
{% endcapture %}
{% include code.md %}

{% capture typescript %}
```ts
Actuate.tween (bitmap, 4, { y: 200 }).repeat ().reflect ();
Actuate.tween (bitmap, 4, { x: 100 }).ease (Elastic.easeOut).repeat ().reflect ();
Actuate.tween (bitmap, 4, { alpha: 0 }).ease (Linear.easeNone).repeat ().reflect ();
```
{% endcapture %}
{% capture haxe %}
```js
Actuate.tween (bitmap, 4, { y: 200 }).repeat ().reflect ();
Actuate.tween (bitmap, 4, { x: 100 }).ease (Elastic.easeOut).repeat ().reflect ();
Actuate.tween (bitmap, 4, { alpha: 0 }).ease (Linear.easeNone).repeat ().reflect ();
```
{% endcapture %}
{% capture es6 %}
```js
Actuate.tween (bitmap, 4, { y: 200 }).repeat ().reflect ();
Actuate.tween (bitmap, 4, { x: 100 }).ease (Elastic.easeOut).repeat ().reflect ();
Actuate.tween (bitmap, 4, { alpha: 0 }).ease (Linear.easeNone).repeat ().reflect ();
```
{% endcapture %}
{% capture es5 %}
```js
Actuate.tween (bitmap, 4, { y: 200 }).repeat ().reflect ();
Actuate.tween (bitmap, 4, { x: 100 }).ease (Elastic.easeOut).repeat ().reflect ();
Actuate.tween (bitmap, 4, { alpha: 0 }).ease (Linear.easeNone).repeat ().reflect ();
```
{% endcapture %}
{% include code.md %}

{% capture embed %}
var Bitmap = openfl.display.Bitmap;
var BitmapData = openfl.display.BitmapData;
var Sprite = openfl.display.Sprite;
var Stage = openfl.display.Stage;
var Actuate = motion.Actuate;
var Elastic = motion.easing.Elastic;
var Linear = motion.easing.Linear;

var App = function () {
	
	Sprite.call (this);
	
	BitmapData.loadFromFile ("openfl.png").onComplete (function (bitmapData) {
		
		var bitmap = new Bitmap (bitmapData);
		this.addChild (bitmap);
		
		Actuate.tween (bitmap, 4, { y: 200 }).repeat ().reflect ();
		Actuate.tween (bitmap, 4, { x: 100 }).ease (Elastic.easeOut).repeat ().reflect ();
		Actuate.tween (bitmap, 4, { alpha: 0 }).ease (Linear.easeNone).repeat ().reflect ();
		
	}.bind (this));
	
}

App.prototype = Sprite.prototype;
{% endcapture %}
{% include embed.md %}

You can read more about the Actuate library [here](https://github.com/jgranick/actuate), or experiment with other tween libraries!


## Next Steps

Keep playing! There is a lot you can do with an animation library. To keep learning, try the [Handling Mouse Events](../handling-mouse-events) tutorial to begin making your project interactive.
