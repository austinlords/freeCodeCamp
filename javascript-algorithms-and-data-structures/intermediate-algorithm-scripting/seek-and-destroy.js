// SEEK AND DESTROY
/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments. */
function destroyer(arr, ...args) {
  for (let element of args)
    while (arr.includes(element)) 
      arr.splice(arr.indexOf(element),1);

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);