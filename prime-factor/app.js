// Project Euler problem 3
// What is the largest prime factor of the number 600851475143

// Prime = Only divisible by itself and one
// Factors = number that goes into another number (ie: 5 is a factor of 25)

// First need to write a function that determines all prime factors of a given number -

let primeFactors = [];

let getPrimeFactors = num => {
  let emptyArray = new Array(num);

  emptyArray.forEach(i => {
    console.log(i);
  });
};

getPrimeFactors(10);
