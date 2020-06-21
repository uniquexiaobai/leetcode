---
id: power-of-two
title: 231. Power of Two
---

# Power of Two

给定一个整数，编写一个函数来判断它是否是 2 的幂次方。

**示例 1:**

**输入:** 1 **输出:** true **解释: **20 = 1

**示例 2:**

**输入:** 16 **输出:** true **解释: **24 = 16

**示例 3:**

**输入:** 218 **输出:** false



```javascript
/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function(n) {
    return n > 0 && !(n & (n - 1));
};

/*
var isPowerOfTwo = function(n) {
    var count = 0;

    while (n > 0) {
    	count += (n & 1);
    	n >>= 1;
    }

    return count === 1;
};
*/
```