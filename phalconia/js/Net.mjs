'use strict';

export class Net {

    /** @var {DiContainer} */
    di;

    /**
     * ajax 通信を行う
     * @param url
     * @param formData
     * @param method
     * @param isJson
     * @param with_effect
     * @return {Promise<unknown>}
     */
    ajax(url, formData = null, method='POST', isJson = true, with_effect=true, header = {}){
        formData ??= new FormData();
        let init = {};
        if(method.toUpperCase() === "GET"){
            let first = true;

            for (let value of formData.entries()) {
                if(first){
                    url += "?";
                    first = false;
                }else{
                    url += "&";
                }
                url += `${value[0]}=${value[1]}`;
            }
            init = { method: method, headers: header};
        }else if(isJson){
            const body = this.#formDataToJson(formData);
            header["Content-Type"] = 'application/json';
            init = { method: method, body: body, headers: header};
        }else{
            init = { method: method, body: formData, header};
        }
        return new Promise((resolve, reject) => {
            if(with_effect) this.di.get("LoadEffect").set(url.replace('/','_'));
            fetch(url, init)
            .then(response => response.json())
            .then(jsonData => {
                if(with_effect) this.di.get("LoadEffect").finish(url.replace('/','_'));
                resolve(jsonData);
            })
            .catch(error => {
                console.error(error);
                if(with_effect) this.di.get("LoadEffect").finish(url.replace('/','_'));
                reject(error);
            });
        });
    }

    /**
     * formDataをJson Stringに変更
     * @param formData
     * @return {string}
     */
    #formDataToJson(formData){
        const obj = {};
        for (const [key, value] of formData.entries()) {
            switch (typeof value){
                case "object":
                    if(this.di.exist(key)){
                        obj[key] = this.di.get(key).base64;
                    }else{
                        console.error('Object parse error! Please use FileInput class.');
                    }
                    break;
                default:
                    if(formData.getAll(key).length > 1){
                        obj[key] = formData.getAll(key);
                    }else{
                        obj[key] = value;
                    }
                    break;
            }
        }
        return JSON.stringify(obj);
    }

}