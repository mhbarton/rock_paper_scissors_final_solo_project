class Game{
  constructor(category){
    this.category = category;
    this.fighters = [];
    this.person = new Player("Person", " 웃 ");
    this.computer = new Player("Computer", "💻");
    this.personChoice = personChoice;
    this.computerChoice = computerChoice;
    this.winner = null;
  }
  pickFighters(){
    if(this.category === "Original"){
      this.fighters = ["rock, paper, scissors"];
    }else if(this.category === "Spicy"){
      this.fighters.push["lizard", "Spock"]
    }
  }
  generateComputerPick(){
    this.computerChoice = this.fighters[Math.floor(Math.random() * this.fighters.length)];
    return this.computerChoice;

  }
  decideWinner(){
    if(this.computerChoice === this.personChoice){
      this.winner = " &#128529; It's a draw! &#128529; "
    }else if (
    (this.personChoice === "rock" && this.computerChoice === "scissors") ||
    (this.personChoice === "rock" && this.computerChoice === "lizard") ||
    (this.personChoice === "paper" && this.computerChoice === "Spock") ||
    (this.personChoice === "paper" && this.computerChoice === "rock") ||
    (this.personChoice === "scissors" && this.computerChoice === "paper") ||
    (this.personChoice === "scissors" && this.computerChoice === "lizard") ||
    (this.personChoice === "lizard" && this.computerChoice === "paper") ||
    (this.personChocie === "lizard" && this.computerChoice === "Spock") ||
    (this.personChoice === "Spock" && this.computerChoice === "scissors") ||
    (this.personChocie === "Spock" && this.computerChoice === "rock") ) {
      this.winner =  "웃 Person Wins 웃"
    } else {
      this.winner = "&#128187; Computer Wins &#128187"
    }
  }
}

// human picks :      computer picks:   outcome:
// original
// rock                   rock            tie
// rock                 Scissors          person
// scissors                paper          person
// paper                rock
//
//


// spicy
//
//
//
//
