/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = new Set();

    while (n !== 1) {
        if (seen.has(n)) {
            return false;
        }
        seen.add(n);

        let next = 0;
        let num = n.toString().split('');
        for (let i = 0; i < num.length; i++) {
            next += Math.pow(num[i], 2);
        }
        n = next;
    }
    return true;
};