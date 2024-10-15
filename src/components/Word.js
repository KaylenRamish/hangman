import React from 'react';

// Component to display the word with guessed letters and underscores for unguessed letters
const Word = ({ word, guessedLetters }) => {
  return (
    <h3>
      {word.split('').map((letter, index) => (
        <span key={index} className="letter">
          {guessedLetters.includes(letter) ? letter : '_'} {/* Display letter or underscore */}
        </span>
      ))}
    </h3>
  );
};

export default Word;
