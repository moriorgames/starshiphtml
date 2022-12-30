import Grid from '../../src/entity/grid.js';
import GridFactory from '../../src/factory/gridFactory.js';

test('Is able to create a Grid entity', () => {
    const sut = new GridFactory;

    const grid = sut.create();

    expect(grid).toBeInstanceOf(Grid);
});
