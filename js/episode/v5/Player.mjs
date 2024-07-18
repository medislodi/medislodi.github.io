'use strict';

import {UI} from "./UI.mjs";
import {TextWindow} from "./TextWindow.mjs";
import {Resources} from "./Resources.mjs";
import {Selectors} from "./Selectors.mjs";
import {Animator} from "./Animator.mjs";
import DiContainer from "/phalconia/js/DiContainer.mjs";
import {Cursor} from "./Cursor.mjs";
import {Setting} from "./Setting.mjs";
import {Chara} from "./Chara.mjs";

export class Player {

    /** @var {DiContainer} */
    di;

    fps=60;

    width = 900;
    height = 1200;

    #ticker;

    ui = new UI();
    textWindow;
    #resources;

    scenario_index = 0;
    next_scenario_index = null;

    app;
    #animator = new Animator();

    /** @var {Setting} */
    setting;

    id;
    stage;
    #tsid;
    #sheet_id;
    #sheet_name;
    #scenario_datas;
    cursor;

    selectors;

    speaker = null;

    playing_voice = [];
    playing_se = [];
    playing_bgm;
    voice_for_replay = [];

    now_background;

    #needCursor;

    maxStage;
    #firstLoad = true;
    type;

    #chara_index=-1;

    /** @var {Chara} */
    #center;
    /** @var {Chara} */
    #right;
    /** @var {Chara} */
    #left;
    /** @var {Chara} */
    #moreRight;
    /** @var {Chara} */
    #moreLeft;
    /** @var {Chara} */
    #veryRight;
    /** @var {Chara} */
    #veryLeft;

    #finished = false;

    finish_move = false;
    serifEnd = false;
    motionEnd = false;

    finishFlags = [];

    gotoStage = null;
    isBranch = false;


    isSkip = false;
    skipTarget = null;
    skipEnable = false;

