const caesar = function (string, displaceBy) {
    let result = '';

    // manual solution
    const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    if (Math.abs(displaceBy) > uppercase.length) {
        // take care of the large wraps
        displaceBy = (displaceBy % uppercase.length);
    }

    for (let i = 0; i < string.length; i++) {
        if (uppercase.indexOf(string.charAt(i)) < 0
            && lowercase.indexOf(string.charAt(i)) < 0) {
            // if the char isn't found in either uppercase or lowercase array,
            // ignore and use/return it
            result += string.charAt(i);
            continue;
        }

        let pos = uppercase.indexOf(string.charAt(i));
        let arrayToUse = uppercase;
        if (pos === -1) {
            // if string isn't found in the uppercase array,
            // check the lowercase array
            pos = lowercase.indexOf(string.charAt(i));
            arrayToUse = lowercase;
        }

        let newPos = pos + displaceBy
        if (newPos > arrayToUse.length - 1 || newPos < 0) {
            // if out of bound, wrap it
            if (newPos >= 0) {
                newPos = newPos - arrayToUse.length;
            } else {
                newPos = arrayToUse.length + newPos;
            }
        }

        result += arrayToUse[newPos];
    }

    return result;
}

module.exports = caesar
