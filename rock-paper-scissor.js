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
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection)
    if (playerSelection === computerSelection) {
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
function markPlayerSelection() {
            playerSelection = this.id;
            if (playerSelection === this.id) {
                this.style.borderColor = "black";
            }
}

function unmarkPlayerSelection() {
    playerButtons.forEach(element => {
        if (element.id !== playerSelection) {
            element.style.borderColor = null;  
        }
    })

}

function setComputerImg(choice) {
    switch (choice) {
        case ("rock"):
            computerImg.src = "img/rock.jpeg"
            break;
        case ("paper"):
            computerImg.src = "img/paper.webp"
            break;
        case ("scissors"):
            computerImg.src = "img/scissors.jpg"
            break;
        case ("reset"):
            computerImg.src = "img/questionmark.webp"
            break;
    }
}

function outputText(text) {
    const outputText = document.createElement("p");
    outputText.textContent = text;
    outputGame.append(outputText);
    updateScroll();
}
function updateScroll() {
    outputGame.scrollTop = outputGame.scrollHeight;
}
function game() {
    console.log("Game started");
    if (playerSelection != "") {
        const computerChoice = computerPlay()
        setComputerImg(computerChoice);
        outputText(playRound(playerSelection, computerChoice));
    }
    else {
        outputText("Make a choice and press play !");
    }
}


const playerButtons = document.querySelectorAll('.rps.player');
const contentField = document.querySelector('.content');
const computerImg = document.querySelector(".com img");
const outputGame = document.querySelector(".textOutput");
const playButton = document.querySelector("#playButton");
let playerSelection = "";
playerButtons.forEach(element => element.addEventListener("click", markPlayerSelection));
contentField.addEventListener("click", unmarkPlayerSelection);
console.log(playButton)
playButton.addEventListener("click", () => game());

