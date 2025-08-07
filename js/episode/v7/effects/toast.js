(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"toast_atlas_1", frames: [[0,1042,1325,150],[0,1194,1325,150],[0,1346,1325,150],[0,1498,1325,150],[0,840,1800,200],[0,0,838,838]]}
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



(lib.cwo_aprilfool_title_01 = function() {
	this.initialize(ss["toast_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cwo_aprilfool_title_02 = function() {
	this.initialize(ss["toast_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cwo_aprilfool_title_03 = function() {
	this.initialize(ss["toast_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cwo_aprilfool_title_04 = function() {
	this.initialize(ss["toast_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.title_base = function() {
	this.initialize(ss["toast_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.white_circle = function() {
	this.initialize(ss["toast_atlas_1"]);
	this.gotoAndStop(5);
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


(lib.title_4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cwo_aprilfool_title_04();
	this.instance.setTransform(-662.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.title_4, new cjs.Rectangle(-662.5,-75,1325,150), null);


(lib.title_3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cwo_aprilfool_title_03();
	this.instance.setTransform(-662.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.title_3, new cjs.Rectangle(-662.5,-75,1325,150), null);


(lib.title_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cwo_aprilfool_title_02();
	this.instance.setTransform(-662.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.title_2, new cjs.Rectangle(-662.5,-75,1325,150), null);


(lib.title_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cwo_aprilfool_title_01();
	this.instance.setTransform(-662.5,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.title_1, new cjs.Rectangle(-662.5,-75,1325,150), null);


(lib.circle_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.white_circle();
	this.instance.setTransform(-419,-419);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circle_mc, new cjs.Rectangle(-419,-419,838,838), null);


(lib.base_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.title_base();
	this.instance.setTransform(-900,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.base_mc, new cjs.Rectangle(-900,-100,1800,200), null);


(lib.titles = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// titles
	this.instance = new lib.title_1();

	this.instance_1 = new lib.title_2();

	this.instance_2 = new lib.title_3();

	this.instance_3 = new lib.title_4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-662.5,-75,1325,150);


(lib.base = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_404 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(404).call(this.frame_404).wait(1));

	// circle_mc
	this.instance = new lib.circle_mc();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},404).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-592.6,-592.6,1185.2,1185.2);


(lib.base_and_circle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// circle_mc
	this.instance = new lib.base();
	this.instance.setTransform(0,0,1.1714,1.1714);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.5782,scaleY:1.5782},199).to({scaleX:1.1714,scaleY:1.1714},201).wait(1));

	// base_mc
	this.instance_1 = new lib.base_mc();
	this.instance_1.setTransform(0,0,1.4865,1.4865);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(401));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1337.8,-661.2,2675.7,1322.5);


// stage content:
(lib.toast = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {title1:1,title2:81,title3:161,title4:241};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,80,81,160,161,240,241,320];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.titles.gotoAndStop(0);
		this.base_and_circle.gotoAndPlay(1);
	}
	this.frame_80 = function() {
		this.stop();
		this.base_and_circle.stop();
		this.dispatchEvent("finish");
	}
	this.frame_81 = function() {
		this.titles.gotoAndStop(1);
		this.base_and_circle.gotoAndPlay(1);
	}
	this.frame_160 = function() {
		this.stop();
		this.base_and_circle.stop();
		this.dispatchEvent("finish");
	}
	this.frame_161 = function() {
		this.titles.gotoAndStop(2);
		this.base_and_circle.gotoAndPlay(1);
	}
	this.frame_240 = function() {
		this.stop();
		this.base_and_circle.stop();
		this.dispatchEvent("finish");
	}
	this.frame_241 = function() {
		this.titles.gotoAndStop(3);
		this.base_and_circle.gotoAndPlay(1);
	}
	this.frame_320 = function() {
		this.stop();
		this.base_and_circle.stop();
		this.dispatchEvent("finish");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(79).call(this.frame_80).wait(1).call(this.frame_81).wait(79).call(this.frame_160).wait(1).call(this.frame_161).wait(79).call(this.frame_240).wait(1).call(this.frame_241).wait(79).call(this.frame_320).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EhGTAu6IAAgJMCMnAAAIAAAJg");
	var mask_graphics_2 = new cjs.Graphics().p("EhGTAvxIAAjkMCMnAAAIAADkg");
	var mask_graphics_3 = new cjs.Graphics().p("EhGTAwnIAAm9MCMnAAAIAAG9g");
	var mask_graphics_4 = new cjs.Graphics().p("EhGTAxeIAAqYMCMnAAAIAAKYg");
	var mask_graphics_5 = new cjs.Graphics().p("EhGTAyUIAAtxMCMnAAAIAANxg");
	var mask_graphics_6 = new cjs.Graphics().p("EhGTAzLIAAxMMCMnAAAIAARMg");
	var mask_graphics_7 = new cjs.Graphics().p("EhGTAzMIAAxQMCMnAAAIAARQg");
	var mask_graphics_8 = new cjs.Graphics().p("EhGTAzNIAAxUMCMnAAAIAARUg");
	var mask_graphics_9 = new cjs.Graphics().p("EhGTAzOIAAxYMCMnAAAIAARYg");
	var mask_graphics_10 = new cjs.Graphics().p("EhGTAzPIAAxbMCMnAAAIAARbg");
	var mask_graphics_11 = new cjs.Graphics().p("EhGTAzQIAAxfMCMnAAAIAARfg");
	var mask_graphics_12 = new cjs.Graphics().p("EhGTAzRIAAxjMCMnAAAIAARjg");
	var mask_graphics_13 = new cjs.Graphics().p("EhGTAzSIAAxnMCMnAAAIAARng");
	var mask_graphics_14 = new cjs.Graphics().p("EhGTAzTIAAxrMCMnAAAIAARrg");
	var mask_graphics_15 = new cjs.Graphics().p("EhGTAzUIAAxvMCMnAAAIAARvg");
	var mask_graphics_16 = new cjs.Graphics().p("EhGTAzVIAAxzMCMnAAAIAARzg");
	var mask_graphics_17 = new cjs.Graphics().p("EhGTAzWIAAx3MCMnAAAIAAR3g");
	var mask_graphics_18 = new cjs.Graphics().p("EhGTAzWIAAx5MCMnAAAIAAR5g");
	var mask_graphics_19 = new cjs.Graphics().p("EhGTAzXIAAx9MCMnAAAIAAR9g");
	var mask_graphics_20 = new cjs.Graphics().p("EhGTAzYIAAyBMCMnAAAIAASBg");
	var mask_graphics_21 = new cjs.Graphics().p("EhGTAzZIAAyFMCMnAAAIAASFg");
	var mask_graphics_22 = new cjs.Graphics().p("EhGTAzaIAAyJMCMnAAAIAASJg");
	var mask_graphics_23 = new cjs.Graphics().p("EhGTAzbIAAyNMCMnAAAIAASNg");
	var mask_graphics_24 = new cjs.Graphics().p("EhGTAzcIAAyRMCMnAAAIAASRg");
	var mask_graphics_25 = new cjs.Graphics().p("EhGTAzdIAAyUMCMnAAAIAASUg");
	var mask_graphics_26 = new cjs.Graphics().p("EhGTAzeIAAyYMCMnAAAIAASYg");
	var mask_graphics_27 = new cjs.Graphics().p("EhGTAzfIAAycMCMnAAAIAAScg");
	var mask_graphics_28 = new cjs.Graphics().p("EhGTAzgIAAygMCMnAAAIAASgg");
	var mask_graphics_29 = new cjs.Graphics().p("EhGTAzhIAAykMCMnAAAIAASkg");
	var mask_graphics_30 = new cjs.Graphics().p("EhGTAziIAAyoMCMnAAAIAASog");
	var mask_graphics_31 = new cjs.Graphics().p("EhGTAzjIAAysMCMnAAAIAASsg");
	var mask_graphics_32 = new cjs.Graphics().p("EhGTAzkIAAywMCMnAAAIAASwg");
	var mask_graphics_33 = new cjs.Graphics().p("EhGTAzlIAAyzMCMnAAAIAASzg");
	var mask_graphics_34 = new cjs.Graphics().p("EhGTAzmIAAy3MCMnAAAIAAS3g");
	var mask_graphics_35 = new cjs.Graphics().p("EhGTAznIAAy7MCMnAAAIAAS7g");
	var mask_graphics_36 = new cjs.Graphics().p("EhGTAzoIAAy/MCMnAAAIAAS/g");
	var mask_graphics_37 = new cjs.Graphics().p("EhGTAzpIAAzDMCMnAAAIAATDg");
	var mask_graphics_38 = new cjs.Graphics().p("EhGTAzqIAAzHMCMnAAAIAATHg");
	var mask_graphics_39 = new cjs.Graphics().p("EhGTAzrIAAzLMCMnAAAIAATLg");
	var mask_graphics_40 = new cjs.Graphics().p("EhGTAzsIAAzPMCMnAAAIAATPg");
	var mask_graphics_41 = new cjs.Graphics().p("EhGTAzsIAAzRMCMnAAAIAATRg");
	var mask_graphics_42 = new cjs.Graphics().p("EhGTAztIAAzVMCMnAAAIAATVg");
	var mask_graphics_43 = new cjs.Graphics().p("EhGTAzuIAAzZMCMnAAAIAATZg");
	var mask_graphics_44 = new cjs.Graphics().p("EhGTAzvIAAzdMCMnAAAIAATdg");
	var mask_graphics_45 = new cjs.Graphics().p("EhGTAzwIAAzhMCMnAAAIAAThg");
	var mask_graphics_46 = new cjs.Graphics().p("EhGTAzxIAAzlMCMnAAAIAATlg");
	var mask_graphics_47 = new cjs.Graphics().p("EhGTAzyIAAzpMCMnAAAIAATpg");
	var mask_graphics_48 = new cjs.Graphics().p("EhGTAzzIAAztMCMnAAAIAATtg");
	var mask_graphics_49 = new cjs.Graphics().p("EhGTAz0IAAzwMCMnAAAIAATwg");
	var mask_graphics_50 = new cjs.Graphics().p("EhGTAz1IAAz0MCMnAAAIAAT0g");
	var mask_graphics_51 = new cjs.Graphics().p("EhGTAz2IAAz4MCMnAAAIAAT4g");
	var mask_graphics_52 = new cjs.Graphics().p("EhGTAz3IAAz8MCMnAAAIAAT8g");
	var mask_graphics_53 = new cjs.Graphics().p("EhGTAz4IAA0AMCMnAAAIAAUAg");
	var mask_graphics_54 = new cjs.Graphics().p("EhGTAz5IAA0EMCMnAAAIAAUEg");
	var mask_graphics_55 = new cjs.Graphics().p("EhGTAz6IAA0IMCMnAAAIAAUIg");
	var mask_graphics_56 = new cjs.Graphics().p("EhGTAz7IAA0LMCMnAAAIAAULg");
	var mask_graphics_57 = new cjs.Graphics().p("EhGTAz8IAA0PMCMnAAAIAAUPg");
	var mask_graphics_58 = new cjs.Graphics().p("EhGTAz9IAA0TMCMnAAAIAAUTg");
	var mask_graphics_59 = new cjs.Graphics().p("EhGTAz+IAA0XMCMnAAAIAAUXg");
	var mask_graphics_60 = new cjs.Graphics().p("EhGTAz/IAA0bMCMnAAAIAAUbg");
	var mask_graphics_61 = new cjs.Graphics().p("EhGTA0AIAA0fMCMnAAAIAAUfg");
	var mask_graphics_62 = new cjs.Graphics().p("EhGTA0BIAA0jMCMnAAAIAAUjg");
	var mask_graphics_63 = new cjs.Graphics().p("EhGTA0CIAA0nMCMnAAAIAAUng");
	var mask_graphics_64 = new cjs.Graphics().p("EhGTA0CIAA0pMCMnAAAIAAUpg");
	var mask_graphics_65 = new cjs.Graphics().p("EhGTA0DIAA0tMCMnAAAIAAUtg");
	var mask_graphics_66 = new cjs.Graphics().p("EhGTA0EIAA0xMCMnAAAIAAUxg");
	var mask_graphics_67 = new cjs.Graphics().p("EhGTA0FIAA01MCMnAAAIAAU1g");
	var mask_graphics_68 = new cjs.Graphics().p("EhGTA0GIAA05MCMnAAAIAAU5g");
	var mask_graphics_69 = new cjs.Graphics().p("EhGTA0HIAA09MCMnAAAIAAU9g");
	var mask_graphics_70 = new cjs.Graphics().p("EhGTA0IIAA1BMCMnAAAIAAVBg");
	var mask_graphics_71 = new cjs.Graphics().p("EhGTA0JIAA1FMCMnAAAIAAVFg");
	var mask_graphics_72 = new cjs.Graphics().p("EhGTAzRIAAxlMCMnAAAIAARlg");
	var mask_graphics_73 = new cjs.Graphics().p("EhGTAyaIAAuHMCMnAAAIAAOHg");
	var mask_graphics_74 = new cjs.Graphics().p("EhGTAxiIAAqnMCMnAAAIAAKng");
	var mask_graphics_75 = new cjs.Graphics().p("EhGTAwqIAAnIMCMnAAAIAAHIg");
	var mask_graphics_76 = new cjs.Graphics().p("EhGTAvyIAAjpMCMnAAAIAADpg");
	var mask_graphics_77 = new cjs.Graphics().p("EhGTAu6IAAgJMCMnAAAIAAAJg");
	var mask_graphics_80 = new cjs.Graphics().p("EhGThOAIAAgJMCMnAAAIAAAJg");
	var mask_graphics_81 = new cjs.Graphics().p("EhGTAu6IAAgJMCMnAAAIAAAJg");
	var mask_graphics_82 = new cjs.Graphics().p("EhGTAvxIAAjkMCMnAAAIAADkg");
	var mask_graphics_83 = new cjs.Graphics().p("EhGTAwnIAAm9MCMnAAAIAAG9g");
	var mask_graphics_84 = new cjs.Graphics().p("EhGTAxeIAAqYMCMnAAAIAAKYg");
	var mask_graphics_85 = new cjs.Graphics().p("EhGTAyUIAAtxMCMnAAAIAANxg");
	var mask_graphics_86 = new cjs.Graphics().p("EhGTAzLIAAxMMCMnAAAIAARMg");
	var mask_graphics_87 = new cjs.Graphics().p("EhGTAzMIAAxQMCMnAAAIAARQg");
	var mask_graphics_88 = new cjs.Graphics().p("EhGTAzNIAAxUMCMnAAAIAARUg");
	var mask_graphics_89 = new cjs.Graphics().p("EhGTAzOIAAxYMCMnAAAIAARYg");
	var mask_graphics_90 = new cjs.Graphics().p("EhGTAzPIAAxbMCMnAAAIAARbg");
	var mask_graphics_91 = new cjs.Graphics().p("EhGTAzQIAAxfMCMnAAAIAARfg");
	var mask_graphics_92 = new cjs.Graphics().p("EhGTAzRIAAxjMCMnAAAIAARjg");
	var mask_graphics_93 = new cjs.Graphics().p("EhGTAzSIAAxnMCMnAAAIAARng");
	var mask_graphics_94 = new cjs.Graphics().p("EhGTAzTIAAxrMCMnAAAIAARrg");
	var mask_graphics_95 = new cjs.Graphics().p("EhGTAzUIAAxvMCMnAAAIAARvg");
	var mask_graphics_96 = new cjs.Graphics().p("EhGTAzVIAAxzMCMnAAAIAARzg");
	var mask_graphics_97 = new cjs.Graphics().p("EhGTAzWIAAx3MCMnAAAIAAR3g");
	var mask_graphics_98 = new cjs.Graphics().p("EhGTAzWIAAx5MCMnAAAIAAR5g");
	var mask_graphics_99 = new cjs.Graphics().p("EhGTAzXIAAx9MCMnAAAIAAR9g");
	var mask_graphics_100 = new cjs.Graphics().p("EhGTAzYIAAyBMCMnAAAIAASBg");
	var mask_graphics_101 = new cjs.Graphics().p("EhGTAzZIAAyFMCMnAAAIAASFg");
	var mask_graphics_102 = new cjs.Graphics().p("EhGTAzaIAAyJMCMnAAAIAASJg");
	var mask_graphics_103 = new cjs.Graphics().p("EhGTAzbIAAyNMCMnAAAIAASNg");
	var mask_graphics_104 = new cjs.Graphics().p("EhGTAzcIAAyRMCMnAAAIAASRg");
	var mask_graphics_105 = new cjs.Graphics().p("EhGTAzdIAAyUMCMnAAAIAASUg");
	var mask_graphics_106 = new cjs.Graphics().p("EhGTAzeIAAyYMCMnAAAIAASYg");
	var mask_graphics_107 = new cjs.Graphics().p("EhGTAzfIAAycMCMnAAAIAAScg");
	var mask_graphics_108 = new cjs.Graphics().p("EhGTAzgIAAygMCMnAAAIAASgg");
	var mask_graphics_109 = new cjs.Graphics().p("EhGTAzhIAAykMCMnAAAIAASkg");
	var mask_graphics_110 = new cjs.Graphics().p("EhGTAziIAAyoMCMnAAAIAASog");
	var mask_graphics_111 = new cjs.Graphics().p("EhGTAzjIAAysMCMnAAAIAASsg");
	var mask_graphics_112 = new cjs.Graphics().p("EhGTAzkIAAywMCMnAAAIAASwg");
	var mask_graphics_113 = new cjs.Graphics().p("EhGTAzlIAAyzMCMnAAAIAASzg");
	var mask_graphics_114 = new cjs.Graphics().p("EhGTAzmIAAy3MCMnAAAIAAS3g");
	var mask_graphics_115 = new cjs.Graphics().p("EhGTAznIAAy7MCMnAAAIAAS7g");
	var mask_graphics_116 = new cjs.Graphics().p("EhGTAzoIAAy/MCMnAAAIAAS/g");
	var mask_graphics_117 = new cjs.Graphics().p("EhGTAzpIAAzDMCMnAAAIAATDg");
	var mask_graphics_118 = new cjs.Graphics().p("EhGTAzqIAAzHMCMnAAAIAATHg");
	var mask_graphics_119 = new cjs.Graphics().p("EhGTAzrIAAzLMCMnAAAIAATLg");
	var mask_graphics_120 = new cjs.Graphics().p("EhGTAzsIAAzPMCMnAAAIAATPg");
	var mask_graphics_121 = new cjs.Graphics().p("EhGTAzsIAAzRMCMnAAAIAATRg");
	var mask_graphics_122 = new cjs.Graphics().p("EhGTAztIAAzVMCMnAAAIAATVg");
	var mask_graphics_123 = new cjs.Graphics().p("EhGTAzuIAAzZMCMnAAAIAATZg");
	var mask_graphics_124 = new cjs.Graphics().p("EhGTAzvIAAzdMCMnAAAIAATdg");
	var mask_graphics_125 = new cjs.Graphics().p("EhGTAzwIAAzhMCMnAAAIAAThg");
	var mask_graphics_126 = new cjs.Graphics().p("EhGTAzxIAAzlMCMnAAAIAATlg");
	var mask_graphics_127 = new cjs.Graphics().p("EhGTAzyIAAzpMCMnAAAIAATpg");
	var mask_graphics_128 = new cjs.Graphics().p("EhGTAzzIAAztMCMnAAAIAATtg");
	var mask_graphics_129 = new cjs.Graphics().p("EhGTAz0IAAzwMCMnAAAIAATwg");
	var mask_graphics_130 = new cjs.Graphics().p("EhGTAz1IAAz0MCMnAAAIAAT0g");
	var mask_graphics_131 = new cjs.Graphics().p("EhGTAz2IAAz4MCMnAAAIAAT4g");
	var mask_graphics_132 = new cjs.Graphics().p("EhGTAz3IAAz8MCMnAAAIAAT8g");
	var mask_graphics_133 = new cjs.Graphics().p("EhGTAz4IAA0AMCMnAAAIAAUAg");
	var mask_graphics_134 = new cjs.Graphics().p("EhGTAz5IAA0EMCMnAAAIAAUEg");
	var mask_graphics_135 = new cjs.Graphics().p("EhGTAz6IAA0IMCMnAAAIAAUIg");
	var mask_graphics_136 = new cjs.Graphics().p("EhGTAz7IAA0LMCMnAAAIAAULg");
	var mask_graphics_137 = new cjs.Graphics().p("EhGTAz8IAA0PMCMnAAAIAAUPg");
	var mask_graphics_138 = new cjs.Graphics().p("EhGTAz9IAA0TMCMnAAAIAAUTg");
	var mask_graphics_139 = new cjs.Graphics().p("EhGTAz+IAA0XMCMnAAAIAAUXg");
	var mask_graphics_140 = new cjs.Graphics().p("EhGTAz/IAA0bMCMnAAAIAAUbg");
	var mask_graphics_141 = new cjs.Graphics().p("EhGTA0AIAA0fMCMnAAAIAAUfg");
	var mask_graphics_142 = new cjs.Graphics().p("EhGTA0BIAA0jMCMnAAAIAAUjg");
	var mask_graphics_143 = new cjs.Graphics().p("EhGTA0CIAA0nMCMnAAAIAAUng");
	var mask_graphics_144 = new cjs.Graphics().p("EhGTA0CIAA0pMCMnAAAIAAUpg");
	var mask_graphics_145 = new cjs.Graphics().p("EhGTA0DIAA0tMCMnAAAIAAUtg");
	var mask_graphics_146 = new cjs.Graphics().p("EhGTA0EIAA0xMCMnAAAIAAUxg");
	var mask_graphics_147 = new cjs.Graphics().p("EhGTA0FIAA01MCMnAAAIAAU1g");
	var mask_graphics_148 = new cjs.Graphics().p("EhGTA0GIAA05MCMnAAAIAAU5g");
	var mask_graphics_149 = new cjs.Graphics().p("EhGTA0HIAA09MCMnAAAIAAU9g");
	var mask_graphics_150 = new cjs.Graphics().p("EhGTA0IIAA1BMCMnAAAIAAVBg");
	var mask_graphics_151 = new cjs.Graphics().p("EhGTA0JIAA1FMCMnAAAIAAVFg");
	var mask_graphics_152 = new cjs.Graphics().p("EhGTAzRIAAxlMCMnAAAIAARlg");
	var mask_graphics_153 = new cjs.Graphics().p("EhGTAyaIAAuHMCMnAAAIAAOHg");
	var mask_graphics_154 = new cjs.Graphics().p("EhGTAxiIAAqnMCMnAAAIAAKng");
	var mask_graphics_155 = new cjs.Graphics().p("EhGTAwqIAAnIMCMnAAAIAAHIg");
	var mask_graphics_156 = new cjs.Graphics().p("EhGTAvyIAAjpMCMnAAAIAADpg");
	var mask_graphics_157 = new cjs.Graphics().p("EhGTAu6IAAgJMCMnAAAIAAAJg");
	var mask_graphics_160 = new cjs.Graphics().p("EhGThOAIAAgJMCMnAAAIAAAJg");
	var mask_graphics_161 = new cjs.Graphics().p("EhGTAu6IAAgJMCMnAAAIAAAJg");
	var mask_graphics_162 = new cjs.Graphics().p("EhGTAvxIAAjkMCMnAAAIAADkg");
	var mask_graphics_163 = new cjs.Graphics().p("EhGTAwnIAAm9MCMnAAAIAAG9g");
	var mask_graphics_164 = new cjs.Graphics().p("EhGTAxeIAAqYMCMnAAAIAAKYg");
	var mask_graphics_165 = new cjs.Graphics().p("EhGTAyUIAAtxMCMnAAAIAANxg");
	var mask_graphics_166 = new cjs.Graphics().p("EhGTAzLIAAxMMCMnAAAIAARMg");
	var mask_graphics_167 = new cjs.Graphics().p("EhGTAzMIAAxQMCMnAAAIAARQg");
	var mask_graphics_168 = new cjs.Graphics().p("EhGTAzNIAAxUMCMnAAAIAARUg");
	var mask_graphics_169 = new cjs.Graphics().p("EhGTAzOIAAxYMCMnAAAIAARYg");
	var mask_graphics_170 = new cjs.Graphics().p("EhGTAzPIAAxbMCMnAAAIAARbg");
	var mask_graphics_171 = new cjs.Graphics().p("EhGTAzQIAAxfMCMnAAAIAARfg");
	var mask_graphics_172 = new cjs.Graphics().p("EhGTAzRIAAxjMCMnAAAIAARjg");
	var mask_graphics_173 = new cjs.Graphics().p("EhGTAzSIAAxnMCMnAAAIAARng");
	var mask_graphics_174 = new cjs.Graphics().p("EhGTAzTIAAxrMCMnAAAIAARrg");
	var mask_graphics_175 = new cjs.Graphics().p("EhGTAzUIAAxvMCMnAAAIAARvg");
	var mask_graphics_176 = new cjs.Graphics().p("EhGTAzVIAAxzMCMnAAAIAARzg");
	var mask_graphics_177 = new cjs.Graphics().p("EhGTAzWIAAx3MCMnAAAIAAR3g");
	var mask_graphics_178 = new cjs.Graphics().p("EhGTAzWIAAx5MCMnAAAIAAR5g");
	var mask_graphics_179 = new cjs.Graphics().p("EhGTAzXIAAx9MCMnAAAIAAR9g");
	var mask_graphics_180 = new cjs.Graphics().p("EhGTAzYIAAyBMCMnAAAIAASBg");
	var mask_graphics_181 = new cjs.Graphics().p("EhGTAzZIAAyFMCMnAAAIAASFg");
	var mask_graphics_182 = new cjs.Graphics().p("EhGTAzaIAAyJMCMnAAAIAASJg");
	var mask_graphics_183 = new cjs.Graphics().p("EhGTAzbIAAyNMCMnAAAIAASNg");
	var mask_graphics_184 = new cjs.Graphics().p("EhGTAzcIAAyRMCMnAAAIAASRg");
	var mask_graphics_185 = new cjs.Graphics().p("EhGTAzdIAAyUMCMnAAAIAASUg");
	var mask_graphics_186 = new cjs.Graphics().p("EhGTAzeIAAyYMCMnAAAIAASYg");
	var mask_graphics_187 = new cjs.Graphics().p("EhGTAzfIAAycMCMnAAAIAAScg");
	var mask_graphics_188 = new cjs.Graphics().p("EhGTAzgIAAygMCMnAAAIAASgg");
	var mask_graphics_189 = new cjs.Graphics().p("EhGTAzhIAAykMCMnAAAIAASkg");
	var mask_graphics_190 = new cjs.Graphics().p("EhGTAziIAAyoMCMnAAAIAASog");
	var mask_graphics_191 = new cjs.Graphics().p("EhGTAzjIAAysMCMnAAAIAASsg");
	var mask_graphics_192 = new cjs.Graphics().p("EhGTAzkIAAywMCMnAAAIAASwg");
	var mask_graphics_193 = new cjs.Graphics().p("EhGTAzlIAAyzMCMnAAAIAASzg");
	var mask_graphics_194 = new cjs.Graphics().p("EhGTAzmIAAy3MCMnAAAIAAS3g");
	var mask_graphics_195 = new cjs.Graphics().p("EhGTAznIAAy7MCMnAAAIAAS7g");
	var mask_graphics_196 = new cjs.Graphics().p("EhGTAzoIAAy/MCMnAAAIAAS/g");
	var mask_graphics_197 = new cjs.Graphics().p("EhGTAzpIAAzDMCMnAAAIAATDg");
	var mask_graphics_198 = new cjs.Graphics().p("EhGTAzqIAAzHMCMnAAAIAATHg");
	var mask_graphics_199 = new cjs.Graphics().p("EhGTAzrIAAzLMCMnAAAIAATLg");
	var mask_graphics_200 = new cjs.Graphics().p("EhGTAzsIAAzPMCMnAAAIAATPg");
	var mask_graphics_201 = new cjs.Graphics().p("EhGTAzsIAAzRMCMnAAAIAATRg");
	var mask_graphics_202 = new cjs.Graphics().p("EhGTAztIAAzVMCMnAAAIAATVg");
	var mask_graphics_203 = new cjs.Graphics().p("EhGTAzuIAAzZMCMnAAAIAATZg");
	var mask_graphics_204 = new cjs.Graphics().p("EhGTAzvIAAzdMCMnAAAIAATdg");
	var mask_graphics_205 = new cjs.Graphics().p("EhGTAzwIAAzhMCMnAAAIAAThg");
	var mask_graphics_206 = new cjs.Graphics().p("EhGTAzxIAAzlMCMnAAAIAATlg");
	var mask_graphics_207 = new cjs.Graphics().p("EhGTAzyIAAzpMCMnAAAIAATpg");
	var mask_graphics_208 = new cjs.Graphics().p("EhGTAzzIAAztMCMnAAAIAATtg");
	var mask_graphics_209 = new cjs.Graphics().p("EhGTAz0IAAzwMCMnAAAIAATwg");
	var mask_graphics_210 = new cjs.Graphics().p("EhGTAz1IAAz0MCMnAAAIAAT0g");
	var mask_graphics_211 = new cjs.Graphics().p("EhGTAz2IAAz4MCMnAAAIAAT4g");
	var mask_graphics_212 = new cjs.Graphics().p("EhGTAz3IAAz8MCMnAAAIAAT8g");
	var mask_graphics_213 = new cjs.Graphics().p("EhGTAz4IAA0AMCMnAAAIAAUAg");
	var mask_graphics_214 = new cjs.Graphics().p("EhGTAz5IAA0EMCMnAAAIAAUEg");
	var mask_graphics_215 = new cjs.Graphics().p("EhGTAz6IAA0IMCMnAAAIAAUIg");
	var mask_graphics_216 = new cjs.Graphics().p("EhGTAz7IAA0LMCMnAAAIAAULg");
	var mask_graphics_217 = new cjs.Graphics().p("EhGTAz8IAA0PMCMnAAAIAAUPg");
	var mask_graphics_218 = new cjs.Graphics().p("EhGTAz9IAA0TMCMnAAAIAAUTg");
	var mask_graphics_219 = new cjs.Graphics().p("EhGTAz+IAA0XMCMnAAAIAAUXg");
	var mask_graphics_220 = new cjs.Graphics().p("EhGTAz/IAA0bMCMnAAAIAAUbg");
	var mask_graphics_221 = new cjs.Graphics().p("EhGTA0AIAA0fMCMnAAAIAAUfg");
	var mask_graphics_222 = new cjs.Graphics().p("EhGTA0BIAA0jMCMnAAAIAAUjg");
	var mask_graphics_223 = new cjs.Graphics().p("EhGTA0CIAA0nMCMnAAAIAAUng");
	var mask_graphics_224 = new cjs.Graphics().p("EhGTA0CIAA0pMCMnAAAIAAUpg");
	var mask_graphics_225 = new cjs.Graphics().p("EhGTA0DIAA0tMCMnAAAIAAUtg");
	var mask_graphics_226 = new cjs.Graphics().p("EhGTA0EIAA0xMCMnAAAIAAUxg");
	var mask_graphics_227 = new cjs.Graphics().p("EhGTA0FIAA01MCMnAAAIAAU1g");
	var mask_graphics_228 = new cjs.Graphics().p("EhGTA0GIAA05MCMnAAAIAAU5g");
	var mask_graphics_229 = new cjs.Graphics().p("EhGTA0HIAA09MCMnAAAIAAU9g");
	var mask_graphics_230 = new cjs.Graphics().p("EhGTA0IIAA1BMCMnAAAIAAVBg");
	var mask_graphics_231 = new cjs.Graphics().p("EhGTA0JIAA1FMCMnAAAIAAVFg");
	var mask_graphics_232 = new cjs.Graphics().p("EhGTAzRIAAxlMCMnAAAIAARlg");
	var mask_graphics_233 = new cjs.Graphics().p("EhGTAyaIAAuHMCMnAAAIAAOHg");
	var mask_graphics_234 = new cjs.Graphics().p("EhGTAxiIAAqnMCMnAAAIAAKng");
	var mask_graphics_235 = new cjs.Graphics().p("EhGTAwqIAAnIMCMnAAAIAAHIg");
	var mask_graphics_236 = new cjs.Graphics().p("EhGTAvyIAAjpMCMnAAAIAADpg");
	var mask_graphics_237 = new cjs.Graphics().p("EhGTAu6IAAgJMCMnAAAIAAAJg");
	var mask_graphics_240 = new cjs.Graphics().p("EhGThOAIAAgJMCMnAAAIAAAJg");
	var mask_graphics_241 = new cjs.Graphics().p("EhGTAu6IAAgJMCMnAAAIAAAJg");
	var mask_graphics_242 = new cjs.Graphics().p("EhGTAvxIAAjkMCMnAAAIAADkg");
	var mask_graphics_243 = new cjs.Graphics().p("EhGTAwnIAAm9MCMnAAAIAAG9g");
	var mask_graphics_244 = new cjs.Graphics().p("EhGTAxeIAAqYMCMnAAAIAAKYg");
	var mask_graphics_245 = new cjs.Graphics().p("EhGTAyUIAAtxMCMnAAAIAANxg");
	var mask_graphics_246 = new cjs.Graphics().p("EhGTAzLIAAxMMCMnAAAIAARMg");
	var mask_graphics_247 = new cjs.Graphics().p("EhGTAzMIAAxQMCMnAAAIAARQg");
	var mask_graphics_248 = new cjs.Graphics().p("EhGTAzNIAAxUMCMnAAAIAARUg");
	var mask_graphics_249 = new cjs.Graphics().p("EhGTAzOIAAxYMCMnAAAIAARYg");
	var mask_graphics_250 = new cjs.Graphics().p("EhGTAzPIAAxbMCMnAAAIAARbg");
	var mask_graphics_251 = new cjs.Graphics().p("EhGTAzQIAAxfMCMnAAAIAARfg");
	var mask_graphics_252 = new cjs.Graphics().p("EhGTAzRIAAxjMCMnAAAIAARjg");
	var mask_graphics_253 = new cjs.Graphics().p("EhGTAzSIAAxnMCMnAAAIAARng");
	var mask_graphics_254 = new cjs.Graphics().p("EhGTAzTIAAxrMCMnAAAIAARrg");
	var mask_graphics_255 = new cjs.Graphics().p("EhGTAzUIAAxvMCMnAAAIAARvg");
	var mask_graphics_256 = new cjs.Graphics().p("EhGTAzVIAAxzMCMnAAAIAARzg");
	var mask_graphics_257 = new cjs.Graphics().p("EhGTAzWIAAx3MCMnAAAIAAR3g");
	var mask_graphics_258 = new cjs.Graphics().p("EhGTAzWIAAx5MCMnAAAIAAR5g");
	var mask_graphics_259 = new cjs.Graphics().p("EhGTAzXIAAx9MCMnAAAIAAR9g");
	var mask_graphics_260 = new cjs.Graphics().p("EhGTAzYIAAyBMCMnAAAIAASBg");
	var mask_graphics_261 = new cjs.Graphics().p("EhGTAzZIAAyFMCMnAAAIAASFg");
	var mask_graphics_262 = new cjs.Graphics().p("EhGTAzaIAAyJMCMnAAAIAASJg");
	var mask_graphics_263 = new cjs.Graphics().p("EhGTAzbIAAyNMCMnAAAIAASNg");
	var mask_graphics_264 = new cjs.Graphics().p("EhGTAzcIAAyRMCMnAAAIAASRg");
	var mask_graphics_265 = new cjs.Graphics().p("EhGTAzdIAAyUMCMnAAAIAASUg");
	var mask_graphics_266 = new cjs.Graphics().p("EhGTAzeIAAyYMCMnAAAIAASYg");
	var mask_graphics_267 = new cjs.Graphics().p("EhGTAzfIAAycMCMnAAAIAAScg");
	var mask_graphics_268 = new cjs.Graphics().p("EhGTAzgIAAygMCMnAAAIAASgg");
	var mask_graphics_269 = new cjs.Graphics().p("EhGTAzhIAAykMCMnAAAIAASkg");
	var mask_graphics_270 = new cjs.Graphics().p("EhGTAziIAAyoMCMnAAAIAASog");
	var mask_graphics_271 = new cjs.Graphics().p("EhGTAzjIAAysMCMnAAAIAASsg");
	var mask_graphics_272 = new cjs.Graphics().p("EhGTAzkIAAywMCMnAAAIAASwg");
	var mask_graphics_273 = new cjs.Graphics().p("EhGTAzlIAAyzMCMnAAAIAASzg");
	var mask_graphics_274 = new cjs.Graphics().p("EhGTAzmIAAy3MCMnAAAIAAS3g");
	var mask_graphics_275 = new cjs.Graphics().p("EhGTAznIAAy7MCMnAAAIAAS7g");
	var mask_graphics_276 = new cjs.Graphics().p("EhGTAzoIAAy/MCMnAAAIAAS/g");
	var mask_graphics_277 = new cjs.Graphics().p("EhGTAzpIAAzDMCMnAAAIAATDg");
	var mask_graphics_278 = new cjs.Graphics().p("EhGTAzqIAAzHMCMnAAAIAATHg");
	var mask_graphics_279 = new cjs.Graphics().p("EhGTAzrIAAzLMCMnAAAIAATLg");
	var mask_graphics_280 = new cjs.Graphics().p("EhGTAzsIAAzPMCMnAAAIAATPg");
	var mask_graphics_281 = new cjs.Graphics().p("EhGTAzsIAAzRMCMnAAAIAATRg");
	var mask_graphics_282 = new cjs.Graphics().p("EhGTAztIAAzVMCMnAAAIAATVg");
	var mask_graphics_283 = new cjs.Graphics().p("EhGTAzuIAAzZMCMnAAAIAATZg");
	var mask_graphics_284 = new cjs.Graphics().p("EhGTAzvIAAzdMCMnAAAIAATdg");
	var mask_graphics_285 = new cjs.Graphics().p("EhGTAzwIAAzhMCMnAAAIAAThg");
	var mask_graphics_286 = new cjs.Graphics().p("EhGTAzxIAAzlMCMnAAAIAATlg");
	var mask_graphics_287 = new cjs.Graphics().p("EhGTAzyIAAzpMCMnAAAIAATpg");
	var mask_graphics_288 = new cjs.Graphics().p("EhGTAzzIAAztMCMnAAAIAATtg");
	var mask_graphics_289 = new cjs.Graphics().p("EhGTAz0IAAzwMCMnAAAIAATwg");
	var mask_graphics_290 = new cjs.Graphics().p("EhGTAz1IAAz0MCMnAAAIAAT0g");
	var mask_graphics_291 = new cjs.Graphics().p("EhGTAz2IAAz4MCMnAAAIAAT4g");
	var mask_graphics_292 = new cjs.Graphics().p("EhGTAz3IAAz8MCMnAAAIAAT8g");
	var mask_graphics_293 = new cjs.Graphics().p("EhGTAz4IAA0AMCMnAAAIAAUAg");
	var mask_graphics_294 = new cjs.Graphics().p("EhGTAz5IAA0EMCMnAAAIAAUEg");
	var mask_graphics_295 = new cjs.Graphics().p("EhGTAz6IAA0IMCMnAAAIAAUIg");
	var mask_graphics_296 = new cjs.Graphics().p("EhGTAz7IAA0LMCMnAAAIAAULg");
	var mask_graphics_297 = new cjs.Graphics().p("EhGTAz8IAA0PMCMnAAAIAAUPg");
	var mask_graphics_298 = new cjs.Graphics().p("EhGTAz9IAA0TMCMnAAAIAAUTg");
	var mask_graphics_299 = new cjs.Graphics().p("EhGTAz+IAA0XMCMnAAAIAAUXg");
	var mask_graphics_300 = new cjs.Graphics().p("EhGTAz/IAA0bMCMnAAAIAAUbg");
	var mask_graphics_301 = new cjs.Graphics().p("EhGTA0AIAA0fMCMnAAAIAAUfg");
	var mask_graphics_302 = new cjs.Graphics().p("EhGTA0BIAA0jMCMnAAAIAAUjg");
	var mask_graphics_303 = new cjs.Graphics().p("EhGTA0CIAA0nMCMnAAAIAAUng");
	var mask_graphics_304 = new cjs.Graphics().p("EhGTA0CIAA0pMCMnAAAIAAUpg");
	var mask_graphics_305 = new cjs.Graphics().p("EhGTA0DIAA0tMCMnAAAIAAUtg");
	var mask_graphics_306 = new cjs.Graphics().p("EhGTA0EIAA0xMCMnAAAIAAUxg");
	var mask_graphics_307 = new cjs.Graphics().p("EhGTA0FIAA01MCMnAAAIAAU1g");
	var mask_graphics_308 = new cjs.Graphics().p("EhGTA0GIAA05MCMnAAAIAAU5g");
	var mask_graphics_309 = new cjs.Graphics().p("EhGTA0HIAA09MCMnAAAIAAU9g");
	var mask_graphics_310 = new cjs.Graphics().p("EhGTA0IIAA1BMCMnAAAIAAVBg");
	var mask_graphics_311 = new cjs.Graphics().p("EhGTA0JIAA1FMCMnAAAIAAVFg");
	var mask_graphics_312 = new cjs.Graphics().p("EhGTAzRIAAxlMCMnAAAIAARlg");
	var mask_graphics_313 = new cjs.Graphics().p("EhGTAyaIAAuHMCMnAAAIAAOHg");
	var mask_graphics_314 = new cjs.Graphics().p("EhGTAxiIAAqnMCMnAAAIAAKng");
	var mask_graphics_315 = new cjs.Graphics().p("EhGTAwqIAAnIMCMnAAAIAAHIg");
	var mask_graphics_316 = new cjs.Graphics().p("EhGTAvyIAAjpMCMnAAAIAADpg");
	var mask_graphics_317 = new cjs.Graphics().p("EhGTAu6IAAgJMCMnAAAIAAAJg");
	var mask_graphics_320 = new cjs.Graphics().p("EhGThOAIAAgJMCMnAAAIAAAJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:450,y:300.2472}).wait(1).to({graphics:mask_graphics_2,x:450,y:305.6973}).wait(1).to({graphics:mask_graphics_3,x:450,y:311.1475}).wait(1).to({graphics:mask_graphics_4,x:450,y:316.5976}).wait(1).to({graphics:mask_graphics_5,x:450,y:322.0477}).wait(1).to({graphics:mask_graphics_6,x:450,y:327.4979}).wait(1).to({graphics:mask_graphics_7,x:450,y:327.5936}).wait(1).to({graphics:mask_graphics_8,x:450,y:327.6893}).wait(1).to({graphics:mask_graphics_9,x:450,y:327.785}).wait(1).to({graphics:mask_graphics_10,x:450,y:327.8807}).wait(1).to({graphics:mask_graphics_11,x:450,y:327.9764}).wait(1).to({graphics:mask_graphics_12,x:450,y:328.0721}).wait(1).to({graphics:mask_graphics_13,x:450,y:328.1678}).wait(1).to({graphics:mask_graphics_14,x:450,y:328.2635}).wait(1).to({graphics:mask_graphics_15,x:450,y:328.3592}).wait(1).to({graphics:mask_graphics_16,x:450,y:328.4549}).wait(1).to({graphics:mask_graphics_17,x:450,y:328.5507}).wait(1).to({graphics:mask_graphics_18,x:450,y:328.6464}).wait(1).to({graphics:mask_graphics_19,x:450,y:328.7421}).wait(1).to({graphics:mask_graphics_20,x:450,y:328.8378}).wait(1).to({graphics:mask_graphics_21,x:450,y:328.9335}).wait(1).to({graphics:mask_graphics_22,x:450,y:329.0292}).wait(1).to({graphics:mask_graphics_23,x:450,y:329.1249}).wait(1).to({graphics:mask_graphics_24,x:450,y:329.2206}).wait(1).to({graphics:mask_graphics_25,x:450,y:329.3163}).wait(1).to({graphics:mask_graphics_26,x:450,y:329.412}).wait(1).to({graphics:mask_graphics_27,x:450,y:329.5077}).wait(1).to({graphics:mask_graphics_28,x:450,y:329.6034}).wait(1).to({graphics:mask_graphics_29,x:450,y:329.6991}).wait(1).to({graphics:mask_graphics_30,x:450,y:329.7949}).wait(1).to({graphics:mask_graphics_31,x:450,y:329.8906}).wait(1).to({graphics:mask_graphics_32,x:450,y:329.9863}).wait(1).to({graphics:mask_graphics_33,x:450,y:330.082}).wait(1).to({graphics:mask_graphics_34,x:450,y:330.1777}).wait(1).to({graphics:mask_graphics_35,x:450,y:330.2734}).wait(1).to({graphics:mask_graphics_36,x:450,y:330.3691}).wait(1).to({graphics:mask_graphics_37,x:450,y:330.4648}).wait(1).to({graphics:mask_graphics_38,x:450,y:330.5605}).wait(1).to({graphics:mask_graphics_39,x:450,y:330.6562}).wait(1).to({graphics:mask_graphics_40,x:450,y:330.7519}).wait(1).to({graphics:mask_graphics_41,x:450,y:330.8476}).wait(1).to({graphics:mask_graphics_42,x:450,y:330.9434}).wait(1).to({graphics:mask_graphics_43,x:450,y:331.039}).wait(1).to({graphics:mask_graphics_44,x:450,y:331.1348}).wait(1).to({graphics:mask_graphics_45,x:450,y:331.2305}).wait(1).to({graphics:mask_graphics_46,x:450,y:331.3262}).wait(1).to({graphics:mask_graphics_47,x:450,y:331.4219}).wait(1).to({graphics:mask_graphics_48,x:450,y:331.5176}).wait(1).to({graphics:mask_graphics_49,x:450,y:331.6133}).wait(1).to({graphics:mask_graphics_50,x:450,y:331.709}).wait(1).to({graphics:mask_graphics_51,x:450,y:331.8047}).wait(1).to({graphics:mask_graphics_52,x:450,y:331.9004}).wait(1).to({graphics:mask_graphics_53,x:450,y:331.9961}).wait(1).to({graphics:mask_graphics_54,x:450,y:332.0918}).wait(1).to({graphics:mask_graphics_55,x:450,y:332.1876}).wait(1).to({graphics:mask_graphics_56,x:450,y:332.2833}).wait(1).to({graphics:mask_graphics_57,x:450,y:332.379}).wait(1).to({graphics:mask_graphics_58,x:450,y:332.4747}).wait(1).to({graphics:mask_graphics_59,x:450,y:332.5704}).wait(1).to({graphics:mask_graphics_60,x:450,y:332.6661}).wait(1).to({graphics:mask_graphics_61,x:450,y:332.7618}).wait(1).to({graphics:mask_graphics_62,x:450,y:332.8575}).wait(1).to({graphics:mask_graphics_63,x:450,y:332.9532}).wait(1).to({graphics:mask_graphics_64,x:450,y:333.0489}).wait(1).to({graphics:mask_graphics_65,x:450,y:333.1446}).wait(1).to({graphics:mask_graphics_66,x:450,y:333.2403}).wait(1).to({graphics:mask_graphics_67,x:450,y:333.336}).wait(1).to({graphics:mask_graphics_68,x:450,y:333.4318}).wait(1).to({graphics:mask_graphics_69,x:450,y:333.5275}).wait(1).to({graphics:mask_graphics_70,x:450,y:333.6232}).wait(1).to({graphics:mask_graphics_71,x:450,y:333.7189}).wait(1).to({graphics:mask_graphics_72,x:450,y:328.1403}).wait(1).to({graphics:mask_graphics_73,x:450,y:322.5617}).wait(1).to({graphics:mask_graphics_74,x:450,y:316.983}).wait(1).to({graphics:mask_graphics_75,x:450,y:311.4044}).wait(1).to({graphics:mask_graphics_76,x:450,y:305.8258}).wait(1).to({graphics:mask_graphics_77,x:450,y:300.2472}).wait(3).to({graphics:mask_graphics_80,x:450,y:-500.2472}).wait(1).to({graphics:mask_graphics_81,x:450,y:300.2472}).wait(1).to({graphics:mask_graphics_82,x:450,y:305.6973}).wait(1).to({graphics:mask_graphics_83,x:450,y:311.1475}).wait(1).to({graphics:mask_graphics_84,x:450,y:316.5976}).wait(1).to({graphics:mask_graphics_85,x:450,y:322.0477}).wait(1).to({graphics:mask_graphics_86,x:450,y:327.4979}).wait(1).to({graphics:mask_graphics_87,x:450,y:327.5936}).wait(1).to({graphics:mask_graphics_88,x:450,y:327.6893}).wait(1).to({graphics:mask_graphics_89,x:450,y:327.785}).wait(1).to({graphics:mask_graphics_90,x:450,y:327.8807}).wait(1).to({graphics:mask_graphics_91,x:450,y:327.9764}).wait(1).to({graphics:mask_graphics_92,x:450,y:328.0721}).wait(1).to({graphics:mask_graphics_93,x:450,y:328.1678}).wait(1).to({graphics:mask_graphics_94,x:450,y:328.2635}).wait(1).to({graphics:mask_graphics_95,x:450,y:328.3592}).wait(1).to({graphics:mask_graphics_96,x:450,y:328.4549}).wait(1).to({graphics:mask_graphics_97,x:450,y:328.5507}).wait(1).to({graphics:mask_graphics_98,x:450,y:328.6464}).wait(1).to({graphics:mask_graphics_99,x:450,y:328.7421}).wait(1).to({graphics:mask_graphics_100,x:450,y:328.8378}).wait(1).to({graphics:mask_graphics_101,x:450,y:328.9335}).wait(1).to({graphics:mask_graphics_102,x:450,y:329.0292}).wait(1).to({graphics:mask_graphics_103,x:450,y:329.1249}).wait(1).to({graphics:mask_graphics_104,x:450,y:329.2206}).wait(1).to({graphics:mask_graphics_105,x:450,y:329.3163}).wait(1).to({graphics:mask_graphics_106,x:450,y:329.412}).wait(1).to({graphics:mask_graphics_107,x:450,y:329.5077}).wait(1).to({graphics:mask_graphics_108,x:450,y:329.6034}).wait(1).to({graphics:mask_graphics_109,x:450,y:329.6991}).wait(1).to({graphics:mask_graphics_110,x:450,y:329.7949}).wait(1).to({graphics:mask_graphics_111,x:450,y:329.8906}).wait(1).to({graphics:mask_graphics_112,x:450,y:329.9863}).wait(1).to({graphics:mask_graphics_113,x:450,y:330.082}).wait(1).to({graphics:mask_graphics_114,x:450,y:330.1777}).wait(1).to({graphics:mask_graphics_115,x:450,y:330.2734}).wait(1).to({graphics:mask_graphics_116,x:450,y:330.3691}).wait(1).to({graphics:mask_graphics_117,x:450,y:330.4648}).wait(1).to({graphics:mask_graphics_118,x:450,y:330.5605}).wait(1).to({graphics:mask_graphics_119,x:450,y:330.6562}).wait(1).to({graphics:mask_graphics_120,x:450,y:330.7519}).wait(1).to({graphics:mask_graphics_121,x:450,y:330.8476}).wait(1).to({graphics:mask_graphics_122,x:450,y:330.9434}).wait(1).to({graphics:mask_graphics_123,x:450,y:331.039}).wait(1).to({graphics:mask_graphics_124,x:450,y:331.1348}).wait(1).to({graphics:mask_graphics_125,x:450,y:331.2305}).wait(1).to({graphics:mask_graphics_126,x:450,y:331.3262}).wait(1).to({graphics:mask_graphics_127,x:450,y:331.4219}).wait(1).to({graphics:mask_graphics_128,x:450,y:331.5176}).wait(1).to({graphics:mask_graphics_129,x:450,y:331.6133}).wait(1).to({graphics:mask_graphics_130,x:450,y:331.709}).wait(1).to({graphics:mask_graphics_131,x:450,y:331.8047}).wait(1).to({graphics:mask_graphics_132,x:450,y:331.9004}).wait(1).to({graphics:mask_graphics_133,x:450,y:331.9961}).wait(1).to({graphics:mask_graphics_134,x:450,y:332.0918}).wait(1).to({graphics:mask_graphics_135,x:450,y:332.1876}).wait(1).to({graphics:mask_graphics_136,x:450,y:332.2833}).wait(1).to({graphics:mask_graphics_137,x:450,y:332.379}).wait(1).to({graphics:mask_graphics_138,x:450,y:332.4747}).wait(1).to({graphics:mask_graphics_139,x:450,y:332.5704}).wait(1).to({graphics:mask_graphics_140,x:450,y:332.6661}).wait(1).to({graphics:mask_graphics_141,x:450,y:332.7618}).wait(1).to({graphics:mask_graphics_142,x:450,y:332.8575}).wait(1).to({graphics:mask_graphics_143,x:450,y:332.9532}).wait(1).to({graphics:mask_graphics_144,x:450,y:333.0489}).wait(1).to({graphics:mask_graphics_145,x:450,y:333.1446}).wait(1).to({graphics:mask_graphics_146,x:450,y:333.2403}).wait(1).to({graphics:mask_graphics_147,x:450,y:333.336}).wait(1).to({graphics:mask_graphics_148,x:450,y:333.4318}).wait(1).to({graphics:mask_graphics_149,x:450,y:333.5275}).wait(1).to({graphics:mask_graphics_150,x:450,y:333.6232}).wait(1).to({graphics:mask_graphics_151,x:450,y:333.7189}).wait(1).to({graphics:mask_graphics_152,x:450,y:328.1403}).wait(1).to({graphics:mask_graphics_153,x:450,y:322.5617}).wait(1).to({graphics:mask_graphics_154,x:450,y:316.983}).wait(1).to({graphics:mask_graphics_155,x:450,y:311.4044}).wait(1).to({graphics:mask_graphics_156,x:450,y:305.8258}).wait(1).to({graphics:mask_graphics_157,x:450,y:300.2472}).wait(3).to({graphics:mask_graphics_160,x:450,y:-500.2472}).wait(1).to({graphics:mask_graphics_161,x:450,y:300.2472}).wait(1).to({graphics:mask_graphics_162,x:450,y:305.6973}).wait(1).to({graphics:mask_graphics_163,x:450,y:311.1475}).wait(1).to({graphics:mask_graphics_164,x:450,y:316.5976}).wait(1).to({graphics:mask_graphics_165,x:450,y:322.0477}).wait(1).to({graphics:mask_graphics_166,x:450,y:327.4979}).wait(1).to({graphics:mask_graphics_167,x:450,y:327.5936}).wait(1).to({graphics:mask_graphics_168,x:450,y:327.6893}).wait(1).to({graphics:mask_graphics_169,x:450,y:327.785}).wait(1).to({graphics:mask_graphics_170,x:450,y:327.8807}).wait(1).to({graphics:mask_graphics_171,x:450,y:327.9764}).wait(1).to({graphics:mask_graphics_172,x:450,y:328.0721}).wait(1).to({graphics:mask_graphics_173,x:450,y:328.1678}).wait(1).to({graphics:mask_graphics_174,x:450,y:328.2635}).wait(1).to({graphics:mask_graphics_175,x:450,y:328.3592}).wait(1).to({graphics:mask_graphics_176,x:450,y:328.4549}).wait(1).to({graphics:mask_graphics_177,x:450,y:328.5507}).wait(1).to({graphics:mask_graphics_178,x:450,y:328.6464}).wait(1).to({graphics:mask_graphics_179,x:450,y:328.7421}).wait(1).to({graphics:mask_graphics_180,x:450,y:328.8378}).wait(1).to({graphics:mask_graphics_181,x:450,y:328.9335}).wait(1).to({graphics:mask_graphics_182,x:450,y:329.0292}).wait(1).to({graphics:mask_graphics_183,x:450,y:329.1249}).wait(1).to({graphics:mask_graphics_184,x:450,y:329.2206}).wait(1).to({graphics:mask_graphics_185,x:450,y:329.3163}).wait(1).to({graphics:mask_graphics_186,x:450,y:329.412}).wait(1).to({graphics:mask_graphics_187,x:450,y:329.5077}).wait(1).to({graphics:mask_graphics_188,x:450,y:329.6034}).wait(1).to({graphics:mask_graphics_189,x:450,y:329.6991}).wait(1).to({graphics:mask_graphics_190,x:450,y:329.7949}).wait(1).to({graphics:mask_graphics_191,x:450,y:329.8906}).wait(1).to({graphics:mask_graphics_192,x:450,y:329.9863}).wait(1).to({graphics:mask_graphics_193,x:450,y:330.082}).wait(1).to({graphics:mask_graphics_194,x:450,y:330.1777}).wait(1).to({graphics:mask_graphics_195,x:450,y:330.2734}).wait(1).to({graphics:mask_graphics_196,x:450,y:330.3691}).wait(1).to({graphics:mask_graphics_197,x:450,y:330.4648}).wait(1).to({graphics:mask_graphics_198,x:450,y:330.5605}).wait(1).to({graphics:mask_graphics_199,x:450,y:330.6562}).wait(1).to({graphics:mask_graphics_200,x:450,y:330.7519}).wait(1).to({graphics:mask_graphics_201,x:450,y:330.8476}).wait(1).to({graphics:mask_graphics_202,x:450,y:330.9434}).wait(1).to({graphics:mask_graphics_203,x:450,y:331.039}).wait(1).to({graphics:mask_graphics_204,x:450,y:331.1348}).wait(1).to({graphics:mask_graphics_205,x:450,y:331.2305}).wait(1).to({graphics:mask_graphics_206,x:450,y:331.3262}).wait(1).to({graphics:mask_graphics_207,x:450,y:331.4219}).wait(1).to({graphics:mask_graphics_208,x:450,y:331.5176}).wait(1).to({graphics:mask_graphics_209,x:450,y:331.6133}).wait(1).to({graphics:mask_graphics_210,x:450,y:331.709}).wait(1).to({graphics:mask_graphics_211,x:450,y:331.8047}).wait(1).to({graphics:mask_graphics_212,x:450,y:331.9004}).wait(1).to({graphics:mask_graphics_213,x:450,y:331.9961}).wait(1).to({graphics:mask_graphics_214,x:450,y:332.0918}).wait(1).to({graphics:mask_graphics_215,x:450,y:332.1876}).wait(1).to({graphics:mask_graphics_216,x:450,y:332.2833}).wait(1).to({graphics:mask_graphics_217,x:450,y:332.379}).wait(1).to({graphics:mask_graphics_218,x:450,y:332.4747}).wait(1).to({graphics:mask_graphics_219,x:450,y:332.5704}).wait(1).to({graphics:mask_graphics_220,x:450,y:332.6661}).wait(1).to({graphics:mask_graphics_221,x:450,y:332.7618}).wait(1).to({graphics:mask_graphics_222,x:450,y:332.8575}).wait(1).to({graphics:mask_graphics_223,x:450,y:332.9532}).wait(1).to({graphics:mask_graphics_224,x:450,y:333.0489}).wait(1).to({graphics:mask_graphics_225,x:450,y:333.1446}).wait(1).to({graphics:mask_graphics_226,x:450,y:333.2403}).wait(1).to({graphics:mask_graphics_227,x:450,y:333.336}).wait(1).to({graphics:mask_graphics_228,x:450,y:333.4318}).wait(1).to({graphics:mask_graphics_229,x:450,y:333.5275}).wait(1).to({graphics:mask_graphics_230,x:450,y:333.6232}).wait(1).to({graphics:mask_graphics_231,x:450,y:333.7189}).wait(1).to({graphics:mask_graphics_232,x:450,y:328.1403}).wait(1).to({graphics:mask_graphics_233,x:450,y:322.5617}).wait(1).to({graphics:mask_graphics_234,x:450,y:316.983}).wait(1).to({graphics:mask_graphics_235,x:450,y:311.4044}).wait(1).to({graphics:mask_graphics_236,x:450,y:305.8258}).wait(1).to({graphics:mask_graphics_237,x:450,y:300.2472}).wait(3).to({graphics:mask_graphics_240,x:450,y:-500.2472}).wait(1).to({graphics:mask_graphics_241,x:450,y:300.2472}).wait(1).to({graphics:mask_graphics_242,x:450,y:305.6973}).wait(1).to({graphics:mask_graphics_243,x:450,y:311.1475}).wait(1).to({graphics:mask_graphics_244,x:450,y:316.5976}).wait(1).to({graphics:mask_graphics_245,x:450,y:322.0477}).wait(1).to({graphics:mask_graphics_246,x:450,y:327.4979}).wait(1).to({graphics:mask_graphics_247,x:450,y:327.5936}).wait(1).to({graphics:mask_graphics_248,x:450,y:327.6893}).wait(1).to({graphics:mask_graphics_249,x:450,y:327.785}).wait(1).to({graphics:mask_graphics_250,x:450,y:327.8807}).wait(1).to({graphics:mask_graphics_251,x:450,y:327.9764}).wait(1).to({graphics:mask_graphics_252,x:450,y:328.0721}).wait(1).to({graphics:mask_graphics_253,x:450,y:328.1678}).wait(1).to({graphics:mask_graphics_254,x:450,y:328.2635}).wait(1).to({graphics:mask_graphics_255,x:450,y:328.3592}).wait(1).to({graphics:mask_graphics_256,x:450,y:328.4549}).wait(1).to({graphics:mask_graphics_257,x:450,y:328.5507}).wait(1).to({graphics:mask_graphics_258,x:450,y:328.6464}).wait(1).to({graphics:mask_graphics_259,x:450,y:328.7421}).wait(1).to({graphics:mask_graphics_260,x:450,y:328.8378}).wait(1).to({graphics:mask_graphics_261,x:450,y:328.9335}).wait(1).to({graphics:mask_graphics_262,x:450,y:329.0292}).wait(1).to({graphics:mask_graphics_263,x:450,y:329.1249}).wait(1).to({graphics:mask_graphics_264,x:450,y:329.2206}).wait(1).to({graphics:mask_graphics_265,x:450,y:329.3163}).wait(1).to({graphics:mask_graphics_266,x:450,y:329.412}).wait(1).to({graphics:mask_graphics_267,x:450,y:329.5077}).wait(1).to({graphics:mask_graphics_268,x:450,y:329.6034}).wait(1).to({graphics:mask_graphics_269,x:450,y:329.6991}).wait(1).to({graphics:mask_graphics_270,x:450,y:329.7949}).wait(1).to({graphics:mask_graphics_271,x:450,y:329.8906}).wait(1).to({graphics:mask_graphics_272,x:450,y:329.9863}).wait(1).to({graphics:mask_graphics_273,x:450,y:330.082}).wait(1).to({graphics:mask_graphics_274,x:450,y:330.1777}).wait(1).to({graphics:mask_graphics_275,x:450,y:330.2734}).wait(1).to({graphics:mask_graphics_276,x:450,y:330.3691}).wait(1).to({graphics:mask_graphics_277,x:450,y:330.4648}).wait(1).to({graphics:mask_graphics_278,x:450,y:330.5605}).wait(1).to({graphics:mask_graphics_279,x:450,y:330.6562}).wait(1).to({graphics:mask_graphics_280,x:450,y:330.7519}).wait(1).to({graphics:mask_graphics_281,x:450,y:330.8476}).wait(1).to({graphics:mask_graphics_282,x:450,y:330.9434}).wait(1).to({graphics:mask_graphics_283,x:450,y:331.039}).wait(1).to({graphics:mask_graphics_284,x:450,y:331.1348}).wait(1).to({graphics:mask_graphics_285,x:450,y:331.2305}).wait(1).to({graphics:mask_graphics_286,x:450,y:331.3262}).wait(1).to({graphics:mask_graphics_287,x:450,y:331.4219}).wait(1).to({graphics:mask_graphics_288,x:450,y:331.5176}).wait(1).to({graphics:mask_graphics_289,x:450,y:331.6133}).wait(1).to({graphics:mask_graphics_290,x:450,y:331.709}).wait(1).to({graphics:mask_graphics_291,x:450,y:331.8047}).wait(1).to({graphics:mask_graphics_292,x:450,y:331.9004}).wait(1).to({graphics:mask_graphics_293,x:450,y:331.9961}).wait(1).to({graphics:mask_graphics_294,x:450,y:332.0918}).wait(1).to({graphics:mask_graphics_295,x:450,y:332.1876}).wait(1).to({graphics:mask_graphics_296,x:450,y:332.2833}).wait(1).to({graphics:mask_graphics_297,x:450,y:332.379}).wait(1).to({graphics:mask_graphics_298,x:450,y:332.4747}).wait(1).to({graphics:mask_graphics_299,x:450,y:332.5704}).wait(1).to({graphics:mask_graphics_300,x:450,y:332.6661}).wait(1).to({graphics:mask_graphics_301,x:450,y:332.7618}).wait(1).to({graphics:mask_graphics_302,x:450,y:332.8575}).wait(1).to({graphics:mask_graphics_303,x:450,y:332.9532}).wait(1).to({graphics:mask_graphics_304,x:450,y:333.0489}).wait(1).to({graphics:mask_graphics_305,x:450,y:333.1446}).wait(1).to({graphics:mask_graphics_306,x:450,y:333.2403}).wait(1).to({graphics:mask_graphics_307,x:450,y:333.336}).wait(1).to({graphics:mask_graphics_308,x:450,y:333.4318}).wait(1).to({graphics:mask_graphics_309,x:450,y:333.5275}).wait(1).to({graphics:mask_graphics_310,x:450,y:333.6232}).wait(1).to({graphics:mask_graphics_311,x:450,y:333.7189}).wait(1).to({graphics:mask_graphics_312,x:450,y:328.1403}).wait(1).to({graphics:mask_graphics_313,x:450,y:322.5617}).wait(1).to({graphics:mask_graphics_314,x:450,y:316.983}).wait(1).to({graphics:mask_graphics_315,x:450,y:311.4044}).wait(1).to({graphics:mask_graphics_316,x:450,y:305.8258}).wait(1).to({graphics:mask_graphics_317,x:450,y:300.2472}).wait(3).to({graphics:mask_graphics_320,x:450,y:-500.2472}).wait(1));

	// titles
	this.titles = new lib.titles();
	this.titles.name = "titles";
	this.titles.setTransform(450.1,600.1,0.7504,0.7504,0,0,0,0.1,0.1);
	this.titles.alpha = 0;
	this.titles._off = true;

	var maskedShapeInstanceList = [this.titles];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.titles).wait(1).to({_off:false},0).wait(4).to({alpha:1},4).wait(62).to({alpha:0},6).wait(8).to({alpha:1},4).wait(62).to({alpha:0},6).wait(8).to({alpha:1},4).wait(62).to({alpha:0},6).wait(8).to({alpha:1},4).wait(62).to({alpha:0},6).wait(4));

	// base_and_circle
	this.base_and_circle = new lib.base_and_circle();
	this.base_and_circle.name = "base_and_circle";
	this.base_and_circle.setTransform(450,600,0.5662,0.5662);
	this.base_and_circle._off = true;

	var maskedShapeInstanceList = [this.base_and_circle];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.base_and_circle).wait(1).to({_off:false},0).wait(70).to({scaleX:0.6705,scaleY:0.6705},6).wait(4).to({scaleX:0.5662,scaleY:0.5662},0).wait(70).to({scaleX:0.6705,scaleY:0.6705},6).wait(4).to({scaleX:0.5662,scaleY:0.5662},0).wait(70).to({scaleX:0.6705,scaleY:0.6705},6).wait(4).to({scaleX:0.5662,scaleY:0.5662},0).wait(70).to({scaleX:0.6705,scaleY:0.6705},6).wait(4));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,900,667.5);
// library properties:
lib.properties = {
	id: '744A0ACAF4154E81905CBA0083390B75',
	width: 900,
	height: 1200,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/toast_atlas_1.png?1742359939247", id:"toast_atlas_1"}
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
an.compositions['744A0ACAF4154E81905CBA0083390B75'] = {
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