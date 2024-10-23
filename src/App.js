import React, { useState } from 'react'; // Import necessary React hooks
import './App.css'; // Import CSS styles for the App component
import HangmanFigure from './components/HangmanFigure'; // Import HangmanFigure component
import WordDisplay from './components/WordDisplay'; // Import WordDisplay component
import AlphabetButtons from './components/AlphabetButtons'; // Import AlphabetButtons component
import GameStatus from './components/GameStatus'; // Import GameStatus component
import HelpModal from './components/HelpModal'; // Import HelpModal component

// Predefined list of words to choose from
const words = ["react", "javascript", "hangman", "coding"];
const maxWrongGuesses = 10; // Maximum number of incorrect guesses allowed

// Create an array of letters for the alphabet buttons
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function App() {
  // State to store the randomly selected word
  const [word] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState([]); // State for guessed letters
  const [wrongGuesses, setWrongGuesses] = useState(0); // State for tracking wrong guesses
  const [showHelp, setShowHelp] = useState(false); // State to control Help Modal visibility

  // Handles the guessing of a letter
  const handleGuess = (letter) => {
    // Prevent duplicate guesses
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters([...guessedLetters, letter]); // Update guessed letters

    // Increment wrong guesses if the letter is not in the word
    if (!word.toUpperCase().includes(letter)) { // Check letter against the word
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  // Handles restarting the game
  const handleRestart = () => {
    window.location.reload(); // Reload the page to restart the game
  };

  // Opens the help modal
  const openHelp = () => {
    setShowHelp(true); // Show help modal
  };

  // Closes the help modal
  const closeHelp = () => {
    setShowHelp(false); // Hide help modal
  };

  // Check for win or loss conditions
  const isWinner = word.split('').every(letter => guessedLetters.includes(letter.toUpperCase()));
  const isLoser = wrongGuesses >= maxWrongGuesses;

  return (
    <div className="App"> {/* Main container for the App */}
      <h1>Hangman Game</h1> {/* Game title */}
      <HangmanFigure wrongGuesses={wrongGuesses} /> {/* Display hangman figure */}
      <GameStatus 
        wrongGuesses={wrongGuesses} 
        maxWrongGuesses={maxWrongGuesses} 
        word={word} 
      /> {/* Display current game status */}
      <WordDisplay 
        word={word} 
        guessedLetters={guessedLetters} 
      /> {/* Display the word being guessed */}
      
      <div className="alphabet-buttons">
        {/* Render alphabet buttons using map() */}
        {alphabet.map((letter) => (
          <AlphabetButtons 
            key={letter} // Use the letter as a unique key
            letter={letter} // Pass the letter as a prop
            handleGuess={handleGuess} // Pass the guessing function
            guessedLetters={guessedLetters} // Pass the list of guessed letters
          />
        ))}
      </div> {/* Display alphabet buttons for guessing letters */}

      {/* Display game outcome message */}
      {isWinner && <h2 className="message">Congratulations! You've won!</h2>}
      {isLoser && <h2 className="message">Sorry, you've lost! The word was "{word}".</h2>}

      <button onClick={handleRestart}>Restart Game</button> {/* Button to restart the game */}
      <button onClick={openHelp}>Help</button> {/* Button to open help modal */}
      {showHelp && <HelpModal closeHelp={closeHelp} />} {/* Conditionally render HelpModal */}
    </div>
  );
}

export default App; // Export the App component for use in other parts of the application
