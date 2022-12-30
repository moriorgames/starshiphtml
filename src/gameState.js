import {ENTITY_TYPES} from './definitions/entityTypes.js';

export default function updateGameState(player, grid) {

    grid.updateCoordinateValue(player.getCurrentCoordinate(), ENTITY_TYPES.PLAYER);
    // grid.printGrid();

    console.log('Update game State');
}
