function getComputerChoice() {
    let x = Math.random()
    if (x >= 0 && x <= 1/3) {
        return "rock";
    }
    else if (x > 1/3 && x <= 2/3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let move = prompt("What's your choice? ")
    return move.toLowerCase()
}


let humanScore = 0
let computerScore = 0


function playRound(humanSelection, computerSelection) {

    
    if ((humanSelection === "rock" && computerSelection === "scissors") || (humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "scissors" && computerSelection === "paper")) {
        humanScore++
        console.log("You win!")
    }

    else if ((humanSelection === computerSelection) || (humanSelection === computerSelection) || (humanSelection === computerSelection)) {
        console.log("Draw!")
    }   
    else {
        computerScore++
        console.log("You lose!")
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice())
    console.log("Your Score: " + humanScore)
    console.log("Computer Score: " + computerScore)
}

playGame()
playGame()
playGame()
playGame()
playGame()
