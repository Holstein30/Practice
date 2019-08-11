function spiralOrder(matrix) {
  const spiralArray = [];
  if (matrix.length === 0) {
    return spiralArray;
  }

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  let dir = "right";

  while (top <= bottom && left <= right) {
    if (dir === "right") {
      for (let i = left; i <= right; i++) {
        spiralArray.push(matrix[top][i]);
      }
      top++;
      dir = "down";
    }
  }
}

module.exports = spiralOrder;
