//return computer choice
function computerPlay() {
    let result = Math.floor(Math.random() * 3);
    if (result === 1) return "rock";
    else if (result === 2) return "paper";
    else return "scissors";
}
//return player choice ..check for valid answer
function getPlayerChoice() {
    let validAnswer = false;
    do {
        let choice = prompt("choose rock, paper, or scissors");
        //check choice
        if (choice.toUpperCase() === "ROCK" || choice.toUpperCase() === "PAPER" || choice.toUpperCase() === "SCISSORS") {
            validAnswer = true;
            return choice;
        }
        else {
            alert("invalid entry..try again");
        }
    } while (!validAnswer)
}

//play game
function playGame(computer, player) {

    if (computer === player) {
        return `tie game! both parties chose ${computer}`;
    }
    else if (computer === "ROCK" && player === "SCISSORS" || computer === "PAPER" && player === "ROCK" || computer === "SCISSORS" && player === "PAPER") {
        return `computer wins! ${computer}(computer) beats ${player}(player)`;
    }
    else return `player wins! ${player}(player) beats ${computer}(computer)`;

}

function game() {
    //init vars
    let winner = "";
    //play game 5 times and keep score
    //report winner at end
    alert(`best of five winner is ${winner}!`);
}

//get choices
let comp = computerPlay();
let playa = getPlayerChoice();
//play game
alert(playGame(comp, playa));

