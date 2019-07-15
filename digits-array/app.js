// Write a JavaScript program to converts a specified number to an array of digits.

const digitsArray = num => {
  return [...`${num}`];
};

console.log(digitsArray(10));
