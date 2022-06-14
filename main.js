// global variable
var game = new Game();

// query selectors
var originalFighters = document.querySelector(".original-fighters");
var spicyFighters = document.querySelector(".spicy-fighters")
var originalGame = document.querySelector(".game-choice-original");
var spicyGame = document.querySelector(".game-choice-spicy");
var resultsView = document.getElementById("results-view");
var pickGameTagline = document.querySelector(".pick-game-tagline");
var pickFighterTagline = document.querySelector(".pick-fighter-tagline");
var resultsInTagline = document.getElementById("results-tagline");
var computerWins = document.querySelector(".computer-wins-calculator");
var personWins = document.querySelector(".person-wins-calculator");
var changeGameButton = document.querySelector(".change-game");
var winnerView = document.getElementById("winner-view")



// event listeners
originalGame.addEventListener('click', pickOriginalGame);
originalFighters.addEventListener('click', pickOriginalFighters);
spicyGame.addEventListener('click', pickSpicyGame);
spicyFighters.addEventListener('click', pickSpicyFighters);
// changeButton.addEventListener('click', changeScreen);


function pickOriginalGame(){
  changeGameButton.classList.remove('hidden')
  originalFighters.classList.remove('hidden')
  pickFighterTagline.classList.remove('hidden')
  originalGame.classList.add('hidden')
  spicyGame.classList.add('hidden')
  pickGameTagline.classList.add('hidden')
}

function pickOriginalFighters(){
  game.pickFighters();
  game.person.takeTurn(event);
  game.generateComputerPick();
  game.decideWinner();
  resetGame();
  console.log(game)
}

function pickSpicyGame(){
  changeGameButton.classList.remove('hidden')
  originalGame.classList.add('hidden')
  spicyGame.classList.add('hidden')
  originalFighters.classList.remove('hidden')
  spicyFighters.classList.remove('hidden')
  pickFighterTagline.classList.remove('hidden')
  pickGameTagline.classList.add('hidden')
}

function pickSpicyFighters(){
  game.pickFighters();
  game.person.takeTurn(event);
  game.generateComputerPick();
  game.decideWinner();
  // resetGame();
  console.log(game)
}

function showPicks(){
  pickFighterTagline.classList.add('hidden');
  resultsInTagline.classList.remove('hidden');
  // resultsView.innerHTML = "";
    showWinnerOutcome();
  resultsView.innerHTML = `
    <article class="person-pick-result">
    <img id="${game.person.currentChoice}" src="./assets/${game.person.currentChoice}icon.svg">
    </article>
    <article class="computer-pick-result">
    <img id="${game.computerChoice}" src="./assets/${game.computerChoice}icon.svg">
    </article>
    `;
    originalFighters.classList.add('hidden');
    // showWinnerOutcome();
}

// // need to resize and reposition the pick icons
function showWinnerOutcome(){
  if(game.winner === "person"){
    game.person.wins = game.wins
    winnerView.innerHTML = "Person";
  }else if(game.winner === "computer"){
    winnerView.innerHTML = "Computer"
  }else {
    winnerView.innerText = "Oh wait, it's a draw!";
  }
  }

function resetGame(){
  if(game.category === "Original"){
    setTimeout(pickOriginalGame, 1000);
  } else if(game.category === "Spicy"){
    setTimeout(pickSpicyGame, 1000)
  }
}
