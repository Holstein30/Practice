// isPrime - Returns true or false, indicating whether the given number is prime.

const isPrime = num => {
  if (num < 2) {
    return false;
  }
  let prime = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

const test1 = isPrime(0); // false
const test2 = isPrime(1); // false
const test3 = isPrime(17); // true
const test4 = isPrime(10000000000000); // false
const test5 = isPrime(6857); // true

console.log(test1, test2, test3, test4, test5);
