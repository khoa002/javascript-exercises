let findTheOldest = function (people) {
    let oldest = people[0];
    for (let p of people) {
        let currentYear = new Date().getFullYear();
        let cAge = ('yearOfDeath' in oldest ? oldest.yearOfDeath : currentYear) - oldest.yearOfBirth;
        let pAge = ('yearOfDeath' in p ? p.yearOfDeath : currentYear) - p.yearOfBirth;
        if (pAge > cAge) {
            oldest = p;
        }
    }
    return oldest;
}

module.exports = findTheOldest
