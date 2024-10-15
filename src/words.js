// Array of words for the Hangman game
const words = ['REACT', 'JAVASCRIPT', 'HANGMAN', 'PROGRAMMING', 'COMPUTER', 'DEVELOPER'];

// Function to get a random word from the words array
export const randomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
