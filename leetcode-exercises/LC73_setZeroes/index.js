function setZeroes(matrix) {
  let firstColHasZero = false;
  let firstRowHasZero = false;

  // Check if first column has zero
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // Check if first row has zero
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      firstRowHasZero = true;
      break;
    }
  }
}

module.exports = setZeroes;
