/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // variable will be used as a pointer to keep track of the position where the next non-zero element should be placed
    let nonZero = 0;
    // i iterates through all the elements in array
    for (let i = 0; i < nums.length; i++) {
        // if the current element is not equal to zero, it will execute the code inside the if block.
        if (nums[i] !== 0) {
            // destructuring assignment
            // a feature in javascript that allows you to extract values from arrays, or properties from objects, into distinct variables
            // , it's swapping the values of the elements at the indices i and non_zero
            [nums[i], nums[nonZero]] = [nums[nonZero], nums[i]];
            nonZero++;
        }
    }
};

// In this specific line of code, it's swapping the values of the elements at the indices i and non_zero. It works by first creating an array [nums[i], nums[non_zero]] with the values of the elements at the indices i and non_zero. Then, it creates another array [nums[non_zero], nums[i]] with the values of the elements at the indices non_zero and i. Finally, it assigns the values of the second array to the variables in the first array (nums[i], nums[non_zero]) which effectively swaps the values of the elements at the indices i and non_zero.
// [nums[i], nums[nonZero]] = [nums[nonZero], nums[i]];