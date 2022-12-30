import {GRID_SIZE} from '../definitions/gridSize.js';
import {ENTITY_TYPES} from '../definitions/entityTypes.js';
import Coordinate from './coordinate.js';

export default class Grid {
    constructor(width, height, depth) {
        if (width < 1 || height < 1 || depth < 1) {
            throw new Error('Invalid values for width, height or depth');
        }
        this._initializeGrid(width, height, depth);
    }

    getData() {
        return this.grid;
    }

    getCoordinateValue(coordinate) {
        if (coordinate instanceof Coordinate) {
            return this.grid[coordinate.getZ()][coordinate.getY()][coordinate.getX()];
        }
    }

    updateCoordinateValue(coordinate, value) {
        if (coordinate.getZ() < GRID_SIZE.DEPTH &&
            coordinate.getY() < GRID_SIZE.HEIGHT &&
            coordinate.getX() < GRID_SIZE.WIDTH) {
            this.grid[coordinate.getZ()][coordinate.getY()][coordinate.getX()] = value;
        }
    }

    printGrid() {
        console.log(this.grid)
    }

    _initializeGrid(width, height, depth) {
        this.grid = [];

        for (let z = 0; z < depth; z++) {
            this.grid[z] = [];
            for (let y = 0; y < height; y++) {
                this.grid[z][y] = [];
                for (let x = 0; x < width; x++) {
                    if (x === 0) {
                        this.grid[z][y][x] = ENTITY_TYPES.ENEMY_SHOT;
                        continue;
                    }
                    if (x + 1 === GRID_SIZE.WIDTH) {
                        this.grid[z][y][x] = ENTITY_TYPES.ENEMY_SHOT;
                        continue;
                    }
                    if (y === 0) {
                        this.grid[z][y][x] = ENTITY_TYPES.ENEMY_SHOT;
                        continue;
                    }
                    if (y + 1 === GRID_SIZE.HEIGHT) {
                        this.grid[z][y][x] = ENTITY_TYPES.ENEMY_SHOT;
                        continue;
                    }
                    this.grid[z][y][x] = ENTITY_TYPES.EMPTY;
                }
            }
        }
    }
}
