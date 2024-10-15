import React from 'react';
import Hangman from './components/Hangman'; // Import the Hangman component
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hangman Game</h1> {/* Title for the game */}
        <Hangman /> {/* Render the Hangman game component */}
      </header>
    </div>
  );
}

export default App;
