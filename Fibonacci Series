// 0, 1,  1,  2,  3,  5, 8, 13, 21, 34, ………

function Fibonacci(n){
    let fib = [0,1]
    
    if(n==0){
        return fib[0];
    }
    if(n==1){
        return fib[1];
    }
    
    for(i=2;i<n;i++){
      fib[i]=fib[i-1]+fib[i-2]
    }
  return fib;
}

console.log(Fibonacci(10))   // [ 0, 1,  1,  2,  3,  5, 8, 13, 21, 34 ]
