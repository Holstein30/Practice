// Project Euler problem 2
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms

// Fib. sequence ex: 1, 2, 3, 5, 8, 13, ...
// Whats the equation to calculate Fibonacci numbers? - its something like (n1 - 1) + (n2 + 1) or (i - 1) + (i - 2)??
// Maybe set up variables to be manipulated before loop so i don't  need the equation?

const fibonacci = () => {
  let first = 0;
  let second = 1;
  let result = 0;

  for (let i = 0; ; i++) {
    const sum = first + second;
    if (sum % 2 === 0) {
      result += sum;
    }
    if (sum > 4000000) {
      break;
    }
    first = second;
    second = sum;
  }
  console.log(result);
  return result;
};

fibonacci();
