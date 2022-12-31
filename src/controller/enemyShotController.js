import Grid from '../entity/grid.js';
import {GRID_SIZE} from '../definitions/gridSize.js';
import Coordinate from '../entity/coordinate.js';
import {ENTITY_TYPES} from '../definitions/entityTypes.js';

export default class EnemyShotController {
    constructor(grid) {
        if (grid instanceof Grid) {
            this.grid = grid;
        }
    }

    move(score) {
        for (let z = GRID_SIZE.DEPTH - 1; z >= 0; z--) {
            for (let y = 0; y < GRID_SIZE.HEIGHT; y++) {
                for (let x = 0; x < GRID_SIZE.WIDTH; x++) {
                    let c = new Coordinate(x, y, z);
                    let value = this.grid.getCoordinateValue(c);
                    if (value === ENTITY_TYPES.ENEMY_SHOT) {
                        let newCoordinate = new Coordinate(x, y, z + 1);
                        if (this.grid.getCoordinateValue(newCoordinate) === ENTITY_TYPES.PLAYER) {
                            score.score++;
                        }
                        this.grid.updateCoordinateValue(newCoordinate, ENTITY_TYPES.ENEMY_SHOT);
                        this.grid.updateCoordinateValue(c, ENTITY_TYPES.EMPTY);
                    }
                    c = null;
                }
            }
        }
    }
}
