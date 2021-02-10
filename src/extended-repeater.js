const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //repeatTimes sets the number of repetitions of the str;
  //separator is a string separating repetitions of the str;
  //addition is an additional string that will be added to each repetition of the str;
  //additionRepeatTimes sets the number of repetitions of the addition;
  //additionSeparator is a string separating repetitions of the addition.
  if (options.repeatTimes == undefined && options.additionRepeatTimes == undefined) {
    return str + options.addition;
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = '|';
  }
  if (options.separator == undefined) {
    options.separator = '+';
  }
  if (options.addition === null) {
    options.addition = 'null';
  }
  let arrAdd = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
      arrAdd.push(options.addition);
  }
  let strAdd = arrAdd.join(options.additionSeparator);
  let str2 = str + strAdd;
  let arrStr = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    arrStr.push(str2);
  }
   return arrStr.join(options.separator);

};
  