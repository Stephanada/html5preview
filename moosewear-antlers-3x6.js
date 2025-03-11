(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"moosewear_antlers_3x6_atlas_1", frames: [[502,1202,524,362],[0,1202,500,500],[0,0,1200,1200],[0,1704,246,78]]},
		{name:"moosewear_antlers_3x6_atlas_2", frames: [[0,0,1200,1200]]}
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
	this.initialize(ss["moosewear_antlers_3x6_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.moosewear = function() {
	this.initialize(ss["moosewear_antlers_3x6_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.MooseFMATC2034_RealTree_HoodieCamoBWP = function() {
	this.initialize(ss["moosewear_antlers_3x6_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.MooseFMNE200_NewEraTruckerCamoBW = function() {
	this.initialize(ss["moosewear_antlers_3x6_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pexelsmatthewmontrone2308471179229 = function() {
	this.initialize(img.pexelsmatthewmontrone2308471179229);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4000,6000);


(lib.shopnow_yellowbutton = function() {
	this.initialize(ss["moosewear_antlers_3x6_atlas_1"]);
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


(lib.Tween40 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.DadCapOrange();
	this.instance.setTransform(-102,-102,0.17,0.17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-102,204,204);


(lib.Tween37 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-203.7,-305.6,0.1019,0.1019);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.7,-305.6,407.5,611.2);


(lib.Tween36 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-203.7,-305.6,0.1019,0.1019);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-203.7,-305.6,407.5,611.2);


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
	this.text = new cjs.Text("Embrace the wild!", "normal 700 26px 'Caveat'", "#FBDE00");
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


(lib.ShowNow = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shopnow_yellowbutton();
	this.instance.setTransform(-76.25,-24.15,0.62,0.62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.7,scaleY:0.7,x:-86,y:-27},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:-76.25,y:-24.15},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-27,172.2,54.6);


(lib.camohat = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.MooseFMNE200_NewEraTruckerCamoBW();
	this.instance.setTransform(-131.95,-131.95,0.22,0.22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.9,-131.9,263.9,263.9);


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


(lib.button_mc = function(mode,startPosition,loop,reversed) {
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
	this.button_2 = new lib.ShowNow();
	this.button_2.name = "button_2";
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.ShowNow(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_2).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91,-34.1,186,75);


// stage content:
(lib.moosewearantlers3x6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(270));

	// ShopNow
	this.button_mc = new lib.button_mc();
	this.button_mc.name = "button_mc";
	this.button_mc.setTransform(150.1,541.3,1,1,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get(this.button_mc).wait(270));

	// btn22
	this.btn22 = new lib.btn22();
	this.btn22.name = "btn22";
	this.btn22.setTransform(0,-1.15,0.3093,2.3885,0,0,180,484.9,-125.8);
	new cjs.ButtonHelper(this.btn22, 0, 1, 2, false, new lib.btn22(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn22).wait(270));

	// buttonoverlay
	this.button_1 = new lib.buttonoverlay();
	this.button_1.name = "button_1";
	this.button_1.setTransform(0,-0.8,0.3092,2.3787,0,0,0,-484.9,-126.7);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(270));

	// CamoHat
	this.instance = new lib.camohat();
	this.instance.setTransform(153.95,242.95);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(167).to({_off:false},0).to({scaleX:1.13,scaleY:1.13,y:242.9},102).wait(1));

	// OrangeHat
	this.instance_1 = new lib.Tween40("synched",0);
	this.instance_1.setTransform(151,239);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75).to({_off:false},0).to({scaleX:1.19,scaleY:1.19,x:150.95},71).to({startPosition:0},20).to({_off:true},1).wait(103));

	// Camo_Hoodie
	this.instance_2 = new lib.MooseFMATC2034_RealTree_HoodieCamoBWP();
	this.instance_2.setTransform(21,102,0.52,0.52);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},76).wait(194));

	// Embracethewild
	this.instance_3 = new lib.Symbol2();
	this.instance_3.setTransform(147.85,137.2,1.0583,1.0582,0,0,0,141.6,88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:144.6,regY:45.6,x:151.1,y:92.1},0).wait(18).to({x:151.15},0).wait(16).to({x:151.2},0).wait(14).to({x:151.25},0).wait(12).to({x:151.3},0).wait(12).to({x:151.35},0).wait(10).to({x:151.4},0).wait(10).to({x:151.45},0).wait(9).to({x:151.5},0).wait(9).to({x:151.55},0).wait(8).to({x:151.6},0).wait(8).to({x:151.65},0).wait(7).to({x:151.7},0).wait(8).to({x:151.75},0).wait(6).to({x:151.8},0).wait(7).to({x:151.85},0).wait(6).to({x:151.9},0).wait(6).to({x:151.95},0).wait(6).to({x:152},0).wait(6).to({x:152.05},0).wait(5).to({x:152.1},0).wait(6).to({x:152.15},0).wait(5).to({x:152.2},0).wait(5).to({x:152.25},0).wait(5).to({x:152.3},0).wait(5).to({x:152.35},0).wait(4).to({x:152.4},0).wait(5).to({x:152.45},0).wait(4).to({x:152.5},0).wait(4).to({x:152.55},0).wait(5).to({x:152.6},0).wait(4).to({x:152.65},0).wait(4).to({x:152.7},0).wait(4).to({x:152.75},0).wait(4).to({x:152.8},0).wait(3).to({x:152.85},0).wait(4).to({x:152.9},0).wait(4).to({x:152.95},0).wait(3).to({x:153},0).wait(4).to({x:153.05},0).wait(3).to({regX:141.6,regY:88.2,x:149.85,y:137.2},0).wait(1));

	// MooseFM
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(147.25,432.85,0.69,0.69,0,0,0,112.7,77.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:112.9,regY:78,x:147.35},0).wait(269));

	// Layer_19_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,51,0,0.737)").s().p("EgXkAu9MAAAhd5MAvJAAAMAAABd5g");
	this.shape.setTransform(150.975,299.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(270));

	// woods
	this.instance_5 = new lib.Tween36("synched",0);
	this.instance_5.setTransform(163.7,304.6);

	this.instance_6 = new lib.Tween37("synched",0);
	this.instance_6.setTransform(150,304.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,x:150},123,cjs.Ease.quadInOut).to({_off:false,x:163.7},146,cjs.Ease.quadInOut).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},123,cjs.Ease.quadInOut).to({_off:true,x:163.7},146,cjs.Ease.quadInOut).wait(1));

	// Layer_19
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003333").s().p("EgXkAu9MAAAhd5MAvJAAAMAAABd5g");
	this.shape_1.setTransform(150.975,299.45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(270));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(96.3,298.9,271.2,311.30000000000007);
// library properties:
lib.properties = {
	id: 'CAE0A3D54ECF405FB9999076E876649F',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/pexelsmatthewmontrone2308471179229.jpg", id:"pexelsmatthewmontrone2308471179229"},
		{src:"images/moosewear_antlers_3x6_atlas_1.png", id:"moosewear_antlers_3x6_atlas_1"},
		{src:"images/moosewear_antlers_3x6_atlas_2.png", id:"moosewear_antlers_3x6_atlas_2"}
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