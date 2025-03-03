document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const guessInput = document.getElementById('guess-input');
    const submitGuess = document.getElementById('submit-guess');
    const wordLength = 5;
    let currentRow = 0;
    let currentGuess = '';

    const targetWord = 'apple'; // This should be fetched from the server

    function createBoard() {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < wordLength; j++) {
                const cell = document.createElement('div');
                board.appendChild(cell);
            }
        }
    }

    function updateBoard() {
        const rowStart = currentRow * wordLength;
        for (let i = 0; i < wordLength; i++) {
            board.children[rowStart + i].textContent = currentGuess[i] || '';
        }
    }

    function checkGuess() {
        if (currentGuess.length !== wordLength) return;

        // Check the guess against the target word
        for (let i = 0; i < wordLength; i++) {
            const cell = board.children[currentRow * wordLength + i];
            if (currentGuess[i] === targetWord[i]) {
                cell.style.backgroundColor = 'green';
            } else if (targetWord.includes(currentGuess[i])) {
                cell.style.backgroundColor = 'yellow';
            } else {
                cell.style.backgroundColor = 'gray';
            }
        }

        currentRow++;
        currentGuess = '';
        guessInput.value = '';
    }

    guessInput.addEventListener('input', (e) => {
        currentGuess = e.target.value.toLowerCase();
        updateBoard();
    });

    submitGuess.addEventListener('click', checkGuess);

    createBoard();
}); 