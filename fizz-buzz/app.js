// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the
// number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz

let nums = [];

for (let i = 1; i < 101; i++) {
  nums.push(i);
}

function fizzBuzz() {
  nums.map(num => {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("fizzbuzz");
    } else if (num % 3 === 0) {
      console.log("fizz");
    } else if (num % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(num);
    }
  });
}

fizzBuzz();
