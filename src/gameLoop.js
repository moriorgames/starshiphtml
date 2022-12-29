const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

import GridFactory from './factory/gridFactory.js';
import Player from './entity/player.js';
import updateGameState from './gameState.js';
import drawBackground from './presenter/background.js';
import drawGameElements from './presenter/gameElements.js';

function gameLoop() {
    const player = new Player;
    const grid = (new GridFactory).create();

    updateGameState(player, grid);

    drawBackground(canvas, ctx);

    drawGameElements(canvas, ctx, grid);

    // requestAnimationFrame(gameLoop);
}

gameLoop();
