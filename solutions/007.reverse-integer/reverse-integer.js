/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    function isLegal(n) {
        return n <= Math.pow(2, 31) - 1 && n >= -Math.pow(2, 31);
    }
    
    if (!isLegal(x)) return 0;
    
    var sign = 0;
    var arr = x.toString().split('');
    
    if (arr[0] === '-') {
        sign = 1;
        arr.shift();
    }
    arr.reverse();
    
    while (arr.length) {
        if (arr[0]) {
            break;
        } else {
            arr.shift();
        }
    }
    
    var str = arr.join('');
    var res = sign ? -str : +str;
    
    if (!isLegal(res)) return 0;
    return res;
};