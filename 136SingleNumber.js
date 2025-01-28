var singleNumber = function(nums) {
// solution: 1
//     let arr = nums.sort((a, b) => a - b); // Create a copy of the array and sort it

//   for (let i = 0; i <= nums.length - 1; i += 2) { // Iterate by 2
//     if (arr[i] !== arr[i + 1]) {
//       return arr[i];
//     }
//   }

//   return arr[arr.length - 1];  // Return the first non-matching pair
 
//  solution2:
    let result = 0;
    
    for (let num of nums) {
        result ^= num;
    }
    return result;

};
 

Example 1:

// Input: nums = [3,5,3,5,2,2,4]

// Output: 4
