const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

function drawBackground() {
    ctx.fillStyle = 'DeepSkyBlue';
    ctx.fillRect(0, 0, canvas.width, 250);

    ctx.fillStyle = 'green';
    ctx.fillRect(0, 250, canvas.width, canvas.height);
}

drawBackground();
