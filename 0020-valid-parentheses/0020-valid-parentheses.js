/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//     return s.match(/()/|/{}/|/[]/) ? true : false;
// };

const isValid = function(s) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            let popped = stack.pop();
            if (map[popped] !== s[i]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};