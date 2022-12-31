import Grid from '../entity/grid.js';
import {GRID_SIZE} from '../definitions/gridSize.js';
import Coordinate from '../entity/coordinate.js';
import {ENTITY_TYPES} from '../definitions/entityTypes.js';
import Enemy from '../entity/enemy.js';
import {ENEMIES_INIT} from '../definitions/enemiesInit.js';

export default class EnemyController {
    _newEnemyCounter = 0;
    _enemies = [];

    constructor(grid) {
        this.x = 0;
        this.y = 0;
        if (grid instanceof Grid) {
            this.grid = grid;
        }

        this._enemies.push(new Enemy(15, 10));
    }

    move() {
        this._newEnemyCounter++;
        this._clearEnemiesPanel();
        for (let i = 0; i < this._enemies.length; i++) {
            let enemy = this._enemies[i];
            enemy.move();
            let c = enemy.getCurrentCoordinate();
            this.grid.updateCoordinateValue(c, ENTITY_TYPES.ENEMY);
            if (enemy.shot()) {
                this.grid.updateCoordinateValue(new Coordinate(c.getX(), c.getY(), ENEMIES_INIT.Z + 1), ENTITY_TYPES.ENEMY_SHOT);
            }
            c = null;
        }

        if (this._newEnemyCounter === 50) {
            this._enemies.push(new Enemy(15, 10));
            this._newEnemyCounter = 0;
        }

        console.log(this._enemies.length);
    }

    _clearEnemiesPanel() {
        for (let y = 0; y < GRID_SIZE.HEIGHT; y++) {
            for (let x = 0; x < GRID_SIZE.WIDTH; x++) {
                this.grid.updateCoordinateValue(new Coordinate(x, y, ENEMIES_INIT.Z), ENTITY_TYPES.EMPTY);
            }
        }
    }

    removeEnemyByCoordinate(cc) {
        for (let i = 0; i < this._enemies.length; i++) {
            let enemy = this._enemies[i];
            let c = enemy.getCurrentCoordinate();
            if (c.getX() === cc.getX() && c.getY() === cc.getY() && c.getZ() === cc.getZ()) {
                this.grid.updateCoordinateValue(c, ENTITY_TYPES.EMPTY);
                this._enemies.splice(i, 1);
            }
            c = null;
        }
    }
}
