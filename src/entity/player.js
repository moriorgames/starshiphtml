import Coordinate from './coordinate.js';
import {PLAYER_INIT_COORDINATE} from '../definitions/playerInitCoordinate.js';
import {MOVEMENTS} from '../definitions/movements.js';

export default class Player {
    constructor() {
        this.x = PLAYER_INIT_COORDINATE.X;
        this.y = PLAYER_INIT_COORDINATE.Y;
        this.z = PLAYER_INIT_COORDINATE.Z;
    }

    getCurrentCoordinate() {
        return new Coordinate(this.x, this.y, this.z);
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
