import Grid from '../../src/entity/grid.js';
import Coordinate from '../../src/entity/coordinate.js';
import {ENTITY_TYPES} from '../../src/definitions/entityTypes.js';

test('Throw an error if any of the values on the constructor is not valid', () => {
    try {
        const width = -1;
        const height = -1;
        const depth = -1;
        new Grid(width, height, depth);
        fail('An error should have been thrown');
    } catch (error) {
        expect(error.message).toBe('Invalid values for width, height or depth');
    }
});

test('Is able to call Grid constructor and initialize grid with "zero" values', () => {
    const width = 5;
    const height = 5;
    const depth = 5;
    const grid = new Grid(width, height, depth);

    expect(grid.getCoordinateValue(new Coordinate(0, 0, 0))).toBe(0);
    expect(grid.getCoordinateValue(new Coordinate(2, 3, 1))).toBe(0);
    expect(grid.getCoordinateValue(new Coordinate(4, 4, 4))).toBe(0);
});

test('Is able to print a grid', () => {
    const width = 5;
    const height = 5;
    const depth = 5;
    const grid = new Grid(width, height, depth);

    grid.printGrid();
});

test('Is able to update a Coordinate value', () => {
    const width = 5;
    const height = 5;
    const depth = 5;
    const grid = new Grid(width, height, depth);

    const x = 1;
    const y = 2;
    const z = 3;
    const value = ENTITY_TYPES.PLAYER;
    const coordinate = new Coordinate(x, y, z);
    grid.updateCoordinateValue(coordinate, value);

    expect(grid.getCoordinateValue(coordinate)).toBe(value);
});
