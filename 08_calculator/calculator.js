const add = function(a, b) {
  let resultAdd = a + b
  return +resultAdd;
};

const subtract = function(a, b) {
  let resultSubtract = a - b
  return +resultSubtract;
};

const sum = function(arraySum) {
	let resultSum = 0
  for (let i = 0; i < arraySum.length; i++) {
    resultSum += arraySum[i]
  }
  return resultSum;
};

const multiply = function(arrayMultiply) {
  let resultMultiply = 1
  for (let i = 0; i < arrayMultiply.length; i++) {
    resultMultiply = resultMultiply * arrayMultiply[i]
  }
  return resultMultiply;
};

const power = function(number, power) { 
	let resultFunction = 1
  for (let i = 1; i <= power; i++) {
    resultFunction = resultFunction * number
  }
  return resultFunction;
};

const factorial = function(a) {
  if (a < 2) {
    return 1;
  }
  else {
    let resultFactorial = a
    for (let i = a; i > 1; i--) {
      resultFactorial = resultFactorial * (i - 1)
    }
    return resultFactorial;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
