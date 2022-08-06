module.exports = function toReadable (number) {
  let upToTen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let upToTwenty = ['', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let upToHundred = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = 'hundred';
  let result = '';

  if (number === 0) {
    return 'zero';
  } else if (number < 10) {
    result = upToTen[number];
    return result;
  } else if (number >=10 && number < 20) {
    result = upToTwenty[number - 9];
    return result;
  } else if (number >= 20 && number < 100 && number % 10 === 0) {
    result = upToHundred[number / 10];
    return result;
  } else if (number > 20 && number < 100 && number % 10 !== 0) {
    number = number.toString().split('');
    result = upToHundred[number[0]] + ' ' + upToTen[number[1]];
    return result;
  } else if (number === 100) {
    return 'one' + ' ' + hundred;
  }
}