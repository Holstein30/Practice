function groupAnagrams(strs) {
  let grouped = {};

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const key = word
      .split("")
      .sort()
      .join("");

    if (!grouped[key]) {
      grouped[key] = [];
    }
  }
}

module.exports = groupAnagrams;