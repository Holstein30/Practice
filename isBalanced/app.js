//  Take a string and return true or false indicating whether its curly braces are balanced
// First split variable into an array
// Next filter array so that only the curly brackets are left
// Then I can loop through and first check if there is the correct count - if not return false
// If count is correct I would check that the order is correct based on the count - this will return final answer

function isBalanced(variable) {
  const splitArray = variable.split("");
  const curlyArray = splitArray.filter(
    element => element === "{" || element === "}"
  );
  console.log(curlyArray);
}

isBalanced("}{"); // false
isBalanced("{{}"); // false
isBalanced("{}{}"); // true
isBalanced("foo { bar { baz } boo }"); // true
isBalanced("foo { bar { baz }"); // false
isBalanced("foo { bar } }"); // false
