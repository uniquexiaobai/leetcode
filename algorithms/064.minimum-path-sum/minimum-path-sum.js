/**
 * @param {number[][]} grid
 * @return {number}
 */
 
 // 记忆化搜索
var minPathSum = function(grid) {
    var result = [];

	function _minPathSum(grid, i, j) {
		var ni = grid.length - 1;
		var nj = grid[ni].length - 1;

		if (!result[i]) result[i] = [];
		if (result[i][j]) return result[i][j];
		if (i >= ni && j >= nj) return grid[i][j];
		if (i >= ni) {
			result[i][j] = grid[i][j] + _minPathSum(grid, i, j + 1);
		} else if (j >= nj) {
			result[i][j] = grid[i][j] + _minPathSum(grid, i + 1, j);
		} else {
			result[i][j] = grid[i][j] + Math.min(_minPathSum(grid, i + 1, j), _minPathSum(grid, i, j + 1));
		}
		return result[i][j];
	}

	return _minPathSum(grid, 0, 0);
};

/* 动态规划
var minPathSum = function(grid) {
	var result = [[grid[0][0]]];
	var ni = grid.length - 1;
	var nj = grid[ni].length - 1;

	for (var i = 0; i <= ni; i ++) {
		if (!result[i]) result[i] = [];
		for (var j = 0; j <= nj; j ++) {
			if (i === 0 && j === 0) continue;
			if (i === 0) {
				result[i][j] = result[i][j - 1] + grid[i][j];
			} else if (j === 0) {
				result[i][j] = result[i - 1][j] + grid[i][j];
			} else {
				result[i][j] = grid[i][j] + Math.min(result[i][j - 1], result[i - 1][j]);
			}
		}
	}

	return result[ni][nj];
};
*/