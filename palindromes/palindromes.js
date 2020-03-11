const palindromes = function (string) {
    let cleaned = string.replace(/[^a-zA-Z]+/g, '').toLowerCase();
    let halfLen = Math.floor(cleaned.length / 2);
    for (let i = 0; i < halfLen; i++) {
        if (cleaned.charAt(i) != cleaned.charAt(cleaned.length - (i + 1))) {
            return false
        }
    }
    return true;
}

module.exports = palindromes
