window.onload = initSite
document.getElementById("createBtn").addEventListener("click", pushToList)
document.getElementById("logInBtn").addEventListener("click", login)  
    
let playerName = ""
let players = JSON.parse(localStorage.getItem("userList"))
// let playerWinningGames = 0;
let playerAllgames = 0;

function checkUserLogin(){
    if (playerName=== null || undefined){
        players = [];
        player = {name: playerName}
        players.push(player);


    }
    else {

        for (let i=0; i<players.length; i++){
            if(players[i].name === playerName){
                
            }

            if (playerAllgames===0){
                player = {name:playerName, games:playerAllgames}
                players.push(player)
            }
        }
    }
}



let users = []

function loadPremadeUsers(){
initUsers = [
    {
    username: "Shahin",
    
   }, {
    username: "Tim",
    
    }, {
    username: "Fredrick",
    
    }, {
    username: "Susan",
    
    }
]
initUsers = JSON.stringify(initUsers)
users.push(initUsers)
localStorage.setItem("userList", users)
}

function initSite() {

if (localStorage.getItem("userList") === null) {

  loadPremadeUsers()
}

} 

function pushToList(){

    let newUser = {
        username: document.getElementById("createName").value,
        
    }
    
    users = localStorage.getItem("userList")

    users = JSON.parse(users)
    users.push(newUser)

    users = JSON.stringify(users)
    localStorage.setItem("userList", users)

    //alert("account created, you can now log in.")
    alert("Ditt konto är nu skapat och du kan logga in.")

}

function getLoggedInUser() {
    return localStorage.getItem("loggedInUser")
}

function getUsers() {
    let userList = localStorage.getItem("userList")
    
    if(!userList) {
        return []
    }

    userList = JSON.parse(userList)
    return userList
}

function login() {
    const username = document.getElementById("usernameInput").value
   
   
    const userList  = getUsers()
    
    let foundUser = undefined

    userList.forEach((users) => {
        if(username  == users.username) {
            foundUser = users
        }
    })
    if(foundUser) {
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser))
        alert("Du är inloggad!")
        window.location = "/index.html"
       
    } 
}

function logOut() {
    localStorage.removeItem("loggedInUser")
    showLogin()
}

function hideLogin() {
    document.getElementById("loginContent").classList.add("hidden")
    document.getElementById("logoutContent").classList.remove("hidden")
}

function showLogin() {
    document.getElementById("loginContent").classList.remove("hidden")
    document.getElementById("logoutContent").classList.add("hidden")
}