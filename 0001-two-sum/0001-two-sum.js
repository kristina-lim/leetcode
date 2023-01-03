/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // Create a map to store the indices of the array elements
  const indices = new Map();
  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Check if target - nums[i] is in the map
    if (indices.has(target - nums[i])) {
      // If it is, return the indices of the pair
      return [indices.get(target - nums[i]), i];
    }
    // Otherwise, add the current element to the map
    indices.set(nums[i], i);
  }
  // If no pair is found, return an empty array
  return [];
};