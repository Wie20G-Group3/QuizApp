document.addEventListener("load", init())

function init(){

document.getElementById("player").innerText="Grattis "+ JSON.parse(localStorage.getItem("test")).name+"!!! "+ JSON.parse(localStorage.getItem("test")).number+ " var rätt!"
console.log(JSON.parse(localStorage.getItem("test")))
document.getElementById("total-guess").innerText=JSON.parse(localStorage.getItem("test")).guesses
}




