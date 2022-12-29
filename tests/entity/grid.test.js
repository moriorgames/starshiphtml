import Grid from '../../src/entity/grid.js';

test('Throw an error if any of the values on the constructor is not valid', () => {
    try {
        const width = -1;
        const height = -1;
        const depth = -1;
        new Grid(width, height, depth);
        fail('An error should have been thrown');
    } catch (error) {
        expect(error.message).toBe('Invalid values for width, height, and depth');
    }
});

test('Is able to call Grid constructor and initialize grid with "zero" values', () => {
    const width = 5;
    const height = 5;
    const depth = 5;
    const grid = new Grid(width, height, depth);

    expect(grid.getCoordinateValue(0, 0, 0)).toBe(0);
    expect(grid.getCoordinateValue(2, 3, 1)).toBe(0);
    expect(grid.getCoordinateValue(4, 4, 4)).toBe(0);
});

test('Is able to print a grid', () => {
    const width = 5;
    const height = 5;
    const depth = 5;
    const grid = new Grid(width, height, depth);

    grid.printGrid();
});
