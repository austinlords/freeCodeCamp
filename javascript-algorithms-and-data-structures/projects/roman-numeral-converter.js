// ROMAN NUMERAL CONVERTER
/* Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */
function convertToRoman(num) {
  if (num < 1 || num > 3999)
    return undefined;
  
  let numerals = [['I','V'],['X','L'],['C','D'],['M']];

  let arr = num
    .toString()
    .split('')
    .map(element => parseInt(element));
  
  while (arr.length < 4)
    arr.unshift(0);

  arr = arr.map((element, index) => {
    let ones = numerals[3-index][0];
    let fives = numerals[3-index][1];
    if (element <= 3 && element > 0) 
      return ones.repeat(element);
    if (element === 4)
      return ones + fives;
    if (element === 5)
      return fives;
    if (element > 5 && element < 9)
      return fives + ones.repeat(element - 5);
    if (element === 9)
      return ones + numerals[4-index][0];
  })

  return arr.join('');
}

console.log(convertToRoman(31));