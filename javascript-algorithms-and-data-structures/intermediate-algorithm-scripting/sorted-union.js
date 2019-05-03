// SORTED UNION
/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order. */
function uniteUnique(...arr) {
  let newArr = [];
  arr.forEach(array => newArr.push(...array));

  return newArr
    .reverse()
    .filter((element, index) => !newArr.includes(element, index +1))
    .reverse();
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
