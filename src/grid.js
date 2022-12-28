export default class Grid {
    constructor(width, height, depth) {
        this._initializeGrid(width, height, depth);
    }

    getCoordinateValue(x, y, z) {
        return this.grid[x][y][z];
    }

    printGrid() {
        console.log(this.grid)
    }

    _initializeGrid(width, height, depth) {
        this.grid = [];
        for (let x = 0; x < width; x++) {
            this.grid[x] = [];
            for (let y = 0; y < height; y++) {
                this.grid[x][y] = [];
                for (let z = 0; z < depth; z++) {
                    this.grid[x][y][z] = 0;
                }
            }
        }
    }
}
