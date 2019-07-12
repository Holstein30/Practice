// Project Euler Problem 9
// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product of abc

// First lets write a simple function to determine if Pythagorean Theorem is met

function isPytha(a, b, c) {
  if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
    return true;
  }
  return false;
}

const pythBool = isPytha(3, 4, 5);
const pythBool2 = isPytha(2, 3, 6);

console.log({ pythBool, pythBool2 });
