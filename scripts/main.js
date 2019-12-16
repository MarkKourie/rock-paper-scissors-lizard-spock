

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

function game() {

console.log(`WELCOME TO ROCK, PAPER, SCISSORS, LIZARD, SPOCK \n 
RULES \n 
Scissors cuts paper. \n
Paper covers rock. \n 
Rock crushes lizard. \n
Lizard poisons Spock. \n
Spock smashes scissors. \n
Scissors decapitates lizard. \n 
Lizard eats paper. \n
Paper disproves Spock. \n
Spock vaporizes rock. \n
Rock crushes scissors. \n
\n
Live Long and Prosper!`)

let numberOfRounds = 0;
let validInput = ["rock", "paper", "scissors", "lizard", "spock"];
let playerScore = 0;
let computerScore = 0;

while (numberOfRounds < 5) {          
    
    if (validInput.includes(playerSelection.toLowerCase())) {
        playerSelection = sel      
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection)
        console.log(result);
        result.includes("win") ? playerScore++ :
        result.includes("lose") ? computerScore++ :
        null;
        numberOfRounds++;
        console.log(`Player Score: ${playerScore}. Enemy Score: ${computerScore}. Round ${numberOfRounds}/5`)    
    } else {
        console.log("That is not a valid input. Please enter either rock, paper, scissors, lizard, or Spock.");
        continue;
    }
}

playerScore == computerScore ? console.log("Whoa. It's a draw! What are the odds?") :
playerScore > computerScore ? console.log("Yaas queen! You win the game!") :
console.log("Sorry. The computer won. You were beaten by a silly JavaScript game. Go think about what you have done, or play again.");


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
var currentRoundsPlayed = 0;

function updateScores() { 
    if (resultMessage.textContent.includes("win")) {
        currentPlayerScore++;
    } else if (resultMessage.textContent.includes("lose")) {
        currentEnemyScore++;
    }
    currentRoundsPlayed++;
}

function displayScoreInfo() {
    playerScore.textContent = `Your score: ${currentPlayerScore}`;
    enemyScore.textContent = `Enemy score: ${currentEnemyScore}`;
    roundsPlayed.textContent = `Number of Rounds: ${currentRoundsPlayed};`
}


//my brain is hurting. I can't manage this right now. I'll try again fresh tomorrow morning. 