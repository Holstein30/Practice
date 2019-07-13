// Project Euler Problem 10
// Find the sum of all the primes below 2 million

// Need function that will determine if number is prime
// Then need a way to efficiently loop up to 2 million
// Can add those primes to an array and use the ruduce method

const primes = [2];

let isPrime = factor => {
  let prime = true;
  for (let i = 2; i < factor; i++) {
    if (factor % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

let getPrimes = () => {
  for (let i = 3; i < 10; i += 2) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primeSum();
};

let primeSum = () => {
  return primes.reduce((a, b) => a + b, 0);
};

console.log(getPrimes());
