import PlayerController from '../../src/controller/playerController.js';
import Player from '../../src/entity/player.js';
import {ENTITY_TYPES} from '../../src/definitions/entityTypes.js';
import {PLAYER_INIT} from '../../src/definitions/playerInit.js';
import Grid from '../../src/entity/grid.js';
import GridFactory from '../../src/factory/gridFactory.js';

let player = null;
let grid = null;
let sut = null;

describe('Grid created with Grid Factory', () => {
    beforeEach(() => {
        player = new Player;
        grid = (new GridFactory()).create();
        sut = new PlayerController(player, grid);
    });

    test('Is able to create PlayerController class', () => {
        expect(sut).toBeInstanceOf(PlayerController);
    });

    test('Is able to move player position to Left and update grid coordinate', () => {
        let lastCoordinate = player.getCurrentCoordinate();

        sut.moveLeft();

        let currentCoordinate = player.getCurrentCoordinate();

        expect(currentCoordinate.getX()).toEqual(PLAYER_INIT.X - 1);
        expect(grid.getCoordinateValue(lastCoordinate)).toEqual(ENTITY_TYPES.EMPTY);
        expect(grid.getCoordinateValue(currentCoordinate)).toEqual(ENTITY_TYPES.PLAYER);
    });

    test('Is able to move player position to Right and update grid coordinate', () => {
        let lastCoordinate = player.getCurrentCoordinate();

        sut.moveRight();

        let currentCoordinate = player.getCurrentCoordinate();

        expect(currentCoordinate.getX()).toEqual(PLAYER_INIT.X + 1);
        expect(grid.getCoordinateValue(lastCoordinate)).toEqual(ENTITY_TYPES.EMPTY);
        expect(grid.getCoordinateValue(currentCoordinate)).toEqual(ENTITY_TYPES.PLAYER);
    });

    test('Is able to move player position to Up and update grid coordinate', () => {
        let lastCoordinate = player.getCurrentCoordinate();

        sut.moveUp();

        let currentCoordinate = player.getCurrentCoordinate();

        expect(currentCoordinate.getY()).toEqual(PLAYER_INIT.Y - 1);
        expect(grid.getCoordinateValue(lastCoordinate)).toEqual(ENTITY_TYPES.EMPTY);
        expect(grid.getCoordinateValue(currentCoordinate)).toEqual(ENTITY_TYPES.PLAYER);
    });

    test('Is able to move player position to Down and update grid coordinate', () => {
        let lastCoordinate = player.getCurrentCoordinate();

        sut.moveDown();

        let currentCoordinate = player.getCurrentCoordinate();

        expect(currentCoordinate.getY()).toEqual(PLAYER_INIT.Y + 1);
        expect(grid.getCoordinateValue(lastCoordinate)).toEqual(ENTITY_TYPES.EMPTY);
        expect(grid.getCoordinateValue(currentCoordinate)).toEqual(ENTITY_TYPES.PLAYER);
    });
});


describe('Small Grid to trigger out of bounds', () => {
    beforeEach(() => {
        player = new Player;
        grid = new Grid(5, 5, 5);
        sut = new PlayerController(player, grid);
    });

    test('Is NOT able to move player to Left out of bounds from the Grid', () => {
        sut.moveLeft();

        let currentCoordinate = player.getCurrentCoordinate();

        expect(currentCoordinate.getX()).toEqual(PLAYER_INIT.X);
    });

    test('Is NOT able to move player to Right out of bounds from the Grid', () => {
        sut.moveRight();

        let currentCoordinate = player.getCurrentCoordinate();

        expect(currentCoordinate.getX()).toEqual(PLAYER_INIT.X);
    });

    test('Is NOT able to move player to Up out of bounds from the Grid', () => {
        sut.moveUp();

        let currentCoordinate = player.getCurrentCoordinate();

        expect(currentCoordinate.getY()).toEqual(PLAYER_INIT.Y);
    });

    test('Is NOT able to move player to Down out of bounds from the Grid', () => {
        sut.moveDown();

        let currentCoordinate = player.getCurrentCoordinate();

        expect(currentCoordinate.getY()).toEqual(PLAYER_INIT.Y);
    });
});
