// Given an arrsay of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = (nums, target) => {
  const res = [];
  nums.forEach(num => {
    nums.forEach(num2 => {
      if (num + num2 === target && res.length === 0) {
        res.push(num, num2);
      }
    });
  });
  return res;
};

const test = twoSum([2, 7, 11, 15], 9);

console.log(test);
