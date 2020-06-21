---
id: triangle
title: 120. Triangle
---

# Triangle

给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

**相邻的结点 **在这里指的是 `下标` 与 `上一层结点下标` 相同或者等于 `上一层结点下标 + 1` 的两个结点。



例如，给定三角形：

\[ \[**2**], \[**3**,4], \[6,**5**,7], \[4,**1**,8,3] ]

自顶向下的最小路径和为 `11`（即，**2 **+ **3** + **5 **+ **1** = 11）。



**说明：**

如果你可以只使用 _O_(_n_) 的额外空间（_n_ 为三角形的总行数）来解决这个问题，那么你的算法会很加分。



```javascript
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
```