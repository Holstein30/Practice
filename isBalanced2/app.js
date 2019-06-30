// Like the isBalanced function but supports 3 types of braces: curly {}, square [], and round (). A string with interleaving braces should return false.

function isBalanced2(variable) {
  const splitArray = variable.split("");
  const bracesArray = splitArray.filter(
    element =>
      element === "{" ||
      element === "}" ||
      element === "[" ||
      element === "]" ||
      element === "(" ||
      element === ")"
  );
  if (bracesArray.length % 2 != 0) {
    return false;
  }
  let startStack = [];
  let startStack2 = [];
  let startStack3 = [];
  let balancedBool = false;
  const balanced = bracesArray.forEach(element => {
    if (element === "{") {
      startStack.push(element);
    } else if (element === "(") {
      startStack2.push(element);
    } else if (element === "[") {
      startStack3.push(element);
    }
    if (element === "}") {
      if (startStack.pop() === "{") {
        balancedBool = true;
      } else {
        balancedBool = false;
      }
    } else if (element === ")") {
      if (startStack2.pop() === "(") {
        balancedBool = true;
      } else {
        balancedBool = false;
      }
    } else if (element === "]") {
      if (startStack3.pop() === "[") {
        balancedBool = true;
      } else {
        balancedBool = false;
      }
    }
  });
  return balancedBool;
}

const test1 = isBalanced2("(foo { bar (baz) [boo] })"); // true
const test2 = isBalanced2("foo { bar { baz }"); // false
const test3 = isBalanced2("foo { (bar [baz] } )"); // false

console.log({ test1, test2, test3 });
