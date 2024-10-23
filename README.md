# Hangman Game

A classic **Hangman** game built using **React**. Guess the word by selecting letters, and be careful not to exceed the limit of incorrect guesses, or the hangman will be fully drawn!

## Table of Contents

- [Overview](#overview)
- [Rules of the Game](#rules-of-the-game)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [How to Play](#how-to-play)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Author](#author)
- [License](#license)

---

## Overview

This is a simple hangman game implemented with **React**. The player needs to guess the word letter by letter. With each incorrect guess, a part of the hangman drawing is revealed. The player has 10 chances to guess the word before the hangman is fully drawn and the game is lost.

---

## Rules of the Game

1. You have to guess a hidden word by selecting letters.
2. You have **10 incorrect guesses** before the hangman figure and stand are fully drawn.
3. Each incorrect guess adds a part of the hangman and its stand.
4. If you guess all the letters before reaching 10 incorrect guesses, you win the game.
5. If the hangman is fully drawn before guessing the word, you lose the game.

---

## Features

- **Interactive Hangman Drawing**: As the player makes incorrect guesses, the hangman figure and stand are progressively drawn.
- **10 Guesses Allowed**: More flexibility for guessing with 10 incorrect guesses allowed.
- **Responsive UI**: The app is mobile-friendly and works well across different screen sizes.
- **Random Word Generation**: Each game starts with a randomly selected word.
- **Visual Feedback**: Incorrect guesses generate parts of the hangman, and correct guesses reveal the hidden word.

---

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You need to have **Node.js** and **npm** installed. You can download both from [Node.js official website](https://nodejs.org/).
- Git installed on your machine for cloning the repository.

---

## Installation

To install and run this project on your local machine, follow these steps:

1. **Clone this repository** by running the following command in your terminal:

   ```bash
   git clone <repository-url>

2. **Install Node Modules** by running the following command in your terminal:

   npm install

3. **Run the game** by running the command:

   npm start
