(function () { "use strict";
var $hxClasses = {},$estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { };
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = true;
ApplicationMain.preloader = null;
ApplicationMain.main = function() {
	var element = window.document.getElementById("openfl-embed");
	flash_Lib.create(0,0,element,16777215);
	ApplicationMain.preloader = new NMEPreloader();
	flash_Lib.current.addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var sounds = [];
	var id;
	var image = new Image();
	id = "assets/wabbit_alpha.png";
	ApplicationMain.images.set(id,image);
	image.onload = ApplicationMain.image_onLoad;
	image.src = id;
	ApplicationMain.total++;
	if(ApplicationMain.total == 0) ApplicationMain.start(); else {
		var $it0 = ApplicationMain.urlLoaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var urlLoader = ApplicationMain.urlLoaders.get(path);
			urlLoader.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader.load(new flash_net_URLRequest(path));
		}
		var _g = 0;
		while(_g < sounds.length) {
			var soundName = sounds[_g];
			++_g;
			var sound = new flash_media_Sound();
			sound.addEventListener(flash_events_Event.COMPLETE,ApplicationMain.sound_onComplete);
			sound.addEventListener(flash_events_IOErrorEvent.IO_ERROR,ApplicationMain.sound_onIOError);
			sound.load(new flash_net_URLRequest(soundName + ".ogg"));
		}
	}
};
ApplicationMain.start = function() {
	ApplicationMain.preloader.addEventListener(flash_events_Event.COMPLETE,ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
};
ApplicationMain.image_onLoad = function(_) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener(flash_events_Event.COMPLETE,ApplicationMain.preloader_onComplete);
	flash_Lib.current.removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	var hasMain = false;
	var _g = 0;
	var _g1 = Type.getClassFields(Main);
	while(_g < _g1.length) {
		var methodName = _g1[_g];
		++_g;
		if(methodName == "main") {
			hasMain = true;
			break;
		}
	}
	if(hasMain) Reflect.callMethod(Main,Reflect.field(Main,"main"),[]); else {
		var instance = Type.createInstance(DocumentClass,[]);
		if(js_Boot.__instanceof(instance,flash_display_DisplayObject)) flash_Lib.current.addChild(instance); else {
			console.log("Error: No entry point found");
			console.log("If you are using DCE with a static main, you may need to @:keep the function");
		}
	}
};
ApplicationMain.sound_onComplete = function(event) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
ApplicationMain.sound_onIOError = function(event) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
var flash_events_IEventDispatcher = function() { };
$hxClasses["flash.events.IEventDispatcher"] = flash_events_IEventDispatcher;
flash_events_IEventDispatcher.__name__ = true;
var flash_events_EventDispatcher = function(target) {
	if(target != null) this.__targetDispatcher = target;
};
$hxClasses["flash.events.EventDispatcher"] = flash_events_EventDispatcher;
flash_events_EventDispatcher.__name__ = true;
flash_events_EventDispatcher.__interfaces__ = [flash_events_IEventDispatcher];
flash_events_EventDispatcher.__sortByPriority = function(l1,l2) {
	if(l1.priority == l2.priority) return 0; else if(l1.priority > l2.priority) return -1; else return 1;
};
flash_events_EventDispatcher.prototype = {
	addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		if(this.__eventMap == null) this.__eventMap = new haxe_ds_StringMap();
		if(!this.__eventMap.exists(type)) {
			var list = new Array();
			list.push(new flash_events__$EventDispatcher_Listener(listener,useCapture,priority));
			this.__eventMap.set(type,list);
		} else {
			var list1 = this.__eventMap.get(type);
			list1.push(new flash_events__$EventDispatcher_Listener(listener,useCapture,priority));
			list1.sort(flash_events_EventDispatcher.__sortByPriority);
		}
	}
	,dispatchEvent: function(event) {
		if(this.__eventMap == null || event == null) return false;
		var list = this.__eventMap.get(event.type);
		if(list == null) return false;
		if(event.target == null) {
			if(this.__targetDispatcher != null) event.target = this.__targetDispatcher; else event.target = this;
		}
		var capture = event.eventPhase == 0;
		var index = 0;
		var listener;
		while(index < list.length) {
			listener = list[index];
			if(listener.useCapture == capture) {
				listener.callback(event);
				if(event.__isCancelledNow) return true;
			}
			if(listener == list[index]) index++;
		}
		return true;
	}
	,hasEventListener: function(type) {
		if(this.__eventMap == null) return false;
		return this.__eventMap.exists(type);
	}
	,removeEventListener: function(type,listener,capture) {
		if(capture == null) capture = false;
		if(this.__eventMap == null) return;
		var list = this.__eventMap.get(type);
		if(list == null) return;
		var _g1 = 0;
		var _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].match(listener,capture)) {
				list.splice(i,1);
				break;
			}
		}
		if(list.length == 0) this.__eventMap.remove(type);
		if(!this.__eventMap.iterator().hasNext()) this.__eventMap = null;
	}
	,__class__: flash_events_EventDispatcher
};
var flash_display_IBitmapDrawable = function() { };
$hxClasses["flash.display.IBitmapDrawable"] = flash_display_IBitmapDrawable;
flash_display_IBitmapDrawable.__name__ = true;
flash_display_IBitmapDrawable.prototype = {
	__class__: flash_display_IBitmapDrawable
};
var flash_display_DisplayObject = function() {
	flash_events_EventDispatcher.call(this);
	this.alpha = 1;
	this.rotation = 0;
	this.scaleX = 1;
	this.scaleY = 1;
	this.visible = true;
	this.x = 0;
	this.y = 0;
	this.__worldAlpha = 1;
	this.__worldTransform = new flash_geom_Matrix();
};
$hxClasses["flash.display.DisplayObject"] = flash_display_DisplayObject;
flash_display_DisplayObject.__name__ = true;
flash_display_DisplayObject.__interfaces__ = [flash_display_IBitmapDrawable];
flash_display_DisplayObject.__super__ = flash_events_EventDispatcher;
flash_display_DisplayObject.prototype = $extend(flash_events_EventDispatcher.prototype,{
	globalToLocal: function(pos) {
		return this.__worldTransform.clone().invert().transformPoint(pos);
	}
	,__broadcast: function(event) {
		if(this.__eventMap != null && this.hasEventListener(event.type)) {
			if(event.target == null) event.target = this;
			event.currentTarget = this;
			this.dispatchEvent(event);
		}
	}
	,__getBounds: function(rect,matrix) {
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		return false;
	}
	,__renderCanvas: function(renderSession) {
	}
	,__renderMask: function(renderSession) {
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			this.stage = stage;
			if(stage != null) {
				var evt = new flash_events_Event(flash_events_Event.ADDED_TO_STAGE,false,false);
				this.dispatchEvent(evt);
			}
		}
	}
	,__update: function() {
		this.__renderable = this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && !this.__isMask;
		if(!this.__renderable && !this.__isMask) return;
		if(this.rotation != this.__rotationCache) {
			this.__rotationCache = this.rotation;
			var radians = this.rotation * (Math.PI / 180);
			this.__rotationSine = Math.sin(radians);
			this.__rotationCosine = Math.cos(radians);
		}
		if(this.parent != null) {
			var parentTransform = this.parent.__worldTransform;
			var a00 = this.__rotationCosine * this.scaleX;
			var a01 = this.__rotationSine * this.scaleX;
			var a10 = -this.__rotationSine * this.scaleY;
			var a11 = this.__rotationCosine * this.scaleY;
			var b00 = parentTransform.a;
			var b01 = parentTransform.b;
			var b10 = parentTransform.c;
			var b11 = parentTransform.d;
			this.__worldTransform.a = a00 * b00 + a01 * b10;
			this.__worldTransform.b = a00 * b01 + a01 * b11;
			this.__worldTransform.c = a10 * b00 + a11 * b10;
			this.__worldTransform.d = a10 * b01 + a11 * b11;
			this.__worldTransform.tx = this.x * b00 + this.y * b10 + parentTransform.tx;
			this.__worldTransform.ty = this.x * b01 + this.y * b11 + parentTransform.ty;
			this.__worldAlpha = this.alpha * this.parent.__worldAlpha;
		} else {
			this.__worldTransform.a = this.__rotationCosine * this.scaleX;
			this.__worldTransform.c = -this.__rotationSine * this.scaleY;
			this.__worldTransform.tx = this.x;
			this.__worldTransform.b = this.__rotationSine * this.scaleX;
			this.__worldTransform.d = this.__rotationCosine * this.scaleY;
			this.__worldTransform.ty = this.y;
			this.__worldAlpha = this.alpha;
		}
	}
	,__class__: flash_display_DisplayObject
});
var flash_display_InteractiveObject = function() {
	flash_display_DisplayObject.call(this);
	this.mouseEnabled = true;
};
$hxClasses["flash.display.InteractiveObject"] = flash_display_InteractiveObject;
flash_display_InteractiveObject.__name__ = true;
flash_display_InteractiveObject.__super__ = flash_display_DisplayObject;
flash_display_InteractiveObject.prototype = $extend(flash_display_DisplayObject.prototype,{
	__class__: flash_display_InteractiveObject
});
var flash_display_DisplayObjectContainer = function() {
	flash_display_InteractiveObject.call(this);
	this.mouseChildren = true;
	this.__children = new Array();
};
$hxClasses["flash.display.DisplayObjectContainer"] = flash_display_DisplayObjectContainer;
flash_display_DisplayObjectContainer.__name__ = true;
flash_display_DisplayObjectContainer.__super__ = flash_display_InteractiveObject;
flash_display_DisplayObjectContainer.prototype = $extend(flash_display_InteractiveObject.prototype,{
	addChild: function(child) {
		if(child != null) {
			if(child.parent != null) child.parent.removeChild(child);
			this.__children.push(child);
			child.parent = this;
			if(this.stage != null) child.__setStageReference(this.stage);
		}
		return child;
	}
	,removeChild: function(child) {
		if(child != null && child.parent == this) {
			if(this.stage != null) child.__setStageReference(null);
			child.parent = null;
			HxOverrides.remove(this.__children,child);
		}
		return child;
	}
	,__broadcast: function(event) {
		if(event.target == null) event.target = this;
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__broadcast(event);
		}
		if(this.__eventMap != null && this.hasEventListener(event.type)) {
			event.currentTarget = this;
			this.dispatchEvent(event);
		}
	}
	,__getBounds: function(rect,matrix) {
		if(this.__children.length == 0) return;
		if(matrix != null) {
			var matrixCache = this.__worldTransform;
			this.__worldTransform = matrix;
			this.__updateChildren();
			this.__worldTransform = matrixCache;
		}
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(!child.__renderable) continue;
			child.__getBounds(rect,matrix);
		}
	}
	,__getLocalBounds: function(rect) {
		var matrixCache = this.__worldTransform;
		this.__worldTransform = new flash_geom_Matrix();
		this.__updateChildren();
		this.__getBounds(rect,null);
		this.__worldTransform = matrixCache;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.visible || interactiveOnly && !this.mouseEnabled) return false;
		var i = this.__children.length - 1;
		if(interactiveOnly && (stack == null || !this.mouseChildren)) while(i >= 0) {
			if(this.__children[i].__hitTest(x,y,shapeFlag,null,interactiveOnly)) {
				if(stack != null) stack.push(this);
				return true;
			}
			i--;
		} else if(stack != null) {
			var length = stack.length;
			while(i >= 0) {
				if(this.__children[i].__hitTest(x,y,shapeFlag,stack,interactiveOnly)) {
					stack.splice(length,0,this);
					return true;
				}
				i--;
			}
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable) return;
		if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderCanvas(renderSession);
		}
		if(this.__mask != null) renderSession.maskManager.popMask();
	}
	,__renderMask: function(renderSession) {
		var bounds = new flash_geom_Rectangle();
		this.__getLocalBounds(bounds);
		renderSession.context.rect(0,0,bounds.width,bounds.height);
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			this.stage = stage;
			if(stage != null) {
				var evt = new flash_events_Event(flash_events_Event.ADDED_TO_STAGE,false,false);
				this.dispatchEvent(evt);
			}
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__setStageReference(stage);
			}
		}
	}
	,__update: function() {
		flash_display_InteractiveObject.prototype.__update.call(this);
		if(!this.__renderable) return;
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__update();
		}
	}
	,__updateChildren: function() {
		this.__renderable = this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && !this.__isMask;
		if(!this.__renderable && !this.__isMask) return;
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__update();
		}
	}
	,__class__: flash_display_DisplayObjectContainer
});
var flash_display_Sprite = function() {
	flash_display_DisplayObjectContainer.call(this);
};
$hxClasses["flash.display.Sprite"] = flash_display_Sprite;
flash_display_Sprite.__name__ = true;
flash_display_Sprite.__super__ = flash_display_DisplayObjectContainer;
flash_display_Sprite.prototype = $extend(flash_display_DisplayObjectContainer.prototype,{
	__getBounds: function(rect,matrix) {
		flash_display_DisplayObjectContainer.prototype.__getBounds.call(this,rect,matrix);
		if(this.__graphics != null) this.__graphics.__getBounds(rect,this.__worldTransform);
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.visible || interactiveOnly && !this.mouseEnabled) return false;
		var length = 0;
		if(stack != null) length = stack.length;
		if(flash_display_DisplayObjectContainer.prototype.__hitTest.call(this,x,y,shapeFlag,stack,interactiveOnly)) return true; else if(this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__worldTransform)) {
			if(stack != null) stack.splice(length,0,this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable) return;
		if(this.__graphics != null) {
			this.__graphics.__render();
			if(this.__graphics.__canvas != null) {
				if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
				var context = renderSession.context;
				context.globalAlpha = this.__worldAlpha;
				var transform = this.__worldTransform;
				if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
				context.drawImage(this.__graphics.__canvas,this.__graphics.__bounds.x,this.__graphics.__bounds.y);
				if(this.__mask != null) renderSession.maskManager.popMask();
			}
		}
		flash_display_DisplayObjectContainer.prototype.__renderCanvas.call(this,renderSession);
	}
	,__renderMask: function(renderSession) {
		if(this.__graphics != null) this.__graphics.__renderMask(renderSession); else flash_display_DisplayObjectContainer.prototype.__renderMask.call(this,renderSession);
	}
	,get_graphics: function() {
		if(this.__graphics == null) this.__graphics = new flash_display_Graphics();
		return this.__graphics;
	}
	,__class__: flash_display_Sprite
});
var Main = function() {
	flash_display_Sprite.call(this);
	this.bunniesRate = 5;
	this.numBunnies = 5;
	this.bunnies = new Array();
	this.maxX = this.stage.stageWidth;
	this.minX = 0;
	this.maxY = this.stage.stageHeight;
	this.minY = 0;
	this.container = new flash_display_Sprite();
	var _g1 = 0;
	var _g = this.numBunnies;
	while(_g1 < _g) {
		var i = _g1++;
		var bunny = new Bunny();
		bunny.speedX = Math.random() * 10;
		bunny.speedY = Math.random() * 10 - 5;
		this.bunnies.push(bunny);
		this.container.addChild(bunny);
	}
	this.addChild(this.container);
	this.counter = new flash_text_TextField();
	this.counter.x = this.stage.stageWidth - 105;
	this.counter.y = 5;
	var format = new flash_text_TextFormat("_sans");
	format.align = flash_text_TextFormatAlign.RIGHT;
	this.counter.set_defaultTextFormat(format);
	this.counter.set_text(this.numBunnies + " BUNNIES");
	this.addChild(this.counter);
	this.addEventListener(flash_events_Event.ENTER_FRAME,$bind(this,this.this_onEnterFrame));
	this.stage.addEventListener(flash_events_MouseEvent.MOUSE_DOWN,$bind(this,this.this_onMouseDown));
	this.stage.addEventListener(flash_events_MouseEvent.MOUSE_UP,$bind(this,this.this_onMouseUp));
};
$hxClasses["Main"] = Main;
Main.__name__ = true;
Main.__super__ = flash_display_Sprite;
Main.prototype = $extend(flash_display_Sprite.prototype,{
	this_onEnterFrame: function(event) {
		if(this.addingBunnies) {
			var _g1 = 0;
			var _g = this.bunniesRate;
			while(_g1 < _g) {
				var i = _g1++;
				var bunny = new Bunny();
				bunny.speedX = Math.random() * 10;
				bunny.speedY = Math.random() * 10 - 5;
				this.bunnies.push(bunny);
				this.container.addChild(bunny);
				this.numBunnies++;
			}
			this.counter.set_text(this.numBunnies + " BUNNIES");
		}
		var _g11 = 0;
		var _g2 = this.bunnies.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			var bunny1 = this.bunnies[i1];
			bunny1.x += bunny1.speedX;
			bunny1.y += bunny1.speedY;
			bunny1.speedY += 0.75;
			if(bunny1.x > this.maxX) {
				bunny1.speedX *= -1;
				bunny1.x = this.maxX;
			} else if(bunny1.x < this.minX) {
				bunny1.speedX *= -1;
				bunny1.x = this.minX;
			}
			if(bunny1.y > this.maxY) {
				bunny1.speedY *= -0.85;
				bunny1.y = this.maxY;
				bunny1.spin = (Math.random() - 0.5) * 0.2;
				if(Math.random() > 0.5) bunny1.speedY -= Math.random() * 6;
			} else if(bunny1.y < this.minY) {
				bunny1.speedY = 0;
				bunny1.y = this.minY;
			}
		}
	}
	,this_onMouseDown: function(event) {
		this.addingBunnies = true;
	}
	,this_onMouseUp: function(event) {
		this.addingBunnies = false;
	}
	,__class__: Main
});
var DocumentClass = function() {
	this.stage = flash_Lib.current.stage;
	Main.call(this);
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = true;
DocumentClass.__super__ = Main;
DocumentClass.prototype = $extend(Main.prototype,{
	__class__: DocumentClass
});
var openfl_AssetLibrary = function() {
};
$hxClasses["openfl.AssetLibrary"] = openfl_AssetLibrary;
openfl_AssetLibrary.__name__ = true;
openfl_AssetLibrary.prototype = {
	exists: function(id,type) {
		return false;
	}
	,getBitmapData: function(id) {
		return null;
	}
	,isLocal: function(id,type) {
		return true;
	}
	,__class__: openfl_AssetLibrary
};
var DefaultAssetLibrary = function() {
	openfl_AssetLibrary.call(this);
	this.addExternal("assets/wabbit_alpha.png","image","assets/wabbit_alpha.png");
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = true;
DefaultAssetLibrary.__super__ = openfl_AssetLibrary;
DefaultAssetLibrary.prototype = $extend(openfl_AssetLibrary.prototype,{
	addExternal: function(id,kind,value) {
		DefaultAssetLibrary.path.set(id,value);
		var value1 = Reflect.field(openfl_AssetType,kind.toUpperCase());
		DefaultAssetLibrary.type.set(id,value1);
	}
	,exists: function(id,type) {
		var assetType = DefaultAssetLibrary.type.get(id);
		if(assetType != null) {
			if(assetType == type || (type == openfl_AssetType.SOUND || type == openfl_AssetType.MUSIC) && (assetType == openfl_AssetType.MUSIC || assetType == openfl_AssetType.SOUND)) return true;
			if(type == openfl_AssetType.BINARY || type == null) return true;
		}
		return false;
	}
	,getBitmapData: function(id) {
		return flash_display_BitmapData.fromImage((function($this) {
			var $r;
			var key = DefaultAssetLibrary.path.get(id);
			$r = ApplicationMain.images.get(key);
			return $r;
		}(this)));
	}
	,isLocal: function(id,type) {
		return true;
	}
	,__class__: DefaultAssetLibrary
});
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = true;
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var flash_display_Bitmap = function(bitmapData,pixelSnapping,smoothing) {
	if(smoothing == null) smoothing = false;
	flash_display_DisplayObjectContainer.call(this);
	this.bitmapData = bitmapData;
	this.pixelSnapping = pixelSnapping;
	this.smoothing = smoothing;
	if(pixelSnapping == null) this.pixelSnapping = flash_display_PixelSnapping.AUTO;
};
$hxClasses["flash.display.Bitmap"] = flash_display_Bitmap;
flash_display_Bitmap.__name__ = true;
flash_display_Bitmap.__super__ = flash_display_DisplayObjectContainer;
flash_display_Bitmap.prototype = $extend(flash_display_DisplayObjectContainer.prototype,{
	__getBounds: function(rect,matrix) {
		var bounds = new flash_geom_Rectangle(0,0,this.get_width(),this.get_height());
		bounds.transform(this.__worldTransform);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.visible || this.bitmapData == null) return false;
		var point = this.globalToLocal(new flash_geom_Point(x,y));
		if(point.x > 0 && point.y > 0 && point.x <= this.bitmapData.width && point.y <= this.bitmapData.height) {
			if(stack != null) stack.push(this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable) return;
		var context = renderSession.context;
		if(this.bitmapData != null && this.bitmapData.__valid) {
			if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
			this.bitmapData.__syncImageData();
			context.globalAlpha = this.__worldAlpha;
			var transform = this.__worldTransform;
			if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
			if(this.bitmapData.__sourceImage != null) context.drawImage(this.bitmapData.__sourceImage,0,0); else context.drawImage(this.bitmapData.__sourceCanvas,0,0);
			if(this.__mask != null) renderSession.maskManager.popMask();
		}
	}
	,__renderMask: function(renderSession) {
		renderSession.context.rect(0,0,this.get_width(),this.get_height());
	}
	,get_height: function() {
		if(this.bitmapData != null) return this.bitmapData.height * this.scaleY;
		return 0;
	}
	,get_width: function() {
		if(this.bitmapData != null) return this.bitmapData.width * this.scaleX;
		return 0;
	}
	,__class__: flash_display_Bitmap
});
var Bunny = function() {
	if(Bunny.bunnyTexture == null) Bunny.bunnyTexture = openfl_Assets.getBitmapData("assets/wabbit_alpha.png");
	flash_display_Bitmap.call(this,Bunny.bunnyTexture);
};
$hxClasses["Bunny"] = Bunny;
Bunny.__name__ = true;
Bunny.bunnyTexture = null;
Bunny.__super__ = flash_display_Bitmap;
Bunny.prototype = $extend(flash_display_Bitmap.prototype,{
	__class__: Bunny
});
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = true;
Math.__name__ = true;
var NMEPreloader = function() {
	flash_display_Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 9;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 3;
	this.outline = new flash_display_Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.x = x;
	this.outline.y = y;
	this.addChild(this.outline);
	this.progress = new flash_display_Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.x = x + padding;
	this.progress.y = y + padding;
	this.progress.scaleX = 0;
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = true;
NMEPreloader.__super__ = flash_display_Sprite;
NMEPreloader.prototype = $extend(flash_display_Sprite.prototype,{
	getBackgroundColor: function() {
		return 16777215;
	}
	,getHeight: function() {
		var height = 0;
		if(height > 0) return height; else return flash_Lib.current.stage.stageHeight;
	}
	,getWidth: function() {
		var width = 0;
		if(width > 0) return width; else return flash_Lib.current.stage.stageWidth;
	}
	,onInit: function() {
	}
	,onLoaded: function() {
		this.dispatchEvent(new flash_events_Event(flash_events_Event.COMPLETE));
	}
	,onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded == 1;
		this.progress.scaleX = percentLoaded;
	}
	,__class__: NMEPreloader
});
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = true;
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
};
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
};
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = true;
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
};
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	HxOverrides.remove(a,"__name__");
	HxOverrides.remove(a,"__interfaces__");
	HxOverrides.remove(a,"__properties__");
	HxOverrides.remove(a,"__super__");
	HxOverrides.remove(a,"prototype");
	return a;
};
var flash_Lib = function() { };
$hxClasses["flash.Lib"] = flash_Lib;
flash_Lib.__name__ = true;
flash_Lib.current = null;
flash_Lib.create = function(width,height,element,backgroundColor) {
	
			var lastTime = 0;
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
										   || window[vendors[x]+'CancelRequestAnimationFrame'];
			}
			
			if (!window.requestAnimationFrame)
				window.requestAnimationFrame = function(callback, element) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
					  timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
			
			if (!window.cancelAnimationFrame)
				window.cancelAnimationFrame = function(id) {
					clearTimeout(id);
				};
			
			window.requestAnimFrame = window.requestAnimationFrame;
		;
	var stage = new flash_display_Stage(width,height,element,backgroundColor);
	if(flash_Lib.current == null) {
		flash_Lib.current = new flash_display_MovieClip();
		stage.addChild(flash_Lib.current);
	}
};
var flash_display_BitmapData = function(width,height,transparent,fillColor) {
	if(fillColor == null) fillColor = -1;
	if(transparent == null) transparent = true;
	this.transparent = transparent;
	if(width > 0 && height > 0) {
		this.width = width;
		this.height = height;
		this.rect = new flash_geom_Rectangle(0,0,width,height);
		this.__createCanvas(width,height);
		if(!transparent) fillColor = -16777216 | fillColor & 16777215;
		this.__fillRect(new flash_geom_Rectangle(0,0,width,height),fillColor);
	}
};
$hxClasses["flash.display.BitmapData"] = flash_display_BitmapData;
flash_display_BitmapData.__name__ = true;
flash_display_BitmapData.__interfaces__ = [flash_display_IBitmapDrawable];
flash_display_BitmapData.fromImage = function(image,transparent) {
	if(transparent == null) transparent = true;
	var bitmapData = new flash_display_BitmapData(0,0,transparent);
	bitmapData.__sourceImage = image;
	bitmapData.width = image.width;
	bitmapData.height = image.height;
	bitmapData.__valid = true;
	return bitmapData;
};
flash_display_BitmapData.prototype = {
	__createCanvas: function(width,height) {
		this.__sourceCanvas = window.document.createElement("canvas");
		this.__sourceCanvas.width = width;
		this.__sourceCanvas.height = height;
		this.__sourceContext = this.__sourceCanvas.getContext("2d");
		this.__sourceContext.mozImageSmoothingEnabled = false;
		this.__sourceContext.webkitImageSmoothingEnabled = false;
		this.__sourceContext.imageSmoothingEnabled = false;
		this.__valid = true;
	}
	,__fillRect: function(rect,color) {
		var a;
		if(this.transparent) a = (color & -16777216) >>> 24; else a = 255;
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		this.__sourceContext.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
		this.__sourceContext.fillRect(rect.x,rect.y,rect.width,rect.height);
	}
	,__renderMask: function(renderSession) {
	}
	,__syncImageData: function() {
		if(this.__sourceImageDataChanged) {
			this.__sourceContext.putImageData(this.__sourceImageData,0,0);
			this.__sourceImageData = null;
			this.__sourceImageDataChanged = false;
		}
	}
	,__class__: flash_display_BitmapData
};
var flash_display_Graphics = function() {
	this.__commands = new Array();
	this.__halfStrokeWidth = 0;
	this.__positionX = 0;
	this.__positionY = 0;
};
$hxClasses["flash.display.Graphics"] = flash_display_Graphics;
flash_display_Graphics.__name__ = true;
flash_display_Graphics.prototype = {
	beginFill: function(rgb,alpha) {
		if(alpha == null) alpha = 1;
		this.__commands.push(flash_display_DrawCommand.BeginFill(rgb & 16777215,alpha));
	}
	,drawRect: function(x,y,width,height) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__halfStrokeWidth,y - this.__halfStrokeWidth);
		this.__inflateBounds(x + width + this.__halfStrokeWidth,y + height + this.__halfStrokeWidth);
		this.__commands.push(flash_display_DrawCommand.DrawRect(x,y,width,height));
		this.__dirty = true;
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
		if(ry == null) ry = -1;
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		if(thickness != null) this.__halfStrokeWidth = thickness / 2; else this.__halfStrokeWidth = 0;
		this.__commands.push(flash_display_DrawCommand.LineStyle(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit));
	}
	,__beginPath: function() {
		if(!this.__inPath) {
			this.__context.beginPath();
			this.__context.moveTo(this.__positionX,this.__positionY);
			this.__inPath = true;
		}
	}
	,__closePath: function(closeFill) {
		if(this.__inPath) {
			if(this.__hasFill) this.__context.fill();
			this.__context.closePath();
			if(this.__hasStroke) this.__context.stroke();
		}
		this.__inPath = false;
		if(closeFill) {
			this.__hasFill = false;
			this.__hasStroke = false;
		}
	}
	,__getBounds: function(rect,matrix) {
		var bounds = this.__bounds.clone().transform(matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__hitTest: function(x,y,shapeFlag,matrix) {
		if(this.__bounds == null) return false;
		var bounds = this.__bounds.clone().transform(matrix);
		return x > bounds.x && y > bounds.y && x <= bounds.get_right() && y <= bounds.get_bottom();
	}
	,__inflateBounds: function(x,y) {
		if(this.__bounds == null) {
			this.__bounds = new flash_geom_Rectangle(x,y,0,0);
			return;
		}
		if(x < this.__bounds.x) {
			this.__bounds.width += this.__bounds.x - x;
			this.__bounds.x = x;
		}
		if(y < this.__bounds.y) {
			this.__bounds.height += this.__bounds.y - y;
			this.__bounds.y = y;
		}
		if(x > this.__bounds.x + this.__bounds.width) this.__bounds.width = x - this.__bounds.x;
		if(y > this.__bounds.y + this.__bounds.height) this.__bounds.height = y - this.__bounds.y;
	}
	,__render: function() {
		if(this.__dirty) {
			this.__hasFill = false;
			this.__hasStroke = false;
			this.__inPath = false;
			this.__positionX = 0;
			this.__positionY = 0;
			if(this.__commands.length == 0) {
				this.__canvas = null;
				this.__context = null;
			} else {
				if(this.__canvas == null) {
					this.__canvas = window.document.createElement("canvas");
					this.__context = this.__canvas.getContext("2d");
					this.__context.mozImageSmoothingEnabled = false;
					this.__context.webkitImageSmoothingEnabled = false;
					this.__context.imageSmoothingEnabled = false;
				}
				this.__canvas.width = Math.ceil(this.__bounds.width);
				this.__canvas.height = Math.ceil(this.__bounds.height);
				var offsetX = this.__bounds.x;
				var offsetY = this.__bounds.y;
				var bitmapFill = null;
				var bitmapMatrix = null;
				var bitmapRepeat = false;
				var pattern = null;
				var setFill = false;
				var _g = 0;
				var _g1 = this.__commands;
				while(_g < _g1.length) {
					var command = _g1[_g];
					++_g;
					switch(command[1]) {
					case 0:
						var smooth = command[5];
						var repeat = command[4];
						var matrix = command[3];
						var bitmap = command[2];
						this.__closePath(false);
						if(bitmap != bitmapFill || repeat != bitmapRepeat) {
							bitmapFill = bitmap;
							bitmapRepeat = repeat;
							pattern = null;
							setFill = false;
						}
						bitmapMatrix = matrix;
						this.__hasFill = true;
						break;
					case 1:
						var alpha = command[3];
						var rgb = command[2];
						this.__closePath(false);
						if(alpha == 1) this.__context.fillStyle = "#" + StringTools.hex(rgb,6); else {
							var r = (rgb & 16711680) >>> 16;
							var g = (rgb & 65280) >>> 8;
							var b = rgb & 255;
							this.__context.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
						}
						bitmapFill = null;
						setFill = true;
						this.__hasFill = true;
						break;
					case 2:
						var y = command[5];
						var x = command[4];
						var cy = command[3];
						var cx = command[2];
						this.__beginPath();
						this.__context.quadraticCurveTo(cx,cy,x,y);
						this.__positionX = x;
						this.__positionY = y;
						break;
					case 3:
						var radius = command[4];
						var y1 = command[3];
						var x1 = command[2];
						if(!setFill && bitmapFill != null) {
							if(pattern == null) {
								if(bitmapFill.__sourceImage != null) pattern = this.__context.createPattern(bitmapFill.__sourceImage,bitmapRepeat?"repeat":"no-repeat"); else pattern = this.__context.createPattern(bitmapFill.__sourceCanvas,bitmapRepeat?"repeat":"no-repeat");
							}
							this.__context.fillStyle = pattern;
							setFill = true;
						}
						this.__closePath(false);
						this.__beginPath();
						this.__context.arc(x1 - offsetX,y1 - offsetY,radius,0,Math.PI * 2,true);
						this.__closePath(false);
						break;
					case 4:
						var height = command[5];
						var width = command[4];
						var y2 = command[3];
						var x2 = command[2];
						if(!setFill && bitmapFill != null) {
							if(pattern == null) {
								if(bitmapFill.__sourceImage != null) pattern = this.__context.createPattern(bitmapFill.__sourceImage,bitmapRepeat?"repeat":"no-repeat"); else pattern = this.__context.createPattern(bitmapFill.__sourceCanvas,bitmapRepeat?"repeat":"no-repeat");
							}
							this.__context.fillStyle = pattern;
							setFill = true;
						}
						x2 -= offsetX;
						y2 -= offsetY;
						var kappa = .5522848;
						var ox = width / 2 * kappa;
						var oy = height / 2 * kappa;
						var xe = x2 + width;
						var ye = y2 + height;
						var xm = x2 + width / 2;
						var ym = y2 + height / 2;
						this.__closePath(false);
						this.__beginPath();
						this.__context.moveTo(x2,ym);
						this.__context.bezierCurveTo(x2,ym - oy,xm - ox,y2,xm,y2);
						this.__context.bezierCurveTo(xm + ox,y2,xe,ym - oy,xe,ym);
						this.__context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
						this.__context.bezierCurveTo(xm - ox,ye,x2,ym + oy,x2,ym);
						this.__closePath(false);
						break;
					case 5:
						var height1 = command[5];
						var width1 = command[4];
						var y3 = command[3];
						var x3 = command[2];
						if(bitmapFill != null && width1 <= bitmapFill.width && height1 <= bitmapFill.height) {
							this.__closePath(false);
							if(bitmapFill.__sourceImage != null) this.__context.drawImage(bitmapFill.__sourceImage,0,0,bitmapFill.width,bitmapFill.height,x3,y3,width1,height1); else this.__context.drawImage(bitmapFill.__sourceCanvas,0,0,bitmapFill.width,bitmapFill.height,x3,y3,width1,height1);
						} else {
							this.__closePath(false);
							this.__beginPath();
							if(!setFill && bitmapFill != null) {
								if(pattern == null) {
									if(bitmapFill.__sourceImage != null) pattern = this.__context.createPattern(bitmapFill.__sourceImage,bitmapRepeat?"repeat":"no-repeat"); else pattern = this.__context.createPattern(bitmapFill.__sourceCanvas,bitmapRepeat?"repeat":"no-repeat");
								}
								this.__context.fillStyle = pattern;
								setFill = true;
							}
							this.__context.rect(x3 - offsetX,y3 - offsetY,width1,height1);
							this.__closePath(false);
						}
						break;
					case 6:
						var flags = command[5];
						var smooth1 = command[4];
						var tileData = command[3];
						var sheet = command[2];
						this.__closePath(false);
						var useScale = (flags & 1) > 0;
						var useRotation = (flags & 2) > 0;
						var useTransform = (flags & 16) > 0;
						var useRGB = (flags & 4) > 0;
						var useAlpha = (flags & 8) > 0;
						if(useTransform) {
							useScale = false;
							useRotation = false;
						}
						var scaleIndex = 0;
						var rotationIndex = 0;
						var rgbIndex = 0;
						var alphaIndex = 0;
						var transformIndex = 0;
						var numValues = 3;
						if(useScale) {
							scaleIndex = numValues;
							numValues++;
						}
						if(useRotation) {
							rotationIndex = numValues;
							numValues++;
						}
						if(useTransform) {
							transformIndex = numValues;
							numValues += 4;
						}
						if(useRGB) {
							rgbIndex = numValues;
							numValues += 3;
						}
						if(useAlpha) {
							alphaIndex = numValues;
							numValues++;
						}
						var totalCount = tileData.length;
						var itemCount = totalCount / numValues | 0;
						var index = 0;
						var rect = null;
						var center = null;
						var previousTileID = -1;
						var surface;
						if(sheet.__bitmap.__sourceImage != null) surface = sheet.__bitmap.__sourceImage; else surface = sheet.__bitmap.__sourceCanvas;
						while(index < totalCount) {
							var tileID = tileData[index + 2] | 0;
							if(tileID != previousTileID) {
								rect = sheet.__tileRects[tileID];
								center = sheet.__centerPoints[tileID];
								previousTileID = tileID;
							}
							if(rect != null && center != null) {
								this.__context.save();
								this.__context.translate(tileData[index],tileData[index + 1]);
								if(useRotation) this.__context.rotate(tileData[index + rotationIndex]);
								var scale = 1.0;
								if(useScale) scale = tileData[index + scaleIndex];
								if(useTransform) this.__context.transform(tileData[index + transformIndex],tileData[index + transformIndex + 1],tileData[index + transformIndex + 2],tileData[index + transformIndex + 3],0,0);
								if(useAlpha) this.__context.globalAlpha = tileData[index + alphaIndex];
								this.__context.drawImage(surface,rect.x,rect.y,rect.width,rect.height,-center.x * scale,-center.y * scale,rect.width * scale,rect.height * scale);
								this.__context.restore();
							}
							index += numValues;
						}
						break;
					case 7:
						if(this.__inPath) {
							if(this.__hasFill) {
								this.__context.fill();
								this.__context.closePath();
							}
							if(this.__hasStroke) this.__context.stroke();
						}
						break;
					case 8:
						var miterLimit = command[9];
						var joints = command[8];
						var caps = command[7];
						var scaleMode = command[6];
						var pixelHinting = command[5];
						var alpha1 = command[4];
						var color = command[3];
						var thickness = command[2];
						if(thickness == null) this.__hasStroke = false; else {
							this.__context.lineWidth = thickness;
							this.__context.lineJoin = joints;
							this.__context.lineCap = caps;
							this.__context.miterLimit = miterLimit;
							this.__context.strokeStyle = "#" + StringTools.hex(color,6);
							this.__hasStroke = true;
						}
						break;
					case 9:
						var y4 = command[3];
						var x4 = command[2];
						this.__beginPath();
						this.__context.lineTo(x4,y4);
						this.__positionX = x4;
						this.__positionY = y4;
						break;
					case 10:
						var y5 = command[3];
						var x5 = command[2];
						this.__beginPath();
						this.__context.moveTo(x5,y5);
						this.__positionX = x5;
						this.__positionY = y5;
						break;
					}
				}
			}
			this.__dirty = false;
			if(this.__inPath) {
				if(this.__hasFill) {
					this.__context.fill();
					this.__context.closePath();
				}
				if(this.__hasStroke) this.__context.stroke();
			}
		}
	}
	,__renderMask: function(renderSession) {
		if(this.__commands.length != 0) {
			var __context = renderSession.context;
			var __positionX = 0.0;
			var __positionY = 0.0;
			var offsetX = 0;
			var offsetY = 0;
			var _g = 0;
			var _g1 = this.__commands;
			while(_g < _g1.length) {
				var command = _g1[_g];
				++_g;
				switch(command[1]) {
				case 2:
					var y = command[5];
					var x = command[4];
					var cy = command[3];
					var cx = command[2];
					__context.quadraticCurveTo(cx,cy,x,y);
					__positionX = x;
					__positionY = y;
					break;
				case 3:
					var radius = command[4];
					var y1 = command[3];
					var x1 = command[2];
					__context.arc(x1 - offsetX,y1 - offsetY,radius,0,Math.PI * 2,true);
					break;
				case 4:
					var height = command[5];
					var width = command[4];
					var y2 = command[3];
					var x2 = command[2];
					x2 -= offsetX;
					y2 -= offsetY;
					var kappa = .5522848;
					var ox = width / 2 * kappa;
					var oy = height / 2 * kappa;
					var xe = x2 + width;
					var ye = y2 + height;
					var xm = x2 + width / 2;
					var ym = y2 + height / 2;
					__context.moveTo(x2,ym);
					__context.bezierCurveTo(x2,ym - oy,xm - ox,y2,xm,y2);
					__context.bezierCurveTo(xm + ox,y2,xe,ym - oy,xe,ym);
					__context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
					__context.bezierCurveTo(xm - ox,ye,x2,ym + oy,x2,ym);
					break;
				case 5:
					var height1 = command[5];
					var width1 = command[4];
					var y3 = command[3];
					var x3 = command[2];
					__context.rect(x3 - offsetX,y3 - offsetY,width1,height1);
					break;
				case 9:
					var y4 = command[3];
					var x4 = command[2];
					__context.lineTo(x4,y4);
					__positionX = x4;
					__positionY = y4;
					break;
				case 10:
					var y5 = command[3];
					var x5 = command[2];
					__context.moveTo(x5,y5);
					__positionX = x5;
					__positionY = y5;
					break;
				default:
				}
			}
		}
	}
	,__class__: flash_display_Graphics
};
var flash_display_DrawCommand = $hxClasses["flash.display.DrawCommand"] = { __ename__ : true, __constructs__ : ["BeginBitmapFill","BeginFill","CurveTo","DrawCircle","DrawEllipse","DrawRect","DrawTiles","EndFill","LineStyle","LineTo","MoveTo"] };
flash_display_DrawCommand.BeginBitmapFill = function(bitmap,matrix,repeat,smooth) { var $x = ["BeginBitmapFill",0,bitmap,matrix,repeat,smooth]; $x.__enum__ = flash_display_DrawCommand; $x.toString = $estr; return $x; };
flash_display_DrawCommand.BeginFill = function(rgb,alpha) { var $x = ["BeginFill",1,rgb,alpha]; $x.__enum__ = flash_display_DrawCommand; $x.toString = $estr; return $x; };
flash_display_DrawCommand.CurveTo = function(cx,cy,x,y) { var $x = ["CurveTo",2,cx,cy,x,y]; $x.__enum__ = flash_display_DrawCommand; $x.toString = $estr; return $x; };
flash_display_DrawCommand.DrawCircle = function(x,y,radius) { var $x = ["DrawCircle",3,x,y,radius]; $x.__enum__ = flash_display_DrawCommand; $x.toString = $estr; return $x; };
flash_display_DrawCommand.DrawEllipse = function(x,y,width,height) { var $x = ["DrawEllipse",4,x,y,width,height]; $x.__enum__ = flash_display_DrawCommand; $x.toString = $estr; return $x; };
flash_display_DrawCommand.DrawRect = function(x,y,width,height) { var $x = ["DrawRect",5,x,y,width,height]; $x.__enum__ = flash_display_DrawCommand; $x.toString = $estr; return $x; };
flash_display_DrawCommand.DrawTiles = function(sheet,tileData,smooth,flags) { var $x = ["DrawTiles",6,sheet,tileData,smooth,flags]; $x.__enum__ = flash_display_DrawCommand; $x.toString = $estr; return $x; };
flash_display_DrawCommand.EndFill = ["EndFill",7];
flash_display_DrawCommand.EndFill.toString = $estr;
flash_display_DrawCommand.EndFill.__enum__ = flash_display_DrawCommand;
flash_display_DrawCommand.LineStyle = function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) { var $x = ["LineStyle",8,thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit]; $x.__enum__ = flash_display_DrawCommand; $x.toString = $estr; return $x; };
flash_display_DrawCommand.LineTo = function(x,y) { var $x = ["LineTo",9,x,y]; $x.__enum__ = flash_display_DrawCommand; $x.toString = $estr; return $x; };
flash_display_DrawCommand.MoveTo = function(x,y) { var $x = ["MoveTo",10,x,y]; $x.__enum__ = flash_display_DrawCommand; $x.toString = $estr; return $x; };
var flash_display_LineScaleMode = $hxClasses["flash.display.LineScaleMode"] = { __ename__ : true, __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] };
flash_display_LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
flash_display_LineScaleMode.HORIZONTAL.toString = $estr;
flash_display_LineScaleMode.HORIZONTAL.__enum__ = flash_display_LineScaleMode;
flash_display_LineScaleMode.NONE = ["NONE",1];
flash_display_LineScaleMode.NONE.toString = $estr;
flash_display_LineScaleMode.NONE.__enum__ = flash_display_LineScaleMode;
flash_display_LineScaleMode.NORMAL = ["NORMAL",2];
flash_display_LineScaleMode.NORMAL.toString = $estr;
flash_display_LineScaleMode.NORMAL.__enum__ = flash_display_LineScaleMode;
flash_display_LineScaleMode.VERTICAL = ["VERTICAL",3];
flash_display_LineScaleMode.VERTICAL.toString = $estr;
flash_display_LineScaleMode.VERTICAL.__enum__ = flash_display_LineScaleMode;
var flash_display_Loader = function() { };
$hxClasses["flash.display.Loader"] = flash_display_Loader;
flash_display_Loader.__name__ = true;
flash_display_Loader.__super__ = flash_display_Sprite;
flash_display_Loader.prototype = $extend(flash_display_Sprite.prototype,{
	__class__: flash_display_Loader
});
var flash_display_LoaderInfo = function() {
	flash_events_EventDispatcher.call(this);
	this.applicationDomain = flash_system_ApplicationDomain.currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["flash.display.LoaderInfo"] = flash_display_LoaderInfo;
flash_display_LoaderInfo.__name__ = true;
flash_display_LoaderInfo.create = function(ldr) {
	var li = new flash_display_LoaderInfo();
	if(ldr != null) li.loader = ldr; else li.url = "";
	return li;
};
flash_display_LoaderInfo.__super__ = flash_events_EventDispatcher;
flash_display_LoaderInfo.prototype = $extend(flash_events_EventDispatcher.prototype,{
	__class__: flash_display_LoaderInfo
});
var flash_display_MovieClip = function() {
	flash_display_Sprite.call(this);
	this.__currentFrame = 0;
	this.__totalFrames = 0;
	this.loaderInfo = flash_display_LoaderInfo.create(null);
};
$hxClasses["flash.display.MovieClip"] = flash_display_MovieClip;
flash_display_MovieClip.__name__ = true;
flash_display_MovieClip.__super__ = flash_display_Sprite;
flash_display_MovieClip.prototype = $extend(flash_display_Sprite.prototype,{
	__class__: flash_display_MovieClip
});
var flash_display_PixelSnapping = $hxClasses["flash.display.PixelSnapping"] = { __ename__ : true, __constructs__ : ["NEVER","AUTO","ALWAYS"] };
flash_display_PixelSnapping.NEVER = ["NEVER",0];
flash_display_PixelSnapping.NEVER.toString = $estr;
flash_display_PixelSnapping.NEVER.__enum__ = flash_display_PixelSnapping;
flash_display_PixelSnapping.AUTO = ["AUTO",1];
flash_display_PixelSnapping.AUTO.toString = $estr;
flash_display_PixelSnapping.AUTO.__enum__ = flash_display_PixelSnapping;
flash_display_PixelSnapping.ALWAYS = ["ALWAYS",2];
flash_display_PixelSnapping.ALWAYS.toString = $estr;
flash_display_PixelSnapping.ALWAYS.__enum__ = flash_display_PixelSnapping;
var flash_display_Stage = function(width,height,element,color) {
	if(color == null) color = 16777215;
	this.__mouseY = 0;
	this.__mouseX = 0;
	flash_display_Sprite.call(this);
	this.__mouseX = 0;
	this.__mouseY = 0;
	this.__canvas = window.document.createElement("canvas");
	this.__context = this.__canvas.getContext ("2d", { alpha: false });
	this.__context.mozImageSmoothingEnabled = false;
	this.__context.webkitImageSmoothingEnabled = false;
	this.__context.imageSmoothingEnabled = false;
	this.__canvas.style.transform = "translatez(0)";
	this.__canvas.style.position = "absolute";
	this.__canvas.style.top = "0px";
	this.__canvas.style.left = "0px";
	this.__originalWidth = width;
	this.__originalHeight = height;
	if(width == 0 && height == 0) {
		if(element != null) {
			width = element.clientWidth;
			height = element.clientHeight;
		} else {
			width = window.innerWidth;
			height = window.innerHeight;
		}
		this.__fullscreen = true;
	}
	this.stageWidth = width;
	this.stageHeight = height;
	this.__canvas.width = width;
	this.__canvas.height = height;
	this.__element = element;
	this.set_color(color);
	this.__resize();
	window.addEventListener("resize",$bind(this,this.window_onResize));
	if(element != null) element.appendChild(this.__canvas);
	this.stage = this;
	this.parent = this;
	this.__clearBeforeRender = true;
	this.__eventQueue = [];
	this.__stack = [];
	this.__renderSession = new flash_display_RenderSession();
	this.__renderSession.context = this.__context;
	this.__renderSession.roundPixels = true;
	this.__stats = new Stats ();
	this.__stats.domElement.style.position = "absolute";
	this.__stats.domElement.style.top = "0px";
	window.document.body.appendChild(this.__stats.domElement);
	var windowEvents = ["keydown","keyup"];
	var canvasEvents = ["touchstart","touchmove","touchend","mousedown","mousemove","mouseup","click","dblclick"];
	var _g = 0;
	while(_g < windowEvents.length) {
		var event = windowEvents[_g];
		++_g;
		window.addEventListener(event,$bind(this,this.__queueEvent),false);
	}
	var _g1 = 0;
	while(_g1 < canvasEvents.length) {
		var event1 = canvasEvents[_g1];
		++_g1;
		this.__canvas.addEventListener(event1,$bind(this,this.__queueEvent),true);
	}
	window.requestAnimationFrame($bind(this,this.__render));
};
$hxClasses["flash.display.Stage"] = flash_display_Stage;
flash_display_Stage.__name__ = true;
flash_display_Stage.__super__ = flash_display_Sprite;
flash_display_Stage.prototype = $extend(flash_display_Sprite.prototype,{
	globalToLocal: function(pos) {
		return pos;
	}
	,__fireEvent: function(event,stack) {
		var l = stack.length;
		if(l > 0) {
			event.eventPhase = 0;
			stack.reverse();
			event.target = stack[0];
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.dispatchEvent(event);
				if(event.__isCancelled) return;
			}
		}
		event.eventPhase = 1;
		event.currentTarget = this;
		this.dispatchEvent(event);
		if(event.__isCancelled) return;
		if(event.bubbles) {
			event.eventPhase = 2;
			stack.reverse();
			var _g1 = 0;
			while(_g1 < stack.length) {
				var obj1 = stack[_g1];
				++_g1;
				event.currentTarget = obj1;
				obj1.dispatchEvent(event);
				if(event.__isCancelled) return;
			}
		}
	}
	,__queueEvent: function(event) {
		this.__eventQueue.push(event);
	}
	,__render: function() {
		this.__stats.begin();
		var _g = 0;
		var _g1 = this.__eventQueue;
		while(_g < _g1.length) {
			var event = _g1[_g];
			++_g;
			var _g2 = event.type;
			switch(_g2) {
			case "keydown":case "keyup":
				this.window_onKey(event);
				break;
			case "touchstart":case "touchend":case "touchmove":
				this.canvas_onTouch(event);
				break;
			case "mousedown":case "mouseup":case "mousemove":case "click":case "dblclick":
				this.canvas_onMouse(event);
				break;
			default:
			}
		}
		this.__eventQueue.length = 0;
		var event1 = new flash_events_Event(flash_events_Event.ENTER_FRAME);
		this.__broadcast(event1);
		this.__renderable = true;
		this.__update();
		if(this.stageWidth != this.__canvas.width || this.stageHeight != this.__canvas.height) {
			this.__canvas.width = this.stageWidth;
			this.__canvas.height = this.stageHeight;
		}
		this.__context.setTransform(1,0,0,1,0,0);
		this.__context.globalAlpha = 1;
		if(!this.__transparent && this.__clearBeforeRender) {
			this.__context.fillStyle = this.__colorString;
			this.__context.fillRect(0,0,this.stageWidth,this.stageHeight);
		} else if(this.__transparent && this.__clearBeforeRender) this.__context.clearRect(0,0,this.stageWidth,this.stageHeight);
		this.__renderCanvas(this.__renderSession);
		this.__stats.end();
		window.requestAnimationFrame($bind(this,this.__render));
	}
	,__resize: function() {
		if(this.__element != null) {
			if(this.__fullscreen) {
				this.stageWidth = this.__element.clientWidth;
				this.stageHeight = this.__element.clientHeight;
				this.__canvas.width = this.stageWidth;
				this.__canvas.height = this.stageHeight;
			} else {
				var scaleX = this.__element.clientWidth / this.__originalWidth;
				var scaleY = this.__element.clientHeight / this.__originalHeight;
				var currentRatio = scaleX / scaleY;
				var targetRatio = Math.min(scaleX,scaleY);
				this.__canvas.style.width = this.__originalWidth * targetRatio + "px";
				this.__canvas.style.height = this.__originalHeight * targetRatio + "px";
				this.__canvas.style.marginLeft = (this.__element.clientWidth - this.__originalWidth * targetRatio) / 2 + "px";
				this.__canvas.style.marginTop = (this.__element.clientHeight - this.__originalHeight * targetRatio) / 2 + "px";
			}
		}
	}
	,__setCursor: function(cursor) {
		if(this.__cursor != cursor) this.__canvas.style.cursor = this.__cursor = cursor;
	}
	,get_mouseX: function() {
		return this.__mouseX;
	}
	,get_mouseY: function() {
		return this.__mouseY;
	}
	,canvas_onTouch: function(event) {
		event.preventDefault();
		var rect = this.__canvas.getBoundingClientRect();
		var touch = event.changedTouches[0];
		var point = new flash_geom_Point(touch.pageX - rect.left,touch.pageY - rect.top);
		this.__mouseX = point.x;
		this.__mouseY = point.y;
		this.__stack = [];
		var type = null;
		var mouseType = null;
		var _g = event.type;
		switch(_g) {
		case "touchstart":
			type = "touchBegin";
			mouseType = flash_events_MouseEvent.MOUSE_DOWN;
			break;
		case "touchmove":
			type = "touchMove";
			mouseType = flash_events_MouseEvent.MOUSE_MOVE;
			break;
		case "touchend":
			type = "touchEnd";
			mouseType = flash_events_MouseEvent.MOUSE_UP;
			break;
		default:
		}
		if(this.__hitTest(this.get_mouseX(),this.get_mouseY(),false,this.__stack,true)) {
			var target = this.__stack[this.__stack.length - 1];
			var localPoint = target.globalToLocal(point);
			var touchEvent = flash_events_TouchEvent.__create(type,event,touch,localPoint,target);
			touchEvent.touchPointID = touch.identifier;
			touchEvent.isPrimaryTouchPoint = true;
			this.__fireEvent(touchEvent,this.__stack);
			this.__fireEvent(flash_events_MouseEvent.__create(mouseType,event,localPoint,target),this.__stack);
		} else {
			var touchEvent1 = flash_events_TouchEvent.__create(type,event,touch,point,this);
			touchEvent1.touchPointID = touch.identifier;
			touchEvent1.isPrimaryTouchPoint = true;
			this.__fireEvent(touchEvent1,[this]);
			this.__fireEvent(flash_events_MouseEvent.__create(mouseType,event,point,this),[this]);
		}
	}
	,canvas_onMouse: function(event) {
		var rect = this.__canvas.getBoundingClientRect();
		this.__mouseX = (event.clientX - rect.left) * (this.__canvas.width / rect.width);
		this.__mouseY = (event.clientY - rect.top) * (this.__canvas.height / rect.height);
		this.__stack = [];
		var type;
		var _g = event.type;
		switch(_g) {
		case "mousedown":
			type = flash_events_MouseEvent.MOUSE_DOWN;
			break;
		case "mouseup":
			type = flash_events_MouseEvent.MOUSE_UP;
			break;
		case "mousemove":
			type = flash_events_MouseEvent.MOUSE_MOVE;
			break;
		case "click":
			type = flash_events_MouseEvent.CLICK;
			break;
		case "dblclick":
			type = flash_events_MouseEvent.DOUBLE_CLICK;
			break;
		default:
			type = null;
		}
		if(this.__hitTest(this.get_mouseX(),this.get_mouseY(),false,this.__stack,true)) {
			var target = this.__stack[this.__stack.length - 1];
			this.__setCursor(target.buttonMode?"pointer":"default");
			this.__fireEvent(flash_events_MouseEvent.__create(type,event,target.globalToLocal(new flash_geom_Point(this.get_mouseX(),this.get_mouseY())),target),this.__stack);
		} else {
			this.__setCursor(this.buttonMode?"pointer":"default");
			this.__fireEvent(flash_events_MouseEvent.__create(type,event,new flash_geom_Point(this.get_mouseX(),this.get_mouseY()),this),[this]);
		}
	}
	,window_onKey: function(event) {
		var keyCode;
		if(event.keyCode != null) keyCode = event.keyCode; else keyCode = event.which;
		keyCode = flash_ui_Keyboard.__convertMozillaCode(keyCode);
		this.dispatchEvent(new flash_events_KeyboardEvent(event.type == "keydown"?flash_events_KeyboardEvent.KEY_DOWN:flash_events_KeyboardEvent.KEY_UP,true,false,event.charCode,keyCode,event.keyLocation != null?js_Boot.__cast(event.keyLocation , Int):0,event.ctrlKey,event.altKey,event.shiftKey));
	}
	,window_onResize: function(event) {
		this.__resize();
		var event1 = new flash_events_Event(flash_events_Event.RESIZE);
		this.__broadcast(event1);
	}
	,set_color: function(value) {
		this.__colorString = "#" + StringTools.hex(value,6);
		return this.__color = value;
	}
	,__class__: flash_display_Stage
});
var flash_display_RenderSession = function() {
	this.maskManager = new flash_display_MaskManager(this);
};
$hxClasses["flash.display.RenderSession"] = flash_display_RenderSession;
flash_display_RenderSession.__name__ = true;
flash_display_RenderSession.prototype = {
	__class__: flash_display_RenderSession
};
var flash_display_MaskManager = function(renderSession) {
	this.renderSession = renderSession;
};
$hxClasses["flash.display.MaskManager"] = flash_display_MaskManager;
flash_display_MaskManager.__name__ = true;
flash_display_MaskManager.prototype = {
	pushMask: function(mask) {
		var context = this.renderSession.context;
		context.save();
		var transform = mask.__worldTransform;
		if(transform == null) transform = new flash_geom_Matrix();
		context.setTransform(transform.a,transform.c,transform.b,transform.d,transform.tx,transform.ty);
		context.beginPath();
		mask.__renderMask(this.renderSession);
		context.clip();
	}
	,popMask: function() {
		this.renderSession.context.restore();
	}
	,__class__: flash_display_MaskManager
};
var flash_events_Event = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
};
$hxClasses["flash.events.Event"] = flash_events_Event;
flash_events_Event.__name__ = true;
flash_events_Event.prototype = {
	__class__: flash_events_Event
};
var flash_events_TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash_events_Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.TextEvent"] = flash_events_TextEvent;
flash_events_TextEvent.__name__ = true;
flash_events_TextEvent.__super__ = flash_events_Event;
flash_events_TextEvent.prototype = $extend(flash_events_Event.prototype,{
	__class__: flash_events_TextEvent
});
var flash_events_ErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash_events_TextEvent.call(this,type,bubbles,cancelable);
	this.text = text;
	this.errorID = id;
};
$hxClasses["flash.events.ErrorEvent"] = flash_events_ErrorEvent;
flash_events_ErrorEvent.__name__ = true;
flash_events_ErrorEvent.__super__ = flash_events_TextEvent;
flash_events_ErrorEvent.prototype = $extend(flash_events_TextEvent.prototype,{
	__class__: flash_events_ErrorEvent
});
var flash_events__$EventDispatcher_Listener = function(callback,useCapture,priority) {
	this.callback = callback;
	this.useCapture = useCapture;
	this.priority = priority;
};
$hxClasses["flash.events._EventDispatcher.Listener"] = flash_events__$EventDispatcher_Listener;
flash_events__$EventDispatcher_Listener.__name__ = true;
flash_events__$EventDispatcher_Listener.prototype = {
	match: function(callback,useCapture) {
		return this.callback == callback && this.useCapture == useCapture;
	}
	,__class__: flash_events__$EventDispatcher_Listener
};
var flash_events_HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	flash_events_Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.HTTPStatusEvent"] = flash_events_HTTPStatusEvent;
flash_events_HTTPStatusEvent.__name__ = true;
flash_events_HTTPStatusEvent.__super__ = flash_events_Event;
flash_events_HTTPStatusEvent.prototype = $extend(flash_events_Event.prototype,{
	__class__: flash_events_HTTPStatusEvent
});
var flash_events_IOErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash_events_Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.IOErrorEvent"] = flash_events_IOErrorEvent;
flash_events_IOErrorEvent.__name__ = true;
flash_events_IOErrorEvent.__super__ = flash_events_Event;
flash_events_IOErrorEvent.prototype = $extend(flash_events_Event.prototype,{
	__class__: flash_events_IOErrorEvent
});
var flash_events_KeyboardEvent = function(type,bubbles,cancelable,charCodeValue,keyCodeValue,keyLocationValue,ctrlKeyValue,altKeyValue,shiftKeyValue,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(shiftKeyValue == null) shiftKeyValue = false;
	if(altKeyValue == null) altKeyValue = false;
	if(ctrlKeyValue == null) ctrlKeyValue = false;
	if(keyCodeValue == null) keyCodeValue = 0;
	if(charCodeValue == null) charCodeValue = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash_events_Event.call(this,type,bubbles,cancelable);
	this.charCode = charCodeValue;
	this.keyCode = keyCodeValue;
	if(keyLocationValue != null) this.keyLocation = keyLocationValue; else this.keyLocation = 0;
	this.ctrlKey = ctrlKeyValue;
	this.altKey = altKeyValue;
	this.commandKey = commandKeyValue;
	this.controlKey = controlKeyValue;
};
$hxClasses["flash.events.KeyboardEvent"] = flash_events_KeyboardEvent;
flash_events_KeyboardEvent.__name__ = true;
flash_events_KeyboardEvent.__super__ = flash_events_Event;
flash_events_KeyboardEvent.prototype = $extend(flash_events_Event.prototype,{
	__class__: flash_events_KeyboardEvent
});
var flash_events_MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash_events_Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
$hxClasses["flash.events.MouseEvent"] = flash_events_MouseEvent;
flash_events_MouseEvent.__name__ = true;
flash_events_MouseEvent.__create = function(type,event,local,target) {
	var __mouseDown = false;
	var delta = 2;
	if(type == flash_events_MouseEvent.MOUSE_WHEEL) {
		var mouseEvent = event;
		if(mouseEvent.wheelDelta) delta = mouseEvent.wheelDelta / 120 | 0; else if(mouseEvent.detail) -mouseEvent.detail | 0;
	}
	if(type == flash_events_MouseEvent.MOUSE_DOWN) if(event.which != null) __mouseDown = event.which == 1; else if(event.button != null) __mouseDown = event.button == 0; else __mouseDown = false; else if(type == flash_events_MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) __mouseDown = false; else if(event.button != null) {
				if(event.button == 0) __mouseDown = false; else __mouseDown = false;
			}
		}
	}
	var pseudoEvent = new flash_events_MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,__mouseDown,delta);
	pseudoEvent.stageX = flash_Lib.current.stage.get_mouseX();
	pseudoEvent.stageY = flash_Lib.current.stage.get_mouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
};
flash_events_MouseEvent.__super__ = flash_events_Event;
flash_events_MouseEvent.prototype = $extend(flash_events_Event.prototype,{
	__class__: flash_events_MouseEvent
});
var flash_events_ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash_events_Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["flash.events.ProgressEvent"] = flash_events_ProgressEvent;
flash_events_ProgressEvent.__name__ = true;
flash_events_ProgressEvent.__super__ = flash_events_Event;
flash_events_ProgressEvent.prototype = $extend(flash_events_Event.prototype,{
	__class__: flash_events_ProgressEvent
});
var flash_events_SecurityErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash_events_ErrorEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.SecurityErrorEvent"] = flash_events_SecurityErrorEvent;
flash_events_SecurityErrorEvent.__name__ = true;
flash_events_SecurityErrorEvent.__super__ = flash_events_ErrorEvent;
flash_events_SecurityErrorEvent.prototype = $extend(flash_events_ErrorEvent.prototype,{
	__class__: flash_events_SecurityErrorEvent
});
var flash_events_TouchEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash_events_Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["flash.events.TouchEvent"] = flash_events_TouchEvent;
flash_events_TouchEvent.__name__ = true;
flash_events_TouchEvent.__create = function(type,event,touch,local,target) {
	var evt = new flash_events_TouchEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = flash_Lib.current.stage.get_mouseX();
	evt.stageY = flash_Lib.current.stage.get_mouseY();
	evt.target = target;
	return evt;
};
flash_events_TouchEvent.__super__ = flash_events_Event;
flash_events_TouchEvent.prototype = $extend(flash_events_Event.prototype,{
	__class__: flash_events_TouchEvent
});
var flash_geom_Matrix = function(a,b,c,d,tx,ty) {
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(d == null) d = 1;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 1;
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
};
$hxClasses["flash.geom.Matrix"] = flash_geom_Matrix;
flash_geom_Matrix.__name__ = true;
flash_geom_Matrix.prototype = {
	clone: function() {
		return new flash_geom_Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.tx = -this.tx;
			this.ty = -this.ty;
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.ty = -this.b * this.tx - this.d * this.ty;
			this.tx = tx1;
		}
		return this;
	}
	,transformPoint: function(pos) {
		return new flash_geom_Point(pos.x * this.a + pos.y * this.c + this.tx,pos.x * this.b + pos.y * this.d + this.ty);
	}
	,__class__: flash_geom_Matrix
};
var flash_geom_Point = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
$hxClasses["flash.geom.Point"] = flash_geom_Point;
flash_geom_Point.__name__ = true;
flash_geom_Point.prototype = {
	__class__: flash_geom_Point
};
var flash_geom_Rectangle = function(x,y,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
$hxClasses["flash.geom.Rectangle"] = flash_geom_Rectangle;
flash_geom_Rectangle.__name__ = true;
flash_geom_Rectangle.prototype = {
	clone: function() {
		return new flash_geom_Rectangle(this.x,this.y,this.width,this.height);
	}
	,transform: function(m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = tx0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		return new flash_geom_Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,__expand: function(x,y,width,height) {
		var cacheRight = this.get_right();
		var cacheBottom = this.get_bottom();
		if(this.x > x) this.x = x;
		if(this.y > y) this.y = y;
		if(cacheRight < x + width) this.width = x + width - this.x;
		if(cacheBottom < y + height) this.height = y + height - this.y;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,__class__: flash_geom_Rectangle
};
var flash_media_Sound = function(stream,context) {
	flash_events_EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.length = 0;
	this.url = null;
	if(stream != null) this.load(stream,context);
};
$hxClasses["flash.media.Sound"] = flash_media_Sound;
flash_media_Sound.__name__ = true;
flash_media_Sound.__super__ = flash_events_EventDispatcher;
flash_media_Sound.prototype = $extend(flash_events_EventDispatcher.prototype,{
	load: function(stream,context) {
		if(this.__howl != null) {
			if(stream.url == this.url) return; else this.__howl.unload();
		}
		this.url = stream.url;
		var file = haxe_io_Path.withoutExtension(stream.url);
		this.__howl = new Howl({ onload : $bind(this,this.howl_onLoad), onloaderror : $bind(this,this.howl_onLoadError), urls : [file + ".ogg",file + ".mp3",file + ".wav"], buffer : this.__buffer, loop : this.__buffer});
	}
	,howl_onLoad: function(_) {
		this.dispatchEvent(new flash_events_Event(flash_events_Event.COMPLETE));
	}
	,howl_onLoadError: function(_) {
		this.dispatchEvent(new flash_events_IOErrorEvent(flash_events_IOErrorEvent.IO_ERROR));
	}
	,__class__: flash_media_Sound
});
var flash_media_SoundLoaderContext = function() { };
$hxClasses["flash.media.SoundLoaderContext"] = flash_media_SoundLoaderContext;
flash_media_SoundLoaderContext.__name__ = true;
var flash_net_URLLoader = function() { };
$hxClasses["flash.net.URLLoader"] = flash_net_URLLoader;
flash_net_URLLoader.__name__ = true;
flash_net_URLLoader.__super__ = flash_events_EventDispatcher;
flash_net_URLLoader.prototype = $extend(flash_events_EventDispatcher.prototype,{
	getData: function() {
		return null;
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,registerEvents: function(subject) {
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s;
			try {
				s = subject.status;
			} catch( e ) {
				s = null;
			}
			if(s == undefined) s = null;
			if(s != null) self.onStatus(s);
			if(s != null && s >= 200 && s < 400) self.onData(subject.response); else if(s == null) self.onError("Failed to connect or resolve host"); else if(s == 12029) self.onError("Failed to connect to host"); else if(s == 12007) self.onError("Unknown host"); else if(s == 0) {
				self.onError("Unable to make request (may be blocked due to cross-domain permissions)");
				self.onSecurityError("Unable to make request (may be blocked due to cross-domain permissions)");
			} else self.onError("Http Error #" + subject.status);
		};
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js_Boot.__instanceof(data,flash_utils_ByteArray)) {
			var data1 = data;
			var _g = this.dataFormat;
			switch(_g[1]) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js_Boot.__instanceof(data,flash_net_URLVariables)) {
			var data2 = data;
			var _g1 = 0;
			var _g11 = Reflect.fields(data2);
			while(_g1 < _g11.length) {
				var p = _g11[_g1];
				++_g1;
				if(uri.length != 0) uri += "&";
				uri += encodeURIComponent(p) + "=" + StringTools.urlEncode(Reflect.field(data2,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open(method,url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(method,url,true);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		var _g2 = this.dataFormat;
		switch(_g2[1]) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g3 = 0;
		while(_g3 < requestHeaders.length) {
			var header = requestHeaders[_g3];
			++_g3;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		this.onOpen();
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,onData: function(_) {
		var content = this.getData();
		var _g = this.dataFormat;
		switch(_g[1]) {
		case 0:
			this.data = flash_utils_ByteArray.__ofBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var evt = new flash_events_Event(flash_events_Event.COMPLETE);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onError: function(msg) {
		var evt = new flash_events_IOErrorEvent(flash_events_IOErrorEvent.IO_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onOpen: function() {
		var evt = new flash_events_Event(flash_events_Event.OPEN);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onProgress: function(event) {
		var evt = new flash_events_ProgressEvent(flash_events_ProgressEvent.PROGRESS);
		evt.currentTarget = this;
		evt.bytesLoaded = event.loaded;
		evt.bytesTotal = event.total;
		this.dispatchEvent(evt);
	}
	,onSecurityError: function(msg) {
		var evt = new flash_events_SecurityErrorEvent(flash_events_SecurityErrorEvent.SECURITY_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onStatus: function(status) {
		var evt = new flash_events_HTTPStatusEvent(flash_events_HTTPStatusEvent.HTTP_STATUS,false,false,status);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,__class__: flash_net_URLLoader
});
var flash_net_URLLoaderDataFormat = $hxClasses["flash.net.URLLoaderDataFormat"] = { __ename__ : true, __constructs__ : ["BINARY","TEXT","VARIABLES"] };
flash_net_URLLoaderDataFormat.BINARY = ["BINARY",0];
flash_net_URLLoaderDataFormat.BINARY.toString = $estr;
flash_net_URLLoaderDataFormat.BINARY.__enum__ = flash_net_URLLoaderDataFormat;
flash_net_URLLoaderDataFormat.TEXT = ["TEXT",1];
flash_net_URLLoaderDataFormat.TEXT.toString = $estr;
flash_net_URLLoaderDataFormat.TEXT.__enum__ = flash_net_URLLoaderDataFormat;
flash_net_URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
flash_net_URLLoaderDataFormat.VARIABLES.toString = $estr;
flash_net_URLLoaderDataFormat.VARIABLES.__enum__ = flash_net_URLLoaderDataFormat;
var flash_net_URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = flash_net_URLRequestMethod.GET;
	this.contentType = null;
};
$hxClasses["flash.net.URLRequest"] = flash_net_URLRequest;
flash_net_URLRequest.__name__ = true;
flash_net_URLRequest.prototype = {
	formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == flash_net_URLRequestMethod.GET || this.data == null) return res;
		if(typeof(this.data) == "string" || js_Boot.__instanceof(this.data,flash_utils_ByteArray)) {
			res = res.slice();
			res.push(new flash_net_URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		}
		return res;
	}
	,__class__: flash_net_URLRequest
};
var flash_net_URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["flash.net.URLRequestHeader"] = flash_net_URLRequestHeader;
flash_net_URLRequestHeader.__name__ = true;
flash_net_URLRequestHeader.prototype = {
	__class__: flash_net_URLRequestHeader
};
var flash_net_URLRequestMethod = function() { };
$hxClasses["flash.net.URLRequestMethod"] = flash_net_URLRequestMethod;
flash_net_URLRequestMethod.__name__ = true;
var flash_net_URLVariables = function() { };
$hxClasses["flash.net.URLVariables"] = flash_net_URLVariables;
flash_net_URLVariables.__name__ = true;
var flash_system_ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = flash_system_ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.ApplicationDomain"] = flash_system_ApplicationDomain;
flash_system_ApplicationDomain.__name__ = true;
flash_system_ApplicationDomain.prototype = {
	__class__: flash_system_ApplicationDomain
};
var flash_text_Font = function() { };
$hxClasses["flash.text.Font"] = flash_text_Font;
flash_text_Font.__name__ = true;
var flash_text_GridFitType = $hxClasses["flash.text.GridFitType"] = { __ename__ : true, __constructs__ : ["NONE","PIXEL","SUBPIXEL"] };
flash_text_GridFitType.NONE = ["NONE",0];
flash_text_GridFitType.NONE.toString = $estr;
flash_text_GridFitType.NONE.__enum__ = flash_text_GridFitType;
flash_text_GridFitType.PIXEL = ["PIXEL",1];
flash_text_GridFitType.PIXEL.toString = $estr;
flash_text_GridFitType.PIXEL.__enum__ = flash_text_GridFitType;
flash_text_GridFitType.SUBPIXEL = ["SUBPIXEL",2];
flash_text_GridFitType.SUBPIXEL.toString = $estr;
flash_text_GridFitType.SUBPIXEL.__enum__ = flash_text_GridFitType;
var flash_text_TextField = function() {
	flash_display_InteractiveObject.call(this);
	this.__width = 100;
	this.__height = 100;
	this.__text = "";
	this.set_type(flash_text_TextFieldType.DYNAMIC);
	this.set_autoSize(flash_text_TextFieldAutoSize.NONE);
	this.selectable = true;
	this.set_borderColor(0);
	this.set_border(false);
	this.set_backgroundColor(16777215);
	this.set_background(false);
	this.gridFitType = flash_text_GridFitType.PIXEL;
	this.sharpness = 0;
	if(flash_text_TextField.__defaultTextFormat == null) {
		flash_text_TextField.__defaultTextFormat = new flash_text_TextFormat("Times New Roman",12,0,false,false,false,"","",flash_text_TextFormatAlign.LEFT,0,0,0,0);
		flash_text_TextField.__defaultTextFormat.blockIndent = 0;
		flash_text_TextField.__defaultTextFormat.bullet = false;
		flash_text_TextField.__defaultTextFormat.letterSpacing = 0;
		flash_text_TextField.__defaultTextFormat.kerning = false;
	}
	this.__textFormat = flash_text_TextField.__defaultTextFormat.clone();
};
$hxClasses["flash.text.TextField"] = flash_text_TextField;
flash_text_TextField.__name__ = true;
flash_text_TextField.__defaultTextFormat = null;
flash_text_TextField.__super__ = flash_display_InteractiveObject;
flash_text_TextField.prototype = $extend(flash_display_InteractiveObject.prototype,{
	__getBounds: function(rect,matrix) {
		var bounds = new flash_geom_Rectangle(0,0,this.get_width(),this.get_height());
		bounds.transform(this.__worldTransform);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__getFont: function(format) {
		var font;
		if(format.italic) font = "italic "; else font = "normal ";
		font += "normal ";
		if(format.bold) font += "bold "; else font += "normal ";
		font += format.size + "px";
		font += "/" + (format.size + format.leading + 4) + "px ";
		var _g = format.font;
		switch(_g) {
		case "_sans":
			font += "sans-serif";
			break;
		case "_serif":
			font += "serif";
			break;
		case "_typewriter":
			font += "monospace";
			break;
		default:
			font += format.font;
		}
		return font;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.visible || interactiveOnly && !this.mouseEnabled) return false;
		var point = this.globalToLocal(new flash_geom_Point(x,y));
		if(point.x > 0 && point.y > 0 && point.x <= this.__width && point.y <= this.__height) {
			if(stack != null) stack.push(this);
			return true;
		}
		return false;
	}
	,__measureText: function() {
		if(this.__ranges == null) {
			this.__context.font = this.__getFont(this.__textFormat);
			return [this.__context.measureText(this.__text).width];
		} else {
			var measurements = [];
			var _g = 0;
			var _g1 = this.__ranges;
			while(_g < _g1.length) {
				var range = _g1[_g];
				++_g;
				this.__context.font = this.__getFont(range.format);
				measurements.push(this.__context.measureText(this.get_text().substring(range.start,range.end)).width);
			}
			return measurements;
		}
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable) return;
		if(this.__dirty) {
			if((this.__text == null || this.__text == "") && !this.background && !this.border || (this.get_width() <= 0 || this.get_height() <= 0) && this.autoSize != flash_text_TextFieldAutoSize.LEFT) {
				this.__canvas = null;
				this.__context = null;
			} else {
				if(this.__canvas == null) {
					this.__canvas = window.document.createElement("canvas");
					this.__context = this.__canvas.getContext("2d");
					this.__context.mozImageSmoothingEnabled = false;
					this.__context.webkitImageSmoothingEnabled = false;
					this.__context.imageSmoothingEnabled = false;
				}
				if(this.__text != null && this.__text != "") {
					var measurements = this.__measureText();
					var textWidth = 0.0;
					var _g = 0;
					while(_g < measurements.length) {
						var measurement = measurements[_g];
						++_g;
						textWidth += measurement;
					}
					if(this.autoSize == flash_text_TextFieldAutoSize.LEFT) this.__width = textWidth + 4;
					this.__canvas.width = Math.ceil(this.__width);
					this.__canvas.height = Math.ceil(this.__height);
					if(this.border || this.background) {
						if(this.border) {
							this.__context.lineWidth = 1;
							this.__context.strokeStyle = "#" + StringTools.hex(this.borderColor,6);
						}
						if(this.background) this.__context.fillStyle = "#" + StringTools.hex(this.backgroundColor,6);
						this.__context.rect(0,0,this.__width,this.__height);
					}
					if(this.__ranges == null) this.__renderText(this.get_text(),this.__textFormat,0); else {
						var currentIndex = 0;
						var range;
						var offsetX = 0.0;
						var _g1 = 0;
						var _g2 = this.__ranges.length;
						while(_g1 < _g2) {
							var i = _g1++;
							range = this.__ranges[i];
							this.__renderText(this.get_text().substring(range.start,range.end),range.format,offsetX);
							offsetX += measurements[i];
						}
					}
				} else {
					if(this.autoSize == flash_text_TextFieldAutoSize.LEFT) this.__width = 4;
					this.__canvas.width = Math.ceil(this.__width);
					this.__canvas.height = Math.ceil(this.__height);
					if(this.border || this.background) {
						if(this.border) {
							this.__context.lineWidth = 1;
							this.__context.strokeStyle = "#" + StringTools.hex(this.borderColor,6);
						}
						if(this.background) this.__context.fillStyle = "#" + StringTools.hex(this.backgroundColor,6);
						this.__context.rect(0,0,this.__width,this.__height);
					}
				}
			}
			this.__dirty = false;
		}
		if(this.__canvas != null) {
			var context = renderSession.context;
			context.globalAlpha = this.__worldAlpha;
			var transform = this.__worldTransform;
			if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
			context.drawImage(this.__canvas,0,0);
		}
	}
	,__renderText: function(text,format,offsetX) {
		this.__context.font = this.__getFont(format);
		this.__context.textBaseline = "top";
		this.__context.fillStyle = "#" + StringTools.hex(format.color,6);
		var _g = format.align;
		switch(_g[1]) {
		case 3:
			this.__context.textAlign = "center";
			this.__context.fillText(text,this.__width / 2,2,this.__width - 4);
			break;
		case 1:
			this.__context.textAlign = "end";
			this.__context.fillText(text,this.__width - 2,2,this.__width - 4);
			break;
		default:
			this.__context.textAlign = "start";
			this.__context.fillText(text,2 + offsetX,2,this.__width - 4);
		}
	}
	,set_autoSize: function(value) {
		if(value != this.autoSize) this.__dirty = true;
		return this.autoSize = value;
	}
	,set_background: function(value) {
		if(value != this.background) this.__dirty = true;
		return this.background = value;
	}
	,set_backgroundColor: function(value) {
		if(value != this.backgroundColor) this.__dirty = true;
		return this.backgroundColor = value;
	}
	,set_border: function(value) {
		if(value != this.border) this.__dirty = true;
		return this.border = value;
	}
	,set_borderColor: function(value) {
		if(value != this.borderColor) this.__dirty = true;
		return this.borderColor = value;
	}
	,set_defaultTextFormat: function(value) {
		this.__textFormat = flash_text_TextField.__defaultTextFormat.clone();
		this.__textFormat.__merge(value);
		return value;
	}
	,get_height: function() {
		return this.__height * this.scaleY;
	}
	,get_text: function() {
		if(this.__isHTML) {
		}
		return this.__text;
	}
	,set_text: function(value) {
		if(this.__isHTML || this.__text != value) this.__dirty = true;
		this.__ranges = null;
		this.__isHTML = false;
		return this.__text = value;
	}
	,set_type: function(value) {
		return this.type = value;
	}
	,get_width: function() {
		return this.__width * this.scaleX;
	}
	,__class__: flash_text_TextField
});
var flash_text_TextFormatRange = function() { };
$hxClasses["flash.text.TextFormatRange"] = flash_text_TextFormatRange;
flash_text_TextFormatRange.__name__ = true;
flash_text_TextFormatRange.prototype = {
	__class__: flash_text_TextFormatRange
};
var flash_text_TextFieldAutoSize = $hxClasses["flash.text.TextFieldAutoSize"] = { __ename__ : true, __constructs__ : ["CENTER","LEFT","NONE","RIGHT"] };
flash_text_TextFieldAutoSize.CENTER = ["CENTER",0];
flash_text_TextFieldAutoSize.CENTER.toString = $estr;
flash_text_TextFieldAutoSize.CENTER.__enum__ = flash_text_TextFieldAutoSize;
flash_text_TextFieldAutoSize.LEFT = ["LEFT",1];
flash_text_TextFieldAutoSize.LEFT.toString = $estr;
flash_text_TextFieldAutoSize.LEFT.__enum__ = flash_text_TextFieldAutoSize;
flash_text_TextFieldAutoSize.NONE = ["NONE",2];
flash_text_TextFieldAutoSize.NONE.toString = $estr;
flash_text_TextFieldAutoSize.NONE.__enum__ = flash_text_TextFieldAutoSize;
flash_text_TextFieldAutoSize.RIGHT = ["RIGHT",3];
flash_text_TextFieldAutoSize.RIGHT.toString = $estr;
flash_text_TextFieldAutoSize.RIGHT.__enum__ = flash_text_TextFieldAutoSize;
var flash_text_TextFieldType = $hxClasses["flash.text.TextFieldType"] = { __ename__ : true, __constructs__ : ["DYNAMIC","INPUT"] };
flash_text_TextFieldType.DYNAMIC = ["DYNAMIC",0];
flash_text_TextFieldType.DYNAMIC.toString = $estr;
flash_text_TextFieldType.DYNAMIC.__enum__ = flash_text_TextFieldType;
flash_text_TextFieldType.INPUT = ["INPUT",1];
flash_text_TextFieldType.INPUT.toString = $estr;
flash_text_TextFieldType.INPUT.__enum__ = flash_text_TextFieldType;
var flash_text_TextFormat = function(font,size,color,bold,italic,underline,url,target,align,leftMargin,rightMargin,indent,leading) {
	this.font = font;
	this.size = size;
	this.color = color;
	this.bold = bold;
	this.italic = italic;
	this.underline = underline;
	this.url = url;
	this.target = target;
	this.align = align;
	this.leftMargin = leftMargin;
	this.rightMargin = rightMargin;
	this.indent = indent;
	this.leading = leading;
};
$hxClasses["flash.text.TextFormat"] = flash_text_TextFormat;
flash_text_TextFormat.__name__ = true;
flash_text_TextFormat.prototype = {
	clone: function() {
		var newFormat = new flash_text_TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		return newFormat;
	}
	,__merge: function(format) {
		if(format.font != null) this.font = format.font;
		if(format.size != null) this.size = format.size;
		if(format.color != null) this.color = format.color;
		if(format.bold != null) this.bold = format.bold;
		if(format.italic != null) this.italic = format.italic;
		if(format.underline != null) this.underline = format.underline;
		if(format.url != null) this.url = format.url;
		if(format.target != null) this.target = format.target;
		if(format.align != null) this.align = format.align;
		if(format.leftMargin != null) this.leftMargin = format.leftMargin;
		if(format.rightMargin != null) this.rightMargin = format.rightMargin;
		if(format.indent != null) this.indent = format.indent;
		if(format.leading != null) this.leading = format.leading;
		if(format.blockIndent != null) this.blockIndent = format.blockIndent;
		if(format.bullet != null) this.bullet = format.bullet;
		if(format.kerning != null) this.kerning = format.kerning;
		if(format.letterSpacing != null) this.letterSpacing = format.letterSpacing;
		if(format.tabStops != null) this.tabStops = format.tabStops;
	}
	,__class__: flash_text_TextFormat
};
var flash_text_TextFormatAlign = $hxClasses["flash.text.TextFormatAlign"] = { __ename__ : true, __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] };
flash_text_TextFormatAlign.LEFT = ["LEFT",0];
flash_text_TextFormatAlign.LEFT.toString = $estr;
flash_text_TextFormatAlign.LEFT.__enum__ = flash_text_TextFormatAlign;
flash_text_TextFormatAlign.RIGHT = ["RIGHT",1];
flash_text_TextFormatAlign.RIGHT.toString = $estr;
flash_text_TextFormatAlign.RIGHT.__enum__ = flash_text_TextFormatAlign;
flash_text_TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
flash_text_TextFormatAlign.JUSTIFY.toString = $estr;
flash_text_TextFormatAlign.JUSTIFY.__enum__ = flash_text_TextFormatAlign;
flash_text_TextFormatAlign.CENTER = ["CENTER",3];
flash_text_TextFormatAlign.CENTER.toString = $estr;
flash_text_TextFormatAlign.CENTER.__enum__ = flash_text_TextFormatAlign;
var flash_ui_Keyboard = function() { };
$hxClasses["flash.ui.Keyboard"] = flash_ui_Keyboard;
flash_ui_Keyboard.__name__ = true;
flash_ui_Keyboard.__convertMozillaCode = function(code) {
	switch(code) {
	case 8:
		return 8;
	case 9:
		return 9;
	case 13:
		return 13;
	case 14:
		return 13;
	case 16:
		return 16;
	case 17:
		return 17;
	case 20:
		return 18;
	case 27:
		return 27;
	case 32:
		return 32;
	case 33:
		return 33;
	case 34:
		return 34;
	case 35:
		return 35;
	case 36:
		return 36;
	case 37:
		return 37;
	case 39:
		return 39;
	case 38:
		return 38;
	case 40:
		return 40;
	case 45:
		return 45;
	case 46:
		return 46;
	case 144:
		return 144;
	default:
		return code;
	}
};
var flash_utils_ByteArray = function() {
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	this.___resizeBuffer(this.allocated);
};
$hxClasses["flash.utils.ByteArray"] = flash_utils_ByteArray;
flash_utils_ByteArray.__name__ = true;
flash_utils_ByteArray.__ofBuffer = function(buffer) {
	var bytes = new flash_utils_ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
};
flash_utils_ByteArray.prototype = {
	readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var data = this.data;
			var c = data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | data.getUint8(this.position++) & 127);
			} else {
				var c21 = data.getUint8(this.position++);
				var c3 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c21 & 127) << 12 | c3 << 6 & 127 | data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,___resizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,set_length: function(value) {
		if(this.allocated < value) this.___resizeBuffer(this.allocated = Std["int"](Math.max(value,this.allocated * 2))); else if(this.allocated > value) this.___resizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,__class__: flash_utils_ByteArray
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [IMap];
haxe_ds_StringMap.prototype = {
	set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,__class__: haxe_ds_StringMap
};
var haxe_io_Eof = function() { };
$hxClasses["haxe.io.Eof"] = haxe_io_Eof;
haxe_io_Eof.__name__ = true;
haxe_io_Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe_io_Eof
};
var haxe_io_Path = function(path) {
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		this.dir = HxOverrides.substr(path,0,c2);
		path = HxOverrides.substr(path,c2 + 1,null);
		this.backslash = true;
	} else if(c2 < c1) {
		this.dir = HxOverrides.substr(path,0,c1);
		path = HxOverrides.substr(path,c1 + 1,null);
	} else this.dir = null;
	var cp = path.lastIndexOf(".");
	if(cp != -1) {
		this.ext = HxOverrides.substr(path,cp + 1,null);
		this.file = HxOverrides.substr(path,0,cp);
	} else {
		this.ext = null;
		this.file = path;
	}
};
$hxClasses["haxe.io.Path"] = haxe_io_Path;
haxe_io_Path.__name__ = true;
haxe_io_Path.withoutExtension = function(path) {
	var s = new haxe_io_Path(path);
	s.ext = null;
	return s.toString();
};
haxe_io_Path.prototype = {
	toString: function() {
		return (this.dir == null?"":this.dir + (this.backslash?"\\":"/")) + this.file + (this.ext == null?"":"." + this.ext);
	}
	,__class__: haxe_io_Path
};
var js_Boot = function() { };
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js_Boot.__string_rec(o[i],s); else str += js_Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__cast = function(o,t) {
	if(js_Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
};
var openfl_AssetCache = function() {
	this.enabled = true;
	this.bitmapData = new haxe_ds_StringMap();
	this.font = new haxe_ds_StringMap();
	this.sound = new haxe_ds_StringMap();
};
$hxClasses["openfl.AssetCache"] = openfl_AssetCache;
openfl_AssetCache.__name__ = true;
openfl_AssetCache.prototype = {
	__class__: openfl_AssetCache
};
var openfl_Assets = function() { };
$hxClasses["openfl.Assets"] = openfl_Assets;
openfl_Assets.__name__ = true;
openfl_Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl_Assets.initialize();
	if(useCache && openfl_Assets.cache.enabled && openfl_Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl_Assets.cache.bitmapData.get(id);
		if(openfl_Assets.isValidBitmapData(bitmapData)) return bitmapData;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl_Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl_AssetType.IMAGE)) {
			if(library.isLocal(symbolName,openfl_AssetType.IMAGE)) {
				var bitmapData1 = library.getBitmapData(symbolName);
				if(useCache && openfl_Assets.cache.enabled) openfl_Assets.cache.bitmapData.set(id,bitmapData1);
				return bitmapData1;
			} else console.log("[openfl.Assets] BitmapData asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
};
openfl_Assets.getLibrary = function(name) {
	if(name == null || name == "") name = "default";
	return openfl_Assets.libraries.get(name);
};
openfl_Assets.initialize = function() {
	if(!openfl_Assets.initialized) {
		openfl_Assets.registerLibrary("default",new DefaultAssetLibrary());
		openfl_Assets.initialized = true;
	}
};
openfl_Assets.isValidBitmapData = function(bitmapData) {
	return bitmapData.__sourceImage != null || bitmapData.__sourceCanvas != null;
	return true;
};
openfl_Assets.registerLibrary = function(name,library) {
	if(openfl_Assets.libraries.exists(name)) openfl_Assets.unloadLibrary(name);
	openfl_Assets.libraries.set(name,library);
};
openfl_Assets.unloadLibrary = function(name) {
	openfl_Assets.initialize();
	var keys = openfl_Assets.cache.bitmapData.keys();
	while( keys.hasNext() ) {
		var key = keys.next();
		var libraryName = key.substring(0,key.indexOf(":"));
		var symbolName;
		var pos = key.indexOf(":") + 1;
		symbolName = HxOverrides.substr(key,pos,null);
		if(libraryName == name) openfl_Assets.cache.bitmapData.remove(key);
	}
	openfl_Assets.libraries.remove(name);
};
var openfl_AssetType = $hxClasses["openfl.AssetType"] = { __ename__ : true, __constructs__ : ["BINARY","FONT","IMAGE","MOVIE_CLIP","MUSIC","SOUND","TEMPLATE","TEXT"] };
openfl_AssetType.BINARY = ["BINARY",0];
openfl_AssetType.BINARY.toString = $estr;
openfl_AssetType.BINARY.__enum__ = openfl_AssetType;
openfl_AssetType.FONT = ["FONT",1];
openfl_AssetType.FONT.toString = $estr;
openfl_AssetType.FONT.__enum__ = openfl_AssetType;
openfl_AssetType.IMAGE = ["IMAGE",2];
openfl_AssetType.IMAGE.toString = $estr;
openfl_AssetType.IMAGE.__enum__ = openfl_AssetType;
openfl_AssetType.MOVIE_CLIP = ["MOVIE_CLIP",3];
openfl_AssetType.MOVIE_CLIP.toString = $estr;
openfl_AssetType.MOVIE_CLIP.__enum__ = openfl_AssetType;
openfl_AssetType.MUSIC = ["MUSIC",4];
openfl_AssetType.MUSIC.toString = $estr;
openfl_AssetType.MUSIC.__enum__ = openfl_AssetType;
openfl_AssetType.SOUND = ["SOUND",5];
openfl_AssetType.SOUND.toString = $estr;
openfl_AssetType.SOUND.__enum__ = openfl_AssetType;
openfl_AssetType.TEMPLATE = ["TEMPLATE",6];
openfl_AssetType.TEMPLATE.toString = $estr;
openfl_AssetType.TEMPLATE.__enum__ = openfl_AssetType;
openfl_AssetType.TEXT = ["TEXT",7];
openfl_AssetType.TEXT.toString = $estr;
openfl_AssetType.TEXT.__enum__ = openfl_AssetType;
var openfl_display_Tilesheet = function() { };
$hxClasses["openfl.display.Tilesheet"] = openfl_display_Tilesheet;
openfl_display_Tilesheet.__name__ = true;
openfl_display_Tilesheet.prototype = {
	__class__: openfl_display_Tilesheet
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = true;
$hxClasses.Array = Array;
Array.__name__ = true;
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
ApplicationMain.images = new haxe_ds_StringMap();
ApplicationMain.urlLoaders = new haxe_ds_StringMap();
ApplicationMain.assetsLoaded = 0;
ApplicationMain.total = 0;
DefaultAssetLibrary.path = new haxe_ds_StringMap();
DefaultAssetLibrary.type = new haxe_ds_StringMap();
flash_events_Event.ADDED_TO_STAGE = "addedToStage";
flash_events_Event.COMPLETE = "complete";
flash_events_Event.ENTER_FRAME = "enterFrame";
flash_events_Event.OPEN = "open";
flash_events_Event.RESIZE = "resize";
flash_events_HTTPStatusEvent.HTTP_STATUS = "httpStatus";
flash_events_IOErrorEvent.IO_ERROR = "ioError";
flash_events_KeyboardEvent.KEY_DOWN = "keyDown";
flash_events_KeyboardEvent.KEY_UP = "keyUp";
flash_events_MouseEvent.CLICK = "click";
flash_events_MouseEvent.DOUBLE_CLICK = "doubleClick";
flash_events_MouseEvent.MOUSE_DOWN = "mouseDown";
flash_events_MouseEvent.MOUSE_MOVE = "mouseMove";
flash_events_MouseEvent.MOUSE_UP = "mouseUp";
flash_events_MouseEvent.MOUSE_WHEEL = "mouseWheel";
flash_events_ProgressEvent.PROGRESS = "progress";
flash_events_SecurityErrorEvent.SECURITY_ERROR = "securityError";
flash_net_URLRequestMethod.GET = "GET";
flash_system_ApplicationDomain.currentDomain = new flash_system_ApplicationDomain(null);
openfl_Assets.cache = new openfl_AssetCache();
openfl_Assets.libraries = new haxe_ds_StringMap();
openfl_Assets.initialized = false;
ApplicationMain.main();
})();
