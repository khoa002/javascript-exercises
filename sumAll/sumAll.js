const sumAll = function (lower, upper) {
    let sum = 0;
    if (typeof lower !== 'number' || typeof upper !== 'number') {
        return 'ERROR';
    }
    if (lower < 0 || upper < 0) {
        return 'ERROR';
    }
    if (lower > upper) {
        let oldLower = lower;
        lower = upper;
        upper = oldLower;
    }
    for (let i = lower; i <= upper; i++) {
        sum += i;
    }

    return sum;
}

module.exports = sumAll
