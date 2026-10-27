(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"gasha_eff_atlas_1", frames: [[1395,0,400,400],[1395,402,418,355],[1797,0,128,128],[0,0,900,1200],[902,0,491,1200]]}
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



(lib.bg049_arena_in_08_trimming_01_gashaalien = function() {
	this.initialize(img.bg049_arena_in_08_trimming_01_gashaalien);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2660,1484);


(lib.eff_kakutei_2_backlight = function() {
	this.initialize(ss["gasha_eff_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.eff_kakutei_2_crosslight = function() {
	this.initialize(ss["gasha_eff_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ptc_SR_kirakira2_01 = function() {
	this.initialize(ss["gasha_eff_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.shuuchuusen = function() {
	this.initialize(ss["gasha_eff_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.silhouette_big = function() {
	this.initialize(ss["gasha_eff_atlas_1"]);
	this.gotoAndStop(4);
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


(lib.white = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhGTBdwMAAAi7fMCMnAAAMAAAC7fg");
	this.shape.setTransform(0,-600);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(-450,-1200,900,1200), null);


(lib.silhouette_big_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.silhouette_big();
	this.instance.setTransform(-20.85,-102.1,0.0851,0.0851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.silhouette_big_1, new cjs.Rectangle(-20.8,-102.1,41.7,102.1), null);


(lib.shuuchuusen_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shuuchuusen();
	this.instance.setTransform(-450,-600);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shuuchuusen_1, new cjs.Rectangle(-450,-600,900,1200), null);


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


(lib.bg_live = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg049_arena_in_08_trimming_01_gashaalien();
	this.instance.setTransform(-1330,-1484);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_live, new cjs.Rectangle(-1330,-1484,2660,1484), null);


// stage content:
(lib.gasha_eff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [96];
	// timeline functions:
	this.frame_96 = function() {
		this.dispatchEvent("finish");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(96).call(this.frame_96).wait(5));

	// white
	this.instance = new lib.white();
	this.instance.setTransform(450,600,1,1,0,0,0,0,-600);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).to({alpha:0.6016},5).wait(11));

	// shuuchuusen
	this.instance_1 = new lib.shuuchuusen_1();
	this.instance_1.setTransform(450,600,1.4427,1.4427);
	this.instance_1.compositeOperation = "overlay";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:0.5},3).to({alpha:1},10).to({alpha:0},3).to({_off:true},1).wait(48));

	// silhouette_big
	this.instance_2 = new lib.silhouette_big_1();
	this.instance_2.setTransform(437.35,622.25,3.9121,3.9121,0,0,0,0,-51);
	this.instance_2.alpha = 0.1016;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).wait(1).to({regY:-51.1,scaleX:4.49,scaleY:4.49,x:439.1,y:621.8,alpha:0.0702},0).wait(1).to({scaleX:4.9099,scaleY:4.9099,x:440.35,alpha:0.0475},0).wait(1).to({scaleX:5.2135,scaleY:5.2135,x:441.25,alpha:0.031},0).wait(1).to({scaleX:5.4303,scaleY:5.4303,x:441.95,y:621.75,alpha:0.0193},0).wait(1).to({scaleX:5.5812,scaleY:5.5812,x:442.4,alpha:0.0111},0).wait(1).to({scaleX:5.6818,scaleY:5.6818,x:442.7,alpha:0.0056},0).wait(1).to({scaleX:5.7437,scaleY:5.7437,x:442.9,alpha:0.0023},0).wait(1).to({scaleX:5.776,scaleY:5.776,x:442.95,alpha:0.0005},0).wait(1).to({regX:0.1,regY:-50.9,scaleX:5.7855,scaleY:5.7855,x:443.05,y:622.35,alpha:0},0).to({_off:true},1).wait(42));

	// eff_kakutei_2_backlight
	this.instance_3 = new lib.eff_kakutei_2_backlight_1();
	this.instance_3.setTransform(447.55,569.9,6.003,6.003,0,0,0,0.2,0.1);
	this.instance_3.compositeOperation = "screen";
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).to({regX:0,regY:0,scaleX:1.6508,scaleY:1.6508,x:447,y:569.35},6,cjs.Ease.quadIn).to({scaleX:7.2497,scaleY:7.2497,y:569.7},31,cjs.Ease.quadIn).to({scaleX:32.4775,scaleY:32.4775,x:417.5,y:751.45},5).wait(11));

	// silhouette_big
	this.instance_4 = new lib.silhouette_big_1();
	this.instance_4.setTransform(121.6,868.05,1,1,0,0,0,0,-51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(36).to({regX:-0.1,regY:-51,scaleX:3.0854,scaleY:3.0854,x:444.85,y:619.6},24,cjs.Ease.quintOut).to({scaleX:4.4272,scaleY:4.4272,x:439.1,y:664.1},25,cjs.Ease.cubicIn).to({scaleX:13.8219,scaleY:13.8219,x:432.7,y:975.1},5).wait(11));

	// silhouette_big
	this.instance_5 = new lib.silhouette_big_1();
	this.instance_5.setTransform(316.85,870.45,1,1,0,0,0,0,-51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36).to({scaleX:3.0854,scaleY:3.0854,x:1047.5,y:626.75},24,cjs.Ease.quintOut).to({scaleX:4.4272,scaleY:4.4272,x:1304,y:674.15},25,cjs.Ease.cubicIn).to({scaleX:13.8219,scaleY:13.8219,x:3132.5,y:1007.1},5).wait(11));

	// silhouette_big
	this.instance_6 = new lib.silhouette_big_1();
	this.instance_6.setTransform(494.8,868.85,1,1,0,0,0,0,-51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(36).to({regY:-51,scaleX:3.0854,scaleY:3.0854,x:1596.5,y:622.1},24,cjs.Ease.quintOut).to({scaleX:4.4272,scaleY:4.4272,x:2091.7,y:667.7},25,cjs.Ease.cubicIn).to({scaleX:13.8219,scaleY:13.8219,x:5591.8,y:986.3},5).wait(11));

	// silhouette_big
	this.instance_7 = new lib.silhouette_big_1();
	this.instance_7.setTransform(709.7,869.65,1,1,0,0,0,0,-51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(36).to({scaleX:3.0854,scaleY:3.0854,x:2259.55,y:624.3},24,cjs.Ease.quintOut).to({scaleX:4.4272,scaleY:4.4272,x:3043.3,y:670.65},25,cjs.Ease.cubicIn).to({scaleX:13.8219,scaleY:13.8219,x:8562.05,y:996.05},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_8 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_8.setTransform(489.4,523.85,0.7396,0.7396,0,0,0,0.2,0.1);
	this.instance_8.alpha = 0.1016;
	this.instance_8.compositeOperation = "overlay";
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(51).to({_off:false},0).to({regX:0.1,scaleX:0.9428,scaleY:0.9428,x:534.55,y:468.6,alpha:1},6,cjs.Ease.quadOut).to({regX:0.2,x:717.85,y:355.25,alpha:0.1016},28,cjs.Ease.circIn).to({scaleX:4.2235,scaleY:4.2235,x:1630.75,y:-209.25},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_9 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_9.setTransform(391.95,621.1,1.1328,1.1328,0,0,0,0.5,0.5);
	this.instance_9.alpha = 0.1016;
	this.instance_9.compositeOperation = "overlay";
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(51).to({_off:false},0).to({regX:0.4,regY:0.4,scaleX:1.444,scaleY:1.444,x:381.5,y:641.8,alpha:1},6,cjs.Ease.quadOut).to({regX:0.5,regY:0.5,scaleX:2.6258,scaleY:2.6258,x:207.3,y:803.55,alpha:0.1016},28,cjs.Ease.circIn).to({scaleX:11.763,scaleY:11.763,x:-656.1,y:1799.15},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_10 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_10.setTransform(348.45,600.95,0.4747,0.4747,0,0,0,0.6,0.3);
	this.instance_10.alpha = 0.1016;
	this.instance_10.compositeOperation = "overlay";
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(51).to({_off:false},0).to({regX:0.4,regY:0.4,scaleX:0.6052,scaleY:0.6052,x:326.05,y:616.25,alpha:1},6,cjs.Ease.quadOut).to({x:248.65,y:673.2,alpha:0.1016},28,cjs.Ease.circIn).to({regX:0.5,scaleX:2.711,scaleY:2.711,x:-470.8,y:1215.2},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_11 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_11.setTransform(412.7,576.75,0.5302,0.5302,0,0,0,0.4,0.4);
	this.instance_11.alpha = 0.1016;
	this.instance_11.compositeOperation = "overlay";
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(51).to({_off:false},0).to({regY:0.3,scaleX:0.6758,scaleY:0.6758,x:229.2,y:621.7,alpha:1},6,cjs.Ease.quadOut).to({regX:0.3,regY:0.4,scaleX:0.8996,scaleY:0.8996,x:87.75,y:712.7,alpha:0.1016},28,cjs.Ease.circIn).to({regX:0.2,scaleX:4.0302,scaleY:4.0302,x:-1192.05,y:1392.2},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_12 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_12.setTransform(425.85,561.2,1.3606,1.3606);
	this.instance_12.alpha = 0.1016;
	this.instance_12.compositeOperation = "overlay";
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(51).to({_off:false},0).to({scaleX:1.7344,scaleY:1.7344,x:275.7,y:581.75,alpha:1},6,cjs.Ease.quadOut).to({scaleX:2.9064,scaleY:2.9064,x:-4.2,y:612.3,alpha:0.1016},28,cjs.Ease.circIn).to({scaleX:13.0203,scaleY:13.0203,x:-1603.65,y:942.4},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_13 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_13.setTransform(395.95,659.25,0.5302,0.5302,0,0,0,0.4,0.3);
	this.instance_13.alpha = 0.1016;
	this.instance_13.compositeOperation = "overlay";
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(51).to({_off:false},0).to({scaleX:0.6758,scaleY:0.6758,x:363.5,y:784.7,alpha:1},6,cjs.Ease.quadOut).to({x:320.45,y:852.65,alpha:0.1016},28,cjs.Ease.circIn).to({regY:0.4,scaleX:3.0274,scaleY:3.0274,x:-149.35,y:2019.4},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_14 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_14.setTransform(440.55,644.6,0.4503,0.4503,0,0,0,0.5,0.2);
	this.instance_14.alpha = 0.1016;
	this.instance_14.compositeOperation = "overlay";
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(51).to({_off:false},0).to({regX:0.4,scaleX:0.574,scaleY:0.574,x:406.05,y:801.1,alpha:1},6,cjs.Ease.quadOut).to({x:372.25,y:947.75,alpha:0.1016},28,cjs.Ease.circIn).to({regY:0.3,scaleX:2.5715,scaleY:2.5715,x:82.55,y:2445.5},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_15 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_15.setTransform(480.3,632.1,0.2546,0.2546,0,0,0,0.4,0.4);
	this.instance_15.alpha = 0.1016;
	this.instance_15.compositeOperation = "overlay";
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(51).to({_off:false},0).to({regX:0.3,regY:0.1,scaleX:0.3245,scaleY:0.3245,x:492.5,y:768.6,alpha:1},6,cjs.Ease.quadOut).to({x:577.6,y:915.65,alpha:0.1016},28,cjs.Ease.circIn).to({regX:0.4,regY:0.2,scaleX:1.4536,scaleY:1.4536,x:1002.7,y:2301.35},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_16 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_16.setTransform(496.75,614.95,0.2546,0.2546,0,0,0,0.4,0.2);
	this.instance_16.alpha = 0.1016;
	this.instance_16.compositeOperation = "overlay";
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(51).to({_off:false},0).to({regX:0.3,regY:0.1,scaleX:0.3245,scaleY:0.3245,x:611.1,y:770.5,alpha:1},6,cjs.Ease.quadOut).to({x:644.75,y:830,alpha:0.1016},28,cjs.Ease.circIn).to({regX:0.4,scaleX:1.4536,scaleY:1.4536,x:1303.5,y:1917.6},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_17 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_17.setTransform(527.4,513.85,0.3405,0.3405,0,0,0,0.3,0.1);
	this.instance_17.alpha = 0.1016;
	this.instance_17.compositeOperation = "overlay";
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(51).to({_off:false},0).to({regX:0.2,scaleX:0.434,scaleY:0.434,x:640.1,y:461.1,alpha:1},6,cjs.Ease.quadOut).to({regX:0.4,scaleX:0.6098,scaleY:0.6098,x:866.3,y:330,alpha:0.1016},28,cjs.Ease.circIn).to({regY:0.2,scaleX:2.7317,scaleY:2.7317,x:2295.9,y:-321.95},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_18 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_18.setTransform(565.05,505.15,0.586,0.586,0,0,0,0.1,0.1);
	this.instance_18.alpha = 0.1016;
	this.instance_18.compositeOperation = "overlay";
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(51).to({_off:false},0).to({scaleX:0.747,scaleY:0.747,x:694,y:429.55,alpha:1},6,cjs.Ease.quadOut).to({scaleX:1.1006,scaleY:1.1006,x:964.45,y:276.95,alpha:0.1016},28,cjs.Ease.circIn).to({scaleX:4.9304,scaleY:4.9304,x:2735.65,y:-559.9},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_19 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_19.setTransform(533.4,478.85,1.0827,1.0827,0,0,0,0.2,0.1);
	this.instance_19.alpha = 0.1016;
	this.instance_19.compositeOperation = "overlay";
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(51).to({_off:false},0).to({scaleX:1.3801,scaleY:1.3801,x:604.15,y:341.55,alpha:1},6,cjs.Ease.quadOut).to({regY:0.2,scaleX:2.1138,scaleY:2.1138,x:848.75,y:167.25,alpha:0.1016},28,cjs.Ease.circIn).to({scaleX:9.4692,scaleY:9.4692,x:2217.4,y:-1051.1},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_20 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_20.setTransform(498.35,592.05,0.8807,0.8807,0,0,0,0.1,0.1);
	this.instance_20.alpha = 0.1016;
	this.instance_20.compositeOperation = "overlay";
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(51).to({_off:false},0).to({scaleX:1.1227,scaleY:1.1227,x:637.95,y:700.45,alpha:1},6,cjs.Ease.quadOut).to({regX:0.2,scaleX:1.605,scaleY:1.605,x:906.5,y:901.15,alpha:0.1016},28,cjs.Ease.circIn).to({scaleX:7.19,scaleY:7.19,x:2476.05,y:2236.4},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_21 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_21.setTransform(518.7,605.95,1.2004,1.2004);
	this.instance_21.alpha = 0.1016;
	this.instance_21.compositeOperation = "overlay";
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(51).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.5301,scaleY:1.5301,x:654.85,y:711.4,alpha:1},6,cjs.Ease.quadOut).to({regX:0.2,scaleX:1.8976,scaleY:1.8976,x:925.35,y:907.35,alpha:0.1016},28,cjs.Ease.circIn).to({scaleX:8.5011,scaleY:8.5011,x:2560.35,y:2264.1},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_22 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_22.setTransform(373.75,616.4,1.0663,1.0663,0,0,0,0.1,0.1);
	this.instance_22.alpha = 0.1016;
	this.instance_22.compositeOperation = "overlay";
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(51).to({_off:false},0).to({regY:0,scaleX:1.3593,scaleY:1.3593,x:272.85,y:711.25,alpha:1},6,cjs.Ease.quadOut).to({regX:0,scaleX:2.2279,scaleY:2.2279,x:20.15,y:908.15,alpha:0.1016},28,cjs.Ease.circIn).to({scaleX:9.9806,scaleY:9.9806,x:-1494.5,y:2267.7},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_23 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_23.setTransform(361.75,544.1,1.3606,1.3606);
	this.instance_23.alpha = 0.1016;
	this.instance_23.compositeOperation = "overlay";
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(51).to({_off:false},0).to({scaleX:1.7344,scaleY:1.7344,x:238.7,y:548.25,alpha:1},6,cjs.Ease.quadOut).to({regX:-0.1,regY:0.1,scaleX:3.0782,scaleY:3.0782,x:-73.5,y:544.55,alpha:0.1016},28,cjs.Ease.circIn).to({scaleX:13.7897,scaleY:13.7897,x:-1914.1,y:639},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_24 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_24.setTransform(376.8,551.95,1.3606,1.3606);
	this.instance_24.alpha = 0.1016;
	this.instance_24.compositeOperation = "overlay";
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(51).to({_off:false},0).to({scaleX:1.7344,scaleY:1.7344,x:217.7,y:557.25,alpha:1},6,cjs.Ease.quadOut).to({regY:0.1,scaleX:2.8387,scaleY:2.8387,x:-94.4,y:559.55,alpha:0.1016},28,cjs.Ease.circIn).to({scaleX:12.7168,scaleY:12.7168,x:-2007.7,y:706},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_25 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_25.setTransform(382,506,1.3606,1.3606);
	this.instance_25.alpha = 0.1016;
	this.instance_25.compositeOperation = "overlay";
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(51).to({_off:false},0).to({scaleX:1.7344,scaleY:1.7344,x:238.7,y:462.3,alpha:1},6,cjs.Ease.quadOut).to({scaleX:2.5588,scaleY:2.5588,x:-49.7,y:345.6,alpha:0.1016},28,cjs.Ease.circIn).to({scaleX:11.4631,scaleY:11.4631,x:-1807.45,y:-252.4},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_26 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_26.setTransform(393.25,520.15,1.3606,1.3606);
	this.instance_26.alpha = 0.1016;
	this.instance_26.compositeOperation = "overlay";
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(51).to({_off:false},0).to({scaleX:1.7344,scaleY:1.7344,x:319,y:432.3,alpha:1},6,cjs.Ease.quadOut).to({regX:-0.1,regY:0.1,scaleX:3.5148,scaleY:3.5148,x:69.55,y:217.05,alpha:0.1016},28,cjs.Ease.circIn).to({scaleX:15.7458,scaleY:15.7458,x:-1273.15,y:-828.25},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_27 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_27.setTransform(498.6,489.05,1.3606,1.3606);
	this.instance_27.alpha = 0.1016;
	this.instance_27.compositeOperation = "overlay";
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(51).to({_off:false},0).to({scaleX:1.7344,scaleY:1.7344,x:547,y:366.3,alpha:1},6,cjs.Ease.quadOut).to({scaleX:2.3306,scaleY:2.3306,x:716.4,y:188,alpha:0.1016},28,cjs.Ease.circIn).to({scaleX:10.4405,scaleY:10.4405,x:1624.35,y:-958.3},5).wait(11));

	// ptc_SR_kirakira2_01
	this.instance_28 = new lib.ptc_SR_kirakira2_01_1();
	this.instance_28.setTransform(442.3,489.05,1.3606,1.3606);
	this.instance_28.alpha = 0.1016;
	this.instance_28.compositeOperation = "overlay";
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(51).to({_off:false},0).to({scaleX:1.7344,scaleY:1.7344,x:449,y:390.3,alpha:1},6,cjs.Ease.quadOut).to({scaleX:2.172,scaleY:2.172,x:446.25,y:48.05,alpha:0.1016},28,cjs.Ease.circIn).to({scaleX:9.7303,scaleY:9.7303,x:414.1,y:-1585.25},5).wait(11));

	// eff_kakutei_2_crosslight
	this.instance_29 = new lib.eff_kakutei_2_crosslight_1();
	this.instance_29.setTransform(462.1,561.5,5.3729,5.3729,-59.9996,0,0,0.1,0.2);
	this.instance_29.compositeOperation = "overlay";
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(48).to({_off:false},0).to({regY:0.1,scaleX:2.955,scaleY:2.955,rotation:0,x:449.85,y:559.3},4).wait(1).to({regX:0,regY:0,scaleX:2.9588,scaleY:2.9588,rotation:2.393,x:449.5681,y:558.9737},0).wait(1).to({scaleX:2.9635,scaleY:2.9635,rotation:4.786,x:449.5868,y:558.9481},0).wait(1).to({scaleX:2.9688,scaleY:2.9688,rotation:7.179,x:449.6062,y:558.923},0).wait(1).to({scaleX:2.9752,scaleY:2.9752,rotation:9.5721,x:449.6263,y:558.8987},0).wait(1).to({scaleX:2.9824,scaleY:2.9824,rotation:11.9651,x:449.647,y:558.875},0).wait(1).to({scaleX:2.9906,scaleY:2.9906,rotation:14.3581,x:449.6682,y:558.852},0).wait(1).to({scaleX:2.9999,scaleY:2.9999,rotation:16.7511,x:449.6901,y:558.8296},0).wait(1).to({scaleX:3.0102,scaleY:3.0102,rotation:19.1441,x:449.7125,y:558.808},0).wait(1).to({scaleX:3.0217,scaleY:3.0217,rotation:21.5371,x:449.7355,y:558.787},0).wait(1).to({scaleX:3.0345,scaleY:3.0345,rotation:23.9301,x:449.759,y:558.7668},0).wait(1).to({scaleX:3.0485,scaleY:3.0485,rotation:26.3232,x:449.7831,y:558.7473},0).wait(1).to({scaleX:3.064,scaleY:3.064,rotation:28.7162,x:449.8077,y:558.7284},0).wait(1).to({scaleX:3.081,scaleY:3.081,rotation:31.1092,x:449.8327,y:558.7103},0).wait(1).to({scaleX:3.0995,scaleY:3.0995,rotation:33.5022,x:449.8583,y:558.6928},0).wait(1).to({scaleX:3.1199,scaleY:3.1199,rotation:35.8952,x:449.8843,y:558.6761},0).wait(1).to({scaleX:3.1421,scaleY:3.1421,rotation:38.2882,x:449.9109,y:558.66},0).wait(1).to({scaleX:3.1663,scaleY:3.1663,rotation:40.6812,x:449.9379,y:558.6446},0).wait(1).to({scaleX:3.1929,scaleY:3.1929,rotation:43.0743,x:449.9655,y:558.6299},0).wait(1).to({scaleX:3.2219,scaleY:3.2219,rotation:45.4673,x:449.9935,y:558.6158},0).wait(1).to({scaleX:3.2537,scaleY:3.2537,rotation:47.8603,x:450.0221,y:558.6023},0).wait(1).to({scaleX:3.2885,scaleY:3.2885,rotation:50.2533,x:450.0513,y:558.5894},0).wait(1).to({scaleX:3.3268,scaleY:3.3268,rotation:52.6463,x:450.081,y:558.5771},0).wait(1).to({scaleX:3.3691,scaleY:3.3691,rotation:55.0393,x:450.1114,y:558.5652},0).wait(1).to({scaleX:3.4159,scaleY:3.4159,rotation:57.4323,x:450.1426,y:558.5537},0).wait(1).to({scaleX:3.4681,scaleY:3.4681,rotation:59.8254,x:450.1745,y:558.5426},0).wait(1).to({scaleX:3.5266,scaleY:3.5266,rotation:62.2184,x:450.2074,y:558.5316},0).wait(1).to({scaleX:3.5929,scaleY:3.5929,rotation:64.6114,x:450.2415,y:558.5207},0).wait(1).to({scaleX:3.669,scaleY:3.669,rotation:67.0044,x:450.2771,y:558.5095},0).wait(1).to({scaleX:3.758,scaleY:3.758,rotation:69.3974,x:450.3145,y:558.4975},0).wait(1).to({scaleX:3.8652,scaleY:3.8652,rotation:71.7904,x:450.3544,y:558.484},0).wait(1).to({scaleX:4.0006,scaleY:4.0006,rotation:74.1834,x:450.3984,y:558.4674},0).wait(1).to({scaleX:4.1903,scaleY:4.1903,rotation:76.5765,x:450.4498,y:558.4435},0).wait(1).to({regX:0.1,regY:0.1,scaleX:4.6313,scaleY:4.6313,rotation:78.9695,x:450,y:559.2},0).to({scaleX:20.7474,scaleY:20.7474,rotation:90,x:430.25,y:704.35},5).wait(11));

	// bg_live
	this.instance_30 = new lib.bg_live();
	this.instance_30.setTransform(462.2,612.05,0.8248,0.8248,0,0,0,0.2,-741.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(36).to({regY:-741.8,scaleX:2.5447,scaleY:2.5447,x:1495.95,y:-170.25},24,cjs.Ease.quintOut).to({scaleX:3.6515,scaleY:3.6515,x:1947.55,y:-469.35},25,cjs.Ease.cubicIn).to({scaleX:11.3997,scaleY:11.3997,x:5141.4,y:-2563.3},5).wait(11));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EhH3hfTMCPvAAAMAAAC+nMiPvAAAg");
	this.shape.setTransform(450,600);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("EhH3BfUMAAAi+nMCPvAAAMAAAC+ng");
	this.shape_1.setTransform(450,600);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(101));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-9572.5,-10424.1,29873.2,17671.1);
// library properties:
lib.properties = {
	id: 'D908098B007E424BA8044AB5718AB16E',
	width: 900,
	height: 1200,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/bg049_arena_in_08_trimming_01_gashaalien.jpg?1742191333560", id:"bg049_arena_in_08_trimming_01_gashaalien"},
		{src:"images/gasha_eff_atlas_1.png?1742191333542", id:"gasha_eff_atlas_1"}
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
an.compositions['D908098B007E424BA8044AB5718AB16E'] = {
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