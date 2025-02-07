"use strict";

// Secret number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// Score
let score = 20;
// Highscore
let highscore = 0;

// Functions
const displayMessage = function (message) {
   document.querySelector(".message").textContent = message;
};

const updateScore = (newScore) => {
   score = newScore;
   document.querySelector(".score").textContent = score;
};

const updateHighscore = () => {
   if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
   }
};

const resetGame = () => {
   score = 20;
   secretNumber = Math.trunc(Math.random() * 20 + 1);
   document.querySelector(".score").textContent = score;
   document.querySelector(".guess").value = "";
   document.querySelector("body").style.backgroundColor = "#222";
   displayMessage("Start guessing...");
   document.querySelector(".number").style.width = "15rem";
   document.querySelector(".number").textContent = "?";
};

// Check guess
document.querySelector(".check").addEventListener("click", function () {
   const guess = Number(document.querySelector(".guess").value);
   console.log(guess, typeof guess);

   // When there is no input
   if (!guess) {
      displayMessage("⛔ No number!");

      // When player wins
   } else if (guess === secretNumber) {
      displayMessage("🎉 Correct Number!");
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

      updateHighscore();

      // When guess is wrong
   } else if (guess !== secretNumber) {
      if (score > 1) {
         displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
         updateScore(score - 1);
      } else {
         displayMessage("💥 Game Over");
         document.querySelector(".score").textContent = "0";
         document.querySelector("body").style.backgroundColor = "#B22222";
      }
   }
});

// Reset
document.querySelector(".again").addEventListener("click", resetGame);
