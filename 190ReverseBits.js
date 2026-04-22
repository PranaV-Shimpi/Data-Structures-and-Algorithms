/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
     let result = 0;

    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n = n >>> 1;
    }

    return result >>> 0;
};

// Example 1:

// Input: n = 43261596

// Output: 964176192

// Explanation:

// Integer	Binary
// 43261596	00000010100101000001111010011100
// 964176192	00111001011110000010100101000000
// Example 2:

// Input: n = 2147483644

// Output: 1073741822

// Explanation:

// Integer	Binary
// 2147483644	01111111111111111111111111111100
// 1073741822	00111111111111111111111111111110


// Iteration 1:
// Last bit of n → n & 1 → 1
// Shift result left → 0000 << 1 = 0000
// Add bit → 0000 | 1 = 0001
// Shift n → 1101 → 0110
// result = 0001
// n = 0110
