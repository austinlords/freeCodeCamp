// INTERMEDIATE ALGORITHM SCRIPTING

// Sum All Numbers in a Range
function sumAll(arr) {
  let sum = 0;
  let smaller, larger;

  if (arr[0] > arr[1]) {
    smaller = arr[1];
    larger = arr[0];
  } else {
    smaller = arr[0];
    larger = arr[1];
  }

  for (let i = smaller; i <= larger; i++)
    sum += i;

  return sum;
}

sumAll([1, 4]);