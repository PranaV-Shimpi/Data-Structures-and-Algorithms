var isMatch = function(s, p) {
    const a = s.length;
    const b = p.length;

    let prev = new Array(b+1).fill(false);
    let curr = new Array(b+1).fill(false);

    prev[0] = true;

    for(let k=1; k<=b; k++){
        if(p[k-1] === '*') prev[k] = prev[k-1];
    }

    for(let i=1; i<=a; i++){
        curr[0] = false;

        for(let j=1; j<=b; j++){
            const pc = p[j-1];
            const sc = s[i-1];

            if(pc === '*'){
                curr[j] = curr[j-1] || prev[j];
            }else if(pc === '?' || pc === sc){
                curr[j] = prev[j-1];
            }else{
                curr[j] = false;
            }
        }
        [prev, curr] = [curr, prev];
    }
    return prev[b];
};

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "*"
// Output: true
// Explanation: '*' matches any sequence.
// Example 3:

// Input: s = "cb", p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
