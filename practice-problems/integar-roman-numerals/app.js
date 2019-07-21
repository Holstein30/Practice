// * Given an integer, write a function to return its roman numeral representation.

// Array holding Roman Numerals (up to 10 for now)

let romNumArray = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

let toRomNum = num => {
  let newNum = num - 1;
  return romNumArray[newNum];
};

console.log(toRomNum(9));
