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
var minPathSum = function (grid) {
  if (!grid.length || !grid[0].length) return 0;

  var m = grid[0].length - 1,
    n = grid.length - 1,
    cache = {};

  function _minSum(i, j) {
    if (i === 0 && j === 0) return grid[0][0];
    if (i < 0 || j < 0) return Infinity;

    if (!cache[[i - 1, j]]) {
      cache[[i - 1, j]] = _minSum(i - 1, j);
    }
    if (!cache[[i, j - 1]]) {
      cache[[i, j - 1]] = _minSum(i, j - 1);
    }

    return Math.min(
      cache[[i - 1, j]] + grid[j][i],
      cache[[i, j - 1]] + grid[j][i]
    );
  }

  return _minSum(m, n);
};
```