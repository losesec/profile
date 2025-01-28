const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const resetButton = document.getElementById('resetGameBtn');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleCellClick(event) {
  const clickedCellIndex = event.target.getAttribute('data-cell-index');
  if (gameBoard[clickedCellIndex] !== '' || !gameActive) return;

  gameBoard[clickedCellIndex] = currentPlayer;
  event.target.textContent = currentPlayer;

  checkWinner();
  switchPlayer();
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameActive = false;
      statusDisplay.textContent = `Player ${currentPlayer} wins!`;

      // Highlight the winning combination
      highlightWinningCombination(combination);
      return;
    }
  }

  if (!gameBoard.includes('')) {
    gameActive = false;
    statusDisplay.textContent = 'It\'s a draw!';
  }
}

function highlightWinningCombination(combination) {
  combination.forEach(index => {
    cells[index].style.backgroundColor = '#4CAF50';  // Highlight the winning cells
  });
}

function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = 'X';
  statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
  cells.forEach(cell => {
    cell.textContent = '';
    cell.style.backgroundColor = ''; // Reset the background color
  });
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
