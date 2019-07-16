// Write a JavaScript program to generate a random hexadecimal color code.

const hexCodeGenerator = () => {
  let code = Math.floor(Math.random() * 16777215).toString(16);
  return `#${code}`;
};

console.log(hexCodeGenerator());
