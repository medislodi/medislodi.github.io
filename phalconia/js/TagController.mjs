'use strict';

export class TagController {

    element;
    /** @var {DiContainer} */
    di;

    constructor(element) {
        this.element = element;
        // パラメータ値初期化
        const params = JSON.parse(element.dataset.params??"{}");
        for(const key in params) {
            this[key] = params[key];
        }
    }

    /**
     * 指定したElement または このオブジェクトを表示する
     * @param {Element} element
     */
    show(element = null){
        if(this.di.exist('StyleSheet')) this.di.get('StyleSheet').show(element ?? this.element);
    }

    /**
     * 指定したElement または このオブジェクトを非表示にする
     * @param {Element} element
     */
    hide(element = null){
        if(this.di.exist('StyleSheet')) {
            this.di.get('StyleSheet').hide(element ?? this.element);
        }
    }

    getElementById(id){
        return this.element.querySelector("#"+id);
    }

    /**
     * IDを指定して中身を置き換える
     * @param {string} id
     * @param {string|int} text
     */
    setTextByID(id, text){
        this.getElementById(id).innerText = text;
    }

    /**
     * IDを指定して中のHTMLを置き換える
     * @param id
     * @param html
     */
    setHtmlByID(id, html){
        this.getElementById(id).innerHTML = html;
    }

    /**
     * IDを指定して中身をカンマ区切りの数字に置き換える
     * @param {string} id
     * @param {int} int
     */
    setLocaleIntByID(id, int){
        this.getElementById(id).innerText = int.toLocaleString();
    }

    /**
     * テンプレートからNodeを生成
     * @param template
     * @return {HTMLElement|*}
     */
    cloneFromTemplate(template){
        return template.content.cloneNode(true);
    }

    /**
     * 指定element配下の要素を削除
     * @param element
     */
    removeChildren(element){
        while( element.firstChild ){
            element.removeChild( element.firstChild );
        }
    }



}