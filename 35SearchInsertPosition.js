var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;    
};



//Example 1:

//Input: nums = [1,3,5,6], target = 5
//Output: 2

//Example 2:

//Input: nums = [1,3,5,6], target = 2
//Output: 1

//Example 3:

//Input: nums = [1,3,5,6], target = 7
//Output: 4
