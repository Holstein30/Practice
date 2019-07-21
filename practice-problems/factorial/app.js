// Return a number that is the factorial of the given number.

let factorial = num => {
  if (num === 0) {
    return 1;
  }
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
};

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720
