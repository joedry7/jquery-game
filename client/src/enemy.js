class Enemy {
  constructor(size) {
    this.$node = $(`<div class="enemy"></div>`);
    this.setEnemy(size);
  }

  move(speed) {
    // Move to a random place on the board
    let position = {
      top: `${Math.random() * 500}px`,
      left: `${Math.random() * 750}px`
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
      this.$node.css({backgroundColor: 'red', height: '40px', width: '40px'});
    }, () => {
      this.$node.css({backgroundColor: 'black', height: `${size}px`, width: `${size}px`,});
    })

    $('#game-board').append(this.$node);

    // Move the enemies to their starting points -> A random position on the game board
    let position = {
      top: `${Math.random() * 500}px`,
      left: `${Math.random() * 750}px`
    }
    this.$node.animate(position, 'slow')
  }

}