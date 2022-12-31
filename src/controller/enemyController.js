import Grid from '../entity/grid.js';
import {GRID_SIZE} from '../definitions/gridSize.js';
import Coordinate from '../entity/coordinate.js';
import {ENTITY_TYPES} from '../definitions/entityTypes.js';
import Enemy from '../entity/enemy.js';

export default class EnemyController {
    _enemies = [];

    constructor(grid) {
        this.x = 0;
        this.y = 0;
        if (grid instanceof Grid) {
            this.grid = grid;
        }

        this._enemies.push(new Enemy(15, 10));
        // this._enemies.push(new Enemy(7, 9));
        // this._enemies.push(new Enemy(12, 11));
        // this._enemies.push(new Enemy(14, 10));
    }

    move() {
        this._clearEnemiesPanel();
        for (let i = 0; i < this._enemies.length; i++) {
            let enemy = this._enemies[i];
            enemy.move();
            this.grid.updateCoordinateValue(enemy.getCurrentCoordinate(), ENTITY_TYPES.ENEMY);
            if (enemy.shot()) {
                let c = enemy.getCurrentCoordinate();
                this.grid.updateCoordinateValue(new Coordinate(c.getX(), c.getY(), 5), ENTITY_TYPES.ENEMY_SHOT);
                c = null;
            }
        }
    }

    _clearEnemiesPanel() {
        for (let y = 0; y < GRID_SIZE.HEIGHT; y++) {
            for (let x = 0; x < GRID_SIZE.WIDTH; x++) {
                this.grid.updateCoordinateValue(new Coordinate(x, y, 4), ENTITY_TYPES.EMPTY);
            }
        }
    }
}
