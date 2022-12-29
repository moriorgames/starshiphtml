import Grid from '../../src/entity/grid.js';
import GridFactory from '../../src/factory/gridFactory.js';

test('Is able to create a Grid entity', () => {
    const grid = (new GridFactory).create();

    expect(grid).toBeInstanceOf(Grid);
});
