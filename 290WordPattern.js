/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    // split array of s
    let splitArrS = s.split(' ');

    // check if length of pattern is the same as s; otherwise return false;; please note that you do not compare with original string because it will give you length of the whole string (all charachters), once you split it creates array of words.
    if (pattern.length !== splitArrS.length) return false;

    // two hash tables to track mapping to each other
    let letterToWord = new Map();
    let wordToLetter = new Map();

    for ( let i = 0; i < pattern.length; i++) {
        //since we use split() method we do not need to use second for loop, just use i index for splitArrS
        let letter = pattern[i];
        let word = splitArrS[i];

        // creating not matching condition; it won't run on first itiration
        if (letterToWord.has(letter) && letterToWord.get(letter) !== word) return false;
        if (wordToLetter.has(word) && wordToLetter.get(word) !== letter) return false;

        // setting hash maps
        letterToWord.set(letter, word);
        wordToLetter.set(word, letter);
    }
    return true;
};

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"

// Output: true

// Explanation:

// The bijection can be established as:

// 'a' maps to "dog".
// 'b' maps to "cat".
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"

// Output: false

// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"

// Output: false
