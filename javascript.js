let computerSelection = getComputerChoice();

/*create a function called getComputerChoice*/
function getComputerChoice(choice) {
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

//console.log("TEST:Computer:" + computerSelection)
//console.log("TEST:" + playRound(playerSelection, computerSelection));

/*create a new function called game() that calls the playRound 
function inside it and plays 5 rounds of the game via a loop*/
function game(input) {
    let i = 1;
    let playerScore = 0;
    let computerScore = 0;

/*this is a loop that assigns 0 to i and, while i < 5, increments it by 1.*/    
//  for (let i = 0; i < 5; i++) {

/*now set the variable again after each loop*/
    let playerSelection = input;
      //prompt("Please choose between rock, paper or scissors for this round");
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

/*if player wins, increment player score and update total score*/
    if (result.toString().includes("Player")) {
      ++playerScore;
      console.log(`Round ${i}: Player selected ${playerSelection} ` + 
                  `vs Computer Selected ${computerSelection}`);
      console.log(`Player has a score of: ${playerScore}`)

      score = (`${playerScore} vs ${computerScore}`);
      console.log(`Current score: ${score}`);

/*if computer wins, increment computer score and update total*/
    } else if (result.toString().includes("Computer")) {
      ++computerScore;
      console.log(`Round ${i}: Player selected ${playerSelection} ` +
                  `vs Computer Selected ${computerSelection}`);
      
      console.log(`Computer has a score of: ${computerScore}`)

      score = (`${playerScore} vs ${computerScore}`);
      console.log(`Current score: ${score}`);
    } else {
      score = (`${playerScore} vs ${computerScore}`);
      console.log(`Round ${i} was a tie! Both selected ${playerSelection}! ` +
                  `Total score: ${score}`)
    }
//  } 
/*this gets the final result of the 5 loops and declares the winner*/
  if (playerScore > computerScore) {
    console.log("Final Result = PLAYER WON!!!");
  } else if (playerScore < computerScore) {
    console.log("Final Result = Computer won... You suck!");
  } else {
    console.log("Final Result = It was a tie.");
  }
}

//Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked.

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