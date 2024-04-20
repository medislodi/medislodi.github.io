window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload();
    }
};

/** @var {Zod} */
var zod;

window.addEventListener('pageshow', ()=>{
    console.log('start')
    import(`/phalconia/js/Zod.mjs`)
        .then((classes)=>{
            zod = new classes['Zod']('/js');
            zod.start(document).then(()=>{
                console.log('Zod loaded!');

                // ロードエフェクト差し替え
                const effect = document.getElementById('loading-effect').content.cloneNode(true);
                document.getElementById("load_effect").innerHTML = "";
                document.getElementById("load_effect").appendChild(effect);
                loading(document.getElementById('loading-bg'),90);
                // document.getElementById("load_effect").classList.remove('d-none_im');


                // 数字で終わってなかったらURLの後ろのスラッシュ追加
                if(!location.href.match(/\/[0-9]+$|\/$/)) history.replaceState('','',location.href + '/');
                // 数字で終わってたらURLの後ろのスラッシュ削除
                if(location.href.match(/\/[0-9]+\/$/)) history.replaceState('','',location.href.replace(/\/$/,''));


                // メニューの画面外クリック対応
                // document.getElementById("l-all").addEventListener('click', (eve)=>{
                //     document.getElementById("header_menu_check").checked = false;
                // });

                // 遷移が始まったとき
                // window.addEventListener('beforeunload',()=>{
                //     console.log('move');
                //     document.getElementById("load_effect").classList.remove("d-none_im")
                // });

                setTimeout(()=>{document.getElementById('cover').style.display = "none";},100);





                // zod.di().get("LoadEffect").set('drama');
                // document.getElementById("load_effect").classList.remove('d-none_im');

            });
        }).catch((error)=>{
        console.error(error);
    });
});


function loading(element, rate){
    const size = 24;
    const space = 32;

    const x_num = 100;
    const y_num = 2;
    for (let x=0; x<x_num; x++){
        for (let y=0; y<y_num; y++){
            setTimeout(()=>{
                if(Math.random() * 100 <= rate){
                    // console.log('hit')
                    let img = document.createElement('img');
                    img.src = "/resources/site/bg_square_light_green.svg";
                    img.style.width = img.style.height = `${size}px`;
                    img.style.position = "absolute";
                    img.style.left = String(space * x) + "px";
                    img.style.top = String(space * y) + "px";
                    img.classList.add('square_light');
                    img.style.zIndex = "-1";
                    const rand = Math.floor(Math.random()*6)+1;
                    const rand2 = Math.floor(Math.random()*1000);
                    if(rand >= 4){
                        img.style.animation = `flash${rand} 10s linear infinite`;
                    }else{
                        img.style.animation = `flash${rand} 2s linear infinite`;
                    }

                    img.style.animationDelay = `${rand2}ms`;
                    // img.style.opacity = String(Math.floor(Math.random()*4) * 25) + '%';
                    element.appendChild(img);
                }
            }, (x+y)*10);
        }
    }

}