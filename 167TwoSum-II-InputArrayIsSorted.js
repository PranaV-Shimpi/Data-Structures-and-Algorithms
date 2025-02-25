/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let l = 0;
    let r = nums.length -1;

    while(l < r) {
        let t = nums[l] + nums[r]
        if(t == target){
            return [l+1,r+1];
        }else if(t>target){
            r--;
        }else{
            l++;
        }
    }
     
};
