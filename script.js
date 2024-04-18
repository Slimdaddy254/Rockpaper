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
const computerChoice = getComputerChoice();
console.log("Computer's choice:", computerChoice);

