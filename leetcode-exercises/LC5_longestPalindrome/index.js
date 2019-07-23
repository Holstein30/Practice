//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {}

const isPalindrome = num => {
  const numArray = num.split("");
  const reverseNumArray = numArray.slice().reverse();
  let palidromeBool = true;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] != reverseNumArray[i]) {
      palidromeBool = false;
    }
  }
  console.log(palidromeBool);
  return palidromeBool;
};

isPalindrome("cbbd");
isPalindrome("abba");

module.exports = longestPalindrome;
