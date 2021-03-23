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
    dumbBot = new DumbBot
    smartBot = new SmartBot 
    
    
    
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
           
            this.timer()
            await this.pause()
            
             if (this.playerName!==this.players[index])
            {   
                if (this.players[index]=="smartBot") {
                    
                    document.getElementById("smartBotOutput").innerHTML=this.smartBot.guess()
                    let playerGuess=this.getGuess("smartBotOutput")
                    let vinst = this.guessCheck(playerGuess, this.correctNumb)
                    if (vinst==1) {
                        console.log("i win" +this.players[index])
                        this.winner=this.players[index]
                        winner = this.winner
                        stats()
                        break
                        /* alert("Du har vunnit " + this.players[index]) */
                    }

                }else{
                    console.log(this.dumbBot.guess())
                    document.getElementById("dumbBotOutput").innerText=this.dumbBot.guess()
                    let playerGuess = this.getGuess("dumbBotOutput")

                    let vinst = this.guessCheck(playerGuess, this.correctNumb)
                    if (vinst==1) {
                        console.log("i win" +this.players[index])
                        this.winner=this.players[index]
                        winner = this.winner
                        stats()
                        break
                        /* alert("Du har vunnit " + this.players[index]) */
                    }
                }
                
            }else{
                this.getGuess("playerInput")
                let playerGuess=this.getGuess("plyerInput")
                let vinst = this.guessCheck(playerGuess, this.correctNumb)
                if (vinst==1) {
                    console.log("i win" +this.players[index])
                    this.winner=this.players[index]
                    winner = this.winner
                    stats()
                    break
                    
                }
            
            /* let playerGuess = this.getGuess("playerInput")
            console.log(playerGuess)
            let vinst = this.guessCheck(playerGuess, this.correctNumb)
            console.log(vinst)
            if (vinst==1) {
                console.log("i win" +this.players[index]) */
                this.winner=this.players[index]
                let winner = this.winner
                this.stats()
                break
                /* alert("Du har vunnit " + this.players[index]) */
            }
            
        }
        await sleep(3000)
        console.log("after last sleep")
        this.gameLoop()
    /* this.gameLoop(); */
    }

    win(){
        if (win=1){
            alert("du har vunnit")
            stats()
        }
    }

    stats() {
        winners = JSON.parse(localStorage.getItem("winners"))
        if (winners !=null) {
            storage.setItem(winners, winner);
        }else{
            winners.push(winner)
            JSON.stringify(winners)
            storage.setItem(winners, winners);
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
        
        getGuess(div){
        return document.getElementById(div).value 
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

  
  
  