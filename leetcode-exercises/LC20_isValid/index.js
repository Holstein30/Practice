const isValid = s => {
  const splitArray = s.split("");
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
  let balancedBool = false;
  const balanced = bracesArray.forEach(element => {
    if (element === "{" || element === "(" || element === "[") {
      startStack.push(element);
    }
    if (element === "}") {
      if (startStack.pop() === "{") {
        balancedBool = true;
      } else {
        balancedBool = false;
      }
    } else if (element === ")") {
      if (startStack.pop() === "(") {
        balancedBool = true;
      } else {
        balancedBool = false;
      }
    } else if (element === "]") {
      if (startStack.pop() === "[") {
        balancedBool = true;
      } else {
        balancedBool = false;
      }
    }
  });
  return balancedBool;
};

module.exports = isValid;
