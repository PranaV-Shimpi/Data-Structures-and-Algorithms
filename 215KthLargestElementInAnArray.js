/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Time: O(n log n)
// Space : O(1)

var findKthLargest = function(nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k-1];
};

// we are only taking K number of elements instead of all N
// Time: O(n log k)
// Space : O(k) 

// no minHeap dirctly available in JS

var findKthLargest = function(nums, k) {
    const heap = new MinHeap();

    for (let num of nums) {
        heap.push(num);

        if (heap.size() > k) {
            heap.pop();
        }
    }

    return heap.peek();
};

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4
