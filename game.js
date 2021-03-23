//En klass om har hand om data för hela omgången


function init() {
    
}

function startGame(){
    let smartBot = new SmartBot
    let dumbBot = new DumbBot
    let player = document.getElementById("playerName").value
    let guess = document.getElementById("playerInput").value
    let game = new GameState("olle")
    
        
       
    console.log(game.correctNumb)
    
}



 class GameState{
    players=["olle", "dumbBot", "smartBot"]
    playerName="olle"
    highestLowNumber=1
    lowestHighNumber=20
    playerGuesses=0
    correctNumb=this.correctNumb
    round
    winner 
    
    
    
    win=0
    rounds
    constructor(playerName){
        this.playerName=playerName
        this.correctNumb=this.correctNumber()
        

        
        
    }
    correctNumber(){
        console.log("number")
        let nr = Math.random() * (20 - 1) + 1
        let correctNr = Math.floor(nr)
        this.gameLoop()
        return correctNr
    }
    

   async gameLoop(){
        for (let index = 0; index < this.players.length; index++) {
            
            console.log("gameloop")
            this.timer()
            await this.pause()
            
             if (this.playerName!==this.players[index])
            {   
                console.log(dumbBot.guess())
                console.log(this.players[index].guess)
                this.players[index].guess
                this.getGuess()
            }else{
                this.getGuess()
            } 
            let playerGuess = this.getGuess()
            console.log(playerGuess)
            let vinst = this.guessCheck(playerGuess, this.correctNumb)
            console.log(vinst)
            if (vinst==1) {
                console.log("i win" +this.players[index])
                this.winner=this.players[index]
                break
                /* alert("Du har vunnit " + this.players[index]) */
            }
            
        }
        
        console.log("after last sleep")
    /* this.gameLoop(); */
    }

    win(){
        if (win=1){
            alert("du har vunnit")
        }
    }

    async pause(){
        await sleep(12000)
    }
    
     timer(){
        let timeleft = 10;
        let answerTimer = setInterval(function(){
            if(timeleft < 0){
        
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
        
        guessCheck(guess, correctNr){
            
            if (guess == correctNr){
                return 1
                
                
            }else{
                if(guess>correctNr)
                {
                    return document.getElementById("playerGuess").innerText="Du gissade för högt"
        
                }else{
                    return document.getElementById("playerGuess").innerText="Du gissade för lågt"
        
                }
            }
        }
}











//delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  
  
  