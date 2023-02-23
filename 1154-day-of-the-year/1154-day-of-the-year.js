/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    return ((new Date(date) - new Date(date.slice(0,4))) + 86400000) / 86400000;
    // divide the result by the number of milliseconds in a day, to convert the difference back to days.
};