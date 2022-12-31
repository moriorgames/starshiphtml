import {ENTITY_TYPES} from './definitions/entityTypes.js';

export default function updateGameState(score, shotController, enemyController, player, grid) {
    enemyController.move();
    shotController.move(score, enemyController);
    grid.updateCoordinateValue(player.getCurrentCoordinate(), ENTITY_TYPES.PLAYER);
}
