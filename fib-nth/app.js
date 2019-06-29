// Return the nth Fibonacci number
const fibonacci = n => {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

const test1 = fibonacci(0); // 0
const test2 = fibonacci(1); // 1
const test3 = fibonacci(10); // 55
const test4 = fibonacci(20); // 6765

console.log({ test1, test2, test3, test4 });
