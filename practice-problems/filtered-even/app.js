// Use the filter function to return all even numbers from an array

// First need to create a function that tells if a number is even
// Then create a variable that holds the value of the filtered result
// The filter will call the even number function to return new filtered array

const isEven = num => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const array = [1, 3, 5, 4, 88, 24];
const array2 = [2, 4, 6, 8, 10, 11];
const array3 = [1, 3, 5];

const filtered = array.filter(isEven);
const filtered2 = array2.filter(isEven);
const filtered3 = array3.filter(isEven);

console.log(filtered);
console.log(filtered2);
console.log(filtered3);
