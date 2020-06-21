---
id: minimum-path-sum
title: 64. Minimum Path Sum
---

# Minimum Path Sum

给定一个包含非负整数的 _m_ x _n_ 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

**说明：**每次只能向下或者向右移动一步。

**示例:**

**输入:** \[ \[1,3,1], \[1,5,1], \[4,2,1] ] **输出:** 7 **解释:** 因为路径 1→3→1→1→1 的总和最小。



```javascript
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
```