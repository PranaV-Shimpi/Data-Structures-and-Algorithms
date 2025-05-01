var reverse = function(x) {
     let isNegative = false;

    if (x < 0) {
        isNegative = true;
        x *= -1;
    }
    
    let res = 0;
    while (x > 0) {
        res = (res * 10) + (x % 10);
        x = Math.floor(x / 10);
    }
    
    if (res > Math.pow(2, 31) - 1) {
        return 0;
    }
    
    return isNegative ? -res : res;    
};


// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
