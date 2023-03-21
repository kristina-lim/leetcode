/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const REGEX = new RegExp(`[${jewels}]`,'g');
    return stones.match(REGEX) ? stones.match(REGEX).length : 0;
};