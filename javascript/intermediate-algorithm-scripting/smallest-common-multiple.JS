// INTERMEDIATE ALGORITHM SCRIPTING

// Smallest Common Multiple
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