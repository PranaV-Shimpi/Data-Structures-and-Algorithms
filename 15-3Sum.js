/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
      let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let total = nums[i] + nums[j] + nums[k];

            if (total > 0) {
                k--;
            } else if (total < 0) {
                j++;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                j++;

                while (nums[j] === nums[j-1] && j < k) {
                    j++;
                }
            }
        }
    }
    return res;    
};

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
