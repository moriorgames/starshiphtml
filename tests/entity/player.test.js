import Player from '../../src/entity/player.js';
import {PLAYER_INIT_COORDINATE} from '../../src/definitions/playerInitCoordinate.js';

test('Is able to create a player entity with the right initialized coordinate value', () => {
    const player = new Player();

    expect(player).toBeInstanceOf(Player);
    expect(player.getCurrentCoordinate().getX()).toEqual(PLAYER_INIT_COORDINATE.X);
    expect(player.getCurrentCoordinate().getY()).toEqual(PLAYER_INIT_COORDINATE.Y);
    expect(player.getCurrentCoordinate().getZ()).toEqual(PLAYER_INIT_COORDINATE.Z);
});
