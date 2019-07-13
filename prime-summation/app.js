// Project Euler Problem 10
// Find the sum of all the primes below 2 million

// Need function that will determine if number is prime
// Then need a way to efficiently loop up to 2 million
// Can add those primes to an array and use the ruduce method

let isPrime = factor => {
  for (let i = 2; i <= Math.floor(Math.sqrt(factor)); i++) {
    if (factor % i === 0) {
      return false;
    }
  }
  return true;
};

let getPrimes = num => {
  const primes = [2];
  for (let i = 3; i < num; i += 2) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primeSum(primes);
};

let primeSum = primes => {
  return primes.reduce((a, b) => a + b, 0);
};

console.log(getPrimes(10));
console.time("getPrimes");
console.log(getPrimes(2000000));
console.timeEnd("getPrimes");
