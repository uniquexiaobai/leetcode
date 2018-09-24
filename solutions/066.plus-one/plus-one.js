/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var j = digits.length - 1;

    while (j >= 0) {
    	if (digits[j] === 9) {
    		digits[j--] = 0;
    	} else {
    		digits[j] += 1;
    		break;
    	}
    }
    if (digits[0] === 0) {
    	digits.unshift(1);
    }

    return digits;
};