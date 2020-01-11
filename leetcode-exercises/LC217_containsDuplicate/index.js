const containsDuplicate = nums => {
    const visitedNums = {}; // {7: true, 2: true};

    for (let i = 0; i < nums.length; i++) {
        const num = visitedNums[i];

        if (visitedNums[num]) {
            return true;
        } else {
            visitedNums[num] = true;
        }
    }
    return false;
};

module.exports = containsDuplicate;
