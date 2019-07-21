// Find the intersection of two arrays.
//! Extra Challenge: Do it in O(M+N) time (where M and N are the lengths of the two arrays)?

// Need function with 2 arrays as parameters
function intersection(arr1, arr2) {
  // Need array to hold final answers
  const intersectionArray = [];
  // Next loop over each array and compare values
  arr1.forEach(element =>
    arr2.forEach(element2 => {
      // test for equality
      if (element === element2) {
        // push if equal
        intersectionArray.push(element);
      }
    })
  );
  // return sorted array of the answer
  return intersectionArray.sort();
}

const test = intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]); // [4, 1]
const test2 = intersection([1, 5, 4, 2], [7, 12]); // []
const test3 = intersection([7, 1, 5, 2, 3, 6], [3, 8, 6, 20, 7]); // [3, 6, 7]

console.log({ test, test2, test3 });
