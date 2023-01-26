/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    // result variable is initially set to a string,
    // it's used to store the final sum of the two nums
    let result = "";
    // carry variable is used to keep the two nums from adding each other
    let carry = 0;
    // i and j are variables to keep track of the position of the nums. 
    // it'll start from the rightmost position
    let i = num1.length - 1;
    let j = num2.length - 1;
    // use a while loop will continue until its added every digit
    // in both nums
    while (i >= 0 || j >= 0) {
        let a = i >= 0 ? num1.charAt(i) - '0' : 0;
        let b = j >= 0 ? num2.charAt(j) - '0' : 0;
        let sum = a + b + carry;
        result = (sum % 10) + result;
        carry = sum >= 10 ? 1 : 0;
        i--;
        j--;
    }
    if (carry) {
        result = carry + result;
    }
    return result;
};