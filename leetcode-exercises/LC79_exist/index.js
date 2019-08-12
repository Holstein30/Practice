function exist(board, word) {
  let found = false;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === word[0]) {
        defaultStatus(row, col, 0, word);
      }
    }
  }
}

module.exports = exist;
