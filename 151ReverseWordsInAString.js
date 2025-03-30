/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {

    //=========== Solution 1 : =============

    // let words = s.split(' ');
    // let res = [];

    // for(let i= words.length-1; i>=0; i--){
    //     if(words[i]){
    //         res.push(words[i])
    //     }
    // }

    // return res.join(' ');

    //=========== Solution 2 : =============

    // let words = s.split(' ').filter(word => word !== "");
    // let left = 0;
    // let right = words.length - 1;

    // while (left < right) {
    //     [words[left], words[right]] = [words[right], words[left]];
    //     left++;
    //     right--;
    // }

    // return words.join(' ');

    //=========== Solution 3 : =============

    return s.split(' ').filter(word => word.length > 0).reverse().join(' ');
};


// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.





