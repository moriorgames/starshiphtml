function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBackground();

    requestAnimationFrame(gameLoop);
}

gameLoop();
