/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let balance = 0;
    // The function uses a variable balance to keep track of the count of 'L' and 'R' characters. It starts by initializing the balance to 0. Then it iterates through each character in the string. If the character is 'L', it increments the balance, otherwise it decrements the balance. If the balance becomes 0, it means that the number of 'L' and 'R' characters in the substring are equal, and the substring is balanced. It increments the count variable, which will store the maximum number of balanced substrings obtained.
    for (let i = 0; i < s.length; i ++) {
        if (s[i] === 'L') {
            balance++;
        } else {
            balance--;
        }
        if (balance === 0) {
            count++;
        }
    }
    return count;
};