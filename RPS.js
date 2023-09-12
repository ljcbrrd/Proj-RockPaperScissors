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
let computerScore = 0, playerScore = 0;

do{
    gamer();
} while (playerScore < 5 || computerScore < 5);


function gamer(){
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();
        console.log('Computer picks '+ computerSelection);
        console.log('Player picks '+ playerSelection);
        playRound(playerSelection,computerSelection);
        console.log("Computer Score: " + computerScore + " || Player Score: " + playerScore);
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
    const input = prompt();
    return input;
}

function playRound(playerSelection,computerSelection){

    if (((playerSelection == "rock") && (computerSelection == "paper")) || 
        ((playerSelection == "paper") && (computerSelection == "scissors")) ||
        ((playerSelection == "scissors") && (computerSelection == "rock"))){
        console.log("Computer wins!");
        computerScore++
        return computerScore;
    }

    if (((playerSelection == "rock") && (computerSelection == "scissors")) ||
        ((playerSelection == "scissors") && (computerSelection == "paper")) ||
        ((playerSelection == "paper") && (computerSelection == "rock"))){
        console.log("Player wins!");
        playerScore++
        return playerScore;
    }
 
    
    if ((playerSelection == "rock") && (computerSelection == "rock")){
        console.log("Tie!");
    }
    if ((playerSelection == "scissors") && (computerSelection == "scissors")){
        console.log("Tie!");
    }
    if ((playerSelection == "paper") && (computerSelection == "paper")){
        console.log("Tie!");
    }
    console.log("nvbty");
}