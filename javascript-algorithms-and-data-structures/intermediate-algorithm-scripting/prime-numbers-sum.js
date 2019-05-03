// SUM ALL PRIMES
/* Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime. */
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