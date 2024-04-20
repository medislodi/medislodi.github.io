'use strict';

import DiContainer from "/phalconia/js/DiContainer.mjs";
import {Form} from "../../../phalconia/js/component/Form.mjs";
import {StoryLine} from "../../StoryLine.mjs";

export class Selectors {

    /** @type {Player} */
    #player;

    #enableSelect=false;
    isAnimation = false;

    #jumpTo1;
    #jumpTo2;
    #jumpTo3;

    #group_id;

    #hasBranch = false;

    constructor(player) {
        this.#player = player;
        this.#player.ui.select1().addEventListener('click', this.onClick.bind(this));
        this.#player.ui.select2().addEventListener('click', this.onClick.bind(this));
        this.#player.ui.select3().addEventListener('click', this.onClick.bind(this));
        this.reset();
    }

    isSelecting(){
        return this.#enableSelect;
    }

    onClick(event=null, selected = 1){
        if(event) {
            event.preventDefault();
            selected = Number(event.target.dataset.number);
        }
        if( !this.#enableSelect ) return;
        this.#enableSelect = false;
        this.isAnimation = true;

        if(selected !== 1) this.#player.ui.select1().classList.remove('show');
        if(selected !== 2) this.#player.ui.select2().classList.remove('show');
        if(selected !== 3) this.#player.ui.select3().classList.remove('show');

        // this.#player.ui.select1().disabled = true;
        let jumpTo = null;
        let log = null;
        if(selected === 1) {
            this.#player.ui.select1().classList.add('select');
            jumpTo = this.#jumpTo1;
            log = this.#player.ui.select1().innerText;
        }
        if(selected === 2) {
            this.#player.ui.select2().classList.add('select');
            jumpTo = this.#jumpTo2;
            log = this.#player.ui.select2().innerText;
        }
        if(selected === 3) {
            this.#player.ui.select3().classList.add('select');
            jumpTo = this.#jumpTo3;
            log = this.#player.ui.select3().innerText;
        }

        // ログ
        let clone = document.getElementById("log-choice-template").content.cloneNode(true);
        clone.querySelectorAll('.log-body')[0].innerHTML = log;
        clone.firstElementChild.classList.add(`select${selected}`);
        const obj = document.getElementById("log-ul");
        obj.appendChild(clone);
        obj.scrollTop = obj.scrollHeight;

        this.isAnimation = true;
        this.select(selected)
            .then(()=>{
                this.hide().then(()=>{
                    console.log('jump to ', jumpTo);
                    this.#player.scenario_index = jumpTo;
                    this.isAnimation = false;
                    this.#player.next.bind(this.#player)();
                });
            })
    }


    reset() {
        this.#jumpTo1 = null;
        this.#jumpTo2 = null;
        this.#jumpTo3 = null;
        this.#player.ui.select1().classList.remove('show');
        this.#player.ui.select2().classList.remove('show');
        this.#player.ui.select3().classList.remove('show');
        this.#player.ui.selectorsOverlay().classList.remove('show');
        this.#player.ui.select1().classList.remove('select');
        this.#player.ui.select2().classList.remove('select');
        this.#player.ui.select3().classList.remove('select');
        this.#player.ui.select1().classList.add('dp-n');
        this.#player.ui.select2().classList.add('dp-n');
        this.#player.ui.select3().classList.add('dp-n');
        this.#player.ui.selectorsOverlay().classList.add('dp-n');
        this.isAnimation = false;
    }

    hide() {
        this.#jumpTo1 = null;
        this.#jumpTo2 = null;
        this.#jumpTo3 = null;
        return new Promise(resolve => {
            this.isAnimation = true;
            this.#player.ui.select1().classList.remove('show');
            this.#player.ui.select2().classList.remove('show');
            this.#player.ui.select3().classList.remove('show');
            this.#player.ui.selectorsOverlay().classList.remove('show');
            setTimeout(()=>{
                this.#player.ui.select1().classList.remove('select');
                this.#player.ui.select2().classList.remove('select');
                this.#player.ui.select3().classList.remove('select');
                this.#player.ui.select1().classList.add('dp-n');
                this.#player.ui.select2().classList.add('dp-n');
                this.#player.ui.select3().classList.add('dp-n');
                this.#player.ui.selectorsOverlay().classList.add('dp-n');
                this.#player.ui.textWindow().classList.remove('dp-n');
                // this.#player.ui.textCursor().classList.remove('dp-n');
                this.isAnimation = false;
                resolve();
            }, 1200);
        });

    }

    show(){
        // 分岐ストーリー対応
        let data = new FormData();
        data.append('adventure_id', this.#player.id);
        data.append('stage', this.#player.stage);
        data.append('group_id', this.#group_id);

        this.#player.ui.selectorsOverlay().classList.remove('dp-n');
        this.#player.ui.textWindow().classList.add('dp-n');

		const json = JSON.parse('{"status":true,"contents":[],"message":""}');

		console.log(json);
		for (const [key, value] of Object.entries(json.contents)) {
			console.log(key, value);
			switch(key){
				case 1:
					this.#player.ui.select1().style('border-color', value);
					this.#player.ui.select1().querySelector('::after').style('background-color', value);
					break;
				case 2:
					this.#player.ui.select2().style('border-color', value);
					this.#player.ui.select2().querySelector('::after').style('background-color', value);
					break;
				case 3:
					this.#player.ui.select3().style('border-color', value);
					this.#player.ui.select3().querySelector('::after').style('background-color', value);
					break;
			}
		};
    }


    select(number) {
        if(this.#player.id === "test") return new Promise(resolve => resolve({}))
        let data = new FormData();
        data.append('adventure_id', this.#player.id);
        data.append('stage', this.#player.stage);
        data.append('group_id', this.#group_id);
        data.append('select_num', number);
        /** @type {LeaderLine} */
        let line = DiContainer.get(`story-line-${this.#player.stage}-${this.#group_id}-${number}`);
        if(line) {
            line.color = line.trueColor;
            StoryLine.updateSvg(window.scrollY);
        }

		async function returnJson() {
			const json = '{"status":true,"contents":{"goto_stage":null},"message":""}';
			return json;
		}

        return returnJson().then((json)=>{
            console.log(json);
        });
    }


    set(number, text, jump_to, group_id) {
        this.#group_id = group_id;
        // console.log(number, text, jump_to)
        let element = null;
        switch (Number(number)){
            case 2:
                element = this.#player.ui.select2();
                this.#jumpTo2 = jump_to;
                break;
            case 3:
                element = this.#player.ui.select3();
                this.#jumpTo3 = jump_to;
                break;
            case 1:
            default :
                element = this.#player.ui.select1();
                this.#jumpTo1 = jump_to;
                break;
        }

        // console.log("tap1", this)

        element.innerHTML = "";

        let div = document.createElement('div');
        div.innerText = text;
        div.style.fontSize = 'min(2vh, 3vw)';
        div.style.pointerEvents = 'none';
        element.appendChild(div);

        // 文字数がオーバーしていたらリサイズ
        div.style.transform = `scale(1, 1)`;
        let maxLength = 19;

        const scale = maxLength / text.length + 0.1;
        // console.log('scale', div);
        if(maxLength <= text.length) {
            div.style.transform = `scale(${scale}, 1)`;
        }


        element.classList.remove('dp-n');
        setTimeout(()=> element.classList.add('show'), 1);

        this.show();
        // this.#player.ui.selectorsOverlay().classList.remove('dp-n');
        setTimeout(()=> this.#enableSelect = true, 10);

    }

}