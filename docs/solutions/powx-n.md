---
id: powx-n
title: 50. Pow(x, n)
---

# Pow(x, n)

实现 [pow(_x_, _n_)](https://www.cplusplus.com/reference/valarray/pow/) ，即计算 x 的 n 次幂函数。

**示例 1:**

**输入:** 2.00000, 10 **输出:** 1024.00000

**示例 2:**

**输入:** 2.10000, 3 **输出:** 9.26100

**示例 3:**

**输入:** 2.00000, -2 **输出:** 0.25000 **解释:** 2-2 = 1/22 = 1/4 = 0.25

**说明:**

-   \-100.0 &lt; _x_ &lt; 100.0
-   _n_ 是 32 位有符号整数，其数值范围是 \[−231, 231 − 1] 。



```javascript
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    
    if (n < 0) {
    	return 1 / myPow(x, -n);
    }

    var r = myPow(x, Math.floor(n / 2))

	return n & 1 ? r * r * x : r * r;
};
```