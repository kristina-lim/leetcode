/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let trimmed = s.trim();
    return trimmed.length - trimmed.lastIndexOf(' ') - 1;
};