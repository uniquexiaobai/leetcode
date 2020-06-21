---
id: minimum-size-subarray-sum
title: 209. Minimum Size Subarray Sum
---

# Minimum Size Subarray Sum

给定一个含有 **n **个正整数的数组和一个正整数 **s ，**找出该数组中满足其和** ≥ s **的长度最小的连续子数组，并返回其长度**。**如果不存在符合条件的连续子数组，返回 0。

**示例:**

**输入:** `s = 7, nums = [2,3,1,2,4,3]` **输出:** 2 **解释: **子数组 `[4,3]` 是该条件下的长度最小的连续子数组。

**进阶:**

如果你已经完成了_O_(_n_) 时间复杂度的解法, 请尝试 _O_(_n_ log _n_) 时间复杂度的解法。



```javascript
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
	var len = nums.length;
	var i = 0, j = -1;
	var sum = 0;
	var res = len + 1;

	while (i < len) {
		if (j < len - 1 && sum < s) {
			j ++;
			sum += nums[j];
		} else {
			sum -= nums[i];
			i ++;
		}

		if (sum >= s) {
			res = Math.min(res, j - i + 1);
		}
	}
	return res === len + 1 ? 0 : res;
};
```