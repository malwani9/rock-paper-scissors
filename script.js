function getComputerChoice() {
  choices = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * 3);
  let comupterChoice = choices[index];
  return comupterChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt("Choices: 0. Rock 1. Paper 2. Scissors", "").toLowerCase();
  if (playerChoice == "rock" || playerChoice == 0) {
    playerChoice = "Rock";
  } else if (playerChoice == "paper" || playerChoice == 1) {
    playerChoice = "Paper";
  } else if (playerChoice == "scissors" || playerChoice == 2) {
    playerChoice = "Scissors";
  } else {
    console.log("Invalid Choice");
    playerChoice = "InValid";
  }
  return playerChoice;
}

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function playRound(computerChoice, playerChoice) {
  computerChoice = getComputerChoice();
  playerChoice = getPlayerChoice();
  let roundWinMessage = ``;

  if (playerChoice == "Rock" && computerChoice == "Scissors") {
    roundWinMessage = `You Won! ${playerChoice} beats ${computerChoice}`;
    playerScore++;
  } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
    roundWinMessage = `You Won! ${playerChoice} beats ${computerChoice}`;
    playerScore++;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    roundWinMessage = `You Won! ${playerChoice} beats ${computerChoice}`;
    playerScore++;
  } else if (playerChoice == computerChoice) {
    roundWinMessage = `Tie! ${playerChoice} = ${computerChoice}`;
    tieScore++;
  } else {
    roundWinMessage = `Computer Won! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  }

  return roundWinMessage;
}

function playGame(rounds = 5){
    let gameWinMassage = ``;
   for(let i = 1; i <= rounds; i++){
     playRound();
   
   if (playerScore > computerScore){
     gameWinMassage = `Player Won the game :). \n 
                        player socre: ${playerScore} \n
                        computer score: ${computerScore} \n
                        Ties: ${tieScore}`; 
   }else if (playerScore == computerScore){
    gameWinMassage = `Tie! Game -_-. \n 
    player socre: ${playerScore} \n
    computer score: ${computerScore}
     Ties: ${tieScore}`; 
   }else{
    gameWinMassage = `Computer Won the game :(. \n 
                        player socre: ${playerScore} \n
                        computer score: ${computerScore} \n
                        Ties: ${tieScore}`;
                         
   }
   }
   return gameWinMassage;
}