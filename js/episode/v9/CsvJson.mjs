'use strict';

export class CsvJson {

    static csvToObject(csvPath){
        return new Promise((resolve, reject) => {
           fetch(csvPath, { method: 'GET'})
               .then(response => response.text())
               .then((data)=>{
                   let title = [];
                   let csvArray = [];
                   let lines = data.split(/\r\n|\n/);
                   for (let i = 0; i < lines.length; ++i) {
                       let cells = lines[i].split(",");
                       if (i === 0) {
                           title = cells;
                       }else if(cells.length === title.length){
                           let values = {};
                           title.forEach(((value, index) => {
                               values[value] = CsvJson.hankana2Zenkana(cells[index].replace(/^"?(.*)"$/,"$1"));
                           }))
                           csvArray.push(values);
                       }
                   }
                    resolve(csvArray);

                   }).catch((error)=>{
                       reject(error);
                   }
               );
        });
    }

    static csvToJson(csvPath){
        return JSON.stringify( this.csvToObject(csvPath) );
    }

    static jsonToObject(jsonPath){
        return new Promise((resolve, reject) => {
            fetch(jsonPath, {method: 'GET'})
                .then(response => response.json())
                .then(jsonData => {
                    resolve(jsonData);
                })
                .catch(error => {
                        reject(error);
                    }
                );
        });
    }

    static objectToCsv(object){
        let title = '';
        let contents = '';
        for (const [key, value] of Object.entries(object)) {
            let titles = [];
            let values = [];
            for (const [k, v] of Object.entries(value)) {
                if (key === 1) titles.push(k);
                values.push(v);
            }
            if (key === 1) title = titles.join(',') + '\n';
            contents += values.join(',') + '\n';
        }
        return title + contents;
    }

    static jsonToCsv(jsonPath){
        return this.objectToCsv(this.jsonToObject(jsonPath));
    }

    static hankana2Zenkana(str) {
        const kanaMap = {
            'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
            'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
            'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
            'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
            'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
            'ｳﾞ': 'ヴ', 'ﾜﾞ': 'ヷ', 'ｦﾞ': 'ヺ',
            'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
            'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
            'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
            'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
            'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
            'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
            'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
            'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
            'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
            'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
            'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
            'ｯ': 'ッ', 'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
            '｡': '。', '､': '、', 'ｰ': 'ー', '｢': '「', '｣': '」', '･': '・'
        };

        let reg = new RegExp('(' + Object.keys(kanaMap).join('|') + ')', 'g');
        return str
            .replace(reg, function (match) {
                return kanaMap[match];
            })
            .replace(/ﾞ/g, '゛')
            .replace(/ﾟ/g, '゜');
    };

}