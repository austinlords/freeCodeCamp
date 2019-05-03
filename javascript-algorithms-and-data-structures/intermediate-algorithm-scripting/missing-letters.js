// MISSING LETTERS
/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */
function fearNotLetter(str) {
  let code = str.charCodeAt(0);
  let splitArr = str.split('');

  for (let letter of splitArr) {
    if (letter.charCodeAt(0) !== code)
      return String.fromCharCode(code);
    code++;
  }
}

fearNotLetter("abce");