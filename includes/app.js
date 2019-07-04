//  Return true or false indicating whether the given number appears in the given sorted array.
// Can use includes method or a simple loop comparing values.
// Probably an algorithm that can dramatically improve performance.

const test = includes([1, 3, 8, 10], 8); // true
const test2 = includes([1, 3, 8, 8, 15], 15); // true
const test3 = includes([1, 3, 8, 10, 15], 9); // false
