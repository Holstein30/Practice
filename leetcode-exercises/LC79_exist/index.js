function exist(board, word) {
  let found = false;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col] === word[0]) {
        defaultStatus(row, col, 0, word);
      }
    }
  }

  function dfs(row, col, count, word) {
    if (count === word.length) {
      found = true;
      return;
    }

    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      board[row][col] !== word[count] ||
      found
    ) {
      return;
    }
  }
}

module.exports = exist;
