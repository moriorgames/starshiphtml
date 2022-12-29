import {ENTITY_TYPES} from '../definitions/entityTypes.js';

export default function drawGameElements(canvas, ctx, grid) {
    const gridFactor = 40;

    const data = grid.getData();

    data.forEach(function callback(depth, z) {
        depth.forEach(function callback(height, y) {
            height.forEach(function callback(value, x) {
                // console.log(`${x}/${y}/${z}: ${value}`);

                if (value === ENTITY_TYPES.PLAYER) {
                    ctx.fillStyle = 'white';
                    const size = z;
                    ctx.fillRect(x * gridFactor, y * gridFactor, size, size);
                }

                if (value === ENTITY_TYPES.ENEMY_SHOT) {
                    ctx.fillStyle = 'yellow';
                    const size = z;
                    ctx.fillRect(x * gridFactor, y * gridFactor, size, size);
                }
            });
        });
    });
}
