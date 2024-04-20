'use strict';

/**
 * @description CSSに定義が無くても、Class名から推測したスタイルを動的に生成するクラス
 * short_cut に登録されたスタイル名から始まる文字列を展開しseparatorで分割
 * 分割された後続のパラメータに対して
 * ・1文字目の大文字Sは「#」に変換
 * ・末尾のimは「!important」に変換
 * ・数字の後ろの大文字Pは「%」に変換
 * を行う。
 * @example .m-10P_10P_10_P_im → margin:10% 10% 10% !important;
 * @example .c-SFF0000 → color:#FF0000;
 */
export class StyleSheet {

    /** @var {DiContainer} */
    di;

    #style;
    #separator = '_';
    #attached_classes = [];
    #set_height_variables = [];
    short_cut = {
        "m":    "margin",
        "mt":   "margin-top",
        "mb":   "margin-bottom",
        "ml":   "margin-left",
        "mr":   "margin-right",
        "p":    "padding",
        "pt":   "padding-top",
        "pb":   "padding-bottom",
        "pl":   "padding-left",
        "pr":   "padding-right",
        "ta":   "text-align",
        "w":    "width",
        "h":    "height",
        "ai":   "align-items",
        "c":    "color",
        "d":    "display",
        "bo":   "border",
        "bor":  "border-radius",
        "boc":  "border-color",
        "bg":   "background",
        "bgc":  "background-color",
        "bgbl": "background-blend-mode",
        "bgi":  "background-image",
        "bgs":  "background-size",
        "gr":   "grid",
        "gtc":  "grid-template-columns",
        "gtr":  "grid-template-rows",
        "gar":  "grid-auto-rows",
        "jc":   "justify-content",
        "fs":   "font-size",
        "fw":   "font-weight",
        "pi":   "place-items",
        "bc":   "border-color",
        "of":   "overflow",
        "po":   "position",
        "op":   "opacity",
        "t":    "top",
        "l":    "left",
        "r":    "right",
        "b":    "bottom",
        "zi":   "z-index",
        "blend": "mix-blend-mode",
        "layer":"z-index", // 特殊用途
    };

    constructor() {
        this.#style = document.createElement("style");
        document.head.appendChild( this.#style );
    }

    /**
     * 実行HTML内のすべてのタグに対し、動的クラス生成を行う
     */
    attachAll(){
        let contents = document.querySelectorAll("*");
        const classes =  this.#getClassList(contents);
        classes.map((c)=> this.attach(c));
    }

    attachElement(element){
        let classes = [];
        if(element.className && typeof element.className === "string" ) {
            classes = [...new Set([...classes, ...element.className.split(' ')])];// 配列のunique化
        }
        if(element.children.length>0){
            classes = [...new Set([...classes, ...this.#getClassList(element.children)])];  //再帰的な呼び出し
        }
        classes.map((c)=> this.attach(c));
    }

    /**
     * elementの中からclass名を抜き出し、重複を削除した配列を返す
     * @param elements
     * @returns {string[]}
     */
    #getClassList(elements){
        let classes = ['d-none_im'];// フレームワーク全体で使う非表示クラス
        Array.from(elements).forEach((e)=>{
            if(e.className && typeof e.className === "string" ) {
                classes = [...new Set([...classes, ...e.className.split(' ')])];// 配列のunique化
            }
            if(e.children.length>0){
                classes = [...new Set([...classes, ...this.#getClassList(e.children)])];  //再帰的な呼び出し
            }
        });
        return classes;
    }


    /**
     * 指定されたIDのElementの高さをCSS変数に埋め込む
     * @param id
     */
    setHeightCssVariable(id){
        if(this.#set_height_variables.indexOf(id)>=0) return this.#set_height_variables[id];
        const height = document.getElementById(id).scrollHeight;
        this.#style.sheet.insertRule(`:root { --${id}-height:${height}; }`, 0);
        this.#set_height_variables[id] = height;
    }

    /**
     * class名を登録
     * @param {string} class_name
     * @return {string} class_name element.classList.add(StyleSheet.attach(xxx));のように使える
     */
    attach(class_name){
        if(this.#attached_classes.indexOf(class_name)>=0) return class_name; // 登録済み
        let type, values;
        [type, ...values] = class_name.split('-');
        const value = values.join('-');
        if(!(type in this.short_cut)) return class_name;
        const target = this.short_cut[type];
        let set = value.indexOf(this.#separator) > 0 ? value.replaceAll(this.#separator,' ') : value;
        if(type === 'layer') {// z-indexのグループを動的生成
            const set_array = set.split(' ');
            let index = 0;
            set_array.forEach((set) => {
                if (set === 'loading') {
                    index += 10;
                } else if (set === 'popup') {
                    index += 5;
                } else {
                    index += Number(set) * 10;
                }
            });
            set = index;
        }else{
            set = set.replace(/^S/g, "#");//1文字目の大文字Sは「#」に変換
            set = set.replace(/^M/g, "-");//1文字目の大文字Mは「-」に変換
            set = set.replace(/im$/g, "!important");//末尾のimは「!important」に変換
            set = set.replaceAll(/([0-9]+)P/g, "$1%");// 数字の後ろの大文字Pは「%」に変換
            set = set.replace(/^V(.*)/g, "var(--$1)");//大文字Vから始まる文字はvar関数に変換
            set = set.replace(/C([0-9]+)/, ".$1");//数字の前の大文字Cは小数点に変換
        }
        this.insertRule(`.${class_name} { ${target}:${set}; }`);
        this.#attached_classes.push(class_name);
        return class_name;
    }

    insertRule(rule, index = 0){
        console.log('[Style sheet] add css rule', `${rule}`);
        return this.#style.sheet.insertRule(rule, index);
    }

    deleteRule(index = 0){
        return this.#style.sheet.deleteRule(index);
    }


    hide(element){
        // console.log(`[StyleSheet] hide`,element);
        element.classList.add(this.attach('d-none_im'));
    }

    show(element){
        element.classList.remove('d-none_im');
    }


}