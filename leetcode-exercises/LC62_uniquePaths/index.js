function uniquePaths(m, n) {
  const dpMatrix = [];

  for (let row = 0; row <= n; row++) {
    dpMatrix.push([]);
  }

  for (let row = 0; row < n; row++) {
    dpMatrix[row][0] = 1;
  }

  for (let col = 0; col < m; col++) {
    dpMatrix[0][col] = 1;
  }
}

module.exports = uniquePaths;
