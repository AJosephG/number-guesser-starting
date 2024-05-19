let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 9);
}

function compareGuesses(humanGuess, computerGuess, secretNumber) {
    let computerDifference = computerGuess - secretNumber;
    let humanDifference = humanGuess - secretNumber;

    if (computerDifference > humanDifference) {
        return true;
    } else if (computerDifference < humanDifference) {
        return false;
    } else {
        return true;
    }
}

function updateScore(winner) {
    switch (winner){
        case 'human':
            humanScore ++;
            case 'computer':
                computerScore ++;
    }
}

function advanceRound() {
    currentRoundNumber ++;
}