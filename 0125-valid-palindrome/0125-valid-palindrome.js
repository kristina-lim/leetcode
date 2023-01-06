/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // /[^a-z0-9]/g: ^ symbol indicates negation, so whatever is followed after that it (a-z0-9) won't match any character thats in this set.
    // s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // return s === s.split('').reverse().join('');
    return s.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('') === s.toLowerCase().replace(/[^a-z0-9]/g, '');
};