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
  if (keys1.length < keys2.length) {
    return false;
  }
  let compareBool = false;
  const keysCompare = keys1.forEach(key => {
    if (keys2.includes(key)) {
      return (compareBool = true);
    }
  });
  return compareBool;
}

console.log(equivProps(obj1, obj2)); // true

console.log(
  equivProps(
    { age: 25, hair: "long", beard: true },
    { hair: "long", beard: true }
  )
); // true
console.log(
  equivProps(
    { hair: "long", beard: true },
    { age: 25, hair: "long", beard: true }
  )
); // false
console.log(
  equivProps(
    { hair: "long", beard: true },
    { age: 26, hair: "long", beard: true }
  )
); // false
