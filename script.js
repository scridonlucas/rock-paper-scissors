let computerScore = 0;
let playerScore = 0;
const computerScore1 = document.querySelector(".computer-score");
const playerScore1 = document.querySelector(".player-score");
const playerWpn = document.querySelector(".player-weapon");
const computerWpn = document.querySelector(".computer-weapon");
const decision = document.querySelector(".decision2");
const rockBtn = document.querySelector(".rock-button");
const paperBtn = document.querySelector(".paper-button");
const scissorsBtn = document.querySelector(".scissors-button");
const modal = document.querySelector(".modal");
const finalResult = document.querySelector(".final-result");
const tryAgainBtn = document.querySelector(".play-again");

function checkWinner() {
    if(computerScore === 5 || playerScore === 5) {
        if(playerScore > computerScore) {
            finalResult.textContent = "You Won!";
        }
        else {
            finalResult.textContent = "You Lost!";
        }
        modal.classList.toggle("show-modal");
}
}

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if(number === 0) {
        computerWpn.textContent = "✊";
        return "rock";
    }
    else if(number === 1) {
        computerWpn.textContent = "✌";
        return "scissors";
    }
    else {
        computerWpn.textContent = "✋";
        return "paper";
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "Draw!";
    } else if(playerSelection === "rock") {
        if(computerSelection === "scissors") {
            playerScore++;
            playerScore1.textContent = `Player: ${playerScore}`;
            return "You Won! Rock beats Scissors";
        } else if(computerSelection === "paper") {
            computerScore++;
            computerScore1.textContent = `Computer: ${computerScore}`;
            return "You Lose! Paper beats Rock";
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            playerScore++;
            playerScore1.textContent = `Player: ${playerScore}`;
            return "You Won! Paper beats Rock";
        } else if(computerSelection === "scissors") {
            computerScore++;
            computerScore1.textContent = `Computer: ${computerScore}`;
            return "You Lose! Scissors beats Paper"
        }
    } else if(playerSelection === "scissors") {
        if(computerSelection === "paper") {
            playerScore++;
            playerScore1.textContent = `Player: ${playerScore}`;
            return "You won! Scissors beats Paper";
        } else if(computerSelection === "rock") {
            computerScore++;
            computerScore1.textContent = `Computer: ${computerScore}`;
            return "You lost! Rock beats Scissors";
        }
    }
}

rockBtn.addEventListener('click', () => {
    playerWpn.textContent = "✊";
    decision.textContent = playRound("rock", getComputerChoice());
    checkWinner();
}) 

paperBtn.addEventListener('click', () => {
    playerWpn.textContent = "✋";
    decision.textContent = playRound("paper", getComputerChoice());
    checkWinner();
}) 

scissorsBtn.addEventListener('click', () => {
    playerWpn.textContent = "✌";
    decision.textContent = playRound("scissors", getComputerChoice());
    checkWinner();
}) 

tryAgainBtn.addEventListener('click', () => {
    computerScore = 0;
    playerScore = 0;
    playerWpn.textContent = "❔";
    computerWpn.textContent = "❔";
    playerScore1.textContent = "Player: 0";
    computerScore1.textContent = "Computer: 0";
    modal.classList.toggle("show-modal");
})