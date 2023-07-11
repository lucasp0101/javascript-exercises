const repeatString = function(strInput, nTimes) {
    let strOutput = '';
    
    if(nTimes < 0) {
        return 'ERROR';
    }

    for(let i = 0; i < nTimes; i++) {
        strOutput += strInput;
    }
    return strOutput;
};

// Do not edit below this line
module.exports = repeatString;
