export default function updateGameState(score, enemyShotController, enemyController, player, grid) {

    enemyController.move();
    enemyController.move();
    enemyController.move();
    enemyController.move();
    enemyShotController.move(score);

    // grid.printGrid();

    console.log('Update game State');
}
