/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    return String.fromCharCode(t.split('').reduce((a, b) => a ^= b.charCodeAt(), 0) ^ s.split('').reduce((a, b) => a ^= b.charCodeAt(), 0));
}