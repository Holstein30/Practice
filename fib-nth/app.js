// Return the nth Fibonacci number
const fibonacci = n => {
  let memo = {};
  const f = n => {
    let value;
    if (n in memo) {
      value = memo[n];
    } else {
      if (n < 0) {
        value = -1;
      } else if (n === 0 || n === 1) {
        value = n;
      } else {
        value = fibonacci(n - 1) + fibonacci(n - 2);
      }
      memo[n] = value;
    }
    return value;
  };
  return f(n);
};

const test1 = fibonacci(0); // 0
const test2 = fibonacci(1); // 1
const test3 = fibonacci(10); // 55
const test4 = fibonacci(20); // 6765

// !New Challenge - Modify so that function can handle numbers up to 50
// const test5 = fibonacci(50); // 12586269025

console.log({ test1, test2, test3, test4 });
