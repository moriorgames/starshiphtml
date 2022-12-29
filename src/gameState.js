import GridFactory from './factory/gridFactory.js';

export default function updateGameState() {
    const grid = (new GridFactory).create();

    grid.printGrid();

    console.log('Update game State');
}
