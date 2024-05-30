'use strict';

// globals for score:
let humanScore = 0;
let computerScore = 0;

let totalHumanScore = 0;
let totalComputerScore = 0;


function toBegin() {

    humanScore = 0;
    computerScore = 0;
    // set both to zero to start so that consecutive game start at 0
    // total scores do not reset since they are incremented per game

    let begin = confirm('Press "Ok" to play!');

    if (begin == true) {
        playGame();
    }
    else {
        let confirmCancel = confirm("Are you sure you want to quit?  Your game progress will be lost.");

        if (confirmCancel == true) {
            alert("Goodbye!  You can reload the page to play again later.");
        }
        else {
            return toBegin();
        }
    }
}


function getComputerChoice() {
    let computerMove = Math.random();
    // console.log(computerMove);

    if (computerMove <= 0.33) {
        // console.log("computer chose rock");
        return("ROCK");
    }
    else if (computerMove <= 0.66 && computerMove > 0.33) {
        // console.log("computer chose paper");
        return("PAPER");
        
    }
    else {
        // console.log("computer chose scissors");
        return("SCISSORS");
        
    }
}

// console.log("getComputerChoice() returned " + getComputerChoice()); // check computer return


function getHumanChoice(){
    let humanMove = prompt("Rock, paper, or scissors?");

    if (humanMove == null || humanMove == undefined || humanMove.toUpperCase() != "ROCK" && humanMove.toUpperCase() != "PAPER" && humanMove.toUpperCase() != "SCISSORS"){
        return getHumanChoice();
        // If you hit cancel, escape, hit ok without putting data in, or put the wrong data in this triggers.
        // .toUpperCase() allows users to put funky stuff like "rOcK" in without triggering this.
        // It returns the value so that the function doesn't keep an undefined value if this needs to run.
    }

    else {

        humanMove = humanMove.toUpperCase();
        // console.log(humanMove);

        if (humanMove === "ROCK"){
            // console.log("human chose rock");
            return("ROCK");
        }
        else if (humanMove === "PAPER"){
            // console.log("human chose paper")
            return("PAPER");
        }
        else if (humanMove === "SCISSORS"){
            // this could have been just "else" but it reads better like this
            // console.log("human chose scissors");
            return ("SCISSORS");
        }
    }
}

// console.log("getHumanChoice() returned " + getHumanChoice()); // check human move.  disable when playing


function playRound(humanChoice, computerChoice) {
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS" ||
        humanChoice === "PAPER" && computerChoice === "ROCK" ||
        humanChoice === "SCISSORS" && computerChoice === "PAPER"){

            humanScore++;
            // increments humanScore
            alert("You WIN!  " + humanChoice + " beats " + computerChoice + "!  " 
                  + "The score is " + humanScore + " to " + computerScore + ".");
            // Outputs something like:
            // "You WIN!  ROCK beats SCISSORS!  The score is 3 to 2"
        }

    else if (humanChoice === "ROCK" && computerChoice === "PAPER" ||
             humanChoice === "PAPER" && computerChoice === "SCISSORS" ||
             humanChoice === "SCISSORS" && computerChoice === "ROCK"){

                computerScore++;
                // increments computerScore
                alert("You LOSE!  " + computerChoice + " beats " + humanChoice + "!  " 
                      + "The score is " + humanScore + " to " + computerScore + ".");
                // humanScore always showed first for clarity
             }

    else {

        alert("DRAW!  " + "You both played " + humanChoice + ".  "
              + "The score is " + humanScore + " to " + computerScore + ".");
        // Since both moves were the same, you can just output the value of either
        // humanChoice or computerChoice since it would look dumb to write both out
    }
}


function playGame() {

    for (let round = 1; round < 6; round++){

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        // console.log("There have been this many rounds: " + round);
    }

    endGame();

}


function endGame(){

    if (humanScore > computerScore){

        totalHumanScore++;
        // increments per game won for gameResult()

        alert("YOU WON!!!  " + "The final score was " + humanScore + " to " + computerScore + ".");
    }

    else if (humanScore < computerScore){

        totalComputerScore++;
        // increments per game won for gameResult()

        alert("YOU LOSE!!!  BOO!!!  YOU SUCK!!!!!!!  " + "The final score was " + humanScore + " to " + computerScore + ".");
    }

    else {
        
        alert("DRAW!!!  " + "The final score was " + humanScore + " to " + computerScore + ".");
    }

    gameResult();

}


function gameResult(){

    if (totalHumanScore > totalComputerScore){
        alert("You are winning against The Machine.  You have won " + totalHumanScore + " game(s), and The Machine has won " + totalComputerScore + " game(s).");
    }
    else if (totalHumanScore < totalComputerScore){
        alert("You are losing to The Machine.  You have won " + totalHumanScore + " game(s), and The Machine has won " + totalComputerScore + " game(s).");
    }
    else {
        alert("You and The Machine are all tied up.  You have won " + totalHumanScore + " game(s), and The Machine has won " + totalComputerScore + " game(s).")
    }

    toBegin();

}

// playGame();
toBegin();







// playRound(humanSelection, computerSelection);









// function testingReturn(){
//     let test = undefined;
//     return(false ? "BALLS" : "LOL");
// }


// console.log(testingReturn());














// function buggedPromptReturnsUndefined(buggyFunction){
//     if (buggyFunction == undefined) {
//         console.log("I'm going to cry");
//     }
//     else {
//         console.log("Function was not undefined")
//     }
// }

// buggedPromptReturnsUndefined(getHumanChoice());

// use above function for checking if one of the functions is undefined
// figure out how you dont call it more than needed
















// function getHumanChoice() {
//     let humanMove = prompt("Rock, Paper, or Scissors?");
//     humanMove = humanMove.toUpperCase();
//     console.log(humanMove, "humanMove check ran");

//     if 
// }

// console.log(getHumanChoice()); // check human move.  wont work without return



/*
switch(humanMove) {
        case "ROCK":
            console.log("human chose rock");
            break;
        case "PAPER":
            console.log("human chose paper");
            break;
        case "SCISSORS":
            console.log("human chose scissors");
            break;
        default:
            humanMove = prompt("Try again.  Rock, paper, or scissors?");
            humanMove = humanMove.toUpperCase();
            console.log(humanMove);
    }
*/





/*
function getHumanChoice() {
    let humanMove = prompt("Rock, Paper, or Scissors?");

    if (humanMove == null) {
        console.log(humanMove);
        getHumanChoice();
    }
    else {
        humanMove = humanMove.toUpperCase();
    }

    // if (humanMove != null) {
    // humanMove = humanMove.toUpperCase();
    // console.log("I ran 1");
    // }
    // else if (humanMove == null){
    //     getHumanChoice();
    //     console.log("I ran 2");
    // }
    // console.log(humanMove);

    if (humanMove != "ROCK" || humanMove != "PAPER" || humanMove != "SCISSORS") {
        getHumanChoice();
        console.log("I ran 3");
    }
    else {
        
        console.log("I ran 4");

        switch(humanMove) {
            case "ROCK": // "ROCK"
                console.log("human chose rock");
                break;
            case "PAPER": // "PAPER"
                console.log("human chose paper");
                break;
            case "SCISSORS": // "SCISSORS"
                console.log("human chose scissors");
                break;
            default:
                // humanMove = prompt("Try again.  Rock, paper, or scissors?");
                // humanMove = humanMove.toUpperCase;
                // console.log(humanMove);
                console.log("What the fuck happened?");
        }
    }
}

console.log("getHumanChoice() returned " + getHumanChoice());
*/

