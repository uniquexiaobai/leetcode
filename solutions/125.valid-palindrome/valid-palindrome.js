/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	if (s === '') return true;
	var str = s.toLowerCase().replace(/[^0-9a-z]/g, '');
	var len = str.length;

	for (var i = 0; i < len >> 1; i ++) {
		if (str[i] !== str[len - i - 1]) return false;
	}
	return true;
};

/*
var isPalindrome = function(s) {
	if (s === '') return true;
	var arr = s.toLowerCase().split('');
	var i = 0, j = s.length - 1;
	
	while (i < j) {
		if (/[^0-9a-z]/.test(arr[i])) {
			i ++;
		} else if (/[^0-9a-z]/.test(arr[j])) {
			j --;
		} else if (arr[i] === arr[j]) {
			i ++;
			j --;
		} else {
			return false;
		}
	}	
	return true;
};
*/
