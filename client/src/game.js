class Game {
  constructor(level) {
    this.level = level;
    this.highScore = 0;
    this.currentScore = 0;
    this.collisions = 0;
  }

  startGame() {
    this.scoreboard = new Scoreboard();
    this.gameboard = new Gameboard(this.level);
  }

}

$('document').ready(() => {
  let game = new Game(2);
  game.startGame();
});