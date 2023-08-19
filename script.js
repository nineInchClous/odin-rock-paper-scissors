const buttons = document.querySelectorAll('#btns-sect button');
buttons[0].addEventListener('click', () => { handleClick('rock') });
buttons[1].addEventListener('click', () => { handleClick('paper') });
buttons[2].addEventListener('click', () => { handleClick('scissors') });

const resultPara = document.querySelector('#result-sect #round-result');
const scorePara = document.querySelector('#result-sect #score');
const victoryPara = document.querySelector('#result-sect #victory');

const replayButton = document.querySelector('#replay-btn');
replayButton.addEventListener('click', replayGame);

const scores = { player: 0, computer: 0 };

/**
 * Handle click on buttons
 * @param {*} playerChoice Player choice this round ('Rock', 'Paper', or 'Scissors')
 */
function handleClick(playerChoice) {
  const roundResult = playRound(playerChoice, getComputerChoice());
  const currentScore = addScore(roundResult, scores);

  resultPara.textContent = roundResult;
  scorePara.textContent = currentScore;

  if (currentScore.includes('5')) {
    // Check who won based on the position of the max score (5) in the score string
    currentScore.indexOf('5') === 8 ? endGame(true) : endGame(false);
  }
}

/**
 * End the game and display results
 * @param {boolean} playerWins Does the player won this game ?
 */
function endGame(playerWins) {
  buttons.forEach((button) => { button.disabled = true; });
  replayButton.hidden = false;

  playerWins ? victoryPara.textContent = 'Player wins' : victoryPara.textContent = 'Computer wins';
}

/**
 * Reset all values to replay a game
 */
function replayGame() {
  buttons.forEach((button) => { button.disabled = false; });
  replayButton.hidden = true;
  resultPara.textContent = '';
  scorePara.textContent = '';
  victoryPara.textContent = '';
  scores.player = 0;
  scores.computer = 0;
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

  return `Player: ${scores.player} - Computer: ${scores.computer}`;
}