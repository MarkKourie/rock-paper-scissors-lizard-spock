

function generateComputerSelection() {
    switch (Math.floor(Math.random() * 5)) {
        case 0:
            return "Rock"
            break;
        case 1:
            return "Paper"
            break;
        case 2:
            return "Scissors"
            break;
        case 3:
            return "Lizard"
            break;
        case 4:
            return "Spock"
            break;
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();


    if (playerSelection == computerSelection) {
        resultMessage.textContent = `Draw! You both chose ${playerSelection}`;      
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        resultMessage.textContent = `You win! Rock smashes scissors!`;
    } else if (playerSelection == "rock" && computerSelection == "lizard") {
        resultMessage.textContent = `You win! Rock crushes lizard!`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        resultMessage.textContent = `You win! Paper covers rock!`;
    } else if (playerSelection == "paper" && computerSelection == "spock") {
        resultMessage.textContent = `You win! Paper disproves Spock!`;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        resultMessage.textContent = `You win! Scissors cuts paper!`;
    } else if (playerSelection == "scissors" && computerSelection == "lizard") {
        resultMessage.textContent = `You win! Scissors decapitates lizard!`;
    } else if (playerSelection == "lizard" && computerSelection == "paper") {
        resultMessage.textContent = `You win! Lizard eats paper!`;
    } else if (playerSelection == "lizard" && computerSelection == "spock") {
        resultMessage.textContent = `You win! Lizard poisons Spock!`;
    } else if (playerSelection == "spock" && computerSelection == "rock") {
        resultMessage.textContent = `You win! Spock vaporizes rock!`;
    } else if (playerSelection == "spock" && computerSelection == "scissors") {
        resultMessage.textContent = `You win! Spock smashes scissors!`;
    }   else if (playerSelection == "scissors" && computerSelection == "rock") {
        resultMessage.textContent = `You lose! Rock smashes scissors!`;
    } else if (playerSelection == "lizard" && computerSelection == "rock") {
        resultMessage.textContent = `You lose! Rock crushes lizard!`;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        resultMessage.textContent = `You lose! Paper covers rock!`;
    } else if (playerSelection == "spock" && computerSelection == "paper") {
        resultMessage.textContent = `You lose! Paper disproves Spock!`;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        resultMessage.textContent = `You lose! Scissors cuts paper!`;
    } else if (playerSelection == "lizard" && computerSelection == "scissors") {
        resultMessage.textContent = `You lose! Scissors decapitates lizard!`;
    } else if (playerSelection == "paper" && computerSelection == "lizard") {
        resultMessage.textContent = `You lose! Lizard eats paper!`;
    } else if (playerSelection == "spock" && computerSelection == "lizard") {
        resultMessage.textContent = `You lose! Lizard poisons Spock!`;
    } else if (playerSelection == "rock" && computerSelection == "spock") {
        resultMessage.textContent = `You lose! Spock vaporizes rock!`;
    } else if (playerSelection == "scissors" && computerSelection == "spock") {
        resultMessage.textContent = `You lose! Spock smashes scissors!`;
    } else {
        resultMessage.textContent = `Fatal error! How did that happen?`;
    } 
}

const buttons = Array.from(document.querySelectorAll('.btn'));
const resultMessage = document.querySelector("#result-message");
const playerScore = document.querySelector("#player-score");
const enemyScore = document.querySelector("#enemy-score");
const roundsPlayed = document.querySelector("#rounds-played");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const playerSelection = button.id;
        const computerSelection = generateComputerSelection();
        playRound(playerSelection, computerSelection);
        updateScores();
        displayScoreInfo();
    }) 
});

var currentPlayerScore = 0;
var currentEnemyScore = 0;
var currentRoundsPlayed = 1;

function updateScores() { 
    if (resultMessage.textContent.includes("win")) {
        currentPlayerScore++;
    } else if (resultMessage.textContent.includes("lose")) {
        currentEnemyScore++;
    }
    currentRoundsPlayed == 5 ? endGame() : currentRoundsPlayed++;
}

function displayScoreInfo() {
    playerScore.textContent = `Your score: ${currentPlayerScore}`;
    enemyScore.textContent = `Enemy score: ${currentEnemyScore}`;
    roundsPlayed.textContent = `Number of Rounds: ${currentRoundsPlayed - 1};`
}

function endGame() {
    currentPlayerScore == currentEnemyScore ? alert("Whoa. It's a draw! What are the odds?") :
    currentPlayerScore > currentEnemyScore ? alert("Yaas queen! You win the game!") :
    alert("Sorry. The computer won. You were beaten by a silly JavaScript game. Go think about what you have done, or play again.");
    resetGame();
}

function resetGame() {
    currentPlayerScore = 0;
    currentEnemyScore = 0;
    currentRoundsPlayed = 1;
}

//The basics are now there. I want to still: 
// 1. make it pretty - so add images, colour, font changes, etc
// 3. add animations/sounds?
// 4. add final version to Odin solutions 

//adding a comment to see something with Git