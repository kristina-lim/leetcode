/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // let result = Array(numRows).fill([]);
    // for (let i = 0; i < numRows.length; i++) {
    //     result = numRows.push(i);
    // }
    // return result;
    var i = 0;
    var j = 0;
    // Create an array list to store the output result...
    var res = [];
    // For generating each row of the triangle...
    for (i = 0; i < numRows; i++) {
        res.push(Array(i + 1));       // Initialize the first row of the pascal triangle as {1}...
        for (j = 0; j <= i; j++) {
            // Primary...
            if (j === 0 || j === i) {
                res[i][j] = 1;
            }
            else {
                // Calculate the elements of a row, add each pair of adjacent elements of the previous row in each step of the inner loop.
                res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
            }
        }
    }
    return res;
};