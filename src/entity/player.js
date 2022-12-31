import Coordinate from './coordinate.js';
import {PLAYER_INIT} from '../definitions/playerInit.js';
import {MOVEMENTS} from '../definitions/movements.js';

export default class Player {
    x;
    y;
    z;
    health;

    constructor() {
        this.x = PLAYER_INIT.X;
        this.y = PLAYER_INIT.Y;
        this.z = PLAYER_INIT.Z;
        this.health = PLAYER_INIT.HEALTH;
    }

    getCurrentCoordinate() {
        return new Coordinate(this.x, this.y, this.z);
    }

    getHealth() {
        return this.health;
    }

    getDamage(damage) {
        let health = this.health - damage;
        if (health <= 0) {
            health = 0;
        }
        this.health = health;
    }

    move(direction) {
        if (direction === MOVEMENTS.LEFT) {
            this.x--;
        } else if (direction === MOVEMENTS.RIGHT) {
            this.x++;
        } else if (direction === MOVEMENTS.UP) {
            this.y--;
        } else if (direction === MOVEMENTS.DOWN) {
            this.y++;
        }
    }
}
