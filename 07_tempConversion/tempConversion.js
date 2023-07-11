const convertToCelsius = function(temp) {
  if (typeof temp !== "number")
    throw new Error("Input must be a number");

  return Math.round((temp - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  if (typeof temp !== "number")
    throw new Error("Input must be a number");

  return Math.round((temp * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
