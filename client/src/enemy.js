class Enemy {
  constructor(size, boardHeight, boardWidth) {
    this.$node = $(`<div class="enemy"></div>`);
    this.boardHeight = boardHeight;
    this.boardWidth = boardWidth;
    this.setEnemy(size);
  }

  move(speed) {
    // Move to a random place on the board
    let position = {
      top: `${Math.random() * this.boardHeight}px`,
      left: `${Math.random() * this.boardWidth}px`
    }

    this.$node.animate(position, speed)
  }

  setEnemy(size) {
    let style = {
      height: `${size}px`,
      width: `${size}px`,
      borderRadius: '50%',
      backgroundColor: 'black',
      position: 'absolute',
      top: '250px',
      left: '375px'
    }

    this.$node.css(style)
    this.$node.hover(() => {
      this.$node.css({ backgroundColor: 'red' });
    }, () => {
      this.$node.css({ backgroundColor: 'black' });
    })

    $('#game-board').append(this.$node);

    // Move the enemies to their starting points -> A random position on the game board
    let position = {
      top: `${Math.random() * this.boardHeight}px`,
      left: `${Math.random() * this.boardWidth}px`
    }
    this.$node.animate(position, 'slow')
  }

}