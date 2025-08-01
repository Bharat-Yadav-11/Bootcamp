const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const messageEl = document.getElementById('message');
const restartBtn = document.getElementById('restartBtn');

// 🎵 Load Sound Effects
const clickSound = new Audio('click.mp3');
const winSound = new Audio('win.mp3');
const drawSound = new Audio('draw.mp3');

let isXTurn = true;

const WIN_COMBINATIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

startGame();

restartBtn.addEventListener('click', startGame);

function startGame() {
    isXTurn = true;
    messageEl.textContent = '';
    cells.forEach(cell => {
        cell.classList.remove('x', 'o');
        cell.textContent = '';
        cell.disabled = false;
        cell.addEventListener('click', handleClick, { once: true });
    });
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = isXTurn ? 'x' : 'o';

    clickSound.currentTime = 0; // 🔁 Reset click sound
    clickSound.play();          // ▶️ Play click sound

    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        isXTurn = !isXTurn;
    }
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
    cell.textContent = currentClass.toUpperCase();
}

function checkWin(currentClass) {
    return WIN_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass);
        });
    });
}

function isDraw() {
    return [...cells].every(cell => cell.classList.contains('x') || cell.classList.contains('o'));
}

function endGame(draw) {
    if (draw) {
        messageEl.textContent = "It's a Draw!";
        drawSound.currentTime = 0;
        drawSound.play();
    } else {
        messageEl.textContent = `${isXTurn ? 'X' : 'O'} Wins!`;
        winSound.currentTime = 0;
        winSound.play();
    }
    cells.forEach(cell => cell.disabled = true);
}

// 🌗 Theme Toggle
const themeBtn = document.getElementById('themeToggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        themeBtn.textContent = '☀️ Light';
    } else {
        themeBtn.textContent = '🌙 Dark';
    }
});
