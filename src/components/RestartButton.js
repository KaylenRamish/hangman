import React from 'react'; // Import React to create the component

// RestartButton Component
// This component renders a button that triggers the game restart action.
const RestartButton = ({ onRestart }) => {
  return (
    <button onClick={onRestart} className="restart-btn"> {/* Button that calls onRestart when clicked */}
      Restart Game {/* Button text */}
    </button>
  );
};

export default RestartButton; // Export the component for use in other parts of the app
