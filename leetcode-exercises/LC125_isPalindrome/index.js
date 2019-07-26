function isPalindrome(s) {
  const stringArray = s.split("");
  const reverseStringArray = stringArray.slice().reverse();
  let palidromeBool = true;
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] != reverseStringArray[i]) {
      palidromeBool = false;
    }
  }
  return palidromeBool;
}

module.exports = isPalindrome;
