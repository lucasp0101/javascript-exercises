const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number" || num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    
    if (num1 > num2)
        return num1 * (num1 + 1) / 2 - (num2 - 1) * num2 / 2;
    
    return num2 * (num2 + 1) / 2 - (num1 - 1) * num1 / 2;
};

// Do not edit below this line
module.exports = sumAll;
