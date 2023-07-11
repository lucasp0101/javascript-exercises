const reverseString = function(strInput) {
    if (strInput === '') {
        return '';
    }
    let strOutput = strInput.split('').reverse().join('');
    return strOutput;
};

// Do not edit below this line
module.exports = reverseString;
