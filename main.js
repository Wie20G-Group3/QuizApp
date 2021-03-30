let startButton = document.getElementById("startBtn")
let playerName = "";
let playedGames = 0;
let playerList = JSON.parse(localStorage.getItem("userList"))

function checkPlayer() {
    
    if (playerList === null || undefined) {
        playerList = [];
        player = {name: playerName}
        playerList.push(player);
    }
    else {
        for (let i = 0; i < playerList.length; i++) {
            if (playerList[i].name === playerName) {
                console.log("pushed")
            }
        }
        if (playedGames === 0) {
            player = {name: playerName}
            playerList.push(player);
        }

    }
}

function login() {
    playerName = document.getElementById("nameField").value;
    if (playerName === "") {
        alert("Du måste fylla i ett namn") //Name field cant be empty"
    }
    else {
        checkPlayer();
        setLocalData();
        window.location.href="game.html";
    }
} 

function setLocalData() {
    localStorage.setItem('userList',JSON.stringify(playerList));
    localStorage.setItem("playername", playerName);

}

startButton.addEventListener("click", login)