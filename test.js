window.addEventListener("load",initsite)
document.getElementById("hide").addEventListener("click", hideBtn)



let playerGuess = document.getElementById("player")
let botGuess = document.getElementById("bot")

function initsite(){
    playerGuess.innerHTML ="3"
    botGuess.innerHTML ="3"


}


function hideBtn(){
    
    
    if (playerGuess.style.display === "none") {
      playerGuess.style.display = "block";
      botGuess.style.display = "block";
    } else {
      playerGuess.style.display = "none";
      botGuess.style.display = "none";
    }
}



