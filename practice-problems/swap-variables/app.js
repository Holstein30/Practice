// * Given two integers, write a function that swaps them without using any temporary variables.

let a = 1;
let b = 2;

let swap = (i, j) => {
  i = i + j;
  j = i - j;
  i = i - j;

  return `a: ${i} - b: ${j}`;
};

console.log(swap(a, b));
