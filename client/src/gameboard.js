class Gameboard {
  constructor(size, quantity, speed) {
    this.$node = $('<div id="game-board"></div>');
    this.setBoard();
    this.makeEnemies(size, quantity);
    this.takeTurn(speed);
  }

  makeEnemies(size, quantity) {
    let enemies = [];

    for (let i = 0; i < quantity; ++i) {
      enemies.push(new Enemy(size));
    }

    this.enemies = enemies;
  }

  takeTurn(speed) {
    // Move the enemies once per second
    setInterval(() => {
      this.enemies.forEach((enemy) => {
        enemy.move(speed);
      })
    }, 1000)
  }

  setBoard() {
    let style = {
      height: '500px',
      width: '750px',
      margin: '20px auto',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'gray'
    }

    this.$node.css(style)

    $('#game').append(this.$node);
  }

}
