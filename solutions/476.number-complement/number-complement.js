/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    var s = num.toString(2).split('').map(function (v) {
        return v == 1 ? 0 : 1;
    }).join('');
    
    return parseInt(s, 2); 
};