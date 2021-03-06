const options = {
  "rock": "https://github.com/sagunbabu/rpc/blob/sagun/img/RR.png?raw=true",
  "paper": "https://github.com/sagunbabu/rpc/blob/sagun/img/PP.png?raw=true",
  "scissors": "https://github.com/sagunbabu/rpc/blob/sagun/img/SS.png?raw=true"
}

let SCORE = 0;

const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";
  let contest = document.querySelector(".contest");
  contest.style.display = "flex";
  document.getElementById("userPickImage").src = options[hand];
  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
  let hands = ["rock", "paper", "scissors"];
  let cpHand = hands[Math.floor(Math.random() * hands.length)];
  document.getElementById("computerPickImage").src = options[cpHand]
  referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE!");
    setScore(SCORE - 1);
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
    setScore(SCORE - 1);
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
    setScore(SCORE - 1);
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";
  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
}

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
}
