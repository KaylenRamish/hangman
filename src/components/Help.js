import React from 'react';

// Component to display the help information about the game rules
const Help = () => {
  return (
    <div className="help">
      <h4>How to Play:</h4>
      <p>Guess the letters in the word. You have 6 incorrect guesses before you lose.</p> {/* Game rules */}
    </div>
  );
};

export default Help;
