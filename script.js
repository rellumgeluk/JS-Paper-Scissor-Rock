function getComputerChoice() {
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}
console.log(getComputerChoice());

function getHumanChoice() {
    const choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice, please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
}
console.log(getHumanChoice());

let humanScore= 0;
let computerScore= 0;
console.log(humanScore, computerScore);

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let result= "";

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        result = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    
    console.log(result);
    console.log(`Human: &{humanScore}, Computer &{computerScore}`);
}

