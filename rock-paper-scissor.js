
function playerPlay(){
    while (true){
        let playerSelection = prompt("Choose between rock, paper, scissors");
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors"){
            return playerSelection;

        }else{
            console.log("Wrong input, try again.")
        }
    }
}

function computerPlay(){
    const randOption = (min=1, max=4) => Math.floor(Math.random() * (max - min) + min );
    switch(randOption()){
        case 1:
            return "scissors";
            break;

        case 2:
            return "paper";
            break;

        case 3: 
            return "rock";
            break;
    }
}
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Draw";
    }
    if ( playerSelection === "rock"){
        if (computerSelection === "paper" ){
            return "Computer Wins";
        }
        if (computerSelection === "scissors" ){
            return "Player Wins";
        }
    }
    if ( playerSelection === "paper"){
        if (computerSelection === "scissors" ){
            return "Computer Wins";
        }
        if (computerSelection === "rock" ){
            return "Player Wins";
        }
    }
    if ( playerSelection === "scissors"){
        if (computerSelection === "rock" ){
            return "Computer Wins";
        }
        if (computerSelection === "paper" ){
            return "Player Wins";
        }
    }
    
}

function game(){
    let playerWins;
    let computerWins;
    let winner;
    for (let i = 0; i < 5; i++){
        let round  = playRound(playerPlay(), computerPlay());
        if (round === "Player Wins"){
                playerWins++;
            }
            else{
                computerWins++;
            }
            console.log(round);
    }

    winner = (playerWins === computerWins) ? "The game is Draw" :
    (playerWins > computerWins) ? "The Player wins the game" : 
    "The Computer wins the game";
    return winner;
}


console.log(game());