

function renderHighscore () {
    

let hightscore=JSON.parse(localStorage.getItem("win"))
let sorted = hightscore.sort(function (a, b) {
    return b.Wins - a.Wins;
  });
  
document.getElementById("top1").innerHTML=sorted[0].Name +" med " + sorted[0].Wins + " vunna matcher"
document.getElementById("top2").innerHTML=sorted[1].Name +" med " + sorted[1].Wins + " vunna matcher"
document.getElementById("top3").innerHTML=sorted[2].Name +" med " + sorted[2].Wins + " vunna matcher"
}
renderHighscore()