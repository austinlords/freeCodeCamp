// INTERMEDIATE ALGORITHM SCRIPTING 

// Search and Replace
function myReplace(str, before, after) {
  let isUpper = (before[0] === before[0].toUpperCase());
  if (isUpper)
    after = after[0].toUpperCase() + after.slice(1);
  return str.replace(before, after);
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));