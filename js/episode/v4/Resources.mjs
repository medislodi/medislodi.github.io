'use strict';

import {Chara} from "./Chara.mjs";
import DiContainer from "/phalconia/js/DiContainer.mjs";
import {Image} from "./Image.mjs";

export class Resources {

    token = "";
    #list = [];
    #characters = [];
    #resources = [];
    #names = [];

    /** @var {Player} */
    #player;

    /** @var {_Application} */
    #pixi;

    /** @var {_Container} */
    #camera;

    /** @var {_Container} */
    #bg;

    /** @var {_Container} */
    #chara;

    /** @var {_Container} */
    #fg;

    #load_total = 0;
    #load_count = 0;
    #test_count = 0;
    #test_resource = {};

    /**
     *
     * @param {Player} player
     * @param {Array} resource_list
     */
    constructor(player) {
        this.#player = player;
        this.#pixi = player.app;

        this.#camera = new PIXI.Container();
        this.#camera.pivot.x= this.#player.width /2;
        this.#camera.pivot.y= this.#player.height /2;
        this.#camera.x = 0;
        this.#camera.y = 0;

        this.#bg = new PIXI.Container();
        this.#bg.zIndex = 1;
        this.#bg.x = this.#player.width/2;
        this.#bg.y = this.#player.height/2;

        this.#chara = new PIXI.Container();
        this.#chara.x = this.#player.width;
        this.#chara.y = this.#player.height/2;
        this.#chara.sortableChildren = true;

        this.#chara.zIndex = 10;
        this.#fg = new PIXI.Container();
        this.#fg.x = this.#player.width/2;
        this.#fg.y = this.#player.height/2;
        this.#fg.zIndex = 100;

        this.#camera.addChild(this.#bg);
        this.#camera.addChild(this.#chara);
        this.#camera.addChild(this.#fg);

        this.#pixi.stage.addChild(this.#camera);

        this.#resources[1] = this.#camera;
        this.#resources[2] = this.#player.textWindow;
    }


    /**
     * リソースリストを設定
     * @param resource_list
     */
    setResourceList(resource_list){
        this.#list = resource_list;
    }

    /**
     * リソースを取得
     * @param id
     * @return {Chara|PIXI.Sprite}
     */
    getResource(id){
        return this.#resources[id] ?? null;
    }


