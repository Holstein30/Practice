// Project Euler problem 2
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms

// First need an equation to calculate Fibonacci numbers - i think its (n1 - 1) + (n2 + 1)
// Maybe set up variables to be manipulated before loop??
// ex: 1, 2, 3, 5, 8, 13, ...

const fibonacci = () => {
  let first = 0;
  let second = 1;
  let result = 0;

  for (let i = 0; i < 10; i++) {
    const sum = first + second;
    if (sum % 2 === 0) {
      result += sum;
    }
    first = second;
    second = sum;
  }
  console.log(result);
  return result;
};

fibonacci();
