window.addEventListener('load', function () {
  'use strict'
  var startNewGameButton = document.querySelector('.startNewGame');
  var field = document.querySelector('.field');
  var cells = document.querySelectorAll('.cell');
  var winnerMessage = document.querySelector('.winner-message');
  var currentClass = 'x';
  var i;


  startNewGameButton.addEventListener('click', function startNewGame() {
    var k;
    for (k = 0; k < cells.length; k++) {
      cells[k].classList.remove('x', 'o');
    }
    winnerMessage.innerHTML = '';
    currentClass = 'x';
  });

  for (i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function handler(e) {
      if (!(e.target.classList.contains('o')) || !(e.target.classList.contains('x'))) {
        e.target.classList.add(currentClass);
        if (currentClass === 'x') {
          currentClass = 'o';
        } else {
          currentClass = 'x';
        }
        if (getWinner() === 'x') {
          winnerMessage.innerHTML = 'Крестик победил';
          return;
        } else if (getWinner() === 'o') {
          winnerMessage.innerHTML = 'Нолик победил';
          return;
        }
      }
    });
  }
});
