var player1 = prompt("1. oyunucnun adını giriniz");
var player2 = prompt("2.oyuncunun adını giriniz ");


document.querySelectorAll("p")[0].textContent = player1;
document.querySelectorAll("p")[1].textContent = player2;


var randomNumber1 = Math.floor(Math.random()*6+1);

document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random()*6+1);

document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png");



if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Draw";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = player1 +" Won";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = player2+" Won";
}
