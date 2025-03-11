(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"moosewear_antlers_9x2_atlas_1", frames: [[502,1202,524,362],[0,1202,500,500],[0,0,1200,1200],[0,1704,246,78]]},
		{name:"moosewear_antlers_9x2_atlas_2", frames: [[0,0,1200,1200]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.DadCapOrange = function() {
	this.initialize(ss["moosewear_antlers_9x2_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.moosewear = function() {
	this.initialize(ss["moosewear_antlers_9x2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.MooseFMATC2034_RealTree_HoodieCamoBWP = function() {
	this.initialize(ss["moosewear_antlers_9x2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.MooseFMNE200_NewEraTruckerCamoBW = function() {
	this.initialize(ss["moosewear_antlers_9x2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pexelsmatthewmontrone2308471179229 = function() {
	this.initialize(img.pexelsmatthewmontrone2308471179229);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4000,6000);


(lib.shopnow_yellowbutton = function() {
	this.initialize(ss["moosewear_antlers_9x2_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pexelsmatthewmontrone2308471179229();
	this.instance.setTransform(-559.9,-839.9,0.28,0.28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-559.9,-839.9,1119.9,1679.8);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pexelsmatthewmontrone2308471179229();
	this.instance.setTransform(-559.9,-839.9,0.28,0.28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-559.9,-839.9,1119.9,1679.8);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pexelsmatthewmontrone2308471179229();
	this.instance.setTransform(-559.9,-839.9,0.28,0.28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-559.9,-839.9,1119.9,1679.8);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.529)").s().p("Egs5ATlMAAAgnJMBZ0AAAMAAAAnJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.4,-125.3,574.9,250.6);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.529)").s().p("Egs5ATlMAAAgnJMBZ0AAAMAAAAnJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.4,-125.3,574.9,250.6);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.529)").s().p("Egs5ATlMAAAgnJMBZ0AAAMAAAAnJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.4,-125.3,574.9,250.6);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.529)").s().p("Egs5ATlMAAAgnJMBZ0AAAMAAAAnJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.4,-125.3,574.9,250.6);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Embrace the Wild!", "normal 700 26px 'Caveat'", "#FBDE00");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 285;
	this.text.parent = this;
	this.text.setTransform(144.55,2);
	if(!lib.properties.webfonts['Caveat']) {
		lib.webFontTxtInst['Caveat'] = lib.webFontTxtInst['Caveat'] || [];
		lib.webFontTxtInst['Caveat'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,289.2,91.1), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.moosewear();
	this.instance.setTransform(0,0,0.4308,0.4308);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,225.8,156), null);


(lib.ShopNow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ShopNow
	this.instance = new lib.shopnow_yellowbutton();
	this.instance.setTransform(-61.5,-19.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.55,scaleY:0.55,x:-68,y:-21},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:-61.5,y:-19.5},0).wait(148));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-21,135.3,42.9);


(lib.ShopNow_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("SHOP NOW", "bold 21px 'Roboto'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 194;
	this.text.parent = this;
	this.text.setTransform(0,-21.2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.2,-23.2,198.4,31.7);


(lib.buttonoverlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FF66").s().p("EhLxATqMAAAgnTMCXjAAAMAAAAnTg");
	this.shape.setTransform(0.025,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-484.9,-125.8,969.9,251.6);


(lib.btn22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,255,0.529)").s().p("EhLxATqMAAAgnTMCXjAAAMAAAAnTg");
	this.shape.setTransform(0.025,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-484.9,-125.8,969.9,251.6);


(lib.Button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ShopNow_1("synched",0);
	this.instance.setTransform(-1,9.9);
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-101,-25,202,36);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDD2E").s().p("Av6DXIAAmsIf1AAIAAGsg");
	this.shape.setTransform(0,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDD2E").s().p("AxqDuIAAnbMAjVAAAIAAHbg");
	this.shape_1.setTransform(0,-2.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{scaleX:1,scaleY:1,x:-1,y:9.9}}]}).to({state:[{t:this.shape_1},{t:this.instance,p:{scaleX:1.11,scaleY:1.11,x:-1.1,y:12.4}}]},1).to({state:[{t:this.shape_1},{t:this.instance,p:{scaleX:1.11,scaleY:1.11,x:-1.2,y:12.75}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(2).to(new cjs.ColorFilter(0.86,0.86,0.86,1,35.7,35.7,35.7,0), 0).wait(1));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:1, endFrame:1, x:-101, y:-25, w:202, h:36});
	this.filterCacheList.push({instance: this.instance, startFrame:2, endFrame:2, x:-101, y:-25, w:202, h:36});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.1,-26.3,226.2,48.5);


// stage content:
(lib.moosewearantlers9x2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,149];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.button_2.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://moosefm.tallmanpromo.store/', '_blank');
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btn22.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://moosefm.tallmanpromo.store/', '_blank');
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.button_1.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://moosefm.tallmanpromo.store/', '_blank');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.button_1.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://moosefm.tallmanpromo.store/', '_blank');
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.btn1.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://moosefm.tallmanpromo.store/', '_blank');
		});
	}
	this.frame_149 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.button_1.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://moosefm.tallmanpromo.store/', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(149).call(this.frame_149).wait(1));

	// ShopNow
	this.button_2 = new lib.ShopNow();
	this.button_2.name = "button_2";
	this.button_2.setTransform(849,200);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.ShopNow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(150));

	// btn22
	this.btn22 = new lib.btn22();
	this.btn22.name = "btn22";
	this.btn22.setTransform(485,124.8);
	new cjs.ButtonHelper(this.btn22, 0, 1, 2, false, new lib.btn22(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn22).wait(150));

	// buttonoverlay
	this.button_1 = new lib.buttonoverlay();
	this.button_1.name = "button_1";
	this.button_1.setTransform(485,125.8);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(149).to({alpha:0},0).wait(1));

	// springingintoadventure
	this.instance = new lib.Symbol2();
	this.instance.setTransform(187.55,373.55,1,1,0,0,0,141.4,88.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:267.35},11,cjs.Ease.quadIn).to({y:276.1},3,cjs.Ease.quadInOut).wait(123).to({y:346.1},9,cjs.Ease.quadOut).wait(4));

	// MooseFM
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(196.8,-125,1,1,0,0,0,112.8,77.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:112.9,regY:78,x:197,y:-94.75,alpha:0.0435},0).wait(1).to({x:197.15,y:-65.2,alpha:0.087},0).wait(1).to({x:197.25,y:-36.1,alpha:0.1304},0).wait(1).to({x:197.4,y:-7.6,alpha:0.1739},0).wait(1).to({x:197.5,y:20.4,alpha:0.2174},0).wait(1).to({x:197.6,y:47.85,alpha:0.2609},0).wait(1).to({x:197.75,y:74.85,alpha:0.3043},0).wait(1).to({x:197.85,y:101.25,alpha:0.3478},0).wait(1).to({x:197.9,y:108.1,alpha:0.3913},0).wait(1).to({alpha:0.4348},0).wait(1).to({alpha:0.4783},0).wait(1).to({alpha:0.5217},0).wait(1).to({alpha:0.5652},0).wait(1).to({alpha:0.6087},0).wait(1).to({alpha:0.6522},0).wait(1).to({alpha:0.6957},0).wait(1).to({alpha:0.7391},0).wait(1).to({alpha:0.7826},0).wait(1).to({alpha:0.8261},0).wait(1).to({alpha:0.8696},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.9565},0).wait(1).to({alpha:1},0).wait(90).to({regX:112.8,regY:77.9,x:197.8,y:108},0).wait(1).to({regX:112.9,regY:78,x:197.9,y:108.1},0).wait(17).to({regX:112.8,regY:77.9,x:197.8,y:108},0).wait(1).to({regX:112.9,regY:78,x:197.9,y:107.45,alpha:0.957},0).wait(1).to({y:103,alpha:0.9139},0).wait(1).to({y:90.9,alpha:0.8709},0).wait(1).to({y:67.45,alpha:0.8278},0).wait(1).to({regX:112.8,regY:77.9,x:197.8,y:29.25,alpha:0.3086},0).wait(1).to({regX:112.9,regY:78,x:197.9,y:29.1,alpha:0.2683},0).wait(1).to({y:27.1,alpha:0.2252},0).wait(1).to({y:21.75,alpha:0.1822},0).wait(1).to({y:11.3,alpha:0.1391},0).wait(1).to({y:-5.95,alpha:0.0961},0).wait(1).to({y:-21.5},0).wait(1).to({regX:112.8,regY:77.9,x:197.8,y:-15.55,alpha:0.0508},0).wait(1).to({regX:112.9,regY:78,x:197.9,y:-17.95,alpha:0.01},0).wait(1).to({y:-25.6},0).wait(1).to({regX:112.8,regY:77.9,x:197.8,y:-102,alpha:1},0).to({_off:true},1).wait(3));

	// Cap
	this.instance_2 = new lib.MooseFMNE200_NewEraTruckerCamoBW();
	this.instance_2.setTransform(290,53,0.18,0.18);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150));

	// Layer_3
	this.instance_3 = new lib.MooseFMATC2034_RealTree_HoodieCamoBWP();
	this.instance_3.setTransform(420,24,0.79,0.79);

	this.instance_4 = new lib.DadCapOrange();
	this.instance_4.setTransform(767,24,0.1343,0.1343);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(150));

	// greenoverlay
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#010101").ss(1,1,1).p("EhLxgTpMCXjAAAMAAAAnTMiXjAAAg");
	this.shape.setTransform(485.025,124.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,51,0,0.737)").s().p("EhLxATqMAAAgnTMCXjAAAMAAAAnTg");
	this.shape_1.setTransform(485.025,124.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(150));

	// forest
	this.instance_5 = new lib.Tween11("synched",0);
	this.instance_5.setTransform(465.9,783.9);

	this.instance_6 = new lib.Tween12("synched",0);
	this.instance_6.setTransform(465.9,753);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween13("synched",0);
	this.instance_7.setTransform(465.9,783.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},69).to({state:[{t:this.instance_7}]},80).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,y:753},69,cjs.Ease.quadInOut).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},69,cjs.Ease.quadInOut).to({_off:true,y:783.9},80).wait(1));

	// Layer_19
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3399CC").s().p("EhLxATqMAAAgnTMCXjAAAMAAAAnTg");
	this.shape_2.setTransform(485.025,124.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(150));

	// Lighter_box
	this.instance_8 = new lib.Tween1("synched",0);
	this.instance_8.setTransform(1261.6,124.7);

	this.instance_9 = new lib.Tween2("synched",0);
	this.instance_9.setTransform(682.55,124.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.529)").s().p("Egs5ATlMAAAgnJMBZ0AAAMAAAAnJg");
	this.shape_3.setTransform(682.55,124.7);

	this.instance_10 = new lib.Tween3("synched",0);
	this.instance_10.setTransform(682.55,124.7);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween4("synched",0);
	this.instance_11.setTransform(1261.6,124.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).to({state:[{t:this.instance_9}]},13).to({state:[{t:this.shape_3}]},100).to({state:[{t:this.instance_10}]},16).to({state:[{t:this.instance_11}]},17).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,x:682.55},13,cjs.Ease.quadIn).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(129).to({_off:false},0).to({_off:true,x:1261.6},17,cjs.Ease.quadOut).wait(4));

	// Button
	this.btn1 = new lib.Button();
	this.btn1.name = "btn1";
	this.btn1.setTransform(469,135);
	new cjs.ButtonHelper(this.btn1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(150));
	this.btn1.addEventListener("tick", AdobeAn.handleFilterCache);

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(391,-77.9,1158.1,1701.7);
// library properties:
lib.properties = {
	id: 'CAE0A3D54ECF405FB9999076E876649F',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/pexelsmatthewmontrone2308471179229.jpg", id:"pexelsmatthewmontrone2308471179229"},
		{src:"images/moosewear_antlers_9x2_atlas_1.png", id:"moosewear_antlers_9x2_atlas_1"},
		{src:"images/moosewear_antlers_9x2_atlas_2.png", id:"moosewear_antlers_9x2_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CAE0A3D54ECF405FB9999076E876649F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;