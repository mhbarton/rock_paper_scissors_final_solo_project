class Player{
  constructor(name, token){
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.currentChoice;
  }
  takeTurn(event){
    this.currentChoice = event.target.id
  }

}
