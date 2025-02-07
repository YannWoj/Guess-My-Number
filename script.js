"use strict";

// Secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// Score
let score = 20;
// Highscore
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
   const guess = Number(document.querySelector(".guess").value);
   console.log(guess, typeof guess);

   // When there is no input
   if (!guess) {
      document.querySelector(".message").textContent = "⛔ No number!";

      // When player wins
   } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "🎉 Correct Number!";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = secretNumber;

      // Width getting higher when win
      if (window.matchMedia("(max-width: 400px)").matches) {
         document.querySelector(".number").style.width = "15rem";
      } else if (window.matchMedia("(max-width: 600px)").matches) {
         document.querySelector(".number").style.width = "20rem";
      } else {
         document.querySelector(".number").style.width = "30rem";
      }

      if (score > highscore) {
         highscore = score;
         document.querySelector(".highscore").textContent = highscore;
      }

      // When guess is too high
   } else if (guess > secretNumber) {
      if (score > 1) {
         document.querySelector(".message").textContent = "📈 Too high!";
         score--;
         document.querySelector(".score").textContent = score;
      } else {
         document.querySelector(".message").textContent = "💥 Game Over";
         document.querySelector(".score").textContent = "0";
         document.querySelector("body").style.backgroundColor = "#B22222";
      }

      // When guess is too low
   } else if (guess < secretNumber) {
      if (score > 1) {
         document.querySelector(".message").textContent = "📉 Too low!";
         score--;
         document.querySelector(".score").textContent = score;
      } else {
         document.querySelector(".message").textContent = "💥 Game Over";
         document.querySelector(".score").textContent = "0";
         document.querySelector("body").style.backgroundColor = "#B22222";
      }
   }
});

document.querySelector(".again").addEventListener("click", function () {
   score = 20;
   secretNumber = Math.trunc(Math.random() * 20 + 1);
   document.querySelector(".score").textContent = score;
   document.querySelector(".guess").value = "";
   document.querySelector("body").style.backgroundColor = "#222";
   document.querySelector(".message").textContent = "Start guessing...";
   document.querySelector(".number").style.width = "15rem";
   document.querySelector(".number").textContent = "?";
});
