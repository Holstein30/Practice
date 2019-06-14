// Project Euler problem 4
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// First I need to write a function to figure out if a number is a palindrome.
// Next I will need to get the products of all pairs of two 3-digit numbers
// Then I will need to check each product for whether it is a palindrome or not

// How to check if palindrome. Could create 2 arrays off the number (1 normal and 1 reversed) then loop through and compare them.

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

// Need products for all pairs of 2 3-digit numbers that are palindromes

const threeDigitProduct = () => {
  let largestPalindrome = 0;
  for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      if (isPalindrome(i * j)) {
        if (largestPalindrome < i * j) {
          largestPalindrome = i * j;
        }
      }
    }
  }
  console.log(`Largest Palindrome: ${largestPalindrome}`);
};

console.time("threeDigitProduct");
threeDigitProduct();
console.timeEnd("threeDigitProduct");

// taking roughly ~200ms - likely able to be improved
