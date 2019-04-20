// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(param) {
  let parArray = param.toLowerCase().split("");
  let result = "";
  parArray.forEach((letter, i) => {
    if (i === 0) {
      result += letter.toUpperCase();
    } else {
      result += `-${letter.toUpperCase()}`;
      for (let x = 0; x < i; x++) {
        result += letter;
      }
    }
  });
  return result;
}

console.log(accum("abcd"));
console.log(accum("RqAEzty"));
