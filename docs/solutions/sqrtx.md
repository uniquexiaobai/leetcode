---
id: sqrtx
title: 69. Sqrt(x)
---

# Sqrt(x)

实现 `int sqrt(int x)` 函数。

计算并返回 _x_ 的平方根，其中 _x _是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

**示例 1:**

**输入:** 4 **输出:** 2

**示例 2:**

**输入:** 8 **输出:** 2 **说明:** 8 的平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。



```javascript
/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function(x) {
	var prev, 
		curr = 1;

	while (true) {
		prev = curr;
		curr = (curr + x / curr) / 2;

		if (Math.abs(prev - curr) < 1) {
			return Math.floor(curr);
		}
	}    
};

/*
var mySqrt = function(x) {
	if (x <= 1) return x;

    var i = 1, j = ~~(x / 2);

    for (; i <= j; i++) {
    	if (i * i > x) break;
    }

    return i - 1;
};
*/

```