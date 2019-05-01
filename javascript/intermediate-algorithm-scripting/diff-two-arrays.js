// INTERMEDIATE ALGORITHM SCRIPTING

// Diff Two Arrays
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
