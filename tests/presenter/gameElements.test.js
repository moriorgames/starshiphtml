import GridFactory from '../../src/factory/gridFactory.js';
import GameElements from '../../src/presenter/gameElements.js';

test('Is able to create a Game Elements presenter and execute draw method without errors calling Canvas and Context', () => {
    const canvasDouble = {width: 2, height: 2};
    const ctxDouble = {
        shouldBeCalled: false,
        fillStyle: '',
        fillRect(x, y, w, h) {
            this.shouldBeCalled = true;
        }
    };
    const grid = (new GridFactory).create();

    const sut = new GameElements();

    sut.draw(canvasDouble, ctxDouble, grid);

    expect(ctxDouble.shouldBeCalled).toBeTruthy();
});
