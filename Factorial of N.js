function Factorial(n){
  let sum = 1;
  for(i=2;i<=n;i++){
   sum*=i;
  }
  return sum 
}

console.log(Factorial(5))   // 120
