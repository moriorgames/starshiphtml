import Player from '../entity/player.js';
import {MOVEMENTS} from '../definitions/movements.js';

export default class PlayerController {
    constructor(player) {
        if (player instanceof Player) {
            this.player = player;
        }
    }

    moveLeft() {
        this.player.move(MOVEMENTS.LEFT);
    }

    moveRight() {
        this.player.move(MOVEMENTS.RIGHT);
    }

    moveUp() {
        this.player.move(MOVEMENTS.UP);
    }

    moveDown() {
        this.player.move(MOVEMENTS.DOWN);
    }
}
