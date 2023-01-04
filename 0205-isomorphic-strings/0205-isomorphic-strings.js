/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    return s.split('').every((e, idx) => s.indexOf(e) ===  t.indexOf(t[idx]));
};