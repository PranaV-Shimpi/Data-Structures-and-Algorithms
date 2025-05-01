/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

    const rows = new Array(numRows).fill('');
    let currentRow = 0;
    let goingDown = true;

    for (let char of s) {
        rows[currentRow] += char;

        if (currentRow === 0) goingDown = true;
        else if (currentRow === numRows - 1) goingDown = false;

        currentRow += goingDown ? 1 : -1;
    }

    return rows.join('');
};



// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"
