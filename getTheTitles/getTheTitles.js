const getTheTitles = function (obj) {
    let result = [];
    for (let o of obj) {
        result.push(o.title);
    }
    return result;
}

module.exports = getTheTitles;
