const removeFromArray = function () {
    let args = [...arguments];
    let result = args[0];
    args.forEach(function (value, index) {
        if (index == 0) {
            // if this is the first index, continue with the loop
            return true;
        }
        let indexToRemove = result.indexOf(value);
        if (indexToRemove > -1) {
            result.splice(indexToRemove, 1);
        }
    });

    return result;
}

module.exports = removeFromArray
