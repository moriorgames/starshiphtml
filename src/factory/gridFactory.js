import Grid from '../entity/grid.js';
import {GRID_SIZE} from '../definitions/gridSize.js';

export default class GridFactory {
    create() {
        return new Grid(GRID_SIZE.WIDTH, GRID_SIZE.HEIGHT, GRID_SIZE.DEPTH);
    }
}
