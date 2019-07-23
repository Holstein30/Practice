//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
  const isPalindrome = num => {
    const numArray = num.toString().split("");
    const reverseNumArray = numArray.slice().reverse();
    let palidromeBool = true;
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] != reverseNumArray[i]) {
        palidromeBool = false;
      }
    }
    return palidromeBool;
  };
}

module.exports = longestPalindrome;
