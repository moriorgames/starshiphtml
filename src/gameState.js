import {ENTITY_TYPES} from './definitions/entityTypes.js';

export default function updateGameState(score, enemyShotController, enemyController, player, grid) {
    enemyController.move();
    enemyShotController.move(score);
    grid.updateCoordinateValue(player.getCurrentCoordinate(), ENTITY_TYPES.PLAYER);
}
