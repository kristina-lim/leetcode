/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return s === s.split('').reverse().join('');
    // return s.split('').reverse().join('') === s.toLowerCase().replace(/ /g, '');


};