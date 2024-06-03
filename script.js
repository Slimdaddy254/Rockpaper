let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (winConditions[playerSelection] === computerSelection) {
        return "You win!";
    }

    return "Computer wins!";
}

function updateScore(result) {
    if (result === "You win!") {
        playerScore++;
    } else if (result === "Computer wins!") {
        computerScore++;
    }
}

function displayResult(playerSelection, computerSelection, result) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You chose: ${playerSelection}, Computer chose: ${computerSelection}. ${result}`;
}

function displayScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
}

function checkWinner() {
    if (playerScore === 5) {
        alert("Congratulations! You won the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Sorry, you lost the game.");
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    displayScore();
    document.getElementById('result').textContent = '';
}

document.getElementById('rock').addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateScore(result);
    displayResult(playerSelection, computerSelection, result);
    displayScore();
    checkWinner();
});

document.getElementById('paper').addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateScore(result);
    displayResult(playerSelection, computerSelection, result);
    displayScore();
    checkWinner();
});

document.getElementById('scissors').addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateScore(result);
    displayResult(playerSelection, computerSelection, result);
    displayScore();
    checkWinner();
});
