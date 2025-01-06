function getComputerChoice() {
  choices = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * 3);
  comupterChoice = choices[index];
  return comupterChoice;
}


function getPlayerChoice(event) {
  let playerChoice;
  if(event.target.id == "rock"){
    playerChoice = "Rock";
  }else if(event.target.id == "paper"){
    playerChoice = "Paper";
  }else if(event.target.id == "scissors"){
    playerChoice = "Scissors";
  }
  return playerChoice;
}

let  computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let rounds = 0;

function playRound() {
  let roundWinMessage = "";

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
  rounds = playerScore + computerScore + tieScore;
  return roundWinMessage;
}

function showResult(event){
  computerChoice = getComputerChoice();
  playerChoice = getPlayerChoice(event);
  ROUNDMESSAGE.textContent = playRound();
  PLAYERSCORE.textContent = playerScore;
  COMPUTERSCORE.textContent = computerScore;
  if(rounds === 5){
    playGame();
  }
}

function playGame(){
   if (playerScore > computerScore){
     GAMEMESSAGE.textContent = `Player Won the game :). \n 
                        player socre: ${playerScore} \n
                        computer score: ${computerScore} \n
                        Ties: ${tieScore}`; 
   }else if (playerScore == computerScore){
    GAMEMESSAGE.textContent = `Tie! Game -_-. \n 
    player socre: ${playerScore} \n
    computer score: ${computerScore}
     Ties: ${tieScore}`; 
   }else{
    GAMEMESSAGE.textContent = `Computer Won the game :(. \n 
                        player socre: ${playerScore} \n
                        computer score: ${computerScore} \n
                        Ties: ${tieScore}`;
                         
   }
}

let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');

rockButton.addEventListener("click", showResult);
paperButton.addEventListener("click", showResult);
scissorsButton.addEventListener("click", showResult);

let ROUNDMESSAGE = document.getElementById('round-message');
let GAMEMESSAGE = document.getElementById('Game-message');
let PLAYERSCORE = document.getElementById('player-score');
let COMPUTERSCORE = document.getElementById('computer-score');