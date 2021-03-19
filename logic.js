document.getElementById("start").addEventListener("click", randomNr)
document.getElementById("start").addEventListener("click", round)
document.getElementById("start").addEventListener("click", start)

let win 

function round(){

    let gameStart = document.getElementById('start')
    gameStart.style.display = 'none'

    let nextRound = document.createElement('button')
    nextRound.innerText = 'nästa runda'
    btnIndex = document.getElementById('btnIndex')
    btnIndex.appendChild(nextRound)
    nextRound.addEventListener('click', start)

}


function randomNr(){

    let nr = Math.random() * (20 - 1) + 1
    
    win = Math.floor(nr)

    console.log(win)
}

function start() {
  

    function playerGuess() {
        let playerInput = document.getElementById('playerInput').value
        document.getElementById('playerGuess').innerText = 'Din gissning = ' + playerInput

        if(playerInput > win) {
            alert('To high, guess lower')
        }else if(playerInput < win){
            alert('To low, guess higher')
        }else if(playerInput == win) {
            alert('you win')
            document.getElementById("number").innerText = 'Rätt svar = ' + win
        }

    }

    playerGuess()

    function randomBot() {

        let botNr = Math.random() * (20 - 1) + 1
        botNr = Math.floor(botNr)
        document.getElementById("botGuess").innerText = 'Din motståndares gissning = ' + Math.floor(botNr)


        if(botNr == win){
            alert('you lose')
            document.getElementById("number").innerText = 'Rätt svar = ' + win
        }
    }
    randomBot()


}