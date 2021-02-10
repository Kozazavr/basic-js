const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date == null) {
    return 'Unable to determine the time of year!';
  }
  
  let boolian = Object.prototype.toString.call(date) === '[object Date]';
  if (!boolian) {
    throw new Error();
  }

  const arr = ['winter', 'spring', 'summer', 'autumn'];
  let months = date.getMonth() + 1;
  let result;
  
  if (months < 3 || months == 12) {
    result = arr[0];
  } else if (months < 6) {
    result = arr[1];
  } else if (months < 9) {
    result = arr[2];
  } else if (months < 12) {
    result = arr[3];
  }
  return result;
};
