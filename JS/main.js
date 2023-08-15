// GAME 

//Create the CPU pick function

function cpuPick() {
    const options = ["rock", "paper", "scissors"]
    let cpuRandomizer = Math.floor(Math.random() * options.length)
    let cpu = options[cpuRandomizer]
    if (cpu === "rock"){
        cpuChoice.textContent = "✊"
    } else if (cpu === "paper"){
        cpuChoice.textContent = "🖐️"
    } else {
        cpuChoice.textContent = "✌️"
    }
    return cpu;
    }


// Create the game resolver function

let playerCount = 0
let cpuCount = 0

function playRound (clickedButton)  {
    
    const player = clickedButton;
    const cpu = cpuPick();
    if (player === cpu){
        gameText.textContent = "I'ts a tie!"
    } else if ((player === playerRock && cpu === "scissors") ||
               (player === playerPaper && cpu === "rock") ||
               (player === playerScissors && cpu === "paper")){
        playerCount++
        playerScore.textContent = `Player: ${playerCount}`       
        gameText.textContent = "Player wins!"
    } else {
        cpuCount++
        cpuScore.textContent = `CPU: ${cpuCount}`
        gameText.textContent = "CPU wins!"
    }
   
}

function playerChoiceUpdate(clickedButton) {
    if (clickedButton === playerRock) {
        playerChoice.textContent = "✊";
    } else if (clickedButton === playerPaper) {
        playerChoice.textContent = "🖐️";
    } else {
        playerChoice.textContent = "✌️";
    }
}



function resetGame(){
    gameText.textContent = "Score 5 points to win the game."
    playerScore.textContent = "Player: 0"
    cpuScore.textContent = "CPU: 0"
    playerChoice.textContent = "❔"
    cpuChoice.textContent = "❔"
    cpuCount = 0
    playerCount = 0
}

// UI

const playerChoices = document.querySelectorAll(".play");
const playerRock = document.querySelector("#rock");
const playerPaper = document.querySelector("#paper");
const playerScissors = document.querySelector("#scissors");
let playerScore = document.querySelector(".player-score")
let cpuScore = document.querySelector(".cpu-score")
let gameText = document.querySelector(".sub-text") 
let playerChoice = document.querySelector(".player-choice")
let cpuChoice = document.querySelector(".cpu-choice")

playerChoices.forEach(function(playerChoice) {
    playerChoice.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "yellow";
    });

    playerChoice.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "#04314E";
    });
});


playerChoices.forEach(function(playerChoice){
    playerChoice.addEventListener("click", function(){
        playerChoiceUpdate(this);
        playRound(playerChoice);
        if (playerCount === 5) {
            alert("Player wins the game!");
            resetGame();
        } else if (cpuCount === 5) {
            alert("CPU wins the game!");
            resetGame();
        }
    });
});