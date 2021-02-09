const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) != 'string' || sampleActivity == null || !Number(sampleActivity) || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) {
    return false;
  }

  let result = Math.ceil(Math.log(sampleActivity / MODERN_ACTIVITY) / 0.693 * (-HALF_LIFE_PERIOD));
  return result;

};
