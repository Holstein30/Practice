// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

const isSorted = nums => {
  let previousNum;
  let sortBool = true;
  nums.forEach(num => {
    if (previousNum) {
      if (previousNum > num) {
        return (sortBool = false);
      } else {
        previousNum = num;
      }
    } else {
      previousNum = num;
    }
  });
  console.log(sortBool);
};

isSorted([]); // true
isSorted([-Infinity, -5, 0, 3, 9]); // true
isSorted([3, 9, -3, 10]); // false
isSorted([20, 21, 22, 22, 24, 90]); // true
