(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"kira_eff_atlas_1", frames: [[0,0,400,400],[402,0,418,355],[822,0,128,128]]}
];


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



(lib.eff_kakutei_2_backlight = function() {
	this.initialize(ss["kira_eff_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.eff_kakutei_2_crosslight = function() {
	this.initialize(ss["kira_eff_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ptc_SR_kirakira2_01 = function() {
	this.initialize(ss["kira_eff_atlas_1"]);
	this.gotoAndStop(2);
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


(lib.ptc_SR_kirakira2_01_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.ptc_SR_kirakira2_01();
	this.instance.setTransform(-64,-64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ptc_SR_kirakira2_01_1, new cjs.Rectangle(-64,-64,128,128), null);


(lib.eff_kakutei_2_crosslight_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.eff_kakutei_2_crosslight();
	this.instance.setTransform(-209,-177.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eff_kakutei_2_crosslight_1, new cjs.Rectangle(-209,-177.5,418,355), null);


(lib.eff_kakutei_2_backlight_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// レイヤー_1
	this.instance = new lib.eff_kakutei_2_backlight();
	this.instance.setTransform(-200,-200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eff_kakutei_2_backlight_1, new cjs.Rectangle(-200,-200,400,400), null);


// stage content:
(lib.kira_eff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {start:0,test:34};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [53];
	// timeline functions:
	this.frame_53 = function() {
		this.dispatchEvent("finish");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(1));

	// eff_kakutei_2_backlight
	this.instance = new lib.eff_kakutei_2_backlight_1();
	this.instance.setTransform(309,480,1.6508,1.6508);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({scaleX:7.2497,scaleY:7.2497,y:480.35},49,cjs.Ease.quadIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_1 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_1.setTransform(351.4,434.5,0.7396,0.7396,0,0,0,0.2,0.1);
	this.instance_1.alpha = 0.1016;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({regX:0.1,scaleX:0.9428,scaleY:0.9428,x:396.55,y:379.25,alpha:1},3,cjs.Ease.quadOut).to({regX:0.2,x:579.85,y:265.9,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_2 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_2.setTransform(253.95,531.75,1.1328,1.1328,0,0,0,0.5,0.5);
	this.instance_2.alpha = 0.1016;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({regX:0.4,regY:0.4,scaleX:1.444,scaleY:1.444,x:243.5,y:552.45,alpha:1},3,cjs.Ease.quadOut).to({regX:0.5,regY:0.5,scaleX:2.6258,scaleY:2.6258,x:69.3,y:714.2,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_3 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_3.setTransform(210.45,511.6,0.4747,0.4747,0,0,0,0.6,0.3);
	this.instance_3.alpha = 0.1016;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({regX:0.4,regY:0.4,scaleX:0.6052,scaleY:0.6052,x:188.05,y:526.9,alpha:1},3,cjs.Ease.quadOut).to({x:110.65,y:583.85,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_4 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_4.setTransform(274.7,487.4,0.5302,0.5302,0,0,0,0.4,0.4);
	this.instance_4.alpha = 0.1016;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({regY:0.3,scaleX:0.6758,scaleY:0.6758,x:91.2,y:532.35,alpha:1},3,cjs.Ease.quadOut).to({regX:0.3,regY:0.4,scaleX:0.8996,scaleY:0.8996,x:-50.25,y:623.35,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_5 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_5.setTransform(287.85,471.85,1.3606,1.3606);
	this.instance_5.alpha = 0.1016;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({scaleX:1.7344,scaleY:1.7344,x:137.7,y:492.4,alpha:1},3,cjs.Ease.quadOut).to({scaleX:2.9064,scaleY:2.9064,x:-142.2,y:522.95,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_6 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_6.setTransform(257.95,569.9,0.5302,0.5302,0,0,0,0.4,0.3);
	this.instance_6.alpha = 0.1016;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({scaleX:0.6758,scaleY:0.6758,x:225.5,y:695.35,alpha:1},3,cjs.Ease.quadOut).to({x:182.45,y:763.3,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_7 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_7.setTransform(302.55,555.25,0.4503,0.4503,0,0,0,0.5,0.2);
	this.instance_7.alpha = 0.1016;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({_off:false},0).to({regX:0.4,scaleX:0.574,scaleY:0.574,x:268.05,y:711.75,alpha:1},3,cjs.Ease.quadOut).to({x:234.25,y:858.4,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_8 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_8.setTransform(342.3,542.75,0.2546,0.2546,0,0,0,0.4,0.4);
	this.instance_8.alpha = 0.1016;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({regX:0.3,regY:0.1,scaleX:0.3245,scaleY:0.3245,x:354.5,y:679.25,alpha:1},3,cjs.Ease.quadOut).to({x:439.6,y:826.3,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_9 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_9.setTransform(358.75,525.6,0.2546,0.2546,0,0,0,0.4,0.2);
	this.instance_9.alpha = 0.1016;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).to({regX:0.3,regY:0.1,scaleX:0.3245,scaleY:0.3245,x:473.1,y:681.15,alpha:1},3,cjs.Ease.quadOut).to({x:506.75,y:740.65,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_10 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_10.setTransform(389.4,424.5,0.3405,0.3405,0,0,0,0.3,0.1);
	this.instance_10.alpha = 0.1016;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({_off:false},0).to({regX:0.2,scaleX:0.434,scaleY:0.434,x:502.1,y:371.75,alpha:1},3,cjs.Ease.quadOut).to({regX:0.4,scaleX:0.6098,scaleY:0.6098,x:728.3,y:240.65,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_11 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_11.setTransform(427.05,415.8,0.586,0.586,0,0,0,0.1,0.1);
	this.instance_11.alpha = 0.1016;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({_off:false},0).to({scaleX:0.747,scaleY:0.747,x:556,y:340.2,alpha:1},3,cjs.Ease.quadOut).to({scaleX:1.1006,scaleY:1.1006,x:826.45,y:187.6,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_12 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_12.setTransform(395.4,389.5,1.0827,1.0827,0,0,0,0.2,0.1);
	this.instance_12.alpha = 0.1016;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({_off:false},0).to({scaleX:1.3801,scaleY:1.3801,x:466.15,y:252.2,alpha:1},3,cjs.Ease.quadOut).to({regY:0.2,scaleX:2.1138,scaleY:2.1138,x:710.75,y:77.9,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_13 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_13.setTransform(360.35,502.7,0.8807,0.8807,0,0,0,0.1,0.1);
	this.instance_13.alpha = 0.1016;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({_off:false},0).to({scaleX:1.1227,scaleY:1.1227,x:499.95,y:611.1,alpha:1},3,cjs.Ease.quadOut).to({regX:0.2,scaleX:1.605,scaleY:1.605,x:768.5,y:811.8,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_14 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_14.setTransform(380.7,516.6,1.2004,1.2004);
	this.instance_14.alpha = 0.1016;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.5301,scaleY:1.5301,x:516.85,y:622.05,alpha:1},3,cjs.Ease.quadOut).to({regX:0.2,scaleX:1.8976,scaleY:1.8976,x:787.35,y:818,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_15 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_15.setTransform(235.75,527.05,1.0663,1.0663,0,0,0,0.1,0.1);
	this.instance_15.alpha = 0.1016;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(3).to({_off:false},0).to({regY:0,scaleX:1.3593,scaleY:1.3593,x:134.85,y:621.9,alpha:1},3,cjs.Ease.quadOut).to({regX:0,scaleX:2.2279,scaleY:2.2279,x:-117.85,y:818.8,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_16 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_16.setTransform(223.75,454.75,1.3606,1.3606);
	this.instance_16.alpha = 0.1016;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3).to({_off:false},0).to({scaleX:1.7344,scaleY:1.7344,x:100.7,y:458.9,alpha:1},3,cjs.Ease.quadOut).to({regX:-0.1,regY:0.1,scaleX:3.0782,scaleY:3.0782,x:-211.5,y:455.2,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_17 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_17.setTransform(238.8,462.6,1.3606,1.3606);
	this.instance_17.alpha = 0.1016;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(3).to({_off:false},0).to({scaleX:1.7344,scaleY:1.7344,x:79.7,y:467.9,alpha:1},3,cjs.Ease.quadOut).to({regY:0.1,scaleX:2.8387,scaleY:2.8387,x:-232.4,y:470.2,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_18 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_18.setTransform(244,416.65,1.3606,1.3606);
	this.instance_18.alpha = 0.1016;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(3).to({_off:false},0).to({scaleX:1.7344,scaleY:1.7344,x:100.7,y:372.95,alpha:1},3,cjs.Ease.quadOut).to({scaleX:2.5588,scaleY:2.5588,x:-187.7,y:256.25,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_19 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_19.setTransform(255.25,430.8,1.3606,1.3606);
	this.instance_19.alpha = 0.1016;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({_off:false},0).to({scaleX:1.7344,scaleY:1.7344,x:181,y:342.95,alpha:1},3,cjs.Ease.quadOut).to({regX:-0.1,regY:0.1,scaleX:3.5148,scaleY:3.5148,x:-68.45,y:127.7,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_20 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_20.setTransform(360.6,399.7,1.3606,1.3606);
	this.instance_20.alpha = 0.1016;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(3).to({_off:false},0).to({scaleX:1.7344,scaleY:1.7344,x:409,y:276.95,alpha:1},3,cjs.Ease.quadOut).to({scaleX:2.3306,scaleY:2.3306,x:578.4,y:98.65,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// ptc_SR_kirakira2_01
	this.instance_21 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_21.setTransform(304.3,399.7,1.3606,1.3606);
	this.instance_21.alpha = 0.1016;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(3).to({_off:false},0).to({scaleX:1.7344,scaleY:1.7344,x:311,y:300.95,alpha:1},3,cjs.Ease.quadOut).to({scaleX:2.172,scaleY:2.172,x:308.25,y:-41.3,alpha:0.1016},47,cjs.Ease.circIn).wait(1));

	// eff_kakutei_2_crosslight
	this.instance_22 = new lib.eff_kakutei_2_crosslight_1();
	this.instance_22.setTransform(320.15,480.4,5.3729,5.3729,-59.9996,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({regY:0.1,scaleX:1.5803,scaleY:1.5803,rotation:0,y:480.15},4).to({scaleX:4.6313,scaleY:4.6313,rotation:90,x:320.05,y:480.05},49,cjs.Ease.cubicIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-820.9,-489.6,2579.9,2419.9);
// library properties:
lib.properties = {
	id: '51D95914D18E47FEB298090813CA36EC',
	width: 640,
	height: 960,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/kira_eff_atlas_1.png?1741676535485", id:"kira_eff_atlas_1"}
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
an.compositions['51D95914D18E47FEB298090813CA36EC'] = {
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