import Coordinate from './coordinate.js';
import {PLAYER_INIT_COORDINATE} from '../definitions/playerInitCoordinate.js';

export default class Player {
    constructor() {
        console.log('new Player');
        this.x = PLAYER_INIT_COORDINATE.X;
        this.y = PLAYER_INIT_COORDINATE.Y;
        this.z = PLAYER_INIT_COORDINATE.Z;
    }

    getCurrentCoordinate() {
        return new Coordinate(this.x, this.y, this.z);
    }

    move(direction) {
        // TODO: we need to protect the player from moving out of limits
        if (direction === 'left') {
            this.x--;
        } else if (direction === 'right') {
            this.x++;
        } else if (direction === 'up') {
            this.y--;
        } else if (direction === 'down') {
            this.y++;
        }
    }
}
