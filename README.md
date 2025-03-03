# Wordle Clone

This project is a clone of the popular word game Wordle, designed to be played online. The game is optimized for mobile use and allows players to guess a five-letter word within six attempts. You can try the live version of the game [here](https://as-sebesta.github.io/AbbysWordle/).

## Features

- Simple and intuitive user interface
- Responsive design for mobile devices
- Random word selection from a predefined list
- Visual feedback for correct and incorrect guesses

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/wordle-clone.git
   cd wordle-clone
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the server:**

   ```bash
   node server.js
   ```

4. **Open your browser and go to:**

   ```
   http://localhost:3000
   ```

## Project Structure

- `public/`: Contains the front-end files (HTML, CSS, JavaScript)
- `server.js`: Node.js server file
- `package.json`: Project metadata and dependencies

## How to Play

1. Enter a five-letter word in the input field.
2. Click the "Submit" button to check your guess.
3. The game will provide feedback:
   - Green: Correct letter in the correct position
   - Yellow: Correct letter in the wrong position
   - Gray: Incorrect letter

4. You have six attempts to guess the correct word.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Inspired by the original [Wordle](https://www.nytimes.com/games/wordle/index.html) game. 