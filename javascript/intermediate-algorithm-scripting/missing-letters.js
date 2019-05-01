// INTERMEDIATE ALGORITHM SCRIPTING 

// Missing Letters
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