class Scoreboard {
  constructor() {
    this.$node = $('<div id="scoreboard"></div>');
    this.currentScore = 0;
    this.highScore = 0;
    this.collisions = 0;
    this.setBoard();
    this.handleScore();
  }

  onCollision() {
    this.currentScore = 0;
    $('#current-score').text(this.currentScore);

    ++this.collisions;
    $('#collisions').text(this.collisions)
  }

  handleScore() {
    setInterval(() => {
      ++this.currentScore;
      $('#current-score').text(this.currentScore);

      if (this.currentScore > this.highScore) {
        this.highScore = this.currentScore;
        $('#high-score').text(this.highScore);
      }
    }, 100);
  }

  fillBoard() {
    let currentScore = $(`<p>Current Score: <span id="current-score">0</span></p>`);
    let highScore = $(`<p>High Score: <span id="high-score">0</span></p>`);
    let collisions = $(`<p>Collisions <span id="collisions">0</span></p>`);

    this.$node.append(currentScore, highScore, collisions);
  }

  setBoard() {
    let style = {
      height: '100px',
      width: '300px',
      margin: '0 auto',
      border: 'blue 1px solid'
    }

    this.$node.css(style)

    $('body').append(this.$node);
    this.fillBoard();
  }

}