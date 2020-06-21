---
id: factorial-trailing-zeroes
title: 172. Factorial Trailing Zeroes
---

# Factorial Trailing Zeroes

给定一个整数 _n_，返回 _n_! 结果尾数中零的数量。

**示例 1:**

**输入:** 3 **输出:** 0 **解释:** 3! = 6, 尾数中没有零。

**示例 2:**

**输入:** 5 **输出:** 1 **解释:** 5! = 120, 尾数中有 1 个零.

**说明: **你算法的时间复杂度应为 _O_(log _n_)_ _。



```javascript
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
	var res = 0;

	while (n >= 5) {
		n = ~~(n / 5);
		res += n;
	}

	return res;
};
```