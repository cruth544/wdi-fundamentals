////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    move = move.toLowerCase();
    if (move === "rock" || move === "paper" || move === "scissors") {
        console.log("Player chose: " + move);
        return move;
    };
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return getPlayerMove(getInput());/* Your Expression */
}

function getComputerMove(move) {
    move = move.toLowerCase();
    if (move === "rock" || move === "paper" || move === "scissors") {
        console.log("Computer chose: " + move);
        return move;
    };
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return getComputerMove(randomPlay());/* Your Expression */
}

function getWinner(playerMove,computerMove) {
    var winner;
    var options = ["rock", "paper", "scissors"];
    var winningOptions = ["paper", "scissors", "rock"]

    if (playerMove === computerMove) return "tie";

    for (var i = 0; i < options.length; i++) {
        if (playerMove === options[i]) {
            if (computerMove === winningOptions[i]) {
                winner = "computer";
            } else {
                winner = "player";
            };
        };
    };

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
        var roundWinner = getWinner(getPlayerMove(getInput()), getComputerMove(randomPlay()));
        console.log("Score: " + playerWins + ', ' + computerWins);
        if (roundWinner === "tie") {
            continue;
        };
        if (roundWinner === "computer") {
            computerWins++;
            continue;
        };
        if (roundWinner === "player") {
            playerWins++;
            continue;
        };
    };
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

console.log(playToFive());

