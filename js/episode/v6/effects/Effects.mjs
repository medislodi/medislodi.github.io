'use strict';

/** flashで作成したムービーのjsを手動でクラス化しておく **/

export class KiraToGasha extends PIXI.animate.Container {
    movie = null;

    constructor(lib, player) {
        super();
        player.app.ticker.add(this.handleTick, this);
        this.movie = this.addCreatejs(new lib.kira_eff());
        this.movie.updateBlendModeForPixi(PIXI.BLEND_MODES.ADD);
        this.movie.x = -520;
        this.movie.y = -100;
        this.movie.alpha = 0.5;
        this.movie.loop = false;

        // movieによって処理を変える
        this.skip = ()=>{
            this.movie.gotoAndStop(this.movie.totalFrames);
        };
    }
}


export class GashaEffect extends PIXI.animate.Container {
    movie = null;

    constructor(lib, player) {
        super();
        player.app.ticker.add(this.handleTick, this);
        this.movie = this.addCreatejs(new lib.gasha_eff());
        // this.movie.updateBlendModeForPixi(PIXI.BLEND_MODES.ADD);
        this.movie.play();
        this.movie.x = -450;
        this.movie.y = 0;
        this.movie.alpha = 1;
        this.movie.loop = false;

        // movieによって処理を変える
        this.skip = ()=>{
            this.movie.gotoAndStop(this.movie.totalFrames);
        };
    }
}


export class Toast extends PIXI.animate.Container {
    movie = null;

    constructor(lib, player) {
        super();
        player.app.ticker.add(this.handleTick, this);
        this.movie = this.addCreatejs(new lib.toast());
        this.movie.x = -450;
        this.movie.y = 0;
        this.movie.alpha = 1;
        this.movie.loop = false;

        // movieによって処理を変える
        this.skip = () => {
            this.movie.gotoAndStop(0);
        };
    }
}