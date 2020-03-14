const caesar = function (string, displaceBy) {
    let result = '';

    // manual way
    // large wrap not working
    const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let i = 0; i < string.length; i++) {
        if (uppercase.indexOf(string.charAt(i)) < 0
            && lowercase.indexOf(string.charAt(i)) < 0) {
            // if it's a special character, just use that
            result += string.charAt(i);
            continue;
        }

        let pos = uppercase.indexOf(string.charAt(i));
        if (pos > -1) {
            let newPos = pos + displaceBy
            if (newPos > uppercase.length - 1 || newPos < 0) {
                // if out of bound, wrap it
                if (newPos >= 0) {
                    newPos = newPos - uppercase.length;
                } else {
                    newPos = uppercase.length + newPos;
                }
            }
            result += uppercase[newPos];
        } else {
            pos = lowercase.indexOf(string.charAt(i));

            let newPos = pos + displaceBy
            if (newPos > lowercase.length - 1) {
                // if out of bound, wrap it
                if (newPos >= 0) {
                    newPos = newPos - lowercase.length;
                } else {
                    newPos = lowercase.length + newPos;
                }
            }
            result += lowercase[pos + displaceBy];

        }
    }
    
    return result;
}

module.exports = caesar
