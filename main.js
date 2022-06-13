// global variable
var game = new Game();

// query selectors
var originalFighters = document.querySelector(".original-fighters");
var spicyFighters = document.querySelector(".spicy-fighters")
var gameChoices = document.querySelector(".game-choices-view");
var originalGame = document.querySelector(".game-choice-original");
var spicyGame = document.querySelector(".game-choice-spicy");
var resultsView = document.querySelector(".results-view");
var personWins = document.querySelector(".person-wins");
var computerWins = document.querySelector(".computer-wins");
var tie = document.querySelector(".no-wins");
var pickGame = document.querySelector(".pick-game");
var pickFighter = document.querySelector(".pick-fighter");
var resultsIn = document.querySelector(".results");
var computerWins = document.querySelector(".computer-wins-calculator");
var personWins = document.querySelector(".person-wins-calculator");
var changeGameButton = document.querySelector(".change-game");



// event listeners
originalGame.addEventListener('click', pickOriginalGame);
originalFighters.addEventListener('click', pickOriginalFighters);
spicyGame.addEventListener('click', pickSpicyGame);
spicyFighters.addEventListener('click', pickSpicyFighters);


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

function pickSpicyGame(){
  changeGameButton.classList.remove('hidden')
  originalGame.classList.add('hidden')
  spicyGame.classList.add('hidden')
  originalFighters.classList.remove('hidden')
  spicyFighters.classList.remove('hidden')
  pickFighter.classList.remove('hidden')
  pickGame.classList.add('hidden')
}

function pickSpicyFighters(){
  game.pickFighters();
  game.person.takeTurn(event);
  game.generateComputerPick();
  game.decideWinner();
  console.log(game)
}

function resetGame(){
  if(game.category === "Original"){
    setTimeout(pickOriginalGame, 3000);
  } else if(game.category === "Spicy"){
    setTimeout(pickSpicyGame, 3000)
  }

}
