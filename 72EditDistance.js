/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let n = word1.length;
    let m = word2.length;

    if (n < m) {
        [n, m] = [m, n];
        [word1, word2] = [word2, word1];
    }

    const dp = new Int32Array(m + 1);
    for (let j = 0; j <= m; j++) {
        dp[j] = m - j;
    }

    for (let i = n - 1; i >= 0; i--) {
        let prev = dp[m];

        dp[m] = n - i;

        for (let j = m - 1; j >= 0; j--) {
            const tmp = dp[j];

            if (word1[i] === word2[j]) {
                dp[j] = prev;
            } else {
                dp[j] = 1 + Math.min(dp[j], dp[j + 1], prev);
            }

            prev = tmp;
        }
    }

    return dp[0];
};


// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')
