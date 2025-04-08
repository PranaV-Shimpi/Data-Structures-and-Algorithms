/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const charIndexS = {};
    const charIndexT = {};

    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in charIndexS)) {
            charIndexS[s[i]] = i;
        }

        if (!(t[i] in charIndexT)) {
            charIndexT[t[i]] = i;
        }

        if (charIndexS[s[i]] !== charIndexT[t[i]]) {
            return false;
        }
    }

    return true;
};

// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "foo", t = "bar"

// Output: false

// Explanation:

// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true
