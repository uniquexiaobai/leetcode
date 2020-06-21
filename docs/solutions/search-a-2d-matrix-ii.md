---
id: search-a-2d-matrix-ii
title: 240. Search a 2D Matrix II
---

# Search a 2D Matrix II

编写一个高效的算法来搜索 _m_ x _n_ 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

-   每行的元素从左到右升序排列。
-   每列的元素从上到下升序排列。

**示例:**

现有矩阵 matrix 如下：

\[ \[1, 4, 7, 11, 15], \[2, 5, 8, 12, 19], \[3, 6, 9, 16, 22], \[10, 13, 14, 17, 24], \[18, 21, 23, 26, 30] ]

给定 target = `5`，返回 `true`。

给定 target = `20`，返回 `false`。



```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  var x = 0,
    y = matrix[0].length - 1,
    mid;
  while (x < matrix.length && y >= 0) {
    mid = matrix[x][y];
    if (target === mid) {
      return true;
    } else if (target < mid) {
      y -= 1;
    } else {
      x += 1;
    }
  }

  return false;
};
```