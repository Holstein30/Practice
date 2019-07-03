//  Implement the sort function to sort an array of numbers
// First try it with a bubble sort
// Will need a swapped boolean and a while loop (maybe do/while)

function sort(arr) {
  let swapped;
  do {
    swapped = false;
    // Need to loop over array
    for (let i = 0; i < arr.length; i++) {
      // Next need to check if two indexes next to each other are sorted
      if (arr[i] > arr[i + 1]) {
        // need a temporary variable to hold values for swapping
        let temp = arr[i];
        // reassign indexes to swap variables in those indexes
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

const test = sort([]); // []
const test2 = sort([-4, 1, Infinity, 3, 3, 0]); // [-4, 0, 1, 3, 3, Infinity]
const test3 = sort([12, 4, 2, 9, 100, 14, 3, 44]); // [2, 3, 4, 9, 12, 14, 44, 100]

console.log({ test, test2, test3 });
