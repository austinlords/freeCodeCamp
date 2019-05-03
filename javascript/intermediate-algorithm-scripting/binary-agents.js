// INTERMEDIATE ALGORITHM SCRIPTING

// Binary Agents
function binaryAgent(str) {
  let arr = str.split(' ');
  arr = arr.map(element => parseInt(element,2).toString(10))
    .map(element => String.fromCharCode(element))
    .join('');

  return arr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");