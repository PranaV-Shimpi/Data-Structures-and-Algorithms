/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let res = "1";
    for (let i = 1; i < n; i++) {
        let temp = "", count = 1;
        for (let j = 1; j < res.length; j++) {
            if (res[j] === res[j - 1]) {
                count++;
            } else {
                temp += count + res[j - 1];
                count = 1;
            }
        }
        temp += count + res[res.length - 1];
        res = temp;
    }
    return res;
};

// Example 1:

// Input: n = 4

// Output: "1211"

// Explanation:

// countAndSay(1) = "1"
// countAndSay(2) = RLE of "1" = "11"
// countAndSay(3) = RLE of "11" = "21"
// countAndSay(4) = RLE of "21" = "1211"
// Example 2:

// Input: n = 1

// Output: "1"

// Explanation:

// This is the base case.
