/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
//     update position if current tank < 0
// check if total tank is < 0
// When total tank is positive, it means we have enough gas to over all the previous path.
    let curTank = 0, totalTank = 0, pos = 0;
    for (let i=0;i<gas.length;i++) {
        curTank+= gas[i] - cost[i];
        totalTank+= gas[i] - cost[i];
        if (curTank<0) {
            curTank = 0;
            pos = i+1;
        }
    }   
    return totalTank<0?-1:pos;
};