import React from 'react';

const AlphabetButtons = ({ handleGuess, guessedLetters }) => {
  return (
    <div className="alphabet">
      {'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          disabled={guessedLetters.includes(letter)} // Disable button if already guessed
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default AlphabetButtons;
