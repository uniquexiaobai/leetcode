---
id: missing-number
title: 268. Missing Number
---

# Missing Number

给定一个包含 `0, 1, 2, ..., n` 中 _n_ 个数的序列，找出 0 .. _n_ 中没有出现在序列中的那个数。



**示例 1:**

**输入:** \[3,0,1] **输出:** 2

**示例 2:**

**输入:** \[9,6,4,2,3,5,7,0,1] **输出:** 8



**说明:**  
你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?



```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
	var res = nums.length;

	nums.forEach((num, index) => {
		res ^= index ^ num;
	});

	return res;
};
```