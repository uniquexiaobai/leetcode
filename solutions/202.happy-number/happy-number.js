/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
	var set = new Set();

	while (!set.has(n)) {
		if (n === 1) return true;
		set.add(n);
		n = (n + '').split('').reduce(function (prev, cur) {
			return prev + cur * cur; 
		}, 0);
	}
	return false;
};