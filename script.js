function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);

    // Assign rock, paper, or scissors based on the random number
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase
    playerSelection = playerSelection.toLowerCase();

    // Define win conditions
    const winConditions = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    // Check if it's a tie
    if (playerSelection === computerSelection) {
        return "tie";
    }

    // Check if player wins
    if (winConditions[playerSelection] === computerSelection) {
        return "player";
    }

    // If it's not a tie and the player hasn't won, then the computer wins
    return "computer";
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
        const computerSelection = getComputerChoice(); // Assuming you have a function to get computer's choice

        const result = playRound(playerSelection, computerSelection);

        if (result === "player") {
            playerScore++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        } else if (result === "computer") {
            computerScore++;
            console.log(`Computer wins! ${computerSelection} beats ${playerSelection}`);
        } else {
            console.log("It's a tie!");
        }
    }

    // Determine the overall winner
    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game.");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lose the game.");
    } else {
        console.log("It's a tie game.");
    }
}

// Call the playGame function to start the game
playGame();
