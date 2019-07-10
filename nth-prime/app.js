// Project Euler Problem 7
// What is the 10,001st prime number?

// Function with a loop to go nth number passed in
// use isPrime function to check and then push all numbers into an array until the array lenght is equal to num

function nthPrime(num) {
  const primeArray = [2];
  let nthPrimeNum;
  for (let i = 3; primeArray.length <= num; i += 2) {
    if (isPrime(i)) {
      primeArray.push(i);
      if (primeArray.length === num) {
        nthPrimeNum = i;
      }
    }
  }
  return nthPrimeNum;
}

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

const test = nthPrime(10001);

console.log(test);

// performance can be improved
