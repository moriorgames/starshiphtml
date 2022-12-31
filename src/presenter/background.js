export default function drawBackground(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let img = document.getElementById("background");
    ctx.drawImage(img, 0, 0);

    ctx.fillStyle = 'DarkCyan';
    ctx.fillRect(0, 450, canvas.width, canvas.height);
}
