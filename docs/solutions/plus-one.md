---
id: plus-one
title: 66. Plus One
---

# Plus One

给定一个由**整数**组成的**非空**数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储**单个**数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

**示例 1:**

**输入:** \[1,2,3] **输出:** \[1,2,4] **解释:** 输入数组表示数字 123。

**示例 2:**

**输入:** \[4,3,2,1] **输出:** \[4,3,2,2] **解释:** 输入数组表示数字 4321。



```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var flag = 0,
    	digit,
    	len = digits.length;

    for (var i = len - 1; i >= 0; i--) {
    	digit = digits[i] + flag + (i === len - 1 ? 1 : 0);

    	if (digit < 10) {
    		digits[i] = digit;
    		return digits;
    	}

    	digits[i] = digit % 10;
    	flag = Math.floor(digit / 10);
    }

    if (flag) {
    	digits.unshift(flag);
    }

    return digits;
};
```