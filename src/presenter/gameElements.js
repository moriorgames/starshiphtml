import {GRID_SIZE} from '../definitions/gridSize.js';
import {ENTITY_TYPES} from '../definitions/entityTypes.js';
import Coordinate from '../entity/coordinate.js';

export default class GameElements {
    canvas;
    ctx;

    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }

    draw(grid) {
        const focal = 0.75;

        for (let z = 0; z < GRID_SIZE.DEPTH; z++) {
            for (let y = 0; y < GRID_SIZE.HEIGHT; y++) {
                for (let x = 0; x < GRID_SIZE.WIDTH; x++) {
                    let c = new Coordinate(x, y, z);
                    let value = grid.getCoordinateValue(c);
                    let xScreen = (x - (GRID_SIZE.WIDTH / 2)) * (focal * z) + this.canvas.width / 2;
                    let yScreen = (y - (GRID_SIZE.HEIGHT / 2)) * (focal * z) + this.canvas.height / 2;

                    if (value === ENTITY_TYPES.PLAYER) {
                        this.ctx.fillStyle = 'white';
                        this.ctx.fillRect(xScreen, yScreen, z, z);
                    }

                    if (value === ENTITY_TYPES.PLAYER_SHOT) {
                        this.ctx.fillStyle = 'aqua';
                        this.ctx.globalAlpha = z / GRID_SIZE.DEPTH + 0.2;
                        this.ctx.fillRect(xScreen, yScreen, z * 0.6, z * 0.8);
                    }

                    if (value === ENTITY_TYPES.ENEMY) {
                        this.ctx.fillStyle = 'red';
                        this.ctx.fillRect(xScreen, yScreen, 5, 5);
                    }

                    if (value === ENTITY_TYPES.ENEMY_SHOT) {
                        this.ctx.fillStyle = 'yellow';
                        this.ctx.globalAlpha = z / GRID_SIZE.DEPTH;
                        this.ctx.fillRect(xScreen, yScreen, z, z);
                        this.ctx.globalAlpha = 1.0;
                    }

                    if (value === ENTITY_TYPES.WALL) {
                        this.ctx.fillStyle = 'purple';
                        this.ctx.globalAlpha = z / GRID_SIZE.DEPTH / 4;
                        this.ctx.fillRect(xScreen, yScreen, z, z);
                        this.ctx.globalAlpha = 1.0;
                    }
                    c = null;
                }
            }
        }
    }
}
