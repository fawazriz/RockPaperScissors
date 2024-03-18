function playGame() {
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();

        
        computerSelection = computerSelection.toLowerCase();

        do {
            playerSelection = prompt("Enter a choice");
            playerSelection = playerSelection.toLowerCase();
        } while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors");

        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerWins == computerWins)
        return "No one won the game. Draw.";
    else if (playerWins > computerWins)
        return "Player won the game";
    else
        return "Computer won the game";
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();


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

let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
//console.log(playRound(playerSelection, computerSelection));
//console.log(playGame());

let btnR = document.querySelector("rock");
btnR.addEventListener("click", console.log(playRound("rock", getComputerChoice())));