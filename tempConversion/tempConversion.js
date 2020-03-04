/**
 * Convert a temperature from Fahrenheit to Celsius
 * [C] = ([F] - 32) * 5/9
 * Result is rounded to one decimal place: 00.0
 */
const ftoc = function (temperature) {
  let result = (temperature - 32) * (5 / 9);
  return parseFloat(result.toFixed(1));
}

/**
 * Convert a temperature from Celsius to Fahrenheit
 * [F] = [C] * ​9/5 + 32
 * Result is rounded to one decimal place: 00.0
 */
const ctof = function (temperature) {
  let result = temperature * (9 / 5) + 32;
  return parseFloat(result.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
