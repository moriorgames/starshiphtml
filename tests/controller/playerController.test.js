import PlayerController from '../../src/controller/playerController.js';
import Player from '../../src/entity/player.js';
import {PLAYER_INIT_COORDINATE} from '../../src/definitions/playerInitCoordinate.js';

let player = null;
let sut = null;

beforeEach(() => {
    player = new Player;
    sut = new PlayerController(player);
});

test('Is able to create PlayerController class', () => {
    expect(sut).toBeInstanceOf(PlayerController);
});

test('Is able to move player position to Left', () => {
    sut.moveLeft();

    expect(player.getCurrentCoordinate().getX()).toEqual(PLAYER_INIT_COORDINATE.X - 1);
});

test('Is able to move player position to Right', () => {
    sut.moveRight();

    expect(player.getCurrentCoordinate().getX()).toEqual(PLAYER_INIT_COORDINATE.X + 1);
});

test('Is able to move player position to Up', () => {
    sut.moveUp();

    expect(player.getCurrentCoordinate().getY()).toEqual(PLAYER_INIT_COORDINATE.Y - 1);
});

test('Is able to move player position to Down', () => {
    sut.moveDown();

    expect(player.getCurrentCoordinate().getY()).toEqual(PLAYER_INIT_COORDINATE.Y + 1);
});
