//En klass om har hand om data för hela omgången
window.addEventListener("load", init)

function init() {
    startGame()
}

function startGame(){
    let bot1= new SmartBot
    let bot2 = new DumbBot
    let player = document.getElementById("playerName").value
    let guess = document.getElementById("playerInput").value
    let game =new GameState(player)
    
        
        alert("Din tur "+player)
        game.round.timer()
        
        game.round.guessCheck(game.round.getGuess(), game.correctNumb)
        game.round.delay()
       /*  alert("Din tur "+ bot1.name)
        game.round.timer()
        game.round.guessCheck(bot1.guess(), game.correctNumb) */

        
    
    
   /*  alert("player bot1")
    game.round.timer()
    bot1.guess()
    game.round.getGuess()
    game.round.guessCheck()
    game.round.delay() */
    console.log(game.correctNumb)
    
}



 class GameState{
    playerName=this.playerName
    highestLowNumber=1
    lowestHighNumber=20
    playerGuesses=0
    correctNumb=this.correctNumb
    round
    
    
    win=0
    rounds
    constructor(playerName){
        this.playerName=playerName
        this.correctNumb=this.correctNumber()
        this.round=this.gameLoop()

        
        
    }
    correctNumber(){

        let nr = Math.random() * (20 - 1) + 1
        let correctNr = Math.floor(nr)
    
        return correctNr
    }
    

    win(){
        if (win=1){
            alert("du har vunnit")
        }
    }

    gameLoop(){
        
        let round = new Round(this.playerName)
        return round 
        
    }


}



//En klass som hanterar rundor
class Round{
 constructor (playerName) {
     this.playerName=playerName
 }
    turn(name){
    alert("Din tur " + name)
    timer()
       
    }

    timer(){
        let timeleft = 10;
        let answerTimer = setInterval(function(){
            if(timeleft <= 1){
        
                clearInterval(answerTimer);
                document.getElementById("timer").innerText="Tiden är ute"

            } else {

                document.getElementById("timer").innerText=timeleft
        
            }
        
            timeleft -= 1;
        
        }, 1000);
        }


    getGuess(){
    return document.getElementById("playerInput").value 
    }

   async guessCheck(guess, correctNr){
        await sleep(10000)
        if (this.guess === correctNr){
            alert("Gattis"+this.playerName+ "du har Vunnit")
        }else{
            if(guess>correctNr)
            {
                return document.getElementById("playerGuess").innerText="Du gissade för högt"

            }else{
                return document.getElementById("playerGuess").innerText="Du gissade för lågt"

            }
        }
    }
     async delay(){
       
            await sleep(3000);
    
          }
        
}







//delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  let test = new GameState("Olle")
  let test3 = new Round
  
  