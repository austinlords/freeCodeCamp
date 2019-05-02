// INTERMEDIATE ALGORITHM SCRIPTING

// Sorted Union
function uniteUnique(...arr) {
  let newArr = [];
  arr.forEach(array => newArr.push(...array));

  return newArr
    .reverse()
    .filter((element, index) => !newArr.includes(element, index +1))
    .reverse();
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
