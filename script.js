const buttons = document.querySelectorAll('#btns-sect button');
buttons[0].addEventListener('click', () => { handleClick('rock') });
buttons[1].addEventListener('click', () => { handleClick('paper') });
buttons[2].addEventListener('click', () => { handleClick('scissors') });
const resultSection = document.querySelector('#result-sect');

/**
 * Handle click on buttons
 * @param {*} playerChoice Player choice this round ('Rock', 'Paper', or 'Scissors')
 */
function handleClick(playerChoice) {
  const roundResult = playRound(playerChoice, getComputerChoice());
  resultSection.textContent = roundResult;
}

/**
 * Randomly return 'Rock', 'Paper' or 'Scissors'.
 * @returns 'Rock', 'Paper' or 'Scissors' as a string
 */
function getComputerChoice() {
  choices = ['Rock', 'Paper', 'Scissors'];
  const choiceIndex = Math.floor(Math.random() * choices.length);
  return choices[choiceIndex];
}

/**
 * Play a round and declare the winner
 * @param {string} playerChoice Player choice this round ('Rock', 'Paper', or 'Scissors')
 * @param {string} computerChoice Computer choice this round ('Rock', 'Paper', or 'Scissors')
 * @returns {string} A string that declares the winner of round
 */
function playRound(playerChoice, computerChoice) {
  // Make the function case-insensitive
  playerChoice = playerChoice.toUpperCase();
  computerChoice = computerChoice.toUpperCase();

  // Tie
  if (playerChoice === computerChoice) {
    return 'That\'s a tie!';
  }
  // Player wins
  else if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS' ||
    playerChoice === 'PAPER' && computerChoice === 'ROCK' ||
    playerChoice === 'SCISSORS' && computerChoice === 'PAPER') {
    return `You win! ${playerChoice} beats ${computerChoice}.`
  }
  // Computer wins
  return `You loose! ${computerChoice} beats ${playerChoice}`;
}

// /**
//  * Check if the player's choice is a valid choice ('Rock', 'Paper', or 'Scissors')
//  * @param {string} playerChoice Player choice this round ('Rock', 'Paper', or 'Scissors')
//  * @returns {boolean} True if the player choice is either 'Rock', 'Paper', or 'Scissors', otherwise return false
//  */
// function validPlayerChoice(playerChoice) {
//   if (playerChoice === null) {
//     return false;
//   }

//   // Make the function case-insensitive
//   playerChoice = playerChoice.toUpperCase();

//   return playerChoice === 'ROCK' || playerChoice === 'PAPER' || playerChoice === 'SCISSORS';
// }

/**
 * Add score for the player or the computer based on the round result
 * @param {string} roundResult Result of the round
 * @param {object} scores Scores object with player and computer score as properties
 */
function addScore(roundResult, scores) {
  if (roundResult.includes('win')) {
    scores.player++;
  }
  else if (roundResult.includes('loose')) {
    scores.computer++;
  }
}

// /**
//  * Play a full game (5 rounds) of rock, paper, scissors
//  */
// function game() {
//   // Initialize variables
//   const scores = { player: 0, computer: 0 };
//   let playerChoice = '';
//   let computerChoice = '';
//   let roundResult = '';

//   // Play 5 rounds
//   for (let i = 0; i < 5; i++) {
//     // Make sure the player enters a valid choice
//     while (!validPlayerChoice(playerChoice)) {
//       playerChoice = prompt('Enter "Rock", "Paper", or "Scissors" to play: ');

//       // Log error message if the choice is not valid
//       if (!validPlayerChoice(playerChoice)) {
//         console.log('Wrong value, please enter "Rock", "Paper", or "Scissors".');
//       }
//     }

//     // Play the round
//     computerChoice = getComputerChoice();
//     roundResult = playRound(playerChoice, computerChoice);
//     addScore(roundResult, scores);

//     // Log choices
//     console.log(`You chose ${playerChoice}.\nComputer chose ${computerChoice}.`);

//     // Log round result and scores
//     console.log(roundResult);
//     console.log(`Your score: ${scores.player} | Computer's score: ${scores.computer}`);

//     // Reset playerChoice
//     playerChoice = '';
//   }
// }