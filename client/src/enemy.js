class Enemy {
  constructor() {
    this.$node = $(`<div class="enemy"></div>`);
    this.setEnemy();
  }

  move(speed) {
    let position = {
      top: `${Math.random() * 500}px`,
      left: `${Math.random() * 750}px`
    }
    this.$node.animate(position, speed)
  }

  setEnemy() {
    let style = {
      height: '25px',
      width: '25px',
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
      this.$node.css({backgroundColor: 'black', height: '25px', width: '25px'});
    })

    $('#game-board').append(this.$node);
    let position = {
      top: `${Math.random() * 500}px`,
      left: `${Math.random() * 750}px`
    }
    this.$node.animate(position, 'slow')
  }

}