var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let l = 0
    let r = s.length-1;
    for(let i=0;i<s.length;i++){
        if(s[l] !== s[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
};

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
