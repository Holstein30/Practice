// Project Euler #6
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// Could use an array and map over the numbers.
// 3 functions - sum of squares, square of sum, and difference.

const oneHundred = [];
for (let i = 1; i <= 100; i++) {
  oneHundred.push(i);
}

function sumOfSquares() {
  const squareNums = oneHundred.map(num => Math.pow(num, 2));
  const sum = squareNums.reduce((acc, val) => acc + val);
  return sum;
}

function squaresOfSum() {
  const sum = oneHundred.reduce((acc, val) => acc + val);
  const squaredSum = Math.pow(sum, 2);
  return squaredSum;
}

sumOfSquares();
squaresOfSum();
