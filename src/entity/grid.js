import {ENTITY_TYPES} from '../definitions/entityTypes.js';
import Coordinate from './coordinate.js';

export default class Grid {
    constructor(width, height, depth) {
        if (width < 1 || height < 1 || depth < 1) {
            throw new Error('Invalid values for width, height or depth');
        }
        this._initializeGrid(width, height, depth);
    }

    getCoordinateValue(coordinate) {
        if (coordinate instanceof Coordinate) {
            return this.grid[coordinate.getZ()][coordinate.getY()][coordinate.getX()];
        }
    }

    updateCoordinateValue(coordinate, value) {
        this.grid[coordinate.getZ()][coordinate.getY()][coordinate.getX()] = value;
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
                    this.grid[z][y][x] = ENTITY_TYPES.EMPTY;
                }
            }
        }
    }
}
