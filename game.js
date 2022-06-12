class Game{
  constructor(){
    this.category = "Original" || "Spicy";
    this.fighters = [];
    this.person = new Player("Person", " 웃 ");
    this.computer = new Player("Computer", "💻");
    this.computerChoice = null;
    this.winner = null;
  }
  pickFighters(){
    if(this.category === "Original"){
      this.fighters = ["rock", "paper", "scissors"];
    }else if(this.category === "Spicy"){
      this.fighters = ["rock", "paper", "scissor", "lizard", "Spock"]
    }
  }
  generateComputerPick(){
    this.computerChoice = this.fighters[Math.floor(Math.random() * this.fighters.length)]
    return this.computerChoice;
  }

  decideWinner(){
    if(this.computerChoice === this.person.currentChoice){
      this.winner = " &#128529; It's a draw! &#128529; "
    }else if (
    (this.person.currentChoice === "rock" && this.computerChoice === "scissors") ||
    (this.person.currentChoice === "rock" && this.computerChoice === "lizard") ||
    (this.person.currentChoice === "paper" && this.computerChoice === "Spock") ||
    (this.person.currentChoice === "paper" && this.computerChoice === "rock") ||
    (this.person.currentChoice === "scissors" && this.computerChoice === "paper") ||
    (this.person.currentChoice === "scissors" && this.computerChoice === "lizard") ||
    (this.person.currentChoice === "lizard" && this.computerChoice === "paper") ||
    (this.person.currentChoice === "lizard" && this.computerChoice === "Spock") ||
    (this.person.currentChoice === "Spock" && this.computerChoice === "scissors") ||
    (this.person.currentChoice === "Spock" && this.computerChoice === "rock") ) {
      this.winner =  "웃 Person Wins 웃"
      this.person.wins ++
    } else {
      this.winner = "&#128187; Computer Wins &#128187"
      this.computer.wins ++
    }
  }
}
