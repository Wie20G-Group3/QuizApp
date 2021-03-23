//En klass om har hand om data för hela omgången
 class GameState{
    playerName=this.playerName
    highestLowNumber=1
    lowestHighNumber=20
    playerGuesses=0
    correctNumb
    round

    winner
    
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

function stats() {
    winners = JSON.parse(localStorage.getItem("winners"))
    if (winners !=null) {
        storage.setItem(winners, winner);
    }else{
        winners.push(winner)
        JSON.stringify(winners)
        storage.setItem(winners, winners);
    }
}



//En klass som hanterar rundor
class Round{
 constructor (playerName) {
     this.playerName=playerName
 }

    timer(){
        let timeleft = 10;
        let answerTimer = setInterval(function(){
            if(timeleft <= 0){
        
                clearInterval(answerTimer);

            } else {

                console.log(timeleft)
        
            }
        
            timeleft -= 1;
        
        }, 1000);
        }


    getGuess(){
    return document.getElementById("playerInput").value 
    }

    guessCheck(guess){
        if (this.guess === super.correctNumber){
            alert("Gattis"+this.playerName+ "du har Vunnit")
        }else{
            if(guess>super.correctNumber)
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
  let test2 = new Round
  
  console.log(test.round.timer())