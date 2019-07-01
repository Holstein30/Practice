// Take an array of numbers, and returns the unique numbers.
//! Extra challenge : do it in O(N) time?

// Can use reduce method and create an object with a count for each number - the keys will be unique and can then return the keys

function uniq(arr) {
  const unique = arr.reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item]++;
    return obj;
  }, {});
  return Object.keys(unique);
}

const test = uniq([]); // []
const test2 = uniq([1, 4, 2, 2, 3, 4, 8]); // [1, 2, 3, 4, 8]
const test3 = uniq([1, 1, 1, 4, 5, 5, 9, 9]); // [1, 4, 5, 9]

console.log({ test, test2, test3 });
