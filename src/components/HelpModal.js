import React from 'react'; // Import React to create the component
import './HelpModal.css'; // Import any necessary styles for the modal

// Define a functional component 'HelpModal' that takes a prop 'closeHelp'
function HelpModal({ closeHelp }) {
  return (
    <div className="help-modal"> {/* Container for the help modal */}
      <div className="help-content"> {/* Content section of the modal */}
        <h2>How to Play Hangman</h2> {/* Heading for the instructions */}
        <p>The goal of the game is to guess the hidden word, one letter at a time.</p> {/* Brief description of the game */}
        <ul>
          <li>You have a maximum of 10 wrong guesses allowed.</li> {/* Rule 1 */}
          <li>Click a letter to guess it. If it's in the word, it will appear in its correct position(s).</li> {/* Rule 2 */}
          <li>If you guess a letter incorrectly, a part of the hangman figure will be drawn.</li> {/* Rule 3 */}
          <li>You win if you guess the word before the hangman is fully drawn!</li> {/* Rule 4 */}
        </ul>
        <button onClick={closeHelp}>Close</button> {/* Button to close the help modal */}
      </div>
    </div>
  );
}

export default HelpModal; // Export the component for use in other parts of the app
