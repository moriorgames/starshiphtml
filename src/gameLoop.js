const canvas = document.getElementById('miCanvas');
const ctx = canvas.getContext('2d');

import {ENTITY_TYPES} from './definitions/entityTypes.js';
import GridFactory from './factory/gridFactory.js';
import Player from './entity/player.js';
import PlayerController from './controller/playerController.js';
import EnemyShotController from './controller/enemyShotController.js';
import EnemyController from './controller/enemyController.js';
import updateGameState from './gameState.js';
import Background from './presenter/background.js';
import GameElements from './presenter/gameElements.js';
import UserInterface from './presenter/userInterface.js';

const player = new Player;
const grid = (new GridFactory).create();
const playerController = new PlayerController(player, grid);
const enemyShotController = new EnemyShotController(grid);
const enemyController = new EnemyController(grid);
const background = new Background(canvas, ctx);
const gameElements = new GameElements();
const userInterface = new UserInterface(canvas, ctx);
let score = {score: 0};

grid.updateCoordinateValue(player.getCurrentCoordinate(), ENTITY_TYPES.PLAYER);

function gameLoop() {
    updateGameState(score, enemyShotController, enemyController, player, grid);

    background.draw();

    gameElements.draw(canvas, ctx, grid);

    userInterface.draw(score, player);

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
