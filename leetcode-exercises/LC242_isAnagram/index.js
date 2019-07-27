function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sCharCounts = {};

  // Fill sCharCounts
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    sCharCounts[sChar] = sCharCounts[sChar] + 1 || 1;
  }
}

module.exports = isAnagram;
