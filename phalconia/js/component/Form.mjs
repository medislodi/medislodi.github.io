'use strict';

import {TagController} from "../TagController.mjs";

export class Form extends TagController{

    onSuccess = (jsonData)=>{
        console.log(jsonData);
    };
    onFailed = (error)=>{
        console.error(error);
    };
    #submitBtn;

    /**
     *
     * @param {Element} element
     */
    constructor(element) {
        super(element);
        this.#submitBtn = element.querySelector("[type='submit']");
        element.addEventListener('submit', this.#submitEvent.bind(this));
        element.querySelectorAll('input,select,textarea').forEach((input) => {
            if(input.checkValidity === false ) this.#submitBtn.disabled = true;
            input.addEventListener('change', (event)=>{
                if(event.target.reportValidity()){
                    this.validate();
                }else{
                    this.#submitBtn.disabled = true;
                }
            });
        });
    }

    #submitEvent(event){
        event.preventDefault();
        if(this.element.reportValidity()){
           this.di.get('Net').ajax(this.element.getAttribute('action'), new FormData(this.element), this.element.getAttribute('method') ?? 'POST', this.element.getAttribute('type')??'json' === 'json' )
               .then(this.onSuccess)
               .catch(this.onFailed);
        }
    }

    validate() {
        this.#submitBtn.disabled = false;
        this.element.querySelectorAll('input,select,textarea').forEach((input) => {
            if(input.checkValidity() === false ) this.#submitBtn.disabled = true;
        });
    }



}