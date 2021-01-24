$('document').ready(() => {

  $('#new-game').click((e) => {
    e.preventDefault();

    let size = $('#enemy-size').val() * 5;
    let quantity = $('#enemy-quantity').val();
    let speed = 2000 - ($('#enemy-speed').val() * 150);

    // If there is a game already started, restart it
    if (window.newGame) {
      window.newGame.reset(size, quantity, speed);
    // Else, start a new game
    } else {
      window.newGame = new Game(size, quantity, speed);
    }
  });

});
