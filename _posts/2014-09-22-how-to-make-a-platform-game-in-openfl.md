---
layout: post
title: How to Make a Platform Game in OpenFL
---
I'm Kirill, author of <a href="http://haxecoder.com" target="_blank">haxecoder.com</a>, where I regularly publish tutorials for Haxe and OpenFL. I've been invited to make a guest post here, so let's do this!

Today I'll show you how to make a lightweight and efficient platform game engine. I won't be using any frameworks. Just Haxe, OpenFL, and a little <a href="http://haxecoder.com/post.php?id=24" target="_blank">debugger class for displaying FPS and memory usage</a>.

Here's what we'll be making today:

<div id="flash-example"></div>

<script type="text/javascript" src="{{ site.baseurl }}/js/swfobject.js"></script>
<script type="text/javascript">
	swfobject.embedSWF ("{{ site.baseurl }}/blog/assets/Platformer.swf", "flash-example", "600", "400", "9.0.0");
</script>

Let's get started.

## Initialization

Create a new OpenFL project using FlashDevelep. If you're using a different IDE, just make sure that you have the application.xml manifest file and a Main class in your project.

Set the background color of your window to light gray, and the size to 600x400. This is done in the application.xml file:

{% highlight xml %}
<window background="#eeeeee" fps="60" />
<window width="600" height="400" unless="mobile" />
{% endhighlight %}

Introduce 8 new variables in your Main class:

{% highlight haxe %}
private var map:Array<Array<Int>>;
private var world:Sprite;
private var tileSize:Int;
private var player:Sprite;
private var acceleration:Float;
private var velocity:Point;
private var keys:Array<Bool>;
private var isOnGround:Bool;
{% endhighlight %}

The tileSize and acceleration variables are tweakable parameters, which means you can set their values first thing in the init() method and play around with them as you like:

{% highlight haxe %}
// Parameters init
tileSize = 40;
acceleration = 0.9;
{% endhighlight %}

Our level will be built out of tiles, and tileSize value determines how big a single tile is. The acceleration value represents gravity acceleration.

Next thing, we declare a matrix to hold the map data.

