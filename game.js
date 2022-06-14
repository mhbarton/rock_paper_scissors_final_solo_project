class Game{
  constructor(category){
    this.category = category;
    this.fighters = [];
    this.person = new Player('Person', ' 웃 ');
    this.computer = new Player('Computer', '💻');
    this.computerChoice = null;
    this.winner = this.winner;
  }
  pickFighters(){
    if(this.category === 'Original'){
      this.fighters = ['rock', 'paper', 'scissor'];
    }else if(this.category === 'Spicy'){
      this.fighters = ['rock', 'paper', 'scissor', 'lizard', 'spock']
    }
  }
  generateComputerPick(){
    this.computerChoice = this.fighters[Math.floor(Math.random() * this.fighters.length)]
    return this.computerChoice;
  }

  decideWinner(){
    if(this.computerChoice === this.person.currentChoice){
      this.winner = 'Oh wait, it\'s a draw'
    }else if (
      (this.person.currentChoice === 'rock' && this.computerChoice === 'scissor') ||
      (this.person.currentChoice === 'rock' && this.computerChoice === 'lizard') ||
      (this.person.currentChoice === 'paper' && this.computerChoice === 'spock') ||
      (this.person.currentChoice === 'paper' && this.computerChoice === 'rock') ||
      (this.person.currentChoice === 'scissor' && this.computerChoice === 'paper') ||
      (this.person.currentChoice === 'scissor' && this.computerChoice === 'lizard') ||
      (this.person.currentChoice === 'lizard' && this.computerChoice === 'paper') ||
      (this.person.currentChoice === 'lizard' && this.computerChoice === 'spock') ||
      (this.person.currentChoice === 'spock' && this.computerChoice === 'scissor') ||
      (this.person.currentChoice === 'spock' && this.computerChoice === 'rock') ) {
      this.winner =  'person'
      this.person.wins ++
    } else {
      this.winner = 'computer'
      this.computer.wins ++
    }
      showPicks();
  }
}
