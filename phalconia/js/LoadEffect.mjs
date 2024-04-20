'use strict';

import {TagController} from "./TagController.mjs";

export class LoadEffect extends TagController {

    #loadingList = [];

    constructor(di, size = "3%", fill_class='') {

        const html =`
<div id="load_effect" class="flex-center overlay layer-10_loading" data-component="LoadEffect">
    <svg class="spinner ${fill_class}" width="${size}" height="${size}" style="fill: white">
        <use xlink:href="/phalconia/image/svg/spinner.svg#spinner"></use>
    </svg>
</div>
`;
        document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',html);
        const element = document.getElementById("load_effect");
        super(element);
        di.get('StyleSheet').attachElement(element);
    }

    set(name){
        // console.log(`[LoadEffect] start ${name}`);
        this.#loadingList[name] = true;
        this.show();
    }

    finish(name){
        // console.log(`[LoadEffect] finish ${name}`);
        this.#loadingList[name] = false;
        this.check();
    }

    check(){
        let count = 0;
        Object.entries(this.#loadingList).forEach(([index,value])=>{
            if(value) count++;
        });
        // console.log(`[LoadEffect] count ${count}`);
        if(count === 0) {
            this.#loadingList = [];
            // console.log(`[LoadEffect] hide`);
            this.fadeout();
        }
    }

    show(e){
        clearInterval(this.intervalID);
        this.element.style.opacity = 1;
        this.element.style.display = "flex";
    }

    fadeout(){
        let op = this.element.style.opacity;
        this.intervalID = setInterval(()=>{
            op = Number(op)
            this.element.style.opacity /= 2;
            if(this.element.style.opacity <= 0.1){
                clearInterval(this.intervalID);
                this.element.style.display = "none";
            }
        },100);
    }

}