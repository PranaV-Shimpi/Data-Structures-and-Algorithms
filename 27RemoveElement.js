/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
// Approach 1: 

    //   let left = 0; // pointer for the left side of the array
    //     let right = nums.length - 1; // pointer for the right side of the array

    //     while (left <= right) {
    //         if (nums[left] !== val) {
    //             left++; // Move left pointer forward if no match
    //         } else if (nums[left] === val) {
    //             // Swap nums[left] with nums[right]
    //             let temp = nums[left];
    //             nums[left] = nums[right];
    //             nums[right] = temp;
    //             right--; // Move right pointer backward after swapping
    //         }
    //     }
    //     return left; // The left pointer will be at the position where the new array ends

// Approach 2:
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};


// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).
