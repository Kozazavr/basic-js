const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if(!Array.isArray(arr)) {
    throw new Error();
  }
  
  let arrNew = [];
  let i = 0;

  while (i < arr.length) {
    if (arr[i] == '--discard-next' && (i != arr.length - 1)) {
      if ((arr[i + 2] == '--discard-prev') || (arr[i + 2] == '--double-prev')) {
        i += 3;
      } else {
        i += 2; 
      }
    } else if (arr[i] == '--double-next' && (i != arr.length - 1)) {
        arrNew.push(arr[i + 1]);
        arrNew.push(arr[i + 1]);
        i += 2;
    } else if (arr[i] == '--discard-prev' && (i != 0)) {
        arrNew.pop();
        i++;
    } else if (arr[i] == '--double-prev' && (i != 0)) {
        arrNew.push(arrNew[arrNew.length - 1]);
        i++;
    } else if ((arr[i] == '--double-prev') || (arr[i] == '--discard-prev') && (i === 0)) {
        i++;
    } else if ((arr[i] == '--discard-next') || (arr[i] == '--double-next') && (i === arr.length - 1)) {
      return arrNew;
    } else {
        arrNew.push(arr[i]);
        i++;
    }
  }
  return arrNew;
}


