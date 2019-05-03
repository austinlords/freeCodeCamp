// DIFF TWO ARRAYS
/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. */
function diffArray(arr1, arr2) {
  var newArr = [];

  for (let element of arr1)
    if (!arr2.includes(element))
      newArr.push(element);

  for (let element2 of arr2)
    if (!arr1.includes(element2))
      newArr.push(element2);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
