/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // let total = 1n;
    // number = BigInt(digits.join(''));
    // total += number;
    // let result = total.toString().split('');
    // return result;
    // not right... but good job for trying kris
    // return (String(+digits.join('') + 1)).split('');
    return (BigInt(digits.join('')) + 1n).toString().split('');
};