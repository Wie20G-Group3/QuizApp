window.addEventListener("load", init)
document.getElementById("hide").addEventListener("click", hideBtn)

// let activePlayer = 0;
// document.querySelector(`.player--${activePlayer}`).classList.add('active-player-animation')

function init() {
    getName()
    /* startGame() */
    modalInfo()
}
//starts the game and gets values, values not used for now
function startGame(){
    document.getElementById("startGame").innerHTML=""

    let name = localStorage.getItem("playername")
    let game = new GameState(name)
    document.getElementById("playerName").innerText=game.playerName

    game.modalInfo()
    console.log(game.playerName)
    console.log("Correct number= " +game.correctNumb)

}



 class GameState{
    players=["Dumb", "Smart"]
    playerName=""
    highestLowNumber=1
    lowestHighNumber=20
    playerGuesses=0
    currentPlayer=""
    correctNumb=this.correctNumb
    winner=null
    dumbBot = new DumbBot
    smartBot = new SmartBot
    numberOfGuesse=0
    playerGuess=null
    currentWins
    totalGuesses

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
       
       
        document.getElementById("playerGuess").innerText=""
        for (let index = 0; index < this.players.length; index++) {
            console.log(this.numberOfGuesse)
            this.currentPlayer=this.players[index]
            this.test()
            this.timer()
            await this.pause()

             if (this.playerName!==this.players[index])

            {

                if (this.players[index]=="Smart") {

                    
                    let playerGuess=this.smartBot.guess(this.highestLowNumber, this.lowestHighNumber)
                    document.getElementById("smartBotOutput").innerHTML=playerGuess

                    this.playerGuess=playerGuess
                    console.log(this.playerGuess+ " smartBot")





                }else{

                   
                    let playerGuess = this.dumbBot.guess()
                    document.getElementById("dumbBotOutput").innerText=playerGuess
                    this.playerGuess=playerGuess
                    console.log(this.playerGuess+ " dumbBot")
                    document.getElementById("player1").style.border="none"

                }

            }else{

               
                let playerGuess=this.getGuess("input-number")
                document.getElementById("player-bubble").innerText=playerGuess
                this.playerGuess=playerGuess
                this.numberOfGuesse++


            }


            let win = this.guessCheck(this.playerGuess, this.correctNumb)
                if (win==1) {
                    this.stats()
                    localStorage.setItem("test", JSON.stringify( {
                        name:this.currentPlayer,
                        guesses:this.numberOfGuesse,
                        number:this.correctNumb,
                        wins:this.currentWins
                    }))
                    
                    window.location.href="/win.html"
                    
                   
                    this.winner=this.players[index]
                    let winner = this.winner
                    console.log(this.winner)
                    console.log(this.players[index]+" Have guessed " + this.numberOfGuesse + " times to win!")
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
    
    
    
    stats() {
        
        let game = {
            Name:   this.currentPlayer,
            Wins:   0,
            Guesses:    this.numberOfGuesse,
            Date:  new Date()
        }
       
        console.log(this.currentPlayer)
        
        
        if (!localStorage.getItem('win')) {
            console.log("if")
           let games = []
            games.push(game)
            localStorage.setItem("win", JSON.stringify(games));
            
        }else{
            let games = JSON.parse(localStorage.getItem("win"))
            games.push(game)
            let a = games.findIndex(x => x.Name === this.currentPlayer);
            if(a >= 0){
                games[a].Wins++
                this.currentWins=games[a].Wins
                console.log(games)
                localStorage.setItem("win", JSON.stringify(games));
            
        }
        
        }
    }

   


    restart(){
       let button = document.createElement("button")
       button.innerText="Börja om"
       button.classList.add("buttonstyle")
       button.addEventListener("click", ()=>{startGame()})
       document.getElementById("startGame").appendChild(button)
    }
    test(){
        let player = this.currentPlayer

        console.log(player)
        if (player=="Dumb")
        {
            console.log("dum")

            select("player2")
            remove("player1")
        }else if (player=="Smart") {
            console.log("samrt")
            select("player")
            remove("player2")

        } else if(player !== "Smart" || "Dumb") {
            console.log("player")
            select("player1")
            remove("player")
        }
        function select(player) {

            document.getElementById(player).classList.add('active-player-animation')
        }
        function remove(player) {
            document.getElementById(player).classList.remove('active-player-animation')
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

                document.getElementById("timer").innerText="Tid kvar: "+ timeleft + " sekunder"

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
                    return document.getElementById("playerGuess").innerText=(this.currentPlayer + " gissade "+ this.playerGuess +  " som är för högt")

                }else{
                    return document.getElementById("playerGuess").innerText=(this.currentPlayer + " gissade "+ this.playerGuess +  " som är för lågt")

                }
            }
        }
}

function getName(){

    let playername = localStorage.getItem("playername")

    let playerName = document.getElementById("playerName")
    playerName.innerText = playername
    return playername
}

function modalInfo() {
    let games = JSON.parse(localStorage.getItem("win"))
    
    let a = games.findIndex(x => x.Name === getName())
    let botSmart = games.findIndex(x => x.Name === "Smart")
    let botDumb = games.findIndex(x => x.Name === "Dumb")
    document.getElementById("modalWins").innerHTML="Antal vinster: "+ games[a].Wins
    document.getElementById("smartModal").innerHTML="Antal vinster: "+ games[botSmart].Wins
    document.getElementById("dumbModal").innerHTML="Antal vinster: "+ games[botDumb].Wins
    
    
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





function switchPlayer() {

        document.querySelector(`.player--${activePlayer}`).classList.remove('active-player-animation')
        activePlayer = activePlayer === 0 ? 1:2
        document.querySelector(`.player--${activePlayer}`).classList.add('active-player-animation')
        if (activePlayer===2){
            document.querySelector(`.player--${activePlayer}`).classList.remove('active-player-animation')
            activePlayer = activePlayer === 0 ? 1:2
            document.querySelector(`.player--${activePlayer}`).classList.add('active-player-animation')
        }







}
