import {ENTITY_TYPES} from './definitions/entityTypes.js';
import Coordinate from './entity/coordinate.js';

export default function updateGameState(player, grid) {

    grid.updateCoordinateValue(new Coordinate(1, 1, 0), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(1, 1, 1), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(1, 1, 2), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(1, 1, 3), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(1, 1, 4), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(1, 1, 5), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(1, 1, 6), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(1, 1, 7), ENTITY_TYPES.ENEMY_SHOT);

    grid.updateCoordinateValue(new Coordinate(1, 10, 0), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(1, 10, 1), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(1, 10, 2), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(1, 10, 3), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(1, 10, 4), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(1, 10, 5), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(1, 10, 6), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(1, 10, 7), ENTITY_TYPES.ENEMY_SHOT);

    grid.updateCoordinateValue(new Coordinate(14, 1, 0), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(14, 1, 1), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(14, 1, 2), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(14, 1, 3), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(14, 1, 4), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(14, 1, 5), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(14, 1, 6), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(14, 1, 7), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(14, 1, 7), ENTITY_TYPES.ENEMY_SHOT);

    grid.updateCoordinateValue(new Coordinate(14, 10, 0), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(14, 10, 1), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(14, 10, 2), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(14, 10, 3), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(14, 10, 4), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(14, 10, 5), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(14, 10, 6), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(14, 10, 7), ENTITY_TYPES.ENEMY_SHOT);
    grid.updateCoordinateValue(new Coordinate(14, 10, 7), ENTITY_TYPES.ENEMY_SHOT);

    grid.updateCoordinateValue(player.getCurrentCoordinate(), ENTITY_TYPES.PLAYER);
    grid.printGrid();

    console.log('Update game State');
}
