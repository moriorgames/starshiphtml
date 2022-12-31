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

        this.healthBar(500, 6,  player.getHealth(), 150)
    }

    healthBar(x, y, per, width) {
        this.ctx.beginPath();
        this.ctx.rect(x - width / 2, y, width * (per / 100), 10);
        if (per > 65) {
            this.ctx.fillStyle = "green"
        } else if (per > 35) {
            this.ctx.fillStyle = "gold"
        } else if (per > 15) {
            this.ctx.fillStyle = "orange";
        } else {
            this.ctx.fillStyle = "red";
        }
        this.ctx.closePath();
        this.ctx.fill();
    }
}
