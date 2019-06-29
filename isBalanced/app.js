//  Take a string and return true or false indicating whether its curly braces are balanced
// First split variable into an array
// Next filter array so that only the curly brackets are left
// Next I can do a quick check to see if the length of the array is odd - if so return false
// Next I beleive I could use another array to hold the starting braces for comparison
// Finally I would loop through the curly brackets array and push any opening brackets onto the starting array then compare any closing brackets to that array to test balance

function isBalanced(variable) {
  const splitArray = variable.split("");
  const curlyArray = splitArray.filter(
    element => element === "{" || element === "}"
  );
  if (curlyArray.length % 2 != 0) {
    return false;
  }
  let startStack = [];
  let balancedBool = false;
  const balanced = curlyArray.forEach(element => {
    if (element === "{") {
      startStack.push(element);
    }
    if (element === "}") {
      if (startStack.pop() === "{") {
        balancedBool = true;
      } else {
        balancedBool = false;
      }
    }
  });
  return balancedBool;
}

const test1 = isBalanced("}{"); // false
const test2 = isBalanced("{{}"); // false
const test3 = isBalanced("{}{}"); // true
const test4 = isBalanced("foo { bar { baz } boo }"); // true
const test5 = isBalanced("foo { bar { baz }"); // false
const test6 = isBalanced("foo { bar } }"); // false
const test7 = isBalanced("{{}}{{}}{{{}{{}}}}"); // true

console.log({ test1, test2, test3, test4, test5, test6, test7 });
