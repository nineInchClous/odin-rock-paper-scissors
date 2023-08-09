/**
 * Randomly return 'Rock', 'Paper' or 'Scissors'.
 * @returns 'Rock', 'Paper' or 'Scissors' as a string
 */
function getComputerChoice() {
  choices = ['Rock', 'Paper', 'Scissors'];
  const choiceIndex = Math.floor(Math.random() * choices.length);
  return choices[choiceIndex];
}