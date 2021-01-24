class Gameboard {
  constructor(size, quantity, speed) {
    this.$node = $('<div id="game-board"></div>');
    this.height = .7 * $(window).height();
    this.width = .7 * $(window).width();
    this.setBoard();
    this.makeEnemies(size, quantity);
    this.takeTurn(speed);
  }

  makeEnemies(size, quantity) {
    let enemies = [];

    for (let i = 0; i < quantity; ++i) {
      enemies.push(new Enemy(size, this.height, this.width));
    }

    this.enemies = enemies;
  }

  takeTurn(speed) {
    // Move the enemies once per second
    setInterval(() => {
      this.enemies.forEach((enemy) => {
        enemy.move(speed);
      })
    }, 1000);
  }

  setBoard() {
    let style = {
      height: `${this.height}px`,
      width: `${this.width}px`,
      margin: '20px auto',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'gray'
    };

    this.$node.css(style);

    $('#game').append(this.$node);
  }

}
