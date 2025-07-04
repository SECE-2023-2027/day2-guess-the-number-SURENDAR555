const again = document.querySelector(".btn-again");
const num = document.querySelector(".numberValue");
const guess = document.querySelector(".guessValue");
const checkbtn = document.querySelector(".btn-check");
const message = document.querySelector(".message");
const score = document.querySelector(".scoreValue");
const highscore = document.querySelector(".highscoreValue");

let random = Math.trunc(Math.random() * 20) + 1;
let scores = 20;
console.log(random);

//using butto functionality

const checkfunction = () => {
  const guesss = Number(guess.value);
  console.log(guesss);
  if (!guesss) {
    message.textContent = "Please enter a number";
  } else if (scores === 0) {
    {
      message.textContent = "YoU HAVE LOST THE GAME";
      score.textContent = 0;
      document.querySelector("body").style.background = "#ff0000";
      document.querySelector("body").style.transition = "0.5s ease-in-out";
      guess.style.display = "none";
      // checkbtn.style.display = "none";
      checkbtn.style.cursor = "not-allowed";
    }
  } else if (guesss === random) {
    highscore.textContent = scores;
    document.querySelector("body").style.background = "#00ff99";
    document.querySelector("body").style.transition = "0.5s ease-in-out";
    document.querySelector("body").style.color = "#000000";
    message.textContent = "CORRECT NUMBER";
    num.textContent = random;
  } else if (guesss < random) {
    scores--;
    score.textContent = scores;
    message.textContent = "TOO LOW , TRY AGAIN!!!!";
    if (scores === 0) {
      message.textContent = "YOU HAVE LOST THE GAME";
      score.textContent = 0;
      document.querySelector("body").style.background = "#ff0000";
      document.querySelector("body").style.transition = "0.5s ease-in-out";

      guess.style.display = "none";
      checkbtn.style.cursor = "not-allowed";
    }
  } else if (guesss > random) {
    scores--;
    score.textContent = scores;
    message.textContent = "TOO HIGH , TRY AGAIN!!!!";
  }
};

checkbtn.addEventListener("click", checkfunction);

const againfunction = () => {
  document.querySelector("body").style.backgroundColor = "#000000";
  random = Math.trunc(Math.random() * 20) + 1;
  score.textContent = 20;
  scores = 20;
  document.querySelector("body").style.transition = "0.5s ease-in-out";
  document.querySelector("body").style.color = "#ffffff";
  num.textContent = "?";
  message.textContent = "Start guessing...";
  guess.value = "";
  checkbtn.disabled = false;
  highscore.textContent = 0;
  console.log(random);
  guess.style.display = "inline-block";
  checkbtn.style.cursor = "pointer";
};

again.addEventListener("click", againfunction);
