const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

import {ENTITY_TYPES} from './definitions/entityTypes.js';
import GridFactory from './factory/gridFactory.js';
import Player from './entity/player.js';
import PlayerController from './controller/playerController.js';
import EnemyShotController from './controller/enemyShotController.js';
import EnemyController from './controller/enemyController.js';
import updateGameState from './gameState.js';
import drawBackground from './presenter/background.js';
import GameElements from './presenter/gameElements.js';

const player = new Player;
const grid = (new GridFactory).create();
const playerController = new PlayerController(player, grid);
const enemyShotController = new EnemyShotController(grid);
const enemyController = new EnemyController(grid);
const gameElements = new GameElements;

grid.updateCoordinateValue(player.getCurrentCoordinate(), ENTITY_TYPES.PLAYER);

function gameLoop() {
    updateGameState(enemyShotController, enemyController, player, grid);

    drawBackground(canvas, ctx);

    gameElements.draw(canvas, ctx, grid);

    // requestAnimationFrame(gameLoop);
}

gameLoop();

window.addEventListener('keyup', (event) => {
    if (event.code == 'ArrowLeft') {
        playerController.moveLeft();
        gameLoop();
    }
    if (event.code == 'ArrowRight') {
        playerController.moveRight();
        gameLoop();
    }
    if (event.code == 'ArrowUp') {
        playerController.moveUp();
        gameLoop();
    }
    if (event.code == 'ArrowDown') {
        playerController.moveDown();
        gameLoop();
    }
}, true);
