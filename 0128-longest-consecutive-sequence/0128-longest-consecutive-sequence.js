/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  if (nums == null || nums.length === 0) return 0;
  
  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue;  // make sure starting from the beginning of sequence

    let currNum = num;
    let currMax = 1;

    while (set.has(currNum + 1)) {
      currNum++;
      currMax++;
    }
    max = Math.max(max, currMax);
  }

  return max;
}

// function longestConsecutive(nums) {
//   let max = 0;
//   const lens = {};
  
//   for (let n of nums) {
//     if (lens[n] != null) continue;

//     const l = lens[n - 1] || 0;   // left length
//     const r = lens[n + 1] || 0;   // right length

//     const len = l + r + 1;

//     // extend the length to the boundaries
//     lens[n - l] = len;
//     lens[n] = len;
//     lens[n + r] = len;

//     max = Math.max(max, len);
//   }

//   return max;
// }