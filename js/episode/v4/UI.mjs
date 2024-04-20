'use strict';

export class UI {

    /** @type {HTMLElement | null} */
    adv(){
        return document.getElementById("adv");
    }

    /** @type {HTMLElement | null} */
    ui(){
        return document.getElementById("ui");
    }

    /** @type {HTMLElement | null} */
    cursorTapArea(){
        return document.getElementById("cursor-tap-area");
    }

    /** @type {HTMLElement | null} */
    loadingOverLay(){
        return document.getElementsByClassName('loading-overlay')[0];
    }

    /** @type {HTMLElement | null} */
    loadingProgress(){
        return document.getElementById("loading-progress");
    }

    /** @type {HTMLElement | null} */
    fps(){
        return document.getElementById("fps");
    }

    /** @type {HTMLElement | null} */
    textWindow(){
        return document.getElementById("text-window");
    }

    /** @type {HTMLElement | null} */
    toast(){
        return document.getElementById("toast");
    }

    /** @type {HTMLElement | null} */
    textWindowName(){
        return document.getElementById("text-window-name");
    }

    /** @type {HTMLElement | null} */
    textWindowBody(){
        return document.getElementById("text-window-body");
    }

    /** @type {HTMLElement | null} */
    textCursor(){
        return document.getElementById("text-cursor");
    }



    /** @type {HTMLElement | null} */
    selectors(){
        return document.getElementById("selectors");
    }

    /** @type {HTMLElement | null} */
    select1(){
        return document.getElementById("select1");
    }

    /** @type {HTMLElement | null} */
    select2(){
        return document.getElementById("select2");
    }

    /** @type {HTMLElement | null} */
    select3(){
        return document.getElementById("select3");
    }

    /** @type {HTMLElement | null} */
    select1_value(){
        return document.getElementById("select1-value");
    }

    /** @type {HTMLElement | null} */
    select2_value(){
        return document.getElementById("select2-value");
    }

    /** @type {HTMLElement | null} */
    select3_value(){
        return document.getElementById("select3-value");
    }

    /** @type {HTMLElement | null} */
    selectorsOverlay(){
        return document.getElementById("selectors-overlay");
    }




}