'use strict';

import {Chara} from "./Chara.mjs";
import {isNumeric} from "../../../adminlte/plugins/popper/popper-utils.js";

export class Animator {

    #flameMSec = 45;
    #tweens = [];
    #moveSpeed = 1.5;

    #easingList = {
        "liner": TWEEN.Easing.Linear.None,
        "quadratic_in": TWEEN.Easing.Quadratic.In,
        "quadratic_out": TWEEN.Easing.Quadratic.Out,
        "quadratic_inout": TWEEN.Easing.Quadratic.InOut,
        "cubic_in": TWEEN.Easing.Cubic.In,
        "cubic_out": TWEEN.Easing.Cubic.Out,
        "cubic_inout": TWEEN.Easing.Cubic.InOut,
        "quartic_in": TWEEN.Easing.Quartic.In,
        "quartic_out": TWEEN.Easing.Quartic.Out,
        "quartic_inout": TWEEN.Easing.Quartic.InOut,
        "quintic_in": TWEEN.Easing.Quintic.In,
        "quintic_out": TWEEN.Easing.Quintic.Out,
        "quintic_inout": TWEEN.Easing.Quintic.InOut,
        "sine_in": TWEEN.Easing.Sinusoidal.In,
        "sine_out": TWEEN.Easing.Sinusoidal.Out,
        "sine_inout": TWEEN.Easing.Sinusoidal.InOut,
        "exponential_in": TWEEN.Easing.Exponential.In,
        "exponential_out": TWEEN.Easing.Exponential.Out,
        "exponential_inout": TWEEN.Easing.Exponential.InOut,
        "circular_in": TWEEN.Easing.Circular.In,
        "circular_out": TWEEN.Easing.Circular.Out,
        "circular_inout": TWEEN.Easing.Circular.InOut,
        "elastic_in": TWEEN.Easing.Elastic.In,
        "elastic_out": TWEEN.Easing.Elastic.Out,
        "elastic_inout": TWEEN.Easing.Elastic.InOut,
        "back_in": TWEEN.Easing.Back.In,
        "back_out": TWEEN.Easing.Back.Out,
        "back_inout": TWEEN.Easing.Back.InOut,
        "bounce_in": TWEEN.Easing.Bounce.In,
        "bounce_out": TWEEN.Easing.Bounce.Out,
        "bounce_inout": TWEEN.Easing.Bounce.InOut
    };


    frameToMSec(frame, speedRate = 1){
        return frame * 66.66 * speedRate;
    }

    reset(chara){
        chara.anime.x = 0;
        if(chara.isFront) return;
        chara.anime.y = 0;
        chara.anime.scale.x = chara.anime.scale.y = 1;
        // chara.zIndex = 0;
        // console.log('@-@ chara reset', chara.name);
    }

    stop(chara){
        this.#tweens.forEach((tween)=>{
            tween.stop();
        });
        this.reset(chara);
    }

    stopTweens(){
        this.#tweens.forEach((tween)=>{
            console.log('@@@@ stop tween', tween);
            tween.stop();
        });
        this.#tweens = [];
    }


    /**
     *
     * @param chara
     * @param scenario
     * @param isReset
     * @returns {Promise<unknown>}
     */
    jump(chara, scenario, isReset = true){
        // console.log('jump',chara);
        let value = 10;
        if(!isNaN(scenario.value) && scenario.value > 0) value = scenario.value;
        let msec = 200;
        if(!isNaN(scenario.msec) && scenario.msec >= 0) msec = scenario.msec;
        if(msec === 0) msec = 1;
        const option = scenario.option;
        if(isReset) this.reset(chara);
        // console.log('jump', value, msec);
        return new Promise((resolve)=>{
            const t1 = new TWEEN.Tween(chara.anime)
                .to({y: value * -1},msec)
                .easing(TWEEN.Easing.Quartic.Out);
            const t2 = new TWEEN.Tween(chara.anime)
                .to({y: value},msec)
                .easing(TWEEN.Easing.Quartic.In)
                .onComplete(()=>{
                    if(option === 'loop') this.jump(chara, scenario, false);
                    resolve();
                });
            t1.chain(t2);

            t1.target = chara;
            t2.target = chara;

            t1.infos = {name: 'jump', target: chara, value: value, msec: msec, option: option};
            t2.infos = {name: 'jump', target: chara, value: value, msec: msec, option: option};

            this.#tweens.push(t1);
            this.#tweens.push(t2);

            t1.start();
        });
    }



    /**
     * 2回ぴょんぴょん跳ねる
     * @param {Chara} chara
     * @param scenario
     * @return {Promise<unknown>}
     */
     happy(chara, scenario){
         console.log('happy',chara);
         let msec = 267;
         if(!isNaN(scenario.msec) && scenario.msec >= 0) msec = scenario.msec;
         if(msec === 0) msec = 1;
         console.log('happy msec', msec);
         let move = 25;
         if(!isNaN(scenario.value) && scenario.value !== 0) move = scenario.value;
         let base_y = chara.anime.y;
         move -= base_y;

         return new Promise((resolve)=>{
            this.reset(chara);
            const t1 = new TWEEN.Tween(chara.anime)
                .to({y: (move*-0.92) },msec)
                .easing(TWEEN.Easing.Quartic.Out);
            const t2 = new TWEEN.Tween(chara.anime)
                .to({y: move },msec)
                .easing(TWEEN.Easing.Quartic.In);
            const t3 = new TWEEN.Tween(chara.anime)
                .to({y: (move*-0.92) },msec)
                .easing(TWEEN.Easing.Quartic.Out);
            const t4 = new TWEEN.Tween(chara.anime)
                .to({y: move },msec)
                .easing(TWEEN.Easing.Quartic.In)
                .onComplete(resolve);
            const t5 = new TWEEN.Tween(chara.anime)
                .to({y: move },msec*0.57)
                .onComplete(()=>{
                    if(scenario.option === "loop") this.happy(chara, scenario);
                    resolve();
                });
            t4.chain(t5);
            t3.chain(t4);
            t2.chain(t3);
            t1.chain(t2);

            t1.target = chara;
            t2.target = chara;
            t3.target = chara;
            t4.target = chara;
            t5.target = chara;

            t1.infos = {name: 'happy', target: chara, value: move, msec: msec, option: scenario.option};
            t2.infos = {name: 'happy', target: chara, value: move, msec: msec, option: scenario.option};
            t3.infos = {name: 'happy', target: chara, value: move, msec: msec, option: scenario.option};
            t4.infos = {name: 'happy', target: chara, value: move, msec: msec, option: scenario.option};
            t5.infos = {name: 'happy', target: chara, value: move, msec: msec, option: scenario.option};

            this.#tweens.push(t1);
            this.#tweens.push(t2);
            this.#tweens.push(t3);
            this.#tweens.push(t4);
            this.#tweens.push(t5);

            t1.start();
         });
    }

    /**
     * 上下にプルプル
     * @param {Chara} chara
     * @param scenario
     * @return {Promise<unknown>}
     */
    panic(chara, scenario) {
        console.log('panic',chara);
        chara.isWait = false;
        let msec = 133;
        if(!isNaN(scenario.msec) && scenario.msec > 0) msec = scenario.msec;
        if(msec === 0) msec = 1;
        console.log('panic msec', msec);
        let move = 25;
        if(!isNaN(scenario.value) && scenario.value !== 0) move = scenario.value;
        let base_y = chara.anime.y;
        move -= base_y;

        return new Promise((resolve)=>{
            this.reset(chara);
            const t1 = new TWEEN.Tween(chara.anime)
                .to({y: move },msec)
                .easing(TWEEN.Easing.Quartic.Out);
            const t2 = new TWEEN.Tween(chara.anime)
                .to({y: (move*-0.4) },msec*1.5)
                .easing(TWEEN.Easing.Quartic.Out);
            const t3 = new TWEEN.Tween(chara.anime)
                .to({y: 0 },msec*1.5)
                .easing(TWEEN.Easing.Quartic.In);
            const t4 = new TWEEN.Tween(chara.anime)
                .to({y: (move*0.8) },msec)
                .easing(TWEEN.Easing.Quartic.Out);
            const t5 = new TWEEN.Tween(chara.anime)
                .to({y: (move*-0.4) },msec*1.5)
                .easing(TWEEN.Easing.Quartic.Out);
            const t6 = new TWEEN.Tween(chara.anime)
                .to({y: (move*0.4) },msec*1.5)
                .easing(TWEEN.Easing.Quartic.Out);
            const t7 = new TWEEN.Tween(chara.anime)
                .to({y: 0 },msec)
                .onComplete(resolve);
            const t8 = new TWEEN.Tween(chara.anime)
                .to({y: 0 },msec*3)
                .onComplete(()=>{
                    if(!chara.isWait) this.panic(chara, scenario);
                });

            t7.chain(t8);
            t6.chain(t7);
            t5.chain(t6);
            t4.chain(t5);
            t3.chain(t4);
            t2.chain(t3);
            t1.chain(t2);

            t1.target = chara;
            t2.target = chara;
            t3.target = chara;
            t4.target = chara;
            t5.target = chara;
            t6.target = chara;
            t7.target = chara;
            t8.target = chara;

            t1.infos = {name: 'panic', target: chara, value: move, msec: msec, option: scenario.option};
            t2.infos = {name: 'panic', target: chara, value: move, msec: msec, option: scenario.option};
            t3.infos = {name: 'panic', target: chara, value: move, msec: msec, option: scenario.option};
            t4.infos = {name: 'panic', target: chara, value: move, msec: msec, option: scenario.option};
            t5.infos = {name: 'panic', target: chara, value: move, msec: msec, option: scenario.option};
            t6.infos = {name: 'panic', target: chara, value: move, msec: msec, option: scenario.option};
            t7.infos = {name: 'panic', target: chara, value: move, msec: msec, option: scenario.option};
            t8.infos = {name: 'panic', target: chara, value: move, msec: msec, option: scenario.option};

            this.#tweens.push(t1);
            this.#tweens.push(t2);
            this.#tweens.push(t3);
            this.#tweens.push(t4);
            this.#tweens.push(t5);
            this.#tweens.push(t6);
            this.#tweens.push(t7);
            this.#tweens.push(t8);

            t1.start();
        });
    }

    /**
     * 左右にぷるぷる
     * @param chara
     * @param scenario
     * @returns {Promise<unknown>}
     */
    puru(chara, scenario) {
        console.log('puru',chara);
        chara.isWait = false;
        let msec = 60;
        if(!isNaN(scenario.msec) && scenario.msec > 0) msec = scenario.msec;
        if(msec === 0) msec = 1;
        console.log('puru msec', msec);
        let move = 2;
        if(!isNaN(scenario.value) && scenario.value !== 0) move = scenario.value;
        return new Promise((resolve)=>{
            // this.reset(chara);
            chara.anime.x = 0;
            const t1 = new TWEEN.Tween(chara.anime)
                .to({x: move },msec)
                .easing(TWEEN.Easing.Quartic.Out);
            const t2 = new TWEEN.Tween(chara.anime)
                .to({x: (move*-1) },msec*2)
                .easing(TWEEN.Easing.Quartic.InOut);
            const t3 = new TWEEN.Tween(chara.anime)
                .to({x: 0 },msec)
                .easing(TWEEN.Easing.Quartic.In)
                .onComplete(resolve);

            t3.chain(t1);
            t2.chain(t3);
            t1.chain(t2);

            t1.target = chara;
            t2.target = chara;
            t3.target = chara;

            t1.infos = {name: 'puru', target: chara, value: move, msec: msec, option: scenario.option};
            t2.infos = {name: 'puru', target: chara, value: move, msec: msec, option: scenario.option};
            t3.infos = {name: 'puru', target: chara, value: move, msec: msec, option: scenario.option};


            this.#tweens.push(t1);
            this.#tweens.push(t2);
            this.#tweens.push(t3);



            t1.start();
        });
    }


    /**
     *
     * @param chara
     * @param scenario
     * @returns {Promise<unknown>}
     */
    angry(chara, scenario) {
        console.log('angry',chara);
        chara.isWait = false;
        let msec = 66.66;
        if(!isNaN(scenario.msec) && scenario.msec > 0) msec = scenario.msec;
        if(msec === 0) msec = 1;
        console.log('angry msec', msec);
        let move = 10;
        if(!isNaN(scenario.value) && (scenario.value !== 0)) move = scenario.value;
        let base_y = chara.anime.y;
        move -= base_y;

        return new Promise((resolve)=>{
            this.reset(chara);
            chara.anime.y = (move * -1) ;
            const t1 = new TWEEN.Tween(chara.anime)
                .to({x:(move * -0.1) , y: (move * -1) },msec);
            const t2 = new TWEEN.Tween(chara.anime)
                .to({x:(move * 0.1) , y: (move * -1) },msec)
                .onComplete(()=>{
                    // if(!chara.isWait) this.angry(chara, scenario);
                    resolve();
                });

            t1.chain(t2);
            if(!chara.isWait) t2.chain(t1);
            t1.target = chara;
            t2.target = chara;

            t1.infos = {name: 'angry', target: chara, value: move, msec: msec, option: scenario.option};
            t2.infos = {name: 'angry', target: chara, value: move, msec: msec, option: scenario.option};


            this.#tweens.push(t1);
            this.#tweens.push(t2);

            t1.start();
        });
    }

    /**
     *
     * @param chara
     * @param scenario
     * @param loop
     * @returns {Promise<unknown>}
     */
    down(chara, scenario, loop = false) {
        console.log('down',chara);
        chara.isWait = false;
        let msec = 733;
        if(!isNaN(scenario.msec) && scenario.msec > 0) msec = scenario.msec;
        if(msec === 0) msec = 1;
        console.log('down msec', msec);
        let move = -50;
        if(!isNaN(scenario.value) && scenario.value !== 0) move = scenario.value;
        let base_y = chara.anime.y;
        move -= base_y;

        return new Promise((resolve)=>{
            if(!loop) this.reset(chara);
            const t1 = new TWEEN.Tween(chara.anime)
                .to({y: move },msec)
                .easing(TWEEN.Easing.Quartic.Out);
            const t2 = new TWEEN.Tween(chara.anime)
                .to({x: (move*-0.0167) },msec*0.1);
            const t3 = new TWEEN.Tween(chara.anime)
                .to({x: (move*0.0167) },msec*0.1)
                .onComplete(()=>{
                    if(!chara.isWait) this.down(chara, scenario, true);
                    resolve();
                });
            t2.chain(t3);
            t1.chain(t2);

            t1.target = chara;
            t2.target = chara;
            t3.target = chara;

            t1.infos = {name: 'down', target: chara, value: move, msec: msec, option: scenario.option};
            t2.infos = {name: 'down', target: chara, value: move, msec: msec, option: scenario.option};
            t3.infos = {name: 'down', target: chara, value: move, msec: msec, option: scenario.option};

            this.#tweens.push(t1);
            this.#tweens.push(t2);
            this.#tweens.push(t3);

            if(loop){
                t2.start();
            }else{
                t1.start();
            }

        });
    }


    // アーカイブ再現
    /**
     * 跳ねるように少し前に出る
     * @param {Chara} chara
     * @param scenario
     * @return {Promise<unknown>}
     */
    serif(chara,scenario) {
        console.log('@-@ motion serif', chara);
        chara.isWait = true;
        let msec = 2;
        if(!isNaN(scenario.msec) && scenario.msec > 0) msec = scenario.msec;
        console.log('serif msec', msec);
        // this.reset(chara);
        return new Promise((resolve)=>{

            this.#toFront(chara, this.frameToMSec(msec)*3);
            const t1 = new TWEEN.Tween(chara.anime)
                .delay(this.frameToMSec(1))
                .to({y: -96 },this.frameToMSec(msec*1.5))
                .easing(TWEEN.Easing.Quartic.Out);
            const t2 = new TWEEN.Tween(chara.anime)
                .to({y: -20 },this.frameToMSec(msec))
                .easing(TWEEN.Easing.Quartic.In);
            const t3 = new TWEEN.Tween(chara.anime)
                .to({y: -80},this.frameToMSec(msec))
                .easing(TWEEN.Easing.Quartic.Out)
                .onComplete(()=>{
                    resolve();
                });
            t2.chain(t3);
            t1.chain(t2);

            this.#tweens.push(t1);
            this.#tweens.push(t2);
            this.#tweens.push(t3);
            console.log('@-@ start serif tween', t1, t2, t3);
            t1.start();
        });
    }

    #toFront(chara, msec){
        chara.before_y = chara.anime.y;
        const tween = new TWEEN.Tween(chara.anime.scale)
            .to({x: 1.1, y: 1.1},msec)
            .easing(TWEEN.Easing.Linear.None)
            .start();
        this.#tweens.push(tween);
        const tween2 = new TWEEN.Tween(chara)
            .to({zIndex:10},msec)
            .easing(TWEEN.Easing.Linear.None)
            .start();
        this.#tweens.push(tween2);

    }


    back(chara, scenario) {
        console.log('@-@ motion back', chara);
        let msec = this.frameToMSec(3);
        if(!isNaN(scenario.msec) && scenario.msec > 0) msec = scenario.msec;
        const tween = new TWEEN.Tween(chara.anime.scale)
            .to({x: 1.0, y: 1.0},msec)
            .easing(TWEEN.Easing.Linear.None)
            .onComplete(()=>{
                this.reset(chara);
                // chara.stage.sortChildren();
            })
            .start();
        this.#tweens.push(tween);
        const tween2 = new TWEEN.Tween(chara)
            .to({zIndex:0},msec)
            .easing(TWEEN.Easing.Linear.None)
            .start();
        this.#tweens.push(tween2);
        const tween3 = new TWEEN.Tween(chara.anime)
            .to({y: 0}, msec)
            .easing(TWEEN.Easing.Linear.None)
            .start();
        this.#tweens.push(tween3);
    }

    // wait(chara) {
    //     if(this.isWait === false){
    //         this.zIndex = 0;
    //         this.isWait = true;
    //         // this.scaleTo(chara, 100, 5).then(()=>{
    //         //     this.#filter.brightness(0.5, false);
    //         // });
    //     }
    //
    // }



    moveToX(object, value, msec, easing = "liner"){
        msec = Number(msec);
        console.log( 'move x to', value, msec);
        return new Promise((resolve)=>{
            const tween = new TWEEN.Tween(object)
                .to({x: Number(value)},msec)
                .easing(this.#easingList[easing])
                .onComplete(()=>{
                    resolve();
                })
                .start();
            tween.target = object;
            this.#tweens.push(tween);

        });
    }

    moveToY(object, value, msec, easing = "liner"){
        msec = Number(msec);
        console.log('move y to', value, msec);
        return new Promise((resolve)=>{
            const tween = new TWEEN.Tween(object)
                .to({y: Number(value)},msec)
                .easing(this.#easingList[easing])
                .onComplete(()=>{
                    resolve();
                })
                .start();
            tween.target = object;
            this.#tweens.push(tween);
        });
    }

    moveToZ(object, value, msec, easing = "liner"){
        msec = Number(msec);
        console.log('move z to', value, msec);
        return new Promise((resolve)=>{
            const tween = new TWEEN.Tween(object)
                .to({zIndex: Number(value)},msec)
                .easing(this.#easingList[easing])
                .onComplete(()=>{
                    resolve();
                })
                .start();
            tween.target = object;
            this.#tweens.push(tween);
        });
    }

    scaleTo(object, value, msec, easing = "liner") {
        msec = Number(msec);
        console.log( 'scale to', value, msec);
        return new Promise((resolve)=>{
            const tween = new TWEEN.Tween(object.scale)
                .to({x: value / 100, y: value / 100},msec)
                .easing(this.#easingList[easing])
                .onComplete(()=>{
                    resolve();
                })
                .start();
            tween.target = object;
            this.#tweens.push(tween);
        });
    }


    scaleToX(object, value, msec, easing = "liner") {
        msec = Number(msec);
        console.log( 'scale to', value, msec);
        return new Promise((resolve)=>{
            const tween = new TWEEN.Tween(object.scale)
                .to({x: value / 100},msec)
                .easing(this.#easingList[easing])
                .onComplete(()=>{
                    resolve();
                })
                .start();
            tween.target = object;
            this.#tweens.push(tween);
        });
    }



    scaleToY(object, value, msec, easing = "liner") {
        msec = Number(msec);
        console.log( 'scale to', value, msec);
        return new Promise((resolve)=>{
            const tween = new TWEEN.Tween(object.scale)
                .to({y: value / 100},msec)
                .easing(this.#easingList[easing])
                .onComplete(()=>{
                    resolve();
                })
                .start();
            tween.target = object;
            this.#tweens.push(tween);
        });
    }

    widthTo(object, value, msec, easing = "liner") {
        msec = Number(msec);
        console.log( 'width to', value, msec);
        return new Promise((resolve)=>{
            const tween = new TWEEN.Tween(object)
                .to({width: value},msec)
                .easing(this.#easingList[easing])
                .onComplete(()=>{
                    resolve();
                })
                .start();
            tween.target = object;
            this.#tweens.push(tween);
        });
    }

    heightTo(object, value, msec, easing = "liner") {
        msec = Number(msec);
        console.log( 'height to', value, msec);
        return new Promise((resolve)=>{
            const tween = new TWEEN.Tween(object)
                .to({height: value},msec)
                .easing(this.#easingList[easing])
                .onComplete(()=>{
                    resolve();
                })
                .start();
            tween.target = object;
            this.#tweens.push(tween);
        });
    }


    alphaTo(object, value, msec, easing = "liner") {
        if(!object) return new Promise((resolve)=> resolve());
        msec = Number(msec);
        // console.log( '@@@@@ alpha to',object?.name, object.alpha, Number(value) / 100, msec);
        let start = Date.now();
        return new Promise((resolve)=>{
            // console.log('alpha to start',object, value, msec);
            const tween = new TWEEN.Tween(object)
                .to({alpha: Number(value) / 100},msec)
                .easing(this.#easingList[easing])
                .onComplete(()=>{
                    // console.log('@@@@ alpha to complete', object, Date.now() - start, value, msec);
                    resolve();
                })
                .start();
            tween.target = object;
            this.#tweens.push(tween);
        }).catch((error)=>{
console.log(error);
        });
    }


    filterTo(updater, value, msec, easing = "liner") {
        msec = Number(msec ?? 0);
        // console.log( '@--@ filter to', value, msec, easing);
        return new Promise((resolve)=>{
            const tween = new TWEEN.Tween(updater)
                .to({param: Number(value)},msec)
                .easing(this.#easingList[easing])
                .onComplete(()=>{
                    resolve();
                })
                .start();
            tween.target = updater;
            this.#tweens.push(tween);
        });
    }


    blurTo(updater, value, msec, easing = "liner") {
        msec = Number(msec);
        console.log( 'blur to', value, msec, easing);
        return new Promise((resolve)=>{
            const tween = new TWEEN.Tween(updater)
                .to({blur: Number(value)},msec)
                .easing(this.#easingList[easing])
                .onComplete(()=>{
                    resolve();
                })
                .start();
            tween.target = updater;
            this.#tweens.push(tween);
        });
    }


    noiseTo(updater, value, msec, easing = "liner") {
        msec = Number(msec);
        console.log( 'blur to', value, msec, easing);
        return new Promise((resolve)=>{
            const tween = new TWEEN.Tween(updater)
                .to({noise: Number(value)},msec)
                .easing(this.#easingList[easing])
                .onComplete(()=>{
                    resolve();
                })
                .start();
            tween.target = updater;
            this.#tweens.push(tween);
        });
    }

}