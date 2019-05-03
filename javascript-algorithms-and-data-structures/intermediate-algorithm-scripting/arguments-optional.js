// ARGUMENTS OPTIONAL
/* Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined. */
function addTogether(a,b) {
  if (typeof a !== 'number') 
    return undefined;

  if (!b)
    return function(num) {
      if (typeof num !== 'number')
        return undefined;
      return a + num; 
    }

  if (typeof b !== 'number')
    return undefined;

  return a + b;
}

console.log(addTogether(2, '5'));