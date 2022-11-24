if (window.performance.navigation.type === 1) {
  rollDice();
}

function rollDice(){

var randomNumber1 = Math.floor(Math.random() * 6) + 1;// 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImages1 = "images/dice" + randomNumber1 + ".png";
var randomImages2 = "images/dice" + randomNumber2 + ".png";


var imageNumber1 = document.querySelectorAll("img")[0];

imageNumber1.setAttribute("src", randomImages1);

var imageNumber2 = document.querySelectorAll("img")[1];

imageNumber2.setAttribute("src", randomImages2);

changeTitle(randomNumber1, randomNumber2);
}

function changeTitle(num1,num2){
  if(num1 === num2){
    document.querySelector("h1").innerHTML = "Draw!";
  }else if(num1 > num2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  }else{
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }
}
