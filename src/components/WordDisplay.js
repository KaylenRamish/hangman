import React from 'react';

// WordDisplay Component
const WordDisplay = ({ word, guessedLetters }) => {
  return (
    <div className="word-display">
      {word.split('').map((letter, index) => (
        <span key={index}>
          {guessedLetters.includes(letter.toUpperCase()) ? letter : '_'} {/* Show letter if guessed, else show underscore */}
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;
