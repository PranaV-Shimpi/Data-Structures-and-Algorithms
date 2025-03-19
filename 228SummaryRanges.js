// Time Complexity : O(N)
// Space Complexity : O(1)
var summaryRanges = function(nums) {
    // Create a list of string to store the output result...
    const output = [];
    // Start traversing the array from idx = 0 till idx < sizeofarray in a while loop.
    let idx = 0;
    while(idx < nums.length) {
        // Initialize rangeStart and rangeEnd for identifying the continuous element in the array...
        let rangeStart, rangeEnd;
        // Mark the number at current index as the starting element of the range...
        rangeStart = nums[idx];
        // Traverse the array beginning from current index & find the last element whose difference from the previous element is exactly 1, i.e. nums[idx + 1] == nums[idx] + 1...
        while(idx+1 < nums.length && nums[idx+1] == nums[idx] + 1) 
            idx++;
        // Set this element as the last element of the range...
        rangeEnd = nums[idx];
        // If continuous elements aren't present...
        if(rangeStart == rangeEnd)
            output.push(rangeStart + "");
        // If continuous elements are present...
        else
            output.push(rangeStart + "->" + rangeEnd);
        idx++;          
    }
    return output;      // Return the output result list... 
};


// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
