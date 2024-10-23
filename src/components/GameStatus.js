import React from 'react';

const GameStatus = ({ wrongGuesses, maxWrongGuesses, word }) => {
  return (
    <div>
      <h3>Incorrect guesses: {wrongGuesses} / {maxWrongGuesses}</h3>
      {wrongGuesses >= maxWrongGuesses && <h2>Game Over! The word was: {word}</h2>}
    </div>
  );
};

export default GameStatus;
