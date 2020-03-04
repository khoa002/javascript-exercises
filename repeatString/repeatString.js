const repeatString = function (string, count) {
    if (count < 0) {
        return 'ERROR';
    }
    let result = '';
    for (let i = 0; i < count; i++) {
        result += string;
    }
    return result;
}

module.exports = repeatString
