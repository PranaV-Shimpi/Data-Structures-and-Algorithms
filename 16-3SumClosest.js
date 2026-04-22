/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    // 1. sort array
    nums.sort((a, b) => a - b)

    let n = nums.length;

    // 2. Initialize with first possible sum
    let closestSum = nums[0] + nums[1] + nums[2];

    // 3. Fix one element

    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;

        // 4. two-pointer search
        while (left < right) {
            let currentSum = nums[i] + nums[left] + nums[right];

            // 5. Update closest sum if needed

            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            // 6. Move pointers
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                // Perfect match
                return currentSum;
            }
        }
    }
    return closestSum;
};


// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
