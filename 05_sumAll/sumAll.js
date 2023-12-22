const sumAll = function(a, b) {
    // create variable to hold the sum
    let sum = 0
    let minValue = Math.min(a, b)
    let maxValue = Math.max(a, b)
    // if a number is negative or a non-number return ERROR
    if (
        a < 0 ||
        typeof a !== "number" ||
        b < 0 ||
        typeof b !== "number"
        ) {
            return "ERROR";
        }
    // find the smallest and start the loop from it
    else {
        for (let i = minValue; i <= maxValue; i++) {
            sum = sum + i;         
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;

