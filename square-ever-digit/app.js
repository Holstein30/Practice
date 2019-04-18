// square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  let digits = num.toString().split("");
  let result = "";
  digits.map(digit => {
    result += Math.pow(digit, 2).toString();
  });
  return Number(result);
}

console.log(squareDigits(9119));
