const reverseString = function(string) {
    let result = '';
    for (let i = string.length; i >= 0; i--) {
        result += string.charAt(i);
    }
    return result;
}

module.exports = reverseString
