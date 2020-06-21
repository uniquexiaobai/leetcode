---
id: 4sum-ii
title: 454. 4Sum II
---

# 4Sum II

给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 `(i, j, k, l)` ，使得 `A[i] + B[j] + C[k] + D[l] = 0`。

为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -228 到 228 - 1 之间，最终结果不会超过 231 - 1 。

**例如:**

**输入:** A = \[ 1, 2] B = \[-2,-1] C = \[-1, 2] D = \[ 0, 2] **输出:** 2 **解释:** 两个元组如下: 1. (0, 0, 0, 1) -> A\[0] + B\[0] + C\[0] + D\[1] = 1 + (-2) + (-1) + 2 = 0 2. (1, 1, 0, 0) -> A\[1] + B\[1] + C\[0] + D\[0] = 2 + (-1) + (-1) + 0 = 0



```javascript
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
	if (A.length === 0) return 0;
	var map = {};
	var res = 0;

	for (var i = 0; i < A.length; i ++) {
		for (var j = 0; j < B.length; j ++) {
			var k = A[i] + B[j];

			map[k] = !map[k] ? 1 : map[k] + 1;
		}
	}
	for (i = 0; i < C.length; i ++) {
		for (j = 0; j < D.length; j ++) {
			var target = - C[i] - D[j];

			if (map[target]) 
				res += map[target];
		}
	}
	return res;
};
```