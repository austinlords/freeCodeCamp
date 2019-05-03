// SMALLEST COMMON MULTIPLE
/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */
function smallestCommons(arr) {
  let smaller = Math.min(arr[0],arr[1]);
  let larger = Math.max(arr[0],arr[1]);
  
  let rangeArr = [];
  for (let i = smaller; i <= larger; i++)
    rangeArr.push(i);

  function gcd(lg, sm) {
    if (sm === 0) 
      return lg;
    else
      return gcd(sm, lg%sm);
  }

  return rangeArr.reduce((lcm, num) => ((lcm * num) / gcd(lcm, num)), 1);
}

console.log(smallestCommons([1,6]));