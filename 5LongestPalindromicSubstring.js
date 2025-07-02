/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  function expandAroundCenter(start, end) {
        while (start >= 0 && end < s.length && s[start] === s[end]) {
            start--
            end++
        }
       return s.slice(start + 1, end)

    }

    let maxLengthPal = ""
    for (let i = 0; i < s.length; i++) {
        let oddPalindrome = expandAroundCenter(i, i)
        let evenPalindrome = expandAroundCenter(i, i + 1)

        maxLengthPal = maxLengthPal.length >= oddPalindrome.length ? maxLengthPal : oddPalindrome
        maxLengthPal = maxLengthPal.length >= evenPalindrome.length ? maxLengthPal : evenPalindrome


    }
    return maxLengthPal
};

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
