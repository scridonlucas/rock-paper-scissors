function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if(number == 0) {
        return "rock";
    }
    else if(number == 1) {
        return "scissors"
    }
    else {
        return "paper";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerSelection1 = playerSelection.toLowerCase();
    if(playerSelection === computerSelection) {
        return "Draw!"
    } else if (playerSelection === "rock") {
        if(computerSelection === "paper") {
            return "You Lose! Paper beats Rock"
        } else if(computerSelection === "scissors") {
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection === "paper") {
        if(computerSelection === "scissors") {
            return "You Lose! Scissors beats Papaer"
        } else if(computerSelection === "rock") {
            return "You Won! Scissors beats Rock"
        }
    } else if (playerSelection === "scissors") {
        if(computerSelection === "rock") {
            return "You lose! Rock beats Scissors"
        } else if(computerSelection === "Paper") {
            return "You won! Scissors beats Paper"
        }
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        let input = prompt("Rock, Paper, Scissors?");
        playRound(input, getComputerChoice());
    }
}
