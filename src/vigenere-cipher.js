const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(boolean) {
    this.boolean = boolean;
  }

  encrypt(str, key) {

    if(!str || !key) {
      throw new Error();
    }

    let arr = [];
    let strForEncrypt = str.toUpperCase();
    let keyUpper = key.toUpperCase();
    for (let i = 0, j = 0; i < str.length; i++) {
      if (strForEncrypt.charCodeAt(i) >= '65' && strForEncrypt.charCodeAt(i) <= '90') {
        arr[i] = String.fromCharCode((26 + strForEncrypt.charCodeAt(i) - 65 + (keyUpper.charCodeAt(j % keyUpper.length) - 65)) % 26 + 65);
        j++;
      } else {
        arr[i] = strForEncrypt[i];
      }
    }
    if (this.boolean != undefined) {
      return arr.reverse().join('');
    }
    return arr.join('');
  }    

  decrypt(str, key) {
 
    if(!str || !key) {
      throw new Error();
    }

    let arr = [];
    let strForDecrypt = str.toUpperCase();
    let keyUpper = key.toUpperCase();
    for (let i = 0, j = 0; i < str.length; i++) {
      if (strForDecrypt.charCodeAt(i) >= '65' && strForDecrypt.charCodeAt(i) <= '90') {
        arr[i] = String.fromCharCode((26 + strForDecrypt.charCodeAt(i) - 65 - (keyUpper.charCodeAt(j % keyUpper.length) - 65)) % 26 + 65);
        j++;
      } else {
        arr[i] = strForDecrypt[i];
      }
    }
    if (this.boolean != undefined) {
      return arr.reverse().join('');
    }
    return arr.join('');
  }
}

module.exports = VigenereCipheringMachine;
