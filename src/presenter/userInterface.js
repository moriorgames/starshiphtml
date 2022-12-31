export default class UserInterface {
    canvas;
    ctx;
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }
    draw(score, player) {
        this.ctx.font = '18px serif';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText('Score: ' + score.score, 10, 16);
    }
}
