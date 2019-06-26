// Reverse a given string without using .reverse

// first need to split string into an array
// next create an empty array that will hold the reversed array
// loop through the string array backwards and push each item into the empty arry
// finally convert array back to a string and log it

function reverse(string) {
  const stringArr = string.split("");
  const reversedArr = [];
  for (let i = stringArr.length - 1; i >= 0; i--) {
    reversedArr.push(stringArr[i]);
  }
  return String(reversedArr);
}

const test = reverse("abcdef");
const test2 = reverse("bobby");
const test3 = reverse("random");
console.log({ test, test2, test3 });
