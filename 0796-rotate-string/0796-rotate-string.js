/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    let shifted = s;
    for (let i = 0; i < s.length; i++) {
        if (shifted === goal) {
            return true;
        }
    shifted = shifted.slice(1) + shifted[0];
    }
    return false;
}