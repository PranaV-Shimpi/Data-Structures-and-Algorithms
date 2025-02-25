/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length-1
    let max = 0;

    while(left < right){
        max = Math.max(max, (right-left)*Math.min(height[left],height[right]))

        if(height[left]<height[right]){
            left++;
        }else{
            right--
        }
    }

    return max;
};

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