    constructor(id, stage, tsid=null, sheet_id=null, sheet_name=null) {
        this.id = id;
        this.stage = stage;
        this.#tsid = tsid;
        this.#sheet_id = sheet_id;
        this.#sheet_name = sheet_name;

        Howler.autoUnlock = true;
        this.cursor = new Cursor(this);

        this.app = new PIXI.Application({ width: this.width, height: this.height });
        this.app.stage.sortableChildren = true;
        document.getElementById('pixi').appendChild(this.app.view);

        this.#ticker = PIXI.Ticker.shared;
        this.#ticker.maxFPS = this.fps;
        this.#ticker.add((time)=>{
            if(this.app.stage.sortDirty) this.app.stage.sortChildren();
            TWEEN.update();
        });

        this.textWindow = new TextWindow(this);
        this.selectors = new Selectors(this);
        this.cursor.onTap = ()=>{

            this.scenario_index ++;
            console.log('onTap', this.scenario_index);
            this.next.bind(this)();

        }

        this.#resources = new Resources(this);

        this.setting = new Setting(this);

        this.ui.skipForSelector().addEventListener('click', ()=>{
            if(this.canGotoSelect) this.skip();
        });

        this.#load()
            .then(this.#resources.preload.bind(this.#resources))
            .then(() => console.log('preload end'))
            .then(this.next.bind(this))
            .then(this.#showStartButton.bind(this))
            .catch((error)=>{
                console.error(error);
        });
    }

    restart(){
        // URL書き換え
        const url = new URL(location.href);
        history.replaceState("", "", url.pathname.replace(/\/(\d)$/,'/'+this.stage));
        // history.pushState("", "", url.pathname.replace('/(\d)\/?$/',this.#stage));
        console.log('##### restart', this.stage);
        document.getElementById(`story-stage-${this.stage}`).classList.add('now');
        document.getElementById(`story-stage-${this.stage}`).classList.remove('disabled');
        document.getElementById(`story-stage-un-release-${this.stage}`)?.classList?.add('d-none');

        // const regex = /\/(\d)$/;
        // console.log(this.#stage, url.pathname.replace(regex,'/'+this.#stage))

        this.scenario_index = 0;
        this.#scenario_datas = null;

        this.#showLordEffect()
            .then(()=>{
                // console.log('load effect show');
                this.#firstLoad = false;
                // this.#resources.reset();
                this.app.stage.removeChildren();
                this.#resources = new Resources(this);
                this.#load()
                    .then(this.#resources.preload.bind(this.#resources))
                    .then(() => {
                        let data = new FormData();
                        data.append('adventure_id', this.id);
                        data.append('stage', this.stage);
                        return DiContainer.get('Net').ajax('/api/episode/default_next_stage', data, "POST", true, false).then((json)=>{
                            this.gotoStage = json.contents.stage;
                        });
                    })
                    .then(this.next.bind(this))
                    .then(this.#showStartButton.bind(this))
                    .then(()=>{
                        this.#finished = false;
                        if(this.isSkip) {
                            console.log('skip next stage');
                            this.cursor.active(true)
                            this.cursor.tap();
                            this.cursor.disableTap();
                        }else if(this.setting.autoPlay){
                            this.#hideLoadEffect()
                                .then(() => {
                                    this.cursor.active(true)
                                    this.cursor.tap();
                                    this.cursor.disableTap();
                                });
                        }
                    })
                    .catch((error)=>{
                        console.error(error);
                    });
            })


        // this.#firstLoad = false;
        // this.#resources.reset();

    }


    #showStartButton() {
        document.getElementById("loading-progress").classList.add('d-none');
        document.getElementById("loading-text").classList.add('d-none');

        if(this.isSkip) {
            console.log('skip start button');
            this.cursor.active(true)
            this.cursor.tap();
            this.cursor.disableTap();
            return Promise.resolve();
        }

        const startBtn = document.getElementById("start-btn");
        startBtn.style.display = "block";
        startBtn.style.opacity = "1";

        // const element = document.getElementById('head-menu-buttons'); // 移動させたい位置の要素を取得
        // const rect = element.getBoundingClientRect();
        // const position = rect.top;
        // // if(rect.bottom > window.innerHeight){
        // //     console.log(position);
        //     window.scrollTo(0, position);
        // // }
        location.hash = "#head-menu-buttons";


        if(this.#firstLoad) {
            startBtn.addEventListener('click', (event) => {
                event.preventDefault();
                this.#hideLoadEffect()
                    .then(() => {
                        this.cursor.active(true)
                        this.cursor.tap(null, false, 0);
                        if (this.setting.autoPlay) this.cursor.disableTap();
                    });
            });
        }
    }


    #hideLoadEffect() {
        return new Promise((resolve)=>{
            this.ui.loadingOverLay().style.opacity = '0';
            setTimeout(()=>{
                this.ui.loadingOverLay().style.display = 'none';
                this.ui.loadingOverLay().classList.add('loaded');
                resolve();
            }, 1000);
        }).then(()=>{
            return new Promise((resolve)=>{
                setTimeout(resolve, 500);
            });
        });
    }

    #showLordEffect(timeout = 1000) {
        const startBtn = document.getElementById("start-btn");
        startBtn.style.display = "none";
        startBtn.style.opacity = "0";
        return new Promise((resolve)=>{
            this.ui.loadingOverLay().classList.remove('loaded');
            this.ui.loadingOverLay().style.opacity = '1';
            this.ui.loadingOverLay().style.display = 'flex';
            setTimeout(()=>{
                document.getElementById("loading-progress").classList.remove('d-none');
                document.getElementById("loading-text").classList.remove('d-none');
                resolve();
            }, timeout);
        });
    }


    #load() {
        let data = new FormData();
        data.append('id', this.id);
        data.append('stage', this.stage);
        if(this.#tsid !== null) data.append('tsid', this.#tsid);
        if(this.#sheet_id !== null) data.append('sheet_id', this.#sheet_id);
        if(this.#sheet_name !== null) data.append('sheet_name', this.#sheet_name);

        return new Promise((resolve, reject)=> {
			this.#resources.setResourceList(episode_json.contents.resource)
			this.#scenario_datas = [];
			Object.entries(episode_json.contents.data).forEach(([key,value])=>{
				this.#scenario_datas[value.group_id] ??= [];
				this.#scenario_datas[value.group_id].push(value);
			});
			this.#resources.token = episode_json.contents.token;
			resolve();
        });
    }


    isEnableTap(scenario_index){
        // console.log('!!! is enable tap ⭐', scenario_index, this.finishFlags[scenario_index]  )
        return this.finishFlags[scenario_index]['serif'] && this.finishFlags[scenario_index]['motion'] && !this.finishFlags[scenario_index]['taped'];
    }

    enableTap(isSerif, scenario_index){
        // if(isSerif) this.serifEnd = true;
        // if(!isSerif) this.motionEnd = true;
        // console.log('!!! enable tap ⭐', isSerif, scenario_index);
        // if(!this.motionEnd || !this.serifEnd) return;

        if(isSerif) this.finishFlags[scenario_index]['serif'] = true;
        if(!isSerif) this.finishFlags[scenario_index]['motion'] = true;
        console.log(this.finishFlags[scenario_index]['serif'],this.finishFlags[scenario_index]['motion'])
        if(!this.isEnableTap.bind(this)(scenario_index)) return;
        console.log(this.selectors.isAnimation);
        if(this.selectors.isAnimation) return;

        // skip 停止チェック
        console.log('@@@@@ skip check', this.isSkip, this.skipTarget, this.scenario_index, this.setting.autoPlay, this.selectors.isSelecting(), this.canGotoSelect);
        if(this.isSkip && this.skipTarget !== null && this.skipTarget === this.scenario_index){
            this.isSkip = false;
            this.skipTarget = null;
            this.canGotoSelect = this.hasSelect();
            // this.#hideLoadEffect();

        }else if(this.isSkip && this.skipTarget === null) {
            const scenarios = this.#scenario_datas[this.scenario_index] ?? [];
            scenarios.forEach((scenario) => {
                if (scenario.type === "select") {
                    this.isSkip = false;
                }
            });
            if(!this.isSkip) {
                this.#hideLoadEffect();
                Howler.mute(this.setting.mute);
            }
        }

        let voice_finished = !this.isPlayingVoice();
        if(voice_finished) this.ui.enableVoiceReplay();

        console.log('!!! voice finished', this.playing_voice.length, voice_finished, this.#needCursor);
        if(this.setting.autoPlay && !this.isSkip && this.scenario_index > 1 ) {// オートプレイ中　ボイスが終わっていたら自動タップ
            console.log('!!! auto play', this.scenario_index, this.#scenario_datas.length);
            this.cursor.enableTap();
            if(voice_finished) {
                if (this.#needCursor && !this.isSkip) {
                    setTimeout(() => {
                        this.cursor.tap(null, false, scenario_index);
                    }, 800);
                } else {
                    this.cursor.tap();
                }
            }
        }else if(this.#needCursor){
            console.log('!!! need cursor', this.scenario_index, this.#scenario_datas.length);
            this.cursor.enableTap();
            if(this.isSkip) {
                setTimeout(() => {
                    this.cursor.tap(null, false, scenario_index);
                }, 10);
            }else{
                // スキップボタンが押せるかチェック（スキップ中はチェックしない）
                console.log('!!! can goto select', this.hasSelect(), !this.setting.autoPlay, !this.selectors.isSelecting());
                this.canGotoSelect = this.hasSelect() && !this.setting.autoPlay && !this.selectors.isSelecting() && this.scenario_index !== 0;

                // 早送りボタンが押せるかチェック
                this.canPrev = !this.setting.autoPlay && !this.selectors.isSelecting();

            }
        }else{
            console.log('!!! no need cursor', this.scenario_index, this.#scenario_datas.length);
            this.scenario_index++;
            this.next.bind(this)();
        }

    }

    disableTap(){
        this.cursor.disableTap();
    }

    // 早送りが出来るか
    #canPrev = false;

    get canPrev(){
        return this.#canPrev;
    }

    set canPrev(value){
        this.#canPrev = value;
        if(value){
            document.querySelectorAll(".btn-rewind").forEach((element) => {
                element.classList.remove("d-none");
                element.style.cursor = "pointer";
            });
            document.querySelectorAll(".btn-rewind-gray").forEach((element) => {
                element.classList.add("d-none");
                element.style.cursor = "initial";
            });
        }else{
            document.querySelectorAll(".btn-rewind").forEach((element) => {
                element.classList.add("d-none");
                element.style.cursor = "initial";
            });
            document.querySelectorAll(".btn-rewind-gray").forEach((element) => {
                element.classList.remove("d-none");
                element.style.cursor = "initial";
            });
        }
    }

    // 選択肢スキップが出来るか
    #canGotoSelect = false;

    get canGotoSelect(){
        return this.#canGotoSelect;
    }

    set canGotoSelect(value){
        this.#canGotoSelect = value;
        let label = document.getElementById("skip-for-selector");
        let iconSkip = document.getElementById("icon-skip");
        let iconSkipGray = document.getElementById("icon-skip-gray");
        if(value){
            label.classList.remove("disable-skip");
            iconSkip.classList.remove("dp-n");
            iconSkip.style.cursor = "pointer";
            iconSkipGray.classList.add("dp-n");
            iconSkipGray.style.cursor = "initial";
        }else{
            label.classList.add("disable-skip");
            iconSkip.classList.add("dp-n");
            iconSkip.style.cursor = "initial";
            iconSkipGray.classList.remove("dp-n");
            iconSkipGray.style.cursor = "initial";
        }

    }




    /**
     * スキップボタンが押された時の処理
     * @param target
     * @param withEffect
     * @param withReset
     */
    skip(target = null, withEffect = true, withReset = false){
        console.log('@@@skip', this.isSkip, this.scenario_index, this.setting.autoPlay, this.selectors.isSelecting(), !this.canGotoSelect);
        if(this.isSkip || this.scenario_index === 0 || this.setting.autoPlay || !this.cursor.isEnableTap()) return;
        Howler.mute(true);
        if(withEffect) this.#showLordEffect(0);
        if(withReset) {
            this.reset().then(()=>{
                this.isSkip = true;
                this.skipTarget = target;
                this.next.bind(this)();
            });
        }else{
            this.isSkip = true;
            this.skipTarget = target;
            this.scenario_index++;
            this.next.bind(this)();
        }

    }

    // disableSkip(withPrev = true){
    //     console.log('@@@@ disableSkip')
    //     this.ui.skipForSelector().classList.add("disable-skip");
    //     document.getElementById("icon-skip").classList.add("dp-n");
    //     document.getElementById("icon-skip-gray").classList.remove("dp-n");
    //     if(withPrev) {
    //         document.querySelectorAll(".btn-rewind").forEach((element) => {
    //             element.classList.add("d-none");
    //         });
    //         document.querySelectorAll(".btn-rewind-gray").forEach((element) => {
    //             element.classList.remove("d-none");
    //         });
    //     }
    //     this.skipEnable = false;
    // }

    // enableSkip(withPrev = true){
    //     console.log('@@@@ enableSkip')
    //     this.ui.skipForSelector().classList.remove("disable-skip");
    //     document.getElementById("icon-skip").classList.remove("dp-n");
    //     document.getElementById("icon-skip-gray").classList.add("dp-n");
    //     if(withPrev) {
    //         document.querySelectorAll(".btn-rewind").forEach((element) => {
    //             element.classList.remove("d-none");
    //         });
    //         document.querySelectorAll(".btn-rewind-gray").forEach((element) => {
    //             element.classList.add("d-none");
    //         });
    //     }
    //     this.skipEnable = true;
    // }

    /**
     * この先のシナリオにセレクトが存在しているか
     */
    hasSelect(){
        if(is_first_read || !this.#scenario_datas) return false;// 最初の読み込み時はスキップボタンを表示しない
        let hasSelect = false;
        let hasNext = true;
        let index = this.scenario_index +1;
        while (hasNext){
            const scenarios = this.#scenario_datas[index] ?? null;
            if(scenarios === null) {
                hasNext = false;
            }else{
                index++;
                scenarios.forEach((scenario)=>{
                    if(scenario.type === "select"){
                        hasSelect = true;
                        hasNext = false;
                    }
                    if((!isNaN(scenario.jump_to) && Number(scenario.jump_to)>0)){
                        index = Number(scenario.jump_to);
                    }
                });

            }
        }
        console.log('!!! has select', hasSelect);
        return hasSelect;
    }


    prev(scenario_index){
        console.log('@@@prev', scenario_index === this.scenario_index , this.setting.autoPlay , this.isSkip, this.selectors.isSelecting(), !this.canPrev);
        if(scenario_index === this.scenario_index || this.setting.autoPlay || this.isSkip || this.selectors.isSelecting() || !this.canPrev) return;
        this.canPrev = false;
        console.log('@@@prev', scenario_index);
        document.getElementById("log-ul").innerHTML = "";
        this.setting.logVisible = "false";
        this.#showLordEffect(0).then(()=>{
            console.log('@@@ show effect');
            this.setting.ui = true;
            console.log('@@@skip call', scenario_index);
            this.skipEnable = true;
            this.skip(scenario_index, false, true);

        });
    }

    isPlayingVoice(){
        let voice_finished = true;
        this.playing_voice.forEach((sound)=>{
            if(sound.playing()) voice_finished = false;
        });
        return !voice_finished;
    }

    /**
     * 進行中のシナリオをリセットし、最初から再生する
     */
    reset(){
        return new Promise((resolve)=> {
            console.log('@@@reset serif');
            // セリフ削除
            this.textWindow.clear();
            this.textWindow.clearLog();
            console.log('@@@reset toast');
            // トースト削除
            // this.ui.toast().style.transition = 'none';
            // this.ui.toast().classList.add('dp-n');
            this.ui.toast().classList.remove('show');

            console.log('@@@reset voice');
            // SE&VOICE停止
            this.playing_voice.forEach((sound) => {
                sound.stop();
            });
            this.playing_voice = [];
            console.log('@@@reset se');
            // BGM停止
            if (this.playing_bgm) {
                this.playing_bgm.stop();
                this.playing_bgm = null;
            }

            // アニメ停止
            this.#animator.stopTweens();

            this.now_background = null;

            console.log('@@@reset selector');
            // セレクト非表示
            this.selectors.hide();
            this.selectors.reset();

            console.log('@@@reset index');
            this.scenario_index = 0;
            this.next_scenario_index = null;
            console.log('@@@reset resources');
            this.#resources.reset();
            // this.#scenario_datas = null;
            resolve();
        });
    }

    next(){
        console.log('@@@ next call')
        if(this.next_scenario_index !== null){
            this.scenario_index = this.next_scenario_index;
            this.next_scenario_index = null;
        }

        console.log('@@@ next2');
        const group_id = this.scenario_index;
        if(!this.#scenario_datas) return ;

        // そのまま次へ行くアクションか
        this.#needCursor = this.scenario_index === 0;
        // console.log('!!! need cursor', this.#needCursor);
        this.disableTap();
        this.canPrev = false;
        this.canGotoSelect = false;

        //フラグ初期化
        console.log('!!!⭐ finish flag init', this.scenario_index)
        this.finishFlags[this.scenario_index] = {
            'serif': false,
            'motion': false,
            'taped': false,
        };

        // セリフ削除
        this.textWindow.clear();
        // トースト削除
        this.ui.toast().classList.remove('show');
        // SE&VOICE停止
        this.playing_voice.forEach((sound)=>{
            sound.stop();
        });
        this.playing_voice = [];
        this.voice_for_replay = [];

        // ボイスリプレイを停止
        this.ui.disableVoiceReplay();

        // 動いている間はタップ禁止
        this.finish_move = false;

        // セリフとモーションを別管理
        this.serifEnd = false;
        this.motionEnd = false;

        console.log('@@@ next scenario');

        const scenarios = this.#scenario_datas[this.scenario_index] ?? [];
        // console.log('scenarios', scenarios);
        if( this.scenario_index > 0 && scenarios.length === 0 ) {
            this.#bgm({"type":"bgm","sound":-1});
            if(this.#finished === false) {
                // console.log('story finish', this.maxStage, this.setting.autoContinue);
                this.#finished = true;
                setTimeout(() => {
					location.reload();
                }, 2000);
            }
            return;
        }


        if(this.skipTarget === this.scenario_index) {
            Howler.mute(this.setting.mute);
            this.#hideLoadEffect();
        }
        let serif_promises = [];
        let motion_promise = [];
        scenarios.forEach((origin)=>{
            let scenario = structuredClone( origin );
            if(this.isSkip && this.skipTarget !== this.scenario_index) {
                scenario.msec = 0;
                scenario.delay = 0;
                console.log('@@@@@ skip scenario', scenario.msec, scenario.delay, scenario.type);
            }else{
                console.log('@@@@@ no skip scenario', scenario.msec, scenario.delay, scenario.type);
            }
            // console.log("!!!",scenario);
            // console.log(scenario, this.#resources.getResource(scenario.resource_id) instanceof Chara, this.#resources.getResource(scenario.resource_id)?.zIndex);
            if(this.#resources.getResource(scenario.resource_id) instanceof Chara && this.#resources.getResource(scenario.resource_id).zIndex === 0){
                this.#resources.getResource(scenario.resource_id).zIndex = this.#chara_index --;
            }

            let delay_promise = new Promise((resolve)=>{
                // const rand = Math.floor( Math.random() * 1000 );
                // console.log('!!! rand start', rand);
                setTimeout(()=>{
                    Promise.all([
                        this.#face(scenario),
                        this.#serif_reset(scenario),
                        this.#bg(scenario),
                        this.#text(scenario),
                        this.#bgm(scenario),
                        this.#se(scenario),
                        this.#x(scenario),
                        this.#y(scenario),
                        this.#xy(scenario),
                        this.#z(scenario),
                        this.#scale(scenario),
                        this.#alpha(scenario),
                        this.#wait(scenario),
                        this.#motion(scenario),
                        this.#select(scenario),
                        this.#filter(scenario),
                        this.#toast(scenario),
                        this.#volume(scenario),
                    ]).then(()=>{
                        // console.log('!!! rand finish', rand);
                        if(this.voice_for_replay.length > 0){
                            this.textWindow.addReplayVoiceBtn(document.getElementById(`log-serif-${this.scenario_index}`), this.voice_for_replay, true);
                        }
                        resolve();
                    });
                }, scenario.delay ?? 0);
            });

            motion_promise.push(delay_promise);

            serif_promises.push( new Promise((resolve)=>{
                setTimeout(()=>{
                    this.#serif(scenario).then(()=>{
                        resolve();
                    });
                }, scenario.delay ?? 0);
            }));

        });

        Promise.all(motion_promise)
            .then(()=> {
                console.log('!!! finish move ⭐⭐⭐', group_id);
                this.enableTap.bind(this)(false, group_id);

            });

        Promise.all(serif_promises)
            .then(()=>{
                console.log('!!! finish all serif　⭐⭐⭐', group_id);
                this.enableTap.bind(this)(true, group_id);
            });

        // console.log('!!! need cursor', this.#needCursor);
    }

    #bg(scenario){
        if(scenario.type !== "bg") return new Promise((resolve)=>resolve());
        if(scenario.msec < 0) scenario.msec = 0;
        const resource = this.#resources.getResource(scenario.resource_id);
        console.log("@@@ background", resource, this.now_background, scenario);
        let promises = [
            this.#animator.alphaTo(resource, 100, scenario.msec, scenario.option ?scenario.option: "liner"),
            this.#animator.moveToX(resource, scenario.value.split(':')[0], 0, "liner"),
            this.#animator.moveToY(resource, scenario.value.split(':')[1], 0, "liner"),
        ];
        if(this.now_background) promises.push(this.#animator.alphaTo(this.now_background, 0, scenario.msec, scenario.option ?scenario.option: "liner"));

        this.now_background = resource;
        return Promise.all(promises);
    }

    #select(scenario){
        if(scenario.type !== "select") return new Promise((resolve)=>resolve());
        this.#needCursor = true;
        // console.log(scenario, scenario.jump_to === "" ? this.scenario_index : scenario.jump_to);
        this.selectors.set((!isNaN(scenario.option) && Number(scenario.option)>0) ?Number(scenario.option) : 1,scenario.value, (!isNaN(scenario.jump_to) && Number(scenario.jump_to)>0) ? Number(scenario.jump_to) : this.scenario_index, scenario.group_id);
        return new Promise((resolve)=>{
            setTimeout(()=>{resolve();}, 100);
        });
    }

    #motion(scenario){
        const chara = this.#resources.getResource(scenario.resource_id);
        if(scenario.motion && chara[scenario.motion]) {
            return chara[scenario.motion].bind(chara)(scenario);
        }
    }

    #wait(scenario){
        if(scenario.type !== "wait") return new Promise((resolve)=>resolve());
        this.#needCursor = true;
        if(!isNaN(scenario.jump_to) && Number(scenario.jump_to)>0)this.next_scenario_index = Number(scenario.jump_to);
        return new Promise((resolve)=>{
            setTimeout(()=>{resolve();}, scenario.value);
        });
    }


    #delay(scenario){
        if(isNaN(scenario.delay) || scenario.delay <= 0) return new Promise((resolve)=>resolve());
        return new Promise((resolve)=>{
            // setTimeout(()=>{resolve();console.log('delay',scenario.delay)}, scenario.delay);
        });
    }


    #text(scenario){
        if(scenario.type !== "text") return new Promise((resolve)=>resolve());
        this.#needCursor = true;
        if(!isNaN(scenario.jump_to) && Number(scenario.jump_to)>0)this.next_scenario_index = Number(scenario.jump_to);
        return this.textWindow.set(scenario.option, scenario.value, scenario.sound ?? 0 );
    }


    /**
     *
     * @param scenario
     * @returns {Promise<Awaited<unknown>[]>|Promise<unknown>}
     */
    #serif_reset(scenario){
        if(scenario.type !== "serif_face_reset") return new Promise((resolve)=>resolve());
        this.#needCursor = true;
        if(!isNaN(scenario.jump_to) && Number(scenario.jump_to)>0)this.next_scenario_index = Number(scenario.jump_to);
        const chara = this.#resources.getResource(scenario.resource_id);
        // 話す立ち位置が指定されていたら、自動で移動＆クロスフェード
        let promises = [];
        let promise;
        if(chara !== null && ['center','right','left','more-right','more-left','very-right','very-left'].includes(scenario.option) ){
            let before;
            switch (scenario.option){
                case 'center' : before = this.#center; chara.x = 0; break;
                case 'right' : before = this.#right; chara.x = 225; break;
                case 'left' : before = this.#left; chara.x = -225; break;
                case 'more-right' : before = this.#moreRight; chara.x = 450; break;
                case 'more-left' : before = this.#moreLeft; chara.x = -450; break;
                case 'very-right' : before = this.#veryRight; chara.x = 450; break;
                case 'very-left' : before = this.#veryLeft; chara.x = -450; break;
            }
            promises.push( this.#crossFade(chara, before));
            switch (scenario.option){
                case 'center' : this.#center = chara; break;
                case 'right' : this.#right = chara; break;
                case 'left' : this.#left = chara; break;
                case 'more-right' : this.#moreRight = chara; break;
                case 'more-left' : this.#moreLeft = chara; break;
                case 'very-right' : before = this.#veryRight; chara.x = 450; break;
                case 'very-left' : before = this.#veryLeft; chara.x = -450; break;
            }
            promise = Promise.all(promises);
        }else{
            promise = new Promise((resolve)=> resolve());
        }

        this.speaker = chara;

        return promise.then(()=>{
            let promises = [];
            const name = this.#resources.getName(scenario.resource_id);

            promises.push(this.textWindow.set(name, scenario.value, scenario.sound ?? 0 ));
            /** @var {Howl} voice */
            const voice = this.#resources.getResource(scenario.sound);
            let resolved = false;
            if(voice !== null) {
                promises.push(new Promise((resolve, reject)=>{
                    voice.mute(!this.setting.voice);
                    voice.on("end", ()=> {
                        // console.log('end!')
                        if(!resolved){
                            resolve();
                            resolved = true;
                        }
                    });
                    voice.on("stop", ()=> {
                        // console.log('stop!')
                        if(!resolved){
                            resolve();
                            resolved = true;
                        }
                    });
                    voice.on("playerror", reject);
                    if(!isNaN(scenario.volume) && scenario.volume > 0) voice.volume(scenario.volume);
                    voice.play();
                }));
                // soundのIDで判断する
                if(scenario.sound > 100000000){// voice
                    this.playing_voice.push(voice);
                }else if(scenario.sound > 1000) {// se
                    this.playing_se.push(voice);
                }else if(scenario.sound > 100) {// bgm
                    this.playing_bgm = voice;
                }
            }

            if(scenario.msec > 0){
                promises.push(new Promise((resolve)=>{
                    setTimeout(resolve, scenario.msec);
                }));
            }

            return Promise.all(promises);
        }).then(()=>{
            if(chara !== null){
                return chara.resetFace.bind(chara)();
            }else{
                new Promise((resolve)=> resolve());
            }
        });
    }


    #serif(scenario){
        if(scenario.type !== "serif") return new Promise((resolve)=>resolve());
        this.#needCursor = true;
        // console.log('!!! need cursor', this.#needCursor);
        if(!isNaN(scenario.jump_to) && Number(scenario.jump_to)>0)this.next_scenario_index = Number(scenario.jump_to) ;
        const chara = this.#resources.getResource(scenario.resource_id);
        // 話す立ち位置が指定されていたら、自動で移動＆クロスフェード
        let promises = [];
        let promise;
        if(chara !== null && ['center','right','left','more-right','more-left','very-right','very-left'].includes(scenario.option) ){
            let before;
            switch (scenario.option){
                case 'center' : before = this.#center; chara.x = 0; break;
                case 'right' : before = this.#right; chara.x = 225; break;
                case 'left' : before = this.#left; chara.x = -225; break;
                case 'more-right' : before = this.#moreRight; chara.x = 450; break;
                case 'more-left' : before = this.#moreLeft; chara.x = -450; break;
                case 'very-right' : before = this.#veryRight; chara.x = 450; break;
                case 'very-left' : before = this.#veryLeft; chara.x = -450; break;
            }
            promises.push( this.#crossFade(chara, before));
            switch (scenario.option){
                case 'center' : this.#center = chara; break;
                case 'right' : this.#right = chara; break;
                case 'left' : this.#left = chara; break;
                case 'more-right' : this.#moreRight = chara; break;
                case 'more-left' : this.#moreLeft = chara; break;
                case 'very-right' : before = this.#veryRight; chara.x = 450; break;
                case 'very-left' : before = this.#veryLeft; chara.x = -450; break;
            }
            promise = Promise.all(promises);
        }else{
            promise = new Promise((resolve)=> resolve());
        }

        this.speaker = chara;
        const scenario_index_now = scenario.group_id;
        console.log('!!!⭐ set voice finish', scenario_index_now);

        return new Promise((resolve)=>{
            promise.then(()=>{
                let promises = [];
                const name = this.#resources.getName(scenario.resource_id) ?? scenario.option ??  "";
                promises.push(this.textWindow.set(name, scenario.value, scenario.sound ?? 0 ));
                const voice = this.#resources.getResource(scenario.sound);
                if(voice !== null && (!this.isSkip || this.skipTarget === this.scenario_index)) {

                    // soundのIDでSEかどうかを判断する
                    if(scenario.sound > 100000000){// voice
                        voice.mute(!this.setting.voice);
                    }else if(scenario.sound > 1000) {// se
                        voice.mute(!this.setting.se);
                    }else if(scenario.sound > 100) {// bgm
                        voice.mute(!this.setting.bgm);
                    }

                    if(!isNaN(scenario.volume) && scenario.volume > 0) voice.volume(scenario.volume);

                    // promises.push(
                        new Promise((resolve, reject)=>{
                            voice.on("end", ()=> {
                                // console.log('!!! end!')
                                setTimeout(()=>{
                                    resolve();
                                }, 800);
                            });
                            voice.on("stop", ()=> {
                                // console.log('!!! stop!')
                                reject();
                            });
                            voice.on("playerror", reject);
                        }).then(()=>{
                            if(!this.isPlayingVoice()) this.ui.enableVoiceReplay();
                            if(this.setting.autoPlay){
                                console.log('!!!⭐ voice finish', scenario_index_now);
                                // setTimeout(()=>{
                                    this.cursor.tap.bind(this.cursor)(null,true, scenario_index_now);
                                // }, 800);
                            }
                        }).catch(()=>{});
                    // );

                    voice.play();
                    // soundのIDで判断する
                    if(scenario.sound > 100000000){// voice
                        this.playing_voice.push(voice);
                    }else if(scenario.sound > 1000) {// se
                        this.playing_se.push(voice);
                    }else if(scenario.sound > 100) {// bgm
                        this.playing_bgm = voice;
                    }

                }

                if(scenario.msec > 0){
                    promises.push(new Promise((resolve)=>{
                        setTimeout(resolve, scenario.msec);
                    }));
                }

                Promise.all(promises).then(resolve);
            });
        });

    }

    /**
     *
     * @param show
     * @param hide
     * @param msec
     * @param easing
     * @returns {Promise<Awaited<unknown>[]>|Promise<unknown>}
     */
    #crossFade(show,hide, msec = 500, easing = "liner"){
        if(show === hide) return new Promise((resolve)=> resolve());
        let promises = [];
        if(show) promises.push(this.#animator.alphaTo(show, 100, msec, easing));
        if(hide) promises.push(this.#animator.alphaTo(hide, 0, msec, easing));
        return Promise.all(promises);
    }

    /**
     *
     * @param scenario
     * @returns {*|Promise<unknown>}
     */
    #face(scenario) {
        if(scenario.face === "" && scenario.wear === "") return new Promise((resolve)=>resolve());
        /** @var {Chara} chara */
        const chara = this.#resources.getResource(scenario.resource_id);
        // console.log(scenario);
        return chara.changeFace.bind(chara)(scenario.wear,scenario.face);
        // return new Promise((resolve)=>{
        //     setTimeout(()=>{
        //         chara.changeFace.bind(chara)(scenario.wear,scenario.face)
        //             .then(resolve);
        //     }, scenario.delay ?? 0);
        // });
    }


    /**
     *
     * @param scenario
     * @returns {Promise<unknown>}
     */
    #bgm(scenario){
        if(scenario.type !== "bgm") return new Promise((resolve)=>resolve());
        // if(this.playing_bgm) this.playing_bgm.stop();
        let fade_time = scenario.msec ? scenario.msec : 1500;
        if(this.isSkip) fade_time = 0;
        if(this.playing_bgm){
            const before_bgm = this.playing_bgm;
            // console.log(before_bgm.resource_id + " fade out#");
            before_bgm.before_volume = before_bgm.volume();
            // before_bgm.on('fade', ()=>{before_bgm.stop(before_bgm.before_bgm_id);});
            before_bgm.fade(before_bgm.volume(), 0, fade_time, before_bgm.before_bgm_id);
        }
        const bgm = this.#resources.getResource(scenario.sound);
        if(bgm !== null){
            // console.log(bgm.resource_id + " fade in#");
            if(!isNaN(scenario.volume) && scenario.volume > 0) bgm.volume(scenario.volume);
            // console.log('bgm play', bgm.volume());
            console.log('@@@ bgm', bgm.volume());
            const volume = bgm.before_volume ?? bgm.volume();
            // console.log("bgm volume#", volume);

            // soundのIDでSEかどうかを判断する
            if(scenario.sound > 100000000){// voice
                bgm.mute(!this.setting.voice);
            }else if(scenario.sound > 1000) {// se
                bgm.mute(!this.setting.se);
            }else if(scenario.sound > 100) {// bgm
                bgm.mute(!this.setting.bgm);
            }

            const id = bgm.play();
            console.log("@@@", volume, fade_time, id)
            bgm.fade(0, volume, fade_time, id);
            bgm.before_bgm_id = id;
            // soundのIDで判断する
            // if(scenario.sound > 100000000){// voice
            //     this.playing_voice.push(bgm);
            // }else if(scenario.sound > 1000) {// se
            //     this.playing_se.push(bgm);
            // }else if(scenario.sound > 100) {// bgm
                this.playing_bgm = bgm;
            // }
        }else{
            this.playing_bgm = null;
        }

    }


    #volume(scenario){
        if(scenario.type !== "volume") return new Promise((resolve)=>resolve());
        let fade_time = scenario.msec ? scenario.msec : 500;
        /** @var {Howl} sound */
        const sound = this.#resources.getResource(scenario.sound);
        if(sound !== null && sound.playing()){
            sound.fade(sound.volume(), scenario.volume, fade_time);
        }
        return new Promise((resolve)=>{
            setTimeout(resolve, fade_time);
            resolve();
        });

    }

    #se(scenario){
        if(scenario.type !== "se") return new Promise((resolve)=>resolve());
        const se = this.#resources.getResource(scenario.sound);
        if(se !== null && (!this.isSkip || this.skipTarget === this.scenario_index)){

            //voice 同時発話対策
            if(scenario.sound > 100000000){
                return this.#voice(scenario);
            }

            // console.log('se play');
            // soundのIDでSEかどうかを判断する
            if(scenario.sound > 100000000){// voice
                se.mute(!this.setting.voice);
            }else if(scenario.sound > 1000) {// se
                se.mute(!this.setting.se);
            }else if(scenario.sound > 100) {// bgm
                se.mute(!this.setting.bgm);
            }

            // soundのIDで判断する
            if(scenario.sound > 100000000){// voice
                this.playing_voice.push(se);
            }else if(scenario.sound > 1000) {// se
                this.playing_se.push(se);
            }else if(scenario.sound > 100) {// bgm
                this.playing_bgm = se;
            }

            if(!isNaN(scenario.volume) && scenario.volume > 0) se.volume(scenario.volume);
            se.on("end", ()=>{
                if(!this.isPlayingVoice()) this.ui.enableVoiceReplay();
            });
            se.play();
        }
        return Promise.resolve();
    }

    #voice(scenario){
        const voice = this.#resources.getResource(scenario.sound);
        if(voice !== null && (!this.isSkip || this.skipTarget === this.scenario_index)) {
            voice.mute(!this.setting.voice);
            if (!isNaN(scenario.volume) && scenario.volume > 0) voice.volume(scenario.volume);
            const promise = new Promise((resolve, reject) => {
                voice.on("end", () => {
                    if(!this.isPlayingVoice()) this.ui.enableVoiceReplay();
                    // console.log('!!! end!')
                    setTimeout(() => {
                        resolve();
                    }, 800);
                });
                voice.on("stop", () => {
                    // console.log('!!! stop!')
                    reject();
                });
                voice.on("playerror", reject);
            }).then(() => {
                if (this.setting.autoPlay || this.isSkip) {
                    // setTimeout(()=>{
                    this.cursor.tap.bind(this.cursor)(null, true, scenario.group_id);
                    // }, 800);
                }
            }).catch((reason) => {
                console.error(reason);
            });

            voice.play();
            this.playing_voice.push(voice);
            this.voice_for_replay.push(scenario.sound);

            return promise;
        }else{
            return Promise.resolve();
        }

    }

    #x(scenario){
        if(scenario.type !== "x") return new Promise((resolve)=>resolve());
        const resource = this.#resources.getResource(scenario.resource_id);

        // console.log('x preset', this.#getPresetX(scenario));
        if(scenario.msec < 0) scenario.msec = 0;
        return this.#animator.moveToX(resource, this.#getPresetX(scenario), scenario.msec, scenario.option ?scenario.option: "liner");
    }

    #getPresetX(scenario){
        if(Number(scenario.resource_id) === 1 ) {// camera
            switch (scenario.value) {
                case "more-left":
                    return 900;
                case "left":
                    return 450;
                case "center":
                    return 0;
                case "right":
                    return -450;
                case "more-right":
                    return -900;
                default:
                    return scenario.value;
            }
        }else if(Number(scenario.resource_id) >= 100000 ){// chara
            switch (scenario.value) {
                case "very-left":
                    return -1125;
                case "more-left":
                    return -675;
                case "left":
                    return -225;
                case "center":
                    return 0;
                case "right":
                    return 225;
                case "more-right":
                    return 675;
                case "very-right":
                    return 1126;
                default:
                    return scenario.value;
            }
        }else{
            return scenario.value;
        }
    }

    #y(scenario){
        if(scenario.type !== "y") return new Promise((resolve)=>resolve());
        if(scenario.msec < 0) scenario.msec = 0;
        const resource = this.#resources.getResource(scenario.resource_id);
        return this.#animator.moveToY(resource, scenario.value, scenario.msec, scenario.option ?scenario.option: "liner");
    }

    #xy(scenario){
        if(scenario.type !== "xy") return new Promise((resolve)=>resolve());
        if(scenario.msec < 0) scenario.msec = 0;
        const resource = this.#resources.getResource(scenario.resource_id);
        return Promise.all([
            this.#animator.moveToX(resource, scenario.value.split(':')[0], scenario.msec, scenario.option ?scenario.option: "liner"),
            this.#animator.moveToY(resource, scenario.value.split(':')[1], scenario.msec, scenario.option ?scenario.option: "liner"),
        ]);
    }

    #z(scenario){
        if(scenario.type !== "z") return new Promise((resolve)=>resolve());
        if(scenario.msec < 0) scenario.msec = 0;
        const resource = this.#resources.getResource(scenario.resource_id);
        return this.#animator.moveToZ(resource, scenario.value, scenario.msec, scenario.option ?scenario.option: "liner");
    }

    #scale(scenario){
        if(scenario.type !== "scale") return new Promise((resolve)=>resolve());
        if(scenario.msec < 0) scenario.msec = 0;
        const resource = this.#resources.getResource(scenario.resource_id);
        return this.#animator.scaleTo(resource, scenario.value, scenario.msec, scenario.option ?scenario.option: "liner");
    }

    #alpha(scenario){
        if(scenario.type !== "alpha") return new Promise((resolve)=>resolve());
        if(scenario.msec < 0) scenario.msec = 0;
        const resource = this.#resources.getResource(scenario.resource_id);
        return this.#animator.alphaTo(resource, scenario.value, scenario.msec, scenario.option ?scenario.option: "liner");
    }

    #filter(scenario) {
        if(scenario.type !== "filter") return new Promise((resolve)=>resolve());
        if(scenario.msec < 0) scenario.msec = 0;
        const resource = this.#resources.getResource(scenario.resource_id);
        const option = JSON.parse(scenario.option);
        let filter;
        let updater;
        switch (option.type){
            case "color":
                if("color_"+option.method in resource.activeFilters){
                    filter = resource.activeFilters["color_"+option.method];
                    if(option?.reset === "true" || option?.reset === true){
                        resource.filters.splice(resource.filters.indexOf(filter),1);
                        delete resource.activeFilters["color_"+option.method];
                        break;
                    }
                }else{
                    filter = new PIXI.filters.ColorMatrixFilter();
                    resource.activeFilters["color_"+option.method] = filter;
                    resource.filters.push(filter);
                }

                updater = new FilterUpdater(filter,option.method,option.anime_param,option.params);
                return this.#animator.filterTo(updater, option.to_param,scenario.msec, scenario.option?.easing ?scenario.option.easing: "liner");
            case "blur":
                if("blur" in resource.activeFilters){
                    filter = resource.activeFilters["blur"];
                    if(option?.reset === "true" || option?.reset === true){
                        resource.filters.splice(resource.filters.indexOf(filter),1);
                        delete resource.activeFilters["blur"];
                        break;
                    }
                }else{
                    filter = new PIXI.BlurFilter(...option.params);
                    resource.activeFilters["blur"] = filter;
                    resource.filters.push(filter);
                }
                return this.#animator.blurTo(filter, option.to_param,scenario.msec, scenario.option?.easing ?scenario.option.easing: "liner");
            case "noise":
                if("noise" in resource.activeFilters){
                    filter = resource.activeFilters["noise"];
                    if(option?.reset === "true" || option?.reset === true){
                        resource.filters.splice(resource.filters.indexOf(filter),1);
                        delete resource.activeFilters["noise"];
                        break;
                    }
                }else{
                    filter = filter = new PIXI.filters.NoiseFilter(...option.params);
                    resource.activeFilters["noise"] = filter;
                    resource.filters.push(filter);
                }
                return this.#animator.noiseTo(filter, option.to_param,scenario.msec, scenario.option?.easing ?scenario.option.easing: "liner");
            default :
                // resource.activeFilters = [];
                // resource.filters = [];
                break;
        }
        return new Promise((resolve)=>resolve());
    }


    #toast(scenario){
        console.log("+++++",scenario);
        if(scenario.type !== "toast") return new Promise((resolve)=>resolve());
        // this.#needCursor = true;
        if(!isNaN(scenario.jump_to) && Number(scenario.jump_to)>0)this.next_scenario_index = Number(scenario.jump_to);
        // Skip中は出さない
        if(this.isSkip && this.skipTarget !== this.scenario_index) return new Promise((resolve)=>resolve());

        this.ui.textWindow().classList.add("d-none");
        this.ui.toast().innerText = scenario.value;
        this.ui.toast().classList.add('show');
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve();
            }, (this.isSkip ? 1 : 500) + (scenario.msec > 0 ? scenario.msec : 2000));
        }).then(()=>{
            return new Promise((resolve2)=>{
                this.ui.toast().classList.remove('show');
                setTimeout(()=>{
                    this.ui.textWindow().classList.remove("d-none");
                    resolve2();
                }, (this.isSkip ? 1 : 500) );
            })
        });

    }

    getResource(resource_id){
        return this.#resources.getResource(resource_id);
    }

}

class FilterUpdater{

    constructor(filter, method, target_param, params) {
        this.filter = filter;
        this.method = method;
        this.params = params;
        this.target_param = target_param;
        this.update();
    }

    set param(value){
        this.params[this.target_param] = value;
        this.update.bind(this)();
    }

    get param(){
        return this.params[this.target_param];
    }

    update(){
        this.filter[this.method](...this.params);
    }
}