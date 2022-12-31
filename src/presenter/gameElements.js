import {GRID_SIZE} from '../definitions/gridSize.js';
import {ENTITY_TYPES} from '../definitions/entityTypes.js';

export default class GameElements {
    draw(canvas, ctx, grid) {
        const focal = 0.88;
        const data = grid.getData();

        data.forEach(function callback(depth, z) {
            depth.forEach(function callback(height, y) {
                height.forEach(function callback(value, x) {
                    // console.log(`${x}/${y}/${z}: ${value}`);

                    let xScreen = (x - (GRID_SIZE.WIDTH / 2)) * (focal * z) + canvas.width / 2;
                    let yScreen = (y - (GRID_SIZE.HEIGHT / 2)) * (focal * z) + canvas.height / 2;

                    if (value === ENTITY_TYPES.PLAYER) {
                        ctx.fillStyle = 'white';
                        ctx.fillRect(xScreen, yScreen, z, z);
                    }

                    if (value === ENTITY_TYPES.ENEMY_SHOT) {
                        ctx.fillStyle = 'yellow';
                        ctx.globalAlpha = z/GRID_SIZE.DEPTH;
                        ctx.fillRect(xScreen, yScreen, z, z);
                        ctx.globalAlpha = 1.0;
                    }

                    if (value === ENTITY_TYPES.WALL) {
                        ctx.fillStyle = 'purple';
                        ctx.globalAlpha = z/GRID_SIZE.DEPTH/2;
                        ctx.fillRect(xScreen, yScreen, z, z);
                        ctx.globalAlpha = 1.0;
                    }
                });
            });
        });
    }
}
