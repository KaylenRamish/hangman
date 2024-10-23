import React, { useState } from 'react';
import './App.css';
import HangmanFigure from './components/HangmanFigure';
import WordDisplay from './components/WordDisplay';
import AlphabetButtons from './components/AlphabetButtons';
import GameStatus from './components/GameStatus';

const words = ["react", "javascript", "hangman", "coding"];
const maxWrongGuesses = 10;

function App() {
  const [word] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters([...guessedLetters, letter]);
    if (!word.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <h1>Hangman Game</h1>
      <HangmanFigure wrongGuesses={wrongGuesses} />
      <GameStatus wrongGuesses={wrongGuesses} maxWrongGuesses={maxWrongGuesses} word={word} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <AlphabetButtons handleGuess={handleGuess} guessedLetters={guessedLetters} />
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
}

export default App;
