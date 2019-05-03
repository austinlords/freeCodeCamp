// INTERMEDIATE ALGORITHM SCRIPTING

// Sum all Prime Numbers
function sumPrimes(num) {
  let primeArr = [];

  function isPrime(n) {
    for (let i = 2; i <= n/2; i++) {
      if (n % i === 0)
        return false;
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      primeArr.push(i);
  }

  return primeArr.reduce((a, c) => c + a);
}

sumPrimes(100);