---
id: sum-of-two-integers
title: 371. Sum of Two Integers
---

# Sum of Two Integers

**不使用**运算符 `+` 和 `-` ​​​​​​​，计算两整数 ​​​​​​​`a` 、`b` ​​​​​​​之和。

**示例 1:**

**输入: **a = 1, b = 2 **输出: **3

**示例 2:**

**输入: **a = -2, b = 3 **输出: **1



```javascript
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
	if (!a || !b) return a ^ b;

	var tmp;

    while (b) {
    	tmp = a ^ b;
    	b = (a & b) << 1;
    	a = tmp;
    }

    return a;
};
```