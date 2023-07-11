const removeFromArray = function(originalArray) {
    let arrayCopy = originalArray;
    for(let i = 1; i < arguments.length; i++) {
        let index = arrayCopy.indexOf(arguments[i]);
        if (index > -1) {
            arrayCopy.splice(index, 1);
        }
    }
    return arrayCopy;
};

// Do not edit below this line
module.exports = removeFromArray;
