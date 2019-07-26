function isPalindrome(s) {
  // Sanitize the input string
  s = s.toLowerCase().replace(/[\W_]/g, "");
}

module.exports = isPalindrome;
