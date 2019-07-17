// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = (arr, target) => {
  const res = [];
  arr.filter((num, i) => {
    if (num + arr[i + 1] === target) {
      res.push(i);
      res.push(i + 1);
      return;
    }
  });
  return res;
};

const test = twoSum([2, 7, 11, 15], 9);

console.log(test);
