'use strict';

export class Cursor {


    /** @var {Player} */
    player;

    #enableTap = true;

    #isActive = false;

    constructor(player) {
        this.player = player;
        // this.player.ui.cursorTapArea().addEventListener('click', (event)=>{
        //     event.preventDefault();
        //     console.log('tap');
        //     if(this.#enableTap) {
        //         this.onTap();
        //         this.disableTap();
        //     }else if(this.player.textWindow.isSpeaking()){
        //         this.player.textWindow.finishTextWrite();
        //         this.enableTap();
        //     }
        // });
        this.player.ui.textWindow().addEventListener('click', this.tap.bind(this));
    }

    active(bool){
        this.#isActive = Boolean(bool);
    }

    tap(event=null, fromVoice=false, scenario_index=null){
        // console.log('!!! tap');
        if(event) event.preventDefault();
        if(!this.#isActive) return;
        if(this.player.selectors.isAnimation) return;

        if(this.player.setting && this.player.setting.autoPlay && event) return;

        if(fromVoice){
            console.log('!!!⭐ from voice ',this.player.scenario_index , scenario_index);
            if(this.player.scenario_index !== scenario_index) return;

            let voice_finished = true;
            /** @var {Howl} sound */
            this.player.playing_voice.forEach((sound)=>{
                if(sound.playing() ) voice_finished = false;
            });
            if(!voice_finished) return;
        }

        console.log('⭐⭐⭐', this.player.textWindow.isSpeaking(), !fromVoice ,scenario_index === null, scenario_index === this.player.scenario_index, !this.player.setting.autoPlay);

        if(this.player.selectors.isSelecting()){
            // console.log('!!! choice');
            setTimeout(()=>{
                this.player.selectors.onClick.bind(this.player.selectors)();
            }, 300);
        }else if(this.player.textWindow.isSpeaking() && !fromVoice && (scenario_index === null || (scenario_index === this.player.scenario_index && !this.player.setting.autoPlay))){
            console.log('!!!!⭐ serif skip');
            this.player.textWindow.finishTextWrite();
            // this.player.speaker?.resetFace();
            // this.player.enableTap(true);
        }else if(this.#enableTap ) {
            console.log('!!!⭐⭐⭐⭐⭐⭐⭐⭐⭐ tap execute', scenario_index);
            if(scenario_index) this.player.finishFlags[scenario_index]['taped'] = true;
            this.onTap();
            this.disableTap();
        }
    }

    auto(){
        if(!this.#isActive) return;
        if(this.player.selectors.isAnimation) return;
        let voice_finished = true;
        /** @var {Howl} sound */
        this.player.playing_voice.forEach((sound)=>{
            if(sound.playing() ) voice_finished = false;
        });
        if(!voice_finished) return;
        if(this.player.textWindow.isSpeaking()) return;
        if(this.player.selectors.isSelecting()) {
            console.log('!!!⭐⭐⭐⭐⭐⭐ choice')
            // console.log('!!! choice');
            this.player.selectors.onClick.bind(this.player.selectors)();
        }else if(this.#enableTap ) {
            console.log('!!!⭐⭐⭐⭐⭐⭐ tap execute')
            this.onTap();
            this.disableTap();
        }

    }


    onTap(){ }

    enableTap(){
        console.log('tap enable')
        this.#enableTap = true;
        this.player.ui.textCursor().classList.remove("d-none");
    }

    disableTap(){
        // console.log('tap disable')
        this.#enableTap = false;
        this.player.ui.textCursor().classList.add("d-none");
    }


}