// global variable
var game = new Game();

// query selectors
var originalFighters = document.querySelector(".original-fighters");
var spicyFigthers = document.querySelector(".spicy-fighters")
var gameChoices = document.querySelector(".game-choices-view");
var originalGame = document.querySelector(".game-choice-original");
var spicyGame = document.querySelector(".game-choice-spicy");
var resultsView = document.querySelector(".results-view");
var personWins = document.querySelector(".person-wins");
var computerWins = document.querySelector(".computer-wins");
var tie = document.querySelector(".no-wins");
var pickGame = document.querySelector(".pick-game");
var pickFighter = document.querySelector(".choose-fighter");
var resultsIn = document.querySelector(".results");
var computerWins = document.querySelector(".computer-wins-calculator");
var personWins = document.querySelector(".person-wins-calculator");
var changeGameButton = document.querySelector(".change-game");



// event listeners

// window.
originalGame.addEventListener('click', pickOriginalGame)
originalFighters.addEventListener('click', pickOriginalFighters)


function pickOriginalGame(){
  changeGameButton.classList.remove('hidden')
  originalFighters.classList.remove('hidden')
  pickFighter.classList.remove('hidden')
  originalGame.classList.add('hidden')
  spicyGame.classList.add('hidden')
  pickGame.classList.add('hidden')
}

function pickOriginalFighters(){
  game.pickFighters();
  game.person.takeTurn(event);
  game.generateComputerPick();
  game.decideWinner();
  console.log(game)
}

// function
// interpolate `${}`


// functions
// setTimeout(function () {
//   reset
// }, 10);
