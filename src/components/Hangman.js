import React, { useState, useEffect } from 'react';
import Word from './Word'; // Import the Word component to display the guessed word
import Letters from './Letters'; // Import the Letters component for guessing letters
import Help from './Help'; // Import the Help component for game rules
import RestartButton from './RestartButton'; // Import the RestartButton component to restart the game
import { randomWord } from '../words'; // Import the function to get a random word
import './Hangman.css'; // Import CSS styles for the Hangman component

const Hangman = () => {
  // State variables to manage game state
  const [word, setWord] = useState(randomWord()); // The word to guess
  const [guessedLetters, setGuessedLetters] = useState([]); // Letters that the user has guessed
  const [incorrectGuesses, setIncorrectGuesses] = useState(0); // Count of incorrect guesses
  const [isGameOver, setIsGameOver] = useState(false); // Flag to indicate if the game is over
  const [isWinner, setIsWinner] = useState(false); // Flag to indicate if the user has won
  const maxAttempts = 6; // Maximum number of incorrect guesses allowed

  // Effect to check game status: win or loss
  useEffect(() => {
    if (incorrectGuesses >= maxAttempts) {
      setIsGameOver(true); // End game if max attempts are reached
    }

    // Check if the user has guessed all letters in the word
    if (word.split('').every(letter => guessedLetters.includes(letter))) {
      setIsWinner(true); // Set winner state if all letters are guessed
      setIsGameOver(true); // End the game
    }
  }, [guessedLetters, incorrectGuesses, word]);

  // Function to handle letter guessing
  const handleGuess = (letter) => {
    // Only process if the letter hasn't been guessed before
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]); // Add guessed letter to state
      // Increment incorrect guesses if the letter is not in the word
      if (!word.includes(letter)) {
        setIncorrectGuesses(incorrectGuesses + 1);
      }
    }
  };

  // Function to restart the game
  const handleRestart = () => {
    setWord(randomWord()); // Get a new random word
    setGuessedLetters([]); // Reset guessed letters
    setIncorrectGuesses(0); // Reset incorrect guesses
    setIsGameOver(false); // Reset game over state
    setIsWinner(false); // Reset winner state
  };

  return (
    <div className="hangman-container">
      <h2>Guess the word!</h2>
      <Word word={word} guessedLetters={guessedLetters} /> {/* Display the current state of the word */}
      <p>Incorrect Guesses: {incorrectGuesses} / {maxAttempts}</p> {/* Show number of incorrect guesses */}
      <Letters onGuess={handleGuess} disabled={isGameOver} /> {/* Display letter buttons */}
      <Help /> {/* Display game rules */}
      {isGameOver && (
        <div>
          <p>{isWinner ? 'You won!' : 'You lost! The word was: ' + word}</p> {/* Inform user of game result */}
          <RestartButton onRestart={handleRestart} /> {/* Button to restart the game */}
        </div>
      )}
    </div>
  );
};

export default Hangman;
