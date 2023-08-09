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
    return 'That\' a tie!';
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