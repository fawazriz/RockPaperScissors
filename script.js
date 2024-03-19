function playRound(playerSelection, computerSelection) 
{
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
        return "rock";
    }
    else if (choice == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function image(decision) {
    if (decision == "rock") {
        return "🥌";
    }
    else if (decision == "paper") {
        return "🧻";
    }
    else if (decision == "scissors") {
        return "✂";
    }
}

let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
//console.log(playRound(playerSelection, computerSelection));
//console.log(playGame());

const btnR = document.querySelector("#rock");
const btnP = document.querySelector("#paper");
const btnS = document.querySelector("#scissors");
const winnerText = document.querySelector("#winner");
let scoreText = document.querySelector("#score");

btnR.addEventListener("click", function () {
    document.querySelector("#playerImg").textContent = image("rock");
    computerSelection = getComputerChoice();
    document.querySelector("#computerImg").textContent = image(computerSelection);
    winnerText.textContent = playRound("rock", computerSelection);
    scoreText.textContent = `${playerWins}:${computerWins}`;
});

btnP.addEventListener("click", function () {
    document.querySelector("#playerImg").textContent = image("paper");
    computerSelection = getComputerChoice();
    document.querySelector("#computerImg").textContent = image(computerSelection);
    winnerText.textContent = playRound("paper", computerSelection);
    scoreText.textContent = `${playerWins}:${computerWins}`;
});

btnS.addEventListener("click", function () {
    document.querySelector("#playerImg").textContent = image("scissors");
    computerSelection = getComputerChoice();
    document.querySelector("#computerImg").textContent = image(computerSelection);
    winnerText.textContent = playRound("scissors", computerSelection);
    scoreText.textContent = `${playerWins}:${computerWins}`;
});