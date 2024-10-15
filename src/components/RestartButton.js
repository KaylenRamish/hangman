import React from 'react';

// Component for the button to restart the game
const RestartButton = ({ onRestart }) => {
  return (
    <button onClick={onRestart} className="restart-button">
      Restart Game {/* Button text */}
    </button>
  );
};

export default RestartButton;
