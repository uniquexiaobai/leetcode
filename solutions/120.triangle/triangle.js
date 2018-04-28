/**
 * @param {number[][]} triangle
 * @return {number}
 */
 
/* 记忆化搜索
var minimumTotal = function(triangle) {
	var result = [];

	function _bestWay(arr, i , j) {
		if (i === arr.length - 1) return arr[i][j];
		if (!result[i]) result[i] = [];
		if (!result[i][j]) 
			result[i][j] = arr[i][j] + Math.min(_bestWay(arr, i + 1, j), _bestWay(arr, i + 1, j + 1));
		return result[i][j];
	}

	return _bestWay(triangle, 0, 0);
};
*/

// 动态规划
var minimumTotal = function(triangle) {
	var result = [];
	var n = triangle.length - 1;

	result[n] = triangle[n];
	for (var i = n - 1; i >= 0; i --) {
		if (!result[i]) result[i] = [];
		for (var j = 0; j <= i; j ++) {
			result[i][j] = triangle[i][j] + Math.min(result[i + 1][j], result[i + 1][j + 1]);
		}
	}

	return result[0][0];
};