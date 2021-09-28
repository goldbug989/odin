//return computer choice
function computerPlay() {
    let result = Math.floor(Math.random() * 3);
<<<<<<< HEAD
    if (result === 1) return "ROCK";
    else if (result === 2) return "PAPER";
    else return "SCISSORS";
=======
    if (result === 1) return "rock";
    else if (result === 2) return "paper";
    else return "scissors";
>>>>>>> d05ced8409f122d61cf15005011b4461b4f0ea7e
}
//return player choice ..check for valid answer
function getPlayerChoice() {
    let validAnswer = false;
    do {
        let choice = prompt("choose rock, paper, or scissors");
        //check choice
        if (choice.toUpperCase() === "ROCK" || choice.toUpperCase() === "PAPER" || choice.toUpperCase() === "SCISSORS") {
            validAnswer = true;
<<<<<<< HEAD
            return choice.toUpperCase();
=======
            return choice;
>>>>>>> d05ced8409f122d61cf15005011b4461b4f0ea7e
        }
        else {
            alert("invalid entry..try again");
        }
    } while (!validAnswer)
}

//play game
<<<<<<< HEAD
function playRound(computer, player) {

    if (computer === player) {
        alert(`tie game! both parties chose ${computer}`);
        return 1;
    }
    else if ((computer === "ROCK" && player === "SCISSORS") || (computer === "PAPER" && player === "ROCK") || (computer === "SCISSORS" && player === "PAPER")) {
        alert(`computer wins! ${computer}(computer) beats ${player}(player)`);
        return -1;
    }
    else {
        alert(`player wins! ${player}(player) beats ${computer}(computer)`);
        return 0;
    }
}

function game() {
    //initialize variabless
    let count = 0;
    let winner;
    //play game 5 times and keep score
    for (let i = 0; i < 5; i++) {
        //get choices
        let comp = computerPlay();
        let playa = getPlayerChoice();
        //play a round with these choices and increment total score
        //positive total computer win, neg total player win, 0 is tie
        count += playRound(comp, playa);
    }
    //report winner at end based on total score
    if (count > 0) {
        winner = "you";
    }
    else if (count < 0) {
        winner = "computer";
    }
    else {
        winner = "tie game!";
    }
    alert(`best of five winner is ${winner}!`);
}

//play game
game();
=======
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

>>>>>>> d05ced8409f122d61cf15005011b4461b4f0ea7e
