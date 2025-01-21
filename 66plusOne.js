var plusOne = function(digits) {
    let carry = 1;  // Start with a carry of 1 since we are adding 1 to the number
    
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += carry;  // Add carry to current digit
        if (digits[i] < 10) {
            carry = 0;  // No further carry is needed, break early
            break;
        }
        digits[i] = 0;  // Set the current digit to 0 if carry is 1
    }
    
    // If carry is still 1 after the loop, we manually insert 1 at the beginning of the array
    if (carry === 1) {
        digits.push(1);  // Instead of unshift, use push and reverse the array later
        digits.reverse();  // Reverse the array to reflect the correct order
    }
    
    return digits;
};

// Input: digits = [1,2,3]
// Output: [1,2,4]

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]

// Input: digits = [9]
// Output: [1,0]
