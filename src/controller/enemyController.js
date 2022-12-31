import Grid from '../entity/grid.js';
import {GRID_SIZE} from '../definitions/gridSize.js';
import Coordinate from '../entity/coordinate.js';
import {ENTITY_TYPES} from '../definitions/entityTypes.js';

export default class EnemyController {
    constructor(grid) {
        this.counter = 0;
        this.x = 0;
        this.y = 0;
        if (grid instanceof Grid) {
            this.grid = grid;
        }
    }

    move() {
        const waitUntilMove = 6;
        if (this.counter === 0) {
            let x = Math.floor(Math.random() * GRID_SIZE.WIDTH);
            let y = Math.floor(Math.random() * GRID_SIZE.HEIGHT);
            if (x > 0 && y > 0 && x < GRID_SIZE.WIDTH - 1 && y < GRID_SIZE.HEIGHT - 1) {
                this.grid.updateCoordinateValue(new Coordinate(x, y, 0), ENTITY_TYPES.ENEMY_SHOT);
                this.x = x;
                this.y = y;
                this.counter++;
            }
        } else {
            this.grid.updateCoordinateValue(new Coordinate(this.x, this.y, 0), ENTITY_TYPES.ENEMY_SHOT);
            this.counter++;
            if (this.counter > waitUntilMove) {
                this.counter = 0;
            }
        }

    }
}
