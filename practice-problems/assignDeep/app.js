// Like Object.assign, but merges objects deeply. For the sake of simplicity, you can assume that objects can contain only numbers and other objects (and not arrays, functions, etc.).
// The spread operator should work and would be an easy solution

function assignDeep(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const test = assignDeep({ a: 1 }, {}); // { a: 1 }
const test2 = assignDeep({ a: 1 }, { a: 2 }); // { a: 2 }
const test3 = assignDeep({ a: 1 }, { a: { b: 2 } }); // { a: { b: 2 } }
const test4 = assignDeep({ a: { b: { c: 1 } } }, { a: { b: { d: 2 } }, e: 3 }); // { a: { b: { c: 1, d: 2 }}, e: 3 }

console.log({ test, test2, test3, test4 });
