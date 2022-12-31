import Coordinate from './coordinate.js';
import {GRID_SIZE} from '../definitions/gridSize.js';

export default class Enemy {
    x;
    y;
    z;
    _shot = false;
    _shotCounter = 0;
    health;

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.z = 4;
        this.health = 10;
    }

    getCurrentCoordinate() {
        return new Coordinate(this.x, this.y, this.z);
    }

    getHealth() {
        return this.health;
    }

    move() {
        if (this._shot === false) {
            let max = 1, min = -1;
            let x = Math.floor(Math.random() * (max - min + 1) + min);
            let y = Math.floor(Math.random() * (max - min + 1) + min);

            if (this.x + x > 0 && this.x + x < GRID_SIZE.WIDTH &&
                this.y + y > 0 && this.y + y < GRID_SIZE.HEIGHT) {
                this.x += x;
                this.y += y;
            }
        } else {
            const waitUntilMove = 6;
            if (this._shotCounter === 0) {
                this._shotCounter++;
            } else {
                this._shotCounter++;
                if (this._shotCounter > waitUntilMove) {
                    this._shotCounter = 0;
                    this._shot = false;
                }
            }
        }
    }

    shot() {
        let rand = Math.floor(Math.random() * 20);
        if (rand <= 1) {
            this._shot = true;
        }

        return this._shot;
    }
}
