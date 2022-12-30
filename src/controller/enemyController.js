import Grid from '../entity/grid.js';
import {GRID_SIZE} from '../definitions/gridSize.js';
import Coordinate from '../entity/coordinate.js';
import {ENTITY_TYPES} from '../definitions/entityTypes.js';

export default class EnemyController {
    constructor(grid) {
        if (grid instanceof Grid) {
            this.grid = grid;
        }
    }

    move() {
        let x = Math.floor(Math.random() * GRID_SIZE.WIDTH);
        let y = Math.floor(Math.random() * GRID_SIZE.HEIGHT);
        this.grid.updateCoordinateValue(new Coordinate(x, y, 0), ENTITY_TYPES.ENEMY_SHOT);
    }
}
