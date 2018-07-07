/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

	var arr = x.toString();
    var j = arr.length - 1;

    for (var i = 0, len = arr.length; i < len; i++) {
    	if (arr[i] !== arr[j - i]) return false;
    }

    return true;
};