'use strict';

import {Animator} from "./Animator.mjs";

export class Chara extends PIXI.Container {

    static CHARA_ANKER_X = 450;
    static CHARA_ANKER_Y = 96;


    #faceSet = [];
    #animator = new Animator();

    name;
    /** @var {Player} */
    player;

    #wear;
    #face = "face_default";

    base;
    anime;

    isWait = false;

    activeFilters = [];

    constructor(name, player) {
        super();
        this.name = name;
        this.player = player;

        this.pivot.x = Chara.CHARA_ANKER_X ;
        this.pivot.y = Chara.CHARA_ANKER_Y;
        // this.y = Chara.CHARA_ANKER_Y;

        this.base = new PIXI.Container();
        this.base.x = Chara.CHARA_ANKER_X;
        this.base.y = Chara.CHARA_ANKER_Y * 2;
        this.anime = new PIXI.Container();
        this.anime.name = "anime";

        this.anime.pivot.x = Chara.CHARA_ANKER_X ;
        // this.anime.x = Chara.CHARA_ANKER_X;
        this.anime.pivot.y = Chara.CHARA_ANKER_Y;
        // this.anime.y = Chara.CHARA_ANKER_Y;
        this.anime.addChild(this.base);
        this.addChild(this.anime);

        this.filters = [];

    }


    setFace(wear, face, sprite) {
        // console.log('set face', this.name, wear, face, sprite);
        sprite.name = this.name + "_"+wear+"_"+face;
        this.#faceSet[wear+"_"+face] = sprite;
        this.#faceSet[wear+"_"+face].alpha = 0;
        this.base.addChild(sprite);
    }

    resetFace() {
        // 顔を増やす時はEpisodeApiにも追加すること
        const face = this.#face.replace('_eye_close','')
            .replace('_eye_open','')
            .replace('_mouth_open','')
            .replace('_mouth_close','')
            .replace('_botheyes_close', '')
            .replace('_off','');
        if(this.#face === face || !this.#wear) return new Promise((resolve) => resolve());
        // console.log(this.#wear, face);
        return this.changeFace(this.#wear, face);
    }


    /**
     * 初期状態に戻します
     */
    stop(scenario) {
        // console.log(stop)
        this.#animator.stop(this);
    }


    happy(scenario) {
        this.isWait = false;
        // this.#animator.stop(this);
        return this.#animator.happy(this, scenario);
    }

    jump(scenario) {
        this.isWait = false;
        // this.#animator.stop(this);
        return this.#animator.jump(this, scenario);
    }

    panic(scenario) {
        this.isWait = false;
        // this.#animator.stop(this);
        // console.log(scenario);
        return this.#animator.panic(this, scenario);
    }

    puru(scenario) {
        this.isWait = false;
        // this.#animator.stop(this);
        // console.log(scenario);
        return this.#animator.puru(this, scenario);
    }

    angry(scenario) {
        this.isWait = false;
        // this.#animator.stop(this);
        return this.#animator.angry(this, scenario);
    }

    down(scenario) {
        this.isWait = false;
        // this.#animator.stop(this);
        return this.#animator.down(this, scenario);
    }


    // changeWear(wear) {
    //     if(wear === this.#wear) return new Promise((resolve)=>resolve());
    //     const before = this.#wear;
    //     console.log("wear change",this.name, before, this.#face, 'to', wear, this.#face);
    //     return this.#showSprite(wear, this.#face)
    //             .then(()=>{return this.#hideSprite(before, this.#face)});
    // }

    changeFace(wear, face) {
        // console.log('call changeFace', wear, face)
        if(wear === "") wear = this.#wear;
        if(face === "") face = this.#face;
        if(face === this.#face && wear === this.#wear) {
            // console.log("same wear and face");
            if(this.#faceSet[wear+"_"+face]) this.#faceSet[wear+"_"+face].alpha = 1;
            return new Promise((resolve) => resolve());
        }
        const before_wear = this.#wear;
        const before_face = this.#face;
        // console.log("face change",this.name, before_wear, before_face, 'to', wear, face);
        return this.#showSprite.bind(this)(wear, face)
                .then(()=>{
                    // console.log('hide');
                    return this.#hideSprite.bind(this)(before_wear, before_face)}
                );
    }

    #showSprite(wear, face){
        this.#wear = wear;
        this.#face = face;
        // console.log('showSprite', this.name+"_"+wear+"_"+face);
        // console.log(this.#faceSet[wear+"_"+face]?.name, 'show');
        return this.#animator.alphaTo(this.#faceSet[wear+"_"+face], 100, 250 );
    }

    #hideSprite(wear, face){
        // console.log('hideSprite', wear+"_"+face);
        // console.log(this.#faceSet[wear+"_"+face]?.name, 'hide');
        if(!this.#faceSet[wear+"_"+face]) {
            // console.log(this.#faceSet[wear+"_"+face]?.name, 'not found');
            return new Promise((resolve) => resolve());
        }
        return this.#animator.alphaTo(this.#faceSet[wear+"_"+face], 0, 250 ).then(()=>{this.#faceClean()});
    }

    #faceClean(){
        Object.values(this.#faceSet).forEach((chara)=>{
            // console.log(chara.name, chara.alpha);
        });
    }

}