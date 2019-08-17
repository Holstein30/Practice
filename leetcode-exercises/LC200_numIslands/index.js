function numIslands(grid) {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        count++;
        dfs(grid, row, col);
      }
    }
  }
}

module.exports = numIslands;
