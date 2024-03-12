function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
    if (playerWins > computerWins)
        return "Player won the game";
    else
        return "Computer won the game";
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerWins++;
        return `You win ${playerSelection} beats ${computerSelection}`;
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        computerWins++;
        return `You lose ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerWins++;
        return `You lose ${computerSelection} beats ${playerSelection}`;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerWins++;
        return `You win ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerWins++;
        return `You win ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerWins++;
        return `You lose ${computerSelection} beats ${playerSelection}`;
    }
    else {
        return "draw";
    }
}


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice == 1) {
        return "Rock";
    }
    else if (choice == 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

const playerSelection = prompt("Enter a choice");
const computerSelection = getComputerChoice();
let playerWins = 0;
let computerWins = 0;
//console.log(playRound(playerSelection, computerSelection));
console.log(playGame());