/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    // all capital letters (^[A-Z]+$)
    // all lowercase letters (^[a-z])
    // starts with a capital letter and the rest are lowercase (^[A-Z][a-z]+$)
    // The + character in regular expressions is used to match one or more of the preceding character or group. In this case, it's used to match one or more of the characters inside the square brackets ([]).
    // The $ character is an anchor that matches the position before the end of the line. It is used to ensure that the match occurs at the end of the string.
    // So, +$ means match one or more of the characters inside the square brackets and make sure it occurs at the end of the string.
    // For example in this regex pattern ^[A-Z]+$ it will match one or more of the uppercase letters from A-Z and make sure it occurs at the end of the string .
    // And in the regex pattern ^[A-Z][a-z]+$ it will match one uppercase letter, one or more lowercase letters and make sure it occurs at the end of the string.
    return /^[A-Z]+$|^[a-z]+$|^[A-Z][a-z]+$/.test(word);
};