'use strict';

class DiContainer {

    constructor() {
        this.container = [];
    }

    /**
     * DIContainerにセット
     * Promise だった場合はloadCheck対象に
     * @param key
     * @param value
     * @param force
     */
    set(key, value, force){
        if(this.exist(key) && !force) return;
        this.container[key] = value;
        if( typeof value?.then !== 'undefined' ){
            value.then(()=>{
                document.dispatchEvent(new CustomEvent('loaded', {detail: key}));
            });
        }
    }

    /**
     * Classを新規ロード
     * @param className
     * @param directory
     * @returns {*}
     */
    loadClass(className, directory='./'){
        const key = `${className}:::load`;
        if(!this.exist(key)){
            let promise = new Promise((resolve, reject)=> {
                if(this.exist('LoadEffect')) this.get('LoadEffect').set(key);
                import(`${directory}/${className}.mjs`)
                    .then((moduleClass) => {
                        this.setClass(className, moduleClass[className]);
                        resolve();
                    }).catch((error)=>{
                        console.error(`${className} load failed`)
                        console.error(error);
                        reject();
                    }).finally(()=>{
                        if(this.exist('LoadEffect')) this.get('LoadEffect').finish(key);
                    });
            });
            this.set(key, promise);
        }
        return this.get(key);
    }

    /**
     * コンテナにClassを設定
     * @param key
     * @param value
     */
    setClass(key, value){
        if(this.exist(key)) return;
        this.container[`${key}::class`] = value;
    }

    /**
     * コンテナからClassを取得
     * @param key
     * @returns {*}
     */
    getClass(key){
        return this.container[`${key}::class`];
    }

    /**
     * コンテナからインスタンスを取得
     * @param key
     * @returns {*}
     */
    get(key) {
        return this.container[key];
    }

    /**
     * コンテナにインスタンスが存在するか
     * @param key
     * @returns {boolean}
     */
    exist(key){
        return !!this.container[key];
    }
}

export default new DiContainer();
