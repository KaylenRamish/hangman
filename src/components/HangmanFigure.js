import React from 'react'; // Import React to create the component

// Define a functional component 'HangmanFigure' that takes one prop: 'wrongGuesses'
const HangmanFigure = ({ wrongGuesses }) => {
  return (
    <div className="hangman-container">
      {/* Render parts of the hangman figure based on the number of wrong guesses */}
      {wrongGuesses > 0 && <div className="stand-base"></div>} {/* Base of the stand */}
      {wrongGuesses > 1 && <div className="stand-vertical"></div>} {/* Vertical part of the stand */}
      {wrongGuesses > 2 && <div className="stand-horizontal"></div>} {/* Horizontal part of the stand */}
      {wrongGuesses > 3 && <div className="rope"></div>} {/* Rope for hanging */}
      {wrongGuesses > 4 && <div className="head"></div>} {/* Head of the figure */}
      {wrongGuesses > 5 && <div className="body"></div>} {/* Body of the figure */}
      {wrongGuesses > 6 && <div className="left-arm"></div>} {/* Left arm of the figure */}
      {wrongGuesses > 7 && <div className="right-arm"></div>} {/* Right arm of the figure */}
      {wrongGuesses > 8 && <div className="left-leg"></div>} {/* Left leg of the figure */}
      {wrongGuesses > 9 && <div className="right-leg"></div>} {/* Right leg of the figure */}
    </div>
  );
};

export default HangmanFigure; // Export the component for use in other parts of the app
