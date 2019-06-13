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
  console.log(numArray);
  console.log(reverseNumArray);
};

isPalindrome(9393);
