/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
     const INT_MIN = - (2 ** 31);
    const INT_MAX = (2 ** 31) - 1;
    if (dividend === INT_MIN && divisor === -1) return INT_MAX;
    if (dividend === INT_MIN && divisor === 1) return INT_MIN;

    const isNegative = (dividend < 0) !== (divisor < 0);

    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let quotient = 0;

    let i = 31;
    while(a >= b){
        if(i < 0)break;
        if((a >>> i) >= b){
            quotient += 1 << i;
            a -= b << i;
        }
        i--;
    }

    
    return isNegative ? -quotient : quotient;
};


// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.
// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = -2.33333.. which is truncated to -2.
