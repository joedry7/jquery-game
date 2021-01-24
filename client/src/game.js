class Game {
  constructor(size, quantity, speed) {
    this.$node = $('<div id="game"></div>')
    this.size = size;
    this.quantity = quantity;
    this.speed = speed;
    this.startGame();
  }

  reset(size, quantity, speed) {
    // Change game settings
    this.size = size;
    this.quantity = quantity;
    this.speed = speed;

    // Reset scoreboard
    this.scoreboard.reset();

    // Create a new gameboard
    $('#game-board').remove();
    this.makeGameboard(this.size, this.quantity, this.speed);
  }

  makeGameboard(...settings) {
    this.gameboard = new Gameboard(...settings);

    // Add event listener to enemy nodes
    this.gameboard.$node.on('mouseover', '.enemy', () => {
      this.handleCollision();
    })
  }

  startGame() {
    $('body').append(this.$node);

    this.scoreboard = new Scoreboard();
    this.makeGameboard(this.size, this.quantity, this.speed);
  }

  handleCollision() {
    this.scoreboard.onCollision();
  }

}
