// a series of numbers in which each number ( Fibonacci number )
// is the sum of the two preceding numbers.
// The simplest is the series 1, 1, 2, 3, 5, 8, etc.
const fibonacci = function (pos) {
    pos = parseInt(pos);
    if (pos < 0) {
        return 'OOPS';
    }
    if (pos < 3) {
        return 1;
    }

    let fib = [1, 1];
    for (let i = 2; i < pos; i++) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }
    return fib.pop();
}

module.exports = fibonacci
