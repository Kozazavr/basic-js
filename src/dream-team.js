const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if (members == null) {
    return false;
  }
  let arr = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string') {
      let nameCurrent = members[i].trim();
      arr.push(nameCurrent[0]);
    }
  }

  if (!arr) {
    return false;
  }

  let str = arr.join(',').toUpperCase().split(',').sort().join('');
  return str;
};
