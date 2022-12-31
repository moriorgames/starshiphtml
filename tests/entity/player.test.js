import Player from '../../src/entity/player.js';
import {PLAYER_INIT} from '../../src/definitions/playerInit.js';

test('Is able to create a player entity with the right initialized coordinate value', () => {
    const sut = new Player();

    expect(sut).toBeInstanceOf(Player);
    expect(sut.getCurrentCoordinate().getX()).toEqual(PLAYER_INIT.X);
    expect(sut.getCurrentCoordinate().getY()).toEqual(PLAYER_INIT.Y);
    expect(sut.getCurrentCoordinate().getZ()).toEqual(PLAYER_INIT.Z);
});
