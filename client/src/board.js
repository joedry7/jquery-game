class Board {
  constructor(enemies) {
    this.$node = $('<div id="game-board"></div>');
    this.setBoard();
    this.makeEnemies(enemies);
  }

  makeEnemies(n) {
    let enemies = [];
    for (let i = 0; i < n; ++i) {
      enemies.push(new Enemy());
    }
  }

  setBoard() {
    let style = {
      height: '500px',
      width: '750px',
      margin: '50px auto',
      border: 'blue 1px solid',
      position: 'relative',
      overflow: 'hidden'
    }

    this.$node.css(style)

    $('body').append(this.$node);
  }

}

$('document').ready(() => new Board(10));