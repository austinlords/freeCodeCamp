// INTERMEDIATE ALGORITHM SCRIPTING

// Wherefore art thou
function whatIsInAName(collection, source) {
  var arr = [];
  let keys = Object.keys(source);

  for (let obj of collection) {
    if (keys.every(key => obj[key] === source[key]))
      arr.push(obj);
  }
  
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });