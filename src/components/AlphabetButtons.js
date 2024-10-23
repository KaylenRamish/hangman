import React from 'react';

// AlphabetButtons Component
const AlphabetButtons = ({ letter, handleGuess, guessedLetters }) => {
  // Determine if the letter has been guessed
  const isDisabled = guessedLetters.includes(letter);

  return (
    <button 
      onClick={() => handleGuess(letter)} 
      disabled={isDisabled} // Disable button if letter is already guessed
      className="alphabet-button"
    >
      {letter}
    </button>
  );
};

export default AlphabetButtons;
