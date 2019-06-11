// Project Euler problem 3
// What is the largest prime factor of the number 600851475143

// Prime = Only divisible by itself and one
// Factors = number that goes into another number (ie: 5 is a factor of 25)

// First need to write a function that determines all prime factors of a given number -

let primeFactors = [];

let getFactors = num => {
  let factors = [];
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  getPrimeFactors(factors);
};

let getPrimeFactors = factors => {
  factors.forEach(num => {
    console.log(num);
  });
};

getFactors(10);
