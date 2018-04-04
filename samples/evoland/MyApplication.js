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
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.preloader = null;
ApplicationMain.main = function() {
	var element = window.document.getElementById("openfl-embed");
	flash_Lib.create(600,408,element,0);
	ApplicationMain.preloader = new NMEPreloader();
	flash_Lib.current.addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var sounds = [];
	var id;
	var image = new Image();
	id = "tiles_alpha.png";
	ApplicationMain.images.set(id,image);
	image.onload = ApplicationMain.image_onLoad;
	image.src = id;
	ApplicationMain.total++;
	var image1 = new Image();
	id = "tiles.png";
	ApplicationMain.images.set(id,image1);
	image1.onload = ApplicationMain.image_onLoad;
	image1.src = id;
	ApplicationMain.total++;
	var image2 = new Image();
	id = "sprites.png";
	ApplicationMain.images.set(id,image2);
	image2.onload = ApplicationMain.image_onLoad;
	image2.src = id;
	ApplicationMain.total++;
	var image3 = new Image();
	id = "world.png";
	ApplicationMain.images.set(id,image3);
	image3.onload = ApplicationMain.image_onLoad;
	image3.src = id;
	ApplicationMain.total++;
	var image4 = new Image();
	id = "title.png";
	ApplicationMain.images.set(id,image4);
	image4.onload = ApplicationMain.image_onLoad;
	image4.src = id;
	ApplicationMain.total++;
	var image5 = new Image();
	id = "screens/screen5.png";
	ApplicationMain.images.set(id,image5);
	image5.onload = ApplicationMain.image_onLoad;
	image5.src = id;
	ApplicationMain.total++;
	var image6 = new Image();
	id = "screens/screen2.png";
	ApplicationMain.images.set(id,image6);
	image6.onload = ApplicationMain.image_onLoad;
	image6.src = id;
	ApplicationMain.total++;
	var image7 = new Image();
	id = "screens/screen3.png";
	ApplicationMain.images.set(id,image7);
	image7.onload = ApplicationMain.image_onLoad;
	image7.src = id;
	ApplicationMain.total++;
	var image8 = new Image();
	id = "screens/sunvox.png";
	ApplicationMain.images.set(id,image8);
	image8.onload = ApplicationMain.image_onLoad;
	image8.src = id;
	ApplicationMain.total++;
	var image9 = new Image();
	id = "screens/final3.png";
	ApplicationMain.images.set(id,image9);
	image9.onload = ApplicationMain.image_onLoad;
	image9.src = id;
	ApplicationMain.total++;
	var image10 = new Image();
	id = "screens/screen4.png";
	ApplicationMain.images.set(id,image10);
	image10.onload = ApplicationMain.image_onLoad;
	image10.src = id;
	ApplicationMain.total++;
	var image11 = new Image();
	id = "screens/final2.png";
	ApplicationMain.images.set(id,image11);
	image11.onload = ApplicationMain.image_onLoad;
	image11.src = id;
	ApplicationMain.total++;
	var image12 = new Image();
	id = "screens/final1.png";
	ApplicationMain.images.set(id,image12);
	image12.onload = ApplicationMain.image_onLoad;
	image12.src = id;
	ApplicationMain.total++;
	var image13 = new Image();
	id = "screens/screen6.png";
	ApplicationMain.images.set(id,image13);
	image13.onload = ApplicationMain.image_onLoad;
	image13.src = id;
	ApplicationMain.total++;
	var image14 = new Image();
	id = "screens/screen1.png";
	ApplicationMain.images.set(id,image14);
	image14.onload = ApplicationMain.image_onLoad;
	image14.src = id;
	ApplicationMain.total++;
	var image15 = new Image();
	id = "sprites_alpha.png";
	ApplicationMain.images.set(id,image15);
	image15.onload = ApplicationMain.image_onLoad;
	image15.src = id;
	ApplicationMain.total++;
	var image16 = new Image();
	id = "title3.png";
	ApplicationMain.images.set(id,image16);
	image16.onload = ApplicationMain.image_onLoad;
	image16.src = id;
	ApplicationMain.total++;
	var image17 = new Image();
	id = "dungeon.png";
	ApplicationMain.images.set(id,image17);
	image17.onload = ApplicationMain.image_onLoad;
	image17.src = id;
	ApplicationMain.total++;
	var image18 = new Image();
	id = "p0Banner.png";
	ApplicationMain.images.set(id,image18);
	image18.onload = ApplicationMain.image_onLoad;
	image18.src = id;
	ApplicationMain.total++;
	var image19 = new Image();
	id = "pubBanner.png";
	ApplicationMain.images.set(id,image19);
	image19.onload = ApplicationMain.image_onLoad;
	image19.src = id;
	ApplicationMain.total++;
	var image20 = new Image();
	id = "title2.png";
	ApplicationMain.images.set(id,image20);
	image20.onload = ApplicationMain.image_onLoad;
	image20.src = id;
	ApplicationMain.total++;
	var sound = haxe_io_Path.withoutExtension("sfx/gameover.wav");
	if(!HxOverrides.remove(sounds,sound)) ApplicationMain.total++;
	sounds.push(sound);
	var sound1 = haxe_io_Path.withoutExtension("sfx/walk.wav");
	if(!HxOverrides.remove(sounds,sound1)) ApplicationMain.total++;
	sounds.push(sound1);
	var sound2 = haxe_io_Path.withoutExtension("sfx/gameover.ogg");
	if(!HxOverrides.remove(sounds,sound2)) ApplicationMain.total++;
	sounds.push(sound2);
	var sound3 = haxe_io_Path.withoutExtension("sfx/firehit.wav");
	if(!HxOverrides.remove(sounds,sound3)) ApplicationMain.total++;
	sounds.push(sound3);
	var sound4 = haxe_io_Path.withoutExtension("sfx/hit.wav");
	if(!HxOverrides.remove(sounds,sound4)) ApplicationMain.total++;
	sounds.push(sound4);
	var sound5 = haxe_io_Path.withoutExtension("sfx/pii.wav");
	if(!HxOverrides.remove(sounds,sound5)) ApplicationMain.total++;
	sounds.push(sound5);
	var sound6 = haxe_io_Path.withoutExtension("sfx/kill.ogg");
	if(!HxOverrides.remove(sounds,sound6)) ApplicationMain.total++;
	sounds.push(sound6);
	var sound7 = haxe_io_Path.withoutExtension("sfx/npc.ogg");
	if(!HxOverrides.remove(sounds,sound7)) ApplicationMain.total++;
	sounds.push(sound7);
	var sound8 = haxe_io_Path.withoutExtension("sfx/notsure.wav");
	if(!HxOverrides.remove(sounds,sound8)) ApplicationMain.total++;
	sounds.push(sound8);
	var sound9 = haxe_io_Path.withoutExtension("sfx/fireball.ogg");
	if(!HxOverrides.remove(sounds,sound9)) ApplicationMain.total++;
	sounds.push(sound9);
	var sound10 = haxe_io_Path.withoutExtension("sfx/pii.ogg");
	if(!HxOverrides.remove(sounds,sound10)) ApplicationMain.total++;
	sounds.push(sound10);
	var sound11 = haxe_io_Path.withoutExtension("sfx/fireball.wav");
	if(!HxOverrides.remove(sounds,sound11)) ApplicationMain.total++;
	sounds.push(sound11);
	var sound12 = haxe_io_Path.withoutExtension("sfx/puzzle.ogg");
	if(!HxOverrides.remove(sounds,sound12)) ApplicationMain.total++;
	sounds.push(sound12);
	var sound13 = haxe_io_Path.withoutExtension("sfx/sword.wav");
	if(!HxOverrides.remove(sounds,sound13)) ApplicationMain.total++;
	sounds.push(sound13);
	var sound14 = haxe_io_Path.withoutExtension("sfx/princess.wav");
	if(!HxOverrides.remove(sounds,sound14)) ApplicationMain.total++;
	sounds.push(sound14);
	var sound15 = haxe_io_Path.withoutExtension("sfx/npc.wav");
	if(!HxOverrides.remove(sounds,sound15)) ApplicationMain.total++;
	sounds.push(sound15);
	var sound16 = haxe_io_Path.withoutExtension("sfx/levelup.ogg");
	if(!HxOverrides.remove(sounds,sound16)) ApplicationMain.total++;
	sounds.push(sound16);
	var sound17 = haxe_io_Path.withoutExtension("sfx/hit.ogg");
	if(!HxOverrides.remove(sounds,sound17)) ApplicationMain.total++;
	sounds.push(sound17);
	var sound18 = haxe_io_Path.withoutExtension("sfx/puzzle.wav");
	if(!HxOverrides.remove(sounds,sound18)) ApplicationMain.total++;
	sounds.push(sound18);
	var sound19 = haxe_io_Path.withoutExtension("sfx/sword.ogg");
	if(!HxOverrides.remove(sounds,sound19)) ApplicationMain.total++;
	sounds.push(sound19);
	var sound20 = haxe_io_Path.withoutExtension("sfx/save.wav");
	if(!HxOverrides.remove(sounds,sound20)) ApplicationMain.total++;
	sounds.push(sound20);
	var sound21 = haxe_io_Path.withoutExtension("sfx/princess.ogg");
	if(!HxOverrides.remove(sounds,sound21)) ApplicationMain.total++;
	sounds.push(sound21);
	var sound22 = haxe_io_Path.withoutExtension("sfx/save.ogg");
	if(!HxOverrides.remove(sounds,sound22)) ApplicationMain.total++;
	sounds.push(sound22);
	var sound23 = haxe_io_Path.withoutExtension("sfx/world_remove.wav");
	if(!HxOverrides.remove(sounds,sound23)) ApplicationMain.total++;
	sounds.push(sound23);
	var sound24 = haxe_io_Path.withoutExtension("sfx/levelup.wav");
	if(!HxOverrides.remove(sounds,sound24)) ApplicationMain.total++;
	sounds.push(sound24);
	var sound25 = haxe_io_Path.withoutExtension("sfx/kill.wav");
	if(!HxOverrides.remove(sounds,sound25)) ApplicationMain.total++;
	sounds.push(sound25);
	var sound26 = haxe_io_Path.withoutExtension("sfx/notsure.ogg");
	if(!HxOverrides.remove(sounds,sound26)) ApplicationMain.total++;
	sounds.push(sound26);
	var sound27 = haxe_io_Path.withoutExtension("sfx/walk.ogg");
	if(!HxOverrides.remove(sounds,sound27)) ApplicationMain.total++;
	sounds.push(sound27);
	var sound28 = haxe_io_Path.withoutExtension("sfx/firehit.ogg");
	if(!HxOverrides.remove(sounds,sound28)) ApplicationMain.total++;
	sounds.push(sound28);
	var sound29 = haxe_io_Path.withoutExtension("sfx/world_remove.ogg");
	if(!HxOverrides.remove(sounds,sound29)) ApplicationMain.total++;
	sounds.push(sound29);
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
			var sound30 = new flash_media_Sound();
			sound30.addEventListener(flash_events_Event.COMPLETE,ApplicationMain.sound_onComplete);
			sound30.addEventListener(flash_events_IOErrorEvent.IO_ERROR,ApplicationMain.sound_onIOError);
			sound30.load(new flash_net_URLRequest(soundName + ".ogg"));
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
	var _g1 = Type.getClassFields(Game);
	while(_g < _g1.length) {
		var methodName = _g1[_g];
		++_g;
		if(methodName == "main") {
			hasMain = true;
			break;
		}
	}
	if(hasMain) Reflect.callMethod(Game,Reflect.field(Game,"main"),[]); else {
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
var Game = function(root) {
	this.root = root;
	this.mouseIsDownTime = 0;
	this.saveObj = flash_net_SharedObject.getLocal("ld24save");
	try {
		this.savedData = this.saveObj.data.save;
		Game.props = haxe_Unserializer.run(this.savedData);
		if(Game.props.quests == null) Game.props.quests = [];
		if(Game.props.rem == null) Game.props.rem = [];
	} catch( e ) {
		this.savedData = null;
	}
};
$hxClasses["Game"] = Game;
Game.__name__ = ["Game"];
Game.inst = null;
Game.main = function() {
	Game.inst = new Game(flash_Lib.current);
	Game.inst.root.addEventListener(flash_events_Event.ENTER_FRAME,function(_) {
		Game.inst.update();
	});
	var url = Game.inst.root.loaderInfo.url;
	Key.init();
	Entity.init();
	var title = new Title(Game.inst);
};
Game.prototype = {
	hasSave: function() {
		return this.savedData != null;
	}
	,init: function() {
		var purl = this.root.loaderInfo.url.split("/");
		purl.pop();
		var murl;
		murl = (purl.length > 0?purl.join("/") + "/":"") + "music1.mp3";
		this.music = openfl_Assets.getMusic("music1.mp3");
		this.monsters = [];
		this.entities = [];
		this.view = new flash_display_Sprite();
		this.barsDelta = 0.;
		this.output = new flash_display_BitmapData(flash_Lib.current.stage.stageWidth,flash_Lib.current.stage.stageHeight);
		this.outputBMP = new flash_display_Bitmap(this.output);
		this.root.addChild(this.outputBMP);
		this.initPixelFilter(Game.props.zoom);
		this.root.addChild(this.pixelFilterBMP);
		this.world = new World(openfl_Assets.getBitmapData("world.png"));
		this.realWorld = this.world;
		var _g = 0;
		var _g1 = Game.props.rem;
		while(_g < _g1.length) {
			var r = _g1[_g];
			++_g;
			this.world.removed[r % 98][r / 98 | 0] = true;
		}
		this.world.draw();
		this.scroll = { x : (Game.props.pos.x + 0.5) * 16, y : (Game.props.pos.y + 0.5) * 16, mc : new flash_display_Sprite(), curZ : Game.props.zoom, tz : 1.};
		this.scroll.mc.x = -1000;
		this.worldBMP = new flash_display_Bitmap(this.world.bmp);
		this.scroll.mc.addChild(this.worldBMP);
		this.dm = new DepthManager(this.scroll.mc);
		this.view.addChild(this.scroll.mc);
		var hchests = new haxe_ds_IntMap();
		var _g2 = 0;
		var _g11 = Game.props.chests;
		while(_g2 < _g11.length) {
			var c = _g11[_g2];
			++_g2;
			hchests.set(c,true);
		}
		var _g3 = 0;
		var _g12 = this.world.chests;
		while(_g3 < _g12.length) {
			var c1 = _g12[_g3];
			++_g3;
			if(!hchests.exists(c1.x + c1.y * 98)) {
				c1.e = new Entity(EKind.Chest,c1.x,c1.y);
				c1.e.update(0);
			}
		}
		this.hero = new Hero(Game.props.pos.x,Game.props.pos.y);
		if(Game.props.dungeon) this.initDungeon(true);
		this.update();
		if(Game.props.chests.length == 0) this.getChest(ChestKind.CRightCtrl,0,0);
		if(Game.props.music) this.music.play(2,99999);
		this.updateUI();
		this.updateWeb();
	}
	,updateUI: function() {
		if(this.uiBar == null) {
			this.uiBar = new flash_display_Sprite();
			this.uiBar.x = 5;
			this.uiBar.y = 5;
			this.root.addChild(this.uiBar);
			this.uiBar.scaleX = this.uiBar.scaleY = 2;
		}
		var border = 15790320;
		var bg = 6316128;
		var g = this.uiBar.get_graphics();
		g.clear();
		if(Game.props.life > 0) {
			g.beginFill(border);
			g.drawRect(0,0,104,8);
			g.beginFill(bg);
			g.drawRect(2,2,100,4);
			g.beginFill(12582912);
			g.drawRect(2,2,Game.props.life * 2,4);
		}
		if(Game.props.xp >= 0) {
			g.beginFill(border);
			g.drawRect(0,12,104,8);
			g.beginFill(bg);
			g.drawRect(2,14,100,4);
			g.beginFill(49152);
			g.drawRect(2,14,Game.props.xp,4);
		}
	}
	,initDungeon: function(v) {
		Game.props.dungeon = v;
		var _g = 0;
		var _g1 = this.world.chests;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c.e != null) {
				c.e.remove();
				c.e = null;
			}
		}
		if(v) {
			this.world = new World(openfl_Assets.getBitmapData("dungeon.png"));
			var _g2 = 0;
			var _g11 = Game.props.rem;
			while(_g2 < _g11.length) {
				var r = _g11[_g2];
				++_g2;
				var y = r / 98 | 0;
				if(y >= 98) this.world.removed[r % 98][y - 98] = true;
			}
		} else this.world = this.realWorld;
		var hchests = new haxe_ds_IntMap();
		var _g3 = 0;
		var _g12 = Game.props.chests;
		while(_g3 < _g12.length) {
			var c1 = _g12[_g3];
			++_g3;
			hchests.set(c1,true);
		}
		var _g4 = 0;
		var _g13 = this.world.chests;
		while(_g4 < _g13.length) {
			var c2 = _g13[_g4];
			++_g4;
			if(!hchests.exists(c2.x + (c2.y + (v?98:0)) * 98)) {
				c2.e = new Entity(EKind.Chest,c2.x,c2.y);
				c2.e.update(0);
			}
		}
		var _g5 = 0;
		var _g14 = this.entities;
		while(_g5 < _g14.length) {
			var e = _g14[_g5];
			++_g5;
			e.remove();
		}
		var _g6 = 0;
		var _g15 = this.monsters;
		while(_g6 < _g15.length) {
			var m = _g15[_g6];
			++_g6;
			m.remove();
		}
		this.entities = [];
		this.monsters = [];
		Game.has.monsters = false;
		Game.has.npc = false;
		Game.has.savePoints = false;
		this.world.draw();
		this.worldBMP.bitmapData = this.world.bmp;
		this.scroll.x = this.hero.ix;
		this.scroll.y = this.hero.iy;
	}
	,save: function() {
		Game.props.pos.x = this.hero.ix;
		Game.props.pos.y = this.hero.iy;
		var d = haxe_Serializer.run(Game.props);
		if(this.savedData == d) return;
		Sounds.play("save");
		this.savedData = d;
		this.saveObj.setProperty("save",this.savedData);
		this.saveObj.flush();
		this.popup("Game <font color='#00ff00'>Saved</font>","You are safe !");
	}
	,js: function(s) {
		if(!flash_external_ExternalInterface.available) return;
		flash_external_ExternalInterface.call("eval",s);
	}
	,popup: function(text,subText,dialog) {
		if(dialog == null) dialog = false;
		if(subText == null) subText = "";
		var mc = new Popup();
		mc.dialog = dialog;
		mc.addChild(this.makePanel(text,subText));
		mc.y = this.output.height;
		mc.targetY = this.output.height - mc.get_height();
		this.root.addChild(mc);
	}
	,makePanel: function(text,subText) {
		var mc = new flash_display_Sprite();
		mc.get_graphics().beginFill(0);
		mc.get_graphics().drawRect(0,0,this.output.width,40);
		var tf = this.makeField(text);
		tf.x = tf.y = 3;
		mc.addChild(tf);
		var tf1 = this.makeField(subText,14);
		tf1.x = 3;
		tf1.y = 22;
		mc.addChild(tf1);
		return mc;
	}
	,makeField: function(text,size) {
		if(size == null) size = 20;
		var tf = new flash_text_TextField();
		var fmt = tf.get_defaultTextFormat();
		fmt.font = "webfont-04b03";
		fmt.size = size;
		fmt.color = 16777215;
		tf.set_defaultTextFormat(fmt);
		tf.embedFonts = true;
		tf.sharpness = 400;
		tf.gridFitType = flash_text_GridFitType.PIXEL;
		tf.antiAliasType = "advanced";
		tf.selectable = tf.mouseEnabled = false;
		tf.set_autoSize(flash_text_TextFieldAutoSize.LEFT);
		tf.set_width(0);
		tf.set_height(20);
		tf.set_htmlText(text);
		return tf;
	}
	,initPixelFilter: function(k) {
		if(this.pixelFilter != null) this.pixelFilter.fillRect(this.pixelFilter.rect,0); else this.pixelFilter = new flash_display_BitmapData(this.output.width,this.output.height,true,0);
		this.pixelFilter.lock();
		var _g1 = 0;
		var _g = this.output.width / k | 0;
		while(_g1 < _g) {
			var x = _g1++;
			var _g3 = 0;
			var _g2 = this.output.height / k | 0;
			while(_g3 < _g2) {
				var y = _g3++;
				var x1 = x * k;
				var y1 = y * k;
				this.pixelFilter.setPixel32(x1,y1,1073741824);
				var _g4 = 1;
				while(_g4 < k) {
					var i = _g4++;
					this.pixelFilter.setPixel32(x1 + i,y1,536870912);
					this.pixelFilter.setPixel32(x1,y1 + i,536870912);
				}
			}
		}
		this.pixelFilter.unlock();
		this.pixelFilterBMP = new flash_display_Bitmap(this.pixelFilter);
	}
	,doShake: function() {
		this.shake = { time : 10, power : 3};
	}
	,getChest: function(k,x,y) {
		this.doShake();
		var sound = "chest";
		Game.props.chests.push((y + (Game.props.dungeon?98:0)) * 98 + x);
		var extra = "";
		var index = null;
		switch(k[1]) {
		case 18:case 19:
			break;
		case 0:
			Game.props.left = true;
			break;
		case 1:
			Game.props.bars = false;
			break;
		case 2:
			index = Game.props.scroll;
			Game.props.scroll++;
			break;
		case 3:
			index = Game.props.color;
			Game.props.color++;
			break;
		case 4:
			index = Game.props.monsters;
			Game.props.monsters++;
			break;
		case 5:
			index = Game.props.weapons;
			Game.props.weapons++;
			break;
		case 6:
			this.shake = null;
			index = 4 - Game.props.zoom;
			Game.props.zoom--;
			break;
		case 7:
			Game.props.canSave = true;
			break;
		case 8:
			console.log(Game.props.web);
			index = Game.props.web;
			Game.props.web++;
			console.log(Game.props.web);
			this.updateWeb();
			break;
		case 9:
			index = Game.props.npc;
			Game.props.npc++;
			break;
		case 10:
			Game.props.gold++;
			break;
		case 11:
			Game.props.keys++;
			break;
		case 12:
			Game.props.freeMove = true;
			break;
		case 20:
			break;
		case 21:
			this.hero.teleport(26,57);
			this.initDungeon(true);
			break;
		case 22:
			this.world.remove(26,23);
			break;
		case 23:
			Game.props.puzzle = true;
			this.world.remove(42,45);
			break;
		case 13:
			Game.props.life = 50;
			Game.props.xp = 0;
			this.updateUI();
			break;
		case 24:
			sound = "levelup";
			Game.props.xp = 0;
			Game.props.level++;
			if(Game.props.level == 10) {
				k = ChestKind.CFarming;
				Game.props.xp = -1;
				var _g = 0;
				var _g1 = this.monsters.slice();
				while(_g < _g1.length) {
					var m = _g1[_g];
					++_g;
					if(m.generated) m.kill();
				}
				this.world.remove(55,14);
			} else extra = "<font color='#00ff00'>" + Game.props.level + "</font> / 10";
			this.updateUI();
			break;
		case 25:
			break;
		case 14:
			break;
		case 26:
			this.win();
			break;
		case 15:
			Game.props.porn = true;
			this.updateWeb();
			break;
		case 16:
			Game.props.sounds = true;
			break;
		case 17:
			Game.props.music = true;
			this.music.play(0,99999);
			break;
		}
		Sounds.play(sound);
		var t = Chests.t[k[1]];
		if(t == null) throw "Missing text for " + Std.string(k) + " (" + k[1] + ")";
		if(index != null) t = t[index];
		if(t == null) t = { name : "???", sub : ""};
		this.popup("You got <font color='#ff0000'>" + Std.string(t.name) + "</font>",Std.string(t.sub) + extra);
	}
	,win: function() {
		this.hero.lock = true;
		this.circleSize = 300.;
		this.mask = new flash_display_Sprite();
		this.mask.x = this.output.width / 2;
		this.mask.y = this.output.height / 2;
		this.root.addChild(this.mask);
		this.outputBMP.set_mask(this.mask);
		this.update();
	}
	,gameOver: function() {
		if(this.hero.lock) return;
		this.hero.lock = true;
		this.hero.target = null;
		this.hero.moving = false;
		this.hero.explode();
		this.hero.remove();
		Sounds.play("gameOver");
		var mc = this.makePanel("Game <font color='#ff0000'>Over</font> !","Press Esc to return to title screen");
		mc.y = Std["int"]((this.output.height - mc.get_height()) * 0.5);
		this.root.addChild(mc);
	}
	,updateWeb: function() {
		var parts = ["banner","social"];
		var _g1 = 0;
		var _g = parts.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.js("show('" + parts[i] + "'," + Std.string(i < Game.props.web) + ")");
		}
		if(Game.props.porn) this.js("show('p0banner',true)");
	}
	,update: function() {
		Timer.update();
		if(this.hero == null) return;
		var _g = Game.props.scroll;
		switch(_g) {
		case 0:
			break;
		case 1:
			this.scroll.x = (this.hero.x | 0) * 16;
			this.scroll.y = (this.hero.y | 0) * 16;
			break;
		case 2:
			this.scroll.x = this.hero.x * 16 | 0;
			this.scroll.y = this.hero.y * 16 | 0;
			break;
		default:
		}
		var dt = Timer.tmod;
		if(this.circleSize > 200) {
			this.circleSize -= dt;
			this.mask.get_graphics().clear();
			this.mask.get_graphics().beginFill(0,0.5);
			this.mask.get_graphics().drawCircle(0,0,this.circleSize);
			if(this.circleSize <= 200) {
				var letters = "Congratulations !".split("");
				var colors = ["FF0000","00FF00","FFFFFF","FFFF00","FF00FF","00FFFF"];
				var c = -1;
				var _g1 = 0;
				var _g2 = letters.length;
				while(_g1 < _g2) {
					var i = _g1++;
					var col;
					do col = Std.random(colors.length); while(col == c);
					c = col;
					letters[i] = "<font color='#" + colors[c] + "'>" + letters[i] + "</font>";
				}
				var p = this.makePanel(letters.join(""),"You completed the game !");
				p.y = 0;
				this.root.addChild(p);
				var dun = new World(openfl_Assets.getBitmapData("dungeon.png"));
				var gold = 0;
				var total = 0;
				var _g3 = 0;
				var _g11 = this.world.chests.concat(dun.chests);
				while(_g3 < _g11.length) {
					var c1 = _g11[_g3];
					++_g3;
					var _g21 = c1.id;
					switch(_g21[1]) {
					case 10:
						gold++;
						break;
					default:
					}
					total++;
				}
				var p1 = this.makePanel("You found " + (Game.props.gold + 1) + "/" + gold + " Gold Coins","And opened " + (Game.props.nchests + "/" + total) + " chests");
				p1.y = 370;
				this.root.addChild(p1);
			}
		}
		var tz = this.scroll.tz * Game.props.zoom;
		var zooming = true;
		this.scroll.curZ = this.scroll.curZ * 0.8 + tz * 0.2;
		if(Math.abs(this.scroll.curZ - tz) < 0.1) {
			zooming = false;
			this.scroll.curZ = tz;
		}
		var z = this.scroll.curZ;
		var tx = this.scroll.x - flash_Lib.current.stage.stageWidth / z * 0.5;
		var ty = this.scroll.y - flash_Lib.current.stage.stageHeight / z * 0.5;
		var sx = tx * z | 0;
		var sy = ty * z | 0;
		if(!zooming) {
			sx -= sx % Game.props.zoom;
			sy -= sy % Game.props.zoom;
		}
		this.scroll.mc.x = -sx;
		this.scroll.mc.y = -sy;
		this.scroll.mc.scaleX = this.scroll.mc.scaleY = z;
		this.hero.update(dt);
		Popup.updateAll(dt);
		Part.updateAll(dt);
		var tap = false;
		this.dir = null;
		if(this.mouseIsDown) {
			var dX = this.root.get_mouseX() - ((this.hero.x + 0.5) * 16 * z - sx);
			var dY = this.root.get_mouseY() - ((this.hero.y + 0.5) * 16 * z - sy);
			var threshold = 30;
			if(Math.abs(dX) > Math.abs(dY)) {
				if(Math.abs(dX) > threshold) {
					if(dX < 0) this.dir = Direction.LEFT; else this.dir = Direction.RIGHT;
				}
			} else if(Math.abs(dY) > threshold) {
				if(dY < 0) this.dir = Direction.UP; else this.dir = Direction.DOWN;
			}
		} else tap = flash_Lib.getTimer() - this.mouseIsDownTime < 180;
		if(this.hero.target == null && !this.hero.lock) {
			var _g4 = 0;
			var _g12 = this.world.chests;
			while(_g4 < _g12.length) {
				var c2 = _g12[_g4];
				++_g4;
				if(c2.e != null && c2.x == this.hero.ix && c2.y == this.hero.iy) {
					c2.e.remove();
					c2.e = null;
					Game.props.nchests++;
					this.getChest(c2.id,c2.x,c2.y);
				}
			}
			this.hero.moving = false;
			if((Key.isDown(38) || Key.isDown(90) || Key.isDown(87) || this.dir == Direction.UP) && !Game.props.bars) this.hero.move(0,-1,dt);
			if(this.hero.target == null && (Key.isDown(40) || Key.isDown(83) || this.dir == Direction.DOWN) && !Game.props.bars) this.hero.move(0,1,dt);
			if(this.hero.target == null && (Key.isDown(37) || Key.isDown(81) || Key.isDown(65) || this.dir == Direction.LEFT) && Game.props.left) this.hero.move(-1,0,dt);
			if(this.hero.target == null && Key.isDown(39) || Key.isDown(68) || this.dir == Direction.RIGHT) this.hero.move(1,0,dt);
		}
		if(this.hero.sword == null && !this.hero.lock) {
			if((Key.isDown(32) || Key.isDown(13) || Key.isDown(69) || tap) && Game.props.weapons > 0) this.hero.attack();
		}
		if(Key.isToggled(27)) {
			if(!this.hero.lock) this.gameOver(); else this.js("document.location.reload()");
		}
		if(Key.isToggled(70)) this.disableFilter = !this.disableFilter;
		if(Key.isToggled(83) && Key.isDown(17)) this.save();
		if(Game.props.monsters > 0) {
			if(!Game.has.monsters) {
				Game.has.monsters = true;
				var _g5 = 0;
				var _g13 = this.world.monsters;
				while(_g5 < _g13.length) {
					var m = _g13[_g5];
					++_g5;
					this.monsters.push(new Monster(m.id,m.x,m.y));
				}
				this.generators = [];
				var _g6 = 0;
				var _g14 = this.world.getPos(Block.MonsterGenerator);
				while(_g6 < _g14.length) {
					var w = _g14[_g6];
					++_g6;
					this.generators.push({ x : w.x, y : w.y, time : 0.});
				}
			}
			var _g7 = 0;
			var _g15 = this.monsters;
			while(_g7 < _g15.length) {
				var m1 = _g15[_g7];
				++_g7;
				m1.update(dt);
				var dx = m1.x - this.hero.x;
				var dy = m1.y - this.hero.y;
				var d = dx * dx + dy * dy;
				if(d < 0.64 && m1.deathHit() && this.hero.hitRecover <= 0) {
					Game.props.life--;
					this.updateUI();
					if(Game.props.life <= 0) this.gameOver(); else {
						this.hero.hitRecover = 30;
						Sounds.play("hit");
					}
				}
			}
		}
		if(Game.props.canSave && !Game.has.savePoints) {
			Game.has.savePoints = true;
			var _g8 = 0;
			var _g16 = this.world.getPos(Block.SavePoint);
			while(_g8 < _g16.length) {
				var p2 = _g16[_g8];
				++_g8;
				var e = new Entity(EKind.SavePoint,p2.x,p2.y);
				e.mc.alpha = 0.3;
				e.y += 0.1875;
				this.entities.push(e);
			}
		}
		if(Game.props.npc > 0 && !Game.has.npc) {
			Game.has.npc = true;
			var _g9 = 0;
			var _g17 = this.world.npcs;
			while(_g9 < _g17.length) {
				var n = _g17[_g9];
				++_g9;
				var e1 = new Entity(EKind.NPC,n.x,n.y);
				n.e = e1;
				this.entities.push(n.e);
				this.world.t[n.x][n.y] = Block.Lock;
			}
		}
		var _g10 = 0;
		var _g18 = this.entities;
		while(_g10 < _g18.length) {
			var e2 = _g18[_g10];
			++_g10;
			e2.update(dt);
		}
		var old = this.curColor;
		var pixelAlpha = 1.0;
		var _g19 = Game.props.color;
		switch(_g19) {
		case 0:
			this.curColor = { delta : 64, mask : 192, alpha : 1., rgb : 1., k : Game.props.color};
			break;
		case 1:
			this.curColor = { delta : 48, mask : 128, alpha : 1., rgb : 0., k : Game.props.color};
			break;
		case 2:
			this.curColor = { delta : 16, mask : 192, alpha : .5, rgb : 0., k : Game.props.color};
			break;
		case 3:
			this.curColor = { delta : 40, mask : 224, alpha : .5, rgb : 0., k : Game.props.color};
			break;
		default:
			this.curColor = { delta : 0, mask : 255, alpha : 0., rgb : 0., k : Game.props.color};
		}
		if(old == null) this.curColor = this.curColor; else this.curColor = { delta : old.delta * 0.8 + this.curColor.delta * 0.2, mask : old.mask * 0.8 + this.curColor.mask * 0.2, alpha : old.alpha * 0.8 + this.curColor.alpha * 0.2, rgb : old.rgb * 0.8 + this.curColor.rgb * 0.2, k : old.k * 0.8 + this.curColor.k * 0.2};
		if(this.shake != null) {
			var m2 = new flash_geom_Matrix();
			var a;
			if(this.shake.time < 10) a = this.shake.time / 10; else a = 1;
			m2.tx = (Math.random() * 2 - 1) * this.shake.power * a;
			m2.ty = (Math.random() * 2 - 1) * this.shake.power * a;
			this.output.draw(this.view,m2);
			this.shake.time -= dt;
			if(this.shake.time < 0) this.shake = null;
		} else this.output.draw(this.view);
		var delta = this.curColor.delta | 0;
		var mask = Math.ceil(this.curColor.mask);
		var colorMatrix = null;
		if(this.curColor.rgb > 0.01) {
			var r = 155;
			var g = 198;
			var b = 15;
			var f = 0.25 / g * this.curColor.rgb;
			var k = 1 - this.curColor.rgb;
			colorMatrix = [k + r * f,r * f,r * f,0,20 * this.curColor.rgb,g * f,k + g * f,g * f,0,50 * this.curColor.rgb,b * f,b * f,k + b * f,0,20 * this.curColor.rgb,0,0,0,1,0];
		}
		if(!this.disableFilter && (delta != 0 || mask != 255 || colorMatrix != null)) {
			var curFilter = new CombinedFilter(delta,mask,colorMatrix);
			this.output.applyFilter(this.output,this.output.rect,new flash_geom_Point(0,0),curFilter);
		}
		this.pixelFilterBMP.alpha = this.curColor.alpha;
		if(this.generators != null) {
			var _g20 = 0;
			var _g110 = this.generators;
			while(_g20 < _g110.length) {
				var g1 = _g110[_g20];
				++_g20;
				var dx1 = this.hero.x - g1.x;
				var dy1 = this.hero.y - g1.y;
				var d1 = dx1 * dx1 + dy1 * dy1;
				if(d1 < 100 && Game.props.xp >= 0) {
					g1.time -= dt;
					if(g1.time < 0) {
						var k1;
						var _g22 = Std.random(10);
						switch(_g22) {
						case 3:case 4:case 5:
							k1 = EKind.Bat;
							break;
						case 0:case 1:case 2:
							k1 = EKind.Monster;
							break;
						case 6:case 7:
							k1 = EKind.Knight;
							break;
						default:
							k1 = null;
						}
						if(k1 != null && this.monsters.length < 50) {
							var m3 = new Monster(k1,g1.x,g1.y);
							m3.generated = true;
							this.monsters.push(m3);
						}
						g1.time += 50;
					}
				}
			}
		}
		var size = (Math.ceil(16 * this.scroll.curZ) >> 1) + this.barsDelta;
		if(Game.props.bars || size < this.output.height * 0.5) {
			var color;
			if(this.curColor.rgb == 0) color = -16777216; else color = -15453676;
			this.output.fillRect(new flash_geom_Rectangle(0,0,this.output.width,(this.output.height >> 1) - size),color);
			this.output.fillRect(new flash_geom_Rectangle(0,(this.output.height >> 1) + size,this.output.width,this.output.height - (this.output.height >> 1) + size),color);
			if(!Game.props.bars) this.barsDelta += 5 * dt;
		}
		this.dm.ysort(3);
	}
	,__class__: Game
};
var DocumentClass = function(root) {
	Game.call(this,root);
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = Game;
DocumentClass.prototype = $extend(Game.prototype,{
	__class__: DocumentClass
});
var ChestKind = $hxClasses["ChestKind"] = { __ename__ : ["ChestKind"], __constructs__ : ["CLeftCtrl","C2D","CScroll","CColor","CMonsters","CWeapon","CZoom","CAllowSave","CWeb","CNpc","CGoldCoin","CKey","CFreeMove","CDiablo","CExit","CPorn","CSounds","CMusic","CTitleScreen","CRightCtrl","CPushBlock","CDungeon","CDungeonKills","CPuzzle","CLevelUp","CFarming","CPrincess"] };
ChestKind.CLeftCtrl = ["CLeftCtrl",0];
ChestKind.CLeftCtrl.toString = $estr;
ChestKind.CLeftCtrl.__enum__ = ChestKind;
ChestKind.C2D = ["C2D",1];
ChestKind.C2D.toString = $estr;
ChestKind.C2D.__enum__ = ChestKind;
ChestKind.CScroll = ["CScroll",2];
ChestKind.CScroll.toString = $estr;
ChestKind.CScroll.__enum__ = ChestKind;
ChestKind.CColor = ["CColor",3];
ChestKind.CColor.toString = $estr;
ChestKind.CColor.__enum__ = ChestKind;
ChestKind.CMonsters = ["CMonsters",4];
ChestKind.CMonsters.toString = $estr;
ChestKind.CMonsters.__enum__ = ChestKind;
ChestKind.CWeapon = ["CWeapon",5];
ChestKind.CWeapon.toString = $estr;
ChestKind.CWeapon.__enum__ = ChestKind;
ChestKind.CZoom = ["CZoom",6];
ChestKind.CZoom.toString = $estr;
ChestKind.CZoom.__enum__ = ChestKind;
ChestKind.CAllowSave = ["CAllowSave",7];
ChestKind.CAllowSave.toString = $estr;
ChestKind.CAllowSave.__enum__ = ChestKind;
ChestKind.CWeb = ["CWeb",8];
ChestKind.CWeb.toString = $estr;
ChestKind.CWeb.__enum__ = ChestKind;
ChestKind.CNpc = ["CNpc",9];
ChestKind.CNpc.toString = $estr;
ChestKind.CNpc.__enum__ = ChestKind;
ChestKind.CGoldCoin = ["CGoldCoin",10];
ChestKind.CGoldCoin.toString = $estr;
ChestKind.CGoldCoin.__enum__ = ChestKind;
ChestKind.CKey = ["CKey",11];
ChestKind.CKey.toString = $estr;
ChestKind.CKey.__enum__ = ChestKind;
ChestKind.CFreeMove = ["CFreeMove",12];
ChestKind.CFreeMove.toString = $estr;
ChestKind.CFreeMove.__enum__ = ChestKind;
ChestKind.CDiablo = ["CDiablo",13];
ChestKind.CDiablo.toString = $estr;
ChestKind.CDiablo.__enum__ = ChestKind;
ChestKind.CExit = ["CExit",14];
ChestKind.CExit.toString = $estr;
ChestKind.CExit.__enum__ = ChestKind;
ChestKind.CPorn = ["CPorn",15];
ChestKind.CPorn.toString = $estr;
ChestKind.CPorn.__enum__ = ChestKind;
ChestKind.CSounds = ["CSounds",16];
ChestKind.CSounds.toString = $estr;
ChestKind.CSounds.__enum__ = ChestKind;
ChestKind.CMusic = ["CMusic",17];
ChestKind.CMusic.toString = $estr;
ChestKind.CMusic.__enum__ = ChestKind;
ChestKind.CTitleScreen = ["CTitleScreen",18];
ChestKind.CTitleScreen.toString = $estr;
ChestKind.CTitleScreen.__enum__ = ChestKind;
ChestKind.CRightCtrl = ["CRightCtrl",19];
ChestKind.CRightCtrl.toString = $estr;
ChestKind.CRightCtrl.__enum__ = ChestKind;
ChestKind.CPushBlock = ["CPushBlock",20];
ChestKind.CPushBlock.toString = $estr;
ChestKind.CPushBlock.__enum__ = ChestKind;
ChestKind.CDungeon = ["CDungeon",21];
ChestKind.CDungeon.toString = $estr;
ChestKind.CDungeon.__enum__ = ChestKind;
ChestKind.CDungeonKills = ["CDungeonKills",22];
ChestKind.CDungeonKills.toString = $estr;
ChestKind.CDungeonKills.__enum__ = ChestKind;
ChestKind.CPuzzle = ["CPuzzle",23];
ChestKind.CPuzzle.toString = $estr;
ChestKind.CPuzzle.__enum__ = ChestKind;
ChestKind.CLevelUp = ["CLevelUp",24];
ChestKind.CLevelUp.toString = $estr;
ChestKind.CLevelUp.__enum__ = ChestKind;
ChestKind.CFarming = ["CFarming",25];
ChestKind.CFarming.toString = $estr;
ChestKind.CFarming.__enum__ = ChestKind;
ChestKind.CPrincess = ["CPrincess",26];
ChestKind.CPrincess.toString = $estr;
ChestKind.CPrincess.__enum__ = ChestKind;
var Chests = function() { };
$hxClasses["Chests"] = Chests;
Chests.__name__ = ["Chests"];
var Tools = function() { };
$hxClasses["Tools"] = Tools;
Tools.__name__ = ["Tools"];
Tools.remove = function(i) {
	if(i != null && i.parent != null) i.parent.removeChild(i);
};
var openfl_AssetLibrary = function() {
};
$hxClasses["openfl.AssetLibrary"] = openfl_AssetLibrary;
openfl_AssetLibrary.__name__ = ["openfl","AssetLibrary"];
openfl_AssetLibrary.prototype = {
	exists: function(id,type) {
		return false;
	}
	,getBitmapData: function(id) {
		return null;
	}
	,getMusic: function(id) {
		return this.getSound(id);
	}
	,getSound: function(id) {
		return null;
	}
	,isLocal: function(id,type) {
		return true;
	}
	,__class__: openfl_AssetLibrary
};
var DefaultAssetLibrary = function() {
	openfl_AssetLibrary.call(this);
	this.addExternal("music1.mp3","music","music1.mp3");
	this.addExternal("music1.ogg","music","music1.ogg");
	this.addExternal("music1.wav","music","music1.wav");
	this.addExternal("tiles_alpha.png","image","tiles_alpha.png");
	this.addExternal("tiles.png","image","tiles.png");
	this.addExternal("sprites.png","image","sprites.png");
	this.addExternal("world.png","image","world.png");
	this.addExternal("title.png","image","title.png");
	this.addExternal("screens/screen5.png","image","screens/screen5.png");
	this.addExternal("screens/screen2.png","image","screens/screen2.png");
	this.addExternal("screens/screen3.png","image","screens/screen3.png");
	this.addExternal("screens/sunvox.png","image","screens/sunvox.png");
	this.addExternal("screens/final3.png","image","screens/final3.png");
	this.addExternal("screens/screen4.png","image","screens/screen4.png");
	this.addExternal("screens/final2.png","image","screens/final2.png");
	this.addExternal("screens/final1.png","image","screens/final1.png");
	this.addExternal("screens/screen6.png","image","screens/screen6.png");
	this.addExternal("screens/screen1.png","image","screens/screen1.png");
	this.addExternal("sprites_alpha.png","image","sprites_alpha.png");
	this.addExternal("title3.png","image","title3.png");
	this.addExternal("dungeon.png","image","dungeon.png");
	this.addExternal("p0Banner.png","image","p0Banner.png");
	this.addExternal("pubBanner.png","image","pubBanner.png");
	this.addExternal("title2.png","image","title2.png");
	this.addExternal("sfx/gameover.wav","sound","sfx/gameover.wav");
	this.addExternal("sfx/npc.mp3","music","sfx/npc.mp3");
	this.addExternal("sfx/walk.wav","sound","sfx/walk.wav");
	this.addExternal("sfx/gameover.ogg","sound","sfx/gameover.ogg");
	this.addExternal("sfx/puzzle.mp3","music","sfx/puzzle.mp3");
	this.addExternal("sfx/firehit.wav","sound","sfx/firehit.wav");
	this.addExternal("sfx/notsure.mp3","music","sfx/notsure.mp3");
	this.addExternal("sfx/hit.wav","sound","sfx/hit.wav");
	this.addExternal("sfx/pii.mp3","music","sfx/pii.mp3");
	this.addExternal("sfx/pii.wav","sound","sfx/pii.wav");
	this.addExternal("sfx/kill.ogg","sound","sfx/kill.ogg");
	this.addExternal("sfx/npc.ogg","sound","sfx/npc.ogg");
	this.addExternal("sfx/world_remove.mp3","music","sfx/world_remove.mp3");
	this.addExternal("sfx/notsure.wav","sound","sfx/notsure.wav");
	this.addExternal("sfx/fireball.ogg","sound","sfx/fireball.ogg");
	this.addExternal("sfx/pii.ogg","sound","sfx/pii.ogg");
	this.addExternal("sfx/fireball.wav","sound","sfx/fireball.wav");
	this.addExternal("sfx/princess.mp3","music","sfx/princess.mp3");
	this.addExternal("sfx/puzzle.ogg","sound","sfx/puzzle.ogg");
	this.addExternal("sfx/sword.wav","sound","sfx/sword.wav");
	this.addExternal("sfx/princess.wav","sound","sfx/princess.wav");
	this.addExternal("sfx/npc.wav","sound","sfx/npc.wav");
	this.addExternal("sfx/levelup.ogg","sound","sfx/levelup.ogg");
	this.addExternal("sfx/save.mp3","music","sfx/save.mp3");
	this.addExternal("sfx/hit.ogg","sound","sfx/hit.ogg");
	this.addExternal("sfx/firehit.mp3","music","sfx/firehit.mp3");
	this.addExternal("sfx/levelup.mp3","music","sfx/levelup.mp3");
	this.addExternal("sfx/puzzle.wav","sound","sfx/puzzle.wav");
	this.addExternal("sfx/kill.mp3","music","sfx/kill.mp3");
	this.addExternal("sfx/sword.mp3","music","sfx/sword.mp3");
	this.addExternal("sfx/sword.ogg","sound","sfx/sword.ogg");
	this.addExternal("sfx/save.wav","sound","sfx/save.wav");
	this.addExternal("sfx/gameover.mp3","music","sfx/gameover.mp3");
	this.addExternal("sfx/princess.ogg","sound","sfx/princess.ogg");
	this.addExternal("sfx/walk.mp3","music","sfx/walk.mp3");
	this.addExternal("sfx/save.ogg","sound","sfx/save.ogg");
	this.addExternal("sfx/hit.mp3","music","sfx/hit.mp3");
	this.addExternal("sfx/world_remove.wav","sound","sfx/world_remove.wav");
	this.addExternal("sfx/levelup.wav","sound","sfx/levelup.wav");
	this.addExternal("sfx/kill.wav","sound","sfx/kill.wav");
	this.addExternal("sfx/notsure.ogg","sound","sfx/notsure.ogg");
	this.addExternal("sfx/fireball.mp3","music","sfx/fireball.mp3");
	this.addExternal("sfx/walk.ogg","sound","sfx/walk.ogg");
	this.addExternal("sfx/firehit.ogg","sound","sfx/firehit.ogg");
	this.addExternal("sfx/world_remove.ogg","sound","sfx/world_remove.ogg");
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = ["DefaultAssetLibrary"];
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
	,getMusic: function(id) {
		var sound = new flash_media_Sound();
		sound.__buffer = true;
		sound.load(new flash_net_URLRequest(DefaultAssetLibrary.path.get(id)));
		return sound;
	}
	,getSound: function(id) {
		return new flash_media_Sound(new flash_net_URLRequest(DefaultAssetLibrary.path.get(id)));
	}
	,isLocal: function(id,type) {
		return true;
	}
	,__class__: DefaultAssetLibrary
});
var DepthManager = function(r) {
	this.root = r;
	this.baseChildren = this.root.get_numChildren();
	this.plans = new Array();
};
$hxClasses["DepthManager"] = DepthManager;
DepthManager.__name__ = ["DepthManager"];
DepthManager.prototype = {
	getPlan: function(n) {
		var pmc = this.plans[n];
		if(pmc != null) return pmc;
		pmc = new flash_display_Shape();
		pmc.visible = false;
		pmc.name = "Plan#" + n;
		this.root.addChildAt(pmc,this.getBottom(n));
		this.plans[n] = pmc;
		return pmc;
	}
	,getBottom: function(plan) {
		var n = plan;
		while(--n >= 0) {
			var mc = this.plans[n];
			if(mc != null) return this.root.getChildIndex(mc) + 1;
		}
		return this.baseChildren;
	}
	,add: function(_mc,plan) {
		var mc = flash_Lib["as"](_mc,flash_display_DisplayObject);
		if(mc.parent != null) mc.parent.removeChild(mc);
		this.root.addChildAt(mc,this.root.getChildIndex(this.getPlan(plan)));
		return _mc;
	}
	,ysort: function(plan) {
		var y = -99999999;
		var start = this.getBottom(plan);
		var last = this.root.getChildIndex(this.getPlan(plan));
		var _g = start;
		while(_g < last) {
			var i = _g++;
			var mc = this.root.getChildAt(i);
			var mcy = mc.y;
			if(mcy >= y) y = mcy; else {
				var j = i - 1;
				while(j >= start) {
					var mc2 = this.root.getChildAt(j);
					if(mc2.y <= mcy) break;
					j--;
				}
				this.root.addChildAt(mc,j + 1);
			}
		}
	}
	,__class__: DepthManager
};
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,__class__: EReg
};
var EKind = $hxClasses["EKind"] = { __ename__ : ["EKind"], __constructs__ : ["NPC","Chest","Monster","Sword","SavePoint","Cursor","Hero","HeroUp","Bat","Knight","Fireball"] };
EKind.NPC = ["NPC",0];
EKind.NPC.toString = $estr;
EKind.NPC.__enum__ = EKind;
EKind.Chest = ["Chest",1];
EKind.Chest.toString = $estr;
EKind.Chest.__enum__ = EKind;
EKind.Monster = ["Monster",2];
EKind.Monster.toString = $estr;
EKind.Monster.__enum__ = EKind;
EKind.Sword = ["Sword",3];
EKind.Sword.toString = $estr;
EKind.Sword.__enum__ = EKind;
EKind.SavePoint = ["SavePoint",4];
EKind.SavePoint.toString = $estr;
EKind.SavePoint.__enum__ = EKind;
EKind.Cursor = ["Cursor",5];
EKind.Cursor.toString = $estr;
EKind.Cursor.__enum__ = EKind;
EKind.Hero = ["Hero",6];
EKind.Hero.toString = $estr;
EKind.Hero.__enum__ = EKind;
EKind.HeroUp = ["HeroUp",7];
EKind.HeroUp.toString = $estr;
EKind.HeroUp.__enum__ = EKind;
EKind.Bat = ["Bat",8];
EKind.Bat.toString = $estr;
EKind.Bat.__enum__ = EKind;
EKind.Knight = ["Knight",9];
EKind.Knight.toString = $estr;
EKind.Knight.__enum__ = EKind;
EKind.Fireball = ["Fireball",10];
EKind.Fireball.toString = $estr;
EKind.Fireball.__enum__ = EKind;
var Entity = function(kind,x,y) {
	this.kind = kind;
	this.x = this.ix = x;
	this.y = this.iy = y;
	this.speed = 0.1;
	this.frame = Std.random(1000);
	this.animSpeed = 0.3;
	this.bounds = { x : 4, w : 8, y : 8, h : 8};
	this.mc = new flash_display_Sprite();
	this.bmp = new flash_display_Bitmap();
	this.game = Game.inst;
	switch(kind[1]) {
	case 1:
		this.shade = new flash_display_Sprite();
		this.shade.get_graphics().beginFill(0,0.1);
		this.shade.get_graphics().drawRect(2,12,11,6);
		this.game.dm.add(this.shade,1);
		break;
	case 4:
		break;
	case 0:
		this.animSpeed = 0;
		this.frame = 0;
		if(this.iy == 31 && this.ix == 59) this.frame = 1;
		break;
	default:
		this.shade = new flash_display_Sprite();
		this.shade.get_graphics().beginFill(0,0.1);
		this.shade.get_graphics().drawEllipse(1,10,12,8);
		this.game.dm.add(this.shade,1);
	}
	this.mc.addChild(this.bmp);
	this.game.dm.add(this.mc,3);
};
$hxClasses["Entity"] = Entity;
Entity.__name__ = ["Entity"];
Entity.sprites = null;
Entity.init = function(onComplete) {
	if(Entity.sprites == null) Entity.sprites = Tiles.initTiles(openfl_Assets.getBitmapData("sprites_alpha.png"),16);
};
Entity.prototype = {
	endMove: function() {
	}
	,teleport: function(tx,ty) {
		this.x = this.ix = tx;
		this.y = this.iy = ty;
	}
	,explode: function(p) {
		if(p == null) p = 100;
		Part.explode(this.bmp.bitmapData,this.mc.x | 0,this.mc.y | 0,p);
	}
	,updatePos: function(dt) {
		if(this.target == null) return;
		var dx = this.target.x - this.x;
		var dy = this.target.y - this.y;
		var speed = this.speed * dt;
		if(dx != 0) {
			if(Math.abs(dx) <= speed) this.x = this.target.x; else if(dx > 0) this.x += speed; else this.x -= speed;
		}
		if(dy != 0) {
			if(Math.abs(dy) <= speed) this.y = this.target.y; else if(dy > 0) this.y += speed; else this.y -= speed;
		}
		if(this.x == this.target.x && this.y == this.target.y) {
			this.ix = this.x | 0;
			this.iy = this.y | 0;
			this.endMove();
			this.target = null;
		}
	}
	,remove: function() {
		if(this.mc != null) this.mc.parent.removeChild(this.mc);
		if(this.shade != null) this.shade.parent.removeChild(this.shade);
	}
	,update: function(dt) {
		this.updatePos(dt);
		this.mc.x = this.x * 16 | 0;
		this.mc.y = (this.y * 16 | 0) - 2;
		if(this.shade != null) {
			this.shade.x = this.mc.x + 0.5;
			this.shade.y = this.mc.y + 0.5;
		}
		if(this.frame >= 0) {
			var sl = Entity.sprites[this.kind[1]];
			this.frame += this.animSpeed * Timer.tmod;
			this.iframe = (this.frame | 0) % sl.length;
			this.bmp.bitmapData = sl[this.iframe];
			if(sl.length == 0) this.frame = -1;
		}
	}
	,__class__: Entity
};
var Direction = $hxClasses["Direction"] = { __ename__ : ["Direction"], __constructs__ : ["UP","DOWN","LEFT","RIGHT"] };
Direction.UP = ["UP",0];
Direction.UP.toString = $estr;
Direction.UP.__enum__ = Direction;
Direction.DOWN = ["DOWN",1];
Direction.DOWN.toString = $estr;
Direction.DOWN.__enum__ = Direction;
Direction.LEFT = ["LEFT",2];
Direction.LEFT.toString = $estr;
Direction.LEFT.__enum__ = Direction;
Direction.RIGHT = ["RIGHT",3];
Direction.RIGHT.toString = $estr;
Direction.RIGHT.__enum__ = Direction;
var flash_filters_BitmapFilter = function() {
};
$hxClasses["flash.filters.BitmapFilter"] = flash_filters_BitmapFilter;
flash_filters_BitmapFilter.__name__ = ["flash","filters","BitmapFilter"];
flash_filters_BitmapFilter.prototype = {
	__applyFilter: function(sourceData,targetData,sourceRect,destPoint) {
	}
	,__class__: flash_filters_BitmapFilter
};
var CombinedFilter = function(delta,mask,matrix) {
	this.delta = delta;
	this.mask = mask;
	this.matrix = matrix;
	flash_filters_BitmapFilter.call(this);
};
$hxClasses["CombinedFilter"] = CombinedFilter;
CombinedFilter.__name__ = ["CombinedFilter"];
CombinedFilter.__super__ = flash_filters_BitmapFilter;
CombinedFilter.prototype = $extend(flash_filters_BitmapFilter.prototype,{
	__applyFilter: function(sourceData,targetData,sourceRect,destPoint) {
		var source = sourceData.data;
		var target = targetData.data;
		var offsetX = destPoint.x - sourceRect.x | 0;
		var offsetY = destPoint.y - sourceRect.y | 0;
		var sourceStride = sourceData.width * 4;
		var targetStride = targetData.width * 4;
		var sourceOffset;
		var targetOffset;
		var applyMask = this.delta != 0 || this.mask != 255;
		var applyMatrix = this.matrix != null;
		var r;
		var g;
		var b;
		var a;
		var _g1 = sourceRect.y | 0;
		var _g = sourceRect.height | 0;
		while(_g1 < _g) {
			var row = _g1++;
			var _g3 = sourceRect.x | 0;
			var _g2 = sourceRect.width | 0;
			while(_g3 < _g2) {
				var column = _g3++;
				sourceOffset = row * sourceStride + column * 4;
				targetOffset = (row + offsetX) * targetStride + (column + offsetY) * 4;
				r = source[sourceOffset];
				g = source[sourceOffset + 1];
				b = source[sourceOffset + 2];
				a = source[sourceOffset + 3];
				if(applyMask) {
					r += this.delta;
					g += this.delta;
					b += this.delta;
					a += this.delta;
					if(r > 255) r = 255;
					if(g > 255) g = 255;
					if(b > 255) b = 255;
					if(a > 255) a = 255;
					r = r & this.mask;
					g = g & this.mask;
					b = b & this.mask;
					a = a & this.mask;
				}
				if(applyMatrix) {
					target[targetOffset] = this.matrix[0] * r + this.matrix[1] * g + this.matrix[2] * b + this.matrix[3] * a + this.matrix[4] | 0;
					target[targetOffset + 1] = this.matrix[5] * r + this.matrix[6] * g + this.matrix[7] * b + this.matrix[8] * a + this.matrix[9] | 0;
					target[targetOffset + 2] = this.matrix[10] * r + this.matrix[11] * g + this.matrix[12] * b + this.matrix[13] * a + this.matrix[14] | 0;
					target[targetOffset + 3] = this.matrix[15] * r + this.matrix[16] * g + this.matrix[17] * b + this.matrix[18] * a + this.matrix[19] | 0;
				} else {
					target[targetOffset] = r;
					target[targetOffset + 1] = g;
					target[targetOffset + 2] = b;
					target[targetOffset + 3] = a;
				}
			}
		}
	}
	,__class__: CombinedFilter
});
var Hero = function(x,y) {
	Entity.call(this,EKind.Hero,x,y);
	this.dirY = 1;
	this.hitRecover = 0;
};
$hxClasses["Hero"] = Hero;
Hero.__name__ = ["Hero"];
Hero.__super__ = Entity;
Hero.prototype = $extend(Entity.prototype,{
	talk: function(n) {
		if(Popup.hasDialog()) return;
		var p = Game.props;
		var _g = n.x + "/" + n.y;
		switch(_g) {
		case "51/62":
			Sounds.play("npc");
			if(p.npc == 1) {
				this.game.popup("Sorry I have nothing to say to you !","that's what you get when talking to strangers",true);
				return;
			}
			if(p.quests.length == 0 || p.quests[0] == 0 || p.quests[0] == 1 && p.gold == 0) {
				this.game.popup("You want a <font color='#4040FF'>Quest</font> ?","Bring me something shiny and I'll will help you",true);
				p.quests[0] = 1;
				return;
			}
			if(p.quests[0] == 1) {
				p.gold--;
				p.quests[0] = 2;
			}
			this.game.popup("Thank you for your <font color='#4040FF'>gold coin</font> !","You can now open doors with keys !",true);
			break;
		case "59/31":
			if(p.quests.length < 2 || p.quests[1] == 0) {
				p.quests[1] = 1;
				Sounds.play("princess");
				this.game.getChest(ChestKind.CPrincess,0,0);
			}
			break;
		case "53/47":
			Sounds.play("npc");
			this.game.popup("I love fishing","What about you ?",true);
			break;
		case "38/61":
			Sounds.play("npc");
			this.game.popup("Check our company website <font color='#4040FF'>ShiroGames.com</font>","What ? In-game advertising ? No way !",true);
			break;
		case "57/38":
			Sounds.play("npc");
			this.game.popup("If you talk to the princess, that will be game ending","I am married as well, I know what I'm talking about !",true);
			break;
		case "41/72":
			Sounds.play("npc");
			this.game.popup("If you can't find your way, try to push some rock","Yes I know, this is quite a classic trick...",true);
			break;
		default:
			console.log("Unknown NPC @" + Std.string([n.x,n.y]));
		}
	}
	,collide: function(x,y) {
		if(!this.game.world.collide(x,y)) return false;
		var _g = this.game.world.t[x][y];
		switch(_g[1]) {
		case 15:
			if(Game.props.quests[0] == 2 && Game.props.keys > 0) {
				Game.props.keys--;
				this.game.world.remove(x,y);
				this.game.popup("Door <font color='#00ff00'>Opened</font>",Game.props.keys + " keys left");
			}
			break;
		default:
		}
		var _g1 = 0;
		var _g11 = this.game.world.npcs;
		while(_g1 < _g11.length) {
			var n = _g11[_g1];
			++_g1;
			if(n.x == x && n.y == y) this.talk(n);
		}
		return true;
	}
	,move: function(dx,dy,dt) {
		this.dirX = dx;
		this.dirY = dy;
		if(Game.props.freeMove) {
			var s = this.speed * dt;
			var px1 = (this.x * 16 + this.bounds.x) / 16 + dx * s | 0;
			var px2 = (this.x * 16 + this.bounds.x + this.bounds.w - 1) / 16 + dx * s | 0;
			var py1 = (this.y * 16 + this.bounds.y) / 16 + dy * s | 0;
			var py2 = (this.y * 16 + this.bounds.y + this.bounds.h - 1) / 16 + dy * s | 0;
			if(this.collide(px1,py1) || this.collide(px2,py1) || this.collide(px1,py2) || this.collide(px2,py2)) {
				this.push += dt;
				if(this.push > 25) {
					this.push = 0;
					if(this.dirY == 1 && px1 == 64 && py2 == 58) {
						this.game.world.remove(64,58);
						this.game.world.remove(64,61);
						this.game.getChest(ChestKind.CPushBlock,0,0);
					}
				}
				return;
			}
			this.push = 0;
			this.x += dx * s;
			this.y += dy * s;
			var nx = this.x + (this.bounds.x + this.bounds.w * 0.5) / 16 | 0;
			var ny = this.y + (this.bounds.y + this.bounds.h * 0.5) / 16 | 0;
			if(nx != this.ix || ny != this.iy) {
				this.ix = nx;
				this.iy = ny;
				this.endMove();
			}
			this.moving = true;
		} else {
			var x = this.ix + dx;
			var y = this.iy + dy;
			if(this.collide(x,y)) return;
			this.target = { x : x, y : y};
		}
	}
	,update: function(dt) {
		if(this.target == null && !this.moving) this.frame = 0; else if(this.iframe % 2 == 0) {
			if(!this.sound) {
				this.sound = true;
				Sounds.play("walk");
			}
		} else this.sound = false;
		if(this.dirY < 0) this.kind = EKind.HeroUp; else this.kind = EKind.Hero;
		Entity.prototype.update.call(this,dt);
		if(this.hitRecover > 0) {
			this.hitRecover -= dt;
			this.mc.alpha = Math.abs(Math.sin(this.hitRecover));
			if(this.hitRecover <= 0) this.mc.alpha = 1;
		}
		if(this.sword != null) this.updateSword(dt);
	}
	,cleanPuzzle: function() {
		if(this.puzzle != null) {
			var _g = 0;
			var _g1 = this.puzzle;
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				Tools.remove(p.s);
			}
			this.puzzle = null;
		}
	}
	,endMove: function() {
		var _g = this.game.world.t[this.ix][this.iy];
		switch(_g[1]) {
		case 10:
			if(Game.props.canSave) this.game.save();
			break;
		case 16:
			this.game.getChest(ChestKind.CDungeon,0,0);
			break;
		case 22:
			if(Game.props.puzzle) return;
			if(this.puzzle == null) this.puzzle = [];
			var _g1 = 0;
			var _g2 = this.puzzle;
			while(_g1 < _g2.length) {
				var p = _g2[_g1];
				++_g1;
				if(p.x == this.ix && p.y == this.iy) {
					this.cleanPuzzle();
					this.puzzle = [];
					break;
				}
			}
			var s = new flash_display_Sprite();
			s.get_graphics().beginFill(16777215,0.5);
			s.get_graphics().drawRect(0,0,16,16);
			s.x = this.ix * 16;
			s.y = this.iy * 16;
			this.game.dm.add(s,0);
			this.puzzle.push({ x : this.ix, y : this.iy, s : s});
			Sounds.play("puzzle");
			if(this.puzzle.length == 13) {
				this.cleanPuzzle();
				this.game.getChest(ChestKind.CPuzzle,0,0);
			}
			break;
		case 25:
			if(this.y > 24.9) {
				this.teleport(59,43);
				this.game.initDungeon(false);
				this.game.world.remove(59,44);
			} else this.iy = 24;
			break;
		default:
			this.cleanPuzzle();
			if(this.ix == 26 && this.iy == 42 && Game.props.dungeon) this.game.world.remove(26,40);
		}
	}
	,updateSword: function(dt) {
		this.sword.pos += dt * this.sword.speed;
		if(this.sword.pos >= 8) {
			this.sword.pos = 8 - (this.sword.pos - 8);
			this.sword.speed *= -1;
		}
		this.sword.mc.x = this.mc.x + 8 + (this.sword.pos - 1) * this.sword.dx;
		this.sword.mc.y = this.mc.y + 8 + (this.sword.pos - 1) * this.sword.dy + (this.sword.dx != 0?2:0);
		var hitX = this.sword.mc.x + this.sword.dx * 10;
		var hitY = this.sword.mc.y + this.sword.dy * 10;
		var hx = hitX / 16 | 0;
		var hy = hitY / 16 | 0;
		var _g = this.game.world.t[hx][hy];
		switch(_g[1]) {
		case 6:
			this.game.world.remove(hx,hy);
			break;
		default:
		}
		var props = Game.props;
		var _g1 = 0;
		var _g11 = this.game.monsters;
		while(_g1 < _g11.length) {
			var m = _g11[_g1];
			++_g1;
			var dx = m.x * 16 + 8 - hitX;
			var dy = m.y * 16 + 7 - hitY;
			if(dx * dx + dy * dy < 64 && m.canHit()) {
				m.kill();
				Sounds.play("kill");
				if(props.dungeon) {
					props.dmkills++;
					if(props.dmkills == 7) this.game.getChest(ChestKind.CDungeonKills,0,0);
				}
				if(props.xp >= 0) {
					props.xp += 10;
					this.game.updateUI();
					if(props.xp >= 100) this.game.getChest(ChestKind.CLevelUp,0,0);
				}
				break;
			}
		}
		if(this.sword.pos < 0) {
			Tools.remove(this.sword.mc);
			this.sword = null;
		}
	}
	,attack: function() {
		var smc = new flash_display_Sprite();
		var bmp = new flash_display_Bitmap(Entity.sprites[3][0]);
		bmp.x = -8;
		bmp.y = -3;
		smc.addChild(bmp);
		smc.rotation = Math.atan2(-this.dirX,this.dirY) * 180 / Math.PI;
		this.game.dm.add(smc,3 + (this.dirY < 0?-1:0));
		this.sword = { dx : this.dirX, dy : this.dirY, pos : 0., speed : 3., mc : smc};
		this.updateSword(0);
		Sounds.play("sword");
	}
	,__class__: Hero
});
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
};
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
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
var Key = function() { };
$hxClasses["Key"] = Key;
Key.__name__ = ["Key"];
Key.init = function() {
	var stage = flash_Lib.current.stage;
	if(Key.fl_initDone) {
		stage.removeEventListener(flash_events_Event.ENTER_FRAME,Key.onEnterFrame);
		stage.addEventListener(flash_events_Event.ENTER_FRAME,Key.onEnterFrame);
		return;
	}
	Key.fl_initDone = true;
	stage.addEventListener(flash_events_KeyboardEvent.KEY_DOWN,(function(f,a1) {
		return function(e) {
			return f(a1,e);
		};
	})(Key.onKey,true));
	stage.addEventListener(flash_events_KeyboardEvent.KEY_UP,(function(f1,a11) {
		return function(e1) {
			return f1(a11,e1);
		};
	})(Key.onKey,false));
	stage.addEventListener(flash_events_Event.DEACTIVATE,function(_) {
		Key.kcodes = new Array();
	});
	stage.addEventListener(flash_events_Event.ENTER_FRAME,Key.onEnterFrame);
};
Key.onEnterFrame = function(_) {
	Key.ktime++;
};
Key.onKey = function(down,e) {
	Key.event(e.keyCode,down);
};
Key.event = function(code,down) {
	if(down) Key.kcodes[code] = Key.ktime; else Key.kcodes[code] = null;
	if(code == 18 && !down) Key.kcodes[17] = null;
};
Key.isDown = function(c) {
	return Key.kcodes[c] != null;
};
Key.isToggled = function(c) {
	return Key.kcodes[c] == Key.ktime;
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,__class__: List
};
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
Math.__name__ = ["Math"];
var Monster = function(k,x,y) {
	Entity.call(this,k,x,y);
	this.wait = 10;
	switch(k[1]) {
	case 8:
		this.speed = 0.05;
		break;
	case 9:
		this.speed = 0.1;
		break;
	case 10:
		this.mc.alpha = 0.7;
		break;
	default:
		this.speed = 0.03;
	}
	this.start = { x : x, y : y};
};
$hxClasses["Monster"] = Monster;
Monster.__name__ = ["Monster"];
Monster.__super__ = Entity;
Monster.prototype = $extend(Entity.prototype,{
	endMove: function() {
		this.wait = (Math.random() + 0.2) * 10;
	}
	,endWait: function() {
	}
	,deathHit: function() {
		var _g = this.kind;
		switch(_g[1]) {
		case 9:
			return this.mc.alpha > 0.3;
		default:
		}
		return true;
	}
	,canHit: function() {
		var _g = this.kind;
		switch(_g[1]) {
		case 9:
			return this.mc.alpha > 0.8;
		case 10:
			return false;
		default:
		}
		return true;
	}
	,update: function(dt) {
		if(this.wait > 0) {
			this.wait -= dt;
			if(this.wait <= 0) this.endWait();
		} else {
			var _g = this.kind;
			switch(_g[1]) {
			case 2:
				if(this.target == null) {
					var dx = 0;
					var dy = 0;
					var _g1 = Std.random(10);
					switch(_g1) {
					case 1:
						dx++;
						break;
					case 2:
						dx--;
						break;
					case 3:
						dy--;
						break;
					case 4:
						dy++;
						break;
					}
					if((dx != 0 || dy != 0) && !this.game.world.collide(this.ix + dx,this.iy + dy)) {
						this.ix += dx;
						this.iy += dy;
						this.target = { x : this.ix, y : this.iy};
					}
				}
				break;
			case 8:
				if(this.target == null) {
					var x;
					var y;
					do {
						x = this.x + (Math.random() - 0.5) * 3;
						y = this.y + (Math.random() - 0.5) * 3;
					} while((x - this.start.x) * (x - this.start.x) + (y - this.start.y) * (y - this.start.y) > 16);
					this.target = { x : x, y : y};
				}
				break;
			case 9:
				if(this.frame > 12) {
					this.mc.alpha -= dt * 0.03;
					if(this.mc.alpha <= 0) {
						this.frame = 0;
						this.wait = 20 + Math.random() * 10;
						this.mc.alpha = 1;
						this.attack = Std.random(3) != 0;
						var h = this.game.hero;
						do {
							this.ix = Std["int"](this.x + (Math.random() - 0.5) * 6);
							this.iy = Std["int"](this.y + (Math.random() - 0.5) * 6);
						} while(this.game.world.collide(this.ix,this.iy) || (this.ix - this.start.x) * (this.ix - this.start.x) + (this.iy - this.start.y) * (this.iy - this.start.y) > 36 || (this.ix - h.x) * (this.ix - h.x) + (this.iy - h.y) * (this.iy - h.y) < 2);
						this.x = this.ix;
						this.y = this.iy;
						if(!this.game.world.collide(this.ix,this.iy + 1)) this.target = { x : this.ix, y : this.y + 1};
					}
				}
				if(!this.attack && this.target == null) {
					this.attack = true;
					var dx1 = this.game.hero.x - this.ix;
					var dy1 = this.game.hero.y - this.iy;
					if(dx1 * dx1 + dy1 * dy1 < 64) Sounds.play("fireball");
					this.game.monsters.push(new Monster(EKind.Fireball,this.ix,this.iy));
				}
				break;
			case 10:
				this.y += dt * 0.1;
				if(this.game.world.collide(this.x | 0,this.y | 0)) {
					var dx2 = this.game.hero.x - this.x;
					var dy2 = this.game.hero.y - this.y;
					if(dx2 * dx2 + dy2 * dy2 < 64) Sounds.play("fireHit");
					this.kill();
					return;
				}
				break;
			default:
			}
		}
		Entity.prototype.update.call(this,dt);
	}
	,kill: function() {
		this.explode(10);
		this.remove();
		HxOverrides.remove(this.game.monsters,this);
	}
	,__class__: Monster
});
var flash_events_IEventDispatcher = function() { };
$hxClasses["flash.events.IEventDispatcher"] = flash_events_IEventDispatcher;
flash_events_IEventDispatcher.__name__ = ["flash","events","IEventDispatcher"];
var flash_events_EventDispatcher = function(target) {
	if(target != null) this.__targetDispatcher = target;
};
$hxClasses["flash.events.EventDispatcher"] = flash_events_EventDispatcher;
flash_events_EventDispatcher.__name__ = ["flash","events","EventDispatcher"];
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
flash_display_IBitmapDrawable.__name__ = ["flash","display","IBitmapDrawable"];
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
flash_display_DisplayObject.__name__ = ["flash","display","DisplayObject"];
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
	,__updateChildren: function() {
	}
	,set_mask: function(value) {
		if(this.__mask != null) this.__mask.__isMask = false;
		if(value != null) value.__isMask = true;
		return this.__mask = value;
	}
	,get_mouseX: function() {
		return this.globalToLocal(new flash_geom_Point(this.stage.__mouseX,0)).x;
	}
	,get_mouseY: function() {
		return this.globalToLocal(new flash_geom_Point(0,this.stage.__mouseY)).y;
	}
	,__class__: flash_display_DisplayObject
});
var flash_display_InteractiveObject = function() {
	flash_display_DisplayObject.call(this);
	this.mouseEnabled = true;
};
$hxClasses["flash.display.InteractiveObject"] = flash_display_InteractiveObject;
flash_display_InteractiveObject.__name__ = ["flash","display","InteractiveObject"];
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
flash_display_DisplayObjectContainer.__name__ = ["flash","display","DisplayObjectContainer"];
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
	,addChildAt: function(child,index) {
		if(index > this.__children.length || index < 0) throw "Invalid index position " + index;
		if(child.parent == this) HxOverrides.remove(this.__children,child); else {
			if(child.parent != null) child.parent.removeChild(child);
			child.parent = this;
			if(this.stage != null) child.__setStageReference(this.stage);
		}
		this.__children.splice(index,0,child);
		return child;
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__children[index];
		return null;
	}
	,getChildIndex: function(child) {
		var _g1 = 0;
		var _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == child) return i;
		}
		return -1;
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
	,get_height: function() {
		var bounds = new flash_geom_Rectangle();
		this.__getLocalBounds(bounds);
		return bounds.height;
	}
	,get_numChildren: function() {
		return this.__children.length;
	}
	,__class__: flash_display_DisplayObjectContainer
});
var flash_display_Sprite = function() {
	flash_display_DisplayObjectContainer.call(this);
};
$hxClasses["flash.display.Sprite"] = flash_display_Sprite;
flash_display_Sprite.__name__ = ["flash","display","Sprite"];
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
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = flash_display_Sprite;
NMEPreloader.prototype = $extend(flash_display_Sprite.prototype,{
	getBackgroundColor: function() {
		return 0;
	}
	,getHeight: function() {
		var height = 408;
		if(height > 0) return height; else return flash_Lib.current.stage.stageHeight;
	}
	,getWidth: function() {
		var width = 600;
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
var Part = function(x,y,z,mc) {
	this.mc = mc;
	this.x = x;
	this.y = y;
	this.z = z;
	this.speed = 0.8;
	mc.x = x;
	mc.y = y - z;
	Game.inst.dm.add(mc,4);
	this.vx = (Math.random() - 0.5) * 3;
	this.vy = (Math.random() - 0.5) * 3;
	this.vz = (Math.random() + 2) * 1.5;
	this.time = 50.;
	Part.all.push(this);
};
$hxClasses["Part"] = Part;
Part.__name__ = ["Part"];
Part.explode = function(bmp,px,py,proba) {
	if(proba == null) proba = 100;
	if(bmp == null) return;
	var _g1 = 0;
	var _g = bmp.width;
	while(_g1 < _g) {
		var x = _g1++;
		var _g3 = 0;
		var _g2 = bmp.height;
		while(_g3 < _g2) {
			var y = _g3++;
			var c = bmp.getPixel32(x,y);
			if(c == 0 || Std.random(100) >= proba) continue;
			var b = new flash_display_Bitmap(Part.getColorPixel(c));
			new Part(px + x,py + y,0,b);
		}
	}
};
Part.getColorPixel = function(c) {
	var p = Part.PIXELS.get(c);
	if(p == null) {
		p = new flash_display_BitmapData(1,1,false,c);
		Part.PIXELS.set(c,p);
	}
	return p;
};
Part.updateAll = function(dt) {
	var _g = 0;
	var _g1 = Part.all.slice();
	while(_g < _g1.length) {
		var p = _g1[_g];
		++_g;
		if(!p.update(dt)) {
			p.remove();
			HxOverrides.remove(Part.all,p);
		}
	}
};
Part.prototype = {
	update: function(dt) {
		this.x += this.vx * this.speed;
		this.y += this.vy * this.speed;
		this.z += this.vz * this.speed;
		this.vz -= Math.pow(0.9,dt) * this.speed;
		if(this.z < 0) {
			this.z = -this.z;
			this.vz *= -0.5;
		}
		this.mc.x = this.x;
		this.mc.y = this.y - this.z;
		this.time -= dt;
		this.mc.alpha = this.time / 30;
		return this.time > 0;
	}
	,remove: function() {
		this.mc.parent.removeChild(this.mc);
	}
	,__class__: Part
};
var Popup = function() {
	flash_display_Sprite.call(this);
	this.speed = 4;
	this.wait = 0;
	this.virtualY = 0;
	Popup.all.push(this);
};
$hxClasses["Popup"] = Popup;
Popup.__name__ = ["Popup"];
Popup.hasDialog = function() {
	var _g = 0;
	var _g1 = Popup.all;
	while(_g < _g1.length) {
		var p = _g1[_g];
		++_g;
		if(p.dialog) return true;
	}
	return false;
};
Popup.updateAll = function(dt) {
	var _g = 0;
	var _g1 = Popup.all.slice();
	while(_g < _g1.length) {
		var p = _g1[_g];
		++_g;
		if(!p.update(dt)) {
			p.parent.removeChild(p);
			HxOverrides.remove(Popup.all,p);
		}
	}
};
Popup.__super__ = flash_display_Sprite;
Popup.prototype = $extend(flash_display_Sprite.prototype,{
	update: function(dt) {
		if(this.wait > 0) {
			this.wait -= dt;
			return true;
		}
		if(Math.isNaN(this.startY)) {
			this.startY = this.y;
			this.virtualY = this.y;
		}
		this.virtualY -= dt * this.speed;
		if(this.virtualY < this.targetY) {
			this.virtualY = this.targetY;
			this.wait = this.speed * 30;
			this.speed = -this.speed * 0.5;
		}
		this.y = this.virtualY | 0;
		if(this.virtualY > this.stage.stageHeight) return false;
		return true;
	}
	,__class__: Popup
});
var Rand = function(seed) {
	this.seed = Rand.hash((seed < 0?-seed:seed) + 151);
};
$hxClasses["Rand"] = Rand;
Rand.__name__ = ["Rand"];
Rand.hash = function(n) {
	var _g = 0;
	while(_g < 5) {
		var i = _g++;
		n ^= n << 7 & 727393536;
		n ^= n << 15 & 462094336;
		n ^= n >>> 16;
		n &= 1073741823;
		var h = 5381;
		h = (h << 5) + h + (n & 255);
		h = (h << 5) + h + (n >> 8 & 255);
		h = (h << 5) + h + (n >> 16 & 255);
		h = (h << 5) + h + (n >> 24);
		n = h & 1073741823;
	}
	return n;
};
Rand.prototype = {
	random: function(n) {
		return (Std["int"](this.seed = this.seed * 16807.0 % 2147483647.0) & 1073741823) % n;
	}
	,__class__: Rand
};
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
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
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var Sounds = function() { };
$hxClasses["Sounds"] = Sounds;
Sounds.__name__ = ["Sounds"];
Sounds.play = function(name) {
	if(!Game.props.sounds) return;
	var s = Sounds.sounds.get(name);
	if(s == null) {
		switch(name) {
		case "chest":
			name = "notsure";
			break;
		case "menu":
			name = "pii";
			break;
		case "open":
			name = "world_remove";
			break;
		default:
			name = name.toLowerCase();
		}
		s = openfl_Assets.getSound("sfx/" + name + ".wav");
		Sounds.sounds.set(name,s);
	}
	s.play();
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
Std.random = function(x) {
	if(x <= 0) return 0; else return Math.floor(Math.random() * x);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	add: function(x) {
		this.b += Std.string(x);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
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
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
var Tiles = function() { };
$hxClasses["Tiles"] = Tiles;
Tiles.__name__ = ["Tiles"];
Tiles.initTiles = function(tiles,size) {
	var colorBG = tiles.getPixel32(tiles.width - 1,tiles.height - 1);
	var t = [];
	var _g1 = 0;
	var _g = tiles.height / size | 0;
	while(_g1 < _g) {
		var y = _g1++;
		t[y] = [];
		var _g3 = 0;
		var _g2 = tiles.width / size | 0;
		while(_g3 < _g2) {
			var x = _g3++;
			var b = new flash_display_BitmapData(size,size,true,0);
			b.copyPixels(tiles,new flash_geom_Rectangle(x * size,y * size,size,size),new flash_geom_Point(0,0));
			if(Tiles.isEmpty(b,colorBG)) {
				b.dispose();
				break;
			}
			t[y].push(b);
		}
	}
	tiles.dispose();
	return t;
};
Tiles.isEmpty = function(b,bg) {
	var empty = true;
	var _g1 = 0;
	var _g = b.width;
	while(_g1 < _g) {
		var x = _g1++;
		var _g3 = 0;
		var _g2 = b.height;
		while(_g3 < _g2) {
			var y = _g3++;
			var color = b.getPixel32(x,y);
			if((function($this) {
				var $r;
				var $int = bg;
				$r = $int < 0?4294967296.0 + $int:$int + 0.0;
				return $r;
			}(this)) != color) empty = false;
			if((color | 0) == -65281) b.setPixel32(x,y,0);
		}
	}
	return empty;
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe_Timer;
haxe_Timer.__name__ = ["haxe","Timer"];
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.stamp = function() {
	return new Date().getTime() / 1000;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe_Timer
};
var flash_Lib = function() { };
$hxClasses["flash.Lib"] = flash_Lib;
flash_Lib.__name__ = ["flash","Lib"];
flash_Lib.current = null;
flash_Lib["as"] = function(v,c) {
	if(js_Boot.__instanceof(v,c)) return v; else return null;
};
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
flash_Lib.getTimer = function() {
	return Std["int"]((haxe_Timer.stamp() - flash_Lib.__startTime) * 1000);
};
var Timer = function() { };
$hxClasses["Timer"] = Timer;
Timer.__name__ = ["Timer"];
Timer.update = function() {
	Timer.frameCount++;
	var newTime = flash_Lib.getTimer();
	Timer.deltaT = (newTime - Timer.oldTime) / 1000.0;
	Timer.oldTime = newTime;
	if(Timer.deltaT < Timer.maxDeltaTime) Timer.calc_tmod = Timer.calc_tmod * Timer.tmod_factor + (1 - Timer.tmod_factor) * Timer.deltaT * Timer.wantedFPS; else Timer.deltaT = 1 / Timer.wantedFPS;
	Timer.tmod = Timer.calc_tmod;
};
var Title = function(game) {
	var _g = this;
	this.time = 0;
	this.game = game;
	this.root = new flash_display_Sprite();
	this.root.scaleX = this.root.scaleY = 2;
	game.root.addChild(this.root);
	var but = new flash_display_Sprite();
	but.get_graphics().beginFill(0,0);
	but.get_graphics().drawRect(100,100,100,80);
	but.addEventListener(flash_events_MouseEvent.CLICK,function(_) {
		_g.start();
	});
	but.buttonMode = but.mouseEnabled = true;
	but.addEventListener(flash_events_MouseEvent.MOUSE_MOVE,function(_1) {
		var k = _g.root.get_mouseY() < 140;
		if(_g.load == k && game.hasSave()) {
			Sounds.play("menu");
			_g.load = !k;
		}
	});
	var bmp = new flash_display_Bitmap(openfl_Assets.getBitmapData("title.png"));
	this.root.addChild(bmp);
	this.layer2 = new flash_display_Bitmap(openfl_Assets.getBitmapData("title2.png"));
	this.layer2.bitmapData.floodFill(0,0,0);
	this.root.addChild(this.layer2);
	this.layer3 = new flash_display_Bitmap(openfl_Assets.getBitmapData("title3.png"));
	this.layer3.bitmapData.floodFill(0,0,0);
	this.root.addChild(this.layer3);
	var start = game.makeField("Start",15);
	start.x = 120;
	start.y = 120;
	start.addEventListener(flash_events_MouseEvent.MOUSE_DOWN,$bind(this,this.start_onClick));
	start.mouseEnabled = true;
	this.root.addChild(start);
	var cont = game.makeField("Continue",15);
	cont.x = 120;
	cont.y = 140;
	if(!game.hasSave()) cont.set_textColor(8421504); else {
		cont.mouseEnabled = true;
		cont.addEventListener(flash_events_MouseEvent.MOUSE_DOWN,$bind(this,this.cont_onClick));
	}
	this.root.addChild(cont);
	var quote = game.makeField("A short story of adventure video games evolution",10);
	quote.set_textColor(14207829);
	quote.x = 15;
	quote.y = 80;
	this.root.addChild(quote);
	var copy = game.makeField("(C)1986-2012 NCA",12);
	copy.x = 190;
	copy.y = 188;
	this.root.addChild(copy);
	this.load = game.hasSave();
	this.cursor = new flash_display_Sprite();
	this.cursor.addChild(new flash_display_Bitmap(Entity.sprites[5][0]));
	this.root.addChild(this.cursor);
	this.root.addChild(but);
	this.root.addEventListener(flash_events_Event.ENTER_FRAME,$bind(this,this.update));
	Key.init();
	this.update(null);
};
$hxClasses["Title"] = Title;
Title.__name__ = ["Title"];
Title.prototype = {
	start_onClick: function(_) {
		this.load = false;
		this.start();
	}
	,cont_onClick: function(_) {
		this.load = true;
		this.start();
	}
	,update: function(_) {
		var _g = 0;
		var _g1 = [40,38,90,87,83];
		while(_g < _g1.length) {
			var k = _g1[_g];
			++_g;
			if(Key.isToggled(k) && this.game.hasSave()) {
				Sounds.play("menu");
				this.load = !this.load;
			}
		}
		this.time += 0.2;
		var d2 = this.time * 2;
		if(d2 > 50) d2 = 50 - Math.abs(Math.sin((this.time - 25) * 0.2) * 2.5);
		this.layer2.y = 100 - d2 * 2;
		this.layer2.x = 25 - d2 * 0.5;
		this.layer3.y = Math.sin(this.time * 0.1) * 10;
		this.cursor.x = 105 + Math.sin(this.time) * 2;
		this.cursor.y = 120 + (this.load?20:0);
		var _g2 = 0;
		var _g11 = [69,13,32];
		while(_g2 < _g11.length) {
			var k1 = _g11[_g2];
			++_g2;
			if(Key.isToggled(k1)) {
				haxe_Timer.delay($bind(this,this.start),10);
				return;
			}
		}
	}
	,start: function() {
		if(this.started) return;
		this.started = true;
		if(!this.load) Game.props = Game.DEF_PROPS;
		this.root.stage.focus = this.root.stage;
		this.root.removeEventListener(flash_events_Event.ENTER_FRAME,$bind(this,this.update));
		Tools.remove(this.root);
		this.game.init();
	}
	,__class__: Title
};
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
};
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
};
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
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
};
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
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
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c;
		if((v instanceof Array) && v.__enum__ == null) c = Array; else c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
var Block = $hxClasses["Block"] = { __ename__ : ["Block"], __constructs__ : ["Dark","Field","Tree","Water","BridgeUD","BridgeLR","Bush","RiverBank","Detail","Rock","SavePoint","Sand","SandBank","SandDetail","Cactus","Door","Dungeon","DungeonSoil","DungeonWall","DungeonStat","DungeonStairs","DungeonFakeWall","DungeonPuzzle","MonsterGenerator","FakeTree","DungeonExit","DarkDungeon","Lock","Free","DungeonFakeDark"] };
Block.Dark = ["Dark",0];
Block.Dark.toString = $estr;
Block.Dark.__enum__ = Block;
Block.Field = ["Field",1];
Block.Field.toString = $estr;
Block.Field.__enum__ = Block;
Block.Tree = ["Tree",2];
Block.Tree.toString = $estr;
Block.Tree.__enum__ = Block;
Block.Water = ["Water",3];
Block.Water.toString = $estr;
Block.Water.__enum__ = Block;
Block.BridgeUD = ["BridgeUD",4];
Block.BridgeUD.toString = $estr;
Block.BridgeUD.__enum__ = Block;
Block.BridgeLR = ["BridgeLR",5];
Block.BridgeLR.toString = $estr;
Block.BridgeLR.__enum__ = Block;
Block.Bush = ["Bush",6];
Block.Bush.toString = $estr;
Block.Bush.__enum__ = Block;
Block.RiverBank = ["RiverBank",7];
Block.RiverBank.toString = $estr;
Block.RiverBank.__enum__ = Block;
Block.Detail = ["Detail",8];
Block.Detail.toString = $estr;
Block.Detail.__enum__ = Block;
Block.Rock = ["Rock",9];
Block.Rock.toString = $estr;
Block.Rock.__enum__ = Block;
Block.SavePoint = ["SavePoint",10];
Block.SavePoint.toString = $estr;
Block.SavePoint.__enum__ = Block;
Block.Sand = ["Sand",11];
Block.Sand.toString = $estr;
Block.Sand.__enum__ = Block;
Block.SandBank = ["SandBank",12];
Block.SandBank.toString = $estr;
Block.SandBank.__enum__ = Block;
Block.SandDetail = ["SandDetail",13];
Block.SandDetail.toString = $estr;
Block.SandDetail.__enum__ = Block;
Block.Cactus = ["Cactus",14];
Block.Cactus.toString = $estr;
Block.Cactus.__enum__ = Block;
Block.Door = ["Door",15];
Block.Door.toString = $estr;
Block.Door.__enum__ = Block;
Block.Dungeon = ["Dungeon",16];
Block.Dungeon.toString = $estr;
Block.Dungeon.__enum__ = Block;
Block.DungeonSoil = ["DungeonSoil",17];
Block.DungeonSoil.toString = $estr;
Block.DungeonSoil.__enum__ = Block;
Block.DungeonWall = ["DungeonWall",18];
Block.DungeonWall.toString = $estr;
Block.DungeonWall.__enum__ = Block;
Block.DungeonStat = ["DungeonStat",19];
Block.DungeonStat.toString = $estr;
Block.DungeonStat.__enum__ = Block;
Block.DungeonStairs = ["DungeonStairs",20];
Block.DungeonStairs.toString = $estr;
Block.DungeonStairs.__enum__ = Block;
Block.DungeonFakeWall = ["DungeonFakeWall",21];
Block.DungeonFakeWall.toString = $estr;
Block.DungeonFakeWall.__enum__ = Block;
Block.DungeonPuzzle = ["DungeonPuzzle",22];
Block.DungeonPuzzle.toString = $estr;
Block.DungeonPuzzle.__enum__ = Block;
Block.MonsterGenerator = ["MonsterGenerator",23];
Block.MonsterGenerator.toString = $estr;
Block.MonsterGenerator.__enum__ = Block;
Block.FakeTree = ["FakeTree",24];
Block.FakeTree.toString = $estr;
Block.FakeTree.__enum__ = Block;
Block.DungeonExit = ["DungeonExit",25];
Block.DungeonExit.toString = $estr;
Block.DungeonExit.__enum__ = Block;
Block.DarkDungeon = ["DarkDungeon",26];
Block.DarkDungeon.toString = $estr;
Block.DarkDungeon.__enum__ = Block;
Block.Lock = ["Lock",27];
Block.Lock.toString = $estr;
Block.Lock.__enum__ = Block;
Block.Free = ["Free",28];
Block.Free.toString = $estr;
Block.Free.__enum__ = Block;
Block.DungeonFakeDark = ["DungeonFakeDark",29];
Block.DungeonFakeDark.toString = $estr;
Block.DungeonFakeDark.__enum__ = Block;
var World = function(bmp) {
	this.t = [];
	this.monsters = [];
	this.chests = [];
	this.removed = [];
	this.npcs = [];
	this.removedBitmaps = [];
	var _g = 0;
	while(_g < 98) {
		var x = _g++;
		this.t[x] = [];
		this.removedBitmaps[x] = [];
		this.removed[x] = [];
		var _g1 = 0;
		while(_g1 < 98) {
			var y = _g1++;
			this.t[x][y] = this.decodeColor(bmp,x,y);
		}
	}
	bmp.dispose();
	this.initTiles();
	this.pt = new flash_geom_Point();
	this.p0 = new flash_geom_Point();
	this.bmp = new flash_display_BitmapData(1568,1568,true,0);
	this.shadeM = new flash_geom_Matrix();
	var s0 = new flash_display_Sprite();
	s0.get_graphics().beginFill(-16777216,0.15);
	s0.get_graphics().drawEllipse(1,10,14,8);
	var s1 = new flash_display_Sprite();
	s1.get_graphics().beginFill(-16777216,0.15);
	s1.get_graphics().drawEllipse(2,11,6,5);
	this.shadeSPR = [s0,s1];
};
$hxClasses["World"] = World;
World.__name__ = ["World"];
World.prototype = {
	initTiles: function() {
		this.tiles = Tiles.initTiles(openfl_Assets.getBitmapData("tiles_alpha.png"),16);
	}
	,collide: function(x,y) {
		if(x < 0 || y < 0 || x >= 98 || y >= 98) return true;
		if(this.removed[x][y]) return false;
		var _g = this.t[x][y];
		switch(_g[1]) {
		case 0:case 2:case 3:case 6:case 9:case 14:case 27:case 15:case 26:case 18:case 19:
			return true;
		case 4:case 5:case 16:case 23:
			return false;
		case 1:case 10:case 11:case 28:case 17:case 24:
			return false;
		case 12:case 7:case 8:case 13:case 20:case 21:case 29:case 22:case 25:
			return false;
		}
	}
	,getSoil: function(x,y,rec) {
		if(rec == null) rec = false;
		if(x < 0 || y < 0 || x >= 98 || y >= 98) return Block.Field;
		var b = this.t[x][y];
		switch(b[1]) {
		case 0:case 2:case 6:case 9:case 10:case 14:case 27:case 28:case 15:case 16:case 24:
			var cur = null;
			if(!rec) {
				var s = this.getSoil(x,y - 1,true);
				if(cur == null || s != null && s[1] < cur[1]) cur = s;
				var s1 = this.getSoil(x,y + 1,true);
				if(cur == null || s1 != null && s1[1] < cur[1]) cur = s1;
				var s2 = this.getSoil(x - 1,y,true);
				if(cur == null || s2 != null && s2[1] < cur[1]) cur = s2;
				var s3 = this.getSoil(x + 1,y,true);
				if(cur == null || s3 != null && s3[1] < cur[1]) cur = s3;
				if(cur == null) cur = Block.Field;
			}
			return cur;
		case 5:case 4:case 3:
			if(rec) return null; else return Block.Water;
			break;
		case 1:case 11:case 17:
			return b;
		case 18:case 19:case 20:case 21:case 22:case 23:case 25:
			return Block.DungeonSoil;
		case 8:case 7:case 12:case 13:
			return null;
		case 26:case 29:
			return null;
		}
	}
	,remove: function(x,y) {
		if(this.removed[x][y]) return false;
		this.removed[x][y] = true;
		Game.props.rem.push(x + (y + (Game.props.dungeon?98:0)) * 98);
		Sounds.play("open");
		this.details = false;
		this.drawPos(x,y);
		this.details = true;
		this.drawPos(x,y);
		var b = this.removedBitmaps[x][y];
		if(b != null) Part.explode(b,x * 16,y * 16);
		return true;
	}
	,getPos: function(b) {
		var pos = [];
		var _g = 0;
		while(_g < 98) {
			var x = _g++;
			var _g1 = 0;
			while(_g1 < 98) {
				var y = _g1++;
				if(this.t[x][y] == b) pos.push({ x : x, y : y});
			}
		}
		return pos;
	}
	,draw: function() {
		var t0 = flash_Lib.getTimer();
		this.bmp.lock();
		this.bmp.fillRect(this.bmp.rect,-16777216);
		this.rnd = new Rand(42);
		this.details = false;
		var _g = 0;
		while(_g < 98) {
			var x = _g++;
			var _g1 = 0;
			while(_g1 < 98) {
				var y = _g1++;
				this.drawPos(x,y);
			}
		}
		this.details = true;
		var _g2 = 0;
		while(_g2 < 98) {
			var x1 = _g2++;
			var _g11 = 0;
			while(_g11 < 98) {
				var y1 = _g11++;
				this.drawPos(x1,y1);
			}
		}
		this.bmp.unlock();
	}
	,drawPos: function(x,y) {
		if(!this.details) {
			var b = this.getSoil(x,y);
			if(b == null) return;
			this.putBlock(x,y,b);
			switch(b[1]) {
			case 3:
				var _g = this.getSoil(x,y - 1);
				switch(_g[1]) {
				case 3:
					break;
				case 11:
					this.putSingle(x,y,Block.SandBank,0);
					break;
				default:
					this.putSingle(x,y,Block.RiverBank,0);
				}
				var s;
				if((s = this.getSoil(x + 1,y)) != Block.Water) this.putSingle(x,y,s == Block.Sand?Block.SandBank:Block.RiverBank,1);
				if((s = this.getSoil(x - 1,y)) != Block.Water) this.putSingle(x,y,s == Block.Sand?Block.SandBank:Block.RiverBank,2);
				break;
			case 1:
				if(this.getSoil(x,y - 1) == Block.Sand) this.putSingle(x,y,Block.SandBank,0);
				if(this.getSoil(x + 1,y) == Block.Sand) this.putSingle(x,y,Block.SandBank,1);
				if(this.getSoil(x - 1,y) == Block.Sand) this.putSingle(x,y,Block.SandBank,2);
				if(this.getSoil(x,y + 1) == Block.Sand) this.putSingle(x,y,Block.SandBank,3);
				break;
			default:
			}
		} else {
			var b1 = this.t[x][y];
			switch(b1[1]) {
			case 1:
				if(this.rnd.random(3) == 0) this.putBlock(x,y,Block.Detail,this.rnd.random(7) - 3,-this.rnd.random(4));
				break;
			case 11:
				if(this.rnd.random(3) == 0) this.putBlock(x,y,Block.SandDetail,this.rnd.random(7) - 3,-this.rnd.random(4));
				break;
			case 2:
				this.putBlock(x,y,b1,this.rnd.random(5) - 2,-this.rnd.random(3),0,true);
				break;
			case 9:case 6:
				this.putBlock(x,y,b1,this.rnd.random(5) - 2,-this.rnd.random(3),0);
				break;
			case 14:
				this.putBlock(x,y,b1,this.rnd.random(5) - 2,-this.rnd.random(3),1);
				break;
			case 0:
				if(this.rnd.random(3) == 0) this.putBlock(x,y,Block.Tree,this.rnd.random(5) - 2,this.rnd.random(2),0,true);
				break;
			case 25:
				this.putBlock(x,y,Block.DungeonStairs);
				break;
			case 5:case 4:case 10:case 15:case 16:case 19:case 20:case 18:case 21:case 22:case 23:case 24:
				this.putBlock(x,y,b1);
				break;
			default:
			}
		}
	}
	,putSingle: function(x,y,b,k) {
		var tl = this.tiles[b[1] - 1];
		if(tl == null || tl.length == 0) throw "Not tile for " + Std.string(b);
		this.put(x * 16,y * 16,tl[k % tl.length]);
	}
	,putBlock: function(x,y,b,dx,dy,shade,mrnd) {
		if(mrnd == null) mrnd = false;
		if(shade == null) shade = -1;
		if(dy == null) dy = 0;
		if(dx == null) dx = 0;
		var tx = x * 16 + dx;
		var ty = y * 16 + dy;
		var rem = this.details && this.removed[x][y];
		if(shade >= 0 && !rem) {
			this.shadeM.tx = tx;
			this.shadeM.ty = ty;
			this.bmp.draw(this.shadeSPR[shade],this.shadeM);
		}
		var tl = this.tiles[b[1] - 1];
		var t;
		if(tl == null) t = null; else t = tl[this.min(this.rnd.random(tl.length),mrnd?this.rnd.random(tl.length):99)];
		if(t == null || tl.length == 0) throw "Not tile for " + Std.string(b);
		if(this.details && rem) this.removedBitmaps[x][y] = t; else this.put(tx,ty,t);
	}
	,min: function(x,y) {
		if(x < y) return x; else return y;
	}
	,put: function(x,y,b) {
		this.pt.x = x;
		this.pt.y = y;
		this.bmp.copyPixels(b,b.rect,this.pt,null,null,true);
	}
	,decodeColor: function(bmp,x,y) {
		var col = bmp.getPixel(x,y);
		switch(col) {
		case 0:case 14287527:
			return Block.Dark;
		case 1010945:
			return Block.Tree;
		case 6618445:
			return Block.Field;
		case 6665467:
			return Block.Water;
		case 7941377:
			return Block.BridgeUD;
		case 15094784:
			return Block.BridgeLR;
		case 2021890:
			return Block.Bush;
		case 14287365:
			this.monsters.push({ x : x, y : y, id : EKind.Monster});
			return this.decodeColor(bmp,x,y - 1);
		case 16591662:
			this.monsters.push({ x : x, y : y, id : EKind.Bat});
			return this.decodeColor(bmp,x,y - 1);
		case 10395294:
			return Block.Rock;
		case 146138:
			return Block.SavePoint;
		case 15269197:
			return Block.Sand;
		case 7324696:
			return Block.Cactus;
		case 16600531:
			this.npcs.push({ x : x, y : y, e : null});
			return Block.Free;
		case 12884248:
			return Block.Door;
		case 5791580:
			return Block.Dungeon;
		case 920334:
			return Block.DarkDungeon;
		case 9079434:
			return Block.DungeonSoil;
		case 12966086:
			return Block.DungeonWall;
		case 5141584:
			return Block.DungeonStat;
		case 10907246:
			return Block.DungeonStairs;
		case 10945028:
			this.monsters.push({ x : x, y : y, id : EKind.Knight});
			return this.decodeColor(bmp,x,y - 1);
		case 9613223:
			return Block.DungeonFakeWall;
		case 3747129:
			return Block.DungeonFakeDark;
		case 5111226:
			return Block.DungeonPuzzle;
		case 9910530:
			return Block.MonsterGenerator;
		case 1002753:
			return Block.FakeTree;
		case 10140828:
			return Block.DungeonExit;
		default:
			if((col & 16776960) == 16776960) {
				this.chests.push({ x : x, y : y, e : null, id : Type.createEnumIndex(ChestKind,col & 255)});
				return Block.Field;
			}
			throw "Unknown color 0x" + StringTools.hex(col,6) + " at (" + x + "," + y + ")";
		}
	}
	,__class__: World
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
flash_display_Bitmap.__name__ = ["flash","display","Bitmap"];
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
flash_display_BitmapData.__name__ = ["flash","display","BitmapData"];
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
flash_display_BitmapData.fromCanvas = function(canvas,transparent) {
	if(transparent == null) transparent = true;
	var bitmapData = new flash_display_BitmapData(0,0,transparent);
	bitmapData.__createCanvas(canvas.width,canvas.height);
	bitmapData.__sourceContext.drawImage(canvas,0,0);
	return bitmapData;
};
flash_display_BitmapData.prototype = {
	applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
		if(!this.__valid || sourceBitmapData == null || !sourceBitmapData.__valid) return;
		this.__convertToCanvas();
		this.__createImageData();
		sourceBitmapData.__convertToCanvas();
		sourceBitmapData.__createImageData();
		filter.__applyFilter(this.__sourceImageData,sourceBitmapData.__sourceImageData,sourceRect,destPoint);
		this.__sourceImageDataChanged = true;
	}
	,clone: function() {
		if(!this.__valid) return new flash_display_BitmapData(this.width,this.height,this.transparent); else if(this.__sourceImage != null) return flash_display_BitmapData.fromImage(this.__sourceImage,this.transparent); else return flash_display_BitmapData.fromCanvas(this.__sourceCanvas,this.transparent);
	}
	,copyChannel: function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
		sourceRect = this.__clipRect(sourceRect);
		if(!this.__valid || sourceRect == null) return;
		if(destChannel == 8 && !this.transparent) return;
		if(sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.width) sourceRect.width = sourceBitmapData.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.height) sourceRect.height = sourceBitmapData.height - sourceRect.y;
		var destIdx = -1;
		if(destChannel == 8) destIdx = 3; else if(destChannel == 4) destIdx = 2; else if(destChannel == 2) destIdx = 1; else if(destChannel == 1) destIdx = 0; else throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
		var srcIdx = -1;
		if(sourceChannel == 8) srcIdx = 3; else if(sourceChannel == 4) srcIdx = 2; else if(sourceChannel == 2) srcIdx = 1; else if(sourceChannel == 1) srcIdx = 0; else throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
		this.__convertToCanvas();
		this.__createImageData();
		var data = this.__sourceImageData.data;
		sourceBitmapData.__convertToCanvas();
		var sourceData = sourceBitmapData.__sourceContext.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height).data;
		var pos = 4 * (Math.round(destPoint.x) + Math.round(destPoint.y) * this.width) + destIdx;
		var boundR = Math.round(4 * (destPoint.x + sourceRect.width));
		while(srcIdx < sourceData.length) {
			if(pos % (this.width * 4) > boundR - 1) pos += this.width * 4 - boundR;
			data[pos] = sourceData[srcIdx];
			pos += 4;
			srcIdx += 4;
		}
		this.__sourceImageDataChanged = true;
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(!this.__valid) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.width) sourceRect.width = sourceBitmapData.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.height) sourceRect.height = sourceBitmapData.height - sourceRect.y;
		if(alphaBitmapData != null && alphaBitmapData.transparent) {
			if(alphaPoint == null) alphaPoint = new flash_geom_Point();
			var tempData = this.clone();
			tempData.copyChannel(alphaBitmapData,new flash_geom_Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new flash_geom_Point(sourceRect.x,sourceRect.y),8,8);
			sourceBitmapData = tempData;
		}
		this.__syncImageData();
		if(!mergeAlpha) {
			if(this.transparent && sourceBitmapData.transparent) this.__sourceContext.clearRect(destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
		}
		if(sourceBitmapData.__sourceImage != null) this.__sourceContext.drawImage(sourceBitmapData.__sourceImage,sourceRect.x | 0,sourceRect.y | 0,sourceRect.width | 0,sourceRect.height | 0,destPoint.x | 0,destPoint.y | 0,sourceRect.width | 0,sourceRect.height | 0); else if(sourceBitmapData.__sourceCanvas != null) this.__sourceContext.drawImage(sourceBitmapData.__sourceCanvas,sourceRect.x | 0,sourceRect.y | 0,sourceRect.width | 0,sourceRect.height | 0,destPoint.x | 0,destPoint.y | 0,sourceRect.width | 0,sourceRect.height | 0);
	}
	,dispose: function() {
		this.__sourceImage = null;
		this.__sourceCanvas = null;
		this.__sourceContext = null;
		this.width = 0;
		this.height = 0;
		this.__valid = false;
	}
	,draw: function(source,matrix,colorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		if(!this.__valid) return;
		this.__convertToCanvas();
		this.__syncImageData();
		var renderSession = new flash_display_RenderSession();
		renderSession.context = this.__sourceContext;
		renderSession.roundPixels = true;
		var matrixCache = source.__worldTransform;
		if(matrix != null) source.__worldTransform = matrix; else source.__worldTransform = new flash_geom_Matrix();
		source.__updateChildren();
		source.__renderCanvas(renderSession);
		source.__worldTransform = matrixCache;
		this.__sourceContext.setTransform(1,0,0,1,0,0);
	}
	,fillRect: function(rect,color) {
		rect = this.__clipRect(rect);
		if(!this.__valid || rect == null) return;
		this.__convertToCanvas();
		this.__syncImageData();
		if(rect.x == 0 && rect.y == 0 && rect.width == this.width && rect.height == this.height) {
			if(this.transparent && (color & -16777216) == 0) {
				this.__sourceCanvas.width = this.width;
				return;
			}
		}
		this.__fillRect(rect,color);
	}
	,floodFill: function(x,y,color) {
		if(!this.__valid) return;
		this.__convertToCanvas();
		this.__createImageData();
		var data = this.__sourceImageData.data;
		var offset = y * (this.width * 4) + x * 4;
		var hitColor = data[offset] << 24;
		hitColor |= data[offset + 1] << 16;
		hitColor |= data[offset + 2] << 8;
		if(this.transparent) hitColor |= data[offset + 3];
		var dx = [0,-1,1,0];
		var dy = [-1,0,0,1];
		var queue = new Array();
		queue.push(x);
		queue.push(y);
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		var a;
		if(this.transparent) a = (color & -16777216) >>> 24; else a = 255;
		while(queue.length > 0) {
			var curPointY = queue.pop();
			var curPointX = queue.pop();
			var _g = 0;
			while(_g < 4) {
				var i = _g++;
				var nextPointX = curPointX + dx[i];
				var nextPointY = curPointY + dy[i];
				if(nextPointX < 0 || nextPointY < 0 || nextPointX >= this.width || nextPointY >= this.height) continue;
				var nextPointOffset = (nextPointY * this.width + nextPointX) * 4;
				if(data[nextPointOffset] == (hitColor >> 24 & 255) && data[nextPointOffset + 1] == (hitColor >> 16 & 255) && data[nextPointOffset + 2] == (hitColor >> 8 & 255) && data[nextPointOffset + 3] == (hitColor & 255)) {
					data[nextPointOffset] = r;
					data[nextPointOffset + 1] = g;
					data[nextPointOffset + 2] = b;
					data[nextPointOffset + 3] = a;
					queue.push(nextPointX);
					queue.push(nextPointY);
				}
			}
		}
		this.__sourceImageDataChanged = true;
	}
	,getPixel: function(x,y) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return 0;
		this.__convertToCanvas();
		this.__createImageData();
		var offset = 4 * y * this.width + x * 4;
		return this.__sourceImageData.data[offset] << 16 | this.__sourceImageData.data[offset + 1] << 8 | this.__sourceImageData.data[offset + 2];
	}
	,getPixel32: function(x,y) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return 0;
		this.__convertToCanvas();
		this.__createImageData();
		return this.__getInt32(4 * y * this.width + x * 4,this.__sourceImageData.data);
	}
	,lock: function() {
	}
	,setPixel32: function(x,y,color) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return;
		this.__convertToCanvas();
		this.__createImageData();
		var offset = 4 * y * this.width + x * 4;
		this.__sourceImageData.data[offset] = (color & 16711680) >>> 16;
		this.__sourceImageData.data[offset + 1] = (color & 65280) >>> 8;
		this.__sourceImageData.data[offset + 2] = color & 255;
		if(this.transparent) this.__sourceImageData.data[offset + 3] = (color & -16777216) >>> 24; else this.__sourceImageData.data[offset + 3] = 255;
		this.__sourceImageDataChanged = true;
	}
	,unlock: function(changeRect) {
	}
	,__clipRect: function(r) {
		if(r == null) return null;
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= this.width) {
			r.width -= r.x + r.width - this.width;
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= this.height) {
			r.height -= r.y + r.height - this.height;
			if(r.height <= 0) return null;
		}
		return r;
	}
	,__convertToCanvas: function() {
		if(this.__loading) return;
		if(this.__sourceImage != null) {
			if(this.__sourceCanvas == null) {
				this.__createCanvas(this.__sourceImage.width,this.__sourceImage.height);
				this.__sourceContext.drawImage(this.__sourceImage,0,0);
			}
			this.__sourceImage = null;
		}
	}
	,__createCanvas: function(width,height) {
		this.__sourceCanvas = window.document.createElement("canvas");
		this.__sourceCanvas.width = width;
		this.__sourceCanvas.height = height;
		this.__sourceContext = this.__sourceCanvas.getContext("2d");
		this.__sourceContext.mozImageSmoothingEnabled = false;
		this.__sourceContext.webkitImageSmoothingEnabled = false;
		this.__sourceContext.imageSmoothingEnabled = false;
		this.__valid = true;
	}
	,__createImageData: function() {
		if(this.__sourceImageData == null) this.__sourceImageData = this.__sourceContext.getImageData(0,0,this.width,this.height);
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
	,__getInt32: function(offset,data) {
		return (this.transparent?data[offset + 3]:255) << 24 | data[offset] << 16 | data[offset + 1] << 8 | data[offset + 2];
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__valid) return;
		this.__syncImageData();
		var context = renderSession.context;
		if(this.__worldTransform == null) this.__worldTransform = new flash_geom_Matrix();
		context.globalAlpha = 1;
		var transform = this.__worldTransform;
		if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		if(this.__sourceImage != null) context.drawImage(this.__sourceImage,0,0); else context.drawImage(this.__sourceCanvas,0,0);
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
	,__updateChildren: function() {
	}
	,__class__: flash_display_BitmapData
};
var flash_display_BlendMode = $hxClasses["flash.display.BlendMode"] = { __ename__ : ["flash","display","BlendMode"], __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] };
flash_display_BlendMode.ADD = ["ADD",0];
flash_display_BlendMode.ADD.toString = $estr;
flash_display_BlendMode.ADD.__enum__ = flash_display_BlendMode;
flash_display_BlendMode.ALPHA = ["ALPHA",1];
flash_display_BlendMode.ALPHA.toString = $estr;
flash_display_BlendMode.ALPHA.__enum__ = flash_display_BlendMode;
flash_display_BlendMode.DARKEN = ["DARKEN",2];
flash_display_BlendMode.DARKEN.toString = $estr;
flash_display_BlendMode.DARKEN.__enum__ = flash_display_BlendMode;
flash_display_BlendMode.DIFFERENCE = ["DIFFERENCE",3];
flash_display_BlendMode.DIFFERENCE.toString = $estr;
flash_display_BlendMode.DIFFERENCE.__enum__ = flash_display_BlendMode;
flash_display_BlendMode.ERASE = ["ERASE",4];
flash_display_BlendMode.ERASE.toString = $estr;
flash_display_BlendMode.ERASE.__enum__ = flash_display_BlendMode;
flash_display_BlendMode.HARDLIGHT = ["HARDLIGHT",5];
flash_display_BlendMode.HARDLIGHT.toString = $estr;
flash_display_BlendMode.HARDLIGHT.__enum__ = flash_display_BlendMode;
flash_display_BlendMode.INVERT = ["INVERT",6];
flash_display_BlendMode.INVERT.toString = $estr;
flash_display_BlendMode.INVERT.__enum__ = flash_display_BlendMode;
flash_display_BlendMode.LAYER = ["LAYER",7];
flash_display_BlendMode.LAYER.toString = $estr;
flash_display_BlendMode.LAYER.__enum__ = flash_display_BlendMode;
flash_display_BlendMode.LIGHTEN = ["LIGHTEN",8];
flash_display_BlendMode.LIGHTEN.toString = $estr;
flash_display_BlendMode.LIGHTEN.__enum__ = flash_display_BlendMode;
flash_display_BlendMode.MULTIPLY = ["MULTIPLY",9];
flash_display_BlendMode.MULTIPLY.toString = $estr;
flash_display_BlendMode.MULTIPLY.__enum__ = flash_display_BlendMode;
flash_display_BlendMode.NORMAL = ["NORMAL",10];
flash_display_BlendMode.NORMAL.toString = $estr;
flash_display_BlendMode.NORMAL.__enum__ = flash_display_BlendMode;
flash_display_BlendMode.OVERLAY = ["OVERLAY",11];
flash_display_BlendMode.OVERLAY.toString = $estr;
flash_display_BlendMode.OVERLAY.__enum__ = flash_display_BlendMode;
flash_display_BlendMode.SCREEN = ["SCREEN",12];
flash_display_BlendMode.SCREEN.toString = $estr;
flash_display_BlendMode.SCREEN.__enum__ = flash_display_BlendMode;
flash_display_BlendMode.SUBTRACT = ["SUBTRACT",13];
flash_display_BlendMode.SUBTRACT.toString = $estr;
flash_display_BlendMode.SUBTRACT.__enum__ = flash_display_BlendMode;
var flash_display_Graphics = function() {
	this.__commands = new Array();
	this.__halfStrokeWidth = 0;
	this.__positionX = 0;
	this.__positionY = 0;
};
$hxClasses["flash.display.Graphics"] = flash_display_Graphics;
flash_display_Graphics.__name__ = ["flash","display","Graphics"];
flash_display_Graphics.prototype = {
	beginFill: function(rgb,alpha) {
		if(alpha == null) alpha = 1;
		this.__commands.push(flash_display_DrawCommand.BeginFill(rgb & 16777215,alpha));
	}
	,clear: function() {
		this.__commands = new Array();
		this.__halfStrokeWidth = 0;
		if(this.__bounds != null) this.__dirty = true;
		this.__bounds = null;
	}
	,drawCircle: function(x,y,radius) {
		if(radius <= 0) return;
		this.__inflateBounds(x - radius - this.__halfStrokeWidth,y - radius - this.__halfStrokeWidth);
		this.__inflateBounds(x + radius + this.__halfStrokeWidth,y + radius + this.__halfStrokeWidth);
		this.__commands.push(flash_display_DrawCommand.DrawCircle(x,y,radius));
		this.__dirty = true;
	}
	,drawEllipse: function(x,y,width,height) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__halfStrokeWidth,y - this.__halfStrokeWidth);
		this.__inflateBounds(x + width + this.__halfStrokeWidth,y + height + this.__halfStrokeWidth);
		this.__commands.push(flash_display_DrawCommand.DrawEllipse(x,y,width,height));
		this.__dirty = true;
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
var flash_display_DrawCommand = $hxClasses["flash.display.DrawCommand"] = { __ename__ : ["flash","display","DrawCommand"], __constructs__ : ["BeginBitmapFill","BeginFill","CurveTo","DrawCircle","DrawEllipse","DrawRect","DrawTiles","EndFill","LineStyle","LineTo","MoveTo"] };
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
var flash_display_LineScaleMode = $hxClasses["flash.display.LineScaleMode"] = { __ename__ : ["flash","display","LineScaleMode"], __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] };
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
flash_display_Loader.__name__ = ["flash","display","Loader"];
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
flash_display_LoaderInfo.__name__ = ["flash","display","LoaderInfo"];
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
flash_display_MovieClip.__name__ = ["flash","display","MovieClip"];
flash_display_MovieClip.__super__ = flash_display_Sprite;
flash_display_MovieClip.prototype = $extend(flash_display_Sprite.prototype,{
	__class__: flash_display_MovieClip
});
var flash_display_PixelSnapping = $hxClasses["flash.display.PixelSnapping"] = { __ename__ : ["flash","display","PixelSnapping"], __constructs__ : ["NEVER","AUTO","ALWAYS"] };
flash_display_PixelSnapping.NEVER = ["NEVER",0];
flash_display_PixelSnapping.NEVER.toString = $estr;
flash_display_PixelSnapping.NEVER.__enum__ = flash_display_PixelSnapping;
flash_display_PixelSnapping.AUTO = ["AUTO",1];
flash_display_PixelSnapping.AUTO.toString = $estr;
flash_display_PixelSnapping.AUTO.__enum__ = flash_display_PixelSnapping;
flash_display_PixelSnapping.ALWAYS = ["ALWAYS",2];
flash_display_PixelSnapping.ALWAYS.toString = $estr;
flash_display_PixelSnapping.ALWAYS.__enum__ = flash_display_PixelSnapping;
var flash_display_Shape = function() {
	flash_display_DisplayObject.call(this);
};
$hxClasses["flash.display.Shape"] = flash_display_Shape;
flash_display_Shape.__name__ = ["flash","display","Shape"];
flash_display_Shape.__super__ = flash_display_DisplayObject;
flash_display_Shape.prototype = $extend(flash_display_DisplayObject.prototype,{
	__getBounds: function(rect,matrix) {
		if(this.__graphics != null) this.__graphics.__getBounds(rect,this.__worldTransform);
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(this.visible && this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__worldTransform)) {
			if(!interactiveOnly) stack.push(this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable) return;
		if(this.__graphics != null) {
			this.__graphics.__render();
			if(this.__graphics.__canvas != null) {
				var context = renderSession.context;
				context.globalAlpha = this.__worldAlpha;
				var transform = this.__worldTransform;
				if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
				context.drawImage(this.__graphics.__canvas,this.__graphics.__bounds.x,this.__graphics.__bounds.y);
			}
		}
	}
	,__class__: flash_display_Shape
});
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
flash_display_Stage.__name__ = ["flash","display","Stage"];
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
flash_display_RenderSession.__name__ = ["flash","display","RenderSession"];
flash_display_RenderSession.prototype = {
	__class__: flash_display_RenderSession
};
var flash_display_MaskManager = function(renderSession) {
	this.renderSession = renderSession;
};
$hxClasses["flash.display.MaskManager"] = flash_display_MaskManager;
flash_display_MaskManager.__name__ = ["flash","display","MaskManager"];
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
var flash_errors_Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
};
$hxClasses["flash.errors.Error"] = flash_errors_Error;
flash_errors_Error.__name__ = ["flash","errors","Error"];
flash_errors_Error.prototype = {
	toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,__class__: flash_errors_Error
};
var flash_events_Event = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
};
$hxClasses["flash.events.Event"] = flash_events_Event;
flash_events_Event.__name__ = ["flash","events","Event"];
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
flash_events_TextEvent.__name__ = ["flash","events","TextEvent"];
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
flash_events_ErrorEvent.__name__ = ["flash","events","ErrorEvent"];
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
flash_events__$EventDispatcher_Listener.__name__ = ["flash","events","_EventDispatcher","Listener"];
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
flash_events_HTTPStatusEvent.__name__ = ["flash","events","HTTPStatusEvent"];
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
flash_events_IOErrorEvent.__name__ = ["flash","events","IOErrorEvent"];
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
flash_events_KeyboardEvent.__name__ = ["flash","events","KeyboardEvent"];
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
flash_events_MouseEvent.__name__ = ["flash","events","MouseEvent"];
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
flash_events_ProgressEvent.__name__ = ["flash","events","ProgressEvent"];
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
flash_events_SecurityErrorEvent.__name__ = ["flash","events","SecurityErrorEvent"];
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
flash_events_TouchEvent.__name__ = ["flash","events","TouchEvent"];
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
var flash_external_ExternalInterface = function() { };
$hxClasses["flash.external.ExternalInterface"] = flash_external_ExternalInterface;
flash_external_ExternalInterface.__name__ = ["flash","external","ExternalInterface"];
flash_external_ExternalInterface.call = function(functionName,p1,p2,p3,p4,p5) {
	var callResponse = null;
	if(p1 == null) callResponse = eval(functionName)(); else if(p2 == null) callResponse = eval(functionName)(p1); else if(p3 == null) callResponse = eval(functionName)(p1,p2); else if(p4 == null) callResponse = eval(functionName)(p1,p2,p3); else if(p5 == null) callResponse = eval(functionName)(p1,p2,p3,p4); else callResponse = eval(functionName)(p1,p2,p3,p4,p5);
	return callResponse;
};
var flash_geom_ColorTransform = function() { };
$hxClasses["flash.geom.ColorTransform"] = flash_geom_ColorTransform;
flash_geom_ColorTransform.__name__ = ["flash","geom","ColorTransform"];
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
flash_geom_Matrix.__name__ = ["flash","geom","Matrix"];
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
flash_geom_Point.__name__ = ["flash","geom","Point"];
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
flash_geom_Rectangle.__name__ = ["flash","geom","Rectangle"];
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
flash_media_Sound.__name__ = ["flash","media","Sound"];
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
	,play: function(startTime,loops,sndTransform) {
		if(loops == null) loops = 0;
		if(startTime == null) startTime = 0.0;
		if(sndTransform == null) sndTransform = new flash_media_SoundTransform(1,0);
		if(this.__buffer) loops++;
		return new flash_media_SoundChannel(this.__howl,startTime,loops,sndTransform);
	}
	,howl_onLoad: function(_) {
		this.dispatchEvent(new flash_events_Event(flash_events_Event.COMPLETE));
	}
	,howl_onLoadError: function(_) {
		this.dispatchEvent(new flash_events_IOErrorEvent(flash_events_IOErrorEvent.IO_ERROR));
	}
	,__class__: flash_media_Sound
});
var flash_media_SoundChannel = function(howl,startTime,loops,soundTransform) {
	flash_events_EventDispatcher.call(this,this);
	this.__loop = loops > 0;
	this.__soundTransform = soundTransform;
	this.__howl = howl;
	this.__howl.on("end",$bind(this,this.howl_onEnd));
	this.__howl.play(null,$bind(this,this.howl_onPlay));
};
$hxClasses["flash.media.SoundChannel"] = flash_media_SoundChannel;
flash_media_SoundChannel.__name__ = ["flash","media","SoundChannel"];
flash_media_SoundChannel.__super__ = flash_events_EventDispatcher;
flash_media_SoundChannel.prototype = $extend(flash_events_EventDispatcher.prototype,{
	__dispose: function() {
		if(this.__soundID != null && this.__howl != null) {
			this.__howl.off("end",$bind(this,this.howl_onEnd));
			this.__howl.stop(this.__soundID);
			this.__howl = null;
		}
	}
	,howl_onEnd: function(_) {
		if(!this.__loop) {
			this.__dispose();
			this.dispatchEvent(new flash_events_Event(flash_events_Event.SOUND_COMPLETE));
		}
	}
	,howl_onPlay: function(soundID) {
		this.__soundID = soundID;
		if(this.__stopped) this.__dispose(); else {
			this.__howl.volume(this.__soundTransform.volume,this.__soundID);
			this.__howl.pos(this.__soundTransform.pan,this.__soundID);
			if(this.__loop) this.__howl.loop(true);
		}
	}
	,__class__: flash_media_SoundChannel
});
var flash_media_SoundLoaderContext = function() { };
$hxClasses["flash.media.SoundLoaderContext"] = flash_media_SoundLoaderContext;
flash_media_SoundLoaderContext.__name__ = ["flash","media","SoundLoaderContext"];
var flash_media_SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
	this.volume = vol;
	this.pan = panning;
	this.leftToLeft = 0;
	this.leftToRight = 0;
	this.rightToLeft = 0;
	this.rightToRight = 0;
};
$hxClasses["flash.media.SoundTransform"] = flash_media_SoundTransform;
flash_media_SoundTransform.__name__ = ["flash","media","SoundTransform"];
flash_media_SoundTransform.prototype = {
	__class__: flash_media_SoundTransform
};
var flash_net_SharedObject = function() {
	flash_events_EventDispatcher.call(this);
};
$hxClasses["flash.net.SharedObject"] = flash_net_SharedObject;
flash_net_SharedObject.__name__ = ["flash","net","SharedObject"];
flash_net_SharedObject.getLocal = function(name,localPath,secure) {
	if(secure == null) secure = false;
	if(localPath == null) localPath = window.location.href;
	var so = new flash_net_SharedObject();
	so.__key = localPath + ":" + name;
	var rawData = null;
	try {
		rawData = flash_net_SharedObject.__getLocalStorage().getItem(so.__key);
	} catch( e ) {
	}
	so.data = { };
	if(rawData != null && rawData != "") {
		var unserializer = new haxe_Unserializer(rawData);
		unserializer.setResolver({ resolveEnum : Type.resolveEnum, resolveClass : flash_net_SharedObject.resolveClass});
		so.data = unserializer.unserialize();
	}
	if(so.data == null) so.data = { };
	return so;
};
flash_net_SharedObject.__getLocalStorage = function() {
	var res = js_Browser.getLocalStorage();
	if(res == null) throw new flash_errors_Error("SharedObject not supported");
	return res;
};
flash_net_SharedObject.resolveClass = function(name) {
	if(name != null) return Type.resolveClass(StringTools.replace(StringTools.replace(name,"jeash.","flash."),"browser.","flash."));
	return null;
};
flash_net_SharedObject.__super__ = flash_events_EventDispatcher;
flash_net_SharedObject.prototype = $extend(flash_events_EventDispatcher.prototype,{
	flush: function() {
		var data = haxe_Serializer.run(this.data);
		try {
			flash_net_SharedObject.__getLocalStorage().removeItem(this.__key);
			flash_net_SharedObject.__getLocalStorage().setItem(this.__key,data);
		} catch( e ) {
			return flash_net_SharedObjectFlushStatus.PENDING;
		}
		return flash_net_SharedObjectFlushStatus.FLUSHED;
	}
	,setProperty: function(propertyName,value) {
		if(this.data != null) this.data[propertyName] = value;
	}
	,__class__: flash_net_SharedObject
});
var flash_net_SharedObjectFlushStatus = $hxClasses["flash.net.SharedObjectFlushStatus"] = { __ename__ : ["flash","net","SharedObjectFlushStatus"], __constructs__ : ["FLUSHED","PENDING"] };
flash_net_SharedObjectFlushStatus.FLUSHED = ["FLUSHED",0];
flash_net_SharedObjectFlushStatus.FLUSHED.toString = $estr;
flash_net_SharedObjectFlushStatus.FLUSHED.__enum__ = flash_net_SharedObjectFlushStatus;
flash_net_SharedObjectFlushStatus.PENDING = ["PENDING",1];
flash_net_SharedObjectFlushStatus.PENDING.toString = $estr;
flash_net_SharedObjectFlushStatus.PENDING.__enum__ = flash_net_SharedObjectFlushStatus;
var flash_net_URLLoader = function() { };
$hxClasses["flash.net.URLLoader"] = flash_net_URLLoader;
flash_net_URLLoader.__name__ = ["flash","net","URLLoader"];
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
var flash_net_URLLoaderDataFormat = $hxClasses["flash.net.URLLoaderDataFormat"] = { __ename__ : ["flash","net","URLLoaderDataFormat"], __constructs__ : ["BINARY","TEXT","VARIABLES"] };
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
flash_net_URLRequest.__name__ = ["flash","net","URLRequest"];
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
flash_net_URLRequestHeader.__name__ = ["flash","net","URLRequestHeader"];
flash_net_URLRequestHeader.prototype = {
	__class__: flash_net_URLRequestHeader
};
var flash_net_URLRequestMethod = function() { };
$hxClasses["flash.net.URLRequestMethod"] = flash_net_URLRequestMethod;
flash_net_URLRequestMethod.__name__ = ["flash","net","URLRequestMethod"];
var flash_net_URLVariables = function() { };
$hxClasses["flash.net.URLVariables"] = flash_net_URLVariables;
flash_net_URLVariables.__name__ = ["flash","net","URLVariables"];
var flash_system_ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = flash_system_ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.ApplicationDomain"] = flash_system_ApplicationDomain;
flash_system_ApplicationDomain.__name__ = ["flash","system","ApplicationDomain"];
flash_system_ApplicationDomain.prototype = {
	__class__: flash_system_ApplicationDomain
};
var flash_text_Font = function() { };
$hxClasses["flash.text.Font"] = flash_text_Font;
flash_text_Font.__name__ = ["flash","text","Font"];
var flash_text_GridFitType = $hxClasses["flash.text.GridFitType"] = { __ename__ : ["flash","text","GridFitType"], __constructs__ : ["NONE","PIXEL","SUBPIXEL"] };
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
flash_text_TextField.__name__ = ["flash","text","TextField"];
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
	,get_defaultTextFormat: function() {
		return this.__textFormat.clone();
	}
	,set_defaultTextFormat: function(value) {
		this.__textFormat = flash_text_TextField.__defaultTextFormat.clone();
		this.__textFormat.__merge(value);
		return value;
	}
	,get_height: function() {
		return this.__height * this.scaleY;
	}
	,set_height: function(value) {
		if(this.scaleY != 1 || value != this.__height) this.__dirty = true;
		this.scaleY = 1;
		return this.__height = value;
	}
	,set_htmlText: function(value) {
		if(!this.__isHTML || this.__text != value) this.__dirty = true;
		this.__ranges = null;
		this.__isHTML = true;
		value = new EReg("<br>","g").replace(value,"\n");
		value = new EReg("<br/>","g").replace(value,"\n");
		var segments = value.split("<font");
		if(segments.length == 1) {
			value = new EReg("<.*?>","g").replace(value,"");
			return this.__text = value;
		} else {
			value = "";
			this.__ranges = [];
			var _g = 0;
			while(_g < segments.length) {
				var segment = segments[_g];
				++_g;
				if(segment == "") continue;
				var closeFontIndex = segment.indexOf("</font>");
				if(closeFontIndex > -1) {
					var start = segment.indexOf(">") + 1;
					var end = closeFontIndex;
					var format = this.__textFormat.clone();
					var faceIndex = segment.indexOf("face=");
					var colorIndex = segment.indexOf("color=");
					var sizeIndex = segment.indexOf("size=");
					if(faceIndex > -1 && faceIndex < start) {
						var len = segment.indexOf("\"",faceIndex);
						format.font = HxOverrides.substr(segment,faceIndex + 6,len);
					}
					if(colorIndex > -1 && colorIndex < start) format.color = Std.parseInt("0x" + HxOverrides.substr(segment,colorIndex + 8,6));
					if(sizeIndex > -1 && sizeIndex < start) format.size = Std.parseInt((function($this) {
						var $r;
						var len1 = segment.indexOf("\"",sizeIndex);
						$r = HxOverrides.substr(segment,sizeIndex + 6,len1);
						return $r;
					}(this)));
					var sub = segment.substring(start,end);
					sub = new EReg("<.*?>","g").replace(sub,"");
					this.__ranges.push(new flash_text_TextFormatRange(format,value.length,value.length + sub.length));
					value += sub;
					if(closeFontIndex + 7 < segment.length) {
						sub = HxOverrides.substr(segment,closeFontIndex + 7,null);
						this.__ranges.push(new flash_text_TextFormatRange(this.__textFormat,value.length,value.length + sub.length));
						value += sub;
					}
				} else {
					this.__ranges.push(new flash_text_TextFormatRange(this.__textFormat,value.length,value.length + segment.length));
					value += segment;
				}
			}
		}
		return this.__text = value;
	}
	,get_text: function() {
		if(this.__isHTML) {
		}
		return this.__text;
	}
	,set_textColor: function(value) {
		if(value != this.__textFormat.color) this.__dirty = true;
		if(this.__ranges != null) {
			var _g = 0;
			var _g1 = this.__ranges;
			while(_g < _g1.length) {
				var range = _g1[_g];
				++_g;
				range.format.color = null;
			}
		}
		return this.__textFormat.color = value;
	}
	,set_type: function(value) {
		return this.type = value;
	}
	,get_width: function() {
		return this.__width * this.scaleX;
	}
	,set_width: function(value) {
		if(this.scaleX != 1 || this.__width != value) this.__dirty = true;
		this.scaleX = 1;
		return this.__width = value;
	}
	,__class__: flash_text_TextField
});
var flash_text_TextFormatRange = function(format,start,end) {
	this.format = format;
	this.start = start;
	this.end = end;
};
$hxClasses["flash.text.TextFormatRange"] = flash_text_TextFormatRange;
flash_text_TextFormatRange.__name__ = ["flash","text","TextFormatRange"];
flash_text_TextFormatRange.prototype = {
	__class__: flash_text_TextFormatRange
};
var flash_text_TextFieldAutoSize = $hxClasses["flash.text.TextFieldAutoSize"] = { __ename__ : ["flash","text","TextFieldAutoSize"], __constructs__ : ["CENTER","LEFT","NONE","RIGHT"] };
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
var flash_text_TextFieldType = $hxClasses["flash.text.TextFieldType"] = { __ename__ : ["flash","text","TextFieldType"], __constructs__ : ["DYNAMIC","INPUT"] };
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
flash_text_TextFormat.__name__ = ["flash","text","TextFormat"];
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
var flash_text_TextFormatAlign = $hxClasses["flash.text.TextFormatAlign"] = { __ename__ : ["flash","text","TextFormatAlign"], __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] };
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
flash_ui_Keyboard.__name__ = ["flash","ui","Keyboard"];
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
flash_utils_ByteArray.__name__ = ["flash","utils","ByteArray"];
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
var haxe_Serializer = function() {
	this.buf = new StringBuf();
	this.cache = new Array();
	this.useCache = haxe_Serializer.USE_CACHE;
	this.useEnumIndex = haxe_Serializer.USE_ENUM_INDEX;
	this.shash = new haxe_ds_StringMap();
	this.scount = 0;
};
$hxClasses["haxe.Serializer"] = haxe_Serializer;
haxe_Serializer.__name__ = ["haxe","Serializer"];
haxe_Serializer.run = function(v) {
	var s = new haxe_Serializer();
	s.serialize(v);
	return s.toString();
};
haxe_Serializer.prototype = {
	toString: function() {
		return this.buf.b;
	}
	,serializeString: function(s) {
		var x = this.shash.get(s);
		if(x != null) {
			this.buf.b += "R";
			if(x == null) this.buf.b += "null"; else this.buf.b += "" + x;
			return;
		}
		this.shash.set(s,this.scount++);
		this.buf.b += "y";
		s = encodeURIComponent(s);
		if(s.length == null) this.buf.b += "null"; else this.buf.b += "" + s.length;
		this.buf.b += ":";
		if(s == null) this.buf.b += "null"; else this.buf.b += "" + s;
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g1 = 0;
		var _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += "r";
				if(i == null) this.buf.b += "null"; else this.buf.b += "" + i;
				return true;
			}
		}
		this.cache.push(v);
		return false;
	}
	,serializeFields: function(v) {
		var _g = 0;
		var _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
		this.buf.b += "g";
	}
	,serialize: function(v) {
		{
			var _g = Type["typeof"](v);
			switch(_g[1]) {
			case 0:
				this.buf.b += "n";
				break;
			case 1:
				var v1 = v;
				if(v1 == 0) {
					this.buf.b += "z";
					return;
				}
				this.buf.b += "i";
				if(v1 == null) this.buf.b += "null"; else this.buf.b += "" + v1;
				break;
			case 2:
				var v2 = v;
				if(Math.isNaN(v2)) this.buf.b += "k"; else if(!Math.isFinite(v2)) if(v2 < 0) this.buf.b += "m"; else this.buf.b += "p"; else {
					this.buf.b += "d";
					if(v2 == null) this.buf.b += "null"; else this.buf.b += "" + v2;
				}
				break;
			case 3:
				if(v) this.buf.b += "t"; else this.buf.b += "f";
				break;
			case 6:
				var c = _g[2];
				if(c == String) {
					this.serializeString(v);
					return;
				}
				if(this.useCache && this.serializeRef(v)) return;
				switch(c) {
				case Array:
					var ucount = 0;
					this.buf.b += "a";
					var l = v.length;
					var _g1 = 0;
					while(_g1 < l) {
						var i = _g1++;
						if(v[i] == null) ucount++; else {
							if(ucount > 0) {
								if(ucount == 1) this.buf.b += "n"; else {
									this.buf.b += "u";
									if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
								}
								ucount = 0;
							}
							this.serialize(v[i]);
						}
					}
					if(ucount > 0) {
						if(ucount == 1) this.buf.b += "n"; else {
							this.buf.b += "u";
							if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
						}
					}
					this.buf.b += "h";
					break;
				case List:
					this.buf.b += "l";
					var v3 = v;
					var $it0 = v3.iterator();
					while( $it0.hasNext() ) {
						var i1 = $it0.next();
						this.serialize(i1);
					}
					this.buf.b += "h";
					break;
				case Date:
					var d = v;
					this.buf.b += "v";
					this.buf.add(HxOverrides.dateStr(d));
					break;
				case haxe_ds_StringMap:
					this.buf.b += "b";
					var v4 = v;
					var $it1 = v4.keys();
					while( $it1.hasNext() ) {
						var k = $it1.next();
						this.serializeString(k);
						this.serialize(v4.get(k));
					}
					this.buf.b += "h";
					break;
				case haxe_ds_IntMap:
					this.buf.b += "q";
					var v5 = v;
					var $it2 = v5.keys();
					while( $it2.hasNext() ) {
						var k1 = $it2.next();
						this.buf.b += ":";
						if(k1 == null) this.buf.b += "null"; else this.buf.b += "" + k1;
						this.serialize(v5.get(k1));
					}
					this.buf.b += "h";
					break;
				case haxe_ds_ObjectMap:
					this.buf.b += "M";
					var v6 = v;
					var $it3 = v6.keys();
					while( $it3.hasNext() ) {
						var k2 = $it3.next();
						var id = Reflect.field(k2,"__id__");
						Reflect.deleteField(k2,"__id__");
						this.serialize(k2);
						k2.__id__ = id;
						this.serialize(v6.h[k2.__id__]);
					}
					this.buf.b += "h";
					break;
				case haxe_io_Bytes:
					var v7 = v;
					var i2 = 0;
					var max = v7.length - 2;
					var charsBuf = new StringBuf();
					var b64 = haxe_Serializer.BASE64;
					while(i2 < max) {
						var b1 = v7.get(i2++);
						var b2 = v7.get(i2++);
						var b3 = v7.get(i2++);
						charsBuf.add(b64.charAt(b1 >> 2));
						charsBuf.add(b64.charAt((b1 << 4 | b2 >> 4) & 63));
						charsBuf.add(b64.charAt((b2 << 2 | b3 >> 6) & 63));
						charsBuf.add(b64.charAt(b3 & 63));
					}
					if(i2 == max) {
						var b11 = v7.get(i2++);
						var b21 = v7.get(i2++);
						charsBuf.add(b64.charAt(b11 >> 2));
						charsBuf.add(b64.charAt((b11 << 4 | b21 >> 4) & 63));
						charsBuf.add(b64.charAt(b21 << 2 & 63));
					} else if(i2 == max + 1) {
						var b12 = v7.get(i2++);
						charsBuf.add(b64.charAt(b12 >> 2));
						charsBuf.add(b64.charAt(b12 << 4 & 63));
					}
					var chars = charsBuf.b;
					this.buf.b += "s";
					if(chars.length == null) this.buf.b += "null"; else this.buf.b += "" + chars.length;
					this.buf.b += ":";
					if(chars == null) this.buf.b += "null"; else this.buf.b += "" + chars;
					break;
				default:
					if(this.useCache) this.cache.pop();
					if(v.hxSerialize != null) {
						this.buf.b += "C";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						v.hxSerialize(this);
						this.buf.b += "g";
					} else {
						this.buf.b += "c";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						this.serializeFields(v);
					}
				}
				break;
			case 4:
				if(this.useCache && this.serializeRef(v)) return;
				this.buf.b += "o";
				this.serializeFields(v);
				break;
			case 7:
				var e = _g[2];
				if(this.useCache) {
					if(this.serializeRef(v)) return;
					this.cache.pop();
				}
				if(this.useEnumIndex) this.buf.b += "j"; else this.buf.b += "w";
				this.serializeString(Type.getEnumName(e));
				if(this.useEnumIndex) {
					this.buf.b += ":";
					this.buf.b += Std.string(v[1]);
				} else this.serializeString(v[0]);
				this.buf.b += ":";
				var l1 = v.length;
				this.buf.b += Std.string(l1 - 2);
				var _g11 = 2;
				while(_g11 < l1) {
					var i3 = _g11++;
					this.serialize(v[i3]);
				}
				if(this.useCache) this.cache.push(v);
				break;
			case 5:
				throw "Cannot serialize function";
				break;
			default:
				throw "Cannot serialize " + Std.string(v);
			}
		}
	}
	,__class__: haxe_Serializer
};
var haxe_Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe_Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe_Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe_Unserializer;
haxe_Unserializer.__name__ = ["haxe","Unserializer"];
haxe_Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0;
	var _g = haxe_Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe_Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
};
haxe_Unserializer.run = function(v) {
	return new haxe_Unserializer(v).unserialize();
};
haxe_Unserializer.prototype = {
	setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_1) {
			return null;
		}}; else this.resolver = r;
	}
	,get: function(p) {
		return this.buf.charCodeAt(p);
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!(typeof(k) == "string")) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.get(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserialize: function() {
		var _g = this.get(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.get(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = decodeURIComponent(s.split("+").join(" "));
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c1 = this.buf.charCodeAt(this.pos);
				if(c1 == 104) {
					this.pos++;
					break;
				}
				if(c1 == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n1 = this.readDigits();
			if(n1 < 0 || n1 >= this.cache.length) throw "Invalid reference";
			return this.cache[n1];
		case 82:
			var n2 = this.readDigits();
			if(n2 < 0 || n2 >= this.scache.length) throw "Invalid string reference";
			return this.scache[n2];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o1 = Type.createEmptyInstance(cl);
			this.cache.push(o1);
			this.unserializeObject(o1);
			return o1;
		case 119:
			var name1 = this.unserialize();
			var edecl = this.resolver.resolveEnum(name1);
			if(edecl == null) throw "Enum not found " + name1;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name2 = this.unserialize();
			var edecl1 = this.resolver.resolveEnum(name2);
			if(edecl1 == null) throw "Enum not found " + name2;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl1)[index];
			if(tag == null) throw "Unknown enum index " + name2 + "@" + index;
			var e1 = this.unserializeEnum(edecl1,tag);
			this.cache.push(e1);
			return e1;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf1 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe_ds_StringMap();
			this.cache.push(h);
			var buf2 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s1 = this.unserialize();
				h.set(s1,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h1 = new haxe_ds_IntMap();
			this.cache.push(h1);
			var buf3 = this.buf;
			var c2 = this.get(this.pos++);
			while(c2 == 58) {
				var i = this.readDigits();
				h1.set(i,this.unserialize());
				c2 = this.get(this.pos++);
			}
			if(c2 != 104) throw "Invalid IntMap format";
			return h1;
		case 77:
			var h2 = new haxe_ds_ObjectMap();
			this.cache.push(h2);
			var buf4 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s2 = this.unserialize();
				h2.set(s2,this.unserialize());
			}
			this.pos++;
			return h2;
		case 118:
			var d;
			var s3 = HxOverrides.substr(this.buf,this.pos,19);
			d = HxOverrides.strDate(s3);
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len1 = this.readDigits();
			var buf5 = this.buf;
			if(this.get(this.pos++) != 58 || this.length - this.pos < len1) throw "Invalid bytes length";
			var codes = haxe_Unserializer.CODES;
			if(codes == null) {
				codes = haxe_Unserializer.initCodes();
				haxe_Unserializer.CODES = codes;
			}
			var i1 = this.pos;
			var rest = len1 & 3;
			var size;
			size = (len1 >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i1 + (len1 - rest);
			var bytes = haxe_io_Bytes.alloc(size);
			var bpos = 0;
			while(i1 < max) {
				var c11 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c21 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c11 << 2 | c21 >> 4);
				var c3 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c21 << 4 | c3 >> 2);
				var c4 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c3 << 6 | c4);
			}
			if(rest >= 2) {
				var c12 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c22 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c12 << 2 | c22 >> 4);
				if(rest == 3) {
					var c31 = codes[StringTools.fastCodeAt(buf5,i1++)];
					bytes.set(bpos++,c22 << 4 | c31 >> 2);
				}
			}
			this.pos += len1;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name3 = this.unserialize();
			var cl1 = this.resolver.resolveClass(name3);
			if(cl1 == null) throw "Class not found " + name3;
			var o2 = Type.createEmptyInstance(cl1);
			this.cache.push(o2);
			o2.hxUnserialize(this);
			if(this.get(this.pos++) != 103) throw "Invalid custom data";
			return o2;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,__class__: haxe_Unserializer
};
var haxe_ds_IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe_ds_IntMap;
haxe_ds_IntMap.__name__ = ["haxe","ds","IntMap"];
haxe_ds_IntMap.__interfaces__ = [IMap];
haxe_ds_IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe_ds_IntMap
};
var haxe_ds_ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe_ds_ObjectMap;
haxe_ds_ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe_ds_ObjectMap.__interfaces__ = [IMap];
haxe_ds_ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe_ds_ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = ["haxe","ds","StringMap"];
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
var haxe_io_Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe_io_Bytes;
haxe_io_Bytes.__name__ = ["haxe","io","Bytes"];
haxe_io_Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe_io_Bytes(length,a);
};
haxe_io_Bytes.prototype = {
	get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,__class__: haxe_io_Bytes
};
var haxe_io_Eof = function() { };
$hxClasses["haxe.io.Eof"] = haxe_io_Eof;
haxe_io_Eof.__name__ = ["haxe","io","Eof"];
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
haxe_io_Path.__name__ = ["haxe","io","Path"];
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
js_Boot.__name__ = ["js","Boot"];
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
var js_Browser = function() { };
$hxClasses["js.Browser"] = js_Browser;
js_Browser.__name__ = ["js","Browser"];
js_Browser.getLocalStorage = function() {
	try {
		var s = window.localStorage;
		s.getItem("");
		return s;
	} catch( e ) {
		return null;
	}
};
var openfl_AssetCache = function() {
	this.enabled = true;
	this.bitmapData = new haxe_ds_StringMap();
	this.font = new haxe_ds_StringMap();
	this.sound = new haxe_ds_StringMap();
};
$hxClasses["openfl.AssetCache"] = openfl_AssetCache;
openfl_AssetCache.__name__ = ["openfl","AssetCache"];
openfl_AssetCache.prototype = {
	__class__: openfl_AssetCache
};
var openfl_Assets = function() { };
$hxClasses["openfl.Assets"] = openfl_Assets;
openfl_Assets.__name__ = ["openfl","Assets"];
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
openfl_Assets.getMusic = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl_Assets.initialize();
	if(useCache && openfl_Assets.cache.enabled && openfl_Assets.cache.sound.exists(id)) {
		var sound = openfl_Assets.cache.sound.get(id);
		if(openfl_Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl_Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl_AssetType.MUSIC)) {
			if(library.isLocal(symbolName,openfl_AssetType.MUSIC)) {
				var sound1 = library.getMusic(symbolName);
				if(useCache && openfl_Assets.cache.enabled) openfl_Assets.cache.sound.set(id,sound1);
				return sound1;
			} else console.log("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
};
openfl_Assets.getSound = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl_Assets.initialize();
	if(useCache && openfl_Assets.cache.enabled && openfl_Assets.cache.sound.exists(id)) {
		var sound = openfl_Assets.cache.sound.get(id);
		if(openfl_Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl_Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl_AssetType.SOUND)) {
			if(library.isLocal(symbolName,openfl_AssetType.SOUND)) {
				var sound1 = library.getSound(symbolName);
				if(useCache && openfl_Assets.cache.enabled) openfl_Assets.cache.sound.set(id,sound1);
				return sound1;
			} else console.log("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously");
		} else console.log("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"");
	} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	return null;
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
openfl_Assets.isValidSound = function(sound) {
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
var openfl_AssetType = $hxClasses["openfl.AssetType"] = { __ename__ : ["openfl","AssetType"], __constructs__ : ["BINARY","FONT","IMAGE","MOVIE_CLIP","MUSIC","SOUND","TEMPLATE","TEXT"] };
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
openfl_display_Tilesheet.__name__ = ["openfl","display","Tilesheet"];
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
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
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
Game.has = { monsters : false, npc : false, savePoints : false};
Game.DEF_PROPS = { zoom : 4, bars : true, left : false, scroll : 0, color : 0, life : 0, monsters : 0, weapons : 0, web : 0, nchests : 0, pos : { x : 21, y : 76}, canSave : false, chests : new Array(), rem : new Array(), npc : 0, keys : 0, gold : 0, quests : new Array(), freeMove : false, dungeon : false, dmkills : 0, puzzle : false, xp : -1, level : 1, porn : false, sounds : false, music : false};
Game.props = Game.DEF_PROPS;
Chests.t = [{ name : "Left Key", sub : "Always going right is boring !"},{ name : "2D Movement", sub : "Lucky ! You can't go anywhere else anyway"},[{ name : "Basic Scrolling", sub : "You want to see where you're heading, right ?"},{ name : "Smoother Scrolling", sub : "Will save you some headache"}],[{ name : "16 Colors Display", sub : "OMG ! Color !!"},{ name : "64 Colors Display", sub : "Mooorreee !! Coloooor !!"},{ name : "256 Colors Display", sub : "This is almost real graphics, no ?"},{ name : "True Colors Display", sub : "At last, RGB !"}],[{ name : "Monsters !", sub : "Be careful not to touch them !"},{ name : "Powerful Monsters", sub : "Make sure you have saved your game"}],[{ name : "Sword", sub : "Now you can kill the evil monsters, and cut bushes"}],[{ name : "VGA Resolution", sub : "Now it looks like some good-old game !"},{ name : "HD Resolution", sub : "Sorry, no 3D yet !"}],{ name : "Save Points", sub : "An evolution that changed gaming forever..."},[{ name : "Ad Banner", sub : "Developers have somehow to pay for their own food, no ?"},{ name : "Social Links", sub : "Share with your friends !"}],[{ name : "NPC", sub : "It's nice to be able to talk to someone !"},{ name : "Quest System", sub : "It's even better if NPC have some actual usefulness !"}],{ name : "Gold Coin", sub : "This is a shiny piece of gold !"},{ name : "Key", sub : "You found a key !!! What does it open ?"},{ name : "Free Movement", sub : "Looks like it's time for some action/adventure !"},{ name : "Diablo Mode", sub : "A life bar and some XP system !"},{ name : "Triforce", sub : "Dungeon cleared ! Time to go back to overworld !"},{ name : "P0rn Banner", sub : "Classic ads don't make enough money..."},{ name : "Sounds FX", sub : "The game looks much more alive this way"},{ name : "Music", sub : "Always good for better ambient"},{ name : "Title Screen", sub : "There's always a starting point somewhere"},{ name : "Right Key", sub : "There seems to be some chest to open this way"},{ name : "Secret Block !", sub : "Ta-da-da-dam !"},{ name : "Dungeons", sub : "My passion : explore dark caves filled with hungry monsters"},{ name : "Killed-all-monsters", sub : "Good boy ! You get a bonus for this !"},{ name : "Puzzle Solved !", sub : "Real adventurers must be strong AND smart"},{ name : "Level Up !", sub : "You have reached level "},{ name : "Monster Farming !", sub : "What that ACTUALLY funny ?"},{ name : "Princess", sub : "Time to make new adventurers, maybe ?"}];
DefaultAssetLibrary.path = new haxe_ds_StringMap();
DefaultAssetLibrary.type = new haxe_ds_StringMap();
Key.fl_initDone = false;
Key.kcodes = new Array();
Key.ktime = 0;
Part.all = new Array();
Part.PIXELS = new haxe_ds_IntMap();
Popup.all = new Array();
Sounds.sounds = new haxe_ds_StringMap();
flash_Lib.__startTime = haxe_Timer.stamp();
Timer.wantedFPS = 32;
Timer.maxDeltaTime = 0.5;
Timer.oldTime = flash_Lib.getTimer();
Timer.tmod_factor = 0.95;
Timer.calc_tmod = 1;
Timer.tmod = 1;
Timer.deltaT = 1;
Timer.frameCount = 0;
flash_events_Event.ADDED_TO_STAGE = "addedToStage";
flash_events_Event.COMPLETE = "complete";
flash_events_Event.DEACTIVATE = "deactivate";
flash_events_Event.ENTER_FRAME = "enterFrame";
flash_events_Event.OPEN = "open";
flash_events_Event.RESIZE = "resize";
flash_events_Event.SOUND_COMPLETE = "soundComplete";
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
flash_external_ExternalInterface.available = true;
flash_net_URLRequestMethod.GET = "GET";
flash_system_ApplicationDomain.currentDomain = new flash_system_ApplicationDomain(null);
haxe_Serializer.USE_CACHE = false;
haxe_Serializer.USE_ENUM_INDEX = false;
haxe_Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_Unserializer.DEFAULT_RESOLVER = Type;
haxe_Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_Unserializer.CODES = null;
haxe_ds_ObjectMap.count = 0;
openfl_Assets.cache = new openfl_AssetCache();
openfl_Assets.libraries = new haxe_ds_StringMap();
openfl_Assets.initialized = false;
ApplicationMain.main();
})();
