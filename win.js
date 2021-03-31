document.addEventListener("load", initWin())

function initWin(){

document.getElementById("player").innerText="Grattis "+ JSON.parse(localStorage.getItem("test")).name+"!!! "+ JSON.parse(localStorage.getItem("test")).number+ " var rätt!"
console.log(JSON.parse(localStorage.getItem("test")))
document.getElementById("total-guess").innerText=JSON.parse(localStorage.getItem("test")).guesses
document.getElementById("total-wins").innerText=JSON.parse(localStorage.getItem("test")).wins

let hightscore=JSON.parse(localStorage.getItem("win"))
let sorted = hightscore.sort(function (a, b) {
    return b.Wins - a.Wins;
  });
document.getElementById("top1").innerHTML=sorted[0].Name +" med " + sorted[0].Wins + " vunna matcher"
document.getElementById("top2").innerHTML=sorted[1].Name +" med " + sorted[1].Wins + " vunna matcher"
document.getElementById("top3").innerHTML=sorted[2].Name +" med " + sorted[2].Wins + " vunna matcher"



}




