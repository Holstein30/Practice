const merge = intervals => {
  if (!intervals.length) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const res = [intervals[0]];
};

module.exports = merge;
