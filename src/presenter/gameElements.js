import {GRID_SIZE} from '../definitions/gridSize.js';
import {ENTITY_TYPES} from '../definitions/entityTypes.js';

export default function drawGameElements(canvas, ctx, grid) {
    const fuga = 1.3;
    const data = grid.getData();

    data.forEach(function callback(depth, z) {
        depth.forEach(function callback(height, y) {
            height.forEach(function callback(value, x) {
                // console.log(`${x}/${y}/${z}: ${value}`);

                if (value === ENTITY_TYPES.PLAYER) {
                    ctx.fillStyle = 'white';
                    let size = z;
                    let xVal = (x - (GRID_SIZE.WIDTH / 2)) * (fuga * z) + canvas.width / 2;
                    let yVal = (y - (GRID_SIZE.HEIGHT / 2)) * (fuga * z) + canvas.height / 2;
                    ctx.fillRect(xVal, yVal, size, size);
                }

                if (value === ENTITY_TYPES.ENEMY_SHOT) {
                    ctx.fillStyle = 'yellow';
                    let size = z;
                    let xVal = (x - (GRID_SIZE.WIDTH / 2)) * (fuga * z) + canvas.width / 2;
                    let yVal = (y - (GRID_SIZE.HEIGHT / 2)) * (fuga * z) + canvas.height / 2;
                    ctx.fillRect(xVal, yVal, size, size);
                }
            });
        });
    });
}
