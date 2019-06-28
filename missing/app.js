// Take an unsorted array of unique numbers (ie. no repeats) from 1 through some number n, and return the missing number in the sequence (there are either no missing numbers, or exactly one missing number).

function missing(arr) {
  const sortedArr = arr.sort();
  console.log(sortedArr);
}
// First need to sort the array
// Create a variable to hold the missing number
// Next loop through and compare numbers to indexes and determine if a number is missing
// return the missing number

missing([]); // undefined
missing([1, 4, 3]); // 2
missing([2, 3, 4]); // 1
missing([5, 1, 4, 2]); // 3
missing([1, 2, 3, 4]); // undefined
