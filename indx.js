//input names
var num = 0;
var player1 = prompt("enter the name of player 1");
var player2 = prompt("enter the name of player 2");
//first dice
var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomImage1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1);

//second dice

var randomNumber2 = Math.floor(Math.random()*6) +1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

//players

var p2 = document.querySelectorAll("h3")[1];
p2.innerHTML = player2;

var p1 = document.querySelectorAll("h3")[0];
p1.innerHTML = player1;
 //conditional statement

 if (randomNumber1 > randomNumber2) {
   document.querySelector("h1").innerHTML = "🚩 Yay! " + player1 + " Wins!";
 }
 else if (randomNumber2>randomNumber1) {
   document.querySelector("h1").innerHTML = "🚩 Yay! " + player2 + " Wins!";

 }
else{
  document.querySelector("h1").innerHTML = "Oops! It's a draw!! 😕";

}
