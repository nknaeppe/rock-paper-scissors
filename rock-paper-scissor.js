
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

    
}
console.log(playerPlay());
console.log(computerPlay());