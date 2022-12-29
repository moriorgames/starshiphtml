const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

import updateGameState from './gameState.js';
import drawBackground from './presenter/background.js';
import drawGameElements from './presenter/gameElements.js';

function gameLoop() {
    updateGameState();

    drawBackground(canvas, ctx);

    drawGameElements(canvas, ctx);

    // requestAnimationFrame(gameLoop);
}

gameLoop();
