import React, { useState } from 'react'; // Import React and useState hook for managing state

// Define a functional component 'Help' for displaying game rules
const Help = () => {
  const [showHelp, setShowHelp] = useState(false); // State to toggle help section visibility

  // Toggles the help display when called
  const toggleHelp = () => {
    setShowHelp(!showHelp); // Toggle the state between true and false
  };

  return (
    <div className="help-container">
      {/* Help button that toggles the visibility of the help section */}
      <button onClick={toggleHelp} className="help-btn">
        {showHelp ? 'Hide Help' : 'Show Help'} {/* Change button text based on state */}
      </button>

      {/* Conditionally render the help section if showHelp is true */}
      {showHelp && (
        <div className="help-text">
          <h2>Game Rules</h2>
          <ul>
            <li>Guess the letters in the word.</li> {/* Rule 1 */}
            <li>You have 10 incorrect guesses before you lose.</li> {/* Rule 2 */}
            <li>Each incorrect guess adds a part to the hangman figure.</li> {/* Rule 3 */}
            <li>If you guess all the letters in the word before reaching 10 incorrect guesses, you win!</li> {/* Rule 4 */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Help; // Export the component for use in other parts of the app
