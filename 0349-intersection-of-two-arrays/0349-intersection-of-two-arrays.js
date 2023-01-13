/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    // The spread operator sets elements into an array, 
    // the filter method is used to filter out the common elements between
    // set1 and set2. 
    // set2.has(num) is used to check whether the current element from set1 is also present in set2. If the element is present in both sets, it is included in the result array
    let result = [...set1].filter(num => set2.has(num));
    return result;
};