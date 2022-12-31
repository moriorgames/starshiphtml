export default function updateGameState(score, enemyShotController, enemyController, player, grid) {
    enemyController.move();
    enemyController.move();
    enemyController.move();
    enemyController.move();
    enemyShotController.move(score);
}
