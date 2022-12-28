export default function drawBackground(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'DeepSkyBlue';
    ctx.fillRect(0, 0, canvas.width, 250);

    ctx.fillStyle = 'green';
    ctx.fillRect(0, 250, canvas.width, canvas.height);
}
