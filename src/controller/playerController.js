import Player from '../entity/player.js';
import {MOVEMENTS} from '../definitions/movements.js';
import {ENTITY_TYPES} from '../definitions/entityTypes.js';
import Grid from '../entity/grid.js';
import Coordinate from '../entity/coordinate.js';

export default class PlayerController {
    constructor(player, grid) {
        if (player instanceof Player) {
            this.player = player;
        }
        if (grid instanceof Grid) {
            this.grid = grid;
        }
    }

    moveLeft() {
        let lastCoordinate = this.player.getCurrentCoordinate();
        let c = new Coordinate(lastCoordinate.getX() - 1, lastCoordinate.getY(), lastCoordinate.getZ());
        if (this.grid.getCoordinateValue(c) !== null) {
            this.player.move(MOVEMENTS.LEFT);
            this.grid.updateCoordinateValue(lastCoordinate, ENTITY_TYPES.EMPTY);
            this.grid.updateCoordinateValue(c, ENTITY_TYPES.PLAYER);
        }
        c = null;
    }

    moveRight() {
        let lastCoordinate = this.player.getCurrentCoordinate();
        let c = new Coordinate(lastCoordinate.getX() + 1, lastCoordinate.getY(), lastCoordinate.getZ());
        if (this.grid.getCoordinateValue(c) !== null) {
            this.player.move(MOVEMENTS.RIGHT);
            this.grid.updateCoordinateValue(lastCoordinate, ENTITY_TYPES.EMPTY);
            this.grid.updateCoordinateValue(c, ENTITY_TYPES.PLAYER);
        }
        c = null;
    }

    moveUp() {
        let lastCoordinate = this.player.getCurrentCoordinate();
        let c = new Coordinate(lastCoordinate.getX(), lastCoordinate.getY() - 1, lastCoordinate.getZ());
        if (this.grid.getCoordinateValue(c) !== null) {
            this.player.move(MOVEMENTS.UP);
            this.grid.updateCoordinateValue(lastCoordinate, ENTITY_TYPES.EMPTY);
            this.grid.updateCoordinateValue(c, ENTITY_TYPES.PLAYER);
        }
        c = null;
    }

    moveDown() {
        let lastCoordinate = this.player.getCurrentCoordinate();
        let c = new Coordinate(lastCoordinate.getX(), lastCoordinate.getY() + 1, lastCoordinate.getZ());
        if (this.grid.getCoordinateValue(c) !== null) {
            this.player.move(MOVEMENTS.DOWN);
            this.grid.updateCoordinateValue(lastCoordinate, ENTITY_TYPES.EMPTY);
            this.grid.updateCoordinateValue(c, ENTITY_TYPES.PLAYER);
        }
        c = null;
    }

    shot() {
        console.log('shot')
        let lastCoordinate = this.player.getCurrentCoordinate();
        let lc = new Coordinate(lastCoordinate.getX() - 1, lastCoordinate.getY(), lastCoordinate.getZ() - 1);
        let rc = new Coordinate(lastCoordinate.getX() + 1, lastCoordinate.getY(), lastCoordinate.getZ() - 1);
        if (this.grid.getCoordinateValue(lc) !== null) {
            this.grid.updateCoordinateValue(lc, ENTITY_TYPES.PLAYER_SHOT);
        }
        if (this.grid.getCoordinateValue(rc) !== null) {
            this.grid.updateCoordinateValue(rc, ENTITY_TYPES.PLAYER_SHOT);
        }
        lc = null;
        rc = null;
    }
}
