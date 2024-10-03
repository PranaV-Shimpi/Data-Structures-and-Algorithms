function isPowerOfTow(n){
    if(n<1){
        return false;
    }
    while(n>1){
        if(n%2!==0){
            return false
        }
        n/=2;
    }
    return true;
}

console.log(isPowerOfTow(64))   // true

// OR 

// using bitwise operator

function isPowerOfTow(n){
    if(n<1){
        return false;
    }
    return ( (n & (n-1)) === 0);
}

console.log(isPowerOfTow(64))  // true
