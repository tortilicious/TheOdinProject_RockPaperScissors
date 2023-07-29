//Crear una lista [0, 1, 2] Hacer al jugador elegir y corresponder el numero a una opcion del juego

//Create the player pick function

function playerPick(){
     let player = prompt ("Write the number: \n1.Rock \n2.Paper \n3.Scissors")
     if (player == 1) {
         player = "Rock"
     } else if (player == 2) {
         player = "Paper"
     } else if (player == 3) {
         player = "Scissors"        
    }
    return player
  }

//Create the CPU pick function

function cpuPick() {
    const options = ["Rock", "Paper", "Scissors"]
    let cpuRandomizer = Math.floor(Math.random() * options.length)
    let cpu = options[cpuRandomizer]
    return cpu;
    }


// Create the game resolver function

function gameResolver ()  {
    let result;
    const cpu = cpuPick();
    const player = playerPick();
    if (player === cpu){
         result = "It's a tie!"
    } else if ((player === "Rock" && cpu === "Scissors") ||
               (player === "Paper" && cpu === "Rock") ||
               (player === "Scissors" && cpu === "Paper")){
         result = "Player wins!"
    } else {
         result = "CPU wins"
    }
    console.log(result)
    return result
    }

gameResolver()

