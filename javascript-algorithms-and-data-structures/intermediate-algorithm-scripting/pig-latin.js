// PIG LATIN
/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase. */
function translatePigLatin(str) {
  let vRegex = /^[aeiou]/i;
  if (str.match(vRegex)) 
    return str + 'way';
  let cRegex = /^[^aeiou]+/i;
  let con = str.match(cRegex)[0];
  return str.slice(con.length) + con + 'ay';
}

translatePigLatin("california");

