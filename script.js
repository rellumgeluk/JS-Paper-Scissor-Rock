function getComputerChoice() {
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}

function getHumanChoice() {
    const choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice, please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
}

let humanScore= 0;
let computerScore= 0;

function playRound(humanChoice, computerChoice) {
    let roundResult;
    if (humanChoice === computerChoice) {
        roundResult= `It's a tie`;
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

const humanSelection= getHumanChoice();
const computerSelection= getComputerChoice();
playRound(humanSelection, computerSelection);

function playGame() {
    for (let i=0; i<0; i++) {
        const humanSelection = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    const finalMessage = `Final Score - You ${humanScore} x Computer ${computerScore}`;
    (humanScore > computerScore ? "Congratulations! You won the game!":
    humanScore < computerScore ? "Sorry, you lost. Better luck next time." : "It's a tie");

    alert(finalMessage);
    humanScore=0;
    computerScore=0;
}
playGame();