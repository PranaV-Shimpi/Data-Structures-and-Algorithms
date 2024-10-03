Recursive Factorial of Number

const RecursiveFactorial = (n) => {
    
    if(n<2){return 1;}  OR if ( n === 0 ) return 1;
    
    (n!) = n* (n-1)!


    return n* RecursiveFactorial(n-1) ;
}

console.log(RecursiveFactorial(5)) // 120
console.log(RecursiveFactorial(4)) // 24
console.log(RecursiveFactorial(8)) // 40320
