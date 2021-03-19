 class Bot {
    constructor(name){
    this.name=name
    }
    makeGuessTime(guess){
       return setTimeout(guess,  Math.floor(Math.random() * 4500) + 2000)
    }
}

let highestLowNumber = 12
let lowestHighNumber = 16
class SmartBot extends Bot{
    constructor(){
        super("Smart Bot")
    }
    guess(){
        return super.makeGuessTime(()=>console.log(highestLowNumber + Math.floor(Math.random() * 
        (lowestHighNumber - highestLowNumber) + 1))) //Istället för console.log ange en div där värdet skall renderas

    }


}

class DumbBot extends Bot{
    constructor(){
        super("Not so smart Bot")
    }
    guess(){
        return super.makeGuessTime(()=>console.log((Math.floor(Math.random() * 20) + 1))) //Istället för console.log ange en div där värdet skall renderas
    }
    


} 
/* let test = new DumbBot()
test.guess() */
 let test2 = new SmartBot()
test2.guess() 

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  
  async function sample() {
    console.log('a');
    console.log('waiting...')
    let delayres = await sleep(3000);
    console.log('b');
  }
  


  //Game State

  class GameState{

    playerName=this.player
    highestLowNumber=this.highestLowNumber
    lowestHighNumber=this.lowestHighNumber


    
    constructor() {
        this.player=player
        this.win = false;
        this.highestLowNumber = 1;
        this.lowestHighNumber = 20;
        this.highscore = {};
        this.playerGuesses = 0; 
    }

  }