'use strict';

import {TagController} from "/phalconia/js/TagController.mjs";
import DiContainer from "../phalconia/js/DiContainer.mjs";

export class StoryLine extends TagController{

    /** @type {Array} */
    branch;


    static updateSvg(offset=0) {
        const target_box = document.getElementById("arrow_box");
        const scroll_box = document.getElementById("scroll_box");
        console.log("******",scroll_box.scrollLeft );
        const target_rect = scroll_box.getBoundingClientRect();
        console.log("******",target_rect );
        const delete_svg = target_box.querySelectorAll('svg');
        delete_svg.forEach(svg => {
            target_box.removeChild( svg );
        });

        (DiContainer.get('leaderLines') ?? []).forEach(leaderLine => {
            leaderLine.position();
        });

        const svgs = document.querySelectorAll('svg.leader-line');
        svgs.forEach(svg => {
            if(svg.id) return;

            let new_svg = svg.cloneNode(true);
            new_svg.style.display = 'none';
            new_svg.style.left = Number(new_svg.style.left.replace('px', '')) - target_rect.x + scroll_box.scrollLeft + 'px';
            new_svg.style.top = Number(new_svg.style.top.replace('px', '')) - target_rect.top - offset + 'px';
            target_box.appendChild(new_svg);
            setTimeout(() => {
                new_svg.style.display = 'block';
                new_svg.style.display = '-webkit-box';
            },10);

            svg.style.display = 'none';
        });

    }

    constructor(element) {
        super(element);
        this.init();
    }



    init(){
        window.scrollTo(0, 0);
        LeaderLine.positionByWindowResize = true;

        this.branch = JSON.parse(this.element.dataset.branch ?? "[]");
        // console.log(this.branch);
        let i=0;
        const space = Math.ceil(100 / (this.branch.length+1));

        this.branch.forEach((branch)=>{
            console.log('********', branch);
            if(branch.goto_stage !== undefined && branch.goto_stage !== null) {
                const start = LeaderLine.pointAnchor(this.element, {x: "100%", y: (space + i * space) + "%"});

                const next_stage = branch.goto_stage ?? (branch.stage + 1);
                const target = document.getElementById(`story-stage-${next_stage}`);
                const end = LeaderLine.pointAnchor(target, {x: "0%", y: "50%"});
                const options = {
                    color: (branch.color ?? "gray"),
                    size: (this.size ?? 4),
                    startSocketGravity: [40, 0],
                    endSocketGravity: [-40, 0]
                };
                /** @type {LeaderLine} */
                let line = new LeaderLine(start, end, options);
                line.trueColor = branch.true_color;
                // console.log('＄＄＄＄＄', line.color, branch.true_color);
                DiContainer.set(`story-line-${branch.stage}-${branch.group_id}-${branch.select_num}`, line);
                let leaderLines = DiContainer.get("leaderLines") ?? [];
                leaderLines.push(line);
                DiContainer.set("leaderLines", leaderLines);
            }
            i++;
        });

        StoryLine.updateSvg();
    }

}
