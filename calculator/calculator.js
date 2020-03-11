function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function sum(numbers) {
	let sum = 0;
	for (num of numbers) {
		sum += num;
	}
	return sum;
}

function multiply(numbers) {
	let product = 1;
	for (num of numbers) {
		product *= num;
	}
	return product;
}

function power(num, power) {
	let result = 1;
	for (let i = 0; i < power; i++) {
		result *= num;
	}
	return result;
}

// only deal with positive numbers and zero for now
function factorial(num) {
	if (num <= 0) {
		return 1;
	}
	let result = 1;
	for (let i = num; i > 0; i--) {
		result *= i;
	}
	return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}