{% highlight haxe %}
// Map init
map = [
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
{% endhighlight %}

As simple as it can get&mdash;0 represents empty space, 1 represents an obstacle (wall).

Now we'll draw the map. I'm using solid colored blocks for this:

{% highlight haxe %}
// World init
world = new Sprite();
world.graphics.beginFill(0x3498db);
for (row in 0...map.length) {
	for (cell in 0...map[row].length) {
		if(map[row][cell]==1){
			world.graphics.drawRect(cell * tileSize, row * tileSize, tileSize, tileSize);
		}
	}
}
addChild(world);
{% endhighlight %}

Next is player character's initialization. Our player will be a simple Sprite object, same size as a tile, positioned in the center of the screen in the beginning.

It would also be logical to set the velocity and isOnGround values here. The velocity object is a vector, which holds the speed of the character on the x and y axes. The isOnGround value is a flag, which is true whenever the player is touching the ground with its 'feet'&mdash;set it to false by default.

{% highlight haxe %}
// Player init
player = new Sprite();
player.graphics.beginFill(0xe67e22);
player.graphics.drawRect(0, 0, tileSize, tileSize);
addChild(player);
player.x = 300 - tileSize / 2;
player.y = 200 - tileSize / 2;
velocity = new Point(0, 0);
isOnGround = false;
{% endhighlight %}

Add a game loop:

{% highlight haxe %}
// Game loop
this.addEventListener(Event.ENTER_FRAME, gameLoop);
{% endhighlight %}

Don't forget about keyboard listeners:

{% highlight haxe %}
// Keyboard input detection
keys = [];
stage.addEventListener(KeyboardEvent.KEY_DOWN, onKeyDown);
stage.addEventListener(KeyboardEvent.KEY_UP, onKeyUp);
{% endhighlight %}

You can see that I also declared a "keys" array. It's a set of booleans, where each element represents a key. The handlers of the listeners access each element using the KeyboardEvent.keyCode property and set the value accordingly&mdash;true when pressed, false when released.

{% highlight haxe %}
private function onKeyDown(evt:KeyboardEvent):Void {
	keys[evt.keyCode] = true;
}

private function onKeyUp(evt:KeyboardEvent):Void {
	keys[evt.keyCode] = false;
}
{% endhighlight %}

This way we can easily detect whenever a key is being held just using this array and a keyCode value. This approach in detail and more information about keyboard input detection is explained in my <a href="http://www.haxecoder.com/post.php?id=19" target="_blank">Keyboard events in Haxe using OpenFL tutorial</a>.

In the very end of the init() function, we can add the instructions text field, as well as the FPS and memory display:

{% highlight haxe %}
// Text
var instructions:TextField = new TextField();
instructions.selectable = false;
instructions.text = "SPACE to jump, ARROW KEYS to move";
instructions.textColor = 0xffffff;
instructions.defaultTextFormat = new TextFormat("_sans", 12);
instructions.x = 15;
instructions.y = 370;
instructions.width = 300;
addChild(instructions);

// Debugger tutorial: http://haxecoder.com/post.php?id=24
addChild(new FPS_Mem(15, 15, 0xffffff));
{% endhighlight %}

## Movement and Collision

All of this is handled in the ENTER_FRAME event handler.

Here's the code of it, I'll explain it in a bit:

{% highlight haxe %}
private function gameLoop(e:Event):Void {
	// Gravity
	velocity.y += acceleration;
	
	// Movement
	if (isOnGround && keys[32]) {
		isOnGround = false;
		velocity.y = -16;
	}
	if (keys[39]) {
		velocity.x = 7;
	}else if (keys[37]) {
		velocity.x = -7;
	}else {
		velocity.x = 0;
	}
	// Player coordinates on the grid
	var tileCoords:Point = new Point(0, 0);
	var approximateCoords:Point = new Point();
	
	player.y += velocity.y;
	checkBottomCollision(tileCoords, approximateCoords);
	checkTopCollision(tileCoords, approximateCoords);
	
	player.x += velocity.x;
	checkRightCollision(tileCoords, approximateCoords);
	checkLeftCollision(tileCoords, approximateCoords);
	
	// Final vertical velocity check
	if (velocity.y != 0) {
		isOnGround = false;
	}
}
{% endhighlight %}

You can see that the first thing I do is apply the gravity acceleration to the vertical vector.

After that I have a chain of if statements which manipulate the velocity values. It is worth noting that the player can jump only when the isOnGround value is true. As soon as they jump, the value becomes false.

Right after that we declare 2 Points&mdash;tileCoords and approximateCoords. Since this is a tile-based game, the collision detection can be easily and efficiently implemented without any complicated math involved. All we have to do is check whether a certain tile is an obstacle or not.

The idea, in a nutshell, is to check the movement vector of the character, move him there, then check whether he hit any obstacle on his way. If he did&mdash;snap him to the wall and don't let him move further.

The approximateCoords point holds the coordinates of the player on the grid. The values, however, are not rounded on purpose&mdash;so even fraction values like 5.5 are possible. We will later round these values both ways&mdash;using ceil() and floor() methods. This is done, because the character will more often than not stand 2 tiles as opposed to 1. Therefore, we need to check whether they collide with at least one obstacle, and if they don't&mdash;then let the gravity do its thing and make the character fall.

The tileCoords object is used to store temporary calculated values of the collided tiles. This is done in all the check___Collision methods, which are called next.

These functions are similar, so let's take a look at just one:

{% highlight haxe %}
private function checkBottomCollision(tileCoords:Point, approximateCoords:Point):Void {
	// Bottom collision
	if (velocity.y >= 0) {
		approximateCoords.x = player.x / tileSize;
		approximateCoords.y = player.y / tileSize;
		tileCoords.y = Math.ceil(approximateCoords.y);
		
		tileCoords.x = Math.floor(approximateCoords.x);
		if (isBlock(tileCoords)) {
			player.y = (tileCoords.y - 1) * tileSize;
			velocity.y = 0;
			isOnGround = true;
		}
		
		tileCoords.x = Math.ceil(approximateCoords.x);
		if (isBlock(tileCoords)) {
			player.y = (tileCoords.y - 1) * tileSize;
			velocity.y = 0;
			isOnGround = true;
		}
	}
}
{% endhighlight %}

Here we check whether the character collides with the floor. We actually check whether he collides with 2 ground blocks that are below him. This is where we round the potentially collided tile coordinates both ways. If any of the tiles are obstacles, we register a collision and set the vertical velocity (vertical in this case) to 0. We also alter the position of the character to snap him to the nearest floor (floor in this case, wall in horizontal movement). Just for bottom collision, we also set the isOnGround value to true if a collision was detected.

The isBlock() function checks whether a tile is a block using the map array:

{% highlight haxe %}
private function isBlock(coords:Point):Bool {
	return map[Math.round(coords.y)][Math.round(coords.x)] == 1;
}
{% endhighlight %}

All the remaining collision functions act similarly to checkBottomCollision(). It may look complicated at first, but it's really just a sequence of accessing tile coordinates that our character is hitting or is going to hit, and checking whether that's an obstacle or not.

Finally, here's the full code. The whole game fit into just one class.

{% highlight haxe linenos %}
package ;

import com.kircode.debug.FPS_Mem;
import flash.display.Sprite;
import flash.events.Event;
import flash.Lib;
import openfl.events.KeyboardEvent;
import openfl.geom.Point;
import openfl.geom.Rectangle;
import openfl.text.TextField;
import openfl.text.TextFormat;

/**
 * Main game class.
 * @author Kirill Poletaev, www.haxecoder.com
 */

class Main extends Sprite 
{
	private var inited:Bool;
	private var map:Array<Array<Int>>;
	private var world:Sprite;
	private var tileSize:Int;
	private var player:Sprite;
	private var acceleration:Float;
	private var velocity:Point;
	private var keys:Array<Bool>;
	private var isOnGround:Bool;
	
	function resize(e) 
	{
		if (!inited) init();
	}
	
	function init() 
	{
		if (inited) return;
		inited = true;
		
		// Parameters init
		tileSize = 40;
		acceleration = 0.9;
		
		// Map init
		map = [
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
		[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
		[1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
		];
		
		// World init
		world = new Sprite();
		world.graphics.beginFill(0x3498db);
		for (row in 0...map.length) {
			for (cell in 0...map[row].length) {
				if(map[row][cell]==1){
					world.graphics.drawRect(cell * tileSize, row * tileSize, tileSize, tileSize);
				}
			}
		}
		addChild(world);
		
		// Player init
		player = new Sprite();
		player.graphics.beginFill(0xe67e22);
		player.graphics.drawRect(0, 0, tileSize, tileSize);
		addChild(player);
		player.x = 300 - tileSize / 2;
		player.y = 200 - tileSize / 2;
		velocity = new Point(0, 0);
		isOnGround = false;
		
		// Game loop
		this.addEventListener(Event.ENTER_FRAME, gameLoop);
		
		// Keyboard input detection
		keys = [];
		stage.addEventListener(KeyboardEvent.KEY_DOWN, onKeyDown);
		stage.addEventListener(KeyboardEvent.KEY_UP, onKeyUp);
		
		// Text
		var instructions:TextField = new TextField();
		instructions.selectable = false;
		instructions.text = "SPACE to jump, ARROW KEYS to move";
		instructions.textColor = 0xffffff;
		instructions.defaultTextFormat = new TextFormat("_sans", 12);
		instructions.x = 15;
		instructions.y = 370;
		instructions.width = 300;
		addChild(instructions);
		
		// Debugger tutorial: http://haxecoder.com/post.php?id=24
		addChild(new FPS_Mem(15, 15, 0xffffff));
	}
	
	private function gameLoop(e:Event):Void {
		// Gravity
		velocity.y += acceleration;
		
		// Movement
		if (isOnGround && keys[32]) {
			isOnGround = false;
			velocity.y = -16;
		}
		if (keys[39]) {
			velocity.x = 7;
		}else if (keys[37]) {
			velocity.x = -7;
		}else {
			velocity.x = 0;
		}
		// Player coordinates on the grid
		var tileCoords:Point = new Point(0, 0);
		var approximateCoords:Point = new Point();
		
		player.y += velocity.y;
		checkBottomCollision(tileCoords, approximateCoords);
		checkTopCollision(tileCoords, approximateCoords);
		
		player.x += velocity.x;
		checkRightCollision(tileCoords, approximateCoords);
		checkLeftCollision(tileCoords, approximateCoords);
		
		// Final vertical velocity check
		if (velocity.y != 0) {
			isOnGround = false;
		}
	}
	
	private function checkBottomCollision(tileCoords:Point, approximateCoords:Point):Void {
		// Bottom collision
		if (velocity.y >= 0) {
			approximateCoords.x = player.x / tileSize;
			approximateCoords.y = player.y / tileSize;
			tileCoords.y = Math.ceil(approximateCoords.y);
			
			tileCoords.x = Math.floor(approximateCoords.x);
			if (isBlock(tileCoords)) {
				player.y = (tileCoords.y - 1) * tileSize;
				velocity.y = 0;
				isOnGround = true;
			}
			
			tileCoords.x = Math.ceil(approximateCoords.x);
			if (isBlock(tileCoords)) {
				player.y = (tileCoords.y - 1) * tileSize;
				velocity.y = 0;
				isOnGround = true;
			}
		}
	}
	
	private function checkTopCollision(tileCoords:Point, approximateCoords:Point):Void {
		// Top collision
		if (velocity.y < 0) {
			approximateCoords.x = player.x / tileSize;
			approximateCoords.y = player.y / tileSize;
			
			tileCoords.y = Math.floor(approximateCoords.y);
			
			tileCoords.x = Math.floor(approximateCoords.x);
			if (isBlock(tileCoords)) {
				player.y = (tileCoords.y + 1) * tileSize;
				velocity.y = 0;
			}
			
			tileCoords.x = Math.ceil(approximateCoords.x);
			if (isBlock(tileCoords)) {
				player.y = (tileCoords.y + 1) * tileSize;
				velocity.y = 0;
			}
		}
	}
	
	private function checkRightCollision(tileCoords:Point, approximateCoords:Point):Void {
		// Right collision
		if(velocity.x > 0){
			approximateCoords.x = player.x / tileSize;
			approximateCoords.y = player.y / tileSize;
			
			tileCoords.x = Math.ceil(approximateCoords.x);
			
			tileCoords.y = Math.floor(approximateCoords.y);
			if (isBlock(tileCoords)) {
				player.x = (tileCoords.x - 1) * tileSize;
				velocity.x = 0;
			}
			
			tileCoords.y = Math.ceil(approximateCoords.y);
			if (isBlock(tileCoords)) {
				player.x = (tileCoords.x - 1) * tileSize;
				velocity.x = 0;
			}
		}
	}
	
	private function checkLeftCollision(tileCoords:Point, approximateCoords:Point):Void {
		// Left collision
		if(velocity.x <= 0){
			approximateCoords.x = player.x / tileSize;
			approximateCoords.y = player.y / tileSize;
			
			tileCoords.x = Math.floor(approximateCoords.x);
			
			tileCoords.y = Math.floor(approximateCoords.y);
			if (isBlock(tileCoords)) {
				player.x = (tileCoords.x + 1) * tileSize;
				velocity.x = 0;
			}
			
			tileCoords.y = Math.ceil(approximateCoords.y);
			if (isBlock(tileCoords)) {
				player.x = (tileCoords.x + 1) * tileSize;
				velocity.x = 0;
			}
		}
	}
	
	private function isBlock(coords:Point):Bool {
		return map[Math.round(coords.y)][Math.round(coords.x)] == 1;
	}

	private function onKeyDown(evt:KeyboardEvent):Void {
		keys[evt.keyCode] = true;
	}
	
	private function onKeyUp(evt:KeyboardEvent):Void {
		keys[evt.keyCode] = false;
	}

	public function new() 
	{
		super();	
		addEventListener(Event.ADDED_TO_STAGE, added);
	}

	function added(e) 
	{
		removeEventListener(Event.ADDED_TO_STAGE, added);
		stage.addEventListener(Event.RESIZE, resize);
		#if ios
		haxe.Timer.delay(init, 100); // iOS 6
		#else
		init();
		#end
	}
	
	public static function main() 
	{
		Lib.current.stage.align = flash.display.StageAlign.TOP_LEFT;
		Lib.current.stage.scaleMode = flash.display.StageScaleMode.NO_SCALE;
		Lib.current.addChild(new Main());
	}
}
{% endhighlight %}

## What's Next?

If you liked this tutorial, come visit me at <a href="http://haxecoder.com" target="_blank">haxecoder.com</a> for more! I post new tutorials very often.

You can also <a href="https://twitter.com/kircode" target="_blank">follow me on Twitter</a> and <a href="https://plus.google.com/+KirillPoletaev" target="_blank">Google+</a>.

For regular updates and bonus content, remember to subscribe to the free newsletter on haxecoder.

Thanks for reading!

Happy haxing!