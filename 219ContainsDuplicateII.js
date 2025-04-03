

var containsNearbyDuplicate = function (nums, k) {
    const seen = {};

    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (seen.hasOwnProperty(val) && i - seen[val] <= k) {
            return true;
        }
        seen[val] = i;
    }

    return false;

};

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
// Example 3:

// Input: nums = [1,0,1,2]
// Output: 3
