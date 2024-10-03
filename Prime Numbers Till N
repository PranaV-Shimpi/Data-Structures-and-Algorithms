function PrimeNumbers(n) {
    let primeNos = [];
    
   
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

   
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primeNos.push(i);
        }
    }
    
    return primeNos;
}

console.log(PrimeNumbers(10));
