/**
 * @param {number} n
 * @return {number}
 */
 
/* 记忆化搜索
var integerBreak = function(n) {
	var result = [];

	function _breakInteger(n) {
		if (n === 1) return 1;
		if (result[n]) return result[n];

		var max = 1;
		for (var i = 1; i <= n - 1; i ++) {
			max = Math.max(i * _breakInteger(n - i), i * (n - i), max);
		}
		result[n] = max;
		return max;
	}

	return _breakInteger(n);
};
*/

// 动态规划
var integerBreak = function(n) {
    var result = [];

	result[1] = 1;
	for (var i = 2; i <= n; i ++) {
		var max = 1;

		for (var j = 1; j <= i - j; j ++) {
			max = Math.max(j * result[i - j], j * (i - j), max);
		}
		result[i] = max;
	}

	return result[n];
};