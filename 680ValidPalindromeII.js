/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const isPal = (i, j) => {
        while (i < j) {
            if (s[i] !== s[j]) return false;
            i++;
            j--;
        }
        return true;
    };

    let i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            return isPal(i + 1, j) || isPal(i, j - 1);
        }
        i++;
        j--;
    }
    return true;
};

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false
