export default function drawBackground(score, canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let img = document.getElementById("background");
    ctx.drawImage(img, 0, 0);

    ctx.fillStyle = 'DarkCyan';
    ctx.fillRect(0, 450, canvas.width, canvas.height);

    ctx.font = '18px serif';
    ctx.fillStyle = 'white';
    ctx.fillText('Score: ' + score.score, 10, 16);
}
