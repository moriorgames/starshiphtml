import {ENTITY_TYPES} from './definitions/entityTypes.js';
import Coordinate from './entity/coordinate.js';

export default function updateGameState(player, grid) {

    grid.updateCoordinateValue(new Coordinate(0, 0, 0), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(0, 0, 1), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(0, 0, 2), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(0, 0, 3), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(0, 0, 4), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(0, 0, 5), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(0, 0, 6), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(0, 0, 7), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(0, 0, 8), ENTITY_TYPES.ENEMY_SHOT);

    grid.updateCoordinateValue(new Coordinate(0, 11, 0), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(0, 11, 1), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(0, 11, 2), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(0, 11, 3), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(0, 11, 4), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(0, 11, 5), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(0, 11, 6), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(0, 11, 7), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(0, 11, 8), ENTITY_TYPES.ENEMY_SHOT);

    grid.updateCoordinateValue(new Coordinate(17, 0, 0), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(17, 0, 1), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(17, 0, 2), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(17, 0, 3), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(17, 0, 4), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(17, 0, 5), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(17, 0, 6), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(17, 0, 7), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(17, 0, 8), ENTITY_TYPES.ENEMY_SHOT);

    grid.updateCoordinateValue(new Coordinate(17, 11, 0), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(17, 11, 1), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(17, 11, 2), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(17, 11, 3), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(17, 11, 4), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(17, 11, 5), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(17, 11, 6), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(17, 11, 7), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(17, 11, 8), ENTITY_TYPES.ENEMY_SHOT);

    grid.updateCoordinateValue(player.getCurrentCoordinate(), ENTITY_TYPES.PLAYER);
    // grid.printGrid();

    console.log('Update game State');
}
