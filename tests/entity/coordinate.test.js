import Coordinate from '../../src/entity/coordinate.js';

test('Is able to create a Coordinate entity', () => {
    const x = 1;
    const y = 2;
    const z = 3;
    const coordinate = new Coordinate(x, y, z);

    expect(coordinate).toBeInstanceOf(Coordinate);
    expect(coordinate.getX()).toEqual(x);
    expect(coordinate.getY()).toEqual(y);
    expect(coordinate.getZ()).toEqual(z);
});
