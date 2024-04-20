'use strict';

export class Setting {

    /** @var {Player} */
    player;

    #autoContinue = false;
    #autoPlay = false;
    #ui = true;
    #voice = true;
    #bgm = true;
    #se = true;
    #mute = false;
    #volume = 0.5;
    #serifSpeed = 100;
    #logVisible = false

    constructor(player) {
        // localStorage.clear();
        console.log(localStorage.getItem('autoContinue'),localStorage.getItem('autoPlay'))
        this.player = player;
        this.autoContinue = (localStorage.getItem('autoContinue') ?? true);
        this.autoPlay = (localStorage.getItem('autoPlay') ?? false);
        this.ui = (localStorage.getItem('ui') ?? true);
        this.voice = (localStorage.getItem('voice') ?? true);
        this.bgm = (localStorage.getItem('bgm') ?? true);
        this.se = (localStorage.getItem('se') ?? true);
        this.mute = (localStorage.getItem('mute') ?? false);
        this.volume = Number(localStorage.getItem('volume') ?? 0.5);
        this.serifSpeed = Number(localStorage.getItem('serifSpeed') ?? 170);
        this.logVisible = (localStorage.getItem('logVisible') ?? false);


        document.getElementById("auto-continue").addEventListener('change', (event)=>{
            event.preventDefault();
            console.log(event.target.checked);
            this.autoContinue = event.target.checked;
        });
        document.getElementById("auto-play").addEventListener('change', (event)=>{
            event.preventDefault();
            this.autoPlay = event.target.checked;
        });
        document.getElementById("visible-ui").addEventListener('change', (event)=>{
            event.preventDefault();
            this.ui = event.target.checked;
        });
        document.getElementById("voice-play").addEventListener('change', (event)=>{
            event.preventDefault();
            this.voice = event.target.checked;
        });
        document.getElementById("bgm-play").addEventListener('change', (event)=>{
            event.preventDefault();
            this.bgm = event.target.checked;
        });
        document.getElementById("se-play").addEventListener('change', (event)=>{
            event.preventDefault();
            this.se = event.target.checked;
        });
        document.getElementById("mute").addEventListener('change', (event)=>{
            event.preventDefault();
            this.mute = event.target.checked;
        });
        document.getElementById("volume").addEventListener('input', (event)=>{
            event.preventDefault();
            this.volume = Number(event.target.value);
        });
        document.getElementById("serif-speed").addEventListener('input', (event)=>{
            event.preventDefault();
            this.serifSpeed = Number(event.target.value);
        });
        document.getElementById("log-checkbox").addEventListener('change', (event)=>{
            event.preventDefault();
            this.logVisible = event.target.checked;
            this.ui = !event.target.checked;
        });
    }

    get autoContinue(){
        return this.#autoContinue;
    }

    get autoPlay(){
        return this.#autoPlay;
    }

    get ui(){
        return this.#ui;
    }

    get voice(){
        return this.#voice;
    }

    get bgm(){
        return this.#bgm;
    }

    get se(){
        return this.#se;
    }

    get mute(){
        return this.#mute;
    }

    get volume(){
        return this.#volume;
    }

    get serifSpeed(){
        return this.#serifSpeed;
    }


    set autoPlay(value){

        this.#autoPlay = typeof value === "string" ? value === "true" : value;
        localStorage.setItem('autoPlay', this.#autoPlay ? 'true' : 'false');
        document.getElementById("auto-play").checked = this.#autoPlay;
        console.log("set autoPlay", this.#autoPlay);
        if(this.#autoPlay){
            this.player.cursor.auto();
            document.getElementById("auto-play-stop-btn").classList.add("d-none");
            document.getElementById("auto-play-btn").classList.remove("d-none");
        }else{
            document.getElementById("auto-play-stop-btn").classList.remove("d-none");
            document.getElementById("auto-play-btn").classList.add("d-none");
        }

    }

    set autoContinue(value){
        this.#autoContinue = typeof value === "string" ? value === "true" : value;
        console.log("set autoContinue", value, this.#autoContinue);
        localStorage.setItem('autoContinue', this.#autoContinue ? 'true' : 'false');
        document.getElementById("auto-continue").checked = this.#autoContinue;
    }

    set ui(value){
        console.log("set ui", value);
        this.#ui = typeof value === "string" ? value === "true" : value;
        localStorage.setItem('ui', this.#ui ? 'true' : 'false');
        document.getElementById("visible-ui").checked = this.#ui;
        document.getElementById("ui").style.opacity = this.#ui ? "1" : "0";
        if(document.getElementById("log-checkbox").checked && this.#ui ){
            document.getElementById("log-checkbox").checked = false;
        }
    }

    set voice(value){
        console.log("set autoPlay", value);
        this.#voice = typeof value === "string" ? value === "true" : value;
        localStorage.setItem('voice', this.#voice ? 'true' : 'false');
        document.getElementById("voice-play").checked = this.#voice;
        this.player.playing_voice.forEach((voice)=>{
            voice.mute(!this.#voice);
        });
    }

    set bgm(value){
        console.log("set bgm", value);
        this.#bgm = typeof value === "string" ? value === "true" : value;
        localStorage.setItem('bgm', this.#bgm ? 'true' : 'false');
        document.getElementById("bgm-play").checked = this.#bgm;
        if(this.player.playing_bgm) this.player.playing_bgm.mute(!this.#bgm);
    }

    set se(value){
        console.log("set se", value);
        this.#se = typeof value === "string" ? value === "true" : value;
        localStorage.setItem('se', this.#se ? 'true' : 'false');
        document.getElementById("se-play").checked = this.#se;
        this.player.playing_se.forEach((se)=>{
            se.mute(!this.#se);
        });
    }

    set mute(value){
        console.log("set mute", value);
        this.#mute = typeof value === "string" ? value === "true" : value;
        localStorage.setItem('mute', this.#mute ? 'true' : 'false');
        document.getElementById("mute").checked = this.#mute;
        Howler.mute(this.#mute);
    }

    set volume(value){
        if(typeof value !== 'number') value = 0.5;
        if(value < 0) value = 0;
        if(value > 1) value = 1;
        this.#volume = value;
        console.log("set volume", this.#volume);
        localStorage.setItem('volume', String(this.#volume));
        document.getElementById("volume").value = value;
        Howler.volume(this.#volume);
    }

    set serifSpeed(value){
        console.log("set serifSpeed", value);
        if(typeof value !== 'number') value = 100;
        if(value < 10) value = 10;
        if(value > 290) value = 290;
        this.#serifSpeed = value;
        localStorage.setItem('serifSpeed', String(this.#serifSpeed));
        document.getElementById("serif-speed").value = value;
        this.player.textWindow.setSpeed(this.#serifSpeed);
    }

    set logVisible(value){
        console.log("set logVisible", value);
        this.#logVisible = typeof value === "string" ? value === "true" : value;
        localStorage.setItem('logVisible', this.#logVisible ? 'true' : 'false');
        document.getElementById("log-checkbox").checked = this.#logVisible;
    }


}