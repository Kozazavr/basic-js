const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let countTurns = 2 ** disksNumber - 1;
  const secundsInHour = 3600;
  let time = Math.floor(countTurns * secundsInHour / turnsSpeed);
  let result = {turns: countTurns, seconds: time};
  return result;
};
