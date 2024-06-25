function Player(name) {
  let moves = [];

  function getMoves() {
    return moves;
  }

  return {name, getMoves};
}

let GameBoard = (function () {
  let gameBoard = document.getElementById('gameboard');
 
  function refresh() {
    for(let i = 0; i < gameBoard.children.length; i++) {
      gameBoard.children[i].textContent = '';
    }
  }

  return {refresh};
})();

let GameOperator = (function () {
  let winningCombinations = [
    [1, 2, 3],
    [1, 4, 7],
    [1, 5, 9],
    [2, 5, 8],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9]
  ]

  function checkWinner(playerMoves) {
    winningCombinations.forEach(combination => {
      let winner = true;
      combination.forEach(number => {
        if (! playerMoves.includes(number)) {
          winner = false;
        }
      })
      if (winner) { return true; }
    });
  }

  return {checkWinner};
}) ();


//SECTIONS
let beforeGameSection = document.getElementById('before-game');
let duringGameSection = document.getElementById('during-game');

let modeContainer = document.querySelector('.modeBtnContainer');

modeContainer.addEventListener('click', (event) => {
  let target = event.target;

  if (target.id == 'solo') {
    console.log('solo');
    beforeGameSection.style.display = 'none';
    duringGameSection.style.display = 'block';
  }
  else if (target.id == 'duo') {
    console.log('duo');
    beforeGameSection.style.display = 'none';
    duringGameSection.style.display = 'block';
  }
})