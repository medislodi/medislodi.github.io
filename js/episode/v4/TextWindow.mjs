'use strict';

export class TextWindow {

    /** @type {Player} */
    player;

    #index = 0;
    #text = "";
    #interval;
    #intervalMSec = 100;

    resolve;

    constructor(player) {
        this.player = player;
    }



    setSpeed(speed){
        this.#intervalMSec = 300 - speed;
    }


    set alpha(value){
        this.player.ui.textWindow().style.opacity = String(value);
    }

    get alpha(){
        return this.player.ui.textWindow().style.opacity;
    }


    /**
     *
     * @param name
     * @param text
     */
    set(name, text){
        this.player.ui.textWindowName().innerHTML = name ?? "";
        // ログ
        let clone = document.getElementById("log-serif-template").content.cloneNode(true);

        if(name === null || name === ""){
            this.player.ui.textWindowName().classList.add("dp-n");
            clone.querySelectorAll('.log-name')[0].remove();
            clone.querySelectorAll(".log-hr")[0].remove();
        }else{
            this.player.ui.textWindowName().classList.remove("dp-n");
            clone.querySelectorAll('.log-name')[0].innerText = name;
        }

        if(text !== ""){
            clone.querySelectorAll('.log-body')[0].innerHTML = text;
            const obj = document.getElementById("log-ul");
            obj.appendChild(clone);
            obj.scrollTop = obj.scrollHeight;
            return new Promise((resolve)=>{
                this.resolve = resolve;
                this.startTextWrite.bind(this)(text, 0, resolve);
            });
        }else{
            return Promise.resolve();
        }
    }

    changeSpeed(interval){
        clearInterval(this.#interval);
        this.startTextWrite(this.#text, this.#index);
    }

    clear(){
        this.player.ui.textWindowName().innerHTML = "";
        this.player.ui.textWindowBody().innerHTML = "";
    }

    isSpeaking(){
        return this.#index > 2 && this.#interval !== null;
    }

    startTextWrite(text, index = 0, resolve = null){
        clearInterval(this.#interval);
        this.player.ui.textWindowBody().innerHTML = "";
        this.#index = index;
        this.#text = text;
        this.resolve = resolve;
        this.#interval = setInterval(()=>{
            this.player.ui.textWindowBody().innerHTML = this.#text.substring(0, this.#index);
            this.#index ++;
            if(this.#text.substring(this.#index, this.#index + 4) === "<br>") this.#index += 4;
            // console.log('!!! text write', this.player.ui.textWindowBody().innerHTML);
            if(this.#text.length < this.#index) {
                this.finishTextWrite();
            }
        }, this.#intervalMSec);
    }

    finishTextWrite(){
        // console.log('⭐⭐ text finish');
        this.#index = 0;
        this.player.ui.textWindowBody().innerHTML = this.#text;
        clearInterval(this.#interval);
        this.#interval = null;
        if(this.resolve !== null) {
            console.log('⭐⭐ text finish resolve');
            this.resolve();
            this.resolve = null;
        }
    }


}