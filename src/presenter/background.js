export default function drawBackground(score, canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, 250);

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 250, canvas.width, canvas.height);

    ctx.font = '18px serif';
    ctx.fillStyle = 'white';
    ctx.fillText('Score: ' + score.score, 10, 16);
}
