window.addEventListener("load", init)

function init() {
    getName()
}
//starts the game and gets values, values not used for now
function startGame(){   
    let name="Fredrik"
    /* let guess = document.getElementById("playerInput").value */
    let game = new GameState(name)
    document.getElementById("playerName").innerText=game.playerName
    
        
    console.log(game.players)
    console.log("Correct number= " +game.correctNumb)
    
}



 class GameState{
    players=["dumbBot", "smartBot"]
    playerName=""
    highestLowNumber=1
    lowestHighNumber=20
    playerGuesses=0

    correctNumb=this.correctNumb
    winner=null
    dumbBot = new DumbBot
    smartBot = new SmartBot
    numberOfGuesse=0
    playerGuess=null

    win=0
    
    constructor(playerName){
        this.playerName=playerName
        this.correctNumb=this.correctNumber()
    }

    //Calculates the correct number and saves it to correctNumb

    correctNumber(){
        console.log("number")
        let nr = Math.random() * (20 - 1) + 1
        let correctNr = Math.floor(nr)
        this.addUser(this.playerName)
        this.gameLoop()
        return correctNr
    }
    //Adds player to players array
    addUser(playerName){
        this.players.unshift(playerName)
    }
    
    //Main loop to run game
    async gameLoop(){
       
        for (let index = 0; index < this.players.length; index++) {
            console.log(this.numberOfGuesse)
            alert(this.players[index])
            this.timer()
            await this.pause()
            
             if (this.playerName!==this.players[index])
            {   
                if (this.players[index]=="smartBot") {
                    let playerGuess=this.smartBot.guess(this.highestLowNumber, this.lowestHighNumber)
                    document.getElementById("smartBotOutput").innerHTML=playerGuess
                    
                    this.playerGuess=playerGuess
                    console.log(this.playerGuess+ " smartBot")
                 

                }else{
                    let playerGuess = this.dumbBot.guess()
                    document.getElementById("dumbBotOutput").innerText=playerGuess
                    this.playerGuess=playerGuess
                    console.log(this.playerGuess+ " dumbBot")
                   
                }
                
            }else{
                
                let playerGuess=this.getGuess("input-number")
                document.getElementById("player-bubble").innerText=playerGuess
                this.playerGuess=playerGuess
                this.numberOfGuesse++
            }

            
            let win = this.guessCheck(this.playerGuess, this.correctNumb)
                if (win==1) {
                    alert("I win " +this.players[index])
                    this.winner=this.players[index]
                    let winner = this.winner
                    console.log(this.winner)
                    console.log(this.players[index]+" Have guessed " + this.numberOfGuesse + " times to win!")
                    this.stats()
                    return
                }
            await sleep(2000)
            
            console.log(this.playerGuess)
            if (this.playerGuess>this.correctNumb && this.playerGuess<this.lowestHighNumber)
            {
                this.lowestHighNumber=Number(this.playerGuess)
            }if (this.playerGuess<this.correctNumb && this.playerGuess>this.highestLowNumber) {
                this.highestLowNumber = Number(this.playerGuess)
            } 
            console.log(this.highestLowNumber, this.lowestHighNumber)
            
            
        }
        this.gameLoop()
    
    }
    //Not in use, solved with other functions
    win(){
        if (win=1){
            alert("du har vunnit")
            stats()
        }
    }
    //Saves winner to local storage
    stats() {
        let winners=[]
        winners = localStorage.getItem("win")
        if (winners == null) {
            localStorage.setItem("win", this.winner);
        }else{
            winners=[]
            winners.push(this.winner)
            JSON.stringify(winners)
            localStorage.setItem("win", winners);
        }
    }

    //Just a pause, stops all code for 7 seconds
    async pause(){
        await sleep(7000)
    }
    //The countdown that shows on screen

    timer(){
        let timeleft = 5;
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
        //Fetching the value of a div
        getGuess(div){
        return document.getElementById(div).value 
        }
        //Checks if guess is correct and renders info if the guess is too hight or low
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

function getName(){

    let playername = localStorage.getItem("playername")
    
    let pName = document.getElementById("pName")
    pName.innerText = playername
}



function hideBtn(){
    
    let dumbBotOutput= document.getElementById("dumbBotOutput")
    let smartBotOutput = document.getElementById("smartBotOutput")
    
    if (dumbBotOutput.style.display === "none") {
      dumbBotOutput.style.display = "block";
      smartBotOutput.style.display = "block";
    } else {
      dumbBotOutput.style.display = "none";
      smartBotOutput.style.display = "none";
    }
}



//delay
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


function myInputNumber () {
    let myNumber;
    //hämtar värdet från input
    myNumber = document.getElementById("inputNumber").value;

    //kollar som värdet i input är ok
    if (isNaN(myNumber) || myNumber < 1 || myNumber > 20) {
        console.log("Input not valid");
        document.getElementById("numberOutput").innerHTML = "Error - välj 1 - 20!"
       
    } else {
        console.log("input OK")
        //skriver ut valt nummer - OBS! "id" ska korrigeras!
        document.getElementById("numberOutput").innerHTML = "Du valde nummer: " + myNumber;
    }

}
  
  
  