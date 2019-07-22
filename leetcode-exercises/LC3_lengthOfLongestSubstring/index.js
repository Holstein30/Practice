// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
  const sArray = s.split("");
  console.log(sArray);
}

lengthOfLongestSubstring("abcabcbb");

module.exports = lengthOfLongestSubstring;
