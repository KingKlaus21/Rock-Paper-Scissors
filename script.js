'use strict';

// globals for score:
let humanScore = 0;
let computerScore = 0;

let totalHumanScore = 0;
let totalComputerScore = 0;


// alerts user before closing website or reloading
window.onbeforeunload = function(event) {
    event.preventDefault();
    event.returnValue = true;
};


const buttons = document.querySelectorAll(".optionContainer");

buttons.forEach((button) => {
    const buttonImg = button.querySelector('img');

    button.addEventListener("click", () => {

        if (button.id != "neverToggle" && !button.classList.contains("noToggle")) {

            button.classList.toggle("buttonIn");
            buttonImg.classList.toggle("buttonInImg");

            let choiceId = button.getAttribute("id");

            setTimeout(() => {
                button.classList.toggle("buttonIn");
                buttonImg.classList.toggle("buttonInImg");
                playRound(choiceId, getComputerChoice());
            }, 120);
        }

    });
});


function changeToggle() {
    buttons.forEach((button) => {
        button.classList.toggle("noToggle");
    })
}


// keep match score
const scoreContainer = document.querySelector(".scoreContainer");
const matchCounter = document.createElement("p");
matchCounter.classList.add("scoreCounter");
matchCounter.textContent = '0 - 0';
scoreContainer.appendChild(matchCounter);


// keep game score
const gameContainer = document.querySelector(".gameContainer");
const gameCounter = document.createElement("p");
gameCounter.classList.add("scoreCounter");
gameCounter.textContent = '0 - 0';
gameContainer.appendChild(gameCounter);


// message container
const messageContainer = document.querySelector(".messageContainer");


// play button
const playButton = document.createElement("p");
playButton.classList.add("playButton");
playButton.textContent = 'Play!';
messageContainer.appendChild(playButton);


// message added but not yet appended
const anyMessage = document.createElement("p");
anyMessage.classList.add("anyMessage");
anyMessage.textContent = 'Make your move!  Rock, Paper, Scissors?';


playButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    matchCounter.textContent = '0 - 0';

    opponentImg.src="./images/shruggingMeme.jpeg";

    playButton.classList.toggle("playPressed");

    setTimeout(() => {
        messageContainer.removeChild(playButton);
        messageContainer.appendChild(anyMessage);
        changeToggle();
        playGame();
    }, 150);

});


// computer image changer
const opponentImg = document.querySelector("#opponentImg");


function getComputerChoice() {
    let computerMove = Math.random();
    // console.log(computerMove);

    if (computerMove <= 0.33) {
        // console.log("computer chose rock");
        opponentImg.src="./images/Rock.jpeg";
        return("ROCK");
    }
    else if (computerMove <= 0.66 && computerMove > 0.33) {
        // console.log("computer chose paper");
        opponentImg.src="./images/cursed_toilet_paper_by_oakhayboomer_deba8vf-fullview.jpg";
        return("PAPER");
        
    }
    else {
        // console.log("computer chose scissors");
        opponentImg.src="./images/Scissors_cutting_water.jpeg";
        return("SCISSORS");
        
    }
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === "ROCK" && computerChoice === "SCISSORS" ||
        humanChoice === "PAPER" && computerChoice === "ROCK" ||
        humanChoice === "SCISSORS" && computerChoice === "PAPER"){

            humanScore++;

            anyMessage.textContent = `You WIN!  ${humanChoice} beats ${computerChoice}!  Choose again!`;
            
        }

    else if (humanChoice === "ROCK" && computerChoice === "PAPER" ||
             humanChoice === "PAPER" && computerChoice === "SCISSORS" ||
             humanChoice === "SCISSORS" && computerChoice === "ROCK"){

                computerScore++;
                
                anyMessage.textContent = `You LOSE!  ${computerChoice} beats ${humanChoice}!  Choose again!`;
             }

    else {

        anyMessage.textContent = `DRAW!  Both players chose ${humanChoice}.  Choose again!`;
    }

    matchCounter.textContent = `${humanScore} - ${computerScore}`;

    playGame();

}


function playGame() {

    if (humanScore == 5 && humanScore > computerScore || computerScore == 5 && computerScore > humanScore) {
        changeToggle();
        endGame();
    }
}


function endGame(){

    anyMessage.style.fontSize = "80px";
    playButton.classList.toggle("playPressed");
    opponentImg.src="./images/shruggingMeme.jpeg";


    if (humanScore > computerScore){

        totalHumanScore++;

        opponentImg.src="./images/CryingMan.png";
        
        gameCounter.textContent = `${totalHumanScore} - ${totalComputerScore}`;

        anyMessage.textContent = `YOU WON!!!`;
    }

    else {

        totalComputerScore++;

        opponentImg.src="./images/SmilingFace.png";

        gameCounter.textContent = `${totalHumanScore} - ${totalComputerScore}`;

        anyMessage.textContent = `YOU LOSE!!!`;
    }

    setTimeout(() => {
        messageContainer.removeChild(anyMessage);
        anyMessage.style.fontSize = "40px";
        anyMessage.textContent = 'Make your move!  Rock, Paper, Scissors?';
        messageContainer.appendChild(playButton);
    }, 1200);
}