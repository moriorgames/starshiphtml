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

describe('Grid with same constructor', () => {
    let sut = null;

    beforeEach(() => {
        sut = new Grid(5, 5, 5);
    });

    test('Is able to call Grid constructor and initialize grid with "zero" values', () => {
        expect(sut.getCoordinateValue(new Coordinate(1, 1, 0))).toBe(0);
        expect(sut.getCoordinateValue(new Coordinate(2, 3, 1))).toBe(0);
        expect(sut.getCoordinateValue(new Coordinate(4, 4, 4))).toBe(0);
    });

    test('Is able to print a grid', () => {
        sut.printGrid();
    });

    test('Is able to update a Coordinate value', () => {
        const x = 1;
        const y = 2;
        const z = 3;
        const value = ENTITY_TYPES.PLAYER;
        const coordinate = new Coordinate(x, y, z);
        sut.updateCoordinateValue(coordinate, value);

        expect(sut.getCoordinateValue(coordinate)).toBe(value);
    });
});
