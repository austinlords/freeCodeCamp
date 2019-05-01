function destroyer(arr, ...args) {
  for (let element of args)
    while (arr.includes(element)) 
      arr.splice(arr.indexOf(element),1);

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);