/*Rock Paper Scissors
 *Computer randomly decides hand to play
 *User decides which hand to play
 *User types one of three: rock, paper, or scissors. Case insensitive.
 *Conditions: rock beats scissors
 *            scissors beats paper
 *            paper beats rock
 *            if both players have same hand, no score
 *
 *Game decides the winner of each round based on those conditions
 *The winner each round gets one point 
 *First player to reach 5 points wins the game
 */

let computerSelection, playerSelection;
let computerScore = 0 , playerScore = 0;
let gameWinner = false;
let gameCount = 0;

console.log("Game start");
game();

function game(){
    while (gameWinner ==  false){ 
        gameCount++;
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        console.log('Round ' + gameCount + '. Computer picks '+ computerSelection + '. Player picks '+ playerSelection);
        playRound(playerSelection,computerSelection);
        console.log("Computer Score: " + computerScore + " || Player Score: " + playerScore);
        
        if (playerScore == 5){
            console.log("PLAYER WINS!");
            gameWinner = true;
        }
        else if (computerScore == 5){
            console.log("COMPUTER WINS!");
            gameWinner = true;
        }
    }
    console.log("Game over");
}

function getComputerChoice (){
    let x = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    
    switch(x){
        case 1: computerChoice = "rock";
        break;
        case 2: computerChoice = "paper";
        break;
        case 3: computerChoice = "scissors";
        break;
    }
   return computerChoice;
    
}

function getPlayerChoice(){
    let playerInput = prompt('Type your pick.');
    let correctInput = ['rock', 'paper', 'scissors'];
    playerInput = playerInput.toLowerCase();
    let validInput = playerInput === correctInput;
    if (validInput == false){
        console.log("Invalid input");
    }
    return playerInput;
    
}

function playRound(playerSelection,computerSelection){
    if (((playerSelection == "rock") && (computerSelection == "paper")) || 
        ((playerSelection == "paper") && (computerSelection == "scissors")) ||
        ((playerSelection == "scissors") && (computerSelection == "rock"))){
        console.log('Computer wins Round ' + gameCount + '!');
        computerScore++;
    }

    if (((playerSelection == "rock") && (computerSelection == "scissors")) ||
        ((playerSelection == "scissors") && (computerSelection == "paper")) ||
        ((playerSelection == "paper") && (computerSelection == "rock"))){
        console.log('Player wins Round ' + gameCount + '!');
        playerScore++;
    }
 
    if (((playerSelection == "rock") && (computerSelection == "rock")) ||
        ((playerSelection == "scissors") && (computerSelection == "scissors")) ||
        ((playerSelection == "paper") && (computerSelection == "paper"))){
        console.log('Round ' + gameCount + '. Tie!');
    }
    
}