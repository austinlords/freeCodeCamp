// SUM ALL NUMBERS IN A RANGE
/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first. */
function sumAll(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr);i++) 
    sum += i;
  return sum;
}

sumAll([1, 4]);