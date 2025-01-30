var titleToNumber = function (columnTitle) {
    let count = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        let currentVal = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
        count = count * 26 + currentVal
    }
    return count;
};


// Example 1:

// Input: columnTitle = "A"
// Output: 1
// Example 2:

// Input: columnTitle = "AB"
// Output: 28
// Example 3:

// Input: columnTitle = "ZY"
// Output: 701
