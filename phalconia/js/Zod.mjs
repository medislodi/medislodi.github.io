'use strict';

import DiContainer from "./DiContainer.mjs";

export class Zod {

    css = true;
    script_directory;
    /** @var {DiContainer} */
    di;

    constructor(script_directory) {
        this.di = DiContainer;
        this.script_directory = script_directory;
        DiContainer.set('Zod', this);
    }

    /**
     * 処理の開始
     * @returns {Promise<unknown>}
     */
    start(){
         return Promise.resolve()
             // StyleSheet クラス初期化
             .then(this.di.loadClass.bind(this.di, 'StyleSheet', '/phalconia/js'))
             .then(()=>{
                 return new Promise((resolve) => {
                     const style_sheet_class = this.di.getClass('StyleSheet');
                     const style_sheet = new style_sheet_class();
                     style_sheet.zod = this;
                     this.di.set('StyleSheet', style_sheet);
                     if(this.css){
                         this.di.get('StyleSheet').attachAll();// css 自動生成
                     }else{
                         this.di.get('StyleSheet').attach('d-none_im');// 機能OFF時でも、最低限のclassを生成
                     }
                     resolve();
                 })
             })
             // Loading クラス初期化
             .then(this.di.loadClass.bind(this.di, 'LoadEffect', '/phalconia/js'))
             .then(()=>{
                 const load_effect_class = this.di.getClass('LoadEffect');
                 const load_effect = new load_effect_class(this.di);
                 load_effect.zod = this;
                 load_effect.di = this.di;
                 this.di.set('LoadEffect', load_effect);
             })
             // Net クラス初期化
             .then(this.di.loadClass.bind(this.di, 'Net', '/phalconia/js'))
             .then(()=>{
                 const net_class = this.di.getClass('Net');
                 const net = new net_class();
                 net.zod = this;
                 net.di = this.di;
                 this.di.set('Net', net);
             })
             .then(this.init.bind(this,document.querySelectorAll('*')))
             .then(()=>{
                 this.di.get('StyleSheet').insertRule(`body::before { opacity: 0; }`);
                 setTimeout(()=>{
                     this.di.get('StyleSheet').insertRule(`body::before { content: none; }`);
                 },1000);

             })
             .catch((error)=>{
                 console.error(error);
             });
    }

    /**
     *
     * @param elements
     * @returns {Promise<Awaited<unknown>[]>}
     */
    init(elements){
        let promises = [];
        Array.from(elements).forEach( (e)=>{
            e.classList.forEach((class_name)=>{
                if(this.isCamelCase(class_name)){
                    const directory = (e.getAttribute('zod')!==null ? '/phalconia/js/component' : null) ?? this.script_directory;
                    this.di.loadClass(class_name, directory)
                        .then(()=>{
                            // クラスのインスタンス生成
                            const module_class = new (this.di.getClass(class_name))(e);
                            module_class.zod = this;
                            module_class.di = this.di;
                            // IDがあればIDでDI登録 無ければclass名登録
                            this.di.set((e?.id ? e.id : class_name), module_class);
                        });
                }
            });
        });

        return Promise.all(promises);
    }



    // ユーティリティ ---------------------

    /**
     * 文字列をキャメルケースへ
     * @param {string} string
     * @return {string}
     */
    toCamelCase(string) {
        return string.split('_').map(function(word,index){
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
    }

    /**
     * キャメルケースかどうかを判断する
     * @param string
     * @returns {boolean}
     */
    isCamelCase(string) {
        return string.match(/^[A-Z][a-z]*([A-Z]{1}[a-z]*)*$/);
        // return string === this.toCamelCase(string);
    }

}
