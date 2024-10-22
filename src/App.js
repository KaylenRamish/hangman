import React, { useState } from 'react';
import './App.css';

// Example word list for the game
const words = ["react", "javascript", "hangman", "coding"];
// Set maximum allowed wrong guesses to 10
const maxWrongGuesses = 10;

function App() {
  // Randomly select a word from the list
  const [word] = useState(words[Math.floor(Math.random() * words.length)]);
  // State to store guessed letters
  const [guessedLetters, setGuessedLetters] = useState([]);
  // State to store the number of wrong guesses
  const [wrongGuesses, setWrongGuesses] = useState(0);

  // Handle letter guesses
  const handleGuess = (letter) => {
    // Prevent guessing the same letter twice
    if (guessedLetters.includes(letter)) return;

    // Add guessed letter to the list of guessed letters
    setGuessedLetters([...guessedLetters, letter]);

    // If the guessed letter is not in the word, increment wrong guesses
    if (!word.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  // Render the word display with blanks and correctly guessed letters
  const renderWord = () => {
    return word.split("").map((letter, index) =>
      guessedLetters.includes(letter) ? (
        <span key={index} className="letter">{letter}</span>
      ) : (
        // Display an underscore for unguessed letters
        <span key={index} className="blank" style={{ borderBottom: '2px solid black', margin: '0 5px' }}>&nbsp;</span>
      )
    );
  };

  // Restart the game by reloading the page
  const handleRestart = () => {
    window.location.reload();
  };

  // Render the hangman figure based on the number of wrong guesses
  const renderHangman = () => {
    return (
      <div className="hangman-container">
        {/* Display the base at the first wrong guess */}
        {wrongGuesses > 0 && <div className="stand-base"></div>}
        {/* Display the vertical post after 2 wrong guesses */}
        {wrongGuesses > 1 && <div className="stand-vertical"></div>}
        {/* Display the horizontal post after 3 wrong guesses */}
        {wrongGuesses > 2 && <div className="stand-horizontal"></div>}
        {/* Display the rope after 4 wrong guesses */}
        {wrongGuesses > 3 && <div className="rope"></div>}
        {/* Display the head after 5 wrong guesses */}
        {wrongGuesses > 4 && <div className="head"></div>}
        {/* Display the body after 6 wrong guesses */}
        {wrongGuesses > 5 && <div className="body"></div>}
        {/* Display the left arm after 7 wrong guesses */}
        {wrongGuesses > 6 && <div className="left-arm"></div>}
        {/* Display the right arm after 8 wrong guesses */}
        {wrongGuesses > 7 && <div className="right-arm"></div>}
        {/* Display the left leg after 9 wrong guesses */}
        {wrongGuesses > 8 && <div className="left-leg"></div>}
        {/* Display the right leg after 10 wrong guesses */}
        {wrongGuesses > 9 && <div className="right-leg"></div>}
      </div>
    );
  };

  return (
    <div className="App">
      {/* Title of the game */}
      <h1>Hangman Game</h1>
      
      {/* Display the hangman figure based on wrong guesses */}
      <div className="hangman-figure">{renderHangman()}</div>
      
      {/* Show the current count of wrong guesses */}
      <h3>Incorrect guesses: {wrongGuesses} / {maxWrongGuesses}</h3>
      
      {/* Render the word with blanks and guessed letters */}
      <div className="word-display">{renderWord()}</div>
      
      {/* Render alphabet buttons for guessing letters */}
      <div className="alphabet">
        {'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => (
          <button
            key={letter}
            onClick={() => handleGuess(letter)}
            disabled={guessedLetters.includes(letter)} // Disable button if already guessed
          >
            {letter.toUpperCase()}
          </button>
        ))}
      </div>
      
      {/* If the user has made too many wrong guesses, display "Game Over" */}
      {wrongGuesses >= maxWrongGuesses && <h2>Game Over! The word was: {word}</h2>}
      
      {/* Button to restart the game */}
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
}

export default App;
