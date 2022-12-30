import Coordinate from '../../src/entity/coordinate.js';

test('Is able to create a Coordinate entity', () => {
    const x = 1;
    const y = 2;
    const z = 3;
    const sut = new Coordinate(x, y, z);

    expect(sut).toBeInstanceOf(Coordinate);
    expect(sut.getX()).toEqual(x);
    expect(sut.getY()).toEqual(y);
    expect(sut.getZ()).toEqual(z);
});
