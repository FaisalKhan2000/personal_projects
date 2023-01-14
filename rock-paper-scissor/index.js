// let player1;
// let player2;

// if (player1 === "rock" && player2 === "rock") {
//   console.log("draw");
// } else if (player1 === "rock" && player2 === "paper") {
//   console.log("player2 wins");
// } else if (player1 === "rock" && player2 === "scissors") {
//   console.log("player1 wins");
// } else if (player1 === "paper" && player2 === "rock") {
//   console.log("player1 wins");
// } else if (player1 === "paper" && player2 === "paper") {
//   console.log("draw");
// } else if (player1 === "paper" && player2 === "scissors") {
//   console.log("player2 wins");
// } else if (player1 === "scissors" && player2 === "rock") {
//   console.log("player2 wins");
// } else if (player1 === "scissors" && player2 === "paper") {
//   console.log("player1 wins");
// } else if (player1 === "scissors" && player2 === "scissors") {
//   console.log("draw");
// }

// btns

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
let output = document.getElementById("output");
let scoreEl = document.getElementById("score");
let computerOutput;

scoreEl.textContent = 0;

function randomGenerator() {
  let num = Math.floor(Math.random() * 3) + 1;

  if (num === 1) {
    computerOutput = "rock";
  } else if (num === 2) {
    computerOutput = "paper";
  } else if (num === 3) {
    computerOutput = "scissor";
  }
}

rockBtn.addEventListener("click", () => {
  randomGenerator();
  let player1 = "rock";
  let player2 = computerOutput;
  if (player1 === "rock" && player2 === "rock") {
    output.textContent = "draw";
  } else if (player1 === "rock" && player2 === "paper") {
    output.textContent = "paper & computer wins";
    scoreEl.textContent--;
  } else if (player1 === "rock" && player2 === "scissor") {
    output.textContent = "scissor and you win";
    scoreEl.textContent++;
  }
});

paperBtn.addEventListener("click", () => {
  randomGenerator();
  let player1 = "paper";
  let player2 = computerOutput;
  if (player1 === "paper" && player2 === "rock") {
    output.textContent = "rock you win";
    scoreEl.textContent++;
  } else if (player1 === "paper" && player2 === "scissor") {
    output.textContent = "scissor & computer wins";
    scoreEl.textContent--;
  } else if (player1 === "paper" && player2 === "paper") {
    output.textContent = "Draw";
  }
});

scissorBtn.addEventListener("click", () => {
  randomGenerator();
  let player1 = "scissor";
  let player2 = computerOutput;
  if (player1 === "scissor" && player2 === "rock") {
    output.textContent = "rock computer win";
    scoreEl.textContent--;
  } else if (player1 === "scissor" && player2 === "scissor") {
    output.textContent = "draw";
  } else if (player1 === "scissor" && player2 === "paper") {
    output.textContent = "paper & you wins";
    scoreEl.textContent++;
  }
});
