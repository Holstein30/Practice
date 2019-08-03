const merge = intervals => {
  if (!intervals.length) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const res = [intervals[0]];

  for (let i = 0; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastInterval = res[res.length - 1];
  }
};

module.exports = merge;
