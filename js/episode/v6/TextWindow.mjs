'use strict';

export class TextWindow {

    /** @type {Player} */
    player;

    #index = 0;
    #text = "";
    #interval;
    #intervalMSec = 100;

    playing_voice = null;

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
     * @param voice_id
     */
    set(name, text, voice_id = 0){
        this.player.ui.textWindowName().innerHTML = name ?? "";
        // ログ
        let clone = document.getElementById("log-serif-template").content.cloneNode(true);
        clone.querySelector("li").id = "log-serif-" + this.player.scenario_index;

        if(name === null || name === ""){
            this.player.ui.textWindowName().classList.add("dp-n");
            clone.querySelector('.log-name').remove();
            clone.querySelector(".log-hr").remove();
        }else{
            this.player.ui.textWindowName().classList.remove("dp-n");
            clone.querySelector('.log-name').innerText = name;
        }

        this.addReplayVoiceBtn(clone, [voice_id]);

        if(clone.querySelector('.prev-btn')){
            const target_id = this.player.scenario_index;
            clone.querySelector('.prev-btn').addEventListener('click', ()=>{
                console.log('-------prev', target_id);
                this.player.prev(target_id);
            });
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


    addReplayVoiceBtn(clone, voice_ids, after = false){
        if(clone === null) return;
        if(after){
            clone.querySelector('.log-voice').classList.remove("dp-n");
            clone.querySelector('.log-voice-disabled').classList.remove("dp-n");
        }
        if(clone.querySelector('.log-voice')) {
            if (voice_ids[0] === 0) {
                console.log('@@@@ voice_id = 0')
                clone.querySelector('.log-voice').classList.add("dp-n");
                clone.querySelector('.log-voice-disabled').classList.add("dp-n");
            } else {
                let div = clone.querySelector('.voice-btns');
                console.log('@@@@ voice_id > 0 autoPlay or playing_voice')
                div.style.cursor = "initial";
                clone.querySelector('.log-voice').classList.add("d-none");
                clone.querySelector('.log-voice-disabled').classList.remove("d-none");

                div.addEventListener('click', () => {
                    console.log('@@@@ voice replay click',!this.player.setting.autoPlay, !this.player.isPlayingVoice(), voice_ids)
                    if(!this.player.setting.autoPlay && !this.player.isPlayingVoice()) {

                        voice_ids.forEach(voice_id => {
                            /** @var {Howl} voice */
                            const voice = this.player.getResource(voice_id);
                            // ボイスが見つからない または再生中なら再生しない
                            if (voice !== null && !voice.playing(voice.id)) {
                                this.player.ui.disableVoiceReplay();
                                this.player.playing_voice.push(voice);
                                voice.mute(!this.player.setting.voice);
                                voice.on('end', () => {
                                    if (!this.player.isPlayingVoice()) this.player.ui.enableVoiceReplay();
                                });
                                voice.play();
                            }
                        });
                    }
                });
            }
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


    clearLog(){
        document.getElementById("log-ul").innerHTML = "";
    }

    isSpeaking(){
        return this.#index > 2 && this.#interval !== null;
    }

    startTextWrite(text, index = 0, resolve = null){
        clearInterval(this.#interval);
        if(this.player.isSkip){
            this.#text = text;
            this.finishTextWrite();
        }else {
            const interval = this.player.isSkip ? 0 : this.#intervalMSec;
            this.player.ui.textWindowBody().innerHTML = "";
            this.#index = index;
            this.#text = text;
            this.resolve = resolve;
            this.#interval = setInterval(() => {
                this.player.ui.textWindowBody().innerHTML = this.#text.substring(0, this.#index);
                this.#index++;
                if (this.#text.substring(this.#index, this.#index + 4) === "<br>") this.#index += 4;
                // console.log('!!! text write', this.player.ui.textWindowBody().innerHTML);
                if (this.#text.length < this.#index) {
                    this.finishTextWrite();
                }
            }, interval);
        }
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