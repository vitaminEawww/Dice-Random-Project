var randomNumber1 = Math.floor(Math.random() * 5) + 1;
var randomImage = "dice" + randomNumber1 + ".png";
var randomDice = "images/" + randomImage;
var random1 = document.querySelectorAll('img')[0];
random1.setAttribute("src", randomDice);

var randomNumber2 = Math.floor(Math.random() * 5) + 2;
var randomImage = "dice" + randomNumber2 + ".png";
var randomDice = "images/" + randomImage;
var random2 = document.querySelectorAll('img')[1];
random2.setAttribute("src", randomDice);

//
if ( randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if ( randomNumber1 < randomNumber2 ) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
  }