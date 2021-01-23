class Gameboard {
  constructor(level) {
    this.$node = $('<div id="game-board"></div>');
    this.level = level;
    this.setBoard();
    this.makeEnemies(level);
    this.takeTurn();
  }

  makeEnemies(level) {
    // Number of enemies is based on the level
    let nEnemies = level * 5;
    let enemies = [];

    for (let i = 0; i < nEnemies; ++i) {
      enemies.push(new Enemy());
    }

    this.enemies = enemies;
  }

  takeTurn() {
    // Speed is based on the level
    let speed = 2000 - (this.level * 300);

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
      border: 'blue 1px solid',
      position: 'relative',
      overflow: 'hidden'
    }

    this.$node.css(style)

    $('body').append(this.$node);
  }

}
