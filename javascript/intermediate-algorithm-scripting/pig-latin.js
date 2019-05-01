// INTERMEDIATE ALGORITHM SCRIPTING

// Pig Latin
function translatePigLatin(str) {
  let vRegex = /^[aeiou]/i;
  if (str.match(vRegex)) 
    return str + 'way';
  let cRegex = /^[^aeiou]+/i;
  let con = str.match(cRegex)[0];
  return str.slice(con.length) + con + 'ay';
}

translatePigLatin("california");

