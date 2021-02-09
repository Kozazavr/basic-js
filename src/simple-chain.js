const CustomError = require("../extensions/custom-error");

const chainMaker = {

  arr: [],

  getLength() {  //возвращает текущую длину цепочки в виде числа;
    return this.arr.length;
  },
  addLink(value) { //добавляет в цепочку ссылку, содержащую строковое представление значения;
    if (value == null) {
      this.arr.push('null');
      return this;
    }
    if (value === undefined) {
      this.arr.push(' ');
      return this;
    }
    this.arr.push(value);
    return this;
  },
  removeLink(position) { //удаляет звено цепи в указанном положении;
    if ((position < 1) || (position > this.getLength())) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() { //в обратном направлении цепь;
    this.arr.reverse();
    return this;
  },
  finishChain() { //завершает цепочку и возвращает ее. ( GHI )~~( NaN )~~( false )
    let str = '( ' + this.arr.join(' )~~( ') + ' )';
    this.arr = [];
    return str;
  }
};

module.exports = chainMaker;
