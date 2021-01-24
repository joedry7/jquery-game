class Scoreboard {
  constructor() {
    this.$node = $('<div id="scoreboard"></div>');
    this.currentScore = 0;
    this.highScore = 0;
    this.collisions = 0;
    this.setBoard();
    this.handleScore();
  }

  reset() {
    this.currentScore = 0;
    this.highScore = 0;
    this.collisions = 0;

    $('#collisions').text(this.currentScore);
  }

  onCollision() {
    // Reset score and increment collisions
    this.currentScore = 0;
    $('#current-score').text(this.currentScore);

    ++this.collisions;
    $('#collisions').text(this.collisions);
  }

  handleScore() {
    // Increment score on an interval
    setInterval(() => {
      ++this.currentScore;
      $('#current-score').text(this.currentScore);

      // If the current score surpasses the highscore, update highscore
      if (this.currentScore > this.highScore) {
        this.highScore = this.currentScore;
        $('#high-score').text(this.highScore);
      }
      console.log(this.currentScore)
    }, 100);
  }

  fillBoard() {
    // Start all scores at 0
    let currentScore = $('<p>Current Score: <span id="current-score">0</span></p>');
    let highScore = $('<p>High Score: <span id="high-score">0</span></p>');
    let collisions = $('<p>Collisions: <span id="collisions">0</span></p>');

    this.$node.append(currentScore, highScore, collisions);

    $('p').css({ padding: '0 15px' });
  }

  setBoard() {
    let style = {
      height: '100%',
      width: '500px',
      margin: '0 auto',
      backgroundColor: 'gray',
      display: 'flex'
    }

    this.$node.css(style)

    $('#game').append(this.$node);

    this.fillBoard();
  }

}