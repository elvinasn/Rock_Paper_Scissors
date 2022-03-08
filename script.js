game();
function computerPlay() {
    let a = Math.floor(Math.random() * 3);
    switch (a) {
        case 0:
            return "Rock";
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase())
        return 0;
    if (computerSelection === "Rock") {
        if (playerSelection.toLowerCase() === "paper") {
            return 1;
        }
        if (playerSelection.toLowerCase() === "scissors") {
            return -1;
        }
    }
    if (computerSelection === "Paper") {
        if (playerSelection.toLowerCase() === "scissors") {
            return 1;
        }
        if (playerSelection.toLowerCase() === "rock") {
            return -1;
        }
    }
    if (computerSelection === "Scissors") {
        if (playerSelection.toLowerCase() === "rock") {
            return 1;
        }
        if (playerSelection.toLowerCase() === "paper") {
            return -1
        }
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}



function game() {
    let playerWins = 0, computerWins = 0;
    let selection, computerSelection;
    let result;
    let round = document.querySelector('.round-results')
    let k = 0;

    const header = document.querySelector('.container h1')
    const buttons = document.querySelectorAll('.container__buttons button');
    const score = document.querySelector('.container__score')
    const winner = document.querySelector('.container__winner')
    const gamebuttons = Array.from(buttons);

    gamebuttons.pop();
    gamebuttons.pop();

    score.textContent = `PLAYER ${playerWins} : ${computerWins} COMPUTER`;
    gamebuttons.forEach((button) => {
        button.addEventListener('click', buttonClicked)
    })

    function buttonClicked(e) {
        if (this.id === 'btn1') {
            selection = "Rock"
        } else if (this.id === 'btn2') {
            selection = "Paper";
        } else if (this.id === 'btn3') {
            selection = "Scissors";
        }
        computerSelection = computerPlay();
        result = playRound(selection, computerSelection)
        if (result === 0) {
            round.textContent = `It's a draw! Player and computer selected ${computerSelection}.`;
        }
        else if (result === 1) {
            round.textContent = `You win! ${capitalize(selection.toLowerCase())} beats ${computerSelection}!`;
            playerWins++;
        }
        else {
            round.textContent = `You lose! ${capitalize(selection.toLowerCase())} loses to ${computerSelection}!`;
            computerWins++;
        }
        score.textContent = `PLAYER ${playerWins} : ${computerWins} COMPUTER`;
        if (playerWins === 5 || computerWins === 5) {
            if (playerWins === 5) {
                winner.textContent = "Congratulations! You won!"
            }
            else {
                winner.textContent = "Sorry, but you lost to computer..."
            }
            header.textContent = "Do you want to play again?";

            toggleClasses();

            if(k === 0){
                buttons[3].addEventListener('click', () => {
                    playerWins = 0;
                    computerWins = 0;
                    score.textContent = `PLAYER ${playerWins} : ${computerWins} COMPUTER`;
                    winner.textContent = "";
                    header.textContent = "Welcome to the game of Rock, Paper, Scissors!";
                    toggleClasses();
                    k++;
                    
                });
            }
            round.textContent = "";
        }

        function toggleClasses() {
            buttons.forEach((button) => button.classList.toggle("none"));
            console.log("hello");

        }
    }

}

