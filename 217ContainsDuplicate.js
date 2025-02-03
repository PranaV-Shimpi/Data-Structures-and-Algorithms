var containsDuplicate = function (nums) {
    // Approach 1: 

    // sort and then check if prev numb = next
    // Time complexity: O(nlogn)
    // Space complexity: O(n)

    // nums.sort((a, b) => a - b);

    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] === nums[i - 1]) {
    //         return true;
    //     }
    // }

    // return false;



    // Approach 2:  create a set and add nums into set if found same element then its duplicate
    // Time complexity: O(n)
    // Space complexity: O(n)

    //  const numSet = new Set();

    // for (const n of nums) {
    //     if (numSet.has(n)) {
    //         return true;
    //     }
    //     numSet.add(n);
    // }

    // return false;

    // Approach 3: If the length of the input array created by executing set is shorter than the original input array, it indicates that we have duplicate numbers.
    //     Time complexity: O(n)
    // Space complexity: O(n)

    const numSet = new Set(nums);
    return numSet.size < nums.length;
};
