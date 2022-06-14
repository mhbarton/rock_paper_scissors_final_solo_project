// global variable
var game = new Game();

// query selectors
var originalFighters = document.querySelector(".original-fighters");
var spicyFighters = document.querySelector(".spicy-fighters");
var originalGame = document.querySelector(".game-choice-original");
var spicyGame = document.querySelector(".game-choice-spicy");
var pickGameTagline = document.querySelector(".pick-game-tagline");
var pickFighterTagline = document.querySelector(".pick-fighter-tagline");
var resultsInTagline = document.getElementById("results-tagline");
var personWins = document.getElementById("person-wins-calculator");
var computerWins = document.getElementById("computer-wins-calculator");
var resultsView = document.getElementById("results-view");
var winnerView = document.getElementById("winner-view");
var fightersView = document.querySelector(".fighters-view");
var resultsViewByClass = document.querySelector(".results-view");
var winnerViewByClass = document.querySelector(".winner-view");
var changeGameButton = document.querySelector(".change-game");

// event listeners
originalGame.addEventListener('click', pickOriginalGame);
originalFighters.addEventListener('click', pickOriginalFighters);
spicyGame.addEventListener('click', pickSpicyGame);
spicyFighters.addEventListener('click', pickSpicyFighters);
changeGameButton.addEventListener('click', changeScreen);


function pickOriginalGame(){
  game.category = 'Original';
  resultsView.classList.add('hidden');
  winnerViewByClass.classList.add('hidden');
  changeGameButton.classList.remove('hidden');
  originalFighters.classList.remove('hidden');
  pickFighterTagline.classList.remove('hidden');
  originalGame.classList.add('hidden');
  spicyGame.classList.add('hidden');
  pickGameTagline.classList.add('hidden');
  resultsInTagline.classList.add('hidden');
  fightersView.classList.remove('hidden');
}

function pickOriginalFighters(){
  game.pickFighters();
  game.person.takeTurn(event);
  game.generateComputerPick();
  game.decideWinner();
  resultsViewByClass.classList.remove('hidden');
  winnerView.classList.remove('hidden');
}

function pickSpicyGame(){
  game.category = 'Spicy';
  resultsView.classList.add('hidden');
  winnerView.classList.add('hidden');
  changeGameButton.classList.remove('hidden');
  originalGame.classList.add('hidden');
  spicyGame.classList.add('hidden');
  originalFighters.classList.remove('hidden');
  spicyFighters.classList.remove('hidden');
  pickFighterTagline.classList.remove('hidden');
  pickGameTagline.classList.add('hidden');
  resultsInTagline.classList.add('hidden');
  fightersView.classList.remove('hidden');
}

function pickSpicyFighters(){
  game.pickFighters();
  game.person.takeTurn(event);
  game.generateComputerPick();
  game.decideWinner();
  resultsViewByClass.classList.remove('hidden');
  winnerView.classList.remove('hidden');
}

function showPicks(){
  pickFighterTagline.classList.add('hidden');
  resultsInTagline.classList.remove('hidden');
  resultsView.innerHTML = `
    <article class="person-pick-result">
    <img id="${game.person.currentChoice}" src="./assets/${game.person.currentChoice}icon.svg">
    </article>
    <article class="computer-pick-result">
    <img id="${game.computerChoice}" src="./assets/${game.computerChoice}icon.svg">
    </article>
    `;
    showWinnerOutcome();
}

// // need to resize and reposition the pick icons
function showWinnerOutcome(){
  if(game.winner === "person"){
    winnerView.innerHTML = `<img class="person-icon" src="./assets/personicon.svg"> Person <img class="person-icon" src="./assets/personicon.svg">`;
    personWins.innerHTML = game.person.wins
  }else if(game.winner === "computer"){
    winnerView.innerHTML = `<img class="computer-icon" src="./assets/computericon.svg"> Computer <img class="computer-icon" src="./assets/computericon.svg">`
    computerWins.innerHTML = game.computer.wins
  }else {
    winnerView.innerText = "Oh wait, it's a draw!";
  }
  originalFighters.classList.add('hidden');
  spicyFighters.classList.add('hidden');
  resetGame();

  }

function resetGame(){
  if(game.category === "Original"){
    setTimeout(pickOriginalGame, 3000);
  } else if(game.category === "Spicy"){
    setTimeout(pickSpicyGame, 3000)
  }
}

function changeScreen(){
  event.preventDefault
  originalFighters.classList.add('hidden')
  spicyFighters.classList.add('hidden')
  pickFighterTagline.classList.add('hidden')
  pickGameTagline.classList.remove('hidden')
  originalGame.classList.remove('hidden')
  spicyGame.classList.remove('hidden')
  resultsViewByClass.classList.add('hidden')
  fightersView.classList.add('hidden')
}
