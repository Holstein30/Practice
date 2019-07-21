// Project Euler Problem 9
// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product of abc

// First lets write a simple function to determine if Pythagorean Theorem is met

function isPytha(a, b, c) {
  if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
    return true;
  }
  return false;
}

// Next lets find the sets of triplets that equal 1000 and test them

function pythaLoop() {
  const pythagArray = [];
  let a = 1;
  let b = 2;
  let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  let sum = a + b + c;
  while (sum != 1001) {
    if (sum > 1000) {
      a++;
      b = a + 1;
    } else {
      b++;
    }
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    sum = a + b + c;
    if (sum === 1000 && isPytha(a, b, c)) {
      pythagArray.push(a, b, c, isPytha(a, b, c));
      break;
    }
  }
  return pythagArray;
}

const answer = pythaLoop();
console.log(answer);
