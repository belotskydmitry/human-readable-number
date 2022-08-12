const arr = new Map([
  [1, 'one'], [2, 'two'], [3, 'three'], [4, 'four'], [5, 'five'], [6, 'six'], [7, 'seven'], [8, 'eight'],
  [9, 'nine'], [10, 'ten'], [11, 'eleven'], [12, 'twelve'], [13, 'thirteen'], [15, 'fifteen'], [18, 'eighteen'],
  [20, 'twenty'], [30, 'thirty'], [40, 'forty'], [50, 'fifty'], [80, 'eighty']
]);
module.exports = function toReadable (number) {
  let arrNum = [...number + ''].map((numb) => parseInt(numb));
  switch(arrNum.length) {
  case 1:
    return number === 0 ? 'zero' : arr.get(number);
  case 2:
    return tens(arrNum, number);
  case 3:
    return hundreds(arrNum, number);
  case 4:
    return arr.get(arrNum[0]) + ' thousand ' + hundreds([arrNum[1], arrNum[2], arrNum[3]]);
  case 5:
    return tens([arrNum[0], arrNum[1]], arrNum[0]*10+arrNum[1]) + ' thousand ' + hundreds([arrNum[2], arrNum[3], arrNum[4]]);
  case 6:
    return hundreds([arrNum[0], arrNum[1], arrNum[2]]) + ' thousand ' + hundreds([arrNum[3], arrNum[4], arrNum[5]]);
  }
}
function tens(array, number) {
  if (array[0] === 1)
  return arr.has(number) ? arr.get(number) : arr.get(array[1]) + 'teen';
  else
  return arr.has(number) ? arr.get(number) : (arr.has(array[0] * 10) ? arr.get(array[0] * 10) : arr.get(array[0]) + 'ty') + (array[1] !== 0 ? ' ' + arr.get(array[1]) : '');
}
function hundreds(array) {
  return arr.get(array[0]) + ' hundred' + (array[1] !==0 ? ' ' + tens([array[1], array[2]], array[1]*10+array[2]) : '') + (array[1] === 0 && array[2] !==0 ? ' ' + arr.get(array[2]) : '');
}