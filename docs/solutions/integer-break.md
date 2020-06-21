---
id: integer-break
title: 343. Integer Break
---

# Integer Break

给定一个正整数 _n_，将其拆分为**至少**两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

**示例 1:**

**输入: **2 **输出: **1 **解释: **2 = 1 + 1, 1 × 1 = 1。

**示例 2:**

**输入: **10 **输出: **36 **解释: **10 = 3 + 3 + 4, 3 × 3 × 4 = 36。

**说明: **你可以假设 _n _不小于 2 且不大于 58。



```javascript
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
```