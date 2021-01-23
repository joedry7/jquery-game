class Gameboard {
  constructor(level) {
    this.$node = $('<div id="game-board"></div>');
    this.setBoard();
    this.makeEnemies(level);
  }

  makeEnemies(level) {
    let nEnemies = level * 5;
    let enemies = [];
    for (let i = 0; i < nEnemies; ++i) {
      enemies.push(new Enemy());
    }
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
