class Game {
  constructor(level) {
    this.level = level;
  }

  startGame() {
    this.scoreboard = new Scoreboard();
    this.gameboard = new Gameboard(this.level);

    // Create mouseover event for each enemy
    this.gameboard.$node.on('mouseover', '.enemy', () => {
      this.handleCollision();
    })
  }

  handleCollision() {
    this.scoreboard.onCollision();
  }

}

$('document').ready(() => {
  let game = new Game(2);
  game.startGame();
});