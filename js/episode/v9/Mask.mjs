'use strict';

export class Mask extends PIXI.Container {

    /** @var {Player} */
    player;

    mask_graphics;
    line_graphics;
    camera;
    masked_container;
    targets = [];
    resource_category = "mask";

    constructor(player) {
        super();
        this.player = player;
        this.zIndex = 1000;

        this.masked_container = new PIXI.Container();
        this.masked_container.x = this.player.width * 0.5;
        this.masked_container.y = this.player.height * 0.5;
        this.addChild(this.masked_container);

        this.camera = new PIXI.Container();
        this.masked_container.addChild(this.camera);

        this.mask_graphics = new PIXI.Graphics()
            .beginFill(0x000000)
            .drawRect(0, 0, this.player.width, this.player.height)
            .endFill();
        this.mask_graphics.pivot.x = this.player.width * 0.5;
        this.mask_graphics.pivot.y = 0;
        this.masked_container.addChild(this.mask_graphics);
        this.camera.mask = this.mask_graphics;

        this.line_graphics = new PIXI.Graphics();
        this.line_graphics.pivot.x = this.player.width * 0.5;
        this.line_graphics.pivot.y = 0;
        this.masked_container.addChild(this.line_graphics);

        PIXI.Ticker.shared.add(() => {
            this.camera.sortChildren();
        });


        this.init();


    }

    init(){
        console.log('#mask init');
        this.visible = false;

        // targetsにaddChildしたものを削除する
        this.targets.forEach((target) => {
            this.camera.removeChild(target);
            // target.mask = null;
        });
        this.targets = [];


        this.mask_graphics.x = 0;
        this.mask_graphics.y = 0;
        this.mask_graphics.width = this.player.width;
        this.mask_graphics.height = this.player.height;

        this.line_graphics.x = 0;
        this.line_graphics.y = 0;
        this.line_graphics.width = this.player.width;
        this.line_graphics.height = this.player.height;
        this.#reDrawLine();

        this.pivot.x = this.player.width * 0.5;
        this.pivot.y = this.player.height * 0.5;
        this.x = 0;
        this.y = 0;

        this.camera.x = 0;
        this.camera.y = 0;
        this.camera.scale.x = this.camera.scale.y = 1;
        this.camera.zIndex = 0;
    }


    setTarget(resource, zIndex = 0){
        // console.log('setTarget', resource);
        this.visible = true;
        // resource.mask = this.mask_graphics;
        this.camera.addChild(resource);
        resource.zIndex = Number(zIndex);
        console.log('#mask setTarget', resource);
        this.targets.push(resource);
    }


    //targetを外す
    removeTarget(){
        this.visible = false;
        this.targets.forEach((target) => {
            console.log('removeTarget', target);
            this.camera.removeChild(target);
            // target.mask = null;
            switch (target.resource_category) {
                case "chara":
                    this.player.resources.chara.addChild(target);
                    break;
                case "image":
                    if(target.resource_type === "background"){
                        this.player.resources.bg.addChild(target);
                    }else{
                        this.player.resources.fg.addChild(target);
                    }
                    break;
                default:
                    break;
            }
        });
        this.targets = [];

    }

    xTo(value, msec){
        if(msec < 0) msec = 500;
        console.log('#m_x', value, msec);
        return this.player.animator.moveToX(this, value, msec, "quadratic_out");
    }

    yTo(value, msec){
        if(msec < 0) msec = 500;
        console.log('#m_y', value, msec);
        return this.player.animator.moveToY(this, value, msec, "quadratic_out");
    }


    positionTo(value, msec, line_break = 3){
        if(msec < 0) msec = 500;
        console.log('#m_position', value, msec);

        // 2/3 の様に記載されたsrtingを2と３に分けて別の変数にいれる
        const [position, divide] = value.split('/').map(Number);

        /*
        json.divide の分割数でmaskのサイズを変更する
        該当のマスク番号に合わせる
        分割数がline_breakを超えるところから2行に改行する
        左上から右下にZ順に配置する
        改行した下の段が上の段より少ない場合は中心に来るようにｘ座標を調整する
         */
        const divide_1 = (divide > line_break) ? Math.ceil(divide /2) : divide;
        const divide_2 = (divide > line_break) ? Math.floor(divide /2) : 0;
        console.log('m_position_divide', divide_1, divide_2);
        if(position <= divide_1){
            // 1行目
            // let x = Math.round(this.player.width / divide_1 ) * (position - 1) - ((divide_1%2===0) ? Math.round(this.player.width / divide_1 /divide_1 ) : Math.round(this.player.width / divide_1));
            // x座標を計算　マスクは分割数に応じて幅が短くなるが、中心をpivotで縮小する。その際に親のコンテナのx座標は変わらないので、親のx座標を調整する
            let x = Math.round(this.player.width / divide_1 ) * (position - 1) - Math.round((this.player.width - (this.player.width / divide_1))/2);

            let y = 0;
            let scaleX = 1 / divide_1;
            let scaleY = (divide > divide_1) ? 0.5 : 1;
            return this.#position(x,y,scaleX,scaleY,msec);
        }else{
            // 2行目
            let x = Math.round(this.player.width / divide_2 ) * (position - 1 - divide_1) - Math.round((this.player.width - (this.player.width / divide_2))/2);
            let y = Math.round(this.player.height / 2 );
            let scaleX = 1 / divide_2;
            let scaleY = 1 / 2;
            return this.#position(x,y,scaleX,scaleY,msec);
        }
    }


    #position(x,y,scaleX,scaleY, msec = 500){
        console.log('m_position', x, y, scaleX, scaleY);
        return Promise.all([
            this.player.animator.moveToX(this, x , msec, "quadratic_out"),
            this.player.animator.moveToY(this, y, msec, "quadratic_out"),
            this.player.animator.widthTo(this.mask_graphics, scaleX * this.player.width , msec, "quadratic_out"),
            this.player.animator.widthTo(this.line_graphics, scaleX * this.player.width +1, msec, "quadratic_out"),
            this.player.animator.heightTo(this.mask_graphics, scaleY * this.player.height, msec, "quadratic_out"),
            this.player.animator.heightTo(this.line_graphics, scaleY * this.player.height * 1.005, msec, "quadratic_out")
        ]);
    }



    #reDrawLine(x=0,y=0, w = this.player.width, h=this.player.height){
        w += x;
        h += y;
        // console.log("m_position_e reDrawLine", x, y, w, h, offsetX);
        this.line_graphics.scale.x = this.line_graphics.scale.y = 1;
        this.line_graphics
            .clear()
            .lineStyle(6, 0xFFFFFF, 1, 0.5)
            .moveTo(x, y)
            .lineTo(w, y)
            .lineTo(w, h)
            .lineTo(x, h)
            .lineTo(x, y);
        this.line_graphics.zIndex = 1000000;
    }


}
