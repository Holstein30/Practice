// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = (arr, target) => {
  let tmp = arr[0];
  const res = arr.map(num => {
    console.log(tmp + num);
    if (tmp + num === target) {
      return `${tmp} + ${num} = ${target}`;
    }
  });
  console.log(res);
};

const test = twoSum([2, 7, 11, 15], 9);

console.log(test);
