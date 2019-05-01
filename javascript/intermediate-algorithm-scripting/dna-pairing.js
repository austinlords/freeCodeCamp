// INTERMEDIATE ALGORITHM SCRIPTING

// DNA Pairing
function pairElement(str) {
  let arr = str.split('');
  function compliment(pair) {
    if (pair === 'G') return 'C';
    if (pair === 'C') return 'G';
    if (pair === 'A') return 'T';
    if (pair === 'T') return 'A';
  }

  return arr.map(pair => [ pair, compliment(pair) ]);
}

pairElement("GCG");