// Project Euler Problem 1
// Find the sum of all multiples of 3 or 5 below 1000

let multiples = () => {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(multiples());
