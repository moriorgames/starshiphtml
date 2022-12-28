import Grid from '../src/grid.js';

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
