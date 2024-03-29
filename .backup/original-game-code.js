  function computerPlay() {
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
                return `Draw! You both chose ${playerSelection}`;      
            } else if (playerSelection == "rock" && computerSelection == "scissors") {
                return `You win! Rock smashes scissors!`;
            } else if (playerSelection == "rock" && computerSelection == "lizard") {
                return `You win! Rock crushes lizard!`;
            } else if (playerSelection == "paper" && computerSelection == "rock") {
                return `You win! Paper covers rock!`;
            } else if (playerSelection == "paper" && computerSelection == "spock") {
                return `You win! Paper disproves Spock!`;
            } else if (playerSelection == "scissors" && computerSelection == "paper") {
                return `You win! Scissors cuts paper!`;
            } else if (playerSelection == "scissors" && computerSelection == "lizard") {
                return `You win! Scissors decapitates lizard!`;
            } else if (playerSelection == "lizard" && computerSelection == "paper") {
                return `You win! Lizard eats paper!`;
            } else if (playerSelection == "lizard" && computerSelection == "spock") {
                return `You win! Lizard poisons Spock!`;
            } else if (playerSelection == "spock" && computerSelection == "rock") {
                return `You win! Spock vaporizes rock!`;
            } else if (playerSelection == "spock" && computerSelection == "scissors") {
                return `You win! Spock smashes scissors!`;
            }   else if (playerSelection == "scissors" && computerSelection == "rock") {
                return `You lose! Rock smashes scissors!`;
            } else if (playerSelection == "lizard" && computerSelection == "rock") {
                return `You lose! Rock crushes lizard!`;
            } else if (playerSelection == "rock" && computerSelection == "paper") {
                return `You lose! Paper covers rock!`;
            } else if (playerSelection == "spock" && computerSelection == "paper") {
                return `You lose! Paper disproves Spock!`;
            } else if (playerSelection == "paper" && computerSelection == "scissors") {
                return `You lose! Scissors cuts paper!`;
            } else if (playerSelection == "lizard" && computerSelection == "scissors") {
                return `You lose! Scissors decapitates lizard!`;
            } else if (playerSelection == "paper" && computerSelection == "lizard") {
                return `You lose! Lizard eats paper!`;
            } else if (playerSelection == "spock" && computerSelection == "lizard") {
                return `You lose! Lizard poisons Spock!`;
            } else if (playerSelection == "rock" && computerSelection == "spock") {
                return `You lose! Spock vaporizes rock!`;
            } else if (playerSelection == "scissors" && computerSelection == "spock") {
                return `You lose! Spock smashes scissors!`;
            } else {
                return `Fatal error! How did that happen?`;
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
                playerSelection = prompt("Choose rock, paper, scissors, lizard or Spock");

                if (validInput.includes(playerSelection.toLowerCase())) {      
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