    /**
     * アセットをプリロードする
     * @return {Promise<unknown>}
     */
    preload(){
        // console.log('preload');
        let loaded = [];
        this.#load_total = Object.entries(this.#list).length;
        this.#load_count = 0;
        let promises = [];
		
		function _arrayBufferToBase64( buffer ) {
			var binary = '';
			var bytes = new Uint8Array( buffer );
			var len = bytes.byteLength;
			for (var i = 0; i < len; i++) {
				binary += String.fromCharCode( bytes[ i ] );
			}
			return window.btoa( binary );
		}
		
        for (const [id, resource_data] of Object.entries(this.#list)) {
            // console.log(id, resource_data);

            const url = _arrayBufferToBase64(dataresources[this.token+"/"+id]);

            resource_data.test_id = id;
            // this.#test_resource[id] = resource_data;

            loaded.push(url);
            switch (resource_data.category){
                case "chara":
                    promises.push(this.#createChara(url, resource_data));
                    break;
                case "mob":
                    promises.push(this.#createName(resource_data));
                    break;
                case "voice":
                case "se":
                    promises.push(this.#createSound(resource_data, url, false));
                    break;
                case "bgm":
                    promises.push(this.#createSound(resource_data, url, true));
                    break;
                case "color":
                    promises.push(this.#createRectangle(resource_data));
                    break;
                case "system":
                    break;
                default :
                    promises.push(this.#createImage(url, resource_data));
            }
            this.#test_count ++;
        }

        return Promise.all(promises);

    }


    /**
     * サウンドデータをロード＆作成
     * @param resource_data
     * @param url
     * @param loop
     * @returns {Promise<unknown>}
     */
    #createSound(resource_data, url, loop){
		url = 'data:music/mp3;base64,' + url
        return new Promise((resolve, reject)=>{
            const volume = resource_data.category === "bgm" ? 0.1 : 0.5;
            // console.log(resource_data.category, volume);
            this.#resources[resource_data.resource_id] = new Howl({
                src: url,
                format: "mp3",
                volume: volume,
                onload: ()=>{
                    // this.#test_resource[resource_data.test_id].loaded = true;
                    this.#updateLoadCount();

                    resolve();
                },
                onloaderror: (id, error)=>{
                    let formdata = new FormData();
                    formdata.append('error', error);
                    formdata.append('resource_data', JSON.stringify(resource_data));
                    console.error(resource_data)
                    reject(error);
                },
                loop: loop,
            });
            this.#resources[resource_data.resource_id].resource_id = resource_data.resource_id;
        });
    }

    /**
     * 矩形を生成してPromiseを返す
     * @param resource_data
     * @param color
     * @return {Promise<PIXI.Graphics>}
     */
    #createRectangle(resource_data){
        // console.log('create color', resource_data);
        return new Promise((resolve)=>{
            let rectangle = new PIXI.Graphics()
                .beginFill(resource_data.name)
                .drawRect(0,0, this.#player.width, this.#player.height)
                .endFill();
            let container = new PIXI.Container();
            container.addChild(rectangle);
            container.alpha = 0;
            container.x = container.y = 0;

            this.#resources[resource_data.resource_id] = container;
            this.#pixi.stage.addChild(container);
            // this.#test_resource[resource_data.test_id].loaded = true;
            this.#updateLoadCount();
            resolve();
        });
    }

    /**
     *
     * @param url
     * @param resource_data
     * @return {Promise<Chara>}
     */
    #createChara(url, resource_data){
		url = 'data:image/png;base64,' + url
        return PIXI.Texture.fromURL(url).then((texture)=>{
            return new Promise((resolve)=>{
                // console.log('loaded',resource_data.name, resource_data.wear, resource_data.face);
                if(!this.#characters[resource_data.name]){
                    this.#characters[resource_data.name] = new Chara(resource_data.name, this.#player);
                    // this.#characters[resource_data.name].alpha = 0;
                    this.#chara.addChild(this.#characters[resource_data.name]);
                }
                this.#characters[resource_data.name].setFace(resource_data.wear, resource_data.face, new PIXI.Sprite(texture));
                this.#names[resource_data.resource_id] = resource_data.name;
                this.#resources[resource_data.resource_id] = this.#characters[resource_data.name];
                // this.#test_resource[resource_data.test_id].loaded = true;
                this.#updateLoadCount();
                resolve();
            });
        }).catch((error)=>{
            console.log({error:error, resource_data:resource_data});
        });

    }

    #createName(resource_data){
        return new Promise((resolve)=>{
            // console.log('create name', resource_data);
            // this.#test_resource[resource_data.test_id].loaded = true;
            this.#updateLoadCount();
            this.#names[resource_data.resource_id] = resource_data.name;
            resolve();
        });

    }


    /**
     *
     * @param resource_id
     * @returns {String|null}
     */
    getName(resource_id){
        // console.log(resource_id, this.#names);
        return this.#names[resource_id] ?? null;
    }

    getChara(name) {
        return this.#characters[name] ?? null;
    }


    /**
     *
     * @param url
     * @param resource_data
     * @return {Promise<PIXI.Sprite>}
     */
    #createImage(url, resource_data){
		url = 'data:image/png;base64,' + url
        return PIXI.Texture.fromURL(url).then((texture)=> {
            return new Promise((resolve) => {
                let image = new PIXI.Sprite(texture);
                image.anchor.set(0.5);
                image.x = this.#player.width /2;
                image.y = this.#player.height - (image.height/2);
                // console.log(image.x, image.y);

                let container = new Image();
                container.addChild(image);
                container.alpha = 0;
                container.x = container.y = 0;
                container.filters = [];
                if(resource_data.type === "background"){
                    this.#bg.addChild(container);
                }else{
                    this.#fg.addChild(container);
                }
                this.#resources[resource_data.resource_id] = container;
                // this.#test_resource[resource_data.test_id].loaded = true;
                this.#updateLoadCount();

                resolve();
            })
        });

    }


    /**
     *
     */
    #updateLoadCount(){
        this.#load_count++;
        // console.log('#', this.#load_count , this.#load_total, this.#test_count);
        this.#player.ui.loadingProgress().value = Math.floor(this.#load_count / this.#load_total * 100);
        // console.log('#', Object.values( this.#test_resource).filter(resource => !resource.loaded));
    }


}