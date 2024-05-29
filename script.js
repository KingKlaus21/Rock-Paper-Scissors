'use strict';

console.log("javascript working");

function getComputerChoice() {
    let computerMove = Math.random();
    console.log(computerMove);

    if (computerMove <= 0.33) {
        console.log("computer chose rock");
        return("ROCK");
    }
    else if (computerMove <= 0.66 && computerMove > 0.33) {
        console.log("computer chose paper");
        return("PAPER");
        
    }
    else {
        console.log("computer chose scissors");
        return("SCISSORS");
        
    }
}

console.log("getComputerChoice() returned " + getComputerChoice()); // check computer return
















// function getHumanChoice() {
//     let humanMove = prompt("Rock, Paper, or Scissors?");
//     humanMove = humanMove.toUpperCase;
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
            humanMove = humanMove.toUpperCase;
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

