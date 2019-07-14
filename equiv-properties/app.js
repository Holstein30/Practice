// Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

const obj1 = {
  name: "name",
  age: 21,
  height: "6",
  weight: 200
};

const obj2 = {
  hmmm: "hmm",
  rawr: "rawr",
  uhhh: "uhh",
  name: "name"
};

function equivProps(a, b) {
  const keys1 = Object.keys(a);
  const keys2 = Object.keys(b);
  console.log({ keys1, keys2 });
}

equivProps(obj1, obj2);
