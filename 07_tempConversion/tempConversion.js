const convertToCelsius = function(fahrenheit) {
  temp = (fahrenheit-32)*5/9
  temp = parseFloat(temp.toFixed(1))
  return temp
};  

const convertToFahrenheit = function(celsius) {
  temp = celsius*1.8+32
  temp = parseFloat(temp.toFixed(1))
  return temp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
