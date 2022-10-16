let computerScore = 0;
let playerScore = 0;

const rockBtn = document.querySelector(".rock-button");

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if(number === 0) {
        return "rock";
    }
    else if(number === 1) {
        return "scissors";
    }
    else {
        return "paper";
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "Draw!";
    } else if(playerSelection === "rock") {
        if(computerSelection === "scissors") {
            playerScore++;
            return "You Won! Rock beats Scissors";
        } else if(computerSelection === "paper") {
            computerScore++;
            return "You Lose! Paper beats Rock";
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            playerScore++;
            return "You Won! Paper beats Rock";
        } else if(computerSelection === "scissors") {
            computerScore++;
            return "You Lose! Scissors beats Paper"
        }
    } else if(playerSelection === "scissors") {
        if(computerSelection === "paper") {
            playerScore++;
            return "You won! Scissors beats Paper";
        } else if(computerSelection === "rock") {
            computerScore++;
            return "You lost! Rock beats Scissors";
        }
    }
}
            
function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, Scissors?");
    return playerChoice.toLowerCase();
}

function game() {
    computerScore = 0;
    playerScore = 0;
}