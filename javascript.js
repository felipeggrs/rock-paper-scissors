let computerSelection = getComputerChoice();

/*create a function called getComputerChoice*/
function getComputerChoice() {
/*this function will generate a random number between 1-100*/
  choice = Math.floor(Math.random() * 100 + 1)
/*depending on the number, the function will output 3 options = 
rock, paper, scissors*/
  if (choice <= 33) {
    return "rock";
  } else if (choice >= 66) {
    return "paper";
  } else {
    return "scissors";
  }}

/*now, this next function should play a round of the game... 
it has to include these two parameters and has to return who 
won the game by the end of the function.*/
  function playRound(playerSelection, computerSelection) {
/*to start the round, we should get the computerSelection 
variable into play and compare it with the playerSelection variable*/
/*first the tie*/
    if (playerSelection.toLowerCase() === computerSelection) {
      return "It was a tie!";
/*then if player chooses rock*/
    } else if (playerSelection.toLowerCase() === "rock" && 
                computerSelection === "paper") {
      return "Computer won... Paper beats Rock.";

    } else if (playerSelection.toLowerCase() === "rock" && 
                computerSelection === "scissors") {
      return "Player won! Rock beats Scissors!";

/*now if player chooses paper*/
    } else if (playerSelection.toLowerCase() === "paper" &&
                computerSelection === "scissors") {
      return "Computer won... Scissors beats Paper.";

    } else if (playerSelection.toLowerCase() === "paper" &&
                computerSelection === "rock") {
      return "Player won! Paper beats Rock!";

/*now if player chooses scissors*/
      } else if (playerSelection.toLowerCase() === "scissors" &&
                  computerSelection === "rock") {
      return "Computer won... Rock beats Scissors.";
      } else if (playerSelection.toLowerCase() === "scissors" &&
                  computerSelection === "paper") {
      return "Player won! Scissors beats Paper!";

    } else {
      return "Please enter a valid choice!";
    }
  }

let i = 1;
let playerScore = 0;
let computerScore = 0;

/*create a new function called game() that calls the playRound 
function inside it*/
function game(input) {
    let playerSelection = input;
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

/*if player wins, increment player score and update total score*/
    if (result.toString().includes("Player")) {
      ++playerScore;
      currentSelections.textContent = `Round ${i}: Player chose ${playerSelection}; ` + 
                  `Computer chose ${computerSelection}.`;
      displayPlayerScore.textContent = `Player Score: ${playerScore}`;
      displayComputerScore.textContent = `Computer Score: ${computerScore}`;

      score = (`${playerScore} vs ${computerScore}`);
      console.log(`Current score: ${score}`);
      i++

/*if computer wins, increment computer score and update total*/
    } else if (result.toString().includes("Computer")) {
      ++computerScore;
      currentSelections.textContent = `Round ${i}: Player chose ${playerSelection}; ` +
                  `Computer chose ${computerSelection}.`;
      
      displayPlayerScore.textContent = `Player Score: ${playerScore}`;
      displayComputerScore.textContent = `Computer Score: ${computerScore}`;

      score = (`${playerScore} vs ${computerScore}`);
      console.log(`Current score: ${score}`);
      i++
    } else {
      score = (`${playerScore} vs ${computerScore}`);
      currentSelections.textContent = `Round ${i} was a tie! Both selected ${playerSelection}!`
      console.log(`Current score: ${score}`);
      displayPlayerScore.textContent = `Player Score: ${playerScore}`;
      displayComputerScore.textContent = `Computer Score: ${computerScore}`;
      i++
    }
/*says who's currently winning*/
  if (playerScore > computerScore) {
    displayResult.textContent = "YES! You are winning!";
  } else if (playerScore < computerScore) {
    displayResult.textContent = "Oh no, the machine is winning!";
  } else {
    displayResult.textContent = "It a tie! You can do this!";
  }

// the game resets after someone reaches score of 5;  
  if (computerScore === 5) {
    alert ("GAME OVER, THE MACHINE HAS WON!");
    displayResult.textContent = "You've lost...";
    playerScore = 0;
    computerScore = 0;
    i = 1;
  } else if (playerScore === 5){
    alert ("CONGRATULATIONS! YOU HAVE BEATEN THE MACHINE!");
    displayResult.textContent = "You've won!";
    playerScore = 0;
    computerScore = 0;
    i = 1;
  }
}

// Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
  if (button.id === "rock") {
    button.addEventListener("click", () => {game("rock")}); 
} else if ((button.id === "paper")){
  button.addEventListener("click", () => {game("paper")}); 
} else {
  button.addEventListener("click", () => {game("scissors")}); 
  }
});

// Add a div for displaying results and change all of your console.logs into DOM methods.
const displayResult = document.getElementById("result");
const displayPlayerScore = document.getElementById("playerScore");
const displayComputerScore = document.getElementById("computerScore");
const currentSelections = document.getElementById("currentSelections");