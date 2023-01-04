/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total = nums.reduce((a,b) => a + b);
    let currTotal = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if ((total - nums[i]) / 2 === currTotal) return i;
        currTotal += nums[i];
    }
    return -1;
};