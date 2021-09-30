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
        //alert(`tie game! both parties chose ${computer}`);
        return 1;
    }
    else if ((computer === "ROCK" && player === "SCISSORS") || (computer === "PAPER" && player === "ROCK") || (computer === "SCISSORS" && player === "PAPER")) {
        //alert(`computer wins! ${computer}(computer) beats ${player}(player)`);
        return -1;
    }
    else {
        //alert(`player wins! ${player}(player) beats ${computer}(computer)`);
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
    alert(`best of five winner is ${winner}!`);
}



function displayResults(result) {
    console.log(result);
    //create results div
    let resultSpan = document.createElement("span");

    //if result =1 computer wins
    if (result > 0) {
        resultSpan.textContent = "Computer Wins!!!"
    }
    else if (result === 0) {
        resultSpan.textContent = "Tie Game!!!";
    }
    else {
        resultSpan.textContent = "Player Wins!!";
    }
    //add span to result container
    let container = document.querySelector(".results");
    container.appendChild(resultSpan);
}


function play(e, str) {
    //get playerChoice from btn clicked
    let playerChoice = e.target.textContent.toUpperCase();
    //erase result container child span if results exist
    if (document.querySelector(".results").firstElementChild) {
        document.querySelector(".results").firstElementChild.remove();
    }
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
