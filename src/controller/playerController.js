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
        let currentCoordinate = new Coordinate(lastCoordinate.getX() - 1, lastCoordinate.getY(), lastCoordinate.getZ());
        if (this.grid.getCoordinateValue(currentCoordinate) !== null) {
            this.player.move(MOVEMENTS.LEFT);
            this.grid.updateCoordinateValue(lastCoordinate, ENTITY_TYPES.EMPTY);
            this.grid.updateCoordinateValue(currentCoordinate, ENTITY_TYPES.PLAYER);
        }
    }

    moveRight() {
        let lastCoordinate = this.player.getCurrentCoordinate();
        let currentCoordinate = new Coordinate(lastCoordinate.getX() + 1, lastCoordinate.getY(), lastCoordinate.getZ());
        if (this.grid.getCoordinateValue(currentCoordinate) !== null) {
            this.player.move(MOVEMENTS.RIGHT);
            this.grid.updateCoordinateValue(lastCoordinate, ENTITY_TYPES.EMPTY);
            this.grid.updateCoordinateValue(currentCoordinate, ENTITY_TYPES.PLAYER);
        }
    }

    moveUp() {
        let lastCoordinate = this.player.getCurrentCoordinate();
        let currentCoordinate = new Coordinate(lastCoordinate.getX(), lastCoordinate.getY() - 1, lastCoordinate.getZ());
        if (this.grid.getCoordinateValue(currentCoordinate) !== null) {
            this.player.move(MOVEMENTS.UP);
            this.grid.updateCoordinateValue(lastCoordinate, ENTITY_TYPES.EMPTY);
            this.grid.updateCoordinateValue(currentCoordinate, ENTITY_TYPES.PLAYER);
        }
    }

    moveDown() {
        let lastCoordinate = this.player.getCurrentCoordinate();
        let currentCoordinate = new Coordinate(lastCoordinate.getX(), lastCoordinate.getY() + 1, lastCoordinate.getZ());
        if (this.grid.getCoordinateValue(currentCoordinate) !== null) {
            this.player.move(MOVEMENTS.DOWN);
            this.grid.updateCoordinateValue(lastCoordinate, ENTITY_TYPES.EMPTY);
            this.grid.updateCoordinateValue(currentCoordinate, ENTITY_TYPES.PLAYER);
        }
    }
}
