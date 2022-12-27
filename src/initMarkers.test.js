import initMarkers from './initMarkers.js';

test('Returns an array with 3 elements', () => {
    let horizon = 50;
    let array = initMarkers(horizon);

    expect(array.length).toBe(3);
});

test('Returns an array with elements with the expected coordinates', () => {
    let horizon = 50;
    let array = initMarkers(horizon);

    expect(array[0][0]).toEqual({x: 100, y: horizon, size: 2});
    expect(array[1][2]).toEqual({x: 300, y: horizon + 65, size: 2});
    expect(array[2][4]).toEqual({x: 500, y: horizon + 130, size: 2});
});

test('Returns an array with elements with the expected size', () => {
    let horizon = 50;
    let array = initMarkers(horizon);

    expect(array[0][3]).toEqual({x: 400, y: horizon, size: 2});
    expect(array[1][1]).toEqual({x: 200, y: horizon + 65, size: 2});
    expect(array[2][3]).toEqual({x: 400, y: horizon + 130, size: 2});
});
