import React from 'react';

// Component to display buttons for each letter of the alphabet
const Letters = ({ onGuess, disabled }) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); // Create an array of letters

  return (
    <div className="letter-buttons">
      {alphabet.map((letter) => (
        <button
          key={letter} // Use letter as key
          onClick={() => onGuess(letter)} // Handle letter guessing
          disabled={disabled} // Disable button if the game is over
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Letters;
