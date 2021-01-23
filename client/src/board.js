class Board {
  constructor(enemies) {
    this.$node = $('<div id="game-board"></div>');
    this.setBoard();
  }

  setBoard() {
    let style = {
      height: '500px',
      width: '750px',
      margin: '50px auto',
      border: 'blue 1px solid'
    }

    this.$node.css(style)

    $('body').append(this.$node);
  }

}

$('document').ready(() => new Board());