export default class Background {
    canvas;
    ctx;

    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        let img = document.getElementById('background');
        this.ctx.drawImage(img, 0, 25);
    }
}