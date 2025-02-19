/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    // Approach 1:
    //  if (s.length === 0) {
    //     return true;
    // }
    
    // let sublength = s.length;
   
    // let j = 0; // Use j to track the index of s
    // for (let i = 0; i < t.length; i++) {
    //     if (s[j] === t[i]) {
    //         j++; // Move to the next character in s when there's a match
    //     }
    //     if (j === sublength) {
    //         return true; // All characters of s have been matched in t
    //     }
    // }
    // return false; // If the loop ends without matching all characters of s

    // Approach 2:
    let sp = 0;
    let tp = 0;

    while (sp < s.length && tp < t.length) {
        if (s[sp] === t[tp]) {
            sp++;
        }
        tp++;
    }

    return sp === s.length;    
};
