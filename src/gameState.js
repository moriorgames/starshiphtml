import GridFactory from './factory/gridFactory.js';
import Player from './entity/player.js';
import {ENTITY_TYPES} from './definitions/entityTypes.js';

export default function updateGameState() {
    const grid = (new GridFactory).create();
    const player = new Player;

    grid.updateCoordinateValue(player.getCurrentCoordinate(), ENTITY_TYPES.PLAYER);
    grid.printGrid();

    console.log('Update game State');
}
