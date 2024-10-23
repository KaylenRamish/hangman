import React from 'react';

const HangmanFigure = ({ wrongGuesses }) => {
  return (
    <div className="hangman-container">
      {wrongGuesses > 0 && <div className="stand-base"></div>}
      {wrongGuesses > 1 && <div className="stand-vertical"></div>}
      {wrongGuesses > 2 && <div className="stand-horizontal"></div>}
      {wrongGuesses > 3 && <div className="rope"></div>}
      {wrongGuesses > 4 && <div className="head"></div>}
      {wrongGuesses > 5 && <div className="body"></div>}
      {wrongGuesses > 6 && <div className="left-arm"></div>}
      {wrongGuesses > 7 && <div className="right-arm"></div>}
      {wrongGuesses > 8 && <div className="left-leg"></div>}
      {wrongGuesses > 9 && <div className="right-leg"></div>}
    </div>
  );
};

export default HangmanFigure;
