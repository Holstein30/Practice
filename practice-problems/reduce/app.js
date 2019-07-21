// Use the reduce function to return the sum, difference, product and quotient of an array

// First need functions to return the sum, difference, product and quotient
// Then need to use reduce to execute the reducer functions on each element of the array

const sum = (x, y) => {
  return x + y;
};

const difference = (x, y) => {
  return x - y;
};

const product = (x, y) => {
  return x * y;
};

const quotient = (x, y) => {
  return x / y;
};

const array = [1, 2, 3, 4];

const sumVar = array.reduce(sum);
const diffVar = array.reduce(difference);
const proVar = array.reduce(product);
const quoVar = array.reduce(quotient);

console.log(
  `Sum = ${sumVar} \nDifference = ${diffVar} \nProduct = ${proVar} \nQuotient = ${quoVar}`
);
