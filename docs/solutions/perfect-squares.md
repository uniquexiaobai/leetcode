---
id: perfect-squares
title: 279. Perfect Squares
---

# Perfect Squares

给定正整数 _n_，找到若干个完全平方数（比如 `1, 4, 9, 16, ...`）使得它们的和等于_ n_。你需要让组成和的完全平方数的个数最少。

**示例 1:**

**输入:** _n_ = `12` **输出:** 3 **解释: **`12 = 4 + 4 + 4.`

**示例 2:**

**输入:** _n_ = `13` **输出:** 2 **解释: **`13 = 4 + 9.`



```javascript
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
	var queue = [[n, 0]];
	var visited = { n: true };

	while (queue.length) {
		var node = queue.shift();
		var num = node[0];
		var step = node[1];

		for (var i = 1; ; i ++) {
			var a = num - i * i;

			if (a < 0) break;
			if (a === 0) return step + 1;
			if (visited[a]) continue;
			queue.push([a, step + 1]);
			visited[a] = true;
		}
	}
};
```