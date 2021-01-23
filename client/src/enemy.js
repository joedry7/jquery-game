class Enemy {
  constructor() {
    this.$node = $(`<div class="enemy"></div>`);
    this.setEnemy();
  }

  setEnemy() {
    let style = {
      height: '20px',
      width: '20px',
      borderRadius: '50%',
      backgroundColor: 'black',
      position: 'absolute',
      top: '250px',
      left: '375px'
    }

    this.$node.css(style)
    this.$node.hover(() => {
      this.$node.css('background-color', "red");
    }, () => {
      this.$node.css('background-color', "black");
    })

    $('#game-board').append(this.$node);
    let position = {
      top: `${Math.random() * 500}px`,
      left: `${Math.random() * 750}px`
    }
    this.$node.animate(position, 'slow')
  }

}