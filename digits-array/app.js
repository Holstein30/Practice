// Write a JavaScript program to converts a specified number to an array of digits.

const digitsArray = num => {
  return [...`${num}`].map(n => parseInt(n));
};

console.log(digitsArray(10));
console.log(digitsArray(1234));
console.log(digitsArray(91230));
