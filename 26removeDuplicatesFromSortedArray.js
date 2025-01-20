var removeDuplicates = function (nums) {
    if (!nums.length) {
        return 0;
    }

    let count = 0;
    for (let i = 0; i < nums.length; i++)
    {
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }

        else {
            nums[count] = nums[i];
            count++;
        }
    }

    return count;
}

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
