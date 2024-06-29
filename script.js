function getComputerChoice() {
            const choices = ["rock", "paper", "scissors"];
            const randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

function getHumanChoice() {
    return new Promise((resolve) => {
        const keydownHandler = (event) => {
            const choice = event.key.toLowerCase();
            if (choice === 'r' || choice === 'p' || choice === 's') {
                document.removeEventListener('keydown', keydownHandler);
                const humanChoice = choice === 'r' ? 'rock' :
                                    choice === 'p' ? 'paper' : 'scissors';
                resolve(humanChoice);
            }
        };
        document.addEventListener('keydown', keydownHandler);
    });
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let roundResult;
    if (humanChoice === computerChoice) {
        roundResult = `It's a tie`;
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")
        ) {
            humanScore++;
            roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
        } else {
            computerScore++;
            roundResult = `You lose this round! ${computerChoice} beats ${humanChoice}`;
        }
        alert(`${roundResult}\nCurrent Score - You: ${humanScore}, Computer: ${computerScore}`);
}

async function playGameWithKeyboard() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = await getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        }
        const finalMessage = `Final Score - You ${humanScore} x Computer ${computerScore}`;
        const finalResult = humanScore > computerScore ? "Congratulations! You won the game!" :
                            humanScore < computerScore ? "Sorry, you lost. Better luck next time." : "It's a tie";
        alert(finalMessage + "\n" + finalResult);
        humanScore = 0;
        computerScore = 0;
}

playGameWithKeyboard();