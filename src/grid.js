export default class Grid {
    constructor(width, height) {
        this._initializeGrid(width, height);
    }

    getCoordinateValue(x, y) {
        return this.grid[x][y];
    }

    _initializeGrid(width, height) {
        this.grid = [];
        for (let x = 0; x < width; x++) {
            this.grid[x] = [];
            for (let y = 0; y < height; y++) {
                this.grid[x][y] = 0;
            }
        }
    }
}
