import React from 'react';

const WordDisplay = ({ word, guessedLetters }) => {
  return (
    <div className="word-display">
      {word.split("").map((letter, index) =>
        guessedLetters.includes(letter) ? (
          <span key={index} className="letter">{letter}</span>
        ) : (
          <span key={index} className="blank" style={{ borderBottom: '2px solid black', margin: '0 5px' }}>&nbsp;</span>
        )
      )}
    </div>
  );
};

export default WordDisplay;
