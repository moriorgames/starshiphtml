const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

import GridFactory from './factory/gridFactory.js';
import Player from './entity/player.js';
import updateGameState from './gameState.js';
import drawBackground from './presenter/background.js';
import GameElements from './presenter/gameElements.js';

const player = new Player;
const grid = (new GridFactory).create();
const gameElements = new GameElements;

function gameLoop() {
    updateGameState(player, grid);

    drawBackground(canvas, ctx);

    gameElements.draw(canvas, ctx, grid);

    // requestAnimationFrame(gameLoop);
}

gameLoop();
