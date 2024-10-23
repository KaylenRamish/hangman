import React from 'react'; // Import React to create the component

// Define a functional component 'GameStatus' that takes three props: 'wrongGuesses', 'maxWrongGuesses', and 'word'
const GameStatus = ({ wrongGuesses, maxWrongGuesses, word }) => {
  return (
    <div>
      {/* Display the number of incorrect guesses out of the maximum allowed */}
      <h3>
        Incorrect guesses: {wrongGuesses} / {maxWrongGuesses}
      </h3>
      {
        // Check if the number of wrong guesses has reached the maximum allowed
        wrongGuesses >= maxWrongGuesses && (
          // If so, display the game over message and reveal the word
          <h2>Game Over! The word was: {word}</h2>
        )
      }
    </div>
  );
};

export default GameStatus; // Export the component for use in other parts of the app
