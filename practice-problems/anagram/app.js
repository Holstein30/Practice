// Check whether two strings are anagram of each other
function split(a, b) {
  anagram(a.split("").sort(), b.split("").sort());
}

function anagram(a, b) {
  let iterate = 0;
  if (a.length !== b.length) {
    console.log(false);
  } else {
    a.forEach((x, i) => {
      if (a[i] === b[i]) {
        iterate++;
      }
    });
  }
  if (a.length === iterate) {
    console.log(true);
  } else {
    console.log(false);
  }
}

const checkAnagram = (word, anagram) => {
  return (
    anagram
      .toString()
      .toLowerCase()
      .split("")
      .join(" ") ===
    word
      .toString()
      .toLowerCase.split("")
      .sort()
      .join(" ")
  );
};
