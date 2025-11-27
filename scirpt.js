const Log = console.log;
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter a choice b|w: Rock|Paper|Scissors").toLowerCase();

  if (choice === "rock") {
    return "rock";
  } else if (choice === "paper") {
    return "paper";
  } else if (choice === "scissors") {
    return "scissors";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let count = 1;
  console.log("Welcome to Rock|Paper|Scissors game:");
  function playRound(HumanChoice, ComputerChoice) {
    console.log(`Round No: ${count}`);
    console.log(`You entered: ${HumanChoice}`);
    console.log(`Computer entered: ${ComputerChoice}`);

    if (
      (HumanChoice === "rock" && ComputerChoice === "scissors") ||
      (HumanChoice === "paper" && ComputerChoice === "rock") ||
      (HumanChoice === "scissors" && ComputerChoice === "paper")
    ) {
      console.log(`You won! ${HumanChoice} beats ${ComputerChoice}`);
      humanScore++;
      console.log(`Human score: ${humanScore}`);
      console.log(`Computer score: ${computerScore}`);
    } else if (HumanChoice === ComputerChoice) {
      console.log("It/s a tie! play again");
      console.log(`Human score: ${humanScore}`);
      console.log(`Computer score: ${computerScore}`);
    } else {
      console.log(`You lose! ${ComputerChoice} beats ${HumanChoice}`);
      computerScore++;
      console.log(`Human score: ${humanScore}`);
      console.log(`Computer score: ${computerScore}`);
    }
    count++;
    console.log("\n");
  }

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }


  if (humanScore > computerScore) {
    console.log(
      "***| You have won the game based on results of the 5 rounds |***"
    );
  } else if (computerScore > humanScore) {
    console.log(
      "***| Computer have the game based on results of the 5 rounds |***"
    );
  } else {
    console.log("***| It's a tie |***");
  }
}

playGame();
