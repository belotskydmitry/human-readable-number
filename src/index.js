module.exports = function toReadable (number) {
  let upToTen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let upToTwenty = ['', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let upToHundred = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = 'hundred';
  let result = '';
  let numberString = number.toString();

  if (number === 0) {
    return 'zero';
  } else if (number < 10) {
    result = upToTen[number];
    return result;
  } else if (number >=10 && number < 20) {
    result = upToTwenty[number - 9];
    return result;
  }
}
