//return computer choice
function computerPlay() {
    let result = Math.floor(Math.random() * 3);
    if (result === 1) return "ROCK";
    else if (result === 2) return "PAPER";
    else return "SCISSORS";
}


//play game
function playRound(computer, player) {

    if (computer === player) {
        return 1;
    }
    else if ((computer === "ROCK" && player === "SCISSORS") || (computer === "PAPER" && player === "ROCK") || (computer === "SCISSORS" && player === "PAPER")) {
        return -1;
    }
    else {
        return 0;
    }
}

function endGame(str) {
    let winnerMessage = document.getElementById("endgame");
    let player = document.getElementById('playerScore');
    let computer = document.getElementById('computerScore');
    let playerScore = parseInt(player.textContent);
    let computerScore = parseInt(computer.textContent);

    //display winner message 
    winnerMessage.textContent = `${str.toUpperCase()} WINS!!! final score
    ---player ${playerScore}---computer ${computerScore}`;

    //reset scores
    player.textContent = 0;
    computer.textContent = 0;
    //reset winning msg 
    setTimeout(() => { winnerMessage.textContent = 'A SCORE OF 5 WINS THE GAME' }, 4000);

}


function displayResults(result) {
    //store score elements
    let playerScore = document.querySelector("#playerScore");
    let computerScore = document.querySelector("#computerScore");
    //round result message
    let msg = document.getElementById("round-result");
    //covert scores
    let playerTotal = parseInt(playerScore.textContent);
    let computerTotal = parseInt(computerScore.textContent);
    console.log(result);

    //if result =1 computer wins
    if (result > 0) {
        computerTotal++;
        msg.textContent = "COMPUTER WINS ROUND!";
        computerScore.textContent = computerTotal;
        if (computerTotal === 5) {
            endGame("computer");
        }
    }

    else if (result < 0) {
        playerTotal++;
        msg.textContent = "PLAYER WINS ROUND!";
        playerScore.textContent = playerTotal;
        if (playerTotal === 5) {
            endGame("player");
        }
    }
    else {
        msg.textContent = 'ROUND IS A TIE!';
    }

}


function play(e) {
    //get playerChoice from btn clicked
    let playerChoice = e.target.textContent.toUpperCase();
    let computerChoice = computerPlay();
    let result = playRound(computerChoice, playerChoice);
    displayResults(result);
};


let btnRock = document.querySelector("#rock");
let btnPaper = document.querySelector("#paper");
let btnScissors = document.querySelector("#scissors");


btnRock.addEventListener("click", play);
btnPaper.addEventListener("click", play);
btnScissors.addEventListener("click", play);
