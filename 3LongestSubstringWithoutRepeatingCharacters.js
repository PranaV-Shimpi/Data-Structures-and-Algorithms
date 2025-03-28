
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLength = 0;
    let left = 0;
    let count = {};

     for (let right = 0; right < s.length; right++) {
        let c = s[right];
        count[c] = (count[c] || 0) + 1;

        while(count[c]>1){
            count[s[left]] -= 1;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
     }
     return maxLength;
};

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
