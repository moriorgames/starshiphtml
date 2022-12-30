import Player from '../../src/entity/player.js';
import {PLAYER_INIT_COORDINATE} from '../../src/definitions/playerInitCoordinate.js';

test('Is able to create a player entity with the right initialized coordinate value', () => {
    const sut = new Player();

    expect(sut).toBeInstanceOf(Player);
    expect(sut.getCurrentCoordinate().getX()).toEqual(PLAYER_INIT_COORDINATE.X);
    expect(sut.getCurrentCoordinate().getY()).toEqual(PLAYER_INIT_COORDINATE.Y);
    expect(sut.getCurrentCoordinate().getZ()).toEqual(PLAYER_INIT_COORDINATE.Z);
});
