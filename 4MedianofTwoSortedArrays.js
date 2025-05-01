 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // Approach1: 
    // const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    // const len = merged.length;
    // const mid = Math.floor(len / 2);
    // return len % 2 === 0
    //     ? (merged[mid - 1] + merged[mid]) / 2
    //     : merged[mid];

    // Approach2:
    const m = nums1.length, n = nums2.length;
    const total = m + n;
    let i = 0, j = 0;
    let prev = 0, current = 0;

    for (let count = 0; count <= Math.floor(total / 2); count++) {
        prev = current;
        if (i < m && j < n) {
            current = nums1[i] <= nums2[j] ? nums1[i++] : nums2[j++];
        } else if (i < m) {
            current = nums1[i++];
        } else {
            current = nums2[j++];
        }
    }

    return total % 2 === 1 ? current : (prev + current) / 2;

};

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
