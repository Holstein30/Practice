// Proiect Euler problem 3
// What is the largest prime factor of the number 600851475143

// Prime = Only divisible by itself and one
// Factors = number that goes into another number (ie: 5 is a factor of 25)

// First need to write a function that determines all factors of a given number
// Next need to determine if factors are prime
// Last need to determine which prime factor is the largest

let primeFactors = [];

let getFactors = num => {
  let factors = [];
  // comparing square root equivalency to num divided by 2 (since anything above that value isn't a factor), then increasing i by 2 (since even numbers aren't prime)
  for (let i = 1; i * i < num / 2; i += 2) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
};

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

let maxPrimeFactor = num => {
  let factors = getFactors(num);
  factors.forEach(factor => {
    if (isPrime(factor)) {
      primeFactors.push(factor);
    }
  });

  let maxPrime = Math.max(...primeFactors);
  return maxPrime;
};

console.time("maxPrimeFactor");
console.log(maxPrimeFactor(600851475143));
console.timeEnd("maxPrimeFactor");

// Solution can definitely be improved upon
